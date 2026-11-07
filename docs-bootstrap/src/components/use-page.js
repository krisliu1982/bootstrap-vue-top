import { onMounted } from 'vue'

let articleSpy = null;
export function usePage() {

  onMounted(() => {
    if (articleSpy !== null) articleSpy.dispose()
    const articleEl = document.querySelector('article.bd-content')

    const tocEl = document.querySelector('nav.bd-toc')

    if (tocEl) {
      import('bootstrap').then(bootstrap => {
        articleSpy = new bootstrap.ScrollSpy(articleEl, { target: tocEl })
      })
    }
  })
}