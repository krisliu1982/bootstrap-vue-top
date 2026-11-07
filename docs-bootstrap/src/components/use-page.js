import { onMounted, onBeforeUnmount } from 'vue';

export function usePage() {
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
