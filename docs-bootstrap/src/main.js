import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';


import './assets/docs.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const app = createApp(app_);
app.use(router);
app.mount('#app');
