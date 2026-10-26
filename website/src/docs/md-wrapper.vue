
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

        <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1">
        <a :href="prevPage.url"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← 上一页</div>
          <div class="fw-semibold">{{prevPage['title']}}</div>
          <div class="fg-3">{{prevPage.groupTitle}}</div>
        </a><a :href="nextPage.url" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">下一页 →</div>
          <div class="fw-semibold">{{nextPage['title']}}</div>
          <div class="fg-3">{{nextPage.groupTitle}}</div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import data from '@data/data.js'

const props = defineProps({
  frontmatter: {
    type: Object,
    default: () => ({})
  }
})

// Find previous and next pages for navigation
let prevPage = null
let nextPage = null

// Create a flat array of all pages with their groups, handling nested groups
const allPages = data.sidebar.flatMap((group) => {
  if (!group.pages) return []
  return group.pages.flatMap((item) => {
    // Handle nested groups (e.g., Utilities > Borders > Border)
    if (item.group && item.pages) {
      const subgroupTitle = item.group
      return item.pages.map((page) => ({
        title: page['zh-CN']?page['zh-CN']:page.title,
        url: `/docs/${data['bs-docs-version']}/${group.slug}/${page.slug}`,
        groupTitle: subgroupTitle
      }))
    }
    // Handle direct pages
    if (item.title) {
      return [
        {
          title: item['zh-CN']?item['zh-CN']:item.title,
          url: `/docs/${data['bs-docs-version']}/${group.slug}/${item.slug}`,
          groupTitle: group.title
        }
      ]
    }
    return []
  })
})

// Find the current page index
const currentPageIndex = allPages.findIndex((page) => page.url === `/docs/${data['bs-docs-version']}/content/reboot`)

if (currentPageIndex > 0) {
  prevPage = allPages[currentPageIndex - 1]
}

if (currentPageIndex < allPages.length - 1) {
  nextPage = allPages[currentPageIndex + 1]
}

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