import { createApp } from 'vue'
import app_ from './app.vue'
import router from './router/index.js'

import BootstrapVueTop from 'bootstrap-vue-top'
import { createHead } from '@unhead/vue/client'

import './assets/docs.css'

import CodeWrapper from '@/docs/code-wrapper.vue'
import CodeTabs from '@/docs/code-tabs.vue'
import Example from '@/docs/example.vue'
import LinksNav from '@/docs/links-nav.vue'

const app = createApp(app_)
app.use(router)
app.use(BootstrapVueTop)
const head = createHead()
app.use(head)

app.component('CodeWrapper', CodeWrapper)
app.component('CodeTabs', CodeTabs)
app.component('Example', Example)
app.component('LinksNav', LinksNav)


app.mount('#app')
