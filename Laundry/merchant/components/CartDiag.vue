<template>
  <v-dialog scrollable v-model="cartDiag" fullscreen>
    <v-card width="100%" height="100%">
      <v-card-title>
        <v-app-bar fixed dark dense color="#00aff0">
          <v-btn icon @click.stop="cartDiag=!cartDiag">
            <v-icon> mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Cart</v-toolbar-title>
        </v-app-bar>
      </v-card-title>
      <v-sheet class="overflow-y-auto" max-height="85vh">
        <v-list two-line class="mt-2 mb-10">
          <v-list-item-group v-for="(item, index) in cartItem" :key="item.index">
            <v-list-item dense>
              <v-list-item-avatar color="grey darken-3">
                <v-img v-if="item.info.img != ''" class="elevation-6" :src="item.info.img"></v-img>
                <v-avatar v-else class="white--text" color="blue"> {{ item.info.name .match(/\b(\w)/g) .join('') .substr(0, 2) }} </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.info.name"></v-list-item-title>
                <v-list-item-subtitle class="red--text"> {{ computeTotal(item) | toPHP }} </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text> {{ (computeTotal(item) / item.qty) | toPHP }} x {{ item.qty }} </v-list-item-action-text>
                <v-icon small color="red" @click.stop="removeCart(index)"> mdi-delete </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-simple-table dense>
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left"> Item </th>
                    <th class="text-left"> Value </th>
                    <th class="text-left"> Price </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(addon, i) in computeAddOns(
                                item.add_ons,
                                item.info.price
                              )" :key="addon.name + `_` + i + `_` + index">
                    <td>{{ addon.name }}</td>
                    <td>{{ addon.values }}</td>
                    <td v-if="addon.price>0">{{ addon.price | toPHP }}</td>
                    <td v-if="addon.price<1">-</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <p v-if="item.instructions!=''"><strong>Instructions:</strong> {{item.instructions}}</p>
            <v-divider v-if="index + 1 <= cartItem.length" :key="index"></v-divider>
          </v-list-item-group>
        </v-list>
      </v-sheet>
      <v-snackbar v-model="snackbar" color="blue" :timeout="3000"> Item removed from cart </v-snackbar>
      <v-card class="shopresponsive" v-if="cartSize > 0" width="100%">
        <v-divider />
        <v-list-item dense>
          <v-list-item-avatar color="grey darken-3">
            <v-img contain v-if="business.logo != ''" class="elevation-6" :src="business.logo" />
            <v-avatar v-else class="white--text" color="blue"> {{ business.business_name .match(/\b(\w)/g) .join('') .substr(0, 2) }} </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>
              <small>Sold by</small>
            </v-list-item-subtitle>
            <v-list-item-title> {{ business.business_name }} </v-list-item-title>
            <v-list-item-subtitle> {{ business.branch }} </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <span class="caption grey--text">Total</span>
              <span class="red--text subtitle-2">{{cartTotal | toPHP }}</span>
            </v-list-item-action-text>
            <v-btn color="red" small outlined @click.stop="$refs.checkDiag.showCheckout()"> Checkout </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </v-card>
    <checkout-diag ref="checkDiag"></checkout-diag>
  </v-dialog>
</template>

<script>
import CheckoutDiag from '~/components/CheckoutDiag'
export default {
  components: {
    CheckoutDiag
  },
  data: () => ({
    cartDiag: false,
    snackbar: false,
  }),
  computed: {
    business() {
      return this.$store.getters['store/getCurrentStore']
    },
    cartItem() {
      return this.$store.getters['cart/getCart']
    },
    cartTotal() {
      return this.$store.getters['cart/getCartTotal']
    },

    cartSize() {
      return this.$store.getters['cart/getCartCount']
    },
  },
  methods: {
    showCart() {
      this.cartDiag = true
    },
    removeCart(index) {
      this.$store.commit('cart/removeCart', index)
      this.snackbar = true
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
    computeAddOns(item, price) {
      const ads = []
      const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase())
      ads.push({
        name: 'Base Price',
        values: '',
        price: price
      })
      let total = parseFloat(price)
      Object.entries(item).map(([key, val]) => {
        if (Array.isArray(val)) {
          ads.push({
            name: capitalize(key),
            values: '',
            price: 0
          })
          val.forEach((i) => {
            total = total + parseFloat(i.price)
            ads.push({
              name: '',
              values: i.name,
              price: i.price
            })
          })
        } else {
          total = total + parseFloat(val.price)
          ads.push({
            name: capitalize(key),
            values: val.name,
            price: val.price
          })
        }
      })

      return ads
    }
  }
};
</script>
