<template></template>
<script setup>
import { inject, onBeforeUnmount, useId, useSlots } from 'vue';
import { cols_key } from './treetable-keys.js';

const props = defineProps({
  header: {
    type: String,
    default: null
  },
  field: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: 'auto'
  },
  tree: { type: Boolean, default: false }
});

const cols = inject(cols_key);
const slots = useSlots();
const keyId = useId();
const body = slots.body ? slots.body : null;

cols.push({
  keyId: keyId,
  header: props.header,
  field: props.field,
  width: props.width,
  tree: props.tree,
  body
});

onBeforeUnmount(() => {
  const index = cols.findIndex((item) => item.keyId === keyId);
  if (index !== -1) {
    cols.splice(index, 1);
  }
});
</script>
