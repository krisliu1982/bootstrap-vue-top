<template>
  <div :class="`docs-callout docs-callout-${type}`">
    <template v-if="name === 'info-npm-starter'">
      <info-npm-starter />
    </template>
    <template v-if="name === 'warning-input-support'">
      <warning-input-support />
    </template>
    <template v-if="name === 'warning-data-bs-title-vs-title'">
      <warning-data-bs-title-vs-title />
    </template>
    <template v-if="name === 'warning-color-assistive-technologies'">
      <warning-color-assistive-technologies />
    </template>
    <template v-if="name === 'info-sanitizer'">
      <info-sanitizer />
    </template>
    <template v-if="name === 'info-prefersreducedmotion'">
      <info-prefersreducedmotion />
    </template>
    <template v-if="name === 'info-mediaqueries-breakpoints'">
      <info-mediaqueries-breakpoints />
    </template>
    <template v-if="name === 'danger-async-methods'">
      <danger-async-methods />
    </template>
    <slot v-else />
  </div>
</template>

<script setup>
import InfoNpmStarter from '@data/callouts/info-npm-starter.vue'
import WarningInputSupport from '@data/callouts/warning-input-support.vue'
import WarningDataBsTitleVsTitle from '@data/callouts/warning-data-bs-title-vs-title.vue'
import WarningColorAssistiveTechnologies from '@data/callouts/warning-color-assistive-technologies.vue'
import InfoSanitizer from '@data/callouts/info-sanitizer.vue'
import InfoPrefersreducedmotion from '@data/callouts/info-prefersreducedmotion.vue'
import InfoMediaqueriesBreakpoints from '@data/callouts/info-mediaqueries-breakpoints.vue'
import DangerAsyncMethods from '@data/callouts/danger-async-methods.vue'

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