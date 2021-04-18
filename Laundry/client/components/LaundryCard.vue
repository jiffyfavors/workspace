<template>
  <v-layout>
    <v-toolbar dense max-width="100%" class="shopresponsive">
      <v-btn tile block outlined color="red" @click.stop="actionSheet=true">Request Laundry Pick Up</v-btn>
    </v-toolbar>
    <v-bottom-sheet v-model="actionSheet">
      <v-list nav outlined tile width="100%" dense>
        <v-subheader>Booking Form</v-subheader>
        <v-list-item dense @click.stop="contactDiag=true" id="contactDiv">
          <v-list-item-icon>
            <v-icon color="red"> mdi-cellphone </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{contactInfo.name}}</v-list-item-title>
            <v-list-item-subtitle> Contact Information </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action @click.stop="">
            <v-icon color="red"> mdi-chevron-right </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item dense @click.stop="timediag = true" id="timeDiv">
          <v-list-item-icon>
            <v-icon color="red"> mdi-timer </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{pickup_date}} {{pickup_time}}</v-list-item-title>
            <v-list-item-subtitle> Pickup Time </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action @click.stop="">
            <v-icon color="red"> mdi-chevron-right </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item dense @click.stop="addressDiag=true" id="addressDiv">
          <v-list-item-icon>
            <v-icon color="red"> mdi-map-marker </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{address}}</v-list-item-title>
            <v-list-item-subtitle> Pickup Addresss </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="red"> mdi-chevron-right </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-toolbar dense max-width="100%">
        <v-btn tile block outlined color="red" @click.stop="proceedBooking">Proceed Booking</v-btn>
      </v-toolbar>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="addressDiag" width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">Pickup Address</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout wrap>
              <v-flex xs12 md12 lg12 sm12>
                <v-textarea label="Address" v-model="address" outlined></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="saveAddress"> Save </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="contactDiag" width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">Contact Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout wrap>
                <v-flex xs12 md12 lg12 sm12>
                  <v-text-field label="Your name" v-model="contactInfo.name" :rules="[v => !!v || 'This  is required']" required></v-text-field>.
                </v-flex>
                <v-flex xs12 md12 lg12 sm12>
                  <v-text-field label="Contact Number" v-model="contactInfo.mobile" :rules="[v => !!v || 'Phone number is required',v => (v && v.length > 8) || 'Name must be more than 8 characters']" required></v-text-field>
                </v-flex>
                <v-flex xs12 md12 lg12 sm12>
                  <v-text-field label="Email Address" v-model='contactInfo.email' :rules="[v => !!v || 'E-mail is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"></v-text-field>.
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="saveContact"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="timediag" width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">Date & Time</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout wrap>
              <v-flex xs6 md6 lg6 sm6>
                <v-select v-model="pickup_date" flat :items="['Today','Tomorrow']" label="Date">
                </v-select>
              </v-flex>
              <v-flex xs6 md6 lg6 sm6>
                <v-select v-model="pickup_time" flat :items="timeIntervals()" label="Pickup Time" /> </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="timediag = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-dialog v-model="refdiag" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">Appointment created</span>
        </v-card-title>
        <v-card-text>
          <strong>Your Appointment Ref is {{ref}}</strong>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="refdiag = false"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    business: Object
  },
  data() {
    return {
      isValid: false,
      ref: '',
      actionSheet: false,
      contactDiag: false,
      addressDiag: false,
      refdiag: false,
      valid: false,
      dialog: false,
      timediag: false,
      pickup_time: '',
      address: '',
      pickup_date: 'Today',
      contactInfo: {
        name: '',
        mobile: '',
        email: ''
      },
    }
  },
  computed: {
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
      if (this.pickup_date === 'Tomorrow')
        date = date.setDate(date.getDate() + 1);
      if (this.pickup_time != '')
        return new Date(formatDate(date) + ' ' + this.pickup_time).getTime()
      else
        return 0

    }
  },
  methods: {
    proceedBooking() {
      this.isValid = true
      if (!this.valid)
        this.shaker('contactDiv')
      if (this.pickup_date === '' || this.pickup_time === '')
        this.shaker('timeDiv')
      if (this.address === '')
        this.shaker('addressDiv')
      if (this.isValid) {
        let payload = {
          contact: this.contactInfo,
          appointment: this.getTimeStamp,
          address: this.address,
          status:'pending',
          type: 'laundry',
          ref: this.$generateRef()
        }
        this.$fire.firestore.collection('shops').doc(this.business.id).collection('bookings').add(payload).then(() => {
          this.actionSheet = false
          this.ref = payload.ref
          this.refdiag = true
        })


      }
    },

    shaker(id) {
      this.isValid = false
      document.getElementById(id).classList.add('shake')
      setTimeout(() => {
        document.getElementById(id).classList.remove('shake')
      }, 1500)
    },
    saveAddress() {
      this.addressDiag = false
    },
    saveContact() {

      if (this.$refs.form.validate()) {
        this.contactDiag = false
      }
    },
    timeIntervals() {
      var parseIn = function(date_time) {
        var d = new Date();
        d.setHours(date_time.substring(11, 13));
        d.setMinutes(date_time.substring(14, 16));

        return d;
      }

      //make list
      var getTimeIntervals = function(time1, time2) {
        var arr = [];
        while (time1 < time2) {
          arr.push(tConvert(time1.toTimeString().substring(0, 5)));
          time1.setMinutes(time1.getMinutes() + 15);
        }
        return arr;
      }

      function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
          time = time.slice(1); // Remove full string match value
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
      }

      function roundToHour(date) {
        let p = 60 * 60 * 1000; // milliseconds in an hour
        return new Date(Math.round(date.getTime() / p) * p);
      }

      let startTime = parseIn('2020/01/01 ' + this.business.opening_time);
      if (this.pickup_date === 'Today') {
        let _time = roundToHour(new Date())
        let _newTime = _time.getHours() + ':' + (_time.getMinutes() + 30) + ':0' + _time.getSeconds()

        startTime = parseIn('2020/01/01 ' + _newTime)
      }

      let endTime = parseIn('2020-01-01 ' + this.business.closing_time);
      return getTimeIntervals(startTime, endTime);
    }
  }
};
</script>

<style scoped>
.shake {
  border: 2px solid red;
}
</style>
