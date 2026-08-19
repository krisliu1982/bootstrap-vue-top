<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-badge">
      <a href="#badge-example">示例</a>
      <a href="#badge-bg">背景色</a>
      <a href="#badge-pill">胶囊徽章</a>
      <a href="#badge-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-badge" class="docs-content">
    <h1>Badge 徽章</h1>
    <p class="fs-4 fw-light">
      徽章的文档和示例，我们的小计数和标签组件。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/badge/" target="_blank">Bootstrap Badge</a>
    </p>

    <h2 id="badge-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#badge-example"> </a>
    </h2>
    <p>
      徽章通过使用相对字体大小和
      <code>em</code>
      单位来缩放，以匹配其直接父元素的大小。从v5版本开始，徽章不再为链接提供焦点或悬停样式。
    </p>
    <h3>Headings</h3>
    <div class="docs-example">
      <div class="docs-example-data">
        <h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
        <h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
        <h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
        <h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
        <h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
        <h6>Example heading <span class="badge text-bg-secondary">New</span></h6>
      </div>
      <code-highlight type="html" :code="example1Code" label="html" />
    </div>
    <h3>Buttons</h3>
    <p>徽章可以作为链接或按钮的一部分，用来提供计数功能。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge text-bg-secondary">4</span>
        </button>
      </div>
      <code-highlight type="html" :code="example2Code" label="html" />
    </div>
    <p>
      请注意，根据使用方式的不同，徽章可能会让使用屏幕阅读器和类似辅助技术的用户感到困惑。虽然徽章的样式提供了关于其用途的视觉提示，但这些用户只会看到徽章的内容。根据具体情况，这些徽章可能看起来像是句子、链接或按钮末尾随机添加的单词或数字。
    </p>
    <p>
      除非上下文清晰（如“通知”示例，其中“4”被理解为通知的数量），否则应考虑添加额外的上下文信息，并使用视觉隐藏的方式显示附加文本。
    </p>
    <h3>Positioned</h3>
    <p>使用工具修改 <code>.badge</code> 并将其放置在链接或按钮的角落。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <code-highlight type="html" :code="example3Code" label="html" />
    </div>
    <p>
      您还可以使用更多不带计数功能的实用程序来替换
      <code>.badge</code> 类，以获得更通用的指示器。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary position-relative">
          Profile
          <span
            class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
          >
            <span class="visually-hidden">New alerts</span>
          </span>
        </button>
      </div>
      <code-highlight type="html" :code="example4Code" label="html" />
    </div>

    <h2 id="badge-bg">背景色<a class="anchor-link" aria-label="Link to this section: 背景色" href="#badge-bg"> </a></h2>
    <p>
      使用我们的
      <a href="https://getbootstrap.com/docs/5.3/helpers/color-background" target="_blank"
        >`.text-bg-{color}`辅助选择器</a
      >
      来设置与前景 <code>color</code> 形成对比的 <code>background-color</code>。以前，需要手动将你选择的
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors" target="_blank"><code>.text-{color}</code></a>
      和
      <a href="https://getbootstrap.com/docs/5.3/utilities/background" target="_blank"><code>.bg-{color}</code></a>
      实用程序配对以进行样式设置，如果你愿意，仍然可以使用这种方式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <span class="badge text-bg-primary">Primary</span>
          <span class="badge text-bg-secondary">Secondary</span>
          <span class="badge text-bg-success">Success</span>
          <span class="badge text-bg-danger">Danger</span>
          <span class="badge text-bg-warning">Warning</span>
          <span class="badge text-bg-info">Info</span>
          <span class="badge text-bg-light">Light</span>
          <span class="badge text-bg-dark">Dark</span>
        </div>
      </div>
      <code-highlight type="html" :code="bgCode" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍提示：</strong
      >仅通过颜色来添加含义只能提供视觉指示，而无法传达给使用屏幕阅读器等辅助技术的用户。请确保含义可以从内容本身（例如，具有
      <a href="/docs/5.3/getting-started/accessibility/#color-contrast" target="_blank"><em>足够</em>的颜色对比</a>
      的可见文本）中明显看出，或者通过其他方式（如使用
      <code>.visually-hidden</code> 类隐藏的额外文本）包含在内。
    </p>

    <h2 id="badge-pill">
      胶囊徽章<a class="anchor-link" aria-label="Link to this section: 胶囊徽章" href="#badge-pill"> </a>
    </h2>
    <p>使用 <code>.rounded-pill</code> 实用类可以使徽章更加圆润，具有更大的 <code>border-radius</code>。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <span class="badge rounded-pill text-bg-primary">Primary</span>
          <span class="badge rounded-pill text-bg-secondary">Secondary</span>
          <span class="badge rounded-pill text-bg-success">Success</span>
          <span class="badge rounded-pill text-bg-danger">Danger</span>
          <span class="badge rounded-pill text-bg-warning">Warning</span>
          <span class="badge rounded-pill text-bg-info">Info</span>
          <span class="badge rounded-pill text-bg-light">Light</span>
          <span class="badge rounded-pill text-bg-dark">Dark</span>
        </div>
      </div>
      <code-highlight type="html" :code="pillCode" label="html" />
    </div>

    <h2 id="badge-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#badge-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，徽章现在在
      <code>.badge</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_badge.scss" />
  </div>
</template>

<script setup>
const example1Code = `
<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
<h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
<h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
<h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
<h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
<h6>Example heading <span class="badge text-bg-secondary">New</span></h6>`;

const example2Code = `
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>`;

const example3Code = `
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`;

const example4Code = `
<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>`;

const bgCode = `
<div class="hstack gap-3 flex-wrap">
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
</div>`;

const pillCode = `
<div class="hstack gap-3 flex-wrap">
    <span class="badge rounded-pill text-bg-primary">Primary</span>
    <span class="badge rounded-pill text-bg-secondary">Secondary</span>
    <span class="badge rounded-pill text-bg-success">Success</span>
    <span class="badge rounded-pill text-bg-danger">Danger</span>
    <span class="badge rounded-pill text-bg-warning">Warning</span>
    <span class="badge rounded-pill text-bg-info">Info</span>
    <span class="badge rounded-pill text-bg-light">Light</span>
    <span class="badge rounded-pill text-bg-dark">Dark</span>
</div>`;

const css1Code = `
--#{$prefix}badge-padding-x: #{$badge-padding-x};
--#{$prefix}badge-padding-y: #{$badge-padding-y};
@include rfs($badge-font-size, --#{$prefix}badge-font-size);
--#{$prefix}badge-font-weight: #{$badge-font-weight};
--#{$prefix}badge-color: #{$badge-color};
--#{$prefix}badge-border-radius: #{$badge-border-radius};`;
</script>
