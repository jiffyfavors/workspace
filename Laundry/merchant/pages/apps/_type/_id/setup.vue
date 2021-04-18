<template>
  <v-content>
    <v-layout wrap>
      <v-flex xs12 v-if="value===0">
        <v-img class="elevation-6" max-height="250px" min-height="150px" width="100%" :src="editedItem.backdrop" @click.stop="generareFileList">
          <v-avatar style="position:absolute; bottom:0;">
            <v-img class="elevation-6" :src="editedItem.logo" @click.stop="generareFileList" /> </v-list-item-avatar>
          </v-avatar>
        </v-img>
        <v-card class="pa-2">
          <v-layout wrap>
            <v-flex xs8 sm8 md8>
              <v-text-field v-model="editedItem.business_name" label="Business Name"></v-text-field>
            </v-flex>
            <v-flex xs4 sm4 md4>
              <v-text-field v-model="editedItem.branch" label="Branch"></v-text-field>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <v-text-field v-model="editedItem.opening_time" type="time" label="Opening Time"></v-text-field>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <v-text-field v-model="editedItem.closing_time" type="time" label="Closing Time"></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-text-field v-model="pageUsername" prefix="@" label="Store Username" :error-messages="errors"></v-text-field>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-btn outlined text block color="blue" @click.stop="save" :disabled="errors.length>0">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 v-if="value===1">
        <v-list>
          <v-list-item v-for="(c,i) in contactInfos" :key="i" @click.stop="contactDetails = Object.assign({},c), editIndex = i, contactDiagForm = true">
            <v-list-item-icon>
              <v-icon>{{getIcon(c)}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{c.value}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn fab class="fabicon mb-5" color="green" dark small bottom fixed right @click.stop="contactDetails.value='',  editIndex=-1,contactDiagForm = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 v-if="value===2">
        <div class="mapcontainer">
          <GMap id="gmap" ref="gMap" :center="mylocation" :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: true, zoomControl: true, gestureHandling: 'greedy'}" :zoom="15" @center_changed="centerChange">
            <GMapMarker ref="gmapmarker" :position="mylocation" :options="{icon:selectedmarker}"> </GMapMarker>
          </GMap>
        </div>
      </v-flex>
      <v-flex xs12 v-if="value===3">
        <v-card>
          <v-card-subtitle>Delivery Fees</v-card-subtitle>
          <v-card-text>
            <v-list dense>
              <v-list-item v-for="(fee, i) in fees" :key="i" @click.stop="feeTemp =  fee, feeIndex = i, feeDiag = true">
                <v-list-item-content>
                  <v-list-item-title>{{fee.rate|toPHP}}</v-list-item-title>
                  <v-list-item-subtitle>{{fee.area}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="red" @click.stop="deleteFee(i)">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-btn fab class="fabicon mb-5" color="green" dark small bottom fixed right @click.stop="feeTemp={area:'', rate:0},feeIndex = -1, feeDiag = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-bottom-navigation v-model="value" color="teal" grow bottom fixed>
      <v-btn>
        <span>Info</span>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
      <v-btn>
        <span>Contacts</span>
        <v-icon>mdi-card-account-phone-outline</v-icon>
      </v-btn>
      <v-btn>
        <span>Location</span>
        <v-icon>mdi-home-map-marker</v-icon>
      </v-btn>
      <v-btn>
        <span>Fees</span>
        <v-icon>mdi-cash-check</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-row>
      <v-dialog v-model="feeDiag" max-width="500">
        <v-card>
          <v-card-title>
            Delivery Fee Editor
          </v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 md12 sm12>
                <v-text-field label="Area" v-model="feeTemp.area" /> </v-flex>
              </v-flex>
              <v-flex xs12 md12 sm12>
                <v-text-field label="Rate" type="number" v-model="feeTemp.rate" /> </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click.stop="feeDiag=false">Cancel</v-btn>
              <v-btn text @click.stop="saveFee()">Save</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="contactDiagForm" max-width="500">
        <v-card>
          <v-card-title>
          </v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 md12 sm12>
                <v-select :items="['mobile','messenger','email']" label="type" v-model="contactDetails.type"></v-select>
              </v-flex>
              <v-flex xs12 md12 sm12>
                <v-text-field label="value" v-model="contactDetails.value" /> </v-flex>
            </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click.stop="contactDiagForm=false">Cancel</v-btn>
              <v-btn text @click.stop="deleteContact" v-if="editIndex>-1">Delete</v-btn>
              <v-btn text @click.stop="saveContact">Save</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="imagediag" max-width="400px">
        <v-card>
          <v-card-text>
            <v-container>
              <vuedropzone id="customdropzone" ref="imgDropZone" :options="dropzoneOptions" @vdropzone-complete="afterComplete" />
              <vue-select-image ref="imageSelector" :data-images="images" :is-multiple="true" @onselectmultipleimage="onSelectMultipleImage" /> </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="deleteSelected"> Delete </v-btn>
            <v-btn color="blue darken-1" text @click="setAsLogo"> Set as Logo </v-btn>
            <v-btn color="blue darken-1" text @click="setAsBackdrop"> Set as Backdrop </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-content>
</template>

<script>
const uuid = require('uuid')
const debounce = require('lodash.debounce')
export default {
  layout: (context) => 'applayouts/' + context.params.type,
  data: () => ({
    fees: [{
      area: 'Santa Monica',
      rate: 50
    }, {
      area: 'Tiniguiban',
      rate: 60
    }],
    feeTemp: {
      area: '',
      rate: 0
    },
    feeDiag: false,
    feeIndex: -1,
    value: 0,
    imagediag: false,
    selectedImages: [],
    invalidUserName: false,
    pageUsername: '',
    errors: [],
    oldUsername: '',
    searchUsername: [],
    editedItem: {},
    editIndex: -1,
    contactInfos: [],
    contactDetails: {
      type: 'mobile',
      value: ''
    },
    contactDiagForm: false,
    dropzoneOptions: {
      url: '/',
      thumbnailWidth: 50,
      thumbnailHeight: 50,
      addRemoveLinks: false,
      acceptedFiles: '.jpg, .jpeg, .png',
      dictDefaultMessage: `<p class='text-default'><v-icon small color="blue">mdi-upload</v-icon> Drag Images or Click Here</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          `
    },
    images: [],
    selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
    mylocation: {
      lat: 9.7941185,
      lng: 118.7322599
    },
    isMapUpdated: false
  }),
  watch: {
    pageUsername: debounce(async function(val) {
      let data = await this.$fire.firestore.collection('shops').where('alias', '==', val).get()
      if (data.docs.length === 0)
        this.errors = []
      else if (data.docs.length === 1) {
        this.errors = data.docs[0].data().alias === this.editedItem.alias ? [] : ['Username is already taken']
      } else
        this.errors = ['Username already taken']
    }, 500),
    isMapUpdated(val) {
      if (val) {
        const coordinates = this.$refs.gMap.map.getCenter()
        this.$refs.gmapmarker.marker.setPosition({
          lat: coordinates.lat(),
          lng: coordinates.lng()
        })
        this.updateMapLocation()

        this.mylocation = {
          lat: coordinates.lat(),
          lng: coordinates.lng()
        }
      }
    }
  },
  mounted() {
    this.$bind('editedItem', this.$fire.firestore.collection('shops').doc(this.$route.params.id)).then(() => {
      this.oldUsername = this.editedItem.alias
      this.pageUsername = this.oldUsername
      this.contactInfos = this.editedItem.contact
      this.fees = typeof(this.editedItem.fees) !== 'undefined' ? this.editedItem.fees : []
      this.mylocation = {
        lat: this.editedItem.location.latitude,
        lng: this.editedItem.location.longitude
      }
    })
  },
  methods: {
    deleteFee(index) {

      this.fees.splice(index, 1);
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
        fees: this.fees
      })
    },
    saveFee() {

      if (this.feeIndex < 0) {
        this.fees.push(this.feeTemp)
      } else {
        this.fees[this.feeIndex] = this.feeTemp
      }
      this.$nextTick(() => {
        this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
          fees: this.fees
        }).then(() => {
          this.feeDiag = false
        })

        this.feeIndex = -1;
      })


    },
    centerChange() {
      this.isMapUpdated = false
      const coordinates = this.$refs.gMap.map.getCenter()
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      })

      setTimeout(() => {
        this.isMapUpdated = true

      }, 1500)
    },
    updateMapLocation() {
      const data = Object.assign({}, this.editedItem)
      const coordinates = this.$refs.gMap.map.getCenter()
      data.location = new this.$fireModule.firestore.GeoPoint(coordinates.lat(), coordinates.lng())
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update(data)
    },
    deleteContact() {
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
        contact: this.$fireModule.firestore.FieldValue.arrayRemove(this.contactDetails)
      }).then(() => {
        this.contactInfos = this.editedItem.contact
        this.contactDiagForm = false
      })

    },

    saveContact() {
      //let info = Object.assign({}, this.editedItem)
      if (this.editIndex == -1) {
        this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
          contact: this.$fireModule.firestore.FieldValue.arrayUnion(this.contactDetails)
        }).then(() => {
          this.contactInfos = this.editedItem.contact
          this.contactDiagForm = false
        })
      } else {
        let contact = Object.assign({}, this.editedItem.contact)
        contact[this.editIndex] = this.contactDetails
        this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
          contact: contact
        }).then(() => {
          this.contactInfos = this.editedItem.contact
          this.contactDiagForm = false
        })
      }

    },
    onSelectMultipleImage(data) {
      this.selectedImages = data
    },

    setAsLogo() {
      this.editedItem.logo = this.selectedImages[0].src
      this.imagediag = false
    },
    setAsBackdrop() {
      this.editedItem.backdrop = this.selectedImages[0].src
      this.imagediag = false
    },
    deleteSelected() {
      this.selectedImages.forEach((a) => {

        this.$fire.storage.ref(a.id).delete().then(() => {
          this.images.splice(this.images.indexOf(a), 1)
        })
      })
    },
    afterComplete(upload) {
      const imageName = uuid.v1()
      this.isLoading = true
      try {
        // save image
        const file = upload
        const ref = this.$fire.storage.ref(this.$store.getters['auth/getAccessInfo'][0].id + '/' + imageName + '-' + file.name)
        ref.put(file).then((snap) => {
          snap.ref.getDownloadURL().then((url) => {
            this.images.push({
              id: snap.ref.fullPath,
              src: url
            })
          })
        })
      } catch (error) {
        console.log(error)
      }
      this.$refs.imgDropZone.removeFile(upload)
    },
    generareFileList() {
      this.images = []
      this.selectedImages = []
      this.$fire.storage.ref(this.$store.getters['auth/getAccessInfo'][0].id).listAll().then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            this.images.push({
              id: itemRef.fullPath,
              src: url
            })
          })
        })
      })
      console.log(this.$store.getters['auth/getAccessInfo'][0].id)
      this.imagediag = true
    },
    getIcon(val) {
      if (val.type === 'mobile') return 'mdi-phone'
      else if (val.type === 'messenger') return 'mdi-facebook-messenger'
      else if (val.type === 'email') return 'mdi-email'
    },
    save() {

      var data = Object.assign({}, this.editedItem)
      data.alias = this.pageUsername
      this.oldUsername = this.pageUsername
      var url = data.business_name.replace(' ', '_').replace("'", '').toLowerCase() + '_' + data.branch.replace(' ', '_').replace("'", '').toLowerCase()
      data.url = url.replace(/ /g, '_').replace(/'/g, '')
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update(data).then(() => {})
    },

  }
};
</script>

<style scoped>
.fabicon {
  position: fixed;
  bottom: 15%;
  right: 5%;
}
</style>
