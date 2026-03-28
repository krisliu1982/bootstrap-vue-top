import { createVNode, render } from 'vue'
import ImagePreview from './image-preview.vue'

let container = null
const imagePreview = function (data, initIndex) {
  if (container) {
    render(null, container)
    container = null
  }

  container = document.createElement('div')

  const vnode = createVNode(ImagePreview, {
    data: data,
    initIndex: initIndex,
    onDestroy: () => {
      render(null, container)
    }
  })

  render(vnode, container)

  document.body.appendChild(container.firstElementChild)
}

export default imagePreview
