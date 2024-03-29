import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/tw.css';
import './assets/styles/98.css';
import './assets/styles/global.css';

createApp(App)
  .use(router)
  .use(router)
  .use(store)
  .mount('#app');
