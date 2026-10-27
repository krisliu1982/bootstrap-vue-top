import { ScrollSpy } from 'bootstrap';

export default {
  mounted(el, binding) {
    const target = el.getAttribute('data-bs-target');
    const targetEl = document.querySelector(target);
    new ScrollSpy(binding.modifiers.body ? document.body : el, {
      target: targetEl
    });
  },
  beforeUnmount(el, binding) {
    ScrollSpy.getInstance(binding.modifiers.body ? document.body : el).dispose();
  }
};
