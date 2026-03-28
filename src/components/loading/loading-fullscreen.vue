<template>
  <Transition name="fadeIn">
    <div v-show="visible" class="loading-fullscreen text-center" tabindex="-1">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem; margin-top: 25vh">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const disableTab = (e) => {
  if (e.key === 'Tab') e.preventDefault();
};

onMounted(() => {
  document.addEventListener('keydown', disableTab);
});

onUnmounted(() => {
  document.removeEventListener('keydown', disableTab);
});

function show() {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.body.clientWidth}px;`;
  }
  visible.value = true;
}

function hide() {
  if (document.body.scrollHeight > window.innerHeight) {
    document.body.style = null;
  }
  visible.value = false;
}

defineExpose({
  show,
  hide
});
</script>
