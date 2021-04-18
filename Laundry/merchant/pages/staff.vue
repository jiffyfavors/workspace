<template>
  <v-layout wrap>
    <v-flex xs12 md12 sm12 lg12>
      <v-card>
        <v-card-title>Manage Staff</v-card-title>
        <v-card-subtitle v-if="staffs.length===0">You have no staff accounts</v-card-subtitle>
        <v-card-text>
          <v-list dense>
            <v-subheader>Staffs</v-subheader>
            <v-list-item v-for="(staff,index) in staffs" :key="index" @click.stop="editId= staff.id, editMode=true, payload = Object.assign({}, staff), diag = true">
              <v-list-item-content>
                <v-list-item-title>{{ staff.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  @{{ staff.alias }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-btn fab class="fabicon mb-5" color="green" dark @click.stop="editMode = false, payload = {name: '',alias: '',authCode: ''},generateAuthCode(), diag=true" small bottom fixed right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="diag" width="500">
      <v-card>
        <v-card-title>{{editMode ? 'Update Staff' :'Add Staff'}}</v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="payload.name" label="Fullname"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="payload.alias" prefix="@" label="Alias"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="payload.authCode" label="Authorization Code" class="centered-input text--darken-3 mt-3"  readonly ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn outlined @click.stop="generateAuthCode()" block small>Generate</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click.stop="diag=false">Cancel</v-btn>
          <v-btn text v-if="editMode" @click.stop="deleteStaff()">Delete</v-btn>
          <v-btn text v-if="!editMode" @click.stop="saveStaff">Save</v-btn>
          <v-btn text v-else @click.stop="updateStaff">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {

  data: () => ({
    diag: false,
    editMode: false,
    editId: null,
    payload: {
      name: '',
      alias: '',
      authCode: ''
    }
  }),
  computed: {
    staffs() {
      return this.$store.getters['auth/getStaff']
    }
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('auth/getStaff', this.$store.getters['auth/getAccessInfo'][0].id)
    }, 1200);

  },
  methods: {
    deleteStaff() {
      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('staffs').doc(this.editId).delete()
      this.diag = false
    },
    saveStaff() {
      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('staffs').add(this.payload)
      this.diag = false
    },
    updateStaff() {

      this.$fire.firestore.collection('users').doc(this.$store.getters['auth/getAccessInfo'][0].id).collection('staffs').doc(this.editId).update(this.payload)
      this.diag = false
    },
    generateAuthCode() {

      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let result = ''
      for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
      this.payload.authCode = result
    },

  }


};
</script>

<style scoped>
/deep/ .centered-input input {
  text-align: center
}
</style>
