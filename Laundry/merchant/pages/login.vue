<template>
  <v-app id="e3">
    <v-app-bar color="blue" class="white--text text-center" app>
      <v-img class="mx-2" src="/icon-192px.png" max-height="40" max-width="40" dark background-color="white" contain></v-img>
      <v-toolbar-title>Go Asenso Merchant</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white" small @click.stop="$refs.login.openDiag()">Login</v-btn>
      <v-btn text color="white" small @click.stop="$refs.register.openDiag()">Register</v-btn>
    </v-app-bar>
    <v-content>
      <v-parallax height="250" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" size="125" color="white">
                <v-img contain src="/icon-192px.png" dark background-color="white"></v-img>
              </v-avatar>
              <div>
                <h1 class="display-1 font-weight-thin mb-4">
        Go Asenso Merchant
        </h1>
                <h4 class="subheading">
                Helping Business Bounce Back from Pandemic
        </h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
      <v-container fluid>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" xs="6" md="6" sm="6" lg="4">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline" v-text="item.title"></v-card-title>
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  <!--  <v-card-actions>
                    <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon height="40px" right width="40px">
                      <v-icon>mdi-play</v-icon>
                    </v-btn>
                    <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                      START RADIO
                    </v-btn>
                  </v-card-actions> -->
                </div>
                <v-avatar class="ma-3" size="125" tile>
                  <v-img contain :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="display-1 font-weight-bold mt-2">
      Our Happy Clients
        </h1>
          <v-carousel continuous cycle :interval="5000" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="300">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-card-actions>
                      <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                          <v-img class="elevation-6" alt="" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title class="white--text font-weight-bold">{{slide.name}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card-actions>
                    <v-card-text class="headline font-weight-bold white--text">
                      "{{slide.review}}"
                    </v-card-text>
                  </v-card>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" class="text-center">
          <h1 class="display-1 text-start font-weight-bold mt-2">
    Our Merchants
        </h1>
          <v-carousel continuous cycle :interval="5000" :show-arrows="false" hide-delimiter-background hide-delimiters height="300">
            <v-carousel-item v-for="(data, i) in stores" :key="i">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <v-card class="mx-auto text-start" color="#26c6da" max-width="400">
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
                  </v-card>
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm6 lg6 md6>
          <v-card>
            <v-card-title>Pricing Promotion</v-card-title>
            <v-card-subtitle>Register now and get bonus.</v-card-subtitle>
            <v-card-text>
              <v-layout wrap>
                <v-flex xs6>
                  <v-card flat>
                    <v-card-title>Rate</v-card-title>
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
              <v-alert type="success">
                No Fees on your first 7 days of use. Your money will be refunded if no sales generated within this period.
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="blue" @click.stop="$refs.register.openDiag()" outlined dark large>Register Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    </v-layout>
    <login-card ref="login"></login-card>
    <register-card ref="register"></register-card>
  </v-app>
</template>

<script>
import LoginCard from '~/components/LoginCard'
import RegisterCard from '~/components/RegisterCard'
import MerchantList from '~/components/MerchantList'
export default {
  components: {
    LoginCard,
    RegisterCard,
    MerchantList
  },
  layout: 'menu',
  middleware({
    store,
    redirect
  }) {
    if (store.getters['auth/isLoggedIn']) {
      return redirect('/')
    }
  },
  mounted() {
    this.$bind('stores', this.$fire.firestore.collection('shops'));
  },
  data() {
    return {
      stores: [],
      isActive: false,
      items: [{
        color: '#952175',
        src: 'https://clibase.tech/images/services/inventory.png',
        title: 'On the Go',
        artist: 'Manage Business anywhere, anytime!',
      }, {
        color: '#952175',
        src: 'https://clibase.tech/images/services/point-of-sale.png',
        title: 'Online POS',
        artist: 'Track your sales in real time. Create and manage invoices.',
      }, {
        color: '#952175',
        src: 'https://clibase.tech/images/services/ecommerce.png',
        title: 'Online Ordering',
        artist: 'Sell and Accept Orders with your own Online Ordering Website',
      }, {
        color: '#1F7087',
        src: 'https://icon-library.com/images/visa-card-icon/visa-card-icon-24.jpg',
        title: 'Multiple Payment Channels',
        artist: 'Cash, COD, eWallet, Debit and Credit Cart Payments',
      }, {
        color: '#1F7087',
        src: 'https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-lightning-button-icon-design-png-image_1518954.jpg',
        title: 'Fast Set Up',
        artist: 'Ready within minutes that is simple and handy for everyday use',
      }, {
        color: '#1F7087',
        src: 'https://www.iconpacks.net/icons/1/free-bar-chart-icon-676-thumb.png',
        title: 'Affordable',
        artist: 'Maximise and Boost your profit with low pricing.',
      }],

      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],

      slides: [{
        name: 'Gina',
        review: 'Tumaas ang sales dahil puwede ng tumanggap ng card as payment. '
      }, {
        name: 'Dino',
        review: 'Laking tulong, napadali ang pagbebenta. Share lang ng link at mag-antay lang ng may mag-order.'
      }, {
        name: 'Alex',
        review: 'Di na kailangang mag sulat ng record para sa mga order. Madali lang tingnan sa dashboard. Kumpleto ang detalye.'
      }, {
        name: 'Luis',
        review: 'Napakamura at napakadaling gamitin. We have increase 315% in sales compared sa conventional selling.'
      }],

    }
  },

  methods: {}
};
</script>
