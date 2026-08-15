import ScrollSpy from 'bootstrap/js/dist/scrollspy';

export default {
  mounted(el, binding) {
    const target = el.getAttribute('data-bs-target');
    const targetEl = document.querySelector(target);
    new ScrollSpy(binding.modifiers.self ? el : document.body, {
      target: targetEl,
      smoothScroll: binding.modifiers.self ? true : false,
      threshold: [0.1, 0.5, 1]
    });
    console.log('aaaa');
  },
  beforeUnmount(el, binding) {
    //ScrollSpy.getInstance(binding.modifiers.self ? el : document.body).dispose();
  }
};
