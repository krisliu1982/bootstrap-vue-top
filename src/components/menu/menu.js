import {Menu} from 'bootstrap';

export default {
  mounted(el) {
    el.setAttribute('data-bs-toggle', 'menu');
    new Menu(el);
  },
  beforeUnmount(el) {
    Menu.getInstance(el).dispose();
  }
};
