<template>
  <v-layout>
    <v-row>
      <v-bottom-sheet fullscreen v-model="installDialog">
        <v-card>
          <v-toolbar fixed dark color="#00aff0">
            <v-btn icon @click.stop="installDialog = false">
              <v-icon> mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-toolbar-title>Create a Store</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text class="mt-5">
              <v-layout wrap>
                <v-text-field dense v-model="business_name" :rules="[v => !!v || 'Name is required',v => (v && v.length <= 12) || 'Name must be less than 10 characters']" required label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-model="pageUsername" required prefix="@" label="Store Username" :rules="[v => !!v || 'Username is required',v => (v && v.length >6 ) || 'Username must be more than 10 characters']" :error-messages="errors"></v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md6>
                  <v-text-field type="time" v-model="opentime" label="Open" :rules="[v => !!v || 'Field is required']" required> </v-text-field>
                </v-flex>
                <v-flex xs6 sm6 md6>
                  <v-text-field type="time" v-model="closetime" label="Close" :rules="[v => !!v || 'Field is required']" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea rows="3" label="Address" v-model="address" required :rules="[v => !!v || 'Field is required']"></v-textarea>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined block color="blue" @click.stop="validate" text>Create Store</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-bottom-sheet>

    </v-row>
  </v-layout>
</template>

<script>
const debounce = require('lodash.debounce')
export default {
  data() {
    return {
      valid: false,
      
      installDialog: false,
      business_name: '',
      pageUsername: '',
      opentime: '',
      closetime: '',
      address: '',
      errors: [],
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
    required_balance() {

      return parseFloat(this.$store.getters['auth/getBalance']) < 800 || parseInt(this.$store.getters['auth/getToken']) < 300;
    }
  },
  methods: {
    openDiag() {
      this.installDialog = true;
    },
    validate() {
      if (this.$refs.form.validate()) {
        if (this.required_balance)
          this.pricingDialog = true;
        else {


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
          alert('Store Created');
        }

      }
    },
  }
};
</script>
