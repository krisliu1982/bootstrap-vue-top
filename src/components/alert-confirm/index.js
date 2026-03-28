import { createVNode, render } from 'vue';
import AlertConfirm from './alert-confirm.vue';

let container = null;
const alertConfirm = function (data) {
  if (container) {
    render(null, container);
    container = null;
  }

  container = document.createElement('div');

  const vnode = createVNode(AlertConfirm, {
    message: data.message,
    callback: data.confirm,
    onDestroy: () => {
      render(null, container);
    }
  });

  render(vnode, container);

  document.body.appendChild(container.firstElementChild);
};

export default alertConfirm;
