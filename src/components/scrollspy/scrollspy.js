import { ScrollSpy } from 'bootstrap';

export default {
  mounted(el, binding) {
    if (binding.value) {
      const containerEl = document.getElementById(binding.value);
      if (containerEl) {
        new ScrollSpy(containerEl, {
          target: el,
          smoothScroll: true,
          threshold: [0.1, 0.5, 1]
        });
      }
    } else {
      new ScrollSpy(document.body, {
        target: el,
        smoothScroll: true,
        threshold: [0.1, 0.5, 1]
      });
    }
  },
  beforeUnmount(el, binding) {
    if (binding.value) {
      ScrollSpy.getInstance(document.getElementById(binding.value)).dispose();
    } else {
      ScrollSpy.getInstance(document.body).dispose();

    }
  }
};
