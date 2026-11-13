<template>
  <article class="bd-content" data-pagefind-body>
    <h1>图片</h1>
    <p class="lead">关于让图片采用响应式行为（使其永远不会宽于其父级）并为其添加轻量样式的文档和示例——全部通过类实现。</p>

    <h2 id="responsive-images">响应式图片<a class="anchor-link" href="#responsive-images" aria-label="响应式图片链接"></a></h2>
    <p>Bootstrap 中的图片通过 <code>.img-fluid</code> 实现响应式。这会为图片应用 <code>max-width: 100%;</code> 和 <code>height: auto;</code>，使其随父级宽度缩放。</p>
    <ExampleCustom code='<img src="..." class="img-fluid" alt="...">'><Placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="响应式图片" /> </ExampleCustom>
    <h2 id="image-thumbnails">图片缩略图<a class="anchor-link" href="#image-thumbnails" aria-label="图片缩略图链接"></a></h2>

    <p>除了我们的<a href="/utilities/borders">圆角工具类</a>之外，你还可以使用 <code>.img-thumbnail</code> 为图片赋予带有 1px 圆角边框的外观。</p>

    <ExampleCustom code='<img src="..." class="img-thumbnail" alt="...">'><Placeholder width="200" height="200" class="img-thumbnail" title="一张带有白色边框的通用方形占位图片，使其看起来像是用老式拍立得相机拍摄的照片" /> </ExampleCustom>
    <h2 id="aligning-images">对齐图片<a class="anchor-link" href="#aligning-images" aria-label="对齐图片链接"></a></h2>

    <p>
      使用<a href="/utilities/float">浮动辅助类</a>或<a href="/utilities/text#text-alignment">文本对齐类</a>来对齐图片。<code>block</code> 级别的图片可以使用<a href="/utilities/spacing#horizontal-centering"><code>.mx-auto</code> 外边距工具类</a>来居中。
    </p>

    <ExampleCustom
      code='<img src="..." class="rounded float-start" alt="...">
<img src="..." class="rounded float-end" alt="...">'
      ><Placeholder width="200" height="200" class="rounded float-start" /> <Placeholder width="200" height="200" class="rounded float-end"
    /></ExampleCustom>

    <ExampleCustom code='<img src="..." class="rounded mx-auto d-block" alt="...">'><Placeholder width="200" height="200" class="rounded mx-auto d-block" /></ExampleCustom>

    <ExampleCustom
      code='<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>'
      ><div class="text-center">
        <Placeholder width="200" height="200" class="rounded" /></div
    ></ExampleCustom>
    <h2 id="picture">Picture<a class="anchor-link" href="#picture" aria-label="Picture 链接"></a></h2>
    <p>如果你使用 <code>&lt;picture&gt;</code> 元素为特定的 <code>&lt;img&gt;</code> 指定多个 <code>&lt;source&gt;</code> 元素，请确保将 <code>.img-*</code> 类添加到 <code>&lt;img&gt;</code> 上，而不是 <code>&lt;picture&gt;</code> 标签上。</p>
    <p>为 <code>&lt;img&gt;</code> 提供一个描述该图像的 <code>alt</code> 文本；如果它只是装饰性的，则提供一个空的 <code>alt=""</code>。下面示例中的 <code>alt="..."</code> 就是该文本的占位符。</p>
    <CodeWrapper
      code='&lt;picture&gt;
  &lt;source srcset="..." type="image/svg+xml"&gt;
  &lt;img src="..." class="img-fluid img-thumbnail" alt="..."&gt;
&lt;/picture&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>图片缩略图提供了可用的变量。</p>
    <ScssDocs name="thumbnail-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#responsive-images">响应式图片</a></li>
      <li><a href="#image-thumbnails">图片缩略图</a></li>
      <li><a href="#aligning-images">对齐图片</a></li>
      <li><a href="#picture">Picture</a></li>
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
