
<template>
<div class="docs-intro">
    <h1>{{ props.frontmatter.title }}</h1>
</div>
<div class="docs-toc">
  <nav ref="tocTarget" id="TableOfContents" aria-label="Table of contents" class="table-of-contents">

  </nav>
</div>
  <div ref="content" class="docs-content prose" data-pagefind-body>
    <!-- 渲染 Markdown 编译后的内容 -->
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  frontmatter: {
    type: Object,
    default: () => ({})
  }
})

const tocTarget = ref(null)
const content = ref(null)

onMounted(() => {
  const generatedToc = content.value?.querySelector('.table-of-contents')
  if (!generatedToc || !tocTarget.value) return

  while (generatedToc.firstChild) {
    tocTarget.value.appendChild(generatedToc.firstChild)
  }
  generatedToc.remove()
})
</script>