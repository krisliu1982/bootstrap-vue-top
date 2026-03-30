import BvEditorHtml from './components/editor/editor-html.vue';

export default {
  install: (app, options) => {
    app.component('BvEditorHtml', BvEditorHtml);
  }
};

export { BvEditorHtml }