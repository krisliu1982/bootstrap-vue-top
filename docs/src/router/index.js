import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

var routes = [
  {
    path: '/',
    redirect: '/guide/introduction'
  },
  {
    path: '/guide/introduction',
    component: () => import('@/pages/guide/introduction.vue')
  },
  {
    path: '/guide/quick-start',
    component: () => import('@/pages/guide/quick-start.vue')
  },
  {
    path: '/layout/breakpoints',
    component: () => import('@/pages/layout/breakpoints.vue')
  },
  {
    path: '/layout/containers',
    component: () => import('@/pages/layout/containers.vue')
  },
  {
    path: '/layout/grid',
    component: () => import('@/pages/layout/grid.vue')
  },
  {
    path: '/layout/z-index',
    component: () => import('@/pages/layout/z-index.vue')
  },
  {
    path: '/content/reboot',
    component: () => import('@/pages/content/reboot.vue')
  },
  {
    path: '/content/typography',
    component: () => import('@/pages/content/typography.vue')
  },
  {
    path: '/content/images',
    component: () => import('@/pages/content/images.vue')
  },
  {
    path: '/content/figures',
    component: () => import('@/pages/content/figures.vue')
  },
  {
    path: '/form/overview',
    component: () => import('@/pages/form/overview.vue')
  },
  {
    path: '/form/form-control',
    component: () => import('@/pages/form/form-control.vue')
  },
  {
    path: '/form/select',
    component: () => import('@/pages/form/select.vue')
  },
  {
    path: '/form/checks-radios',
    component: () => import('@/pages/form/checks-radios.vue')
  },
  {
    path: '/form/range',
    component: () => import('@/pages/form/range.vue')
  },
  {
    path: '/form/input-group',
    component: () => import('@/pages/form/input-group.vue')
  },
  {
    path: '/form/floating-labels',
    component: () => import('@/pages/form/floating-labels.vue')
  },
  {
    path: '/form/uploader',
    component: () => import('@/pages/form/uploader.vue')
  },
  {
    path: '/form/layout',
    component: () => import('@/pages/form/layout.vue')
  },
  {
    path: '/form/validation',
    component: () => import('@/pages/form/validation.vue')
  },
  {
    path: '/components/accordion',
    component: () => import('@/pages/components/accordion.vue')
  },
  {
    path: '/components/alerts',
    component: () => import('@/pages/components/alerts.vue')
  },
  {
    path: '/components/alerts-box',
    component: () => import('@/pages/components/alerts-box.vue')
  },
  {
    path: '/components/alerts-confirm',
    component: () => import('@/pages/components/alerts-confirm.vue')
  },
  {
    path: '/components/alerts-message',
    component: () => import('@/pages/components/alerts-message.vue')
  },
  {
    path: '/components/backtop',
    component: () => import('@/pages/components/backtop.vue')
  },
  {
    path: '/components/badge',
    component: () => import('@/pages/components/badge.vue')
  },
  {
    path: '/components/breadcrumb',
    component: () => import('@/pages/components/breadcrumb.vue')
  },
  {
    path: '/components/buttons',
    component: () => import('@/pages/components/buttons.vue')
  },
  {
    path: '/components/button-group',
    component: () => import('@/pages/components/button-group.vue')
  },
  {
    path: '/components/card',
    component: () => import('@/pages/components/card.vue')
  },
  {
    path: '/components/carousel',
    component: () => import('@/pages/components/carousel.vue')
  },
  {
    path: '/components/close-button',
    component: () => import('@/pages/components/close-button.vue')
  },
  {
    path: '/components/collapse',
    component: () => import('@/pages/components/collapse.vue')
  },
  {
    path: '/components/dropdowns',
    component: () => import('@/pages/components/dropdowns.vue')
  },
  {
    path: '/components/image-preview',
    component: () => import('@/pages/components/image-preview.vue')
  },
  {
    path: '/components/list-group',
    component: () => import('@/pages/components/list-group.vue')
  },
  {
    path: '/components/loading',
    component: () => import('@/pages/components/loading.vue')
  },
  {
    path: '/components/modal',
    component: () => import('@/pages/components/modal.vue')
  },
  {
    path: '/components/modal2',
    component: () => import('@/pages/components/modal2.vue')
  },
  {
    path: '/components/navbar',
    component: () => import('@/pages/components/navbar.vue')
  },
  {
    path: '/components/navs-tabs',
    component: () => import('@/pages/components/navs-tabs.vue')
  },
  {
    path: '/components/offcanvas',
    component: () => import('@/pages/components/offcanvas.vue')
  },
  {
    path: '/components/pagination',
    component: () => import('@/pages/components/pagination.vue')
  },
  {
    path: '/components/placeholders',
    component: () => import('@/pages/components/placeholders.vue')
  },
  {
    path: '/components/popovers',
    component: () => import('@/pages/components/popovers.vue')
  },
  {
    path: '/components/progress',
    component: () => import('@/pages/components/progress.vue')
  },
  {
    path: '/components/scrollspy',
    component: () => import('@/pages/components/scrollspy.vue')
  },
  {
    path: '/components/spinners',
    component: () => import('@/pages/components/spinners.vue')
  },
  {
    path: '/components/tables',
    component: () => import('@/pages/components/tables.vue')
  },
  {
    path: '/components/toasts',
    component: () => import('@/pages/components/toasts.vue')
  },
  {
    path: '/components/tooltips',
    component: () => import('@/pages/components/tooltips.vue')
  },
  {
    path: '/components/tree',
    component: () => import('@/pages/components/tree.vue')
  },
  {
    path: '/components/tree-table',
    component: () => import('@/pages/components/tree-table.vue')
  },
  {
    path: '/utils/background',
    component: () => import('@/pages/utils/background.vue')
  },
  {
    path: '/utils/borders',
    component: () => import('@/pages/utils/borders.vue')
  },
  {
    path: '/utils/colors',
    component: () => import('@/pages/utils/colors.vue')
  },
  {
    path: '/utils/color-background',
    component: () => import('@/pages/utils/color-background.vue')
  },
  {
    path: '/utils/display',
    component: () => import('@/pages/utils/display.vue')
  },
  {
    path: '/utils/flex',
    component: () => import('@/pages/utils/flex.vue')
  },
  {
    path: '/utils/float',
    component: () => import('@/pages/utils/float.vue')
  },
  {
    path: '/utils/focus-ring',
    component: () => import('@/pages/utils/focus-ring.vue')
  },
  {
    path: '/utils/interactions',
    component: () => import('@/pages/utils/interactions.vue')
  },
  {
    path: '/utils/link',
    component: () => import('@/pages/utils/link.vue')
  },
  {
    path: '/utils/object-fit',
    component: () => import('@/pages/utils/object-fit.vue')
  },
  {
    path: '/utils/opacity',
    component: () => import('@/pages/utils/opacity.vue')
  },
  {
    path: '/utils/overflow',
    component: () => import('@/pages/utils/overflow.vue')
  },
  {
    path: '/utils/position',
    component: () => import('@/pages/utils/position.vue')
  },
  {
    path: '/utils/ratio',
    component: () => import('@/pages/utils/ratio.vue')
  },
  {
    path: '/utils/shadows',
    component: () => import('@/pages/utils/shadows.vue')
  },
  {
    path: '/utils/sizing',
    component: () => import('@/pages/utils/sizing.vue')
  },
  {
    path: '/utils/spacing',
    component: () => import('@/pages/utils/spacing.vue')
  },
  {
    path: '/utils/stacks',
    component: () => import('@/pages/utils/stacks.vue')
  },
  {
    path: '/utils/stretched-link',
    component: () => import('@/pages/utils/stretched-link.vue')
  },
  {
    path: '/utils/text',
    component: () => import('@/pages/utils/text.vue')
  },
  {
    path: '/utils/vertical-align',
    component: () => import('@/pages/utils/vertical-align.vue')
  },
  {
    path: '/utils/vertical-rule',
    component: () => import('@/pages/utils/vertical-rule.vue')
  },
  {
    path: '/utils/visibility',
    component: () => import('@/pages/utils/visibility.vue')
  },
  {
    path: '/utils/visually-hidden',
    component: () => import('@/pages/utils/visually-hidden.vue')
  },
  {
    path: '/utils/z-index',
    component: () => import('@/pages/utils/z-index.vue')
  }

  ,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/404.vue')
  }
];

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
            top: remToPx(4) // 考虑固定导航栏高度
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
