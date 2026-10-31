<template>
<div class="bd-callout bd-callout-warning">
  <p>
    <strong>Heads up!</strong> Dark variants for components were deprecated in v5.3.0 with the introduction of color modes.
    Instead of adding <code>.{{props.component}}-dark</code>, set <code>data-bs-theme="dark"</code> on the root element, a parent
    wrapper, or the component itself.
  </p>
</div>
</template>

<script setup>
const props = defineProps({
  component: {
    type: String,
    default: null
  }
});</script>