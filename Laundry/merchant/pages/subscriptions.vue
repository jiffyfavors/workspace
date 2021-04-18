<template>
  <v-layout wrap justify-center align-center text-left>
  	<v-btn block outlined class="shopresponsive" color="success">Add Subscription</v-btn>
  </v-layout>
</template>

<script>
export default {
  computed: {
    subscriptions() {
      return this.$store.getters['store/getSubscriptions']
    }
  },
  watch: {
    subscriptions(val) {
      console.log(val)
    }
  },
  mounted() {
    this.$store.dispatch('store/fetchSubscriptions')
  }
};
</script>
