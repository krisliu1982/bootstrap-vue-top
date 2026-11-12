<template>
  <article class="bd-content" data-pagefind-body>
    <h1>视觉上隐藏</h1>
    <p class="lead">使用这些工具类可以在视觉上隐藏元素，同时保持其对辅助技术的可访问性。</p>

    <p>
      使用 <code>.visually-hidden</code> 可以在视觉上隐藏元素，同时仍然允许其暴露给辅助技术（如屏幕阅读器）。使用 <code>.visually-hidden-focusable</code> 可以默认在视觉上隐藏元素，但在其获得焦点时（例如由仅使用键盘的用户操作）显示它。 <code>.visually-hidden-focusable</code> 也可以应用到容器上——得益于
      <code>:focus-within</code>，当容器内的任意子元素获得焦点时，该容器就会显示。
    </p>
    <Example
      code='<h2 class="visually-hidden">Title for screen readers</h2>
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
<div class="visually-hidden-focusable">A container with a<a href="#">focusable element</a>.</div>'
    />
    <p><code>visually-hidden</code> 和 <code>visually-hidden-focusable</code> 也都可以作为 mixin 使用。</p>
    <CodeWrapper
      code="// Usage as a mixin

.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
"
      lang="scss"
    />
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
