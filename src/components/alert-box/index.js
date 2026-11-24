import { createVNode, render } from 'vue';
import AlertBox from './alert-box.vue';

let container = null;
const alertBox = function (data) {
  if (container !== null) {
    render(null, container);
    container.remove();
    container = null;
  }

  container = document.createElement('div');
  document.body.appendChild(container);

  const vnode = createVNode(AlertBox, {
    message: data.message,
    onDestroy: () => {
      render(null, container);
      container.remove();
      container = null;
    }
  });

  render(vnode, container);
};

export default alertBox;
