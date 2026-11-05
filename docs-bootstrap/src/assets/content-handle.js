import { onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'
import * as bootstrap from 'bootstrap';

export function useContent(articleEl, tocEl) {
    onMounted(() => {
        const titleEl = articleEl.querySelector('h1')
        const descriptionEl = articleEl.querySelector('h1+p')
        useHead({
            title: titleEl.textContent + ' | Bootstrap v5.3',
            meta: [
                { name: 'description', content: descriptionEl.textContent }
            ]
        })

        if (tocEl) {
            new bootstrap.ScrollSpy(articleEl, {
                target: tocEl
            })
        }
    })

    onBeforeUnmount(() => {
        if (tocEl) {
            bootstrap.ScrollSpy.getInstance(articleEl).dispose()
        }
    })
}