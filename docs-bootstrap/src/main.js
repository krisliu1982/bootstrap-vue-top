import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';


import './assets/docs.css';

const app = createApp(app_);
app.use(router);
app.mount('#app');
