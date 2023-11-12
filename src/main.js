import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import BaseButton from './UI/BaseButton.vue'
import router from './router/index.js'

// Create the Vue app
const app = createApp(App)

// Register the BaseButton component globally
app.component('base-button', BaseButton);

// Use the Vuex store
app.use(store);

// Use the Vue Router
app.use(router);

// Mount the app to the DOM
app.mount('#app');