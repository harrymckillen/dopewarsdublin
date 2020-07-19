import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/tw.css';
import './assets/styles/98.css';
// import '../node_modules/98.css/style.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
