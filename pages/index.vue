<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <!-- <img src="/v.png" alt="Vuetify.js" class="mb-5" /> -->
      </div>
      <getting-started></getting-started>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import GettingStarted from '~/components/GettingStarted.vue';

@Component({
  components: {
    GettingStarted
  }
})
export default class extends Vue {}
</script>