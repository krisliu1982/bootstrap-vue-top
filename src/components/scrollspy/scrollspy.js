import { ScrollSpy } from 'bootstrap';

export default {
  mounted(el, binding) {
    const target = el.getAttribute('data-bs-target');
    const targetEl = document.querySelector(target);
    new ScrollSpy(binding.modifiers.body ? document.body : el, {
      target: targetEl,
      smoothScroll: binding.modifiers.body ? false : true,
      threshold: [0.1, 0.5, 1]
    });
  },
  beforeUnmount(el, binding) {
    ScrollSpy.getInstance(binding.modifiers.body ? document.body : el).dispose();
  }
};
