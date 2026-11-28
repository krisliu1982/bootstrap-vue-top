<template>
  <article class="docs-content">
    <h1>Placeholder 占位符</h1>
    <p class="lead">为你的组件或页面使用加载占位符（骨架屏加载器），以表示某些内容可能仍在加载中。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们对占位符没有提供扩展，其官方 API 可直接使用。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/placeholders" target="_blank">Bootstrap Placeholder</a>。
    </p>
    <div class="docs-example"><Example /></div>
    <CodeWrapper :code="ExampleCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#example">示例</a></li>
    </ul>
  </nav>
</template>

<script setup>
import Example from './example.vue';
import ExampleCode from './example.vue?raw';
</script>
