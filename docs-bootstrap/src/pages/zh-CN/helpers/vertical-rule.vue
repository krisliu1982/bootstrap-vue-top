<template>
  <article class="bd-content">
    <h1>竖直分隔线</h1>
    <p class="lead">使用自定义的竖直分隔线工具类创建类似 `&lt;hr&gt;` 元素的竖直分隔线。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>竖直分隔线的灵感来自 <code>&lt;hr&gt;</code> 元素，让你可以在常见布局中创建竖直分隔线。它们的样式与 <code>&lt;hr&gt;</code> 元素类似：</p>
    <ul>
      <li>宽度为 <code>1px</code></li>
      <li><code>min-height</code> 为 <code>1em</code></li>
      <li>颜色通过 <code>currentColor</code> 和 <code>opacity</code> 设置</li>
    </ul>
    <p>可根据需要使用额外的样式进行定制。</p>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <Example code='<div class="vr"></div>' />
    <p>竖直分隔线在弹性布局中会按比例缩放高度：</p>
    <Example
      code='<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>'
    />
    <h2 id="with-stacks">与堆叠配合使用<a class="anchor-link" href="#with-stacks" aria-label="与堆叠配合使用链接"></a></h2>
    <p>它们也可以用在<a href="/helpers/stacks">堆叠</a>中：</p>
    <Example
      class="bd-example-flex"
      code='<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>定制竖直分隔线的 Sass 变量以更改其宽度。</p>
    <ScssDocs name="vr-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#example">示例</a></li>
      <li><a href="#with-stacks">与堆叠配合使用</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
