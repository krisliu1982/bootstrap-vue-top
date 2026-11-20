import { createApp } from 'vue';
import app_ from './app.vue';
import router from './router/index.js';

import BootstrapVueTop from 'bootstrap-vue-top';
import { bootstrap } from 'bootstrap-vue-top';

import './assets/docs.css';

import CodeHighlight from '@/code-highlight.vue';

const app = createApp(app_);
app.use(router);
app.use(BootstrapVueTop);
app.component('CodeHighlight', CodeHighlight);
app.directive('docstoc', {
  mounted: (el) => {
    const tocEl = document.getElementById('docs-toc');
    tocEl.innerHTML = el.innerHTML;
    tocEl.scrollTo(0, 0);
  }
});

app.directive('docsscrollspy', {
  mounted(el, binding) {
    const target = el.getAttribute('data-docs-target');
    const targetEl = document.querySelector(target);
    new bootstrap.ScrollSpy(document.body, {
      target: targetEl,
      smoothScroll: false,
      threshold: [0.1, 0.5, 1]
    });
  },
  beforeUnmount(el, binding) {
    bootstrap.ScrollSpy.getInstance(document.body).dispose();
  }
});
app.mount('#app');
