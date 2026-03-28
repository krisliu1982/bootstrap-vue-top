<template></template>
<script setup>
import { inject, onMounted, onUnmounted, useId } from 'vue';
import { items_injection_key } from './accordion-keys.js';

const props = defineProps({
  header: {
    type: String,
    default: 'Header'
  }
});

const items = inject(items_injection_key);
const keyId = useId();
onMounted(() => {
  const item = {
    keyId: keyId,
    header: props.header
  };
  items.push(item);
});

onUnmounted(() => {
  const index = items.findIndex((item) => item.keyId === keyId);
  items.splice(index, 1);
});
</script>
