import 'vuetify/dist/vuetify.css';

import { configure } from '@storybook/vue';
import Vuetify from 'vuetify';
import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

Vue.use(Vuetify);

const req = require.context('../components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
