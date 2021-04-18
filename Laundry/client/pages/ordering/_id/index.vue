<template>
  <v-app id="e3">
    <loading :active.sync="isLoading" loader="bars" :is-full-page="true" color="blue" />
    <v-app-bar color="#00aff0" dark shrink-on-scroll prominent :src="business.backdrop" fade-img-on-scroll scroll-target="#scrolling-techniques-3" scroll-threshold="300" fixed app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <template #img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" /> </template>
      <v-toolbar-title>{{ business.business_name }}</v-toolbar-title>
      <v-spacer />
      <client-only>
        <v-btn v-if="cartSize > 0" icon text id="cart" @click.stop="cartDiag=!cartDiag">
          <v-badge color="red">
            <template #badge overlap> {{ cartSize }} </template>
            <v-icon color="white" dense> mdi-cart-outline </v-icon>
          </v-badge>
        </v-btn>
      </client-only>
      <v-menu bottom left>
        <template #activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon> mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <v-list nav flat single-line dense>
          <ShareNetwork v-for="network in networks" :key="network.network" :network="network.network" :style="{ backgroundColor: network.color }" :url="sharing.url" :title="sharing.title" :description="sharing.description" :hashtags="sharing.hashtags">
            <v-list-item>
              <v-list-item-icon>
                <v-icon small :color="network.color"> {{ network.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ network.name }}</v-list-item-title>
            </v-list-item>
          </ShareNetwork>
        </v-list>
      </v-menu>
      <template #extension>
        <v-tabs v-model="tab" show-arrows center-active centered dense background-color="transparent" color="basil" grow>
          <v-tab v-for="(cat,i) in business.categories" :key="i" :href="'#tab-' + cat"> {{cat}} </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped temporary app color="blue" absolute app dark>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar rounded size="35" color="white" class="mr-2" rounded> <img  contain :src="business.logo"></v-img> </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{business.business_name}}</v-list-item-title>
            <v-list-item-subtitle>Online Ordering</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="">
          <v-list-item-icon>
            <v-icon>mdi-card-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Orders</v-list-item-title>
            <v-list-item-subtitle>Status of your order</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$refs.contactUs.showDialog()">
          <v-list-item-icon>
            <v-icon>mdi-card-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Contact Us</v-list-item-title>
            <v-list-item-subtitle>Reach out for concerns</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>


        <v-list-item @click="$refs.storeAddress.showDialog()">
          <v-list-item-icon>
            <v-icon>mdi-card-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Store Location</v-list-item-title>
            <v-list-item-subtitle>Visit us</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="100vh">
      <v-container fluid>
        <client-only>
          <v-content>
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
                  <laundry-card :business="business" v-if="business.storeType==='Laundry Shop'"></laundry-card>
                  <massage-card :business="business" v-if="business.storeType==='Massage Spa'"></massage-card>
                </v-card>
              </v-tab-item>
              <!-- <v-tab-item value="mytrans">
                <v-card flat> My Transaction </v-card>
              </v-tab-item>
              <v-tab-item value="contact">
                <v-card flat>
                  <v-card-title>Contact Us</v-card-title>
                  <v-card-text>
                    <v-list>
                      <v-list-item v-for="(c,i) in business.contact" :key="i" :href="getHref(c)">
                        <v-list-item-icon>
                          <v-icon>{{getIcon(c)}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{c.value}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item value="address">
                <div class="mapcontainer">
                  <GMap id="gmap" ref="gMap" :center="business.location" :options="mapoption" :zoom="15">
                    <GMapMarker ref="gmapmarker" :position="business.location" :options="{ icon: selectedmarker }" />
                  </GMap>
                </div>
                <v-toolbar dense max-width="100%" class="shopresponsive">
                  <v-btn tile block outlined color="red">Get Direction</v-btn>
                </v-toolbar>
              </v-tab-item> -->
              <!--  <v-tab-item v-for="item in business.menu.filter(i=>i.values.length>0)" :key="item.name">
                            <client-only>
                                <food-item :data="item" :merchant="business" /> </client-only>
                        </v-tab-item> -->
            </v-tabs-items>
          </v-content>
        </client-only>
      </v-container>

      <v-dialog scrollable v-model="checkoutDiag" fullscreen>
        <v-card width="500" height="100%">
          <v-card-title>
            <v-app-bar fixed dark dense color="#00aff0">
              <v-btn icon @click.stop="checkoutDiag=!checkoutDiag">
                <v-icon> mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Checkout</v-toolbar-title>
            </v-app-bar>
          </v-card-title>
          <v-card-text>
            <v-layout wrap class="mt-5">
              <v-flex xs12 v-if="isAuth">
                <v-list-item-content>
                  <v-list-item-title>{{displayName}}</v-list-item-title>
                  <v-list-item-subtitle>Contact</v-list-item-subtitle>
                </v-list-item-content>
              </v-flex>
              <v-flex xs6>
                <v-select label="Fulfillment" v-model="payload.fulfillment" :items="['Store Pick Up','For Delivery']"></v-select>
              </v-flex>
              <v-flex xs6>
                <v-select label="Delivery Area" v-model="payload.delivery" :disabled="payload.fulfillment=='Store Pick Up'" :items="business.fees" item-text="area" return-object></v-select>
              </v-flex>
              <v-flex xs6>
                <v-dialog ref="dialog" v-model="menu" :return-value.sync="payload.delivery.date" persistent width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="payload.delivery.date" label="Date" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="payload.delivery.date" :min="minDate" :max="maxDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(payload.delivery.date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs6>
                <v-dialog ref="dialog2" v-model="timeDiag" :return-value.sync="payload.delivery.time" persistent width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="payload.delivery.time" label="Time" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker :min="business.opening_time" :max="business.closing_time" v-model="payload.delivery.time" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="timeDiag = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.dialog2.save(payload.delivery.time)">
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
             
              </v-flex>
              <v-flex xs12>
                <v-textarea rows="3" label="Delivery Address" v-if="payload.fulfillment!='Store Pick Up'" v-model="payload.delivery.address"></v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-select v-model="payload.payment" :items="['Cash','Debit or Credit Card','GCash','Paymaya','Bank Transfer']" label="Mode of Payment"></v-select>
              </v-flex>
              <v-flex xs6>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>{{cartTotal|toPHP}}</v-list-item-title>
                      <v-list-item-subtitle>Item Total</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>{{deliveryFee|toPHP}}</v-list-item-title>
                      <v-list-item-subtitle>Delivery Fee</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex xs6>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>{{paymentProcessingFee|toPHP}}</v-list-item-title>
                      <v-list-item-subtitle>Card Payment Fee</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title><span class="red--text"><strong>{{grandTotal|toPHP}}</strong></span></v-list-item-title>
                      <v-list-item-subtitle>Grandtotal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex xs12>
                <paypal :items="paypalItem" v-if="payload.payment==='Debit or Credit Card'" @payment-completed="paymentCompleted"></paypal>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions v-if="payload.payment!=='Debit or Credit Card'">
            <v-btn block outlined text color="blue" @click.stop="finishCheckout">Checkout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="orderComplete" fullscreen>
        <v-card>
          <v-card-text>
            <v-layout wrap justify-center align-center text-left>
              <v-flex xs12 md4 sm4 lg3 class="text-center">
                <v-icon class="mb-2" color="success" size="200"> mdi-checkbox-marked-circle </v-icon>
                <blockquote class="blockquote mb-5">
                  <span style="font-size:50px;">&#128523;</span>
                  <h4>Order Completed</h4> </blockquote>
                <footer>
                  <v-btn outlined text block @click.stop="checkoutDiag = false" color="red"> Home </v-btn>
                </footer>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog scrollable v-model="cartDiag" fullscreen>
        <v-card width="100%" height="100%">
          <v-card-title>
            <v-app-bar fixed dark dense color="#00aff0">
              <v-btn icon @click.stop="cartDiag=!cartDiag">
                <v-icon> mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Cart</v-toolbar-title>
            </v-app-bar>
          </v-card-title>
          <v-sheet class="overflow-y-auto" max-height="85vh">
            <v-list two-line class="mt-2 mb-10">
              <v-list-item-group v-for="(item, index) in cartItem" :key="item.index">
                <v-list-item dense>
                  <v-list-item-avatar color="grey darken-3">
                    <v-img v-if="item.info.img != ''" class="elevation-6" :src="item.info.img"></v-img>
                    <v-avatar v-else class="white--text" color="blue"> {{ item.info.name .match(/\b(\w)/g) .join('') .substr(0, 2) }} </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.info.name"></v-list-item-title>
                    <v-list-item-subtitle class="red--text"> {{ computeTotal(item) | toPHP }} </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text> {{ (computeTotal(item) / item.qty) | toPHP }} x {{ item.qty }} </v-list-item-action-text>
                    <v-icon small color="red" @click.stop="removeCart(index)"> mdi-delete </v-icon>
                  </v-list-item-action>
                </v-list-item>
                <v-simple-table dense>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left"> Item </th>
                        <th class="text-left"> Value </th>
                        <th class="text-left"> Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(addon, i) in computeAddOns(
                                item.add_ons,
                                item.info.price
                              )" :key="addon.name + `_` + i + `_` + index">
                        <td>{{ addon.name }}</td>
                        <td>{{ addon.values }}</td>
                        <td v-if="addon.price>0">{{ addon.price | toPHP }}</td>
                        <td v-if="addon.price<1">-</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <p v-if="item.instructions!=''"><strong>Instructions:</strong> {{item.instructions}}</p>
                <v-divider v-if="index + 1 <= cartItem.length" :key="index"></v-divider>
              </v-list-item-group>
            </v-list>
          </v-sheet>
          <v-snackbar v-model="snackbar" color="blue" :timeout="3000"> Item removed from cart </v-snackbar>
          <v-card class="shopresponsive" v-if="cartSize > 0" width="100%">
            <v-divider />
            <v-list-item dense>
              <v-list-item-avatar color="grey darken-3">
                <v-img contain v-if="business.logo != ''" class="elevation-6" :src="business.logo" />
                <v-avatar v-else class="white--text" color="blue"> {{ business.business_name .match(/\b(\w)/g) .join('') .substr(0, 2) }} </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <small>Sold by</small>
                </v-list-item-subtitle>
                <v-list-item-title> {{ business.business_name }} </v-list-item-title>
                <v-list-item-subtitle> {{ business.branch }} </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>
                  <span class="caption grey--text">Total</span>
                  <span class="red--text subtitle-2">{{cartTotal | toPHP }}</span>
                </v-list-item-action-text>
                <v-btn color="red" small outlined @click.stop="$refs.authcard.checkAuth()"> Checkout </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-card>
      </v-dialog>
      <map-card :location="business.location" ref="storeAddress"></map-card>
      <contact-us :contact="business.contact" ref="contactUs"></contact-us>
      <auth-card @auth="checkoutDiag=!checkoutDiag" ref="authcard"></auth-card>
    </v-sheet>
  </v-app>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import {
  GeoCollectionReference
} from 'geofirestore'
import ServiceCard from '~/components/ServiceCard.vue'
// import LaundryCard from '~/components/LaundryCard.vue'
// import MassageCard from '~/components/MassageCard.vue'
import Paypal from '~/components/Paypal'
import MapCard from '~/components/MapCard'
import ContactUs from '~/components/ContactUs'
import AuthCard from '~/components/AuthCard'
export default {
  components: {
    ServiceCard,
    Loading,
    Paypal,
    MapCard,
    ContactUs,
    AuthCard
  },
  layout(context) {
    return 'area'
  },
  asyncData({
    app,
    params,
    error
  }) {
    try {

      return app.$fire.firestore.collection('shops').where('alias', '==', params.id).get().then((data) => {
        const d = data.docs[0].data()


        const biz = {
          isLoading: false,
          business: {
            id: data.docs[0].id,
            business_name: d.business_name,
            branch: d.branch,
            categories: d.categories,
            backdrop: d.backdrop,
            logo: d.logo,
            fees: d.fees,
            opening_time: d.opening_time,
            closing_time: d.closing_time,
            storeType: d.storeType,
            contact: d.contact,
            location: {
              lat: d.location.latitude,
              lng: d.location.longitude
            }
          },
          sharing: {
            url: 'https://goasenso.com/ordering/' + params.id,
            title: `Order your ${d.business_name} - ${d.branch} Food Online at Go Asenso`,
            description: `${d.business_name} - ${d.branch} Food Menu & Online Ordering`,
            hashtags: 'goasenso,food,delivery,onlineorder'
          },
          networks: [{
            network: 'facebook',
            name: 'Facebook',
            icon: 'mdi-facebook',
            color: '#1877f2'
          }, {
            network: 'email',
            name: 'Email',
            icon: 'mdi-gmail',
            color: 'red'
          }, {
            network: 'skype',
            name: 'Skype',
            icon: 'mdi-skype-business',
            color: '#00aff0'
          }, {
            network: 'sms',
            name: 'SMS',
            icon: 'mdi-android-messages',
            color: '#333333'
          }, {
            network: 'telegram',
            name: 'Telegram',
            icon: 'mdi-telegram',
            color: '#0088cc'
          }, {
            network: 'twitter',
            name: 'Twitter',
            icon: 'mdi-twitter',
            color: '#1da1f2'
          }, {
            network: 'whatsapp',
            name: 'Whatsapp',
            icon: 'mdi-whatsapp',
            color: '#25d366'
          }]
        }
        return biz
      }).catch((e) => {
        console.log(e)
        return error({
          statusCode: 404,
          message: 'Blog not found'
        })
      })
    } catch (e) {
      console.log(e)
      return error({
        statusCode: 404,
        message: 'Blog not found'
      })
    }
  },
  data() {
    return {
      cartDiag: false,
      orderComplete: false,
      phoneAuthDiag: false,
      displayName:'',
      menu: false,
      timeDiag: false,
      payload: {
        customer: {
          name: '',
          email: '',
          phone: ''
        },
        fulfillment: 'Store Pick Up',
        delivery: {
          area: {},
          date: '',
          time: '',
          address: ''
        },
        payment: 'Cash',
        items: []
      },
      authDiag: false,
      snackbar: false,
      checkoutDiag: false,
      recaptchaVerifier: null,
      confirmationResult: null,
      codeShow: false,
      isLoading: true,
      drawer: false,
      business: null,
      tab: null,
      services: [],
      phoneCode: '',
      phoneNumber: '',
      isActive: false,
      
    }
  },
  head() {
    const business = this.business
    const url = 'https://goasenso.com/online-order/' + this.$route.fullPath
    return {
      title: `${business.business_name} - Menu and Food Delivery`,
      meta: [{
        hid: `description`,
        name: 'description',
        content: `${business.business_name} ${business.branch}- Online Food Ordering`
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'restaurant.menu'
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: `Food Menu|Order Online - ${business.business_name} ${business.branch}`
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: `Menu for ${business.business_name} ${business.branch}- Order Now. Pay COD!`
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: `${business.logo}`
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: url
      }],
      link: [{
        rel: 'icon',
        type: 'image/png',
        href: `${business.logo}`
      }]
    }
  },
  mounted() {



    this.$bind('services', this.$fire.firestore.collection('shops').doc(this.business.id).collection('services'))
  },

  computed: {
    minDate() {
      var d = new Date(new Date().toISOString().substr(0, 10))

      var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
      return [year, month, day].join('-').toString();
    },
    maxDate() {
      var d = new Date(new Date().toISOString().substr(0, 10))
      d.setDate(d.getDate() + 7)


      var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;
      return [year, month, day].join('-').toString();
    },
    paypalItem() {
      let item = []

      item.push({
        name: 'Item Total',
        description: 'Total Cost of The Item',
        quantity: 1,
        price: this.cartTotal,
        currency: 'PHP'
      })
      if (this.payload.fulfillment === 'For Delivery') {

        item.push({
          name: 'Delivery Fee',
          description: 'Cost of Delivery Charge',
          quantity: 1,
          price: this.deliveryFee,
          currency: 'PHP'
        })

      }
      if (this.payload.payment === 'Debit or Credit Card') {

        item.push({
          name: 'Card Payment Fee',
          description: 'Payment Processing Fee for Card-based Payment',
          quantity: 1,
          price: this.paymentProcessingFee,
          currency: 'PHP'
        })
      }
      return item


    },
    deliveryFee() {
      if (this.payload.fulfillment === 'For Delivery')
        return parseFloat(this.payload.delivery.rate).toFixed(2)
      else
        return 0
    },
    paymentProcessingFee() {
      let total = 0;
      if (this.payload.payment === 'Debit or Credit Card')
        total = ((total + parseFloat(this.cartTotal) + parseFloat(this.deliveryFee)) * 0.05) + 15
      return parseFloat(total).toFixed(2)
    },
    grandTotal() {
      let total = parseFloat(this.deliveryFee) + parseFloat(this.paymentProcessingFee) + parseFloat(this.cartTotal)
      return parseFloat(total).toFixed(2)
    },
    authUser() {
      return this.$fire.auth.currentUser
    },
    isAuth() {
      return this.$store.getters['auth/isAuth']
    },
    cartTotal() {
      return this.$store.getters['cart/getCartTotal']
    },
    cartSize() {
      return this.$store.getters['cart/getCartCount']
    },
    cartItem() {
      return this.$store.getters['cart/getCart']
    }
  },

  watch: {
    isAuth(val) {
      if (val) {
        this.displayName = this.$fire.auth.currentUser.displayName
       
      }

    },
    cartSize() {
      if (this.cartSize > 0) {
        this.$nextTick(() => {
          this.shake()
        })
      }
    }
  },

  methods: {

    generateBookingId() {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let result = 'OR-'
      for (let i = 8; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
      return result
    },
    finishCheckout() {
      this.payload.customer = {
        name: this.$fire.auth.currentUser.displayName,
        phone: this.$fire.auth.currentUser.phoneNumber,
        email: this.$fire.auth.currentUser.email

      }
      this.payload.order_id = this.generateBookingId()
      this.payload.source = 'OL'
      this.payload.status = 'pending'
      this.payload.items = this.cartItem
      this.payload.merchantId = this.business.id
      let payment = 0;
      if (this.payload.payment === 'Debit or Credit Card') {
        payment = parseFloat(this.cartTotal) + parseFloat(this.deliveryFee)
      }
      this.payload.breakdown = {
        mode: this.payload.payment,
        deliveryFee: this.deliveryFee,
        cardFee: this.paymentProcessingFee,
        total: this.cartTotal,
        payment: payment
      }

      this.$fire.firestore.collection('orders').add(this.payload).then(() => {
        this.$store.commit('cart/clearCart');
        this.checkoutDiag = false
        this.orderComplete = true
      });
    },
    paymentCompleted() {
      this.finishCheckout()

      console.log('Payment is Complete')
    },

    removeCart(index) {
      this.$store.commit('cart/removeCart', index)
      this.snackbar = true
    },
    computeTotal(item) {
      let total = 0
      total = total + item.info.price * item.qty
      const addons = Object.values(item.add_ons)
      addons.forEach((a) => {
        if (Array.isArray(a)) {
          a.forEach((b) => {
            total = total + b.price * item.qty
          })
        } else {
          total = total + a.price * item.qty
        }
      })
      return total
    },
    computeAddOns(item, price) {
      const ads = []
      const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase())
      ads.push({
        name: 'Base Price',
        values: '',
        price: price
      })
      let total = parseFloat(price)
      Object.entries(item).map(([key, val]) => {
        if (Array.isArray(val)) {
          ads.push({
            name: capitalize(key),
            values: '',
            price: 0
          })
          val.forEach((i) => {
            total = total + parseFloat(i.price)
            ads.push({
              name: '',
              values: i.name,
              price: i.price
            })
          })
        } else {
          total = total + parseFloat(val.price)
          ads.push({
            name: capitalize(key),
            values: val.name,
            price: val.price
          })
        }
      })

      return ads
    },
    shake() {
      document.getElementById('cart').classList.add('shake')
      setTimeout(() => {
        document.getElementById('cart').classList.remove('shake')
      }, 1500)
    },
    scrollTo() {
      document.getElementById('scrolling-techniques-3').scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
  }
};
</script>

<style scoped>
.v-list-item__icon:first-child {
  margin-right: 10px !important;
}
</style>
