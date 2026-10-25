
<template>
<div class="docs-intro">
    <h1>{{ props.frontmatter.title }}</h1>
    <p>{{ props.frontmatter.description }}</p>
</div>
<div class="docs-toc">
  <nav id="TableOfContents" aria-label="Table of contents" class="table-of-contents">

  </nav>
</div>
  <div id="content" class="docs-content prose" data-pagefind-body>
    <!-- 渲染 Markdown 编译后的内容 -->
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  frontmatter: {
    type: Object,
    default: () => ({})
  }
})

onMounted(() => {
  const navEl = document.getElementById('TableOfContents');
  const contentEl = document.getElementById('content');
  if (!contentEl || !navEl) return

  const list = document.createElement('ul')
  let currentSection

  contentEl.querySelectorAll('h2[id], h3[id]').forEach((heading) => {
    const link = document.createElement('a')
    link.href = `#${heading.id}`
    link.textContent = heading.textContent.trim()

    const item = document.createElement('li')
    item.appendChild(link)

    if (heading.tagName === 'H3' && currentSection) {
      let subsectionList = currentSection.querySelector(':scope > ul')
      if (!subsectionList) {
        subsectionList = document.createElement('ul')
        currentSection.appendChild(subsectionList)
      }
      subsectionList.appendChild(item)
    } else {
      list.appendChild(item)
      currentSection = heading.tagName === 'H2' ? item : null
    }
  })

  if (list.childElementCount) navEl.appendChild(list)
  contentEl.querySelectorAll('.table-of-contents').forEach((generatedToc) => generatedToc.remove())
})
</script>