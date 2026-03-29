import Dropdown from 'bootstrap/js/dist/dropdown';

export default {
  mounted(el) {
    el.setAttribute('data-bs-toggle', 'dropdown');
    new Dropdown(el);
  },
  beforeUnmount(el) {
    Dropdown.getInstance(el).dispose();
  }
};
