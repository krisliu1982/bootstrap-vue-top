<template>
  <Transition name="fadeIn">
    <div ref="elementRef" v-show="visible" class="loading-fullscreen text-center" tabindex="-1">
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

function show() {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.clientWidth}px;`;
  }
  visible.value = true;

  document.addEventListener('keydown', tabHandler)
}

function hide() {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style = null;
  }
  visible.value = false;

  document.removeEventListener('keydown', tabHandler)
}

const tabHandler = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault()
    elementRef.value.focus()
  }
}

defineExpose({
  show,
  hide
});
</script>
