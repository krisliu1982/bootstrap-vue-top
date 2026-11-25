<template>
    <article class="docs-content">
  <h1>Backtop 回到顶部</h1>
  <p class="lead">回到页面顶部。</p>

  <h2>基础用法</h2>
  <p>向下滚动页面来查看右下角的按钮。</p>
  <p>通过 <code>color</code> 属性设置颜色。提供八种颜色为：<code>primary | secondary | success | danger | warning | info | light | dark</code>，默认为 <code>primary</code>。</p>
  <p>通过 <code>size</code> 属性设置尺寸。提供三种尺寸为：<code>sm | md | lg</code>，默认为 <code>md</code>。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />

  <div style="height: 500px"></div>
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
