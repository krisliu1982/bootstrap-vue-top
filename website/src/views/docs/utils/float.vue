<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-float">
      <a href="#float-overview">概述</a>
      <a href="#float-wrap">环绕图片</a>
      <a href="#float-clearfix">清理浮动</a>
      <a href="#float-responsive">响应性</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-float" class="docs-content">
    <h1>Float 浮动</h1>
    <p class="fs-4 fw-light">
      使用我们的响应式浮动工具，可以对任何元素在任何分界点上进行浮动设置。解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/float/" target="_blank">Boostrap Float</a>
    </p>

    <h2 id="float-overview">
      概述<a class="anchor-link" aria-label="Link to this section: 概述" href="#float-overview"> </a>
    </h2>
    <p>
      这些工具类会根据当前视口的大小将元素向左或向右浮动，或者禁用浮动功能，具体操作是通过使用
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float" target="_blank"
        >CSS 中的 <code>float</code> 属性</a
      >
      来实现的。同时加入了 <code>!important</code>
      来避免特定性问题。这些类与我们的网格系统所使用的视口断点相同。请注意，浮动类对弹性项目没有影响。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="float-start">Float start on all viewport sizes</div>
        <br />
        <div class="float-end">Float end on all viewport sizes</div>
        <br />
        <div class="float-none">Don’t float on all viewport sizes</div>
      </div>
      <code-highlight type="html" :code="overviewCode" label="html" />
    </div>

    <h2 id="float-wrap">
      环绕图片<a class="anchor-link" aria-label="Link to this section: 环绕图片" href="#float-wrap"> </a>
    </h2>
    <p class="text-bg-warning">Float 主要用于“文字环绕图片”场景。目前 Float 已经不再是布局的首选工具。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="clearfix">
          <svg
            aria-label="Placeholder: Image"
            class="docs-placeholder-img float-start me-2"
            height="120"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            width="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#e5e5e5"></rect>
            <text x="50%" y="50%" fill="#999" dy=".3em">Image</text>
          </svg>
          This is a very long piece of text.This is a very long piece of text.This is a very long piece of text.This is
          a very long piece of text.This is a very long piece of text.This is a very long piece of text.This is a very
          long piece of text.This is a very long piece of text.This is a very long piece of text. This is a very long
          piece of text.This is a very long piece of text.This is a very long piece of text.This is a very long piece of
          text.This is a very long piece of text.This is a very long piece of text.This is a very long piece of
          text.This is a very long piece of text.This is a very long piece of text. This is a very long piece of
          text.This is a very long piece of text.This is a very long piece of text.This is a very long piece of
          text.This is a very long piece of text.This is a very long piece of text.This is a very long piece of
          text.This is a very long piece of text.This is a very long piece of text.
        </p>
      </div>
      <code-highlight type="html" :code="wrapCode" label="html" />
    </div>

    <h2 id="float-clearfix">
      清理浮动<a class="anchor-link" aria-label="Link to this section: 清理浮动" href="#float-clearfix"> </a>
    </h2>
    <p>
      在父元素上使用
      <a href="https://getbootstrap.com/docs/5.3/helpers/clearfix/" target="_blank">clearfix 辅助类</a>来清除浮动内容。
    </p>
    <p>以下示例展示了如何使用清除浮动技术。若没有清除浮动功能，包裹容器无法环绕按钮，这将导致布局出现错误。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="bg-info clearfix">
          <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
          <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
        </div>
      </div>
      <code-highlight type="html" :code="clearfixCode" label="html" />
    </div>

    <h2 id="float-responsive">
      响应性<a class="anchor-link" aria-label="Link to this section: 响应性" href="#float-responsive"> </a>
    </h2>
    <p>对于每个 <code>float</code> 值，还存在相应的响应式形式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="float-sm-end">Float end on viewports sized SM (small) or wider</div>
        <br />
        <div class="float-md-end">Float end on viewports sized MD (medium) or wider</div>
        <br />
        <div class="float-lg-end">Float end on viewports sized LG (large) or wider</div>
        <br />
        <div class="float-xl-end">Float end on viewports sized XL (extra large) or wider</div>
        <br />
        <div class="float-xxl-end">Float end on viewports sized XXL (extra extra large) or wider</div>
        <br />
      </div>
      <code-highlight type="html" :code="responsiveCode" label="html" />
    </div>
    <p>以下是所有支持的工具类：</p>
    <ul class="docs-content-list">
      <li><code>.float-start</code></li>
      <li><code>.float-end</code></li>
      <li><code>.float-none</code></li>
      <li><code>.float-sm-start</code></li>
      <li><code>.float-sm-end</code></li>
      <li><code>.float-sm-none</code></li>
      <li><code>.float-md-start</code></li>
      <li><code>.float-md-end</code></li>
      <li><code>.float-md-none</code></li>
      <li><code>.float-lg-start</code></li>
      <li><code>.float-lg-end</code></li>
      <li><code>.float-lg-none</code></li>
      <li><code>.float-xl-start</code></li>
      <li><code>.float-xl-end</code></li>
      <li><code>.float-xl-none</code></li>
      <li><code>.float-xxl-start</code></li>
      <li><code>.float-xxl-end</code></li>
      <li><code>.float-xxl-none</code></li>
    </ul>
  </div>
</template>

<script setup>
const overviewCode = `<div class="float-start">Float start on all viewport sizes</div><br>
<div class="float-end">Float end on all viewport sizes</div><br>
<div class="float-none">Don’t float on all viewport sizes</div>`;

const wrapCode = `<p class="clearfix">
  <img src="..." class="float-start me-2" alt="..."/>
  This is a very long piece of text...
</p>`;

const clearfixCode = `<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
</div>`;

const responsiveCode = `<div class="float-sm-end">Float end on viewports sized SM (small) or wider</div><br>
<div class="float-md-end">Float end on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-end">Float end on viewports sized LG (large) or wider</div><br>
<div class="float-xl-end">Float end on viewports sized XL (extra large) or wider</div><br>
<div class="float-xxl-end">Float end on viewports sized XXL (extra extra large) or wider</div><br>`;
</script>
