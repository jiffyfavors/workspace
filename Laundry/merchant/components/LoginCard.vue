<template>
  <v-layout>
    <v-row>
      <v-bottom-sheet fullscreen v-model="logindiag">
        <v-card>
          <v-toolbar fixed dark color="#00aff0">
            <v-btn icon @click.stop="logindiag = false">
              <v-icon> mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card flat max-width="100%" class="mx-auto">
            <v-layout flat wrap justify-center align-center text-left>
              <v-flex xs12 md8 sm8 lg8 class="text-center">
                <v-avatar size="150" tile>
                  <v-img src="/icon.png"></v-img>
                </v-avatar>
                <v-card>
                  <v-card-title class="headline green--text">Login</v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field dense v-model="email" type="email" :rules="emailRules" placeholder="Email Address" outlined></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field dense v-model="pass1" type="password" placeholder="Password" outlined></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="info" block @click.stop="Login()">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-bottom-sheet>
       <v-snackbar v-model="snackbar" :color="color" :timeout="timeout"> {{text}} </v-snackbar>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      logindiag: false,
      email: '',
      pass1: '',
      text:'',
      color:'blue',
      snackbar:false,
       timeout: 10000,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    openDiag() {
      this.logindiag = true;
    },
    Login() {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.pass1).catch(error => {
        this.snackbar = true
        this.color = 'error'
        this.text = 'Account Not Exist'
      }).then(() => {
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)

      })
    }
  }
};
</script>
