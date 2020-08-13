import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/tw.css';
import './assets/styles/98.css';

// import {rando } from './libs/rando-min.js';
// Object.defineProperty(Vue.prototype, '$rando', { value: rando });
// Vue.use(rando);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
