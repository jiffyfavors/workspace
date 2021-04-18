<template>
  <v-bottom-sheet inset v-model="diag">
    <v-card>
      <v-card-title>Contact Us</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(c,i) in contact" :key="i" :href="getHref(c)">
            <v-list-item-icon>
              <v-icon>{{getIcon(c)}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{c.value}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    contact: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    diag: false
  }),
  methods: {
    showDialog() {
      this.diag = true

    },
    getHref(val) {
      if (val.type === 'mobile') return 'tel:' + val.value
      else if (val.type === 'messenger') return 'https://m.me/' + val.value
      else if (val.type === 'email') return 'mailto:' + val.value
    },
    getIcon(val) {
      if (val.type === 'mobile') return 'mdi-phone'
      else if (val.type === 'messenger') return 'mdi-facebook-messenger'
      else if (val.type === 'email') return 'mdi-email'
    },
  }
};
</script>
