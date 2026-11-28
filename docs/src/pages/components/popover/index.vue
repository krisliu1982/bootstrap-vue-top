<template>
  <article class="docs-content">
    <h1>Popover 弹出框</h1>
    <p class="lead">如何向站点中的任意元素添加 Bootstrap 弹出框（类似 iOS 中的弹出框）的文档和示例。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/popovers" target="_blank">Bootstrap Popovers</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们仅提供 <code>v-popover</code> 启用指令，其官方 API 可直接使用。
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
