<template>
  <v-flex xs12 md4 sm4 lg3 class="ma-1">
    <v-card class="mx-auto" max-width="400">
      <span class="bestseller">{{ data.ref.toUpperCase() }}</span>
      <v-card-text>
        <v-layout wrap class="mt-5">
          <v-flex xs4 sm4 md4>
            <strong>Time</strong>
          </v-flex>
          <v-flex xs8 sm8 md8>
            <strong>{{ $moment(data.appointment).format('MMM DD YYYY, h:mm A',Intl.DateTimeFormat().resolvedOptions().timeZone) }}</strong>
          </v-flex>
          <v-divider></v-divider>
          <v-flex xs4 sm4 md4>
            <strong>Status</strong>
          </v-flex>
          <v-flex xs8 sm8 md8>
            <strong>{{data.status.toUpperCase()}}</strong>
          </v-flex>
          <v-divider></v-divider>
          <template v-if="data.status==='accepted'">
            <v-flex xs4 sm4 md4>
              <strong>Name</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.contact.name}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Phone</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.contact.mobile}}</strong>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs4 sm4 md4>
              <strong>Email</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.contact.email}}</strong>
            </v-flex>
            <v-divider></v-divider>
          </template>
          <template v-if="data.type==='massage'">
            <v-flex xs4 sm4 md4>
              <strong>Partcipants</strong>
            </v-flex>
            <v-flex xs8 sm8 md8>
              <strong>{{data.participants.Male}} Male, {{data.participants.Female}} Female</strong>
            </v-flex>
            <v-divider></v-divider>
          </template>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <template v-if="data.status==='pending'">
          <v-spacer></v-spacer>
          <v-btn text small color="red" @click.stop="declineDiag = true">Decline</v-btn>
          <v-btn text small color="blue" @click.stop="acceptBooking()">Accept</v-btn>
        </template>
        <template v-else-if="data.status==='accepted'">
          <v-spacer></v-spacer>
          <v-btn text small color="green" @click.stop="actionSheet=true">Action</v-btn>
        </template>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="declineDiag" max-width="500" persistent>
      <v-card>
        <v-card-title>Decline Bookking</v-card-title>
        <v-card-text>
          <p>Please state reason for declined</p>
          <v-textarea label="Reason" outlined v-model="declinedReason"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text small color="red" @click.stop="declineDiag = false">Cancel</v-btn>
          <v-btn text small color="blue" :disabled="declinedReason.length<5" @click.stop="declinedBooking()">Proceed</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-bottom-sheet v-model="actionSheet" inset scrollable max-width="400">
        <v-card>
          <v-card-title>{{data.contact.name}} Appointment</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-subheader>Select action</v-subheader>
            <v-list dense single-line>
              <v-list-item @click.stop="tagger('no show')">
                <v-list-item-title>Tag as <strong>No Show</strong></v-list-item-title>
              </v-list-item>
              <v-list-item @click.stop="tagger('complete')">
                <v-list-item-title>Tag as <strong>Complete</strong></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item @click.stop="timediag = true">
                <v-list-item-title>Reschedule</v-list-item-title>
              </v-list-item>
              <v-list-item @click.stop="invoiceDiag = true, actionSheet = false">
                <v-list-item-title>Create & Manage Billing</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>View Invoice</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
      <v-bottom-sheet v-model="timediag" width="500px" persistent>
        <v-card>
          <v-card-title>
            <span class="headline">Reschedule</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout wrap>
                <v-flex xs6 md6 lg6 sm6>
                  <v-select v-model="date" flat :items="['Today','Tomorrow']" label="Date">
                  </v-select>
                </v-flex>
                <v-flex xs6 md6 lg6 sm6>
                  <v-text-field type="time" v-model="time"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="red darken-1" text @click="timediag = false"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="reschedAppointment"> Reschedule </v-btn>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>
      <v-bottom-sheet v-model="invoiceActionSheet" inset scrollable max-width="400">
        <v-card>
          <v-card-title>Invoice Action</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <v-subheader>Select action</v-subheader>
            <v-list dense single-line>
              <v-list-item @click.stop="paymentsDiag = true">
                <v-list-item-title>Payments</v-list-item-title>
              </v-list-item>
              <v-list-item @click.stop="">
                <v-list-item-title>Discounts</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item @click.stop="">
                <v-list-item-title>Taxes</v-list-item-title>
              </v-list-item>
              <v-list-item @click.stop="">
                <v-list-item-title>Preview</v-list-item-title>
                <v-divider></v-divider>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Share</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
 
      <invoice :data="data" v-model="invoiceDiag"></invoice>
    </v-row>
  </v-flex>
</template>

<script>
import Invoice from '~/components/Invoice.vue'
export default {
  props: {
    data: Object
  },
  components: {
    Invoice
  },
  data() {
    return {
      actionSheet: false,
      declineDiag: false,
      paymentsDiag: false,
      invoiceActionSheet: false,
      declinedReason: '',
      timediag: false,
      isSearch: false,
      date: 'Today',
      time: '09:00:00',
      invoiceDiag: false,
    }
  },
  computed: {
    defaultBusiness() {
      return this.$store.getters['store/getDefaultBusiness'] },

    getTimeStamp() {

      let formatDate = function(date) {
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        return [year, month, day].join('/');
      }

      let date = new Date()
      if (this.date === 'Tomorrow')
        date = date.setDate(date.getDate() + 1);
      if (this.date != '')
        return new Date(formatDate(date) + ' ' + this.time).getTime()
      else
        return 0

    }
  },


  methods: {
  	diagTrigger(){
  		console.log('diagTrigger')
  	},
    reschedAppointment() {
      this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').doc(this.data.id).update({
        appointment: this.getTimeStamp
      }).then(() => {
        this.timediag = false
      })
    },
    tagger(tag) {
      this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').doc(this.data.id).update({
        status: tag
      }).then(() => {
        this.actionSheet = false
      })
    },
    acceptBooking() {
      this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').doc(this.data.id).update({
        status: 'accepted'
      }).then(() => {
        this.declineDiag = false
      })
    },
    declinedBooking() {
      this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').doc(this.data.id).update({
        status: 'declined',
        declinedReson: this.declinedReason
      }).then(() => {
        this.declineDiag = false
      })
    },


  }
};
</script>

<style scoped>
.list-scroll {
  height: 50vh;
  overflow-y: auto;
}
</style>
