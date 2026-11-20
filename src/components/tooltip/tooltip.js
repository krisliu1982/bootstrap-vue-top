import { Tooltip } from 'bootstrap';

export default {
  mounted(el) {
    new Tooltip(el);
  },
  beforeUnmount(el) {
    Tooltip.getInstance(el).dispose();
  }
};
