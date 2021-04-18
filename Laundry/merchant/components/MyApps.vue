<template>
  <v-card>
    <v-card-title>My Businesses</v-card-title>
    <v-card-text>
      <v-layout wrap justify-start align-center text-left>
        <installed-app v-for="i in stores" :key="i.id" class="review-card" style="white-space:initial;" :data="i"></installed-app>
        <create-store ref="createstore"></create-store>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn block text outlined color="green" @click.stop="createStore()">Create Store</v-btn>
    </v-card-actions>
    <v-row>
      <v-dialog persistent v-model="pricingDialog">
        <v-card>
          <v-card-title>Balance Required</v-card-title>
      
            <v-alert border="right" colored-border type="error" elevation="2">
              You need at least minimum of <strong>PHP 800</strong> working balance and <strong>300 tokens</strong> in your account;
            </v-alert>
       
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small text color="red" @click.stop="pricingDialog=!pricingDialog">Okay</v-btn>
            <!--  <v-btn small text color="blue" @click.stop="pricingDialog=!pricingDialog, installDialog = !installDialog">Install</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script>
import InstalledApp from '~/components/InstalledApp'
import CreateStore from '~/components/CreateStore'
export default {
  components: {
    InstalledApp,
    CreateStore
  },
  data() {
    return {
      pricingDialog: false,
    }
  },
  methods: {
    createStore() {
      if (!this.required_balance)
        this.$refs.createstore.openDiag();
      else
        this.pricingDialog = true;
    }
  },
  computed: {
    required_balance() {

      return parseFloat(this.$store.getters['auth/getBalance']) < 800 || parseInt(this.$store.getters['auth/getToken']) < 300;
    },
    stores() {
      return this.$store.getters['store/getStores']
    }
  }
};
</script>
