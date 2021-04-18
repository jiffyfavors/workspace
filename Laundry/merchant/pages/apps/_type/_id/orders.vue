<template>
  <v-card flat>
    <v-toolbar flat>
      <v-bottom-navigation v-model="activeBtn" color="indigo" fixed top grow>
        <v-btn>
          <span>Pending</span>
        </v-btn>
        <v-btn>
          <span>Accepted</span>
        </v-btn>
        <v-btn>
          <span>History</span>
        </v-btn>
      </v-bottom-navigation>
    </v-toolbar>
    <v-card-text>
      <v-layout wrap v-if="activeBtn===0">
        <order-card v-for="(order, i) in orders" :data="order" :key="i"></order-card>
      </v-layout>
      <v-layout wrap v-if="activeBtn===1">
        <order-card v-for="(order, i) in orders" :data="order" :key="i"></order-card>
      </v-layout>
      <v-layout wrap v-if="activeBtn===2">
        <v-flex xs6>
          <v-dialog ref="dialog" v-model="fromDiag" :return-value.sync="from" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="from" label="From" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="from" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="fromDiag = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(from)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex xs6>
          <v-dialog ref="dialog2" v-model="toDiag" :return-value.sync="to" persistent width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="to" label="to" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="to" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="toDiag = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog2.save(to)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-flex>

           <order-card v-for="(order, i) in history" :data="order" :key="i"></order-card>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import OrderCard from '~/components/OrderCard'
export default {
  layout: (context) => 'applayouts/' + context.params.type,
  data: () => ({
    status: 'pending',
    activeBtn: 0,
    fromDiag: false,
    toDiag: false,
    from: '',
    to: '',
    history:[]
  }),
  components: {
    OrderCard
  },
  watch: {
    orders(val) {
      console.log(val)
    },
    from(val){
      this.getHistory()
    },
    to(val){
     this.getHistory()
    },
    history(val){
      console.log(val)
    },
    activeBtn(val) {
      switch (val) {
        case 0:
          this.getBooking('pending');
          break;
        case 1:
          this.getBooking('accepted');
          break;
        case 2:
          break;
        default:
          this.getBooking('pending');
      }
    }
  },
  computed: {
    
    orders() {
      return this.$store.getters['orders/getOrders']({
        id: this.$route.params.id,
        status: this.status
      })
    }
  },
  mounted() {
    this.$store.dispatch('orders/getNotCompleteOrders', {
      id: this.$route.params.id
    })
  },
  methods: {
    getHistory(){
      console.log( this.$moment(this.from).unix()<= this.$moment(this.to).unix())
      console.log(this.$moment(this.to).unix()>=this.$moment(this.from).unix())
          if(this.$moment(this.from).isValid() && this.$moment(this.to).isValid() && this.$moment(this.from).unix()<= this.$moment(this.to).unix() && this.$moment(this.to).unix()>=this.$moment(this.from).unix()){
            console.log('should bind')
            this.$bind('history', this.$fire.firestore.collection('orders')
              .where('merchantId','==',this.$route.params.id)
              .where('timestamp','>=',this.$moment(this.from).unix())
              .where('timestamp','<=',this.$moment(this.to).unix()))
      }
    },
    getBooking(status) {
      this.status = status
        // this.$bind(status, this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('bookings').where('status', '==', status))
    },
  }
};
</script>
