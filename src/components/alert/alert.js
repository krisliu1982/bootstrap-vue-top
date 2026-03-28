import Alert from 'bootstrap/js/dist/alert';

export default {
  mounted(el) {
    new Alert(el);
  },
  unmounted(el) {
    Alert.getInstance(el).dispose();
  }
};
