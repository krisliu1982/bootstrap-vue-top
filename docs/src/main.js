import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';

import 'bootstrap/dist/css/bootstrap.css'; 
import './assets/docs.css';

import BootstrapVueTop from 'bootstrap-vue-top';

import CodeWrapper from '@/components/CodeWrapper.vue';

const app = createApp(app_);
app.use(router);
app.use(BootstrapVueTop);
    app.component('CodeWrapper', CodeWrapper);
app.mount('#app');
