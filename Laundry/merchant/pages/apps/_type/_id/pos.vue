<template>
  <v-container fluid v-if="business">
    <v-tabs v-model="tab" show-arrows center-active centered dense background-color="transparent" color="basil" grow>
      <v-tab v-for="(cat,i) in business.categories" :key="i" :href="'#tab-' + cat"> {{cat}} </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(cat,i) in business.categories" :key="i" :value="'tab-' + cat">
        <v-card flat>
          <v-layout wrap align-center class="mb-10">
            <v-flex v-for="item in services.filter(x=>x.category===cat)" :key="item.name + '_' + item" xs12 md4 sm4 lg4 class="pa-1">
              <v-lazy v-model="isActive" :options="{threshold: .6}" transition="fade-transition">
                <service-card :item="item"></service-card>
              </v-lazy>
            </v-flex>
          </v-layout>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
  </client-only>
</template>

<script>
export default {

  layout: (context) => 'applayouts/' + context.params.type,
  data: () => ({
    services: [],
    business: {},
    isActive: false,
    tab: null
  }),
  mounted() {
    this.$bind('business', this.$fire.firestore.collection('shops').doc(this.$route.params.id)).then(() => {
      this.$bind('services', this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services'));

    });


  }

};
</script>
