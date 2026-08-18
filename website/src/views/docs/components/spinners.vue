<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-spinners">
      <a href="#spinners-about">使用说明</a>
      <a href="#spinners-example">示例</a>
      <a href="#spinners-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-spinners" class="docs-content">
    <h1>Spinners 加载指示器</h1>
    <p class="fs-4 fw-light">
      使用基于 HTML、CSS 构建且无需 JavaScript 的 Bootstrap 加载指示器来指示组件或页面的加载状态。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/spinners/" target="_blank">Bootstrap Spinners</a>
    </p>

    <h2 id="spinners-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#spinners-about"> </a>
    </h2>
    <p>
      “加载指示器”可用于在您的项目中展示加载状态。它们完全由 HTML 和 CSS 构建而成，这意味着您无需任何 JavaScript
      即可创建它们。不过，您需要一些自定义的 JavaScript
      来控制其显示状态。通过我们出色的实用类，您可以轻松地自定义其外观、对齐方式和尺寸。
    </p>
    <p>
      出于可访问性的考虑，这里的每个加载器都包含了
      <code>role="status"</code> 以及一个嵌套的
      <code>&lt;span class="visually-hidden"&gt;加载中...&lt;/span&gt;</code>
      元素。
    </p>
    <p class="text-bg-info">
      此组件的动画效果取决于
      <code>prefers-reduced-motion</code> 媒体查询。请参阅我们的无障碍文档中
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion" target="_blank"
        >无障碍部分</a
      >。
    </p>

    <h2 id="spinners-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#spinners-example"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <!--Border spinner-->
        <div class="hstack gap-3">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <hr />

        <!--Growing spinner-->
        <div class="hstack gap-3">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <hr />

        <!--Placement-->
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <br />
        <div class="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
        <br />
        <div class="clearfix">
          <div class="spinner-border float-end" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <br />
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <hr />

        <!--Size-->
        <div class="hstack gap-3">
          <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="spinners-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#spinners-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.pinner-border</code> 和 <code>.spinner-grow</code> 元素上使用本地 CSS
      变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass 设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_spinners.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<!--Border spinner-->
<div class="hstack gap-3">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<hr />

<!--Growing spinner-->
<div class="hstack gap-3">
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<hr />

<!--Placement-->
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
<br />
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
<br />
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
<br />
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<hr />

<!--Size-->
<div class="hstack gap-3">
  <div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;

const css1Code = `
--#{$prefix}spinner-width: #{$spinner-width};
--#{$prefix}spinner-height: #{$spinner-height};
--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
--#{$prefix}spinner-border-width: #{$spinner-border-width};
--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
--#{$prefix}spinner-animation-name: spinner-border|spinner-grow;`;
</script>
