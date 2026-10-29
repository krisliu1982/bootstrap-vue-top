import { createApp } from 'vue'
import app_ from './app.vue'
import router from './router/index.js'

import { createHead } from '@unhead/vue/client'

import './assets/docs.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import CodeWrapper from '@/docs/code-wrapper.vue'
import CodeTabs from '@/docs/code-tabs.vue'
import Example from '@/docs/example.vue'
import Callout from '@/docs/callout.vue'
import LinksNav from '@/docs/links-nav.vue'

const app = createApp(app_)
app.use(router)
const head = createHead()
app.use(head)

app.component('CodeWrapper', CodeWrapper)
app.component('CodeTabs', CodeTabs)

app.component('Example', Example)
app.component('Callout', Callout)
app.component('LinksNav', LinksNav)

app.mount('#app')
