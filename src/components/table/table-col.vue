<template></template>
<script setup>
import { inject, onMounted, onUnmounted, useId } from 'vue'
import { cols_injection_key, tr_keyinfo_injection_key } from './table-keys.js'

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
      if (value === null) return true
      return ['index', 'checkbox', 'radio', 'expand'].includes(value)
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
      if (value === null) return true
      return ['local', 'remote'].includes(value)
    }
  }
})

const cols = inject(cols_injection_key)
const trKeyinfo = inject(tr_keyinfo_injection_key)
const key_id = useId()
onMounted(() => {
  const col = {
    key_id: key_id,
    header: props.header,
    field: props.field,
    type: props.type,
    width: props.width,
    sortable: props.sortable
  }
  cols.push(col)

  if (props.type === 'checkbox' || props.type === 'radio' || props.type === 'expand') {
    trKeyinfo.type = props.type
    trKeyinfo.field = props.field
  }
})

onUnmounted(() => {
  const index = cols.findIndex((item) => item.key_id === key_id)
  cols.splice(index, 1)
})

function tdContentWidth() {
  if (props.width !== 'auto' && props.truncate === true) {
    return `calc(${props.width} - 1rem)`
  } else {
    return null
  }
}
</script>
