<template>
  <div :class="`docs-callout docs-callout-${type}`">
    <template v-if="name === 'info-npm-starter'">
      <info-npm-starter />
    </template>
    <template v-if="name === 'warning-input-support'">
      <warning-input-support />
    </template>
    <slot v-else />
  </div>
</template>

<script setup>
import InfoNpmStarter from '@data/callouts/info-npm-starter.vue'
import WarningInputSupport from '@data/callouts/warning-input-support.vue'

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