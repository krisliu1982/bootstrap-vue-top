<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-color-background">
      <a href="#color-background-base">基础用法</a>
      <a href="#color-background-component">在组件中使用</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-color-background" class="docs-content">
    <h1>Color and background 文本颜色背景</h1>
    <p class="fs-4 fw-light">
      设置一个与前景色形成对比的背景色。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/color-background/" target="_blank"
        >Bootstrap Color and background</a
      >
    </p>

    <h2 id="color-background-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#color-background-base"> </a>
    </h2>
    <p>
      文本颜色背景辅助类将我们
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors" target="_blank"><code>.text-*</code></a>
      工具类和
      <a href="https://getbootstrap.com/docs/5.3/utilities/background" target="_blank"><code>.bg-*</code></a>
      工具类的功能整合到了一个类中。通过使用我们的 Sass
      <code>color-contrast()</code> 函数，我们能够自动为特定的 <code>背景颜色</code> 确定一个对比度良好的
      <code>颜色</code> 。
    </p>
    <p class="text-bg-warning">
      <strong>请注意！</strong> 目前尚无针对 CSS 原生的 <code>color-contrast</code> 函数的支持，所以我们通过 Sass
      来实现这一功能。这意味着通过 CSS 变量来自定义主题颜色可能会与这些工具产生颜色对比方面的问题。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="text-bg-primary p-3">Primary with contrasting color</div>
        <div class="text-bg-secondary p-3">Secondary with contrasting color</div>
        <div class="text-bg-success p-3">Success with contrasting color</div>
        <div class="text-bg-danger p-3">Danger with contrasting color</div>
        <div class="text-bg-warning p-3">Warning with contrasting color</div>
        <div class="text-bg-info p-3">Info with contrasting color</div>
        <div class="text-bg-light p-3">Light with contrasting color</div>
        <div class="text-bg-dark p-3">Dark with contrasting color</div>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      仅通过颜色来传达意义仅能提供一种视觉上的指示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义能从内容本身中清晰展现（例如，具有
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>足够的</em> 颜色对比度</a
      >
      的可见文本），或者通过其他方式予以说明，比如使用带有
      <code>.visually-hidden</code> 类的隐藏文本。
    </p>

    <h2 id="color-background-component">
      在组件中使用<a
        class="anchor-link"
        aria-label="Link to this section: 在组件中使用"
        href="#color-background-component"
      >
      </a>
    </h2>
    <p>
      用它们来替代组合式的 <code>.text-*</code> 和 <code>.bg-*</code> 类，例如在
      <a href="https://getbootstrap.com/docs/5.3/components/badge#background-colors">badges</a>
      组件中的使用方式：
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <span class="badge text-bg-primary">Primary</span>
          <span class="badge text-bg-info">Info</span>
        </div>
      </div>
      <code-highlight type="html" :code="component1Code" label="html" />
    </div>
    <p>或者在 <code>cards</code> 组件中：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card text-bg-primary mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-info mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="component2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const baseCode = `
<div class="text-bg-primary p-3">Primary with contrasting color</div>
<div class="text-bg-secondary p-3">Secondary with contrasting color</div>
<div class="text-bg-success p-3">Success with contrasting color</div>
<div class="text-bg-danger p-3">Danger with contrasting color</div>
<div class="text-bg-warning p-3">Warning with contrasting color</div>
<div class="text-bg-info p-3">Info with contrasting color</div>
<div class="text-bg-light p-3">Light with contrasting color</div>
<div class="text-bg-dark p-3">Dark with contrasting color</div>`;

const component1Code = `
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>`;

const component2Code = `
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">
      Some quick example text ...
    </p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">
      Some quick example text ...
    </p>
  </div>
</div>`;
</script>
