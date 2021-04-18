<template>
  <v-flex xs12 md6 sm6 lg6 class="pa-2">
    <v-card width="100%" :to="'/apps/' + data.code.toLowerCase() +'/' + data.id">
      <v-list-item three-line dense>
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" :src="data.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ data.business_name }}</v-list-item-title>
          <v-list-item-subtitle>
           @{{ data.alias }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    data: Object
  }

};
</script>
