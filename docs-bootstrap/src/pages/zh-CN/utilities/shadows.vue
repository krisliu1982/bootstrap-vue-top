<template>
  <article class="bd-content">
    <h1>阴影</h1>
    <p class="lead">使用 box-shadow 工具类为元素添加或移除阴影。</p>

    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>
      虽然组件的阴影在 Bootstrap 中默认是禁用的，并且可以通过
      <code>$enable-shadows</code> 启用，但你也可以使用我们的 <code>box-shadow</code> 工具类快速添加或移除阴影。其中包含对 <code>.shadow-none</code> 和三种默认尺寸的支持（它们都有对应的变量）。
    </p>
    <Example
      class="overflow-hidden"
      code='<div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body-tertiary rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="box-shadow-variables" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      阴影工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-shadow" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#examples">示例</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
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
