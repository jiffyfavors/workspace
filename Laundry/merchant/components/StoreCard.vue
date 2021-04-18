<template>
  <v-flex xs12 md4 sm6 lg3 class="pa-2">
    <v-lazy v-model="isActive" :options="{threshold: .6}" min-height="200" transition="fade-transition">
      <v-card width="100%" @click.stop="actionSheet= true">
        <v-img :src="data.backdrop" height="200px" min-width="100%" width="100%">
          <span class="bestseller">{{data.storeType}}</span>
        </v-img>
        <v-card-actions>
          <v-list-item three-line dense>
            <v-list-item-avatar color="grey darken-3">
              <v-img class="elevation-6" :src="data.logo"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ data.business_name }}</v-list-item-title>
              <v-list-item-subtitle>
                <small>{{ data.branch }} branch</small>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>
                <!--  <span class="caption grey--text">CR: </span>
                                <span class="red--text subtitle-2">{{data.rates.cr }} %</span> -->
              </v-list-item-action-text>
              <!-- <v-chip dense :color="data.draft ? 'error' : 'success'" small> {{ data.draft ? 'Close' : 'Live' }} </v-chip> --></v-list-item-action>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-lazy>
    <v-bottom-sheet inset v-model="actionSheet">
      <v-list single-line dense>
        <v-subheader>Manage {{editedItem.business_name}} {{editedItem.branch}}</v-subheader>
        <v-list-item-group>
          <v-list-item @click="mode='store', selectedImages=[], editItem(editedItem)">
            <v-list-item-icon>
              <v-icon small color="blue"> mdi-pencil </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit Business</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click.stop="contactDiag=true">
            <v-list-item-icon>
              <v-icon small color="blue"> mdi-phone </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Contact Information</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click.stop="mode='cover', getServices(), servicesDiag = true">
            <v-list-item-icon>
              <v-icon small color="blue"> mdi-food </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Manage Catalog</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click.stop="publisher()">
            <v-list-item-icon>
              <v-icon :color="editedItem.draft ? 'green' : 'red'" small> {{ editedItem.draft ? 'mdi-check' : 'mdi-close' }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{editedItem.draft ? 'Publish' : 'Unpublish' }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click="coordiag = true">
            <v-list-item-icon>
              <v-icon small color="indigo"> mdi-map-marker </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Shop Location</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item-group>
          <v-list-item @click.stop="deleteDiag = true">
            <v-list-item-icon>
              <v-icon small color="red"> mdi-delete </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete Shop</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-bottom-sheet>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="title font-weight-light">Update Shop Information</span>
        </v-card-title>
        <v-card-text>
          <v-img class="elevation-6" max-height="300px" min-height="200px" width="100%" :src="editedItem.backdrop" @click.stop="generareFileList">

            <v-avatar style="position:absolute; bottom:0;">
              <v-img class="elevation-6" :src="editedItem.logo" @click.stop="generareFileList" /> </v-list-item-avatar>
            </v-avatar>
          </v-img>
          <v-layout wrap>
            <v-flex xs8 sm8 md8>
              <v-text-field v-model="editedItem.business_name" label="Business Name" /> </v-flex>
            <v-flex xs4 sm4 md4>
              <v-text-field v-model="editedItem.branch" label="Branch" /></v-flex>
            <v-flex xs6 sm6 md6>
              <v-text-field v-model="editedItem.opening_time" type="time" label="Opening Time" /> </v-flex>
            <v-flex xs6 sm6 md6>
              <v-text-field v-model="editedItem.closing_time" type="time" label="Closing Time" /> </v-flex>
            <v-flex xs6 sm6 md6>
              <v-select :items="currencies" v-model="editedItem.currency" label="Currency" item-text="code" item-value="code"></v-select>
            </v-flex>
            <v-flex xs6 sm6 md6>
              <v-select :items="storeType" v-model="editedItem.storeType" label="Kind of Store"> </v-select>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
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
          <template v-if="mode==='store'">
            <v-btn color="blue darken-1" text @click="deleteSelected"> Delete </v-btn>
            <v-btn color="blue darken-1" text @click="setAsLogo"> Set as Logo </v-btn>
            <v-btn color="blue darken-1" text @click="setAsBackdrop"> Set as Backdrop </v-btn>
          </template>
          <template v-else>
            <v-btn color="blue darken-1" text @click="imagediag = false">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="setAsImage">Set as Image</v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="coordiag" persistent max-width="400px">
      <v-card>
        <v-card-title primary-title> Update Store Location </v-card-title>
        <v-card-text>
          <div class="mapcontainer">
            <GMap id="gmap" ref="gMap" :center="mylocation" :options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: true, zoomControl: true, gestureHandling: 'greedy'}" :zoom="15" @center_changed="centerChange" @loaded="isMapLoaded = true">
              <GMapMarker ref="gmapmarker" :position="mylocation" :options="{icon:selectedmarker}"> </GMapMarker>
            </GMap>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="coordiag = false"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="updateMapLocation"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-dialog v-model="deleteDiag" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirm deletion</v-card-title>
        <v-card-text>Are you sure you want to delete this {{editedItem.business_name}} - {{editedItem.branch}}?
          <v-alert type="error">All encoded services/menu will be deleted.</v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteDiag = false">Close</v-btn>
          <v-btn color="green darken-1" text @click="deleteItem(), deleteDiag = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="contactDiagForm" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline"></span>
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
    <v-dialog v-model="foodDiag" fullscreen>
      <v-card>
        <v-card-title>
          <span class="headline">{{currentServiceId===''? 'Add Item' : 'Update Item'}}</span>
        </v-card-title>
        <v-card-text>
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
    <v-dialog v-model="contactDiag" persistent fullscreen>
      <v-card width="100%" height="100%">
        <v-app-bar app fixed dark color="#00aff0">
          <v-btn icon @click.stop="contactDiag=false">
            <v-icon> mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-toolbar-title>Contact Information</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="editIndex=-1,contactDiagForm = true">
            <v-icon> mdi-plus</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card-text>
          <v-container fluid>
            <v-content>
              <v-card flat>
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
              </v-card>
            </v-content>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="categoryDiag" persistent>
      <v-card width="500">
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
    <v-dialog v-model="servicesDiag" persistent fullscreen>
      <v-card width="100%" height="100%">
        <v-app-bar app fixed dark color="#00aff0">
          <v-btn icon @click.stop="save(),servicesDiag=false">
            <v-icon> mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-toolbar-title>Manage Catalog</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="catalogAction()">
            <v-icon> mdi-plus</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card-text>
          <v-container fluid>
            <v-content>
              <v-tabs show-arrows v-model="catalogTab" fixed-tabs dense center-active>
                <v-tab>Items</v-tab>
                <v-tab>Categories</v-tab>
              </v-tabs>
              <v-tabs-items v-model="catalogTab">
                <v-tab-item>
                  <v-card flat>
                    <v-layout wrap align-center>
                      <v-flex v-for="item in services" :key="item.name + '_' + item" xs12 md4 sm4 lg4 class="pa-1" @click.stop="serviceData = Object.assign({},item), currentServiceId = item.id, foodDiag = true">
                        <v-lazy v-model="isActive" :options="{threshold: .6}" transition="fade-transition">
                          <service-card :item="item"></service-card>
                        </v-lazy>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-list dense>
                    <v-list-item v-for="(cat, i) in categories" :key="i">
                      <v-list-item-content @click.stop="categoryIndex = i, oldCategoryText = cat, categoryText = cat, categoryDiag = true">
                        <v-list-item-title>{{cat}}</v-list-item-title>
                        <v-divider></v-divider>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn icon>
                          <v-icon color="red" @click.stop="oldCategoryText = cat, updateServices('delete'), categories.splice(i, 1)">mdi-delete</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-tab-item>
              </v-tabs-items>
            </v-content>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
const uuid = require('uuid')
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      activeTab: 0,
      catalogTab: 0,
      categoryIndex: -1,
      categoryText: '',
      services: [],
      categories: [],
      serviceData: {},
      oldCategoryText: '',
      contactDetails: {
        type: 'mobile',
        value: ''
      },
      option: [],
      optionIndex: -1,
      optionTemplate: {
        name: '',
        required: false,
        min: 1,
        max: 1,
        values: []
      },
      optionDiag: false,
      contactDiagForm: false,
      categoryDiag: false,
      contactDiag: false,
      coordiag: false,
      foodDiag: false,
      servicesDiag: false,
      deleteDiag: false,
      imagediag: false,
      isActive: false,
      dialog: false,
      selectedImages: [],
      storeType: ['Laundry Shop', 'Massage Spa', 'Beauty Salon', 'Restaurant', 'Food  Business', 'Clinic', 'Law Office', 'Online Store'],
      mode: 'store',
      actionSheet: false,
      mylocation: {
        lat: 9.7941185,
        lng: 118.7322599
      },
      defaultService: {
        img: '',
        name: '',
        price: 0,
        unit: '',
        desc: '',
      },
      editIndex: -1,
      editedItem: {
        currency: 'PHP',
        business_name: '',
        backdrop: '',
        branch: '',
        rates: {
          sc: 0,
          cr: 0
        },
        draft: true,
        url: '',
      },
      currentServiceId: '',
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
    }
  },
  props: {
    data: Object
  },
  mounted() {
    this.editedItem = Object.assign({}, this.data)
    this.categories = typeof this.editedItem.categories != 'undefined' ? this.editedItem.categories.slice() : []
  },
  computed: {
    currencies() {
      return this.$store.getters['store/getCurrencies']
    },
    contactInfos() {
      return this.data.contact
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



      let startTime = parseIn('2020-01-01 ' + this.data.opening_time);
      let endTime = parseIn('2020-01-01 ' + this.data.closing_time);
      return getTimeIntervals(startTime, endTime);
    }
  },
  watch: {
    isMapLoaded(val) {
      this.actionSheet = false
      if (val) {
        this.$nextTick(() => {
          this.$refs.gMap.map.setCenter({
            lat: this.editedItem.location.latitude,
            lng: this.editedItem.location.longitude
          })
        })
      }
    }
  },
  methods: {
    saveCategory() {
      if (this.categoryIndex < 0)
        this.categories.push(this.categoryText)
      else {
        this.$set(this.categories, this.categoryIndex, this.categoryText)
        this.updateServices('update')
      }
      this.categoryDiag = false
    },
    catalogAction() {
      if (this.catalogTab === 0)
        if(this.categories.length===0){
          alert('Please encode category first')
          this.catalogTab =1
          this.categoryDiag = true
          this.categoryIndex = -1
        }else
        this.serviceData = Object.assign({}, this.defaultService), this.currentServiceId = '', this.foodDiag = true
      else
        this.categoryDiag = true, this.categoryIndex = -1, this.categoryText = ''
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
    getIcon(val) {
      if (val.type === 'mobile') return 'mdi-phone'
      else if (val.type === 'messenger') return 'mdi-facebook-messenger'
      else if (val.type === 'email') return 'mdi-email'
    },
    deleteService() {
      this.$fire.firestore.collection('shops').doc(this.data.id).collection('services').doc(this.currentServiceId).delete().then(() => {
        this.foodDiag = false
        this.currentServiceId = ''
      })
    },
    deleteContact() {
      this.$fire.firestore.collection('shops').doc(this.data.id).update({
        contact: this.$fireModule.firestore.FieldValue.arrayRemove(this.contactDetails)
      }).then(() => {

        this.contactDiagForm = false
      })

    },

    saveContact() {
      //let info = Object.assign({}, this.editedItem)
      if (this.editIndex == -1) {
        this.$fire.firestore.collection('shops').doc(this.data.id).update({
          contact: this.$fireModule.firestore.FieldValue.arrayUnion(this.contactDetails)
        }).then(() => {

          this.contactDiagForm = false
        })
      } else {
        let contact = Object.assign({}, this.data.contact)
        contact[this.editIndex] = this.contactDetails
        this.$fire.firestore.collection('shops').doc(this.data.id).update({
          contact: contact
        }).then(() => {

          this.contactDiagForm = false
        })
      }

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

          this.$fire.firestore.collection('shops').doc(this.data.id).collection('services').doc(s.id).update({
            category: updateText
          })


        }

      })

    },
    saveService() {
      if (this.currentServiceId === '') {
        this.$fire.firestore.collection('shops').doc(this.data.id).collection('services').add(this.serviceData).then(() => {
          this.foodDiag = false
          this.currentServiceId = ''
        })
      } else {
        this.$fire.firestore.collection('shops').doc(this.data.id).collection('services').doc(this.currentServiceId).update(this.serviceData).then(() => {
          this.foodDiag = false
          this.currentServiceId = ''
        })
      }
    },
    centerChange() {
      const coordinates = this.$refs.gMap.map.getCenter()
      this.$refs.gmapmarker.marker.setPosition({
        lat: coordinates.lat(),
        lng: coordinates.lng()
      })
    },
    getServices() {
      this.$bind('services', this.$fire.firestore.collection('shops').doc(this.data.id).collection('services'))
    },
    deleteItem() {
      this.$fire.firestore.collection('shops').doc(this.data.id).delete()
    },
    editItem(item) {
      this.editedItem = 0
        //this.editedIndex = this.merchants.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    save() {

      var data = Object.assign({}, this.editedItem)
      data.categories = this.categories
      var url = data.business_name.replace(' ', '_').replace("'", '').toLowerCase() + '_' + data.branch.replace(' ', '_').replace("'", '').toLowerCase()
      data.url = url.replace(/ /g, '_').replace(/'/g, '')
      this.$fire.firestore.collection('shops').doc(this.data.id).update(data).then(() => {
        this.close();
      })
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.data)
        this.editedIndex = -1
        this.coordiag = false
        this.actionSheet = false
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
      this.isLoading = false
    },
    deleteSelected() {
      this.selectedImages.forEach((a) => {

        this.$fire.storage.ref(a.id).delete().then(() => {
          this.images.splice(this.images.indexOf(a), 1)
        })
      })
    },
    setAsLogo() {
      this.editedItem.logo = this.selectedImages[0].src
      this.imagediag = false
    },
    setAsImage() {
      this.serviceData.img = this.selectedImages[0].src
      this.imagediag = false
    },
    setAsBackdrop() {
      this.editedItem.backdrop = this.selectedImages[0].src
      this.imagediag = false
    },
    onSelectMultipleImage(data) {
      this.selectedImages = data
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
    updateMapLocation() {
      const data = Object.assign({}, this.editedItem)
      const coordinates = this.$refs.gMap.map.getCenter()
      data.location = new this.$fireModule.firestore.GeoPoint(coordinates.lat(), coordinates.lng())
      this.$fire.firestore.collection('shops').doc(this.data.id).update(data)
      this.close()
    },
  }
};
</script>
