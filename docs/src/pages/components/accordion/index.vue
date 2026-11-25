<template>
  <article class="docs-content">
  <h1>Accordion 折叠面板</h1>
  <p class="lead">可垂直折叠的折叠面板。</p>

  <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法链接"></a></h2>
  <p>默认展开单个面板。通过 <code>active-index</code> 属性设置初始打开第几个面板。</p>
  <div class="docs-example"><BasicUsage /></div>
  <CodeWrapper :code="BasicUsageCode" />

  <h2 id="flush-style">贴边显示<a class="anchor-link" href="#flush-style" aria-label="贴边显示链接"></a></h2>
  <p>添加 <code>.accordion-flush</code> 样式类到 <code>accordion-class</code> 属性上，移除部分边框和圆角，使折叠面板与其父容器边缘贴合。</p>
  <div class="docs-example"><FlushStyle /></div>
  <CodeWrapper :code="FlushStyleCode" />

  <h2 id="always-open">始终展开<a class="anchor-link" href="#always-open" aria-label="始终展开链接"></a></h2>
  <p>通过设置 <code>always</code> 属性，以便在打开另一个项目时，折叠面板其他项目保持打开状态。</p>
  <div class="docs-example"><AlwaysOpen /></div>
    <CodeWrapper :code="AlwaysOpenCode" />

  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#flush-style">贴边显示</a></li>
      <li><a href="#always-open">始终展开</a></li>
    </ul>
  </nav>
</template>

<script setup>
import AlwaysOpen from './always-open.vue';
import BasicUsage from './basic-usage.vue';
import FlushStyle from './flush-style.vue';

import AlwaysOpenCode from './always-open.vue?raw';
import BasicUsageCode from './basic-usage.vue?raw';
import FlushStyleCode from './flush-style.vue?raw';
</script>
