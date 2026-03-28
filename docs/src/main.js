

import { createApp } from 'vue'
import app_ from './app.vue'
import router from './router/index.js'

import BootstrapVue from 'bootstrap-vue-ui'

import './assets/docs.css'

import CodeHighlight from '@/views/code-highlight.vue'

const app = createApp(app_)
app.use(router)
app.use(BootstrapVue)
app.component('CodeHighlight', CodeHighlight)
app.mount('#app')
