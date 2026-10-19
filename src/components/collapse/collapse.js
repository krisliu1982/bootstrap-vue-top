import { Collapse } from 'bootstrap';

export default {
  mounted(el, binding) {
    el.setAttribute('data-bs-toggle', 'collapse');
  },
  beforeUnmount(el, binding) {}
};
