import { Popover } from 'bootstrap';

export default {
  mounted(el) {
    new Popover(el);
  },
  beforeUnmount(el) {
    Popover.getInstance(el).dispose();
  }
};
