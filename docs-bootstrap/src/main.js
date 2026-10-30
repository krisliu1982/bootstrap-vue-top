import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';


import './assets/docs.scss';

import Example from '@/components/example.vue'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const app = createApp(app_);
app.use(router);
app.component('Example', Example)
app.mount('#app');
