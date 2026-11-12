<template>
  <div class="bd-callout bd-callout-warning">
    <p>
      <strong>注意！</strong>随着颜色模式的引入，组件的深色变体已在 v5.3.0 中弃用。不要再添加 <code>.{{ props.component }}-dark</code>，而应在根元素、父级包装元素或组件自身上设置 <code>data-bs-theme="dark"</code>。
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  component: {
    type: String,
    default: null
  }
});
</script>
