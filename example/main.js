import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';

import BootstrapVueTop from '@lib/index.js';

const app = createApp(App);
app.use(BootstrapVueTop);
app.mount('#app');
