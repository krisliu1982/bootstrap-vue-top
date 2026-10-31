<template>
        <small
  class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2"
>
  Deprecated in v{{props.version}}
</small>
</template>

<script setup>
const props = defineProps({
  version: {
    type: String,
    default: null
  }
});</script>