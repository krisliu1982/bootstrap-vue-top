<template>
  <article class="bd-content" data-pagefind-body>
    <h1>占位符</h1>
    <p class="lead">为你的组件或页面使用加载占位符（骨架屏加载器），以表示某些内容可能仍在加载中。</p>

    <h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2>
    <p>占位符可用于提升应用程序的用户体验。它们仅由 HTML 和 CSS 构建，这意味着你不需要任何 JavaScript 就能创建它们。不过，你仍需要一些自定义 JavaScript 来切换它们的可见性。它们的外观、颜色和尺寸可以通过我们的工具类轻松自定义。</p>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>在下面的示例中，我们取一个典型的卡片组件，应用占位符重新创建它，从而打造一张“加载中卡片”。两者的尺寸和比例完全相同。</p>
    <div class="bd-code-snippet">
      <div class="bd-example border rounded-top bd-example-placeholder-cards d-flex justify-content-around">
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" :text="false" background="#20c997" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" aria-hidden="true">
          <Placeholder width="100%" height="180" class="card-img-top" :text="false" />
          <div class="card-body">
            <div class="h5 card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </div>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
          </div>
        </div>
      </div>
    </div>
    <CodeWrapper
      code='<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a> 
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
   <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a> 
  </div>
</div>'
      lang="html"
    />

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>使用 <code>.placeholder</code> 类和网格列类（例如 <code>.col-6</code>）创建占位符来设置 <code>width</code>。它们可以替换元素内的文本，也可以作为修饰类添加到现有组件中。</p>
    <p>我们通过 <code>::before</code> 为 <code>.btn</code> 应用额外的样式，以确保 <code>height</code> 得到遵循。你可以根据需要将此模式扩展到其他情况，或者在元素内添加 <code>&amp;nbsp;</code>，以便在其位置渲染实际文本时反映高度。</p>
    <Example
      code='<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a> '
    />
    <Callout>
      <p>使用 <code>aria-hidden=&quot;true&quot;</code> 仅表示该元素应对屏幕阅读器隐藏。占位符的<em>加载</em>行为取决于作者实际如何使用占位符样式、计划如何更新内容等。可能需要一些 JavaScript 代码来<em>切换</em>占位符的状态，并将更新告知 AT 用户。</p>
    </Callout>
    <h3 id="width">宽度<a class="anchor-link" href="#width" aria-label="宽度链接"></a></h3>
    <p>你可以通过网格列类、宽度工具类或内联样式更改 <code>width</code>。</p>
    <Example
      code='<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>'
    />
    <h3 id="color">颜色<a class="anchor-link" href="#color" aria-label="颜色链接"></a></h3>
    <p>默认情况下，<code>placeholder</code> 使用 <code>currentColor</code>。可以通过自定义颜色或工具类来覆盖。</p>
    <Example
      :code="
        [
          `<span class=&quot;placeholder col-12&quot;></span>
  `,
          ...data['theme-colors'].map((themeColor) => `<span class=&quot;placeholder col-12 bg-${themeColor.name}&quot;></span>`)
        ].join('\n')
      "
    />
    <h3 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h3>
    <p><code>.placeholder</code> 的尺寸基于父元素的排版样式。你可以使用尺寸修饰符来自定义它们：<code>.placeholder-lg</code>、<code>.placeholder-sm</code> 或 <code>.placeholder-xs</code>。</p>
    <Example
      code='<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>'
    />
    <h3 id="animation">动画<a class="anchor-link" href="#animation" aria-label="动画链接"></a></h3>
    <p>使用 <code>.placeholder-glow</code> 或 <code>.placeholder-wave</code> 为占位符添加动画，从而更好地传达某些内容正在<em>积极</em>加载的感觉。</p>
    <Example
      code='<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="placeholders" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#about">关于</a></li>
      <li><a href="#example">示例</a></li>
      <li>
        <a href="#how-it-works">工作原理</a>
        <ul>
          <li><a href="#width">宽度</a></li>
          <li><a href="#color">颜色</a></li>
          <li><a href="#sizing">尺寸</a></li>
          <li><a href="#animation">动画</a></li>
        </ul>
      </li>
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

import data from '@/data/data.js';
</script>
