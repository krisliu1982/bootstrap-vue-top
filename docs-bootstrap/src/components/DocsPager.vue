<template>
  <nav v-if="prev || next" class="d-flex justify-content-between mt-4" aria-label="文档翻页导航" data-pagefind-ignore>
    <RouterLink v-if="prev" :to="prev.path" class="py-3 text-decoration-none">
        <bi-arrow-left /> {{ prev.title }}
    </RouterLink>
    <span v-else class="col-5"></span>
    <RouterLink v-if="next" :to="next.path" class="py-3 text-end text-decoration-none">
        {{ next.title }} <bi-arrow-right />
    </RouterLink>
    <span v-else class="col-5"></span>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { flatPages } from '@/data/data.js';

const route = useRoute();

const currentIndex = flatPages.findIndex((page) => page.path === route.path);

const prev = currentIndex > 0 ? flatPages[currentIndex - 1] : null;
const next = currentIndex !== -1 && currentIndex < flatPages.length - 1 ? flatPages[currentIndex + 1] : null;
</script>
