<template>
  <v-layout wrap text-left>
    <app-card v-for="(app, i) in apps" :details="app" :key="i"></app-card>
  </v-layout>
</template>

<script>
import AppCard from '~/components/AppCenter/AppCard'
export default {
  components: {
    AppCard
  },
  mounted(){
    console.log(this.$store.getters['app/getApps'])
  },
  computed:{
  	apps(){
  		return this.$store.getters['app/getApps']
  	}
  }
};
</script>
