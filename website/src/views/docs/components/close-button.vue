<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-close-button">
      <a href="#close-example">示例</a>
      <a href="#close-disabled">禁用</a>
      <a href="#close-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-close-button" class="docs-content">
    <h1>Close button 关闭按钮</h1>
    <p class="fs-4 fw-light">
      使一个通用的关闭按钮，用于关闭模态框和警告等提示内容。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/close-button/" target="_blank">Bootstrap Close button</a>
    </p>

    <h2 id="close-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#close-example"> </a>
    </h2>
    <p>
      提供一个使用
      <code>.btn-close</code>
      来关闭或隐藏组件的选项。默认样式有限，但高度可定制。修改Sass变量以替换默认的
      <code>background-image</code>。<strong>确保为屏幕阅读器添加文本</strong>，就像我们使用
      <code>aria-label</code> 一样。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="close-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#close-disabled"> </a>
    </h2>
    <p>
      禁用的关闭按钮会改变其 <code>opacity</code>（不透明度）。我们还应用了 <code>pointer-events: none</code> 和
      <code>user-select: none</code> 来防止悬停和活动状态触发。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn-close" disabled aria-label="Close"></button>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>

    <h2 id="close-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#close-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，关闭按钮现在在
      <code>.btn-close</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_close.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<button type="button" class="btn-close" aria-label="Close"></button>`;

const disabledCode = `
<button type="button" class="btn-close" disabled aria-label="Close"></button>`;

const css1Code = `
--#{$prefix}btn-close-color: #{$btn-close-color};
--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };
--#{$prefix}btn-close-opacity: #{$btn-close-opacity};
--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};
--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};
--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};
--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};`;
</script>
