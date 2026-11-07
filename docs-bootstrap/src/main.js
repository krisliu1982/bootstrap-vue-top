import { ViteSSG } from 'vite-ssg'
import app_ from './app.vue';

// Import all of Bootstrap’s CSS
import 'bootstrap/scss/bootstrap.scss';

import './assets/docs.css';

import Example from '@/components/Example.vue';
import ExampleCustom from '@/components/ExampleCustom.vue';
import Callout from '@/components/Callout.vue';
import AddedIn from '@/components/AddedIn.vue';
import ScssDocs from '@/components/ScssDocs.vue';
import CodeWrapper from '@/components/CodeWrapper.vue';
import DeprecatedIn from '@/components/DeprecatedIn.vue';
import CalloutDeprecatedDarkVariants from '@/components/CalloutDeprecatedDarkVariants.vue';
import JsDismiss from '@/components/JsDismiss.vue';
import JsDataAttributes from '@/components/JsDataAttributes.vue';
import GuideFooter from '@/components/GuideFooter.vue';
import DocsPager from '@/components/DocsPager.vue';
import JsDocs from '@/components/JsDocs.vue';
import Placeholder from '@/components/Placeholder.vue';
import TableBs from '@/components/TableBs.vue';


import { flatPages } from '@/data/data.js';


const routes = [
  {
    path: '/',
    redirect: `${flatPages[0].path}`
  }
];

flatPages.forEach((page) => {
  if (page.pageSlug) {
    routes.push({
      path: page.path,
      component: () => import(`@/pages/${page.groupSlug}/${page.pageSlug}.vue`)
    });
  } else {
    routes.push({
      path: page.path,
      component: () => import(`@/pages/${page.groupSlug}.vue`)
    });
  }
});

export const createApp = ViteSSG(
  // the root component
  app_,
  // vue-router options
  { base: import.meta.env.BASE_URL, routes },
  // function to have custom setups
  async ({ app }) => {

    app.component('Example', Example);
    app.component('ExampleCustom', ExampleCustom);
    app.component('Callout', Callout);
    app.component('AddedIn', AddedIn);
    app.component('ScssDocs', ScssDocs);
    app.component('CodeWrapper', CodeWrapper);
    app.component('DeprecatedIn', DeprecatedIn);
    app.component('CalloutDeprecatedDarkVariants', CalloutDeprecatedDarkVariants);
    app.component('JsDismiss', JsDismiss);
    app.component('JsDataAttributes', JsDataAttributes);
    app.component('GuideFooter', GuideFooter);
    app.component('DocsPager', DocsPager);
    app.component('JsDocs', JsDocs);
    app.component('Placeholder', Placeholder);
    app.component('TableBs', TableBs);

    if (import.meta.env.SSR) {

    } else {
      /*const bootstrap = await import('bootstrap')

      const articleEl = document.querySelector('article.bd-content')
      const tocEl = document.querySelector('nav.bd-toc')

      if (tocEl) {
        new bootstrap.ScrollSpy(articleEl, { target: tocEl })
      }*/
    }
  },
)


