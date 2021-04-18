<template>
  <v-row>
    <v-bottom-sheet width="500" v-model="phoneAuthDiag">
      <v-card>
        <v-card-title>Verify Phone Number</v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 v-if="!codeShow">
              <v-text-field v-model="phoneNumber" label="Mobile" prefix="+63"></v-text-field>
            </v-flex>
            <v-flex xs12 v-if="codeShow">
              <v-text-field v-model="phoneCode" label="Verification Code"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text small @click.stop="phoneAuthDiag=!phoneAuthDiag">Close</v-btn>
          <v-btn text small id="btnNext" v-if="!codeShow" @click.stop="codeNext">Next</v-btn>
          <v-btn text small v-if="codeShow" @click.stop="verifyCode">Verify</v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet width="500" v-model="authDiag">
      <v-card>
        <v-card-title>Account</v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <auth-ui></auth-ui>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-row>
</template>

<script>
import AuthUi from '~/components/AuthUi.vue'
export default {
  components: {
    AuthUi
  },
  data: () => ({
    phoneAuthDiag: false,
    authDiag: false,
    codeShow: false,
    phoneNumber: '',
    phoneCode: '',
    recaptchaVerifier: null,
    confirmationResult: null
  }),
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth']
    },

  },
  watch:{
  	isAuth(){
  		this.checkAuth()
  	}
  },
  methods: {

    checkAuth() {

    	this.phoneAuthDiag = false
    	this.authDiag = false
      if (this.isAuth && this.$fire.auth.currentUser.phoneNumber !== null) {
        this.authDiag = false
        this.$emit('auth');
      } else if (this.isAuth && this.$fire.auth.currentUser.phoneNumber == null) {
        this.phoneAuthDiag = true
      } else
        this.authDiag = true

    },
    accountLinker(credential) {

      // this.$fireModule.auth().currentUser.linkWithCredential(credential).then(function(result) {

      //   var credential = result.credential;
      //   var user = result.user;
      //   this.$emit('auth');

      // }).catch(function(error) {
      //   console.log(error)

      // });

       this.$fireModule.auth().currentUser.linkWithCredential(credential).then(result=>{
       	 var credential = result.credential;
        var user = result.user;
        this.$emit('auth');
       }).catch(error=>{
       	console.log(error)

       });

    },
    codeNext() {
      this.recaptchaVerifier = new this.$fireModule.auth.RecaptchaVerifier('btnNext', {
        'size': 'invisible',
        'callback': (response) => {
          this.codeShow = true

        }
      });

      this.$fireModule.auth().signInWithPhoneNumber("+63" + this.phoneNumber, this.recaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult
        });

    },
    verifyCode() {
      var credential = this.$fireModule.auth.PhoneAuthProvider.credential(this.confirmationResult.verificationId, this.phoneCode)
      this.accountLinker(credential)

    }
  }
};
</script>
