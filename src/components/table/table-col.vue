<template></template>
<script setup>
import { inject, onBeforeUnmount, useId, useSlots } from 'vue';
import { cols_injection_key } from './table-keys.js';

const props = defineProps({
  header: {
    type: String,
    default: null
  },
  field: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null,
    validator(value) {
      if (value === null) return true;
      return ['index', 'checkbox', 'radio', 'expand'].includes(value);
    }
  },
  width: {
    type: String,
    default: 'auto'
  },
  sortable: {
    type: String,
    default: null,
    validator(value) {
      if (value === null) return true;
      return ['local', 'remote'].includes(value);
    }
  }
});

const cols = inject(cols_injection_key);

const slots = useSlots();
const key_id = useId();

// 特殊列唯一性校验
if (['checkbox', 'radio', 'expand'].includes(props.type)) {
  if (!props.field) {
    throw new Error(`[TableCol] type 为 ${props.type} 时必须提供 field`)
  }
  if (cols.some((c) => c.type === props.type)) {
    throw new Error(`[TableCol] 只允许一个 type 为 ${props.type} 的列`)
  }
}

const body = slots.body ? slots.body : null;

cols.push({
  key_id: key_id,
  header: props.header,
  field: props.field,
  type: props.type,
  width: props.width,
  sortable: props.sortable,
  body
});

onBeforeUnmount(() => {
  const index = cols.findIndex((item) => item.key_id === key_id);
  cols.splice(index, 1);
});
</script>
