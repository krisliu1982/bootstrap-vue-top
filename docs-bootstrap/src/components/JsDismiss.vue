<template>
  <p>Dismissal can be achieved with the <code>data-bs-dismiss</code> attribute on a button <strong>within the {name}</strong> as demonstrated below:</p>

  <CodeWrapper :code="`<button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;${props.name}&quot; aria-label=&quot;Close&quot;></button>`" lang="html" />

  <p>or on a button <strong>outside the {name}</strong> using the additional <code>data-bs-target</code> as demonstrated below:</p>

  <CodeWrapper
    :code="`<button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;${props.name}&quot; data-bs-target=&quot;#my-${props.name}&quot; aria-label=&quot;Close&quot;></button>`"
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
