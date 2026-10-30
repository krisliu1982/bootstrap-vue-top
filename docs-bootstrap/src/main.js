import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';


import './assets/docs.scss';

import Example from '@/components/example.vue'
import Callout from '@/components/callout.vue'
import AddedIn from '@/components/added-in.vue'
import ScssDocs from '@/components/scss-docs.vue'
import CodeWrapper from '@/components/code-wrapper.vue'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const app = createApp(app_);
app.use(router);
app.component('Example', Example)
app.component('Callout', Callout)
app.component('AddedIn', AddedIn)
app.component('CodeWrapper', CodeWrapper)


app.mount('#app');
