<template>
  <Transition name="bv-fadeIn">
    <div ref="elementRef" v-show="visible" class="bv-loading-fullscreen text-center" tabindex="-1">
      <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem; margin-top: 25vh">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, shallowRef } from 'vue';

const elementRef = shallowRef(null);

const visible = ref(false);

let savedOverflow = null;
let savedPaddingRight = null;

function show() {
  savedOverflow = document.body.style.overflow;
  savedPaddingRight = document.body.style.paddingRight;
  if (document.body.scrollHeight > window.innerHeight) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  visible.value = true;

  document.addEventListener('keydown', tabHandler);
}

function hide() {
  document.body.style.overflow = savedOverflow;
  document.body.style.paddingRight = savedPaddingRight;

  visible.value = false;

  document.removeEventListener('keydown', tabHandler);
}

const tabHandler = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    elementRef.value.focus();
  }
};

defineExpose({
  show,
  hide
});
</script>
