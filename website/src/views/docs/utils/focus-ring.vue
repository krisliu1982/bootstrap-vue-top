<template>
  <div class="docs-toc">
    <nav id="docs-nav-focus-ring">
      <a href="#focus-ring-example">示例</a>
      <a href="#focus-ring-coustom">自定义</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-focus-ring" class="docs-content">
    <h1>Focus ring 焦点环</h1>
    <p class="fs-4 fw-light">
      这些工具类允许您为元素和组件添加及修改自定义的焦点环样式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/focus-ring/" target="_blank">Bootstrap Focus ring</a>
    </p>

    <p>
      <code>.focus-ring</code> 插件会移除在 <code>:focus</code> 状态下默认的
      <code>outline</code> ，并用一个可以进行更广泛自定义的 <code>box-shadow</code> 来替代。这个新的阴影由一系列从
      <code>:root</code> 层级继承而来的 CSS 变量组成，可以针对任何元素或组件进行修改。
    </p>

    <h2 id="focus-ring-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#focus-ring-example"> </a>
    </h2>
    <p>直接点击下面的链接即可观看聚焦环的运行效果，或者点击下面的示例画面，然后按 <kbd>Tab</kbd> 键。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
          Custom focus ring
        </a>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="focus-ring-coustom">
      自定义<a class="anchor-link" aria-label="Link to this section: 自定义" href="#focus-ring-coustom"> </a>
    </h2>
    <p>根据需要修改 <code>--bs-focus-ring-*</code> 这些 CSS 变量，以改变默认的外观。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a
          href="#"
          class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
          style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), 0.25)"
        >
          Green focus ring
        </a>
      </div>
      <code-highlight type="html" :code="coustomCode" label="html" />
    </div>
    <p>
      <code>.focus-ring</code> 通过全局 CSS
      变量来设定样式，这些样式可以在任何父元素上被覆盖，如上文所示。这些变量是根据其对应的 Sass 变量生成的。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_root.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<a href="#" 
  class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>`;

const coustomCode = `
<a href="#" 
  class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
  style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>`;

const css1Code = `
--#{$prefix}focus-ring-width: #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color: #{$focus-ring-color};`;
</script>
