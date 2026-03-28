<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-alerts">
      <a href="#alerts-example">示例</a>
      <a href="#alerts-link">链接颜色</a>
      <a href="#alerts-att">附加内容</a>
      <a href="#alerts-icon">图标</a>
      <a href="#alerts-dismissing">可关闭</a>
      <a href="#alerts-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-alerts" class="docs-content">
    <h1>Alerts 警示</h1>
    <p class="fs-4 fw-light">
      利用这少量但灵活多样的提示信息，为用户的常见操作提供相应的上下文反馈信息。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank">Boostrap Alerts</a>
    </p>

    <h2 id="alerts-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#alerts-example"> </a>
    </h2>
    <p>
      “警示”可用于任何长度的文本，以及一个可选的关闭按钮。为了确保样式正确，请使用八个<strong>必需</strong>的上下文类之一（例如，<code>.alert-success</code>）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
        <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
        <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
        <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
        <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
        <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
        <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
        <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>
    <p class="text-bg-info">
      <strong>无障碍使用提示：</strong>
      使用颜色来传达意义仅仅是一种视觉上的提示，这对于使用辅助技术（如屏幕阅读器）的用户来说是无法获取到的。请确保其含义可以从内容本身中清晰地体现出来（例如，带有足够颜色对比度的可见文本，链接为<a
        href="https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast"
        target="_blank"
        ><em>足够的颜色对比度</em></a
      >），或者通过其他方式予以说明，比如使用带有<code>. visually-hidden</code>类的隐藏文本。
    </p>

    <h2 id="alerts-link">
      链接颜色<a class="anchor-link" aria-label="Link to this section: 链接颜色" href="#alerts-link"> </a>
    </h2>
    <p>
      使用
      <code>.alert-link</code>
      实用类，可以在任何警示中快速提供匹配颜色的链接。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="alert alert-primary" role="alert">
          A simple primary alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-secondary" role="alert">
          A simple secondary alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-success" role="alert">
          A simple success alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-danger" role="alert">
          A simple danger alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-warning" role="alert">
          A simple warning alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-info" role="alert">
          A simple info alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-light" role="alert">
          A simple light alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
        <div class="alert alert-dark" role="alert">
          A simple dark alert with
          <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
      </div>
      <code-highlight type="html" :code="linkCode" label="html" />
    </div>

    <h2 id="alerts-att">
      附加内容<a class="anchor-link" aria-label="Link to this section: 附加内容" href="#alerts-att"> </a>
    </h2>
    <p>警示还可以包含其他HTML元素，如标题、段落和分隔符。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
      </div>
      <code-highlight type="html" :code="attCode" label="html" />
    </div>

    <h2 id="alerts-icon">
      图标<a class="anchor-link" aria-label="Link to this section: 图标" href="#alerts-icon"> </a>
    </h2>
    <p>
      同样，您可以使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex" target="_blank">flexbox 工具</a>
      和
      <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a>
      来创建带有图标的警示。根据您的图标和内容，您可能需要添加更多工具或自定义样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="alert alert-primary d-flex align-items-center" role="alert">
          <bi-info-circle-fill class="flex-shrink-0 me-2" />
          <div>An example alert with an icon</div>
        </div>
      </div>
      <code-highlight type="html" :code="iconCode" label="html" />
    </div>

    <h2 id="alerts-dismissing">
      可关闭<a class="anchor-link" aria-label="Link to this section: 可关闭" href="#alerts-dismissing"> </a>
    </h2>
    <p>使用 <code>v-alert</code> 指令，可以在行内关闭任何 alert。方法如下：</p>
    <ul class="docs-content-list">
      <li>
        添加一个
        <a href="https://getbootstrap.com/docs/5.3/components/close-button" target="_blank">关闭按钮</a>
        和
        <code>.alert-dismissible</code>
        类，该类会在警示的右侧添加额外的填充，并定位关闭按钮。
      </li>
      <li>
        在关闭按钮上，添加
        <code>data-bs-dismiss="alert"</code> 属性，该属性会触发 <code>v-alert</code> 指令关闭功能。请务必使用
        <code>&lt;button&gt;</code> 元素，以确保在所有设备上都能正常工作。
      </li>
      <li>要在关闭警示时为其设置动画效果，请务必添加 <code>.fade</code> 和 <code>.show</code> 类。</li>
    </ul>
    <div class="docs-example">
      <div class="docs-example-data">
        <div v-alert class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
      <code-highlight type="vue" :code="dismissCode" label="vue" />
    </div>

    <h2 id="alerts-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#alerts-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，Alerts 现在在
      <code>.alert</code> 元素上使用了本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能依然可用。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_alert.scss" />
  </div>
</template>

<script setup>
const exampleCode = `<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>`;

const linkCode = `<div class="alert alert-primary" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-secondary" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-success" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-danger" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-warning" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-info" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-light" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>
<div class="alert alert-dark" role="alert">
  ... <a href="#" class="alert-link">an example link</a> ...
</div>`;

const attCode = `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. ...</p>
  <hr>
  <p class="mb-0">Whenever you need to, ...</p>
</div>`;

const iconCode = `<div class="alert alert-primary d-flex align-items-center" role="alert">
  <bi-info-circle-fill class="flex-shrink-0 me-2" />
  <div>An example alert with an icon</div>
</div>`;

const dismissCode = `<template>
  <div v-alert class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" 
        data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>`;

const css1Code = `--#{$prefix}alert-bg: transparent;
--#{$prefix}alert-padding-x: #{$alert-padding-x};
--#{$prefix}alert-padding-y: #{$alert-padding-y};
--#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};
--#{$prefix}alert-color: inherit;
--#{$prefix}alert-border-color: transparent;
--#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);
--#{$prefix}alert-border-radius: #{$alert-border-radius};
--#{$prefix}alert-link-color: inherit;
`;
</script>
