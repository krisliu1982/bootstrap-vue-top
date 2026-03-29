import Popover from 'bootstrap/js/dist/popover';

export default {
  mounted(el) {
    new Popover(el);
  },
  beforeUnmount(el) {
    Popover.getInstance(el).dispose();
  }
};
