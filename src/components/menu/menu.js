import Menu from 'bootstrap/js/dist/menu';

export default {
  mounted(el) {
    el.setAttribute('data-bs-toggle', 'menu');
    new Menu(el);
  },
  beforeUnmount(el) {
    Menu.getInstance(el).dispose();
  }
};
