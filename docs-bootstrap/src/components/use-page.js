import { ref, onMounted, onUnmounted } from 'vue'
//import { useHead } from '@unhead/vue'

export function usePage() {

onMounted(()=>{
        /*if (articleEl) {
        const titleEl = articleEl.querySelector('h1')
        const descriptionEl = articleEl.querySelector('h1+p')
        useHead({
          title: titleEl.textContent + ' | Bootstrap v5.3',
          meta: [
            { name: 'description', content: descriptionEl.textContent }
          ]
        })
      }*/

  import('bootstrap').then(bootstrap => {
const articleEl = document.querySelector('article.bd-content')
      const tocEl = document.querySelector('nav.bd-toc')

      if (tocEl) {
        new bootstrap.ScrollSpy(articleEl, { target: tocEl })
      }
  })
})
}