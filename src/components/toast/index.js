import { createVNode, render } from 'vue';
import Toast from './toast.vue';

let container = null;
const toast = function (data) {
  if (container) {
    render(null, container);
    container = null;
  }

  container = document.createElement('div');

  const vnode = createVNode(Toast, {
    type: data.type,
    title: data.title,
    message: data.message,
    duration: data.duration,
    position: data.position,
    onDestroy: () => {
      render(null, container);
    }
  });

  render(vnode, container);

  document.body.appendChild(container.firstElementChild);
};

export default toast;
