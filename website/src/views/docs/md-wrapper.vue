
<template>
<div class="docs-intro">
    <h1>{{ props.frontmatter.title }}</h1>
</div>
<div class="docs-toc">
  <nav id="TableOfContents" aria-label="Table of contents" class="table-of-contents">

  </nav>
</div>
  <div class="docs-content prose" data-pagefind-body>
    <!-- 渲染 Markdown 编译后的内容 -->
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  frontmatter: {
    type: Object,
    default: () => ({})
  }
})

// 此时 props.frontmatter 就是当前 Markdown 的元数据对象
// 例如可以在 onMounted 或 watch 中使用它
</script>