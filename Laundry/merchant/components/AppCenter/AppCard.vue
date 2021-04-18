<template>
  <v-flex xs12 sm6 md4 lg4 class="pa-2">
    <v-card @click.stop="pricingDialog=!pricingDialog">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar class="ma-3" color="grey" size="80" tile>
          <!--   <v-img></v-img> -->
        </v-avatar>
        <div>
          <v-card-title class="overline">
            {{details.title}}
          </v-card-title>
          <v-card-subtitle v-html="details.desc"></v-card-subtitle>
        </div>
      </div>
    </v-card>
    <v-row>
      <v-bottom-sheet fullscreen v-model="installDialog">
        <v-card>
          <v-toolbar fixed dark color="#00aff0">
            <v-btn icon @click.stop="installDialog = false">
              <v-icon> mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-toolbar-title>Installation</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text class="mt-5">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar class="ma-3" color="grey" size="80" tile>
                  <!--   <v-img></v-img> -->
                </v-avatar>
                <div>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field dense v-model="business_name" :rules="[v => !!v || 'Name is required',v => (v && v.length <= 12) || 'Name must be less than 10 characters']" required label="Name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md12>
                      <v-text-field v-model="pageUsername" required prefix="@" label="App Username" :rules="[v => !!v || 'Username is required',v => (v && v.length >6 ) || 'Username must be more than 10 characters']" :error-messages="errors"></v-text-field>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
              <v-layout wrap>
                <v-flex xs6 sm6 md6>
                  <v-text-field type="time" v-model="opentime" label="Open" :rules="[v => !!v || 'Field is required']" required> </v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md6>
                  <v-text-field type="time" v-model="closetime" label="Close" :rules="[v => !!v || 'Field is required']" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea rows="3" label="Address" v-model="address" required :rules="[v => !!v || 'Field is required']"></v-textarea>
                </v-flex>
                <v-flex xs12 v-if="balanceRequired">
                  <p>Working Balance Required: {{details.balance_required|toPHP}}</p>
                </v-flex>
                <v-flex xs12 v-if="tokenRequired">
                  <v-select v-model="selectedToken" :items="tokens" label="Token is required" :hint="`${selectedToken.value} token plus  ${selectedToken.bonus} bonus token`" :item-text="(x)=>{return 'PHP ' + parseFloat(x.price).toFixed(2) +' - ' + x.value}" return-object>
                    <template v-slot:selection="data">
                      <span class="red--text">{{data.item.price|toPHP}}</span> - {{data.item.value + data.item.bonus}} token
                    </template>
                  </v-select>
                </v-flex>
              </v-layout>
            </v-card-text>
            <client-only>
              <paypal-checkout v-if="isValid && (balanceRequired ||tokenRequired)" env="sandbox" :items="generatedPaypalItem" :amount="parseFloat(totalRequired).toFixed(2)" currency="PHP" :client="credentials" :button-style="myStyle" @payment-completed="paymentCompleted" :experience="experienceOptions"> </paypal-checkout>
            </client-only>
            <v-card-actions v-if="!balanceRequired||!totalRequired">
              <v-btn outlined block color="blue" @click.stop="validate" text>Install</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-bottom-sheet>
      <v-bottom-sheet persistent v-model="pricingDialog">
        <v-card>
          <v-card-title>Pricing</v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item v-for="(price,i) in details.pricing" :key="i">
                <v-list-item-content>
                  <v-list-item-title>{{price.mode}}</v-list-item-title>
                  <v-list-item-subtitle>{{price.value}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small text color="red" @click.stop="pricingDialog=!pricingDialog">Cancel</v-btn>
            <v-btn small text color="blue" @click.stop="pricingDialog=!pricingDialog, installDialog = !installDialog">Install</v-btn>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>
    </v-row>
  </v-flex>
</template>

<script>
const debounce = require('lodash.debounce')
export default {
  props: {
    details: Object
  },
  data() {
    return {
      valid: false,
      business_name: '',
      errors: [],
      opentime: '',
      closetime: '',
      pageUsername: '',
      address: '',
      credentials: {
        sandbox: 'AY1cLryehqDkDLNfMsxVHwieZ5MQEo6V_jXHkcBZFmSLCH2Twz5FoUlilck-J-kmJEfmv6r40UaQHz6X'
      },
      myStyle: {
        label: 'checkout',
        size: 'responsive',
        shape: 'rect',
        color: 'blue',
        tagline: false,
        label: 'pay',
        fundingicons: true
      },
      experienceOptions: {

        input_fields: {
          no_shipping: 1,
          address_override: 1
        },
        flow_config: {
          landing_page_type: 'billing',
          user_action: 'commit'
        },
      },
      selectedToken: {},
      pricingDialog: false,
      installDialog: false,
      tokens: [{
        value: 500,
        bonus: 50,
        price: 500.00
      }, {
        value: 1000,
        bonus: 100,
        price: 850.00
      }, {
        value: 1500,
        bonus: 150,
        price: 1200.00
      }, {
        value: 2000,
        bonus: 250,
        price: 1650
      }],
    }
  },
  watch: {
    pageUsername: debounce(async function(val) {
      if (val.length > 6) {
        let data = await this.$fire.firestore.collection('shops').where('alias', '==', val).get()
        if (data.docs.length === 0)
          this.errors = []
        else
          this.errors = ['Username already taken']
      } else {
        this.errors = ['Username must be more than 5 characters']
      }

    }, 500)
  },
  computed: {
    balanceRequired() {
      return this.details.balance_required > 0 && parseFloat(this.$store.getters['auth/getBalance']) < this.details.balance_required
    },
    tokenRequired() {
      return this.details.token_required && parseInt(this.$store.getters['auth/getToken']) < 500
    },
    isValid() {
      let valid = true
      if (this.balanceRequired && typeof(this.selectedToken.price) === 'undefined' && this.tokenRequired)
        valid = false
      if (this.installDialog === false)
        valid = false
      if (this.opentime === '' || this.closetime === '' || this.business_name === '' || this.address === '')
        valid = false
      return valid

    },
    totalRequired() {
      let total = this.details.balance_required
      if (this.details.token_required && this.selectedToken.price > 0)
        total = total + this.selectedToken.price
      return total
    },
    generatedPaypalItem() {
      let items = []
      if (this.balanceRequired) {
        items.push({
          name: 'Working Balance',
          description: 'Balance required for ' + this.details.title + '(' + this.business_name + ')',
          quantity: 1,
          price: this.details.balance_required,
          currency: 'PHP'
        })
      }
      if (this.tokenRequired) {
        items.push({
          name: 'Token Top Up - ' + this.selectedToken.value + ' token plus ' + this.selectedToken.bonus + ' bonus token',
          description: 'Token Top Up ' + this.details.title + '(' + this.business_name + ')',
          quantity: 1,
          price: this.selectedToken.price,
          currency: 'PHP'
        })
      }

      return items
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {

        let store = {
          business_name: this.business_name,
          opening_time: this.opentime,
          closing_time: this.closetime,
          code: this.details.code,
          address: this.address,
          alias: this.pageUsername,
          users_access: this.$store.getters['auth/getAccessInfo'][0].id,
          draft: true,
          logo: '',
          backdrop: '',
          url: '',
          categories: [],
          contact: [],
          currency: 'PHP',
          location: new this.$fireModule.firestore.GeoPoint(0, 0)
        }

        this.$fire.firestore.collection('shops').add(store)
        this.installDialog = false
        alert('App Installed')
      }
    },
    recordBalances() {
      if (this.tokenRequired) {
        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
          token: this.$fireModule.firestore.FieldValue.increment(parseFloat(this.selectedToken.value) + parseFloat(this.selectedToken.bonus))
        }).then(() => {

          this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('token_history').add({
            amount: parseFloat(this.selectedToken.value) + parseFloat(this.selectedToken.bonus),
            type: 'Top Up',
            date: new Date().getTime()
          }).then(() => {
            this.installDialog = false
            this.pricingDialog = false
          })

        })

      }
      if (this.balanceRequired) {
        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
          balance: this.$fireModule.firestore.FieldValue.increment(this.details.balance_required)
        }).then(() => {

          this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').add({
            amount: this.details.balance_required,
            type: 'Top Up',
            date: new Date().getTime()
          }).then(() => {
            this.installDialog = false
            this.pricingDialog = false
          })

        })
      }
    },
    paymentCompleted(payload) {
      let store = {
        business_name: this.business_name,
        opening_time: this.opentime,
        closing_time: this.closetime,
        code: this.details.code,
        address: this.address,
        alias: this.pageUsername,
        users_access: this.$store.getters['auth/getAccessInfo'][0].id,
        draft: true,
        logo: '',
        backdrop: '',
        url: '',
        categories: [],
        contact: [],
        currency: 'PHP',
        location: new this.$fireModule.firestore.GeoPoint(0, 0)
      }

      this.$fire.firestore.collection('shops').add(store).then(() => {
        this.recordBalances()
      })




    }


  }
};
</script>
