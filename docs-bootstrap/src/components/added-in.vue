<template>
    <small
        class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2">Added
        in v{{props.version}}</small>
</template>

<script setup>
const props = defineProps({
  version: {
    type: String,
    default: null
  }
});</script>