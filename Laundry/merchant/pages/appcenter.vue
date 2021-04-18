<template>
  <v-container fluid>
    <v-toolbar color="cyan" dark flat>
      <v-layout wrap text-left>
        <v-flex xs12>
          <token-status :mini="true"></token-status>
        </v-flex>
      </v-layout>
      <template v-slot:extension>
        <v-tabs v-model="tab" fixed-tabs center-active centered>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab>Installed</v-tab>
          <v-tab>App Listing</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-layout wrap justify-start align-center text-left>
          <installed-app v-for="i in stores" :key="i.id" class="review-card" style="white-space:initial;" :data="i"></installed-app>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <app-listing></app-listing>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import InstalledApp from '~/components/InstalledApp'
import AppListing from '~/components/AppCenter/AppListing.vue'
import TokenStatus from '~/components/TokenStatus.vue'
export default {
  data() {
    return {
      tab: 0,
    }
  },
  computed: {
    stores() {
      return this.$store.getters['store/getStores']
    }
  },
  components: {
    TokenStatus,
    AppListing,
    InstalledApp
  }
};
</script>
