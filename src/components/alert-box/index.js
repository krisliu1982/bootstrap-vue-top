import { createVNode, render } from 'vue';
import AlertBox from './alert-box.vue';

let container = null;
const alertBox = function (data) {
  if (container) {
    render(null, container);
    container = null;
  }

  container = document.createElement('div');

  const vnode = createVNode(AlertBox, {
    message: data.message,
    onDestroy: () => {
      render(null, container);
    }
  });

  render(vnode, container);

  document.body.appendChild(container.firstElementChild);
};

export default alertBox;
