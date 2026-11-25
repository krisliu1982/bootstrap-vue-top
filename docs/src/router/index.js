import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

import { flatPages } from '@/assets/data.js';

const routes = [
  {
    path: '/',
    redirect: `${flatPages[0].path}`
  }
];

flatPages.forEach((page) => {
  routes.push({
    path: page.path,
    component: () => import(`@/pages/${page.groupSlug}/${page.pageSlug}/index.vue`)
  });
});

function remToPx(remValue) {
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return remValue * rootFontSize;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 处理锚点
    if (to.hash) {
      // 返回一个 Promise，确保等待 DOM 更新
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: remToPx(4.5) // 考虑固定导航栏高度
          });
        }, 300); // 等待时间，根据页面复杂度调整
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
});

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

export default router;
