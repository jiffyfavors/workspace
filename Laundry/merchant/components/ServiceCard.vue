<template>
  <v-card max-width="100%" outlined @click.stop="dialog = true">
    <v-card-title>{{item.name}}</v-card-title>
    <v-list-item dense>
           
      <v-list-item-content>
            <span style="font-style:italic;">
                    <small v-html="item.desc"></small>
                </span>
        <span class="caption grey--text">From</span>
        <div class="ml-2 red--text subtitle-1">
          <strong>{{ item.price | toPHP }} </strong> per {{item.unit}} </div>
      </v-list-item-content>
      <v-list-item-avatar v-if="item.img.length>0" tile size="100">
        <v-img :src="item.img"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-app-bar app dark color="rgba(100,115,201)" dense>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add to Cart</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <strong>{{ item.name }}</strong>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="caption grey--text">From</span>
                <span class="red--text">{{ item.price | toPHP }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list v-for="(option, index) in item.options" :key="index" dense flat subheader class="mb-5">
            <v-list-item v-if="option.min == 1 && option.max == 1" dense>
              <v-list-item-content>
                <v-list-item-title>{{ option.name }}</v-list-item-title>
                <v-list-item-subtitle>One is required</v-list-item-subtitle>
                <v-list flat dense>
                  <v-list-item-group v-model="add_on_data[option.name.replace(' ', '').toLowerCase()]" mandatory color="deep-purple accent-4">
                    <v-list-item v-for="(i, e) in option.values" :key="e+index" :value="i">
                      <v-list-item-content>
                        <v-list-item-title>{{i.name}}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action-text v-if="i.price>0"> + {{i.price|toPHP}} </v-list-item-action-text>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="option.max > 1">
              <v-list-item-content>
                <v-list-item-title> {{ option.name }} - Optional </v-list-item-title>
                <v-list-item-subtitle> Select up to {{ option.max }} </v-list-item-subtitle>
                <v-list flat dense>
                  <v-list-item-group v-model="add_on_data[option.name.replace(' ', '').toLowerCase()]" multiple :min="option.min" :max="option.max">
                    <template v-for="(_item, i) in option.values">
                      <v-divider v-if="!_item" :key="`divider-${i}`"></v-divider>
                      <v-list-item v-else :key="`item-${i}`" :value="_item" active-class="deep-purple--text text--accent-4">
                        <template v-slot:default="{ active, toggle }">
                          <v-list-item-action>
                            <v-checkbox :input-value="active" :true-value="_item" color="deep-purple accent-4" @click="toggle"></v-checkbox>
                          </v-list-item-action>
                          <v-list-item-content>
                            <v-list-item-title>{{_item.name}}</v-list-item-title>
                          </v-list-item-content>
                          <v-list-item-action-text v-if="_item.price>0"> + {{_item.price|toPHP}} </v-list-item-action-text>
                        </template>
                      </v-list-item>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-list-item-content>
            </v-list-item>
            <v-divider /> </v-list>
          <v-divider />
          <v-toolbar dense max-width="100%" class="shopresponsive">
            <span class="caption grey--text"> Qty </span>
            <v-icon class="ma-2 white--text" color="green" @click="qty = qty < 1 ? 1 : qty - 1"> mdi-minus </v-icon>
            <strong>{{ qty }}</strong>
            <v-icon class="ma-2 white--text" color="green" @click="qty = qty + 1"> mdi-plus </v-icon>
            <span class="caption grey--text">Total</span>
            <div class="ml-2 red--text subtitle-1">
              <strong>{{ computeTotal(addToCartItem) | toPHP }} </strong>
            </div>
            <v-spacer></v-spacer>
            <v-btn tile :disabled="qty < 1" outlined color="red" small class="ml-1" align-end @click.stop="addToCart">Done</v-btn>
          </v-toolbar>
        </v-content>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import deepclone from 'lodash.clonedeep'
export default {
  props: {
    item: Object
  },
  data() {
    return {
      dialog: false,
      add_on_data: {},
      instructions: '',
      qty: 1,
    }
  },
  computed: {
    addToCartItem() {
      try {
        let item = {
          info: this.item,
          qty: this.qty,
          src: 'web-pos',
          add_ons: this.addClean(this.add_on_data),
          instructions: this.instructions
        }
        return item
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.generateAddOns()
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/addCart', this.addToCartItem)
      this.dialog = false
    },

    addClean(data) {
      data = deepclone(data)
      Object.entries(data).map(([key, val]) => {
        if (Array.isArray(val) && val.length <= 0) delete data[key]
        if (Object.keys(val).length === 0 && val.constructor === Object) delete data[key]
      })
      return data
    },
    generateAddOns() {
      const addons = {}
      for (let i = 0; i < this.item.options.length; i++) {
        addons[this.item.options[i].name.replace(' ', '').toLowerCase()] = []
      }
      this.add_on_data = addons
    },
    computeTotal(item) {
      let total = 0
      total = total + item.info.price * item.qty
      const addons = Object.values(item.add_ons)
      addons.forEach((a) => {
        if (Array.isArray(a)) {
          a.forEach((b) => {
            total = total + b.price * item.qty
          })
        } else {
          total = total + a.price * item.qty
        }
      })
      return total
    },
  }
};
</script>
