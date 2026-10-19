import { Alert } from 'bootstrap';

export default {
  mounted(el) {
    new Alert(el);
  },
  beforeUnmount(el) {
    Alert.getInstance(el).dispose();
  }
};
