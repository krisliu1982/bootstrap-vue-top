<template>
  <article class="bd-content" data-pagefind-body>
    <h1>布局工具类</h1>
    <p class="lead">为了实现更快捷的移动优先和响应式开发，Bootstrap 包含了数十个用于显示、隐藏、对齐和间隔内容的工具类。</p>

    <h2 id="changing-display">更改 <code>display</code><a class="anchor-link" href="#changing-display" aria-label="更改 display 链接"></a></h2>
    <p>使用我们的 <a href="/utilities/display">显示工具类</a> 以响应式的方式切换 <code>display</code> 属性的常见值。将其与我们的网格系统、内容或组件结合使用，即可在特定视口中显示或隐藏它们。</p>
    <h2 id="flexbox-options">Flexbox 选项<a class="anchor-link" href="#flexbox-options" aria-label="Flexbox 选项链接"></a></h2>
    <p>Bootstrap 基于 flexbox 构建，但并非所有元素的 <code>display</code> 都已改为 <code>display: flex</code>，因为那会添加许多不必要的覆盖，并意外改变关键的浏览器行为。我们的大多数 <a href="/components/alerts">组件</a> 都是在启用 flexbox 的情况下构建的。</p>
    <p>如果你需要为元素添加 <code>display: flex</code>，请使用 <code>.d-flex</code> 或某个响应式变体（例如 <code>.d-sm-flex</code>）。你需要这个类或 <code>display</code> 值才能使用我们额外的 <a href="/utilities/flex">flexbox 工具类</a> 来进行尺寸调整、对齐、间隔等操作。</p>
    <h2 id="margin-and-padding">外边距和内边距<a class="anchor-link" href="#margin-and-padding" aria-label="外边距和内边距链接"></a></h2>
    <p>
      使用 <code>margin</code> 和 <code>padding</code> <a href="/utilities/spacing">间隔工具类</a> 来控制元素和组件的间隔与尺寸。Bootstrap 包含六级间隔工具类，基于默认值为 <code>1rem</code> 的 <code>$spacer</code> 变量。可以为所有视口选择值（例如，在 LTR 中 <code>.me-3</code> 对应
      <code>margin-right: 1rem</code>），也可以选择响应式变体以针对特定视口（例如，从 <code>md</code> 断点开始，<code>.me-md-3</code> 对应 <code>margin-right: 1rem</code>——在 LTR 中）。
    </p>
    <h2 id="toggle-visibility">切换 <code>visibility</code><a class="anchor-link" href="#toggle-visibility" aria-label="切换 visibility 链接"></a></h2>
    <p>当不需要切换 <code>display</code> 时，你可以使用我们的 <a href="/utilities/visibility">可见性工具类</a> 来切换元素的 <code>visibility</code>。不可见的元素仍然会影响页面布局，但在视觉上对访问者隐藏。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#flexbox-options">Flexbox 选项</a></li>
      <li>
        <a href="#margin-and-padding">外边距和内边距</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
