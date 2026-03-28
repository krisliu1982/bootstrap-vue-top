<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-dropdowns">
      <a href="#tooltips-example">示例</a>
      <a href="#tooltips-custom">自定义样式</a>
      <a href="#tooltips-html">HTML内容</a>
      <a href="#tooltips-accessibility">无障碍</a>
      <a href="#tooltips-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-dropdowns" class="docs-content">
    <h1>Tooltips 文字提示</h1>
    <p class="fs-4 fw-light">
      使用 <code>v-tooltip</code> 指令激活文字提示。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/tooltips/" target="_blank">Bootstrap Tooltips</a>
    </p>

    <h2 id="tooltips-example">示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#tooltips-example"> </a></h2>
    <p>在 HTML 元素上使用 <code>v-tooltip</code> 指令, 同时通过 <code>data-bs-title</code> 设置提示内容。</p>
    <p class="text-bg-warning">
      您可以在 HTML 中随意使用 <code>title</code> 或 <code>data-bs-title</code>。当使用 <code>title</code> 时，当元素被渲染时，Tooltip 会自动将其替换为
      <code>data-bs-title</code> 。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <a href="#" v-tooltip data-bs-title="tooltip content">tooltip link</a>
          <button type="button" class="btn btn-primary" v-tooltip data-bs-title="tooltip content">tooltip button</button>
        </div>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="tooltips-custom">自定义样式<a class="anchor-link" aria-label="Link to this section: 自定义样式" href="#tooltips-custom"> </a></h2>
    <p>
      您可以使用 <a href="#tooltips-css">CSS 变量</a> 来自定义样式的外观。我们通过 <code>data-bs-custom-class="custom-tooltip"</code>
      设置了一个自定义类，以限定我们的自定义外观，并利用它来覆盖一些本地的 CSS 变量。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" v-tooltip data-bs-custom-class="custom-tooltip" data-bs-title="Custom tooltip">Custom tooltip</button>
      </div>
      <code-highlight type="vue" :code="customCode" label="vue" />
    </div>

    <h2 id="tooltips-html">HTML内容<a class="anchor-link" aria-label="Link to this section: HTML内容" href="#tooltips-html"> </a></h2>
    <p>可以通过设置 <code>data-bs-html</code> 为 <code>true</code>。插入 HTML 标签内容。</p>
    <p class="text-bg-danger">在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。永远不要使用用户提供的 HTML 内容。</p>

    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" v-tooltip data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
          tooltip html
        </button>
      </div>
      <code-highlight type="vue" :code="htmlCode" label="vue" />
    </div>

    <h2 id="tooltips-css">CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#tooltips-css"> </a></h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.tooltip</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass 设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_tooltip.scss" />
  </div>
</template>

<script setup>
const exampleCode = `<template>
  <div class="hstack-3">
    <a href="#" 
      v-tooltip 
      data-bs-title="tooltip content">tooltip link</a>

    <button type="button" class="btn btn-primary" 
      v-tooltip 
      data-bs-title="tooltip content">
      tooltip button
    </button>
  </div>
</template>`

const customCode = `<template>
  <button type="button" class="btn btn-primary"
    v-tooltip
    data-bs-custom-class="custom-tooltip"
    data-bs-title="Custom tooltip">
    Custom tooltip
  </button>
</template>

<style lang="css">
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
  --bs-tooltip-color: var(--bs-white);
}
</style>`

const htmlCode = `<template>
  <button type="button" class="btn btn-primary" 
    v-tooltip 
    data-bs-html="true" 
    data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
    tooltip html
  </button>
</template>`

const css1Code = `--#{$prefix}tooltip-zindex: #{$zindex-tooltip};
--#{$prefix}tooltip-max-width: #{$tooltip-max-width};
--#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};
--#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};
--#{$prefix}tooltip-margin: #{$tooltip-margin};
@include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);
--#{$prefix}tooltip-color: #{$tooltip-color};
--#{$prefix}tooltip-bg: #{$tooltip-bg};
--#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};
--#{$prefix}tooltip-opacity: #{$tooltip-opacity};
--#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};
--#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};`
</script>

<style lang="css">
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-primary);
  --bs-tooltip-color: var(--bs-white);
}
</style>
