<template>
    <article class="docs-content">

  <h1>Card 卡片</h1>
  <p class="lead">Bootstrap 的卡片提供了一个灵活且可扩展的内容容器，并带有多种变体和选项。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
  <p>我们对卡片没有提供扩展，其官方 API 可直接使用。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/card" target="_blank">Bootstrap Card</a>。</p>
    <div class="docs-example">
      <Example />
    </div>
    <CodeWrapper :code="ExampleCode" />  </article>

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
