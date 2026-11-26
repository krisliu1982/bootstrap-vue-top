<template>
  <article class="docs-content">
    <h1>ImagePreview 图片预览</h1>
    <p class="lead">用于预览大图。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>使用 <code>imagePreview</code> 方法，第一个参数为图片地址数组，第二个参为预览图片的起始位置，默认起始位置为 <code>0</code>。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
    </ul>
  </nav>
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import BasicUsageCode from './basic-usage.vue?raw';
</script>
