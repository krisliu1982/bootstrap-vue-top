<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-placeholders">
      <a href="#placeholders-about">使用说明</a>
      <a href="#placeholders-example">示例</a>
      <a href="#placeholders-width">宽度</a>
      <a href="#placeholders-color">颜色</a>
      <a href="#placeholders-size">尺寸</a>
      <a href="#placeholders-animation">动画</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-placeholders" class="docs-content">
    <h1>Placeholders 占位符</h1>
    <p class="fs-4 fw-light">
      为您的组件或页面使用加载占位符（骨架加载器）来表明某些内容可能仍在加载中。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/placeholders/" target="_blank">Boostrap Placeholders</a>
    </p>

    <h2 id="placeholders-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#placeholders-about"> </a>
    </h2>
    <p>
      占位符可用于提升您的应用程序的使用体验。它们仅通过 HTML 和 CSS 构建而成，这意味着您无需任何 JavaScript
      即可创建它们。不过，您需要一些自定义的 JavaScript
      来控制其显示状态。其外观、颜色和尺寸都可以通过我们的实用类轻松进行自定义设置。
    </p>

    <h2 id="placeholders-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#placeholders-example"> </a>
    </h2>
    <p>
      使用 <code>.placeholder</code> 类和网格列类（例如 <code>.col-6</code>）创建占位符，以设置
      <code>width</code>
      属性。它们可以替换元素内部的文本内容，或者作为修饰类添加到现有的组件中。
    </p>
    <p>
      我们通过 <code>::before</code> 为 <code>.btn</code> 元素应用了额外的样式，以确保其
      <code>高度</code>
      能得到正确设置。您可以根据需要将此模式扩展到其他情况，或者在元素内添加
      <code>&nbsp;</code> 来反映实际文本填充时的高度情况。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p aria-hidden="true">
          <span class="placeholder col-6"></span>
        </p>

        <a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>
    <p class="text-bg-info">
      使用
      <code>aria-hidden="true"</code>
      只表示该元素应隐藏给屏幕阅读器。占位符的“加载”行为取决于作者实际如何使用占位符样式、如何计划进行更新等。可能需要一些
      JavaScript 代码来“切换”占位符的状态，并向辅助技术用户告知更新情况。
    </p>

    <h2 id="placeholders-width">
      宽度<a class="anchor-link" aria-label="Link to this section: 宽度" href="#placeholders-width"> </a>
    </h2>
    <p>您可以通过网格列类、宽度工具或内联样式来更改 <code>width</code> 的值。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <span class="placeholder col-6"></span>
        <span class="placeholder w-75"></span>
        <span class="placeholder" style="width: 25%"></span>
      </div>
      <code-highlight type="html" :code="widthCode" label="html" />
    </div>

    <h2 id="placeholders-color">
      颜色<a class="anchor-link" aria-label="Link to this section: 颜色" href="#placeholders-color"> </a>
    </h2>
    <p>
      默认情况下，<code>placeholder</code> 使用的是
      <code>currentColor</code>（当前颜色）。若要更改颜色或使用自定义类，可以对其进行设置。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <span class="placeholder col-12"></span>

        <span class="placeholder col-12 bg-primary"></span>
        <span class="placeholder col-12 bg-secondary"></span>
        <span class="placeholder col-12 bg-success"></span>
        <span class="placeholder col-12 bg-danger"></span>
        <span class="placeholder col-12 bg-warning"></span>
        <span class="placeholder col-12 bg-info"></span>
        <span class="placeholder col-12 bg-light"></span>
        <span class="placeholder col-12 bg-dark"></span>
      </div>
      <code-highlight type="html" :code="colorCode" label="html" />
    </div>

    <h2 id="placeholders-size">
      尺寸<a class="anchor-link" aria-label="Link to this section: 尺寸" href="#placeholders-size"> </a>
    </h2>
    <p>
      <code>.placeholder</code>
      的大小取决于其父元素的排版样式。您可以使用尺寸修饰符对其进行自定义：<code>.placeholder-lg</code>、<code
        >.placeholder-sm</code
      >
      或 <code>.placeholder-xs</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <span class="placeholder col-12 placeholder-lg"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12 placeholder-sm"></span>
        <span class="placeholder col-12 placeholder-xs"></span>
      </div>
      <code-highlight type="html" :code="sizeCode" label="html" />
    </div>

    <h2 id="placeholders-animation">
      动画<a class="anchor-link" aria-label="Link to this section: 动画" href="#placeholders-animation"> </a>
    </h2>
    <p>
      使用 <code>.placeholder-glow</code> 或
      <code>.placeholder-wave</code>
      来为占位符添加动画效果，以便更清晰地传达出内容正在“积极”加载的这种感觉。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="placeholder-glow">
          <span class="placeholder col-12"></span>
        </p>

        <p class="placeholder-wave">
          <span class="placeholder col-12"></span>
        </p>
      </div>
      <code-highlight type="html" :code="animationCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const exampleCode = `
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>`;

const widthCode = `
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>`;

const colorCode = `
<span class="placeholder col-12"></span>

<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>`;

const sizeCode = `
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>`;

const animationCode = `
<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>`;
</script>
