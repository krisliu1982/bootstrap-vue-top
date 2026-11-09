import { ViteSSG } from 'vite-ssg';
import app_ from './app.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
      component: () => import(`@/pages/zh-CN/${page.groupSlug}/${page.pageSlug}.vue`)
    });
  } else {
    routes.push({
      path: page.path,
      component: () => import(`@/pages/zh-CN/${page.groupSlug}.vue`)
    });
  }
});

function remToPx(remValue) {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return remValue * rootFontSize;
}

NProgress.configure({ showSpinner: false });

export const createApp = ViteSSG(
  // the root component
  app_,
  // vue-router options
  {
    base: import.meta.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
      // 处理锚点
      if (to.hash) {
        // 返回一个 Promise，确保等待 DOM 更新
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              top: remToPx(4.5) // 固定导航栏高度
            });
          }, 300);
        });
      }

      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    // 全局移除 router-link-active
    linkActiveClass: '',
    // 全局移除 router-link-exact-active
    linkExactActiveClass: ''
  },
  // function to have custom setups
  ({ app, router }) => {
    if (import.meta.env.SSR) {
      // your server code will be removed in the client build
    }
    else {
      router.beforeEach((to, from) => {
        if (to.hash) return;
        NProgress.start();
      });

      router.afterEach((to, from) => {
        NProgress.done();
      });

      router.onError((error) => {
        NProgress.done();
        console.error('路由导航错误:', error);
      });
    }

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
  }
);
