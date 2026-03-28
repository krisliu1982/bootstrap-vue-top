<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-buttons">
      <a href="#buttons-base">基础样式</a>
      <a href="#buttons-variants">变体按钮</a>
      <a href="#buttons-nowrap">禁用文本换行</a>
      <a href="#buttons-tag">按钮标签</a>
      <a href="#buttons-outline">轮廓按钮</a>
      <a href="#buttons-size">尺寸</a>
      <a href="#buttons-disabled">禁用状态</a>
      <a href="#buttons-block">块级按钮</a>
      <a href="#buttons-loading">加载按钮</a>
      <a href="#buttons-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-buttons" class="docs-content">
    <h1>Buttons 按钮</h1>
    <p class="fs-4 fw-light">
      使用 Bootstrap 的自定义按钮样式，为表单、对话框等中的操作提供支持，支持多种尺寸、状态等。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank">Boostrap Buttons</a>
    </p>

    <h2 id="buttons-base">
      基础样式<a class="anchor-link" aria-label="Link to this section: 基础样式" href="#buttons-base"> </a>
    </h2>
    <p>
      Bootstrap 有一个基础的
      <code>.btn</code>
      类，用于设置基本的样式，如填充和内容对齐。默认情况下，<code>.btn</code>
      控件具有透明的边框和背景颜色，并且没有任何明确的焦点和悬停样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn">Base class</button>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>
    <p>
      <code>.btn</code>
      类旨在与我们的按钮变体一起使用，或作为您自定义样式的基础。
    </p>
    <p class="text-bg-warning">
      如果你单独使用 <code>.btn</code> 类，请务必至少定义一些明确的 <code>:focus</code> 和/或
      <code>:focus-visible</code> 样式。
    </p>

    <h2 id="buttons-variants">
      变体按钮<a class="anchor-link" aria-label="Link to this section: 变体按钮" href="#buttons-variants"> </a>
    </h2>
    <p>
      Bootstrap 提供了多种按钮样式，每种样式都有其特定的语义用途，同时还附带了一些额外功能以提供更多控制。其中
      <code>.btn-link</code> 按钮 Boostrap 样式被更改，<code>padding</code> 被置为
      <code>0</code>，让其看起来更像链接。<strong
        >因为使用 <code>&lt;a&gt;</code> 标签的点击事件处理和禁用不那么友好。</strong
      >
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3 flex-wrap">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-link">Link</button>
        </div>
      </div>
      <code-highlight type="html" :code="variantsCode" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      仅通过颜色来传达意义仅能提供一种视觉上的提示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义能从内容本身中清晰展现（例如，具有
      <a href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"
        ><em>足够的</em> 颜色对比度</a
      >
      的可见文本），或者通过其他方式予以说明，比如使用带有 <code>.visually-hidden</code> 类的隐藏文本。
    </p>

    <h2 id="buttons-nowrap">
      禁用文本换行<a class="anchor-link" aria-label="Link to this section: 禁用文本换行" href="#buttons-nowrap"> </a>
    </h2>
    <p>
      如果你不希望按钮文本换行，可以在按钮上添加
      <code>.text-nowrap</code> 类。在 Sass 中，你可以设置
      <code>$btn-white-space: nowrap</code>
      来禁用每个按钮的文本换行。
    </p>

    <h2 id="buttons-tag">
      按钮标签<a class="anchor-link" aria-label="Link to this section: 按钮标签" href="#buttons-tag"> </a>
    </h2>
    <p>
      <code>.btn</code> 类是专为与
      <code>&lt;button&gt;</code>
      元素配合使用而设计的。不过，你也可以将这些类应用于
      <code>&lt;a&gt;</code> 或
      <code>&lt;input&gt;</code>
      元素（尽管某些浏览器可能会呈现略有不同的效果）。
    </p>
    <p>
      当在
      <code>&lt;a&gt;</code>
      元素上使用按钮类以触发页面内功能（如折叠内容）时，而不是链接到当前页面中的新页面或新部分，这些链接应被赋予
      <code>role="button"</code>
      属性，以便向屏幕阅读器等辅助技术正确传达其用途。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3 flex-wrap">
          <a class="btn btn-primary" href="#" role="button">Link</a>
          <button class="btn btn-primary" type="submit">Button</button>
          <input class="btn btn-primary" type="button" value="Input" />
          <input class="btn btn-primary" type="submit" value="Submit" />
          <input class="btn btn-primary" type="reset" value="Reset" />
        </div>
      </div>
      <code-highlight type="html" :code="tagCode" label="html" />
    </div>

    <h2 id="buttons-outline">
      轮廓按钮<a class="anchor-link" aria-label="Link to this section: 轮廓按钮" href="#buttons-outline"> </a>
    </h2>
    <p>
      需要按钮，但不需要它们带来的厚重背景色？将默认的修饰类替换为
      <code>.btn-outline-*</code>，即可移除任何按钮上的所有背景图像和颜色。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3 flex-wrap">
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-info">Info</button>
          <button type="button" class="btn btn-outline-light">Light</button>
          <button type="button" class="btn btn-outline-dark">Dark</button>
        </div>
      </div>
      <code-highlight type="html" :code="outlineCode" label="html" />
    </div>
    <p class="text-bg-info">某些按钮样式所使用的前景色较为浅淡，因此应仅在深色背景上使用，以确保有足够的对比度。</p>

    <h2 id="buttons-size">
      尺寸<a class="anchor-link" aria-label="Link to this section: 尺寸" href="#buttons-size"> </a>
    </h2>
    <p>想要更大或更小的按钮吗？添加 <code>.btn-lg</code> 或 <code>.btn-sm</code> 以获取更多尺寸选项。</p>
    <p>你甚至可以使用CSS变量来自定义尺寸：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <button type="button" class="btn btn-primary btn-lg">Large button</button>
          <button type="button" class="btn btn-secondary btn-lg">Large button</button>
        </div>
        <hr />
        <div class="hstack-3">
          <button type="button" class="btn btn-primary btn-sm">Small button</button>
          <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        </div>
        <hr />
        <div class="hstack-3">
          <button
            type="button"
            class="btn btn-primary"
            style="--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem"
          >
            Custom button
          </button>
        </div>
      </div>
      <code-highlight type="html" :code="sizeCode" label="html" />
    </div>

    <h2 id="buttons-disabled">
      禁用状态<a class="anchor-link" aria-label="Link to this section: 禁用状态" href="#buttons-disabled"> </a>
    </h2>
    <p>
      通过在任何 <code>&lt;button&gt;</code> 元素中添加
      <code>disabled</code>
      布尔属性，可以使按钮看起来处于非活动状态。禁用状态的按钮会应用
      <code>pointer-events: none</code>，从而防止悬停和活动状态触发。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <button type="button" class="btn btn-primary" disabled>Primary button</button>
          <button type="button" class="btn btn-secondary" disabled>Button</button>
          <button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
          <button type="button" class="btn btn-outline-secondary" disabled>Button</button>
        </div>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>
    <p>使用 <code>&lt;a&gt;</code> 元素的禁用按钮的行为略有不同：</p>
    <ul class="docs-content-list">
      <li>
        <code>&lt;a&gt;</code> 不支持 <code>disabled</code> 属性，因此您必须添加
        <code>.disabled</code> 类以使其在视觉上显示为禁用状态。
      </li>
      <li>
        包含了一些面向未来的样式，用于禁用锚点按钮上的所有
        <code>pointer-events</code>。
      </li>
      <li>
        使用 <code>&lt;a&gt;</code> 标签的禁用按钮应包含
        <code>aria-disabled="true"</code> 属性，以向辅助技术表明该元素的状态。
      </li>
      <li>使用 <code>&lt;a&gt;</code> 的禁用按钮<em>不应</em>包含 <code>href</code> 属性。</li>
    </ul>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
          <a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
        </div>
      </div>
      <code-highlight type="html" :code="disabled1Code" label="html" />
    </div>
    <h3>链接功能注意事项</h3>
    <p>
      为了处理那些需要保留 <code>href</code> 属性但在链接处于禁用状态时的情况，<code>.disabled</code> 类使用
      <code>pointer-events: none</code> 来尝试阻止 <code>&lt;a&gt;</code> 标签的链接功能。请注意，此 CSS 属性目前尚未在
      HTML 中标准化，但所有现代浏览器都支持它。此外，即使某些浏览器支持
      <code>pointer-events: none</code
      >，键盘导航也不会受到影响，这意味着视力正常的键盘用户和使用辅助技术的用户仍能激活这些链接。因此，为了安全起见，除了
      <code>aria-disabled="true"</code> 外，还应在这些链接上添加
      <code>tabindex="-1"</code> 属性以防止它们获得键盘焦点，并使用自定义 JavaScript 全面禁用其功能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
          <a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
        </div>
      </div>
      <code-highlight type="html" :code="disabled2Code" label="html" />
    </div>

    <h2 id="buttons-block">
      块级按钮<a class="anchor-link" aria-label="Link to this section: 块级按钮" href="#buttons-block"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Button</button>
          <button class="btn btn-primary" type="button">Button</button>
        </div>
        <hr />
        <div class="d-grid gap-2 d-md-flex">
          <button class="btn btn-primary" type="button">Button</button>
          <button class="btn btn-primary" type="button">Button</button>
        </div>
        <hr />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button">Button</button>
          <button class="btn btn-primary" type="button">Button</button>
        </div>
        <hr />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">Button</button>
          <button class="btn btn-primary" type="button">Button</button>
        </div>
      </div>
      <code-highlight type="html" :code="blockCode" label="html" />
    </div>

    <h2 id="buttons-loading">
      加载按钮<a class="anchor-link" aria-label="Link to this section: 加载按钮" href="#buttons-loading"> </a>
    </h2>
    <p>
      在按钮内部使用加载指示器来表示某个操作正在处理中或正在进行中。您还可以将加载指示器元素中的文字替换掉，并根据需要使用按钮上的文字。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
            <span role="status">Loading...</span>
          </button>
        </div>
        <hr />
        <div class="hstack-3">
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status"> Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
            <span role="status">Loading...</span>
          </button>
        </div>
      </div>
      <code-highlight type="html" :code="loadingCode" label="html" />
    </div>

    <h2 id="buttons-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#buttons-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，按钮现在在
      <code>.btn</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass 设置的，因此
      Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_buttons.scss" />
  </div>
</template>

<script setup>
const baseCode = `<button type="button" class="btn">Base class</button>`;

const variantsCode = `<div class="hstack-3 flex-wrap">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
</div>`;

const tagCode = `<div class="hstack-3 flex-wrap">
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">
</div>`;

const outlineCode = `<div class="hstack-3 flex-wrap">
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
</div>`;

const sizeCode = `<div class="hstack-3">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>
</div>
<hr/>
<div class="hstack-3">
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
    <button type="button" class="btn btn-secondary btn-sm">Small button</button>
</div>
<hr/>
<div class="hstack-3">
    <button type="button" class="btn btn-primary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
    Custom button
    </button>
</div>`;

const disabledCode = `<div class="hstack-3">
    <button type="button" class="btn btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary" disabled>Button</button>
    <button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-outline-secondary" disabled>Button</button>
</div>`;

const disabled1Code = `<div class="hstack-3">
    <a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
    <a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
</div>`;

const disabled2Code = `<div class="hstack-3">
    <a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
    <a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
</div>`;

const blockCode = `<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
<hr/>
<div class="d-grid gap-2 d-md-flex">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
<hr/>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>
<hr/>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>`;

const loadingCode = `<div class="hstack-3">
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span class="visually-hidden" role="status">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button>
</div>
<hr />
<div class="hstack-3">
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    <span class="visually-hidden" role="status"> Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button>
</div>`;

const css1Code = `--#{$prefix}btn-padding-x: #{$btn-padding-x};
--#{$prefix}btn-padding-y: #{$btn-padding-y};
--#{$prefix}btn-font-family: #{$btn-font-family};
@include rfs($btn-font-size, --#{$prefix}btn-font-size);
--#{$prefix}btn-font-weight: #{$btn-font-weight};
--#{$prefix}btn-line-height: #{$btn-line-height};
--#{$prefix}btn-color: #{$btn-color};
--#{$prefix}btn-bg: transparent;
--#{$prefix}btn-border-width: #{$btn-border-width};
--#{$prefix}btn-border-color: transparent;
--#{$prefix}btn-border-radius: #{$btn-border-radius};
--#{$prefix}btn-hover-border-color: transparent;
--#{$prefix}btn-box-shadow: #{$btn-box-shadow};
--#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
--#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);`;
</script>
