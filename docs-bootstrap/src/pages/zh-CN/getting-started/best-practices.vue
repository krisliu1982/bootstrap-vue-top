<template>
  <article class="bd-content" data-pagefind-body>
    <h1>最佳实践</h1>
    <p class="lead">了解我们从多年来开发和使用的 Bootstrap 过程中总结出的一些最佳实践。</p>

    <p>我们设计和开发 Bootstrap 时就考虑让它在多种环境中都能运行。以下是我们多年来亲自开发和使用的过程中总结出的一些最佳实践。</p>
    <Callout>
      <p><strong>注意！</strong>本文内容仍在完善中。</p>
    </Callout>
    <h3 id="general-outline">总体大纲<a class="anchor-link" href="#general-outline" aria-label="总体大纲链接"></a></h3>
    <ul>
      <li>使用 CSS</li>
      <li>使用 Sass 文件</li>
      <li>构建新的 CSS 组件</li>
      <li>使用 flexbox</li>
      <li>在 <a href="https://github.com/twbs/bootstrap/discussions">我们的 GitHub Discussions</a> 中提问</li>
    </ul>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#general-outline">总体大纲</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
