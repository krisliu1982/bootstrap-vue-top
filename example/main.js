import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
// Import all of Bootstrap’s JS
//import * as bootstrap from 'bootstrap'

import BootstrapVueTop from '@lib/index.js'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')