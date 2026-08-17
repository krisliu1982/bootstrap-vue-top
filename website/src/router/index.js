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
        path: '',
        redirect: '/docs/guide/introduction'
      },
      {
        path: '/docs/guide/introduction',
        component: () => import('@/views/docs/guide/introduction.vue')
      },
      {
        path: '/docs/guide/quick-start',
        component: () => import('@/views/docs/guide/quick-start.vue')
      },
      {
        path: '/docs/guide/changelog',
        component: () => import('@/views/docs/guide/changelog.vue')
      },
      {
        path: '/docs/layout/breakpoints',
        component: () => import('@/views/docs/layout/breakpoints.vue')
      },
      {
        path: '/docs/layout/containers',
        component: () => import('@/views/docs/layout/containers.vue')
      },
      {
        path: '/docs/layout/grid',
        component: () => import('@/views/docs/layout/grid.vue')
      },
      {
        path: '/docs/layout/z-index',
        component: () => import('@/views/docs/layout/z-index.vue')
      },
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
        path: '/docs/components/backtop',
        component: () => import('@/views/docs/components/backtop.vue')
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
      },
      {
        path: '/docs/utils/background',
        component: () => import('@/views/docs/utils/background.vue')
      },
      {
        path: '/docs/utils/borders',
        component: () => import('@/views/docs/utils/borders.vue')
      },
      {
        path: '/docs/utils/colors',
        component: () => import('@/views/docs/utils/colors.vue')
      },
      {
        path: '/docs/utils/color-background',
        component: () => import('@/views/docs/utils/color-background.vue')
      },
      {
        path: '/docs/utils/display',
        component: () => import('@/views/docs/utils/display.vue')
      },
      {
        path: '/docs/utils/flex',
        component: () => import('@/views/docs/utils/flex.vue')
      },
      {
        path: '/docs/utils/float',
        component: () => import('@/views/docs/utils/float.vue')
      },
      {
        path: '/docs/utils/focus-ring',
        component: () => import('@/views/docs/utils/focus-ring.vue')
      },
      {
        path: '/docs/utils/interactions',
        component: () => import('@/views/docs/utils/interactions.vue')
      },
      {
        path: '/docs/utils/link',
        component: () => import('@/views/docs/utils/link.vue')
      },
      {
        path: '/docs/utils/object-fit',
        component: () => import('@/views/docs/utils/object-fit.vue')
      },
      {
        path: '/docs/utils/opacity',
        component: () => import('@/views/docs/utils/opacity.vue')
      },
      {
        path: '/docs/utils/overflow',
        component: () => import('@/views/docs/utils/overflow.vue')
      },
      {
        path: '/docs/utils/position',
        component: () => import('@/views/docs/utils/position.vue')
      },
      {
        path: '/docs/utils/ratio',
        component: () => import('@/views/docs/utils/ratio.vue')
      },
      {
        path: '/docs/utils/shadows',
        component: () => import('@/views/docs/utils/shadows.vue')
      },
      {
        path: '/docs/utils/sizing',
        component: () => import('@/views/docs/utils/sizing.vue')
      },
      {
        path: '/docs/utils/spacing',
        component: () => import('@/views/docs/utils/spacing.vue')
      },
      {
        path: '/docs/utils/stacks',
        component: () => import('@/views/docs/utils/stacks.vue')
      },
      {
        path: '/docs/utils/stretched-link',
        component: () => import('@/views/docs/utils/stretched-link.vue')
      },
      {
        path: '/docs/utils/text',
        component: () => import('@/views/docs/utils/text.vue')
      },
      {
        path: '/docs/utils/vertical-align',
        component: () => import('@/views/docs/utils/vertical-align.vue')
      },
      {
        path: '/docs/utils/vertical-rule',
        component: () => import('@/views/docs/utils/vertical-rule.vue')
      },
      {
        path: '/docs/utils/visibility',
        component: () => import('@/views/docs/utils/visibility.vue')
      },
      {
        path: '/docs/utils/visually-hidden',
        component: () => import('@/views/docs/utils/visually-hidden.vue')
      },
      {
        path: '/docs/utils/z-index',
        component: () => import('@/views/docs/utils/z-index.vue')
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
  if (to.hash) return true;
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
