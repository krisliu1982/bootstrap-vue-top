import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';

import BootstrapVueTop from 'bootstrap-vue-top';

import './assets/docs.css';

import MdWrapper from '@/docs/md-wrapper.vue';
import CodeWrapper from '@/docs/code-wrapper.vue';
import CodeTabs from '@/docs/code-tabs.vue';
import ScssDocs from '@/docs/scss-docs.vue';
import Example from '@/docs/example.vue';
import Callout from '@/docs/callout.vue';


const app = createApp(app_);
app.use(router);
app.use(BootstrapVueTop);
app.component('MdWrapper', MdWrapper);
app.component('CodeWrapper', CodeWrapper);
app.component('CodeTabs', CodeTabs);
app.component('ScssDocs', ScssDocs);

app.component('Example', Example);
app.component('Callout', Callout);

/*app.directive('docstoc', {
  mounted: (el) => {
    const tocEl = document.getElementById('docs-toc');
    tocEl.innerHTML = el.innerHTML;
    tocEl.scrollTo(0, 0);
  }
});*/
app.mount('#app');
