<template>
  <article class="bd-content" data-pagefind-body>
    <h1>拉伸链接</h1>
    <p class="lead">通过 CSS 将嵌套的链接“拉伸”，让任意 HTML 元素或 Bootstrap 组件都可被点击。</p>

    <p>
      为链接添加 <code>.stretched-link</code>，即可通过 <code>::after</code> 伪元素让其 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block">包含块</a> 可点击。在大多数情况下，这意味着一个带有 <code>position: relative;</code> 且包含带有 <code>.stretched-link</code> 类链接的元素是可点击的。请注意，鉴于<a
        href="https://www.w3.org/TR/CSS21/visuren.html#propdef-position"
        >CSS <code>position</code> 的工作方式</a
      >，<code>.stretched-link</code> 不能与大多数表格元素混用。
    </p>
    <p>在 Bootstrap 中，卡片默认具有 <code>position: relative</code>，因此这种情况下你可以安全地为卡片中的链接添加 <code>.stretched-link</code> 类，而无需其他 HTML 改动。</p>
    <p>不建议在拉伸链接中使用多个链接和点击目标。不过，如果确实需要，一些 <code>position</code> 和 <code>z-index</code> 样式可能会有所帮助。</p>
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a> 
  </div>
</div>'
    >
      <div class="card" style="width: 18rem">
        <Placeholder width="100%" height="180" class="card-img-top" :text="false" title="卡片图片占位" />
        <div class="card-body">
          <h5 class="card-title">带有拉伸链接的卡片</h5>
          <p class="card-text">一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。</p>
          <a href="#" class="btn btn-primary stretched-link">前往某处</a>
        </div>
      </div>
    </ExampleCustom>
    <p>大多数自定义组件默认没有 <code>position: relative</code>，因此我们需要在这里添加 <code>.position-relative</code>，以防止链接拉伸到父元素之外。</p>
    <Example code="" />
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched link</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary stretched-link">Go somewhere</a> 
  </div>
</div>'
    >
      <div class="d-flex position-relative">
        <Placeholder width="144" height="144" class="flex-shrink-0 me-3" :text="false" title="通用占位图片22222" />
        <div>
          <h5 class="mt-0">带有拉伸链接的自定义组件</h5>
          <p>这是自定义组件的一些占位内容。它旨在模拟真实世界内容的样子，我们在这里用它为组件增添一些内容和尺寸。</p>
          <a href="#" class="stretched-link">前往某处</a>
        </div>
      </div>
    </ExampleCustom>
    <h2 id="identifying-the-containing-block">识别包含块<a class="anchor-link" href="#identifying-the-containing-block" aria-label="识别包含块链接"></a></h2>
    <p>
      如果拉伸链接似乎不起作用，
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block">包含块</a>
      很可能是原因所在。以下 CSS 属性会使元素成为包含块：
    </p>
    <ul>
      <li><code>position</code> 值不为 <code>static</code></li>
      <li><code>transform</code> 或 <code>perspective</code> 值不为 <code>none</code></li>
      <li><code>will-change</code> 值为 <code>transform</code> 或 <code>perspective</code></li>
      <li><code>filter</code> 值不为 <code>none</code>，或 <code>will-change</code> 值为 <code>filter</code>（仅在 Firefox 上有效）</li>
    </ul>
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card with stretched links</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <p class="card-text">
      <a href="#" class="stretched-link text-danger" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a> 
    </p>
    <p class="card-text bg-body-tertiary" style="transform: rotate(0);">
      This <a href="#" class="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>'
    >
      <div class="card" style="width: 18rem">
        <Placeholder width="100%" height="180" class="card-img-top" :text="false" title="卡片图片占位" />
        <div class="card-body">
          <h5 class="card-title">带有拉伸链接的卡片</h5>
          <p class="card-text">一些快速示例文本，用于在卡片标题的基础上扩充内容，构成卡片内容的主体。</p>
          <p class="card-text">
            <a href="#" class="stretched-link text-danger" style="position: relative">此处的拉伸链接将无法生效，因为链接被添加了 <code>position: relative</code></a>
          </p>
          <p class="card-text bg-body-tertiary" style="transform: rotate(0)">这个 <a href="#" class="text-warning stretched-link">拉伸链接</a> 只会铺满 <code>p</code> 标签的范围，因为该标签被应用了 transform。</p>
        </div>
      </div>
    </ExampleCustom>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#identifying-the-containing-block">识别包含块</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
