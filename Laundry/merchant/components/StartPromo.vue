<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>Starting Promo</v-card-title>
          <v-card-subtitle>Top up now and get bonuses</v-card-subtitle>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs6>
                <v-card flat>
                  <v-card-title>Amount</v-card-title>
                  <v-card-text>
                    <h2>  {{1500|toPHP}}</h2>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-card flat>
                  <v-card-title>Bonus Token</v-card-title>
                  <v-card-text>
                    <h2>800 tokens</h2>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      <client-only>
        <v-flex xs12>
          <paypal-checkout :env="env" :items="[{name:'Starting Topup', description:'Business Starter Bonus with 800 bonus token',price:1500, quantity:1, currency:'PHP'}]" amount="1500" currency="PHP" :client="credentials" :button-style="myStyle" @payment-completed="paymentCompleted" :experience="experienceOptions"> </paypal-checkout>
        </v-flex>
      </client-only>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      credentials: {
        sandbox: 'AY1cLryehqDkDLNfMsxVHwieZ5MQEo6V_jXHkcBZFmSLCH2Twz5FoUlilck-J-kmJEfmv6r40UaQHz6X',
        production: 'AZhN5uZR4LzPvqc8ZJtWCa6yaM6BKwT06qPCEtNFFXaHtPD7dN-KF0YliWXtCiYSKzI8oSz764KdhAuu'
      },
    }
  },
  computed: {
    env() {
      return process.env.NODE_ENV == 'production' ? 'production' : 'sandbox'
    }
  },
  methods: {
    paymentCompleted(payload) {
      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
        token: this.$fireModule.firestore.FieldValue.increment(800)
      }).then(() => {

        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('token_history').add({
          amount: 800,
          type: 'Bonus Token',
          date: new Date().getTime()
        })

      });
      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).update({
        balance: this.$fireModule.firestore.FieldValue.increment(1500)
      }).then(() => {

        this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('balance_history').add({
          amount: 1500,
          type: 'Business Starter Top Up',
          date: new Date().getTime()
        })
      })
    }
  }
};
</script>
