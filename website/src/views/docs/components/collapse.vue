<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-collapse">
      <a href="#collapse-example">示例</a>
      <a href="#collapse-accessibility">无障碍</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-collapse" class="docs-content">
    <h1>Collapse 折叠</h1>
    <p class="fs-4 fw-light">
      使用 <code>v-collapse</code> 指令激活折叠。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/collapse/" target="_blank">Bootstrap Collapse</a>
    </p>

    <h2 id="collapse-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#collapse-example"> </a>
    </h2>
    <p>点击下方按钮，通过更改类名来显示和隐藏另一个元素：</p>
    <ul class="docs-content-list">
      <li><code>.collapse</code> 用于隐藏内容</li>
      <li>在过渡过程中应用了 <code>.collapsing</code> 样式</li>
      <li><code>.collapse.show</code> 显示内容</li>
    </ul>
    <p>
      通常，我们建议使用带有 <code>data-bs-target</code> 属性的
      <code>&lt;button&gt;</code>。虽然从语义的角度来看并不推荐，但您也可以使用带有 <code>href</code> 属性（以及
      <code>role="button"</code>）的 <code>&lt;a&gt;</code> 链接。在这两种情况下，都需要设置 <code>v-collapse</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="d-inline-flex gap-1">
          <a
            class="btn btn-primary"
            v-collapse
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            class="btn btn-primary"
            type="button"
            v-collapse
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-bs-target
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card">
            <div class="card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="vue" :code="example1Code" label="vue" />
    </div>
    <p>
      折叠插件支持水平折叠。添加
      <code>.collapse-horizontal</code> 修饰类，以转变 <code>width</code>（而非
      <code>height</code>），并在直接子元素上设置 <code>width</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p>
          <button
            class="btn btn-primary"
            type="button"
            v-collapse
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Toggle width collapse
          </button>
        </p>
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card" style="width: 300px">
            <div class="card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
              user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="vue" :code="example2Code" label="vue" />
    </div>

    <h2 id="collapse-accessibility">
      无障碍<a class="anchor-link" aria-label="Link to this section: 无障碍" href="#collapse-accessibility"> </a>
    </h2>
    <p>
      请务必在控制元素中添加 <code>aria-expanded</code>
      属性。此属性可向屏幕阅读器及类似的辅助技术明确传达与该控件绑定的可折叠元素的当前状态。如果可折叠元素默认处于关闭状态，则控件元素上的该属性值应为
      <code>aria-expanded="false"</code>。如果您已使用
      <code>show</code> 类将可折叠元素设置为默认打开状态，则应在控件上设置
      <code>aria-expanded="true"</code>。插件将根据可折叠元素是否已打开或关闭（通过
      JavaScript，或因为用户触发了另一个也与同一可折叠元素绑定的控件元素），自动在控件上切换此属性。如果控件元素的 HTML
      元素不是按钮（例如，<code>&lt;a&gt;</code> 或 <code>&lt;div&gt;</code>），则应在该元素上添加
      <code>role="button"</code> 属性。
    </p>
    <p>
      如果您的控制元素针对的是单个可折叠元素——即
      <code>data-bs-target</code> 属性指向一个 <code>id</code> 选择器——您应在控制元素中添加
      <code>aria-controls</code> 属性，该属性包含可折叠元素的
      <code>id</code>。现代屏幕阅读器和类似的辅助技术利用此属性为用户提供额外的快捷方式，以便直接导航到可折叠元素本身。
    </p>
  </div>
</template>

<script setup>
const example1Code = `
<template>
    <p class="d-inline-flex gap-1">
        <a class="btn btn-primary" v-collapse href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
        </a>
        <button class="btn btn-primary" type="button" v-collapse data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
        </button>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card">
            <div class="card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
            </div>
        </div>
    </div>
</template>`;

const example2Code = `
<template>
    <p>
        <button class="btn btn-primary" type="button" v-collapse data-bs-target="#collapseWidthExample"
            aria-expanded="false" aria-controls="collapseWidthExample">
            Toggle width collapse
        </button>
    </p>
    <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card" style="width: 300px;">
            <div class="card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
            </div>
        </div>
    </div>
</template>`;
</script>
