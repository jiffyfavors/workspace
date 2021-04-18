f
<template>
  <v-container fluid>
    <v-layout wrap align-center v-if="value===0">
      <v-flex v-for="item in services" :key="item.name + '_' + item" xs12 md4 sm4 lg4 class="pa-1" @click.stop="serviceData = Object.assign({},item), currentServiceId = item.id, foodDiag = true">
        <v-lazy v-model="isActive" :options="{threshold: .6}" transition="fade-transition">
          <v-card max-width="100%" outlined>
            <v-list-item dense>
              <v-list-item-content>
                <h3>
          <strong>{{ item.name }}</strong>
        </h3>
                <span style="font-style:italic;">
                    <small v-html="item.desc"></small>
                </span>
                <span class="caption grey--text">From</span>
                <div class="ml-2 red--text subtitle-1">
                  <strong>{{ item.price | toPHP }} </strong> per {{item.unit}} </div>
              </v-list-item-content>
              <v-list-item-avatar v-if="item.img.length>0" tile size="100">
                <v-img :src="item.img"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-lazy>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center v-if="value===1">
      <v-flex xs12>
        <v-list dense>
          <v-list-item v-for="(cat, i) in categories" :key="i">
            <v-list-item-content @click.stop="categoryIndex = i, oldCategoryText = cat, categoryText = cat, categoryDiag = true">
              <v-list-item-title>{{cat}}</v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="red" @click.stop="oldCategoryText = cat, deleteCategory(i)">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
    <v-btn fab class="fabicon mb-5" color="green" dark small bottom fixed right @click.stop="catalogAction()">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-bottom-navigation v-model="value" color="teal" grow bottom fixed>
      <v-btn>
        <span>Items</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn>
        <span>Categories</span>
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-row>
      <v-dialog v-model="foodDiag" fullscreen>
        <v-card>
          <v-card-title>
            <span class="headline">{{currentServiceId===''? 'Add Item' : 'Update Item'}}</span>
          </v-card-title>
          <v-card-text class="mb-5">
            <v-tabs show-arrows v-model="activeTab" grow center-active>
              <v-tab>Details</v-tab>
              <v-tab>Options</v-tab>
            </v-tabs>
            <v-tabs-items v-model="activeTab">
              <v-tab-item>
                <v-img min-width="200px" max-height="200px" min-height="50px" class="elevation-6" :src="serviceData.img" @click.stop="generareFileList" contain>
                  <h3 v-if="serviceData.img===''">Upload Listing Photo</h3>
                </v-img>
                <v-layout wrap>
                  <v-flex xs12 md12 sm12>
                    <v-text-field label="Name" v-model="serviceData.name" /> </v-flex>
                  <v-flex xs4 md4 sm4>
                    <v-text-field type="number" label="Base Price" v-model="serviceData.price" /> </v-flex>
                  <v-flex xs4 md4 sm4>
                    <v-text-field label="Unit" v-model="serviceData.unit" /> </v-flex>
                  <v-flex xs4 md4 sm4>
                    <v-select v-model="serviceData.category" label="Category" :items="categories"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <wysiwyg placeholder="Description" v-model="serviceData.desc" label="Description"> </wysiwyg>
                  </v-flex>
                </v-layout>
              </v-tab-item>
              <v-tab-item>
                <v-toolbar flat>
                  <v-spacer></v-spacer>
                  Add Options
                  <v-btn icon small text color="green" @click.stop="option=Object.assign({}, optionTemplate) , optionIndex=-1, option.values = [], optionDiag=true">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-list dense>
                  <v-list-item v-for="(opt, index) in serviceData.options" :key="index" @click.stop="optionIndex=index, option = Object.assign({}, opt), optionDiag = true">
                    <v-list-item-content>
                      <v-list-item-title>{{opt.name}}</v-list-item-title>
                      <v-chip-group column>
                        <v-chip small color="blue" v-for="(d,i) in opt.values" class="white--text" :key="i">{{d.name}}</v-chip>
                      </v-chip-group>
                      <v-divider></v-divider>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="red" @click.stop="serviceData.options.splice(index, 1)">mdi-delete</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
          <v-card-actions>
            <v-toolbar class="shopresponsive" flat>
              <v-spacer></v-spacer>
              <v-btn text @click.stop="foodDiag=false">Cancel</v-btn>
              <v-btn text @click.stop="deleteService" v-if="currentServiceId!=''">Delete</v-btn>
              <v-btn text @click.stop="saveService()">{{currentServiceId===''? 'Save' : 'Update'}}</v-btn>
            </v-toolbar>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog width="500" v-model="categoryDiag" persistent>
        <v-card>
          <v-card-title>Category Editor</v-card-title>
          <v-card-text>
            <v-text-field v-model="categoryText" outlined></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small text @click.stop="categoryDiag = false">Cancel</v-btn>
            <v-btn small text @click.stop="saveCategory">Save</v-btn>
          </v-card-actions>
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
            <template>
              <v-btn color="blue darken-1" text @click="imagediag = false">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="setAsImage">Set as Image</v-btn>
            </template>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="optionDiag" persistent width="100%">
        <v-card flat>
          <v-card-text>
            <v-layout wrap>
              <v-flex xs12 md12 lg12>
                <v-text-field v-model="option.name" label="Name"></v-text-field>
              </v-flex>
              <v-flex xs4 md4 lg4>
                <v-text-field v-model="option.min" type="number" label="Min"></v-text-field>
              </v-flex>
              <v-flex xs4 md4 lg4>
                <v-text-field v-model="option.max" type="number" label="Max"></v-text-field>
              </v-flex>
              <v-flex xs4 md4 lg4>
                <v-switch v-model="option.required" label="Required"></v-switch>
              </v-flex>
            </v-layout>
            <v-simple-table dense fixed-header max-width="100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"> Name </th>
                    <th class="text-left"> Price
                      <v-icon small color="blue" v-if="option.values.length<=0" @click.stop="option.values.push({name:'New Value',price:0})"> mdi-plus </v-icon>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in option.values" :key="index">
                    <td style="width:60%">
                      <input v-model="val.name" type="text" style="width:100%"> </td>
                    <td style="width:40%">
                      <input v-model="val.price" type="number" size="8" style="width:100%"> </td>
                    <v-icon small color="red" @click.stop="option.values.splice(index,1)"> mdi-minus </v-icon>
                    <v-icon small color="blue" v-if="index==option.values.length - 1" @click.stop="option.values.push({name:'New Value',price:0})"> mdi-plus </v-icon>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small @click.stop="optionDiag = false" text>Cancel</v-btn>
            <v-btn small @click.stop="saveOption" :disabled="option.values.length<1" text>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
const uuid = require('uuid')
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  layout: (context) => 'applayouts/' + context.params.type,
  data: () => ({
    value: 0,
    fab: null,
    services: [],
    isActive: false,
    currentServiceId: '',
    foodDiag: false,
    serviceData: {},
    activeTab: 0,
    option: [],
    optionDiag: false,
    optionIndex: -1,
    optionTemplate: {
      name: '',
      required: false,
      min: 1,
      max: 1,
      values: []
    },
    defaultService: {
      img: '',
      name: '',
      price: 0,
      unit: '',
      desc: '',
      options: []
    },
    categories: [],
    editedItem: {},
    categoryText: '',
    oldCategoryText: '',
    categoryDiag: false,
    categoryIndex: -1,
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
    imagediag: false,
  }),
  components: {
    ServiceCard
  },
  mounted() {
    this.$bind('editedItem', this.$fire.firestore.collection('shops').doc(this.$route.params.id)).then(() => {
      this.categories = this.editedItem.categories
    })
    this.categories = typeof this.editedItem.categories != 'undefined' ? this.editedItem.categories.slice() : []
    this.getServices()
  },
  methods: {
    getServices() {
      this.$bind('services', this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services'))
    },
    deleteCategory(i) {
      this.categories.splice(i, 1)
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
        categories: this.categories
      })
      this.updateServices('delete')
    },
    saveCategory() {
      if (this.categoryIndex < 0)
        this.categories.push(this.categoryText)
      else {
        this.$set(this.categories, this.categoryIndex, this.categoryText)
        this.updateServices('update')
      }

      this.$fire.firestore.collection('shops').doc(this.$route.params.id).update({
        categories: this.categories
      })
      this.categoryDiag = false

    },
    saveOption() {
      if (!this.serviceData.options) {
        console.log('no option')
        this.serviceData.options = []

      } else {
        console.log('with option')
      }
      if (this.optionIndex < 0)
        this.serviceData.options.push(this.option)
      else
        this.serviceData.options[this.optionIndex] = this.option

      this.option = Object.assign({}, this.optionTemplate)
      this.optionDiag = false
    },
    catalogAction() {
      if (this.value === 0)
        if (this.categories.length === 0) {
          alert('Please encode category first')
          this.value = 1
          this.categoryDiag = true
          this.categoryIndex = -1
        } else
          this.serviceData = Object.assign({}, this.defaultService), this.currentServiceId = '', this.foodDiag = true
      else
        this.categoryDiag = true, this.categoryIndex = -1, this.categoryText = ''
    },
    deleteService() {
      this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services').doc(this.currentServiceId).delete()
      this.foodDiag = false
      this.currentServiceId = ''
    },
    updateServices(mode) {
      this.services.forEach((s, i) => {
        if (s.category === this.oldCategoryText) {
          let updateText = ''
          if (mode === 'update') {
            updateText = this.categoryText
          } else {
            updateText = ''
          }

          this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services').doc(s.id).update({
            category: updateText
          })
        }
      })



    },
    saveService() {
      if (this.currentServiceId === '') {
        this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services').add(this.serviceData)
      } else {
        this.$fire.firestore.collection('shops').doc(this.$route.params.id).collection('services').doc(this.currentServiceId).update(this.serviceData)
      }
      this.foodDiag = false
      this.currentServiceId = ''
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
      this.isLoading = false
    },
    deleteSelected() {
      this.selectedImages.forEach((a) => {

        this.$fire.storage.ref(a.id).delete().then(() => {
          this.images.splice(this.images.indexOf(a), 1)
        })
      })
    },
    onSelectMultipleImage(data) {
      this.selectedImages = data
    },
    setAsImage() {
      this.serviceData.img = this.selectedImages[0].src
      this.imagediag = false
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
      this.imagediag = true
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
