<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-z-index">
      <a href="#z-index-about">工作说明</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-z-index" class="docs-content">
    <h1>Z-index</h1>
    <p class="fs-4 fw-light">
      虽然不是 Bootstrap 网格系统的一部分，但 z-index
      在决定我们的组件如何相互叠放和交互方面发挥着重要作用。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/layout/z-index/" target="_blank">Bootstrap Z-index</a>
    </p>

    <nav v-docstoc id="docs-nav-changelog">
      <a href="#z-index-about">工作说明</a>
    </nav>
    <p>
      Bootstrap 的多个组件都使用了 <code>z-index</code> 这个 CSS
      属性，它通过提供第三轴来排列内容，从而帮助控制布局。我们在 Bootstrap 中采用了一套默认的 z-index
      等级体系，专门设计用于正确分层导航栏、工具提示、弹出框、模态框等元素。
    </p>
    <p>
      这些较高的数值从某个任意数字开始，既足够高又足够具体，以尽可能避免冲突。我们需要为这些分层组件——工具提示、弹出框、导航栏、下拉菜单、模态框——设定一套标准值，以便在行为上保持合理的一致性。我们完全可以使用
      <code>100</code>+ 或 <code>500</code>+ 这样的数值，没有理由不行。
    </p>
    <p>我们不鼓励对这些单个值进行自定义；如果你更改了其中一个，很可能需要同时更改所有值。</p>

    <code-highlight type="scss" :code="css1Code" label="scss" />
  </div>
</template>

<script setup>
const css1Code = `
// style/index.scss(自定义变量)
$zindex-backtop:                    990;
$zindex-image-preview:              1082;
$zindex-loading-fullscreen:         1083;
$zindex-alert:                      1085;

// scss/_variables.scss(Bootstrap)
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-offcanvas-backdrop:         1040;
$zindex-offcanvas:                  1045;
$zindex-modal-backdrop:             1050;
$zindex-modal:                      1055;
$zindex-popover:                    1070;
$zindex-tooltip:                    1080;
$zindex-toast:                      1090;`;
</script>
