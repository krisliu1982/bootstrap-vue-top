<template>
  <div :class="`docs-callout docs-callout-${type}`">
    <template v-if="name === 'info-npm-starter'">
      {{ InfoNpmStarter }}
    </template>
    <template v-if="name === 'warning-input-support'">
      {{ WarningInputSupport }}
    </template>
    <slot v-else />
  </div>
</template>

<script setup>
import InfoNpmStarter from './_data/callouts/info-npm-starter.md?raw'
import WarningInputSupport from './_data/callouts/warning-input-support.md?raw'

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