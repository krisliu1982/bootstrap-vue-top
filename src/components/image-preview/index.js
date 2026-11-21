import { createVNode, render } from 'vue';
import ImagePreview from './image-preview.vue';

let container = null;
const imagePreview = function (data, initIndex) {
  if (container) {
    render(null, container);
    container.remove();
    container = null;
  }

  container = document.createElement('div');
  document.body.appendChild(container);

  const vnode = createVNode(ImagePreview, {
    data: data,
    initIndex: initIndex,
    onDestroy: () => {
      render(null, container);
      container.remove();
      container = null;
    }
  });

  render(vnode, container);
};

export default imagePreview;
