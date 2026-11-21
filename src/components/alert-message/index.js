import { createVNode, render } from 'vue';
import AlertMessage from './alert-message.vue';

let container = null;
const alertMessage = function (data) {
  if (container !== null) {
    render(null, container);
    container.remove();
    container = null;
  }

  container = document.createElement('div');
  document.body.appendChild(container);

  const vnode = createVNode(AlertMessage, {
    type: data.type,
    message: data.message,
    duration: data.duration,
    onDestroy: () => {
      render(null, container);
      container.remove();
      container = null;
    }
  });

  render(vnode, container);
};

export default alertMessage;
