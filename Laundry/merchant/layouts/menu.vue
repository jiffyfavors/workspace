<template>
	 <nuxt></nuxt>
   
       
</template>
<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
export default {
    mounted() {
        let GMapSettings = {
            apiKey: this.$GMaps.apiKey,
            language: this.language
        }
        GoogleMapsApiLoader(GMapSettings)
       
    }
};
</script>
