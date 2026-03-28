import { createVNode, render } from 'vue'
import AlertMessage from './alert-message.vue'

let container = null
const alertMessage = function (data) {
  if (container !== null) {
    render(null, container)
    container = null
  }

  container = document.createElement('div')

  const vnode = createVNode(AlertMessage, {
    type: data.type,
    message: data.message,
    duration: data.duration,
    onDestroy: () => {
      render(null, container)
    }
  })

  render(vnode, container)

  document.body.appendChild(container.firstElementChild)
}

export default alertMessage
