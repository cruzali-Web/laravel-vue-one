import './bootstrap';

import { createApp } from 'vue';
import AppComponent from '.layouts/App.vue'
import router from './router';




const app = createApp({
  components: {
    AppComponent
  }

});