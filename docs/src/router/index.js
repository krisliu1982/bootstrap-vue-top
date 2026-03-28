import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress-es';
import 'nprogress-es/nprogress.css';

NProgress.settings.showSpinner = false;

var routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/docs',
    component: () => import('@/views/docs/index.vue'),
    children: [
      {
        path: '/docs/content/reboot',
        component: () => import('@/views/docs/content/reboot.vue')
      },
      {
        path: '/docs/content/typography',
        component: () => import('@/views/docs/content/typography.vue')
      },
      {
        path: '/docs/content/images',
        component: () => import('@/views/docs/content/images.vue')
      },
      {
        path: '/docs/content/figures',
        component: () => import('@/views/docs/content/figures.vue')
      },
      {
        path: '/docs/form/overview',
        component: () => import('@/views/docs/form/overview.vue')
      },
      {
        path: '/docs/form/form-control',
        component: () => import('@/views/docs/form/form-control.vue')
      },
      {
        path: '/docs/form/select',
        component: () => import('@/views/docs/form/select.vue')
      },
      {
        path: '/docs/form/checks-radios',
        component: () => import('@/views/docs/form/checks-radios.vue')
      },
      {
        path: '/docs/form/range',
        component: () => import('@/views/docs/form/range.vue')
      },
      {
        path: '/docs/form/input-group',
        component: () => import('@/views/docs/form/input-group.vue')
      },
      {
        path: '/docs/form/floating-labels',
        component: () => import('@/views/docs/form/floating-labels.vue')
      },
      {
        path: '/docs/form/uploader',
        component: () => import('@/views/docs/form/uploader.vue')
      },
      {
        path: '/docs/form/layout',
        component: () => import('@/views/docs/form/layout.vue')
      },
      {
        path: '/docs/form/validation',
        component: () => import('@/views/docs/form/validation.vue')
      },
      {
        path: '/docs/components/accordion',
        component: () => import('@/views/docs/components/accordion.vue')
      },
      {
        path: '/docs/components/alerts',
        component: () => import('@/views/docs/components/alerts.vue')
      },
      {
        path: '/docs/components/alerts-box',
        component: () => import('@/views/docs/components/alerts-box.vue')
      },
      {
        path: '/docs/components/alerts-confirm',
        component: () => import('@/views/docs/components/alerts-confirm.vue')
      },
      {
        path: '/docs/components/alerts-message',
        component: () => import('@/views/docs/components/alerts-message.vue')
      },
      {
        path: '/docs/components/badge',
        component: () => import('@/views/docs/components/badge.vue')
      },
      {
        path: '/docs/components/breadcrumb',
        component: () => import('@/views/docs/components/breadcrumb.vue')
      },
      {
        path: '/docs/components/buttons',
        component: () => import('@/views/docs/components/buttons.vue')
      },
      {
        path: '/docs/components/button-group',
        component: () => import('@/views/docs/components/button-group.vue')
      },
      {
        path: '/docs/components/card',
        component: () => import('@/views/docs/components/card.vue')
      },
      {
        path: '/docs/components/carousel',
        component: () => import('@/views/docs/components/carousel.vue')
      },
      {
        path: '/docs/components/close-button',
        component: () => import('@/views/docs/components/close-button.vue')
      },
      {
        path: '/docs/components/collapse',
        component: () => import('@/views/docs/components/collapse.vue')
      },
      {
        path: '/docs/components/dropdowns',
        component: () => import('@/views/docs/components/dropdowns.vue')
      },
      {
        path: '/docs/components/list-group',
        component: () => import('@/views/docs/components/list-group.vue')
      },
      {
        path: '/docs/components/loading',
        component: () => import('@/views/docs/components/loading.vue')
      },
      {
        path: '/docs/components/modal',
        component: () => import('@/views/docs/components/modal.vue')
      },
      {
        path: '/docs/components/modal2',
        component: () => import('@/views/docs/components/modal2.vue')
      },
      {
        path: '/docs/components/navbar',
        component: () => import('@/views/docs/components/navbar.vue')
      },
      {
        path: '/docs/components/navs-tabs',
        component: () => import('@/views/docs/components/navs-tabs.vue')
      },
      {
        path: '/docs/components/offcanvas',
        component: () => import('@/views/docs/components/offcanvas.vue')
      },
      {
        path: '/docs/components/pagination',
        component: () => import('@/views/docs/components/pagination.vue')
      },
      {
        path: '/docs/components/placeholders',
        component: () => import('@/views/docs/components/placeholders.vue')
      },
      {
        path: '/docs/components/popovers',
        component: () => import('@/views/docs/components/popovers.vue')
      },
      {
        path: '/docs/components/progress',
        component: () => import('@/views/docs/components/progress.vue')
      },
      {
        path: '/docs/components/scrollspy',
        component: () => import('@/views/docs/components/scrollspy.vue')
      },
      {
        path: '/docs/components/spinners',
        component: () => import('@/views/docs/components/spinners.vue')
      },
      {
        path: '/docs/components/tables',
        component: () => import('@/views/docs/components/tables.vue')
      },
      {
        path: '/docs/components/toasts',
        component: () => import('@/views/docs/components/toasts.vue')
      },
      {
        path: '/docs/components/tooltips',
        component: () => import('@/views/docs/components/tooltips.vue')
      },
      {
        path: '/docs/components/tree',
        component: () => import('@/views/docs/components/tree.vue')
      },
      {
        path: '/docs/components/tree-table',
        component: () => import('@/views/docs/components/tree-table.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
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
            top: remToPx(4.75) // 考虑固定导航栏高度
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
  if (to.hash) return true;
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
