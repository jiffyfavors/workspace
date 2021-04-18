<template>
  <v-layout>
     <loading :active.sync="loading" loader="bars" :is-full-page="true" color="blue" />
    <v-row>
      <v-bottom-sheet fullscreen v-model="logindiag">
        <v-card>
          <v-toolbar fixed dark color="#00aff0">
            <v-btn icon @click.stop="logindiag = false">
              <v-icon> mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-toolbar-title>Register as Merchant</v-toolbar-title>
          </v-toolbar>
          <v-card flat max-width="100%" class="mx-auto">
            <v-layout flat wrap justify-center align-center text-left>
              <v-flex xs12 md8 sm8 lg8 class="text-center">
                <v-avatar size="150" tile>
                  <v-img src="/icon.png"></v-img>
                </v-avatar>
                <v-card>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-title class="headline green--text">Create Account</v-card-title>
                    <v-card-text>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field dense v-model="fullname" placeholder="Fullname" :rules="nameRules" outlined></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field dense v-model="email" type="email" :rules="emailRules" placeholder="Email Address" outlined></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                          <v-text-field dense v-model="pass1" type="password" placeholder="Password" outlined></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                          <v-text-field dense v-model="pass2" type="password" placeholder="Confirm Password" :rules="[  v => !!v || 'Password is required', (pass1 === pass2) || 'Password must match' ]" outlined></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="info" block @click.stop="Register()">Register</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-bottom-sheet>
    </v-row>
  </v-layout>
</template>

<script>
import Loading from '~/components/Loading'
export default {
  components:{
    Loading
  },
  data() {
    return {
      valid: false,
      logindiag: false,
      loading:false,
      email: '',
      pass1: '',
      pass2:'',
      color:'blue',
      fullname: '',
        text:'',
      snackbar:false,
       timeout: 10000,
      nameRules: [
        v => !!v || 'This  is required'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    isMatchPWD() {
      return (this.pass1 != this.pass2) || 'Password mismatch'
    }
  },
  methods: {
    openDiag() {
      this.logindiag = true;
    },
    Register() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$fire.auth.createUserWithEmailAndPassword(this.email, this.pass1).then((user) => {
          console.log(user)
          this.snackbar = true
          this.color = "green"
          this.text = "Signup successful!"

          let payload = {
            balance: 0,
            currency: 'PHP',
            maintaining: 500,
            uids: [user.user.uid],
            users: [{
              name: this.fullname,
              type: 'admin',
              uid: user.user.uid,
              access: []
            }]
          }
          this.$fire.firestore.collection('users').add(payload);

        }).catch((error) => {
          this.snackbar = true
          this.color = 'error'
          this.text = error.message
        });
      }
    },
  }
};
</script>
