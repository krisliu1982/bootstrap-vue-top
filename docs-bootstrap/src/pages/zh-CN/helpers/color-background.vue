<template>
  <article class="bd-content">
    <h1>颜色与背景</h1>
    <p class="lead">设置带有对比前景色的背景色。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2>
    <p>
      颜色与背景工具类将
     <a href="/utilities/colors"><code>.text-*</code> 工具类</a>和<a href="/utilities/background"><code>.bg-*</code> 工具类</a>的能力整合到一个类中。通过我们的 Sass <code>color-contrast()</code> 函数，我们会为特定的 <code>background-color</code> 自动确定对比度合适的 <code>color</code>。
    </p>
    <Callout type="warning">
      <p><strong>请注意！</strong>目前尚不支持 CSS 原生的 <code>color-contrast</code> 函数，因此我们通过 Sass 使用了自己的实现。这意味着通过 CSS 变量定制主题颜色可能会导致这些工具类出现颜色对比度问题。</p> </Callout
    ><Example :code="data['theme-colors'].map((themeColor) => `<div class=&quot;text-bg-${themeColor.name} p-3&quot;>${themeColor.name} with contrasting color</div>`).join('\n')" /><Callout name="warning-color-assistive-technologies" />
    <h2 id="with-components">与组件配合使用<a class="anchor-link" href="#with-components" aria-label="与组件配合使用链接"></a></h2>
    <p>可以用它们替代 <code>.text-*</code> 与 <code>.bg-*</code> 的组合类，例如在<a href="/components/badge#background-colors">徽章</a>上：</p>
    <Example
      code='<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>'
    />
    <p>或者用在<a href="/components/card#background-and-color">卡片</a>上：</p>
    <Example
      code='<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li>
       <a href="#with-components">与组件配合使用</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
