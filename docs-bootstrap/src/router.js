import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress-es';
import 'nprogress-es/nprogress.css';
import data from '@/data/data.js'

NProgress.settings.showSpinner = false;

const routes = [
  {
    path: '/',
    component: () => import('@/home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/404.vue')
  }
];

const allpage = data.sidebar.flatMap((group) => {
  if (!group.pages) return {
    groupSlug: group.slug,
    pageSlug: null
  }
  return group.pages.flatMap((item) => {
    // Handle direct pages
    if (item.title) {
      return [
        {
          groupSlug: group.slug,
          pageSlug: item.slug
        }
      ]
    }
    return []
  })
})

const docsRoutes = {
  path: `/docs`,
  component: () => import('@/index.vue'),
  children: [
    {
      path: '',
      redirect: `/docs/${allpage[0].groupSlug}/${allpage[0].pageSlug}`
    }
  ],
  alias: ['/docs']
}

allpage.forEach((page) => {
  if (page.pageSlug) {
    docsRoutes.children.push({
      path: `/docs/${page.groupSlug}/${page.pageSlug}`,
      component: () => import(`@/contents/${page.groupSlug}/${page.pageSlug}.vue`),
    })
  } else {
    docsRoutes.children.push({
      path: `/docs/${page.groupSlug}`,
      component: () => import(`@/contents/${page.groupSlug}.vue`),
    })
  }
})

routes.push(docsRoutes)

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
      return {
        el: to.hash,
        top: remToPx(4) // 固定导航栏高度
      };
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

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
