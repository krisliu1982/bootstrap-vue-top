<template>
  <article class="bd-content">
    <h1>浮动</h1>
    <p>使用我们的响应式浮动工具类，可在任意断点上切换任意元素的浮动状态。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2>
    <p>
      这些工具类会根据当前视口尺寸使用
     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS <code>float</code> 属性</a>将元素向左或向右浮动，或禁用浮动。其中包含了 <code>!important</code> 以避免优先级问题。它们与我们网格系统使用相同的视口断点。请注意，浮动工具类对弹性项目没有任何效果。
    </p>
    <Example
      code='<div class="float-start">Float start on all viewport sizes</div><br>
<div class="float-end">Float end on all viewport sizes</div><br>
<div class="float-none">Don’t float on all viewport sizes</div>'
    />
    <p>在父元素上使用<a href="/helpers/clearfix">清除浮动工具类</a>来清除浮动。</p>
    <h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2>
    <p>每个 <code>float</code> 取值都提供了响应式变体。</p>
    <Example
      code='<div class="float-sm-end">Float end on viewports sized SM (small) or wider</div><br>
<div class="float-md-end">Float end on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-end">Float end on viewports sized LG (large) or wider</div><br>
<div class="float-xl-end">Float end on viewports sized XL (extra large) or wider</div><br>
<div class="float-xxl-end">Float end on viewports sized XXL (extra extra large) or wider</div><br>'
    />
    <p>以下是所有支持的类：</p>
    <ul>
      <template v-for="breakpoint in data['breakpoints']">
        <li>
          <code>.float{{ breakpoint.abbr }}-start</code>
        </li>
        <li>
          <code>.float{{ breakpoint.abbr }}-end</code>
        </li>
        <li>
          <code>.float{{ breakpoint.abbr }}-none</code>
        </li>
      </template>
    </ul>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      浮动工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-float" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li><a href="#responsive">响应式</a></li>
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
</script>
