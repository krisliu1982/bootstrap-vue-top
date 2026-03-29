import Collapse from 'bootstrap/js/dist/collapse';

export default {
  mounted(el, binding) {
    el.setAttribute('data-bs-toggle', 'collapse');
  },
  beforeUnmount(el, binding) {}
};
