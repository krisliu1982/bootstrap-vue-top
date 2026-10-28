import { createApp } from 'vue'
import app_ from './app.vue'
import router from './router/index.js'

import BootstrapVueTop from 'bootstrap-vue-top'
import { createHead } from '@unhead/vue/client'

import './assets/docs.css'

import CodeWrapper from '@/docs/code-wrapper.vue'
import CodeTabs from '@/docs/code-tabs.vue'
import ScssDocs from '@/docs/scss-docs.vue'
import Example from '@/docs/example.vue'
import Callout from '@/docs/callout.vue'
import LinksNav from '@/docs/links-nav.vue'
import SkillsTable from '@/docs/Skills-table.vue'

const app = createApp(app_)
app.use(router)
app.use(BootstrapVueTop)
const head = createHead() // <--
app.use(head) // <--

app.component('CodeWrapper', CodeWrapper)
app.component('CodeTabs', CodeTabs)
app.component('ScssDocs', ScssDocs)

app.component('Example', Example)
app.component('Callout', Callout)
app.component('LinksNav', LinksNav)
app.component('SkillsTable', SkillsTable)


/*app.directive('docstoc', {
  mounted: (el) => {
    const tocEl = document.getElementById('docs-toc');
    tocEl.innerHTML = el.innerHTML;
    tocEl.scrollTo(0, 0);
  }
});*/
app.mount('#app')
