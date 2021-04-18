<template>
  <v-layout wrap>
    <v-flex xs12 md6 sm6 lg4>
      <token-status></token-status>
    </v-flex>
    <v-flex xs12 md6 sm6 lg4>
      <my-apps></my-apps>
    </v-flex>
  </v-layout>
</template>

<script>
import TokenStatus from '~/components/TokenStatus.vue'
import MyApps from '~/components/MyApps'
export default {
  layout: 'default',
  components: {
    TokenStatus,
    MyApps
  },
  mounted() {
    this.$store.dispatch('auth/getAccessInfo')
  },

};
</script>
