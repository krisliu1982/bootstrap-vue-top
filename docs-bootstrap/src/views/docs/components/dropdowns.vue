<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-dropdowns">
      <a href="#dropdowns-example">示例</a>
      <a href="#dropdowns-accessibility">无障碍</a>
      <a href="#dropdowns-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-dropdowns" class="docs-content">
    <h1>Dropdowns 下拉菜单</h1>
    <p class="fs-4 fw-light">
      使用 <code>v-dropdown</code> 指令激活下拉菜单。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/" target="_blank">Bootstrap Dropdowns</a>
    </p>

    <h2 id="dropdowns-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#dropdowns-example"> </a>
    </h2>
    <p>
      将下拉菜单的切换按钮（即您的按钮或链接）以及下拉菜单包裹在
      <code>.dropdown</code> 元素内，或者使用声明了 <code>position: relative;</code> 的其他元素。设置
      <code>v-dropdown</code> 指令在下拉触发元素上。理想情况下，您应该使用
      <code>&lt;button&gt;</code> 元素作为下拉菜单的触发器，但该组件也能与
      <code>&lt;a&gt;</code>
      元素配合使用。这里展示的示例在适当的地方使用了语义化的
      <code>&lt;ul&gt;</code> 元素，但支持自定义标记。
    </p>
    <h3>单个按钮</h3>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="dropdown">
          <button v-dropdown class="btn btn-secondary dropdown-toggle" type="button" aria-expanded="false">
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <h6 class="dropdown-header">Dropdown header</h6>
            </li>
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li>
              <button class="dropdown-item" type="button">Another action</button>
            </li>
            <li>
              <button class="dropdown-item" type="button">Something else here</button>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <button class="dropdown-item" type="button">Separated link1</button>
            </li>
            <li>
              <button class="dropdown-item" type="button" disabled>Separated link2 disabled</button>
            </li>
            <li>
              <button class="dropdown-item" type="button">Separated link3</button>
            </li>
          </ul>
        </div>
        <hr />
        <div class="dropdown">
          <a v-dropdown class="btn btn-primary btn-lg dropdown-toggle" href="#" role="button" aria-expanded="false">
            Dropdown link(大)
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li>
              <a class="dropdown-item disabled" href="#" tabindex="-1">Another action</a>
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <hr />
        <div class="dropdown">
          <button v-dropdown class="btn btn-primary btn-sm dropdown-toggle" type="button" aria-expanded="false">
            Dropdown button(小)
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <code-highlight type="vue" :code="example1Code" label="vue" />
    </div>
    <h3>拆分按钮</h3>
    <p>
      同样，创建拆分按钮下拉菜单，其标记与单个按钮下拉菜单几乎相同，但添加了
      <code>.dropdown-toggle-split</code>，以在下拉插入符号周围保持适当的间距。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group">
          <button type="button" class="btn btn-danger">Danger</button>
          <button
            type="button"
            class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <code-highlight type="vue" :code="example2Code" label="vue" />
    </div>

    <h2 id="dropdowns-accessibility">
      无障碍<a class="anchor-link" aria-label="Link to this section: 无障碍" href="#dropdowns-accessibility"> </a>
    </h2>
    <p>
      <a href="https://www.w3.org/TR/wai-aria/" target="_blank"
        ><abbr title="Web Accessibility Initiative">WAI</abbr>
        <abbr title="Accessible Rich Internet Applications">ARIA</abbr>
      </a>
      标准定义了一个实际的
      <a href="https://www.w3.org/TR/wai-aria/#menu" target="_blank"><code>role="menu"</code> 小部件</a
      >，但这是特定于触发动作或功能的应用程序类菜单。<abbr title="Accessible Rich Internet Applications">ARIA</abbr>
      菜单只能包含菜单项、复选框菜单项、单选按钮菜单项、无线按钮组和子菜单。
    </p>
    <p>
      然而，Bootstrap 确实为大多数标准键盘菜单交互添加了内置支持，例如使用光标键在单个
      <code>.dropdown-item</code> 元素之间移动，并使用 <kbd>Esc</kbd> 键关闭菜单。
    </p>

    <h2 id="dropdowns-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#dropdowns-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.dropdown-menu</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_dropdown.scss" />
  </div>
</template>

<script setup>
const example1Code = `
<template>
  <div class="dropdown">
      <button v-dropdown class="btn btn-secondary dropdown-toggle" type="button" aria-expanded="false">
          Dropdown button
      </button>
      <ul class="dropdown-menu">
          <li>
              <h6 class="dropdown-header">Dropdown header</h6>
          </li>
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
          <li>
              <hr class="dropdown-divider">
          </li>
          <li><button class="dropdown-item" type="button">Separated link1</button></li>
          <li><button class="dropdown-item" type="button" disabled>Separated link2 disabled</button></li>
          <li><button class="dropdown-item" type="button">Separated link3</button></li>
      </ul>
  </div>
  <hr />
  <div class="dropdown">
      <a v-dropdown class="btn btn-primary btn-lg dropdown-toggle" href="#" role="button" aria-expanded="false">
          Dropdown link(大)
      </a>
      <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item disabled" href="#" tabindex="-1">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
  </div>
  <hr />
  <div class="dropdown">
      <button v-dropdown class="btn btn-primary btn-sm dropdown-toggle" type="button" aria-expanded="false">
          Dropdown button(小)
      </button>
      <ul class="dropdown-menu">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
  </div>
</template>`;

const example2Code = `
<template>
  <div class="btn-group">
      <button type="button" class="btn btn-danger">Danger</button>
      <button v-dropdown type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
  </div>
</template>`;

const css1Code = `
--#{$prefix}dropdown-zindex: #{$zindex-dropdown};
--#{$prefix}dropdown-min-width: #{$dropdown-min-width};
--#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};
--#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};
--#{$prefix}dropdown-spacer: #{$dropdown-spacer};
@include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);
--#{$prefix}dropdown-color: #{$dropdown-color};
--#{$prefix}dropdown-bg: #{$dropdown-bg};
--#{$prefix}dropdown-border-color: #{$dropdown-border-color};
--#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};
--#{$prefix}dropdown-border-width: #{$dropdown-border-width};
--#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
--#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};
--#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
--#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};
--#{$prefix}dropdown-link-color: #{$dropdown-link-color};
--#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};
--#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
--#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};
--#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};
--#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
--#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};
--#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};
--#{$prefix}dropdown-header-color: #{$dropdown-header-color};
--#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};
--#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};`;
</script>
