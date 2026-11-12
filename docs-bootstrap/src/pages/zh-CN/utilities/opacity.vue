<template>
  <article class="bd-content" data-pagefind-body>
    <h1>不透明度</h1>
    <p class="lead">控制元素的不透明度。</p>

    <p><code>opacity</code> 属性用于设置元素的不透明度级别。不透明度级别描述透明程度，其中 <code>1</code> 表示完全不透明，<code>.5</code> 表示 50% 可见，<code>0</code> 表示完全透明。</p>
    <p>使用 <code>.opacity-{value}</code> 工具类设置元素的 <code>opacity</code>。</p>
    <div class="bd-example d-sm-flex">
      <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
      <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
      <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
      <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
      <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
    </div>
    <CodeWrapper
      code='&lt;div class="opacity-100"&gt;...&lt;/div&gt;
&lt;div class="opacity-75"&gt;...&lt;/div&gt;
&lt;div class="opacity-50"&gt;...&lt;/div&gt;
&lt;div class="opacity-25"&gt;...&lt;/div&gt;
&lt;div class="opacity-0"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      不透明度工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-opacity" file="scss/_utilities.scss" />
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
