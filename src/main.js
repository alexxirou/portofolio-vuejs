/**
 * Main entry file for the Vue 3 app.
 * @module main
 */

import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import BaseButton from './UI/BaseButton.vue';
import router from './router/index.js';
import './assets/styles/base.css';


/**
 * Create the Vue app.
 * @const {Object} app
 */
const app = createApp(App);

/**
 * Register the BaseButton component globally.
 * @function
 * @param {string} 'base-button' - The global component name.
 * @param {Object} BaseButton - The component to register.
 */
app.component('base-button', BaseButton);

/**
 * Use the Vuex store.
 * @method
 * @param {Object} store - The Vuex store.
 */
app.use(store);

/**
 * Use the Vue Router.
 * @method
 * @param {Object} router - The Vue Router.
 */
app.use(router);

/**
 * Mount the app to the DOM.
 * @method
 * @param {string} '#app' - The element ID to mount the app to.
 */
app.mount('#app');
