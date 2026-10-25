<template>
<div :class="`docs-callout docs-callout-${type}`">
  <p v-if="props.name" v-html="data.callouts[name]"></p>
  <slot v-else />
</div>
</template>

<script setup>
import data from '@data'
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  },
  name: {
    type: String,
    default: null
  }
});
</script>