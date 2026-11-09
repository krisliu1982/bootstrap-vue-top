<template>
  <article class="bd-content">
    <h1>链接</h1>
    <p>链接工具类用于美化锚点，以调整其颜色、不透明度、下划线偏移、下划线颜色等。</p>

    <h2 id="link-opacity">链接不透明度<a class="anchor-link" href="#link-opacity" aria-label="链接不透明度链接"></a></h2>
    <p>
      使用工具类更改链接 <code>rgba()</code> 颜色值的 alpha 不透明度。请注意，更改颜色的不透明度可能会导致链接出现<a href="getting-started/accessibility/#color-contrast"><em>对比度不足</em></a>的问题。
    </p>
    <Example
      code='<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>'
    />
    <p>你甚至可以更改悬停时的不透明度级别。</p>
    <Example
      code='<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>'
    />
    <h2 id="link-underlines">链接下划线<a class="anchor-link" href="#link-underlines" aria-label="链接下划线链接"></a></h2>
    <h3 id="underline-color">下划线颜色<a class="anchor-link" href="#underline-color" aria-label="下划线颜色链接"></a></h3>
    <p>独立于链接文本颜色更改下划线的颜色。</p>
    <Example :code="data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;link-underline-${themeColor.name}&quot;>${themeColor.name} underline</a></p>`).join('\n')" />
    <h3 id="underline-offset">下划线偏移<a class="anchor-link" href="#underline-offset" aria-label="下划线偏移链接"></a></h3>
    <p>更改下划线与文本的距离。偏移量以 <code>em</code> 为单位设置，可随元素当前的 <code>font-size</code> 自动缩放。</p>
    <Example
      code='<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>'
    />
    <h3 id="underline-opacity">下划线不透明度<a class="anchor-link" href="#underline-opacity" aria-label="下划线不透明度链接"></a></h3>
    <p>更改下划线的不透明度。需要先添加 <code>.link-underline</code> 来设置 <code>rgba()</code> 颜色，我们随后再用它来修改 alpha 不透明度。</p>
    <Example
      code='<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>'
    />
    <h3 id="hover-variants">悬停变体<a class="anchor-link" href="#hover-variants" aria-label="悬停变体链接"></a></h3>
    <p>正如 <code>.link-opacity-*-hover</code> 工具类一样，<code>.link-offset</code> 和 <code>.link-underline-opacity</code> 工具类默认也包含 <code>:hover</code> 变体。混合搭配即可创建独特的链接样式。</p>
    <Example
      code='<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>'
    />
    <h2 id="colored-links">彩色链接<a class="anchor-link" href="#colored-links" aria-label="彩色链接链接"></a></h2>
    <p><a href="/helpers/colored-links/">彩色链接工具类</a>已经过更新，以与我们的链接工具类搭配使用。使用新的工具类来修改链接不透明度、下划线不透明度和下划线偏移。</p>
    <Example
      :code="
        [
          ...data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover&quot;>${themeColor.name} link</a></p>`),
          `<p><a href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover&quot;>Emphasis link</a></p>`
        ].join('\n')
      "
    /><Callout name="warning-color-assistive-technologies" />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <p>
      除了以下 Sass 功能之外，建议阅读有关我们内置的
      <a href="/customize/css-variables">CSS 自定义属性</a>（又称 CSS 变量）的内容，了解更多颜色等信息。
    </p>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      链接工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-links" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#link-opacity">链接不透明度</a></li>
      <li>
        <a href="#link-underlines">链接下划线</a>
        <ul>
          <li><a href="#underline-color">下划线颜色</a></li>
          <li><a href="#underline-offset">下划线偏移</a></li>
          <li><a href="#underline-opacity">下划线不透明度</a></li>
          <li><a href="#hover-variants">悬停变体</a></li>
        </ul>
      </li>
      <li><a href="#colored-links">彩色链接</a></li>
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
import data from '@/data/data.js';

import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('.bd-content [href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
});
</script>
