<template>
  <v-card width="100%" light v-if="!mini">
    <v-layout wrap>
      <v-flex xs6>
        <v-card-title>Balance</v-card-title>
        <v-card-text>
          <h2>  {{balance|toPHP}}</h2>
        </v-card-text>
      </v-flex>
      <v-flex xs6>
        <v-card-title>Token</v-card-title>
        <v-card-text>
          <h2>{{token}}</h2>
        </v-card-text>
      </v-flex>
      <v-flex xs12 v-if="history.length===0">
        <start-promo></start-promo>
      </v-flex>
    </v-layout>
    <v-bottom-sheet v-model="topupDiag" max-width="400px">
      <v-card>
        <v-card-title primary-title>Add Balance</v-card-title>
        <v-card-text>
          <v-list subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>One is required</v-list-item-title>
                <v-list flat>
                  <v-list-item-group v-model="selectedBalance" mandatory color="deep-purple accent-4">
                    <v-list-item v-for="(i, e) in denoms" :key="e" :value="i">
                      <v-list-item-content>
                        <v-list-item-title>{{i.amount|toPHP}}</v-list-item-title>
                        <v-list-item-subtitle>with {{i.token}} <strong>Bonus</strong> tokens</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <client-only>
            <paypal-checkout :env="env" v-if="selectedBalance.amount>0" :items="generatedPaypalItem" :amount="parseFloat(selectedBalance.amount).toFixed(2)" :currency="currency" :client="credentials" :button-style="myStyle" @payment-completed="paymentCompleted" :experience="experienceOptions"> </paypal-checkout>
          </client-only>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
    <v-card-actions v-if="!mini && history.length>0">
      <v-spacer></v-spacer>
      <v-btn text color="blue">History</v-btn>
      <v-btn text color="red">Transfer</v-btn>
      <v-btn text color="success" @click.top="topupDiag = true">Top Up</v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else light dense>
    <v-layout wrap class="pa-2">
      <v-flex xs6>
        <v-list-item-content>
          <v-list-item-subtitle>Balance</v-list-item-subtitle>
          <v-list-item-title>{{balance|toPHP}}</v-list-item-title>
        </v-list-item-content>
      </v-flex>
      <v-flex xs6>
        <v-list-item-content>
          <v-list-item-subtitle>Token</v-list-item-subtitle>
          <v-list-item-title>{{token}}</v-list-item-title>
        </v-list-item-content>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import StartPromo from '~/components/StartPromo.vue'
export default {
  props: {
    mini: {
      type: Boolean,
      default: false
    }
  },
  components: {
    StartPromo
  },
  data() {
    return {
      credentials: {
        sandbox: 'AY1cLryehqDkDLNfMsxVHwieZ5MQEo6V_jXHkcBZFmSLCH2Twz5FoUlilck-J-kmJEfmv6r40UaQHz6X',
        production: 'AZhN5uZR4LzPvqc8ZJtWCa6yaM6BKwT06qPCEtNFFXaHtPD7dN-KF0YliWXtCiYSKzI8oSz764KdhAuu'
      },
      topupDiag: false,
      selectedBalance: {},
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
        }

      },
      history: []
    }
  },
  mounted() {
    setTimeout(() => {
      if (typeof(this.userId) == 'object')
        this.getHistory()
    }, 1500)
  },
  computed: {
    userId() {
      return this.$store.getters['auth/getAccessInfo'][0]
    },
    env() {
      return process.env.NODE_ENV == 'production' ? 'production' : 'sandbox'
    },
    generatedPaypalItem() {
      return [{
        name: 'Top Up',
        description: 'Working Balance ' + this.$store.getters['auth/getAccessInfo'][0].currency + ' ' + this.selectedBalance.amount,
        quantity: 1,
        price: this.selectedBalance.amount,
        currency: 'PHP'
      }]
    },
    currency() {
      return this.$store.getters['auth/getAccessInfo'][0].currency
    },
    denoms() {
      return this.$store.getters['auth/getDenoms']
    },
    token() {
      return this.$store.getters['auth/getToken']
    },
    balance() {
      return this.$store.getters['auth/getBalance']
    }
  },
  methods: {
    getHistory() {
      this.$bind('history', this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').limit(20))
    },
    paymentCompleted(payload) {
      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
        balance: this.$fireModule.firestore.FieldValue.increment(this.selectedBalance.amount)
      }).then(() => {

        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').add({
          amount: this.selectedBalance.amount,
          type: 'Top Up',
          date: new Date().getTime()
        }).then(() => {
          this.topupDiag = false
        })

      })
    }
  }
};
</script>
