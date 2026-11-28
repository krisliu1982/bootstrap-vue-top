<template>
  <article class="docs-content">
    <h1>Tooltip 文字提示</h1>
    <p class="lead">Bootstrap Tooltips 组件出于性能原因，需要手动启用。为了简化启用方式，我们提供 <code>v-tooltip</code> 指令启用文字提示。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/tooltips" target="_blank">Bootstrap Tooltips</a>。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      我们仅提供启用指令，其官方 API 可直接使用。
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
