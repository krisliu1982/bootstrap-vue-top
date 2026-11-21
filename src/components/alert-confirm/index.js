import { createVNode, render } from 'vue';
import AlertConfirm from './alert-confirm.vue';

let container = null;
const alertConfirm = function (data) {
  if (container) {
    render(null, container);
    container.remove();
    container = null;
  }

  container = document.createElement('div');
  document.body.appendChild(container);

  const vnode = createVNode(AlertConfirm, {
    message: data.message,
    callback: typeof data.confirm === 'function' ? data.confirm : () => {},
    onDestroy: () => {
      render(null, container);
      container.remove();
      container = null;
    }
  });

  render(vnode, container);
};

export default alertConfirm;
