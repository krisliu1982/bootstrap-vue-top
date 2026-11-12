<template>
  <article class="bd-content" data-pagefind-body>
    <h1>尺寸</h1>
    <p class="lead">使用我们的宽度和高度工具类，可以轻松设置元素的宽度或高度。</p>

    <h2 id="relative-to-the-parent">相对于父元素<a class="anchor-link" href="#relative-to-the-parent" aria-label="相对于父元素链接"></a></h2>
    <p>宽度和高度工具类由 <code>_utilities.scss</code> 中的工具类 API 生成。默认支持 <code>25%</code>、<code>50%</code>、<code>75%</code>、<code>100%</code> 和 <code>auto</code>。根据需要修改这些值，即可在此处生成不同的工具类。</p>
    <Example
      class="bd-example-flex"
      code='<div class="w-25 p-3">Width 25%</div>
<div class="w-50 p-3">Width 50%</div>
<div class="w-75 p-3">Width 75%</div>
<div class="w-100 p-3">Width 100%</div>
<div class="w-auto p-3">Width auto</div>'
    /><Example
      class="bd-example-flex"
      code='<div style="height: 100px;">
  <div class="h-25 d-inline-block" style="width: 120px;">Height 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px;">Height 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px;">Height 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px;">Height 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px;">Height auto</div>
</div>'
    />
    <p>你也可以根据需要将 <code>max-width: 100%;</code> 和 <code>max-height: 100%;</code> 作为工具类使用。</p>
    <Example
      class="bd-example-flex"
      code='<div style="width: 50%; height: 100px;">
  <div class="mw-100" style="width: 200%;">Max-width 100%</div>
</div>'
    /><Example
      class="bd-example-flex"
      code='<div style="height: 100px;">
  <div class="mh-100" style="width: 100px; height: 200px;">Max-height 100%</div>
</div>'
    />
    <h2 id="relative-to-the-viewport">相对于视口<a class="anchor-link" href="#relative-to-the-viewport" aria-label="相对于视口链接"></a></h2>
    <p>你也可以使用工具类设置相对于视口的宽度和高度。</p>
    <CodeWrapper
      code='&lt;div class="min-vw-100"&gt;Min-width 100vw&lt;/div&gt;
&lt;div class="min-vh-100"&gt;Min-height 100vh&lt;/div&gt;
&lt;div class="vw-100"&gt;Width 100vw&lt;/div&gt;
&lt;div class="vh-100"&gt;Height 100vh&lt;/div&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      尺寸工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-sizing" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#relative-to-the-parent">相对于父元素</a></li>
      <li><a href="#relative-to-the-viewport">相对于视口</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-utilities-api">Sass 工具类 API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
