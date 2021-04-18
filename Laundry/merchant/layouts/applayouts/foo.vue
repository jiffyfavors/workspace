<template>
  <v-app id="e3" v-if="store">
    <v-app-bar color="blue" class="white--text text-center" dense app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="isDash">Dashboard</v-toolbar-title>
      <v-toolbar-title v-if="!isDash">{{$route.fullPath.substr($route.fullPath.lastIndexOf('/')+1, $route.fullPath.length).toUpperCase()}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="cartSize > 0" icon text id="cart" @click.stop="$refs.cart.showCart()">
        <v-badge color="red">
          <template #badge overlap> {{ cartSize }} </template>
          <v-icon color="white" dense> mdi-cart-outline </v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped floating temporary color="blue" app dark>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar rounded size="35" class="mr-2" color="white"> <img :src="store.logo"> </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{store.business_name}}</v-list-item-title>
            <v-list-item-subtitle>@{{store.alias}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id " exact>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action prepend-icon="mdi-cog-box">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Sales Channel</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id +'/pos' " exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>POS</v-list-item-title>
              <v-list-item-subtitle>Manage inhouse sales</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id+ '/ordering'" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Online Ordering</v-list-item-title>
              <v-list-item-subtitle>Expand Sales Reach</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/table-res'" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Table Reservation</v-list-item-title>
              <v-list-item-subtitle>Advance diner booking</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/qrmenu'" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>QR Menu</v-list-item-title>
              <v-list-item-subtitle>Self-ordering menu</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/orders'" exact>
          <v-list-item-icon>
            <v-icon>mdi-history</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action prepend-icon="mdi-cog-box">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/setup'">
            <v-list-item-content>
              <v-list-item-title>Business Setup</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Table Management</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/menu'">
            <v-list-item-content>
              <v-list-item-title>Menu Management</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Subscriptions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item  to="/appcenter">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Exit App</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <card-diag ref="cart"></card-diag>
    <v-content>
      <nuxt></nuxt>
    </v-content>
  </v-app>
</template>

<script>
import CardDiag from '~/components/CartDiag'
export default {
  components:{
    CardDiag
  },
  data() {
    return {
      drawer: false,
      isDash: true,
      store: {
        logo: '',
        alias: '',
        business_name: ''
      }
    }
  },
  watch: {
    cartSize() {
      if (this.cartSize > 0) {
        this.$nextTick(() => {
          this.shake()
        })
      }
    },
    $route(to, from) {
  
      let dashpath = '/apps/' + this.$route.params.type + '/' + this.$route.params.id
      this.isDash = false
      if (to.path === dashpath)
        this.isDash = true
     // if(from.path==dashpath+'/setup')
     //      this.storeBind()
        //  this.show = false;
    }
  },
  computed: {

    cartSize() {
      return this.$store.getters['cart/getCartCount']
    },

  },

  mounted() {
this.storeBind()
  },
  methods: {
    storeBind(){
 this.$bind('store', this.$fire.firestore.collection('shops').doc(this.$route.params.id)).then(()=>{
      this.$store.commit('store/setCurrentStore', this.store);
         this.$store.commit('cart/clearCart');
    })

    },
    shake() {
      document.getElementById('cart').classList.add('shake')
      setTimeout(() => {
        document.getElementById('cart').classList.remove('shake')
      }, 1500)
    },
  }
};
</script>

<style scoped>
>>> .v-list-item__icon {
  margin-right: 20px !important;
}

.v-application--is-ltr .v-list--dense.v-list--nav .v-list-group--no-action > .v-list-group__items > .v-list-item {
  padding-left: 24px !important;
}
</style>
