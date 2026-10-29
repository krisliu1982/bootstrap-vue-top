<template>
  <nav class="docs-links-nav py-9">
    <div class="d-flex justify-content-stretch gap-9 lh-1">
      <a v-if="prevPage" :href="prevPage.url" class="d-flex flex-column gap-3 text-decoration-none text-start flex-grow-1" rel="prev">
        <div class="fg-3">← 上一页</div>
        <div class="fw-semibold">{{ prevPage['title'] }}</div>
        <div class="fg-3">{{ prevPage.groupTitle }}</div>
      </a><a v-if="nextPage" :href="nextPage.url" class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="next">
        <div class="fg-3">下一页 →</div>
        <div class="fw-semibold">{{ nextPage['title'] }}</div>
        <div class="fg-3">{{ nextPage.groupTitle }}</div>
      </a>
    </div>
  </nav>
</template>

<script setup>
import data from '@data/data.js'

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
        title: page['zh-CN'],
        url: `/docs/${group.slug}/${page.slug}`,
        groupTitle: subgroupTitle
      }))
    }
    // Handle direct pages
    if (item.title) {
      return [
        {
          title: item['zh-CN'],
          url: `/docs/${group.slug}/${item.slug}`,
          groupTitle: group.title
        }
      ]
    }
    return []
  })
})

// Find the current page index
const currentPageIndex = allPages.findIndex((page) => page.url === `/docs/content/install`)

if (currentPageIndex > 0) {
  prevPage = allPages[currentPageIndex - 1]
}

if (currentPageIndex < allPages.length - 1) {
  nextPage = allPages[currentPageIndex + 1]
}
</script>