<template>
  <article class="bd-content" data-pagefind-body>
    <h1>CSS 变量</h1>
    <p class="lead">使用 Bootstrap 的 CSS 自定义属性实现快速且具前瞻性的设计与开发。</p>

    <p>
      Bootstrap 在其编译后的 CSS 中包含许多
     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS 自定义属性（变量）</a>，无需重新编译 Sass 即可实时自定义。当你在浏览器检查器、代码沙箱或一般原型设计中使用时，它们可以方便地访问常用值，例如主题色、断点和主要字体栈。
    </p>
    <p>
      <strong>我们的所有自定义属性都以 <code>bs-</code> 为前缀</strong>，以避免与第三方 CSS 冲突。
    </p>
    <h2 id="root-variables">根变量<a class="anchor-link" href="#root-variables" aria-label="根变量"></a></h2>
    <p>以下是我们包含的变量（请注意 <code>:root</code> 是必需的），可在加载了 Bootstrap CSS 的任何位置访问。它们位于 <code>_root.scss</code> 文件中，并包含在我们编译后的 dist 文件中。</p>
    <h3 id="default">默认值<a class="anchor-link" href="#default" aria-label="默认值"></a></h3>
    <p>无论使用哪种颜色模式，这些 CSS 变量在任何地方都可用。</p>
    <CodeWrapper
      code=':root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-primary-text-emphasis: #052c65;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-secondary-color-rgb: 33, 37, 41;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(33, 37, 41, 0.5);
  --bs-tertiary-color-rgb: 33, 37, 41;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;
  --bs-heading-color: inherit;
  --bs-link-color: #0d6efd;
  --bs-link-color-rgb: 13, 110, 253;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-color-rgb: 10, 88, 202;
  --bs-code-color: #d63384;
  --bs-highlight-color: #212529;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}'
      lang="css"
    />
    <h3 id="dark-mode">深色模式<a class="anchor-link" href="#dark-mode" aria-label="深色模式"></a></h3>
    <p>这些变量的作用域限定在我们内置的深色模式中。</p>
    <CodeWrapper
      code="[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: #dee2e6;
  --bs-body-color-rgb: 222, 226, 230;
  --bs-body-bg: #212529;
  --bs-body-bg-rgb: 33, 37, 41;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(222, 226, 230, 0.75);
  --bs-secondary-color-rgb: 222, 226, 230;
  --bs-secondary-bg: #343a40;
  --bs-secondary-bg-rgb: 52, 58, 64;
  --bs-tertiary-color: rgba(222, 226, 230, 0.5);
  --bs-tertiary-color-rgb: 222, 226, 230;
  --bs-tertiary-bg: #2b3035;
  --bs-tertiary-bg-rgb: 43, 48, 53;
  --bs-primary-text-emphasis: #6ea8fe;
  --bs-secondary-text-emphasis: #a7acb1;
  --bs-success-text-emphasis: #75b798;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #ea868f;
  --bs-light-text-emphasis: #f8f9fa;
  --bs-dark-text-emphasis: #dee2e6;
  --bs-primary-bg-subtle: #031633;
  --bs-secondary-bg-subtle: #161719;
  --bs-success-bg-subtle: #051b11;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #332701;
  --bs-danger-bg-subtle: #2c0b0e;
  --bs-light-bg-subtle: #343a40;
  --bs-dark-bg-subtle: #1a1d20;
  --bs-primary-border-subtle: #084298;
  --bs-secondary-border-subtle: #41464b;
  --bs-success-border-subtle: #0f5132;
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: #997404;
  --bs-danger-border-subtle: #842029;
  --bs-light-border-subtle: #495057;
  --bs-dark-border-subtle: #343a40;
  --bs-heading-color: inherit;
  --bs-link-color: #6ea8fe;
  --bs-link-hover-color: #8bb9fe;
  --bs-link-color-rgb: 110, 168, 254;
  --bs-link-hover-color-rgb: 139, 185, 254;
  --bs-code-color: #e685b5;
  --bs-highlight-color: #dee2e6;
  --bs-highlight-bg: #664d03;
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
  --bs-form-valid-color: #75b798;
  --bs-form-valid-border-color: #75b798;
  --bs-form-invalid-color: #ea868f;
  --bs-form-invalid-border-color: #ea868f;
}"
      lang="css"
    />
    <h2 id="component-variables">组件变量<a class="anchor-link" href="#component-variables" aria-label="组件变量"></a></h2>
    <p>Bootstrap 5 越来越多地将自定义属性用作各种组件的局部变量。通过这种方式，我们减少了编译后的 CSS，确保样式不会在嵌套表格等地方被继承，并允许在 Sass 编译后对 Bootstrap 组件进行一些基本的重新样式化和扩展。</p>
    <p>
      请查看我们的表格文档，了解我们如何使用 CSS 变量的
     <a href="/content/tables#how-do-the-variants-and-accented-tables-work">一些见解</a>。自 v5.2.0 起，我们的<a href="/components/navbar#css">导航栏也使用 CSS 变量</a>。我们还在整个栅格系统中使用 CSS 变量——主要用于间距（gutters）以及<a href="/layout/css-grid">新的可选 CSS 栅格</a>——未来还会有更多
      组件使用。
    </p>
    <p>我们会尽可能在基础组件层级分配 CSS 变量（例如为导航栏及其子组件分配 <code>.navbar</code>）。这减少了在何处以及如何自定义的猜测，并使我们团队在未来的更新中能够轻松修改。</p>
    <h2 id="prefix">前缀<a class="anchor-link" href="#prefix" aria-label="前缀"></a></h2>
    <p>
      大多数 CSS 变量都使用前缀，以避免与你自己的代码库冲突。该前缀是在每个 CSS 变量所必需的
      <code>--</code> 之外额外添加的。
    </p>
    <p>通过 <code>$prefix</code> Sass 变量自定义前缀。默认情况下，它被设置为 <code>bs-</code>（注意末尾的短横线）。</p>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例"></a></h2>
    <p>CSS 变量提供了与 Sass 变量类似的灵活性，但无需在发送到浏览器之前进行编译。例如，下面我们使用 CSS 变量重置页面的字体和链接样式。</p>
    <CodeWrapper
      code="body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-blue);
}
"
      lang="css"
    />
    <h2     id="focus-variables">聚焦变量<a class="anchor-link" href="#focus-variables" aria-label="聚焦变量"></a></h2>
    <AddedIn version="5.3.0" />
        <p>Bootstrap 使用 Sass 和 CSS 变量的组合提供自定义的 <code>:focus</code> 样式，可以选择性地添加到特定的组件和元素上。我们尚未全局覆盖所有的 <code>:focus</code> 样式。</p>
        <p>在我们的 Sass 中，我们设置了可在编译前自定义的默认值。</p>
    <ScssDocs name="focus-ring-variables" file="scss/_variables.scss" />
        <p>随后，这些变量会被重新赋值为 <code>:root</code> 级别的 CSS 变量，可以实时自定义，包括 <code>x</code> 和 <code>y</code> 偏移量的选项（默认使用其回退值 <code>0</code>）。</p>
    <ScssDocs name="root-focus-variables" file="scss/_root.scss" />
        <h2 id="grid-breakpoints">栅格断点<a class="anchor-link" href="#grid-breakpoints" aria-label="栅格断点"></a></h2>
    <p>
          虽然我们将栅格断点作为 CSS 变量包含在内（<code>xs</code> 除外），但请注意<strong>CSS 变量在媒体查询中不起作用</strong>。这是 CSS 规范对变量的设计使然，但未来几年可能会随着对 <code>env()</code> 变量的支持而改变。请查看
         <a href="https://stackoverflow.com/a/47212942">这个 Stack Overflow 回答</a>获取一些有用的链接。在此期间，你可以在其他 CSS 场景以及 JavaScript 中使用这些变量。
    </p>
    <DocsPager />
  </article>

      <nav class="bd-toc" aria-label="本页目录">
        <h6>本页目录</h6>
    <ul>
      <li>
           <a href="#root-variables">根变量</a>
        <ul>
              <li><a href="#default">默认值</a></li>
              <li><a href="#dark-mode">深色模式</a></li>
        </ul>
      </li>
          <li><a href="#component-variables">组件变量</a></li>
          <li><a href="#prefix">前缀</a></li>
          <li><a href="#examples">示例</a></li>
          <li><a href="#focus-variables">聚焦变量</a></li>
      <li>
           <a href="#grid-breakpoints">栅格断点</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
