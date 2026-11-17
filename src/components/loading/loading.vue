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
import { shallowRef, watch } from 'vue';

const elementRef = shallowRef(null);

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
});

watch(
  () => props.loading,
  (newVal) => {
    if (newVal) {
      document.addEventListener('keydown', tabHandler);
    } else {
      document.removeEventListener('keydown', tabHandler);
    }
  }
);

const tabHandler = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    elementRef.value.focus();
  }
};
</script>
