<template>
  <div class="docs-toc">
    <nav id="docs-nav-colors">
      <a href="#colors-base">基础用法</a>
      <a href="#colors-opacity">透明度调整</a>
      <a href="#colors-specificity">特别点</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-colors" class="docs-content">
    <h1>Colors 文本颜色</h1>
    <p class="fs-4 fw-light">
      通过
      <code>color</code>
      来传达信息，使用少量的文本颜色工具类即可实现。此外，还支持为带有悬停状态的链接进行样式设置。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors/" target="_blank">Bootstrap Colors</a>
    </p>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      仅通过颜色来传达意义仅能提供一种视觉上的指示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义能从内容本身中清晰展现（例如，具有
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>足够的</em> 颜色对比度</a
      >
      的可见文本），或者通过其他方式予以说明，比如使用带有
      <code>.visually-hidden</code> 类的隐藏文本。
    </p>

    <h2 id="colors-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#colors-base"> </a>
    </h2>
    <p>
      使用文本颜色工具对文本进行着色。如果您想对链接进行着色，可以使用
      <a href="https://getbootstrap.com/docs/5.3/helpers/colored-links" target="_blank"><code>.link-*</code></a>
      辅助类 ，它们具有 <code>:hover</code> 和 <code>:focus</code> 状态。
    </p>
    <p class="text-bg-info">
      像 <code>.text-*</code> 这类由我们最初的 <code>$theme-colors</code> Sass
      生成的颜色相关样式，目前还无法响应颜色模式，不过任何 <code>.text-*-emphasis</code> 样式都会生效。这一问题将在版本
      6 中得到解决。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="text-primary">.text-primary</p>
        <p class="text-primary-emphasis">.text-primary-emphasis</p>
        <p class="text-secondary">.text-secondary</p>
        <p class="text-secondary-emphasis">.text-secondary-emphasis</p>
        <p class="text-success">.text-success</p>
        <p class="text-success-emphasis">.text-success-emphasis</p>
        <p class="text-danger">.text-danger</p>
        <p class="text-danger-emphasis">.text-danger-emphasis</p>
        <p class="text-warning bg-dark">.text-warning</p>
        <p class="text-warning-emphasis">.text-warning-emphasis</p>
        <p class="text-info bg-dark">.text-info</p>
        <p class="text-info-emphasis">.text-info-emphasis</p>
        <p class="text-light bg-dark">.text-light</p>
        <p class="text-light-emphasis">.text-light-emphasis</p>
        <p class="text-dark bg-white">.text-dark</p>
        <p class="text-dark-emphasis">.text-dark-emphasis</p>

        <p class="text-body">.text-body</p>
        <p class="text-body-emphasis">.text-body-emphasis</p>
        <p class="text-body-secondary">.text-body-secondary</p>
        <p class="text-body-tertiary">.text-body-tertiary</p>

        <p class="text-black bg-white">.text-black</p>
        <p class="text-white bg-dark">.text-white</p>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>

    <h2 id="colors-opacity">
      透明度调整<a class="anchor-link" aria-label="Link to this section: 透明度调整" href="#colors-opacity"> </a>
    </h2>
    <p>
      若要更改该不透明度，请通过自定义样式或内联样式来覆盖
      <code>--bs-text-opacity</code> 属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="text-primary">This is default primary text</div>
        <div class="text-primary" style="--bs-text-opacity: 0.5">This is 50% opacity primary text</div>
      </div>
      <code-highlight type="html" :code="opacity1Code" label="html" />
    </div>
    <p>
      或者，您可以从以下任何一个
      <code>.text-opacity</code> 相关的工具中进行选择：
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="text-primary">This is default primary text</div>
        <div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
        <div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
        <div class="text-primary text-opacity-25">This is 25% opacity primary text</div>
      </div>
      <code-highlight type="html" :code="opacity2Code" label="html" />
    </div>

    <h2 id="colors-specificity">
      特别点<a class="anchor-link" aria-label="Link to this section: 特别点" href="#colors-specificity"> </a>
    </h2>
    <p>
      有时由于另一个选择器的特殊性，上下文类无法应用。在某些情况下，一个有效的解决办法是将元素的内容包裹在一个
      <code>&lt;div&gt;</code> 或者具有所需类名的更具语义性的元素中。
    </p>
  </div>
</template>

<script setup>
const baseCode = `
<p class="text-primary">.text-primary</p>
<p class="text-primary-emphasis">.text-primary-emphasis</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-secondary-emphasis">.text-secondary-emphasis</p>
<p class="text-success">.text-success</p>
<p class="text-success-emphasis">.text-success-emphasis</p>
<p class="text-danger">.text-danger</p>
<p class="text-danger-emphasis">.text-danger-emphasis</p>
<p class="text-warning bg-dark">.text-warning</p>
<p class="text-warning-emphasis">.text-warning-emphasis</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-info-emphasis">.text-info-emphasis</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-light-emphasis">.text-light-emphasis</p>
<p class="text-dark bg-white">.text-dark</p>
<p class="text-dark-emphasis">.text-dark-emphasis</p>

<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-tertiary">.text-body-tertiary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-dark">.text-white</p>`;

const opacity1Code = `
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">
  This is 50% opacity primary text
</div>`;

const opacity2Code = `
<div class="text-primary">This is default primary text</div>
<div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div class="text-primary text-opacity-25">This is 25% opacity primary text</div>`;
</script>
