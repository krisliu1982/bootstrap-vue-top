import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';

import './assets/docs.css';

import BootstrapVueTop from 'bootstrap-vue-top';

const app = createApp(app_);
app.use(router);
app.use(BootstrapVueTop);
app.mount('#app');
