<template></template>
<script setup>
import { inject, onBeforeUnmount, useId, useSlots } from 'vue';
import { items_injection_key } from './accordion-keys.js';

const props = defineProps({
  header: {
    type: String,
    default: 'Header'
  }
});

const items = inject(items_injection_key);

const slots = useSlots();
const keyId = useId();

const body = slots.default ? () => slots.default() : null;
items.push({ keyId, header: props.header, body });

onBeforeUnmount(() => {
  const index = items.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    items.splice(index, 1);
  }
});
</script>
