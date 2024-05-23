import { createApp } from 'vue';
import App from './layouts/App.vue';
import router from './router/index';
// vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#00FF00',
    'on-surface-variant': '#EEEEEE',
    primary: '#00FF00',
    'primary-darken-1': '#00FF00',
    secondary: '#00FF00',
    'secondary-darken-1': '#00FF00',
    error: '#00FF00',
    info: '#00FF00',
    success: '#00FF00',
    warning: '#00FF00',
  },
  variables: {
    'border-color': '#00FF00',
    'border-opacity': 0.02,
    'high-emphasis-opacity': 0.7,
    'medium-emphasis-opacity': 0.7,
    'disabled-opacity': 0.4,
    'idle-opacity': 0.7,
    'hover-opacity': 0.5,
    'focus-opacity': 0.4,
    'selected-opacity': 0.8,
    'activated-opacity': 0.4,
    'pressed-opacity': 0.7,
    'dragged-opacity': 0.8,
    'theme-kbd': '#00FF00',
    'theme-on-kbd': '#00FF00',
    'theme-code': '#00FF00',
    'theme-on-code': '#00FF00',
  },

  components: {
    VCombobox: {
      // Styles for v-combobox
      color: '#00FF00', // Inherit text color from parent
      background: '#ff0000',
      border: '1px solid #FF0000',  // Adjust border style and color
      '--outline-width': '0px',  // Remove default outline
      '--active-border-color': '#0000FF',  // Adjust active border color
      '--chips-color': '#EEEEEE',  // Adjust chip background color
      '--chips-selected-color': '#00FFFF',  // Adjust selected chip color
    },
    VList: {
      // Styles for v-list
      background: '#FFFFFF',
      border: '1px solid #CCCCCC',  // Adjust border style and color
      '--item-hover-background-color': '#EEEEEE',  // Adjust hover background color
      '--item-active-background-color': '#00FFFF',  // Adjust active background color
    },
    VListItem: {
      // Styles for v-list-item
      color: 'inherit', // Inherit text color from parent
      '--highlighted-background-color': '#EEEEEE',  // Adjust hover background color
    },
    VCard: {
      // Styles for v-card
      background: '#FFFFFF',
      border: '1px solid #CCCCCC',  // Adjust border style and color
      elevation: 4,  // Adjust card elevation
    },
    VDataTable: {
      // Styles for v-data-table
      background: '#FFFFFF',
      border: '1px solid #CCCCCC',  // Adjust border style and color
      '--header-background-color': '#EEEEEE',  // Adjust header background color
      '--row-hover-background-color': '#EEEEEE',  // Adjust row hover background color
      '--row-selected-background-color': '#00FFFF',  // Adjust selected row background color
      '--active-color': '#00FFFF',  // Adjust active element color
    },
  },
}


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})


const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
