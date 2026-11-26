import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';

// Import all of Bootstrap’s CSS
import 'bootstrap/dist/css/bootstrap.css';
// Import all of Bootstrap’s JS
//import * as bootstrap from 'bootstrap'

import './assets/docs.css';

import BootstrapVueTop from 'bootstrap-vue-top';

import CodeWrapper from '@/components/CodeWrapper.vue';

const app = createApp(app_);
app.use(router);
app.use(BootstrapVueTop);
app.component('CodeWrapper', CodeWrapper);
app.mount('#app');
