<template>
  <v-carousel continuous cycle :interval="5000" :show-arrows="false" hide-delimiter-background hide-delimiters height="300">
    <v-carousel-item v-for="(data, i) in stores" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3">
          <v-flex xs12 md4 sm6 lg3 class="pa-2">
            <v-lazy v-model="isActive" :options="{
          threshold: .6
        }" min-height="200" transition="fade-transition">
              <v-card width="100%" :href="'https://goasenso.com/ordering/'+data.alias" class="text-start">
                <v-img :src="data.backdrop" height="200px" min-width="100%" width="100%">
                </v-img>
                <v-card-actions>
                  <v-list-item dense>
                    <v-list-item-avatar color="grey darken-3">
                      <v-img class="elevation-6" :src="data.logo" /> </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ data.business_name }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <small>@{{ data.alias }}</small>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-lazy>
          </v-flex>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      stores: []
    }

  },
  mounted() {

    this.$bind('stores', this.$fire.firestore.collection('shops'));
  }
};
</script>

<style scoped>
.swiper {
  height: 430px;
  margin-left: auto;
  margin-right: auto;
  .swiper-slide {
    height: 200px;
  }
}
</style>
