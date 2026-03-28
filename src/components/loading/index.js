import { createVNode, render } from 'vue'
import LoadingConstructor from './loading-fullscreen.vue'

const LoadingFullscreen = (function () {
  let instance = null
  let count = 0

  function init() {
    const container = document.createElement('div')
    const vnode = createVNode(LoadingConstructor, {})

    render(vnode, container)
    document.body.appendChild(container.firstElementChild)

    return {
      show() {
        if (count === 0) {
          vnode.component.exposed.show()
        }
        count++
      },
      hide() {
        count--
        if (count < 0) {
          count = 0
          return
        }
        if (count === 0) {
          vnode.component.exposed.hide()
        }
      }
    }
  }

  return {
    getInstance() {
      if (instance === null) {
        instance = init()
      }
      return instance
    }
  }
})()

export default LoadingFullscreen
