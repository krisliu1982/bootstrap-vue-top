import Alert from 'bootstrap/js/dist/alert';

export default {
  mounted(el) {
    new Alert(el);
  },
  beforeUnmount(el) {
    Alert.getInstance(el).dispose();
  }
};
