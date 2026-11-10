import { onMounted, onBeforeUnmount } from 'vue';
import { useHead } from '@unhead/vue'
import intro from '@/data/intro.json' with { type: 'json' };
import { useRoute } from 'vue-router';

export function usePage() {

  const route = useRoute();

  useHead({
    htmlAttrs: {
      lang: 'zh-CN'
    },
    title: intro[route.path].title + ' | Bootstrap v5.3 中文文档',
    meta: [
      {
        name: 'description',
        content: intro[route.path].description,
      },
    ],
  })
  onMounted(() => {
    const articleEl = document.querySelector('article.bd-content');
    const tocEl = document.querySelector('nav.bd-toc');
    if (tocEl) {
      import('bootstrap').then((bootstrap) => {
        new bootstrap.ScrollSpy(articleEl, { target: tocEl });
      });
    }
  });

  onBeforeUnmount(() => {
    const articleEl = document.querySelector('article.bd-content');
    const tocEl = document.querySelector('nav.bd-toc');
    if (tocEl) {
      import('bootstrap').then((bootstrap) => {
        bootstrap.ScrollSpy.getInstance(articleEl).dispose();
      });
    }
  });
}
