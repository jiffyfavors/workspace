<template>
  <v-container fluid v-if="store">
    <v-layout wrap text-left>
         <v-flex xs12 sm6 md6>
          TEST
         </v-flex>
      <v-flex xs12 sm6 md6>
        <token-status :mini="true"></token-status>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title>Your Online Ordering Link</v-card-title>
          <v-card-text>
            <v-text-field readonly solo id="url_link" outlined :value="'https://goasenso.com/ordering/'+store.alias"></v-text-field>
          </v-card-text>
          <v-row align="center" justify="end">
            <v-btn icon @click.stop="copyLink()">
              <v-icon color="grey" class="mr-5">
                mdi-content-copy
              </v-icon>
            </v-btn>
            <client-only>
            <v-menu bottom left>
              <template #activator="{ on, attrs }">
                <v-btn dark icon color="blue" class="mr-5" v-bind="attrs" v-on="on">
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
          </client-only>
          </v-row>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <order-status :pending="pending_orders" :accepted="accepted_orders"></order-status>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TokenStatus from '~/components/TokenStatus.vue'
import OrderStatus from '~/components/OrderStatus.vue'
export default {
  layout: (context) => 'applayouts/' + context.params.type,
  components: {
    TokenStatus,
    OrderStatus
  },
  data() {
    return {
      drawer: false,

    }
  },
  methods: {
    copyLink() {
      var copyText = document.getElementById("url_link");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");


    }
  },
  computed: {
    networks() {
      return [{
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
    },
    sharing() {
      return {

        url: 'https://goasenso.com/ordering/' + this.$route.params.id,
        title: `Order your ${this.store.business_name} - ${this.store.branch} Food Online at Go Asenso`,
        description: `${this.store.business_name} - ${this.store.branch} Food Menu & Online Ordering`,
        hashtags: 'goasenso,food,delivery,onlineorder'
      }

    },
    store() {
      return this.$store.getters['store/getCurrentStore'];
    },
    pending_orders() {
      return this.$store.getters['orders/getOrders']({
        id: this.$route.params.id,
        status: 'pending'
      }).length
    },
    accepted_orders() {
      return this.$store.getters['orders/getOrders']({
        id: this.$route.params.id,
        status: 'accepted'
      }).length
    }
  },
};
</script>
