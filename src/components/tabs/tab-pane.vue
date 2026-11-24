<template></template>
<script setup>
import { inject, onMounted, onBeforeUnmount, useId, useSlots, nextTick } from 'vue';
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

const body = slots.default ? slots.default : null;

panes.push({
  keyId: keyId,
  label: props.label,
  lazy: props.lazy,
  disabled: props.disabled,
  body
});

onMounted(async () => {
  await nextTick();
  const el = document.getElementById(`${keyId}-tab`);
  if (el) new Tab(el);
});

onBeforeUnmount(() => {
  const el = document.getElementById(`${keyId}-tab`);
  if (el) {
    const instance = Tab.getInstance(el);
    if (instance) instance.dispose();
  }

  const index = panes.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    panes.splice(index, 1);
  }
});
</script>
