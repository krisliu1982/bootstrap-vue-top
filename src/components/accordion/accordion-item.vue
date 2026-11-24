<template></template>
<script setup>
import { inject, onMounted, onBeforeUnmount, useId, useSlots, nextTick } from 'vue';
import { items_injection_key } from './accordion-keys.js';
import { Collapse } from 'bootstrap'

const props = defineProps({
  header: {
    type: String,
    default: 'Header'
  }
});

const items = inject(items_injection_key);

const slots = useSlots();
const keyId = useId();

const body = slots.default ? slots.default : null;
items.push({ keyId, header: props.header, body });

onMounted(async () => {
  await nextTick();
  const el = document.getElementById(keyId);
  if (el) new Collapse(el, { toggle: false });
})

onBeforeUnmount(() => {
  const el = document.getElementById(keyId);
  if (el) {
    const instance = Collapse.getInstance(el);
    if (instance) instance.dispose();
  }

  const index = items.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    items.splice(index, 1);
  }
});
</script>
