<template>
  <article class="docs-content">
    <h1>Tree table 树形表格结构</h1>
    <p class="lead">以表格样式, 展示层级结构信息，可展开或折叠。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>
      通过 <code>data</code> 属性设置树形数据，通过 <code>attr-key</code> 属性设置节点唯一标识属性名，通过 <code>attr-children</code> 属性设置子树属性名。在列上设置
      <code>tree</code> 属性则该列为「树形列」。
    </p>
    <p>由于树形表格是基于 Table 组件开发，需变换样式请参考 Table 组件。</p>
    <div class="docs-example"><BasicUsage /></div>
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
</script>
