<template>
  <v-layout>
    <v-dialog v-model="value" persistent fullscreen scrollable>
      <v-card width="100%" height="100%">
        <v-app-bar fixed dark color="#00aff0">
          <template v-if="!isSearch">
            <v-btn icon @click.prevent="closeDiag()">
              <v-icon> mdi-arrow-left-bold</v-icon>
            </v-btn>
            <v-toolbar-title>Invoicing & Billing</v-toolbar-title>
            <v-spacer></v-spacer>
          </template>
          <v-autocomplete v-if="isSearch" :items="services" autofocus prepend-inner-icon="mdi-magnify" solo hide-details hide-selected dense light label="Select Services" tem-value="id" item-text="name" item-value="id" @blur="isSearch = false">
            <template #item="data">
              <v-list flat dense>
                <v-list-item-group>
                  <v-list-item @click.stop="pushInvoiceItem(data.item), editIndex = invoiceItem.length -1,  editItem = Object.assign({}, invoiceItem[invoiceItem.length-1]), updateServiceItemDiag = true">
                    <v-list-item-avatar>
                      <v-img :src="data.item.img" /> </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> {{ data.item.name }} </v-list-item-title>
                      <v-list-item-subtitle> {{ data.item.price|toPHP }} per {{data.item.unit}} </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </template>
          </v-autocomplete>
          <v-btn icon>
            <v-icon @click.stop="addClick()"> mdi-plus</v-icon>
          </v-btn>
        </v-app-bar>
        <v-container fluid>
          <v-content>
            <v-tabs show-arrows v-model="activeTab" grow center-active>
              <v-tab> {{invoiceItem.length>1 ? 'Items' : 'Item'}} ({{invoiceItem.length}})</v-tab>
              <v-tab>{{payments.length>1 ? 'Payments' : 'Payment'}} </v-tab>
              <v-tab>Discounts</v-tab>
              <v-tab>Taxes</v-tab>
            </v-tabs>
            <v-layout wrap align-center>
              <v-flex xs12 sm12 md12 class="mb-10">
                <v-tabs-items v-model="activeTab">
                  <v-tab-item>
                    <v-list two-line class="list-scroll">
                      <v-list-item-group v-for="(item, index) in invoiceItem" :key="index">
                        <v-divider></v-divider>
                        <v-list-item dense>
                          <v-list-item-content @click.stop="editIndex = index, editItem = Object.assign({}, item), updateServiceItemDiag = true">
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle class="red--text"> {{ computeTotal(item) | toPHP }} </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-list-item-action-text> {{ (computeTotal(item) / item.qty) | toPHP }} per {{item.unit}} x {{ item.qty }} </v-list-item-action-text>
                            <v-icon small color="red" @click.stop="invoiceItem.splice(index,1), computeGrandTotal()"> mdi-delete </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                      </v-list-item-group>
                    </v-list>
                  </v-tab-item>
                  <v-tab-item>
                    <v-list two-line class="list-scroll">
                      <v-list-item-group v-for="(item, index) in payments" :key="'pay_'+index">
                        <v-divider></v-divider>
                        <v-list-item dense>
                          <v-list-item-content @click.stop="paymentPayload = Object.assign({}, item), paymentIndex = index , paymentsDiag = true">
                            <v-list-item-title v-text="item.mode"></v-list-item-title>
                            <v-list-item-subtitle class="red--text"> {{ item.amount | toPHP }} </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-list-item-action-text> {{ $moment(item.time).format('MMM DD YYYY, h:mm A',Intl.DateTimeFormat().resolvedOptions().timeZone) }} </v-list-item-action-text>
                            <v-icon small color="red" @click.stop="payments.splice(index,1), computeGrandTotal()"> mdi-delete </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                      </v-list-item-group>
                    </v-list>
                  </v-tab-item>
                  <v-tab-item>
                    <v-list two-line class="list-scroll">
                      <v-list-item-group v-for="(item, index) in discounts" :key="'discount_' + index">
                        <v-divider></v-divider>
                        <v-list-item dense>
                          <v-list-item-content @click.stop="discountPayload = Object.assign({}, item), discountIndex = index , discountDiag = true">
                            <v-list-item-title v-text="item.desc"></v-list-item-title>
                            <v-list-item-subtitle class="red--text"> {{ item.amount | toPHP }} </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-list-item-action-text> {{item.type}} {{item.type==='Percentage' ? item.value + '%' : '' }}</v-list-item-action-text>
                            <v-icon small color="red" @click.stop="discounts.splice(index,1), computeGrandTotal()"> mdi-delete </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                      </v-list-item-group>
                    </v-list>
                  </v-tab-item>
                  <v-tab-item>
                    <v-list two-line class="list-scroll">
                      <v-list-item-group v-for="(item, index) in taxes" :key="'tax_'+index">
                        <v-divider></v-divider>
                        <v-list-item dense>
                          <v-list-item-content @click.stop="taxPayload = Object.assign({}, item), taxIndex = index , taxDiag = true">
                            <v-list-item-title v-text="item.desc"></v-list-item-title>
                            <v-list-item-subtitle class="red--text"> {{ item.amount | toPHP }} </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-list-item-action-text>{{item.type}} {{item.type==='Percentage' ? item.value + '%' : '' }}</v-list-item-action-text>
                            <v-icon small color="red" @click.stop="taxes.splice(index,1), computeGrandTotal()"> mdi-delete </v-icon>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                      </v-list-item-group>
                    </v-list>
                  </v-tab-item>
                </v-tabs-items>
              </v-flex>
            </v-layout>
          </v-content>
        </v-container>
        <v-card width="100%" class="shopresponsive">
          <v-layout wrap align-center>
            <v-flex xs4 sm4 md4>
              <v-list dense two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> <strong>{{total|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Total</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> <strong>{{discount*-1|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Discount</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex xs4 sm4 md4>
              <v-list dense two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title><strong>{{tax|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Tax</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> <strong>{{payment*-1|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Payments</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
            <v-flex xs4 sm4 md4>
              <v-list dense two-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> <strong>{{grandTotal|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Grand Total</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> <strong>{{balance|toPHP}}</strong></v-list-item-title>
                    <v-list-item-subtitle>Balance Due</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-flex>
          </v-layout>
          <v-toolbar bottom fixed>
            <v-spacer></v-spacer>
            <v-btn small text color="success" @click.stop="invoiceActionSheet = true">Preview</v-btn>
          </v-toolbar>
        </v-card>
      </v-card>
    </v-dialog>
    <v-dialog v-model="updateServiceItemDiag" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">Update Invoice Item</span>
        </v-card-title>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12 md12 sm12>
              <v-text-field label="Name" v-model="editItem.name" /> </v-flex>
            <v-flex xs4 md4 sm4>
              <v-text-field type="Number" label="Rate" v-model.number="editItem.price" /> </v-flex>
            <v-flex xs4 md4 sm4>
              <v-text-field label="Quantity" min="1" type="Number" v-model.number="editItem.qty" /> </v-flex>
            <v-flex xs4 md4 sm4>
              <v-text-field label="Unit" v-model="editItem.unit" /> </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click.stop="updateServiceItemDiag=false">Cancel</v-btn>
            <v-btn text @click.stop="invoiceItem[editIndex] = Object.assign({}, editItem), updateServiceItemDiag = false, computeGrandTotal()">Update</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="paymentsDiag" persistent>
      <v-card width="100%" height="100%">
        <v-toolbar fixed dark color="#00aff0">
          <v-btn icon @click.stop="paymentsDiag=false">
            <v-icon> mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{paymentIndex
            <0 ? 'New Payment' : 'Update Payment'}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs6 md6 lg6 sm6>
              <v-select flat :items="paymentTypes" v-model="paymentPayload.mode" label="Mode of Payment">
              </v-select>
            </v-flex>
            <v-flex xs6 md6 lg6 sm6>
              <v-text-field type="number" label="Amount" v-model.number="paymentPayload.amount" :max="balance"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small text :disabled="paymentPayload.amount>balance" color="blue" @click.stop="savePayment(), paymentsDiag = false">{{paymentIndex
            <0 ? 'Save Payment' : 'Update Payment'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="discountDiag" persistent>
      <v-card width="100%" height="100%">
        <v-toolbar fixed dark color="#00aff0">
          <v-btn icon @click.stop="discountDiag=false">
            <v-icon> mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{discountIndex
            <0 ? 'New Discount' : 'Update Discount'}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs6 md6 lg6 sm6>
              <v-select flat :items="['Fixed Amount','Percentage']" v-model="discountPayload.type" label="Discount Type">
              </v-select>
            </v-flex>
            <v-flex xs6 md6 lg6 sm6>
              <v-text-field type="number" label="Value" v-model.number="discountPayload.value"></v-text-field>
            </v-flex>
            <v-flex xs12 md12 lg12 sm12>
              <v-text-field label="Description" v-model="discountPayload.desc" outlined single></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small text color="blue" @click.stop="saveDiscount(), discountDiag = false">{{discountIndex
            <0 ? 'Save Discount' : 'Update Discount'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="taxDiag" persistent>
      <v-card width="100%" height="100%">
        <v-toolbar fixed dark color="#00aff0">
          <v-btn icon @click.stop="taxDiag=false">
            <v-icon> mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{taxIndex
            <0 ? 'New Tax' : 'Update Tax'}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs6 md6 lg6 sm6>
              <v-select flat :items="['Fixed Amount','Percentage']" v-model="taxPayload.type" label="Discount Type">
              </v-select>
            </v-flex>
            <v-flex xs6 md6 lg6 sm6>
              <v-text-field type="number" label="Value" v-model.number="taxPayload.value"></v-text-field>
            </v-flex>
            <v-flex xs12 md12 lg12 sm12>
              <v-text-field label="Description" v-model="taxPayload.desc" outlined single></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small text color="blue" @click.stop="saveTax(), taxDiag = false">{{taxIndex
            <0 ? 'Save Tax' : 'Update Tax'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-bottom-sheet>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      isSearch: false,
      paymentPayload: {
        time: 0,
        amount: 0,
        mode: 'Cash'
      },
      discountPayload: {
        type: 'Percentage',
        value: 0,
        amount: 0,
        desc: ''
      },

      taxPayload: {
        type: 'Percentage',
        value: 0,
        amount: 0,
        desc: ''
      },
      taxDiag: false,
      discountDiag: false,
      discountIndex: -1,
      taxIndex: -1,
      activeTab: 0,
      editItem: {},
      editIndex: -1,
      paymentIndex: -1,
      services: [],
      invoiceItem: [],
      grandTotal: 0,
      total: 0,
      tax: 0,
      discount: 0,
      payment: 0,
      balance: 0,
      invoiceItem: [],
      payments: [],
      discounts: [],
      taxes: [],
      updateServiceItemDiag: false,
      paymentsDiag: false,
      paymentTypes: ['Cash', 'Card', 'Bank', 'Check', 'Adjustment', 'Others']
    }
  },
  props: {
    data: Object,
    value: Boolean
  },
  computed: {
    defaultBusiness() {
      return this.$store.getters['store/getDefaultBusiness']
    }
  },
  watch: {
    isSearch(val) {
      if (val) {
        if (this.services.length === 0) {
          this.services.push({
            name: 'New Service',
            price: 0,
            qty: 0,
            unit: 'unit'
          })
          this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('services').get().then((data) => {
            data.docs.forEach(service => {
              this.services.push(service.data())
            })
          })
        }
      }
    }
  },
  mounted() {

    if (this.data.invoice) {
      this.invoiceItem = this.data.invoice.invoiceItem ? this.data.invoice.invoiceItem : []
      this.payments = this.data.invoice.payments ? this.data.invoice.payments : []
      this.taxes = this.data.invoice.taxes ? this.data.invoice.taxes : []
      this.discounts = this.data.invoice.discounts ? this.data.invoice.discounts : []
      this.computeGrandTotal()

    } else
      console.log('no invoice')


  },
  methods: {
    addClick() {
      console.log(this.activeTab)
      switch (this.activeTab) {
        case 0:
          this.isSearch = true
          break;
        case 1:
          this.paymentsDiag = true
          this.paymentIndex = -1
          break;
        case 2:
          this.discountDiag = true
          this.discountIndex = -1
          break;
        case 3:
          this.taxDiag = true
          this.taxIndex = -1
          break;
        default:
          this.isSearch = true
      }
    },
    closeDiag() {
      this.saveInvoice()
      this.$emit("input", !this.value);
    },
    savePayment() {
      if (this.paymentIndex < 0) {
        this.paymentPayload.time = new Date().getTime()
        this.payments.push(this.paymentPayload)
      } else {
        this.payments[this.paymentIndex] = this.paymentPayload
      }
      this.saveInvoice()
    },
    saveDiscount() {

      if (this.discountPayload.type === 'Percentage')
        this.discountPayload.amount = this.total * (this.discountPayload.value / 100)
      else
        this.discountPayload.amount = this.total - this.discountPayload.value

      if (this.discountIndex < 0) {
        this.discounts.push(this.discountPayload)
      } else {
        this.discounts[this.discountIndex] = this.discountPayload
      }
      this.saveInvoice()
    },
    saveTax() {

      if (this.taxPayload.type === 'Percentage')
        this.taxPayload.amount = this.total * (this.taxPayload.value / 100)
      else
        this.taxPayload.amount = this.total - this.taxPayload.value

      if (this.discountIndex < 0) {
        this.taxes.push(this.taxPayload)
      } else {
        this.taxes[this.discountIndex] = this.taxPayload
      }
      this.saveInvoice()
    },

    saveInvoice() {
      this.computeGrandTotal()
      this.$fire.firestore.collection('shops').doc(this.defaultBusiness.id).collection('bookings').doc(this.data.id).update({
        invoice: {
          invoiceItem: this.invoiceItem,
          discount: this.discount,
          total: this.total,
          tax: this.tax,
          grandtotal: this.grandTotal,
          balance: this.balance,
          payments: this.payments,
          taxes: this.taxes,
          discounts: this.discounts
        }
      })
    },
    pushInvoiceItem(item) {
      let qty = 1
      if (this.data.type === 'massage')
        qty = parseInt(this.data.participants.Male) + parseInt(this.data.participants.Female)
      this.invoiceItem.push({
        name: item.name,
        price: item.price,
        qty: qty,
        unit: item.unit
      })
      this.isSearch = false
      this.computeGrandTotal()
    },
    computeTotal(item) {
      return item.price * item.qty
    },
    computeGrandTotal() {
      this.total = 0
      this.payment = 0
      this.tax = 0
      this.balance = 0
      this.discount = 0
      this.invoiceItem.forEach(item => {
        this.total = this.total + this.computeTotal(item)
      })
      this.payments.forEach(item => {
        this.payment = this.payment + parseFloat(item.amount)
      })
      this.discounts.forEach(item => {
        this.discount = this.discount + parseFloat(item.amount)
      })
      this.taxes.forEach(item => {
        this.tax = this.tax + parseFloat(item.amount)
      })

      this.balance = this.total + this.tax - this.discount - this.payment
      this.grandTotal = this.total + this.tax
    },

  }
};
</script>
