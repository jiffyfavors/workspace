<template>
  <v-card v-else light dense class="pa-2">
    <v-card-title>Orders</v-card-title>
    <v-card-text>
    <v-layout wrap >
      <v-flex xs6>
        <v-list-item-content>
          <v-list-item-subtitle>Pending</v-list-item-subtitle>
          <v-list-item-title>{{pending}} {{pending>1 ? 'Orders' :'Order'}}</v-list-item-title>
        </v-list-item-content>
      </v-flex>
      <v-flex xs6>
        <v-list-item-content>
          <v-list-item-subtitle>Accepted</v-list-item-subtitle>
          <v-list-item-title>{{accepted}} {{accepted>1 ? 'Orders' :'Order'}}</v-list-item-title>
        </v-list-item-content>
      </v-flex>
    </v-layout>
  </v-card-text>
  <v-card-actions v-if="pending>0 || accepted>0">
    <v-spacer></v-spacer>
    <v-btn text outlined :to="'/apps/' + $route.params.type + '/'+$route.params.id + '/orders'" color="blue">View Orders</v-btn>
  </v-card-actions>
  </v-card>
</template>
<script>
  export default{
    props:{
      pending:{
        type: Number,
        default:0
      },
      accepted:{
        type: Number,
        default:0
      }
    }
  };
</script>