<template>
  <v-flex xs12 md4 sm6 lg3 class="pa-2">
    <v-card class="mx-auto" max-width="400">
      <span class="bestseller">{{ data.ref.toUpperCase() }}</span>
      <v-card-text>
        <v-layout wrap class="mt-5">
          <v-flex xs4 sm4 md4>
            <strong>Expired On</strong>
          </v-flex>
          <v-flex xs8 sm8 md8>
            <strong>Time</strong>
          </v-flex>
          <v-flex xs4 sm4 md4>
            <strong>Duration</strong>
          </v-flex>
          <v-flex xs8 sm8 md8>
            <strong>Time</strong>
          </v-flex>
          <v-flex xs4 sm4 md4>
            <strong>Linked Business</strong>
          </v-flex>
          <v-flex xs8 sm8 md8>
            <strong>Time</strong>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <spacer></spacer>
        <v-btn small text color="blue">Link</v-btn>
        <v-btn small text color="blue">Renew</v-btn>
      </v-card-actions>
    </v-card>
</template>
