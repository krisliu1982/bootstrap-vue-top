<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-background">
      <a href="#background-base">基础用法</a>
      <a href="#background-gradient">渐变背景</a>
      <a href="#background-opacity">透明度调整</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-background" class="docs-content">
    <h1>Background 背景</h1>
    <p class="fs-4 fw-light">
      通过
      <code>background-color</code>
      来传达意义，并使用渐变来添加装饰效果。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/background/" target="_blank">Bootstrap Background</a>
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

    <h2 id="background-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#background-base"> </a>
    </h2>
    <p>
      与上下文文本颜色类类似，可以将元素的背景设置为任何上下文类。背景工具
      <strong>不会设置 <code>color</code></strong>
      ，所以在某些情况下，您可能需要使用
      <code>.text-*</code>
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors" target="_blank">文本颜色工具</a>
      。
    </p>
    <p class="text-bg-info">
      像 <code>.bg-*</code> 这类由我们最初的 <code>$theme-colors</code> Sass
      生成的背景相关工具目前尚不能响应颜色模式，不过任何 <code>.bg-*-subtle</code> 工具则可以。这一问题将在版本 6
      中得到解决。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
        <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">.bg-primary-subtle</div>
        <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
        <div class="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">.bg-secondary-subtle</div>
        <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
        <div class="p-3 mb-2 bg-success-subtle text-success-emphasis">.bg-success-subtle</div>
        <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
        <div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>
        <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
        <div class="p-3 mb-2 bg-warning-subtle text-warning-emphasis">.bg-warning-subtle</div>
        <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
        <div class="p-3 mb-2 bg-info-subtle text-info-emphasis">.bg-info-subtle</div>
        <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
        <div class="p-3 mb-2 bg-light-subtle text-light-emphasis">.bg-light-subtle</div>
        <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
        <div class="p-3 mb-2 bg-dark-subtle text-dark-emphasis">.bg-dark-subtle</div>
        <div class="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
        <div class="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
        <div class="p-3 mb-2 bg-body text-body">.bg-body</div>
        <div class="p-3 mb-2 bg-black text-white">.bg-black</div>
        <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
        <div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>

    <h2 id="background-gradient">
      渐变背景<a class="anchor-link" aria-label="Link to this section: 渐变背景" href="#background-gradient"> </a>
    </h2>
    <p>
      通过添加一个
      <code>.bg-gradient</code>
      类，会在背景中添加一条线性渐变效果作为背景图片。这条渐变从半透明的白色开始，逐渐向底部淡去。
    </p>
    <p>
      您的自定义 CSS 是否需要渐变效果呢？只需添加
      <code>background-image: var(--bs-gradient);</code> 即可。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="p-3 mb-2 bg-primary bg-gradient text-white">.bg-primary.bg-gradient</div>
        <div class="p-3 mb-2 bg-secondary bg-gradient text-white">.bg-secondary.bg-gradient</div>
        <div class="p-3 mb-2 bg-success bg-gradient text-white">.bg-success.bg-gradient</div>
        <div class="p-3 mb-2 bg-danger bg-gradient text-white">.bg-danger.bg-gradient</div>
        <div class="p-3 mb-2 bg-warning bg-gradient text-dark">.bg-warning.bg-gradient</div>
        <div class="p-3 mb-2 bg-info bg-gradient text-dark">.bg-info.bg-gradient</div>
        <div class="p-3 mb-2 bg-light bg-gradient text-dark">.bg-light.bg-gradient</div>
        <div class="p-3 mb-2 bg-dark bg-gradient text-white">.bg-dark.bg-gradient</div>
        <div class="p-3 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient</div>
      </div>
    </div>

    <h2 id="background-opacity">
      透明度调整<a class="anchor-link" aria-label="Link to this section: 透明度调整" href="#background-opacity"> </a>
    </h2>
    <p>
      若要更改该不透明度，请通过自定义样式或内联样式来覆盖
      <code>--bs-border-opacity</code> 属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="bg-success p-2 text-white">This is default success background</div>
        <div class="bg-success p-2" style="--bs-bg-opacity: 0.5">This is 50% opacity success background</div>
      </div>
      <code-highlight type="html" :code="opacity1Code" label="html" />
    </div>
    <p>或者，您可以从以下任何一个 <code>.bg-opacity</code> 相关的工具中进行选择：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="bg-success p-2 text-white">This is default success background</div>
        <div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
        <div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
        <div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
        <div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
      </div>
      <code-highlight type="html" :code="opacity2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const baseCode = `
<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">.bg-primary-subtle</div>
<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">.bg-secondary-subtle</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
<div class="p-3 mb-2 bg-success-subtle text-success-emphasis">.bg-success-subtle</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-3 mb-2 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-3 mb-2 bg-warning-subtle text-warning-emphasis">.bg-warning-subtle</div>
<div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
<div class="p-3 mb-2 bg-info-subtle text-info-emphasis">.bg-info-subtle</div>
<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-3 mb-2 bg-light-subtle text-light-emphasis">.bg-light-subtle</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-3 mb-2 bg-dark-subtle text-dark-emphasis">.bg-dark-subtle</div>
<div class="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
<div class="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
<div class="p-3 mb-2 bg-body text-body">.bg-body</div>
<div class="p-3 mb-2 bg-black text-white">.bg-black</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>`;

const opacity1Code = `
<div class="bg-success p-2 text-white">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">
  This is 50% opacity success background
</div>`;

const opacity2Code = `
<div class="bg-success p-2 text-white">
  This is default success background
</div>
<div class="bg-success p-2 text-white bg-opacity-75">
  This is 75% opacity success background
</div>
<div class="bg-success p-2 text-dark bg-opacity-50">
  This is 50% opacity success background
</div>
<div class="bg-success p-2 text-dark bg-opacity-25">
  This is 25% opacity success background
</div>
<div class="bg-success p-2 text-dark bg-opacity-10">
  This is 10% opacity success background
</div>`;
</script>
