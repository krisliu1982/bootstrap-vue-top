<template></template>
<script setup>
import { inject, onBeforeUnmount, useId, useSlots } from 'vue';
import { panes_injection_key } from './tabs-keys.js';

const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  lazy: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const panes = inject(panes_injection_key);

const slots = useSlots();
const keyId = useId();

const body = slots.default ? () => slots.default() : null;

panes.push({
  keyId: keyId,
  label: props.label,
  lazy: props.lazy,
  disabled: props.disabled,
  body
});

onBeforeUnmount(() => {
  const index = panes.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    panes.splice(index, 1);
  }
});
</script>
