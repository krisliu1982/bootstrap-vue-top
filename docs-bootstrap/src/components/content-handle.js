import { onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'
import * as bootstrap from 'bootstrap';

export function useContent() {
    onMounted(() => {
        const articleEl = document.querySelector('article.docs-content')
        const titleEl = articleEl.querySelector('h1')
        const descriptionEl = articleEl.querySelector('h1+p')
        useHead({
            title: titleEl.textContent + ' | Bootstrap v5.3',
            meta: [
                { name: 'description', content: descriptionEl.textContent }
            ]
        })

        const tocEl = document.querySelector('nav.docs-toc')
        if (tocEl) {
            new bootstrap.ScrollSpy(articleEl, {
                target: tocEl
            })
        }
    })

    onBeforeUnmount(() => {
        const tocEl = document.querySelector('nav.docs-toc')
        if (tocEl) {
            bootstrap.ScrollSpy.getInstance(tocEl).dispose()
        }
    })
}