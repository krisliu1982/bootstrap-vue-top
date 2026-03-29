<template></template>
<script setup>
import { inject, onMounted, onBeforeUnmount, useId } from 'vue';
import { panes_injection_key } from './tabs-keys.js';

const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const panes = inject(panes_injection_key);
const keyId = useId();
onMounted(() => {
  const pane = {
    keyId: keyId,
    label: props.label,
    disabled: props.disabled
  };
  panes.push(pane);
});

onBeforeUnmount(() => {
  const index = panes.findIndex((item) => item.keyId === keyId);
  panes.splice(index, 1);
});
</script>
