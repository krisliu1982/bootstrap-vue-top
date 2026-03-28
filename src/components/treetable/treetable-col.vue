<template></template>
<script setup>
import { inject, onMounted, onUnmounted, useId } from 'vue'
import { cols_key } from './treetable-keys.js'

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
  }
})

const cols = inject(cols_key)
const keyId = useId()
onMounted(() => {
  const col = {
    keyId: keyId,
    header: props.header,
    field: props.field,
    width: props.width
  }
  cols.push(col)
})

onUnmounted(() => {
  const index = cols.findIndex((item) => item.keyId === keyId)
  cols.splice(index, 1)
})
</script>
