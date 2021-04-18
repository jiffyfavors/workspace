<template>
  <v-flex xs12 md4 sm4 lg3 class="ma-1">
    <v-card class="mx-auto" max-width="400">
      <span class="bestseller">{{ data.order_id.toUpperCase() }}</span>
      <v-card-text>
        <v-layout wrap class="mt-5">
             <template v-if="data.status==='completed'">
          <v-flex xs4 sm4 md4>
              <strong>Name</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.name}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Phone</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.phone}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Email</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.email}}</strong>
            </v-flex>
</template>
          <template v-if="data.status==='accepted'">
            <v-flex xs6 sm6 md6>
              <strong>Customer</strong>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <strong>{{data.customer.name}}</strong>
            </v-flex>
          </template>
          <v-flex xs6 sm6 md6>
            <strong>Fulfillment</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.fulfillment}}</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Time</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{$moment(data.delivery.date+ ' '+ data.delivery.time).format('MMM DD, hh:mm A')}}</strong>
          </v-flex>
          <v-divider></v-divider>
          <v-flex xs6 sm6 v-if="data.status!=='pending'" md6>
            <strong>Status</strong>
          </v-flex>
          <v-flex xs6 sm6 md6 v-if="data.status!=='pending'">
            <strong>{{data.status.toUpperCase()}}</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Items</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.items.length}} items</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Item Total </strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.breakdown.total|toPHP}}</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Delivery Fee </strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.breakdown.deliveryFee|toPHP}}</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Payment</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.breakdown.payment|toPHP}}</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>Collect</strong>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <strong>{{data.breakdown.total + parseFloat(data.breakdown.deliveryFee) - data.breakdown.payment |toPHP}}</strong>
          </v-flex>
          <v-divider></v-divider>
        </v-layout>
      </v-card-text>
      <v-card-actions v-if="data.status==='pending'">
        <v-spacer></v-spacer>
        <v-btn text small @click.stop="listDiag = true">Items</v-btn>
        <v-btn text small @click.stop="declineOrder">Decline</v-btn>
        <v-btn text small @click.stop="acceptOrder">Accept</v-btn>
      </v-card-actions>
      <v-card-actions v-if="data.status==='accepted'">
        <v-spacer></v-spacer>
        <v-btn text small @click.stop="listDiag = true">Items</v-btn>
        <v-btn text small @click.stop="contactDiag = true">Contact</v-btn>
        <v-btn text small v-if="data.fulfillment==='For Delivery'" @click.stop="addressDiag = true">Address</v-btn>
      </v-card-actions>
      <v-card-actions v-if="data.status==='accepted'">
        <v-btn block outlined color="green" @click.stop="confirmDiag=!confirmDiag">Mark as Fulfilled</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog fullscreen v-model="addressDiag" max-width="500px">
      <v-toolbar fixed dark color="#00aff0">
        <v-btn icon @click.stop="addressDiag = false">
          <v-icon> mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-toolbar-title>Delivery Address</v-toolbar-title>
      </v-toolbar>
      <v-card width="100%">
        <v-layout wrap>
          <v-flex xs12 sm12 md12>
            {{data.delivery.address}}
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDiag">
      <v-card width="300">
        <v-card-title>Confirmation</v-card-title>
        <v-card-text>
          <p>You are about to mark this order fullfilled. Can you confirm?</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small text @click.stop="confirmDiag = false">Cancel</v-btn>
          <v-btn small text @click.stop="markAsCompleted">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog fullscreen v-model="contactDiag" max-width="500px">
      <v-toolbar fixed dark color="#00aff0">
        <v-btn icon @click.stop="contactDiag = false">
          <v-icon> mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-toolbar-title>Customer Contact</v-toolbar-title>
      </v-toolbar>
      <v-card width="100%">
        <v-card-text>
          <v-layout wrap>
            <v-flex xs4 sm4 md4>
              <strong>Name</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.name}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Phone</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.phone}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Email</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.customer.email}}</strong>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog fullscreen v-model="listDiag" max-width="500px">
      <v-toolbar fixed dark color="#00aff0">
        <v-btn icon @click.stop="listDiag = false">
          <v-icon> mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-toolbar-title>Order List</v-toolbar-title>
      </v-toolbar>
      <v-card width="100%">
        <v-card-text>
          <v-sheet class="overflow-y-auto">
            <v-content>
              <v-list two-line>
                <v-list-item-group v-for="(_item, index) in data.items" :key="_item.index">
                  <v-divider />
                  <v-list-item dense>
                    <v-list-item-avatar color="grey darken-3">
                      <v-img v-if="_item.info.img != ''" class="elevation-6" :src="_item.info.img" />
                      <v-avatar v-else class="white--text" color="blue"> {{ _item.info.name .match(/\b(\w)/g) .join('') .substr(0, 2) }} </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="_item.info.name" />
                      <v-list-item-subtitle class="red--text"> {{ computeTotal(_item) | toPHP }} </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text> {{ (computeTotal(_item) / _item.qty) | toPHP }} x {{ _item.qty }} </v-list-item-action-text>
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
                                _item.add_ons,
                                _item.info.base_price
                              )" :key="addon.name + `_` + i + `_` + index">
                          <td>{{ addon.name }}</td>
                          <td>{{ addon.values }}</td>
                          <td v-if="addon.price>0">{{ addon.price | toPHP }}</td>
                          <td v-if="addon.price<1">-</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <p v-if="_item.instructions!=''"><strong>Instructions:</strong> {{_item.instructions}}</p>
                </v-list-item-group>
              </v-list>
            </v-content>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    listDiag: false,
    contactDiag: false,
    addressDiag: false,
    confirmDiag: false,

  }),
  computed: {
    balance() {
      return parseFloat(this.data.breakdown.total) + parseFloat(this.data.breakdown.deliveryFee)
    },
    systemFee() {
      return parseFloat(parseFloat(this.balance * 0.035).toFixed(2)) * -1
    },
  },
  methods: {
    declineOrder() {
      this.$fire.firestore.collection('orders').doc(this.data.id).update({
        status: 'declined',
        timestamp: this.$moment(this.data.delivery.date + ' ' + this.data.delivery.time).unix()
      })
    },
    markAsCompleted() {
      this.$fire.firestore.collection('orders').doc(this.data.id).update({
        status: 'completed',
        timestamp: this.$moment(this.data.delivery.date + ' ' + this.data.delivery.time).unix()
      })
      this.confirmDiag = false
    },
    acceptOrder() {
      let balance = 0
      if (this.data.payment === "Debit or Credit Card") {
        balance = this.balance
      }
      if (balance + parseFloat(this.$store.getters['auth/getBalance']) + this.systemFee > 0) {
        this.$fire.firestore.collection('orders').doc(this.data.id).update({
          status: 'accepted'
        })
        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
          balance: this.$fireModule.firestore.FieldValue.increment(parseFloat(this.systemFee))
        })
        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').add({
          amount: this.systemFee,
          type: 'System Fee',
          store: this.data.merchantId,
          ref: this.data.order_id,
          date: new Date().getTime()
        })

        if (this.data.payment === "Debit or Credit Card") {

          this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
            balance: this.$fireModule.firestore.FieldValue.increment(this.balance)
          })

          this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').add({
            amount: this.balance,
            type: 'Generated Sale',
            store: this.data.merchantId,
            ref: this.data.order_id,
            date: new Date().getTime()
          })
        }

      } else {
        alert('Cannot accept order. Insufficient Balance')
      }

    },
    computeAddOns(item, price) {
      const ads = []
      const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase())
      ads.push({
        name: 'Base Price',
        values: '',
        price
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
      ads.push({
        name: '',
        values: 'Total',
        price: parseFloat(total)
      })
      return ads
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
    }
  }
};
</script>
