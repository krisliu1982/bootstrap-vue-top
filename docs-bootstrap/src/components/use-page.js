import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'

let articleSpy = null;
export function usePage() {

  onMounted(() => {
    const articleEl = document.querySelector('article.bd-content')

    if (articleEl) {
      const titleEl = articleEl.querySelector('h1')
      const descriptionEl = articleEl.querySelector('h1+p')
      useHead({
        title: titleEl.textContent + ' | Bootstrap v5.3',
        meta: [
          { name: 'description', content: descriptionEl.textContent }
        ]
      })
    }

    if (articleSpy !== null) articleSpy.dispose()

    const tocEl = document.querySelector('nav.bd-toc')

    if (tocEl) {
      import('bootstrap').then(bootstrap => {

        articleSpy = new bootstrap.ScrollSpy(articleEl, { target: tocEl })
      }
      )
    }
  })
}