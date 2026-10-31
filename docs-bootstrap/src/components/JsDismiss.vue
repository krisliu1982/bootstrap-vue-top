<template>
    <p>
  Dismissal can be achieved with the <code>data-bs-dismiss</code> attribute on a button <strong>within the {name}</strong> as demonstrated below:
</p>

<CodeWrapper
  :code='`<button type="button" class="btn-close" data-bs-dismiss="${props.name}" aria-label="Close"></button>`'
  lang="html"
/>

<p>
  or on a button <strong>outside the {name}</strong> using the additional <code>data-bs-target</code> as demonstrated below:
</p>

<CodeWrapper
  :code='`<button type="button" class="btn-close" data-bs-dismiss="${props.name}" data-bs-target="#my-${props.name}" aria-label="Close"></button>`'
  lang="html"
/>
    </template>

    <script setup>
const props = defineProps({
  name: {
    type: String,
    default: null
  }
});
</script>