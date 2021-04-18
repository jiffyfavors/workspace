<template>
  <v-dialog scrollable v-model="checkoutDiag" fullscreen>
    <v-card width="500" height="100%">
      <v-card-title>
        <v-app-bar fixed dark dense color="#00aff0">
          <v-btn icon @click.stop="checkoutDiag=!checkoutDiag">
            <v-icon> mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Checkout</v-toolbar-title>
        </v-app-bar>
      </v-card-title>
      <v-card-text>
        <v-layout wrap class="mt-5">
          <v-flex xs12>
            <v-list-item-content>
              <v-list-item-title>{{displayName}}</v-list-item-title>
              <v-list-item-subtitle>Customer Information</v-list-item-subtitle>
            </v-list-item-content>
          </v-flex>
          <v-flex xs6>
            <v-select label="Fulfillment" v-model="payload.fulfillment" :items="['For Dine In', 'For Takeout','Store Pick Up','For Delivery']"></v-select>
          </v-flex>
          <v-flex xs6>
            <v-select label="Delivery Area" v-model="payload.delivery" v-if="payload.fulfillment=='For Delivery'" no-data-text="Please set up Delivery Area" :items="business.fees" item-text="area" return-object></v-select>
          </v-flex>
          <template v-if="payload.fulfillment=='For Delivery'">
            <v-flex xs6>
              <v-dialog ref="dialog" v-model="menu" :return-value.sync="payload.delivery.date" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="payload.delivery.date" label="Delivery Date" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="payload.delivery.date" :min="minDate" :max="maxDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(payload.delivery.date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs6>
              <v-dialog ref="dialog2" v-model="timeDiag" :return-value.sync="payload.delivery.time" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="payload.delivery.time" label="Delivery Time" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-time-picker :min="business.opening_time" :max="business.closing_time" v-model="payload.delivery.time" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="timeDiag = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog2.save(payload.delivery.time)">
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs12>
              <v-textarea rows="3" label="Delivery Address" v-if="payload.fulfillment=='For Delivery'" v-model="payload.delivery.address"></v-textarea>
            </v-flex>
          </template>
          <v-flex xs6>
            <v-select v-model="payload.payment" :items="['Cash','Charge to Table','Card','Others']" label="Mode of Payment"></v-select>
          </v-flex>
          <v-flex xs12>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Other Charges & Discounts</v-list-item-title>
                  <v-list-item-subtitle>Declare any extra charges here.(-) for discount</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-simple-table dense fixed-header max-width="100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"> Description </th>
                    <th class="text-left"> Amount
                      <v-icon small color="blue" v-if="payload.charges.length<=0" @click.stop="payload.charges.push({name:'',price:0}), extraFocus()"> mdi-plus </v-icon>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in payload.charges" :key="index" :id="'charges_'+index">
                    <td style="width:60%">
                      <input v-model="val.name" :id="'chargesvalue_'+index" :ref="'charges_'+ index" type="text" placeholder="Description" style="width:100%"> </td>
                    <td style="width:40%">
                      <input v-model="val.price" type="number" size="8" placeholder="Amount" style="width:100%"> </td>
                    <v-icon small color="red" @click.stop="payload.charges.splice(index,1)"> mdi-minus </v-icon>
                    <v-icon small color="blue" v-if="index==payload.charges.length - 1" @click.stop="payload.charges.push({name:'',price:0}), extraFocus()"> mdi-plus </v-icon>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-flex>
          <v-divider></v-divider>
          <v-subheader>Summary</v-subheader>
          <v-layout wrap>
            <v-flex xs4>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{cartTotal|toPHP}}</v-list-item-title>
                    <v-list-item-subtitle>Item Total</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex xs4>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{deliveryFee + otherCharges|toPHP}}</v-list-item-title>
                    <v-list-item-subtitle>Others</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex xs4>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><span class="red--text"><strong>{{grandTotal|toPHP}}</strong></span></v-list-item-title>
                    <v-list-item-subtitle>Grandtotal</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
          </v-layout>
          <!--           <v-flex xs4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{paymentProcessingFee|toPHP}}</v-list-item-title>
                  <v-list-item-subtitle>Card Payment Fee</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title><span class="red--text"><strong>{{grandTotal|toPHP}}</strong></span></v-list-item-title>
                  <v-list-item-subtitle>Grandtotal</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-flex> -->
          <v-flex xs12>
            <paypal :items="paypalItem" v-if="payload.payment==='Debit or Credit Card'" @payment-completed="paymentCompleted"></paypal>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions v-if="payload.payment!=='Debit or Credit Card'">
        <v-btn block outlined :disabled="disableCheckout" text color="blue" @click.stop="finishCheckout">Checkout</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  data: () => ({
  	disableCheckout:true,
    displayName: '',
    menu: false,
    checkoutDiag: false,
    timeDiag: false,
    payload: {
      customer: {
        name: '',
        email: '',
        phone: ''
      },
      fulfillment: 'Store Pick Up',
      delivery: {
        area: {},
        date: '',
        time: '',
        address: '',
        rate: 0
      },
      payment: 'Cash',
      items: [],
      charges: []
    },
  }),
  computed: {
    business() {
      return this.$store.getters['store/getCurrentStore']
    },
    minDate() {
      var d = new Date(new Date().toISOString().substr(0, 10))

      var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
      return [year, month, day].join('-').toString();
    },
    maxDate() {
      var d = new Date(new Date().toISOString().substr(0, 10))
      d.setDate(d.getDate() + 7)


      var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
      return [year, month, day].join('-').toString();
    },
    grandTotal() {
      let total = parseFloat(this.deliveryFee) + parseFloat(this.paymentProcessingFee) + parseFloat(this.cartTotal) + parseFloat(this.otherCharges)
      if(isNaN(total))
      	this.disableCheckout = true
      else
      	this.disableCheckout = false
      return parseFloat(total).toFixed(2)
    },
    otherCharges() {
      let total = 0;
      this.payload.charges.forEach(c => {
        total = total + parseFloat(c.price);
      })
      return total;
    },
    deliveryFee() {
      if (this.payload.fulfillment === 'For Delivery')
        return parseFloat(this.payload.delivery.rate).toFixed(2)
      else
        return 0
    },
    paymentProcessingFee() {
      let total = 0;
      if (this.payload.payment === 'Debit or Credit Card')
        total = ((total + parseFloat(this.cartTotal) + parseFloat(this.deliveryFee)) * 0.05) + 15
      return parseFloat(total).toFixed(2)
    },
    cartTotal() {
      return this.$store.getters['cart/getCartTotal']
    },
  },
  methods: {
    extraFocus() {
      this.$nextTick(() => {

        try {
          document.getElementById('charges_' + parseInt(this.payload.charges.length - 1)).classList.add('shake')
          setTimeout(() => {
          	   document.getElementById('chargesvalue_' + parseInt(this.payload.charges.length - 1)).focus();
            document.getElementById('charges_' + parseInt(this.payload.charges.length - 1)).classList.remove('shake')
          }, 1200)

        } catch (e) {

          console.log(e)
        }



      })

    },
    showCheckout() {
      this.checkoutDiag = true
    },
    finishCheckout() {

    }
  }
};
</script>
