import BvEditor from './components/editor/editor.vue';

export default {
  install: (app, options) => {
    app.component('BvEditor', BvEditor);
  }
};

export { BvEditor }