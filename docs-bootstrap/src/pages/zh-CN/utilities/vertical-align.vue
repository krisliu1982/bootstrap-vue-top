<template>
  <article class="bd-content" data-pagefind-body>
    <h1>垂直对齐</h1>
    <p class="lead">轻松更改内联、内联块、内联表格和表格单元格元素的垂直对齐方式。</p>

    <p>
      使用
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"><code>vertical-alignment</code></a>
      工具类更改元素的对齐方式。请注意，vertical-align 仅影响内联、内联块、内联表格和表格单元格元素。
    </p>
    <p>根据需要从 <code>.align-baseline</code>、<code>.align-top</code>、<code>.align-middle</code>、<code>.align-bottom</code>、<code>.align-text-bottom</code> 和 <code>.align-text-top</code> 中选择。</p>
    <p>要将非内联内容（如 <code>&lt;div&gt;</code> 等）垂直居中，请使用我们的 <a href="/utilities/flex#align-items">弹性布局工具类</a> 。</p>
    <p>与内联元素配合使用：</p>
    <Example
      code='<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>'
    />
    <p>与表格单元格配合使用：</p>
    <Example
      code='<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      垂直对齐工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-vertical-align" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
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
