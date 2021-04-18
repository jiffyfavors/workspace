<template>
  <v-card flat>
    <v-toolbar flat>
      <v-bottom-navigation v-model="activeBtn" color="indigo" fixed top grow>
        <v-btn @click.stop="getBooking('pending')">
          <span>Pending</span>
        </v-btn>
        <v-btn @click.stop="getBooking('accepted')">
          <span>Accepted</span>
        </v-btn>
        <v-btn>
          <span>History</span>
        </v-btn>
      </v-bottom-navigation>
      <!-- v-tabs fixed-tabs centered center-active>
        <v-tab @click.stop="status='pending'">Pending</v-tab>
        <v-tab @click.stop="status='accepted'">Accepted</v-tab>
        <v-tab @click.stop="status='declined'">Declined</v-tab>
        </v-tabs> -->
    </v-toolbar>
    <v-card-text>
      <v-layout wrap justify-center align-center text-left v-if="activeBtn===0">
        <appointment-card v-for="(booking, index) in pending" :key="index" :data="booking"></appointment-card>
      </v-layout>
      <v-layout wrap justify-center align-center text-left v-if="activeBtn===1">
        <appointment-card v-for="(booking, index) in accepted" :key="index" :data="booking"></appointment-card>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import AppointmentCard from '~/components/AppointmentCard.vue'
export default {
  data() {
    return {
      status: 'pending',
      pending: [],
      accepted: [],
      history: [],
      activeBtn: 0,

    }
  },
  components: {
    AppointmentCard
  },
  mounted() {


  },
  computed: {
    defaultBusiness() {
      return this.$store.getters['store/getDefaultBusiness']
    }
  },
  methods: {
    getBooking(status) {
      if (!this.defaultBusiness.id)
        this.$store.commit('store/setShowBiz', true)
      else
        this.$bind(status, this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').where('status', '==', status))
    },
    getHistory(date = new Date()){

    }
  },
  watch: {
    pending() {
      console.log(this.pending)
    },
    accepted(){
    	console.log(this.accepted)
    },
    status() {


    },
  }
};
</script>
