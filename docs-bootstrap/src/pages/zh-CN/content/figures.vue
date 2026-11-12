<template>
  <article class="bd-content" data-pagefind-body>
    <h1>图片说明（Figures）</h1>
    <p class="lead">在 Bootstrap 中使用 figure 组件展示相关图片和文字的文档与示例。</p>

    <p>
      每当你需要展示某段内容时——比如带可选说明文字的图片，都可以考虑使用
      <code>&lt;figure&gt;</code>。
    </p>
    <p>使用内置的 <code>.figure</code>、<code>.figure-img</code> 和 <code>.figure-caption</code> 类，为 HTML5 的 <code>&lt;figure&gt;</code> 和 <code>&lt;figcaption&gt;</code> 元素提供一些基础样式。图片说明中的图片没有明确尺寸，因此请务必为 <code>&lt;img&gt;</code> 添加 <code>.img-fluid</code> 类，使其具有响应式效果。</p>

    <ExampleCustom
      code='<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>'
      ><figure class="figure">
        <Placeholder width="400" height="300" class="figure-img img-fluid rounded" />
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
      </figure></ExampleCustom
    >
    <p>使用我们的<a href="/utilities/text#text-alignment">文本工具类</a>，即可轻松对齐图片说明。</p>

    <ExampleCustom
      code='<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>'
      ><figure class="figure">
        <Placeholder width="400" height="300" class="figure-img img-fluid rounded" />
        <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
      </figure></ExampleCustom
    >
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="figure-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
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
