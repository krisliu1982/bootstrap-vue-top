<template></template>
<script setup>
import { inject, onMounted, onBeforeUnmount, useId, useSlots } from 'vue';
import { panes_injection_key } from './tabs-keys.js';
import { Tab } from 'bootstrap';

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

onMounted(() => {
  const tabEl = document.getElementById(`${keyId}-tab`);
  if (tabEl) new Tab(tabEl);
});

onBeforeUnmount(() => {
  
  const tabEl = document.getElementById(`${keyId}-tab`);
  if (tabEl) {
    const tabInstance = Tab.getInstance(tabEl);
    if (tabInstance) tabInstance.dispose();
  }

  const index = panes.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    panes.splice(index, 1);
  }
});
</script>
