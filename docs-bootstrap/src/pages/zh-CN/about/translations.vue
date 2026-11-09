<template>
  <article class="bd-content">
    <h1>翻译</h1>
    <p>链接到由社区翻译的 Bootstrap 文档站点。</p>

    <p>社区成员已将 Bootstrap 的文档翻译成多种语言。这些翻译均未获得官方支持，且可能并非始终是最新的。</p>
    <ul>
      <li v-for="translation in data.translations">
       <a :href="translation.url" :hreflang="translation.code" :lang="translation.code">{{ translation.description }} ({{ translation.name }})</a>
      </li>
    </ul>
    <p><strong>我们不负责组织或托管翻译，仅提供链接。</strong></p>
    <p>完成了新的或更好的翻译？请提交 pull request 将其添加到我们的列表中。</p>
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
