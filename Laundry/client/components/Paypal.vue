<template>
  <client-only>
    <paypal-checkout :env="env" :items="items" :amount="parseFloat(total).toFixed(2)" currency="PHP" :client="credentials" :button-style="myStyle" @payment-completed="paymentCompleted" :experience="experienceOptions"> </paypal-checkout>
  </client-only>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
      default: []
    }
  },
  mounted(){
    console.log(this.items)
  },
  data: () => ({
    credentials: {

      sandbox: 'AY1cLryehqDkDLNfMsxVHwieZ5MQEo6V_jXHkcBZFmSLCH2Twz5FoUlilck-J-kmJEfmv6r40UaQHz6X',
      production:'AZhN5uZR4LzPvqc8ZJtWCa6yaM6BKwT06qPCEtNFFXaHtPD7dN-KF0YliWXtCiYSKzI8oSz764KdhAuu'
    },
    myStyle: {
      label: 'checkout',
      size: 'responsive',
      shape: 'rect',
      color: 'blue',
      tagline: false,
      label: 'pay',
      fundingicons: true
    },
    experienceOptions: {

      input_fields: {
        no_shipping: 1,
        address_override: 1
      },
      flow_config: {
        landing_page_type: 'billing',
        user_action: 'commit'
      },
      presentation:{
        brand_name:'Go Asenso',
        
      }
    },
  }),
  computed: {
    env(){
     //return  process.process.env.NODE_ENV=='production' ? 'production':'sandbox'
     return 'production'
    },
    total() {
      let total = 0;
      this.items.forEach(item => {
        total = total + (parseFloat(item.price) * parseInt(item.quantity))
      })

      return total
    },
  },
  methods: {
    paymentCompleted() {
    	this.$emit('payment-completed')
    },
  }
};
</script>
