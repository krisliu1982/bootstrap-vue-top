<template>
  <article class="docs-content">
  <h1>Accordion 折叠面板</h1>
  <p class="lead">可垂直折叠的折叠面板。</p>

  <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法链接"></a></h2>
  <p>默认展开单个面板。通过 <code>active-index</code> 属性设置初始打开第几个面板。</p>
  <BasicUsage />

  <h2 id="flush-style">齐平样式<a class="anchor-link" href="#flush-style" aria-label="齐平样式链接"></a></h2>
  <p>添加 <code>.accordion-flush</code> 样式类到 <code>accordion-class</code> 属性上。</p>
  <FlushStyle />

  <h2 id="always-open">保持打开<a class="anchor-link" href="#always-open" aria-label="保持打开链接"></a></h2>
  <p>通过设置 <code>always</code> 属性，以便在打开另一个项目时，折叠面板其他项目保持打开状态。</p>
  <AlwaysOpen />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#flush-style">齐平样式</a></li>
      <li><a href="#always-open">保持打开</a></li>
    </ul>
  </nav>
</template>

<script setup>
import AlwaysOpen from './always-open.vue';
import BasicUsage from './basic-usage.vue';
import FlushStyle from './flush-style.vue';
</script>
