<template>
  <div class="docs-toc">
    <nav id="docs-nav-accordion">
      <a href="#accordion-base">基础用法</a>
      <a href="#accordion-flush">齐平手风琴</a>
      <a href="#accordion-always">保持打开</a>
      <a href="#accordion-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-accordion" class="docs-content">
    <h1>Accordion 手风琴</h1>
    <p class="fs-4 fw-light">
      用于将复杂的内容区域分组和隐藏，可折叠或展开。基于
      <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank">Bootstrap Accordion</a>，构建
      <code>bv-accordion</code> 组件。
    </p>

    <h2 id="accordion-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#accordion-base"> </a>
    </h2>
    <p>默认展开单个面板。通过 <code>init-active-index</code> 初始打开第几个面板。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-accordion :init-active-index="0">
          <bv-accordion-item header="Accordion Item #1">
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #2">
            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #3">
            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
        </bv-accordion>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="accordion-flush">
      齐平手风琴<a class="anchor-link" aria-label="Link to this section: 齐平手风琴" href="#accordion-flush"> </a>
    </h2>
    <p>
      添加
      <code>accordion-class="accordion-flush"</code>
      以移除部分边框和圆角，从而使手风琴效果与父容器边缘对齐。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-accordion accordion-class="accordion-flush">
          <bv-accordion-item header="Accordion Item #1">
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #2">
            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #3">
            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
        </bv-accordion>
      </div>
      <code-highlight type="vue" :code="flushCode" label="vue" />
    </div>

    <h2 id="accordion-always">
      保持打开<a class="anchor-link" aria-label="Link to this section: 保持打开" href="#accordion-always"> </a>
    </h2>
    <p>
      通过设置
      <code>always</code> 以便在打开另一个项目时，手风琴项目保持打开状态。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-accordion always>
          <bv-accordion-item header="Accordion Item #1">
            <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #2">
            <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
          <bv-accordion-item header="Accordion Item #3">
            <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </bv-accordion-item>
        </bv-accordion>
      </div>
      <code-highlight type="vue" :code="alwaysCode" label="vue" />
    </div>

    <h2 id="accordion-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#accordion-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，手风琴现在在
      <code>.accordion</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_accordion.scss" />
  </div>
</template>

<script setup>
const baseCode = `
<template>
  <bv-accordion :init-active-index="0">
    <bv-accordion-item header="Accordion Item #1">
        ...
    </bv-accordion-item>
    <bv-accordion-item header="Accordion Item #2">
        ...
    </bv-accordion-item>
    <bv-accordion-item header="Accordion Item #3">
        ...
    </bv-accordion-item>
  </bv-accordion>
</template>`;

const flushCode = `
<template>
  <bv-accordion accordion-class="accordion-flush">
    <bv-accordion-item header="Accordion Item #1">
        ...
    </bv-accordion-item>
    <bv-accordion-item header="Accordion Item #2">
        ...
    </bv-accordion-item>
    <bv-accordion-item header="Accordion Item #3">
        ...
    </bv-accordion-item>
  </bv-accordion>
</template>`;

const alwaysCode = `
<template>
    <bv-accordion always>
        <bv-accordion-item header="Accordion Item #1">
            ...
        </bv-accordion-item>
        <bv-accordion-item header="Accordion Item #2">
            ...
        </bv-accordion-item>
        <bv-accordion-item header="Accordion Item #3">
            ...
        </bv-accordion-item>
    </bv-accordion>
</template>`;

const css1Code = `
--#{$prefix}accordion-color: #{$accordion-color};
--#{$prefix}accordion-bg: #{$accordion-bg};
--#{$prefix}accordion-transition: #{$accordion-transition};
--#{$prefix}accordion-border-color: #{$accordion-border-color};
--#{$prefix}accordion-border-width: #{$accordion-border-width};
--#{$prefix}accordion-border-radius: #{$accordion-border-radius};
--#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};
--#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};
--#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};
--#{$prefix}accordion-btn-color: #{$accordion-button-color};
--#{$prefix}accordion-btn-bg: #{$accordion-button-bg};
--#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};
--#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};
--#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};
--#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};
--#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
--#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
--#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};
--#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};
--#{$prefix}accordion-active-color: #{$accordion-button-active-color};
--#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};`;
</script>
