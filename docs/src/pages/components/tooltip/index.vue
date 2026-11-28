<template>
  <article class="docs-content">
    <h1>Tooltip 文字提示</h1>
    <p class="lead">如何使用 CSS 和 JavaScript 添加自定义 Bootstrap 文字提示的文档和示例，其中使用 CSS3 实现动画，并使用 data-bs-* 属性实现本地标题存储。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/tooltips" target="_blank">Bootstrap Tooltips</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们仅提供 <code>v-tooltip</code> 启用指令，其官方 API 可直接使用。
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
