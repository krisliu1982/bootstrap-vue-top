<template>
  <div ref="elementRef" class="position-relative" tabindex="-1">
    <slot></slot>
    <Transition name="bv-fadeIn">
      <div v-if="loading" class="bv-loading-area position-absolute top-0 start-0 w-100 h-100 text-center z-1">
        <div class="spinner-border text-primary" role="status" style="margin-top: 2rem">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { shallowRef, watch, onBeforeUnmount } from 'vue';


const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
});

const elementRef = shallowRef(null);

const tabHandler = (e) => {
  if (e.key === 'Tab' && elementRef.value) {
    e.preventDefault();
    elementRef.value.focus();
  }
};

watch(
  () => props.loading,
  (newVal) => {
    if (newVal) {
      document.addEventListener('keydown', tabHandler);
    } else {
      document.removeEventListener('keydown', tabHandler);
    }
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  document.removeEventListener('keydown', tabHandler);
});
</script>
