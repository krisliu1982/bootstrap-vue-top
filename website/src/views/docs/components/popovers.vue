<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-popovers">
      <a href="#popovers-about">使用说明</a>
      <a href="#popovers-example">示例</a>
      <a href="#popovers-trigger">触发方式</a>
      <a href="#popovers-custom">自定义样式</a>
      <a href="#popovers-html">HTML内容</a>
      <a href="#popovers-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-popovers" class="docs-content">
    <h1>Popovers 弹出框</h1>
    <p class="fs-4 fw-light">
      使用 <code>v-popover</code> 指令激活弹出框。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/popovers/" target="_blank">Bootstrap Popovers</a>
    </p>

    <h2 id="popovers-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#popovers-about"> </a>
    </h2>
    <p>
      <strong>确保提示框易于通过键盘和辅助技术进行操作</strong>，仅将它们添加到传统上可被键盘聚焦且具有交互性的 HTML
      元素中（例如链接或表单控件）。虽然可以通过添加 <code>tabindex="0"</code> 来使其他 HTML
      元素具有可聚焦性，但这可能会在非交互性元素上为键盘用户创建令人烦恼和混乱的焦点位置，并且目前大多数辅助技术在这种情况下的也不会播报提示框。此外，不要仅仅依靠
      <code>hover</code>
      作为触发提示框的条件，因为这会使键盘用户无法触发提示框。
    </p>
    <p>
      在使用
      <code>html</code>
      内容时，<strong>请避免添加过多内容</strong>。一旦弹出框显示出来，其内容会通过
      <code>aria-describedby</code>
      属性与触发元素关联起来，这会导致弹出框的所有内容都会作为一条不间断的长串信息向辅助技术用户进行播报。
    </p>
    <p>
      弹出框不会管理键盘焦点的顺序，并且其在 DOM
      中的位置可能是随机的，因此在添加交互元素（如表单或链接）时要格外小心，因为这可能会导致焦点顺序不合理，或者使键盘用户完全无法访问弹出框的内容。如果必须使用这些元素，可以考虑使用
      <code>Modal</code> 模态框来替代。
    </p>

    <h2 id="popovers-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#popovers-example"> </a>
    </h2>
    <p>标题通过 <code>data-bs-title</code> 进行设置，而内容则通过 <code>data-bs-content</code> 进行设置。</p>
    <p class="text-bg-warning">
      您可以在 HTML 中随意使用 <code>title</code> 或 <code>data-bs-title</code>。当使用
      <code>title</code> 时，当元素被渲染时，Popper 会自动将其替换为 <code>data-bs-title</code> 。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-title="Popover title"
            data-bs-content="And here’s some amazing content. It’s very engaging. Right?"
          >
            Toggle popover
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-content="And here’s some amazing content. It’s very engaging. Right?"
          >
            Toggle popover (无标题)
          </button>
        </div>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="popovers-trigger">
      触发方式<a class="anchor-link" aria-label="Link to this section: 触发方式" href="#popovers-trigger"> </a>
    </h2>
    <p>
      触发方式通过 <code>data-bs-trigger</code> 进行设置，可以选择: <code>click | hover | focus</code>。默认为
      <code>click</code> 触发方式。
    </p>
    <p class="text-bg-warning">
      <strong>下次点击后自动关闭(focus)需要特定的 HTML 代码，以实现跨浏览器和跨平台的正常功能。</strong>
      只能使用 <code>&lt;a&gt;</code> 元素，不能使用 <code>&lt;button&gt;</code> 元素，并且必须包含
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex" target="_blank"
        ><code>tabindex</code></a
      >
      属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-trigger="click"
            data-bs-title="Popover title"
            data-bs-content="And here’s some amazing content. It’s very engaging. Right?"
          >
            Click trigger
          </button>

          <button
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-trigger="hover"
            data-bs-title="Popover title"
            data-bs-content="And here’s some amazing content. It’s very engaging. Right?"
          >
            Hover trigger
          </button>

          <a
            tabindex="0"
            role="button"
            class="btn btn-primary"
            v-popover
            data-bs-trigger="focus"
            data-bs-title="Popover title"
            data-bs-content="And here’s some amazing content. It’s very engaging. Right?"
            >Focus trigger</a
          >
        </div>
      </div>
      <code-highlight type="vue" :code="triggerCode" label="vue" />
    </div>

    <h2 id="popovers-custom">
      自定义样式<a class="anchor-link" aria-label="Link to this section: 自定义样式" href="#popovers-custom"> </a>
    </h2>
    <p>
      您可以使用
      <a href="#popovers-css">CSS 变量</a> 来自定义样式的外观。我们通过
      <code>data-bs-custom-class="custom-popover"</code>
      设置了一个自定义类，以限定我们的自定义外观，并利用它来覆盖一些本地的 CSS 变量。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button
          type="button"
          class="btn btn-primary"
          v-popover
          data-bs-custom-class="custom-popover"
          data-bs-title="Custom popover"
          data-bs-content="This popover is themed via CSS variables."
        >
          Custom popover
        </button>
      </div>
      <code-highlight type="vue" :code="customCode" label="vue" />
    </div>

    <h2 id="popovers-html">
      HTML内容<a class="anchor-link" aria-label="Link to this section: HTML内容" href="#popovers-html"> </a>
    </h2>
    <p>可以通过设置 <code>data-bs-html</code> 为 <code>true</code>。插入 HTML 标签内容。</p>
    <p class="text-bg-danger">
      在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。永远不要使用用户提供的 HTML 内容。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <button
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-html="true"
            :data-bs-title="htmlTitle"
            :data-bs-content="htmlContent"
          >
            Content html
          </button>

          <button
            v-if="timeoutContent !== null"
            type="button"
            class="btn btn-primary"
            v-popover
            data-bs-html="true"
            data-bs-custom-class="custom-popover"
            data-bs-title="Detail title"
            :data-bs-content="timeoutContent"
          >
            Lazy Html
          </button>
        </div>
      </div>
      <code-highlight type="vue" :code="htmlCode" label="vue" />
    </div>

    <h2 id="popovers-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#popovers-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，下拉菜单现在在
      <code>.popover</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_popover.scss" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const htmlTitle = `
<u>Popover title</u>`;
const htmlContent = `
<p class="text-danger">And here’s some amazing content. It’s very engaging. Right?</p>
  <p class="text-succes">And here’s some amazing content. It’s very engaging. Right?</p>`;

const timeoutContent = ref(null);
onMounted(() => {
  setTimeout(() => {
    const data = {
      code: '10001',
      name: 'kris',
      addr: 'Honghu City, Hubei Province, China'
    };
    timeoutContent.value = `

    <dl class="row">
      <dt class="col-sm-3">Code</dt>
      <dd class="col-sm-9">${data.code}</dd>

      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">${data.name}</dd>

      <dt class="col-sm-3">Address</dt>
      <dd class="col-sm-9">${data.addr}</dd>
    </dl>`;
  }, 300);
});

const exampleCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" 
    v-popover 
    data-bs-title="Popover title" 
    data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
      Toggle popover
    </button>

    <button type="button" class="btn btn-primary" 
    v-popover 
    data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
      Toggle popover (无标题)
    </button>
  </div>
</template>`;

const triggerCode = `
<template>
  <button type="button" class="btn btn-primary" 
    v-popover
    data-bs-trigger="click"  
    data-bs-title="Popover title" 
    data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
    Click trigger
  </button>

  <button type="button" class="btn btn-primary" 
    v-popover 
    data-bs-trigger="hover" 
    data-bs-title="Popover title"
    data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
    Hover trigger
  </button>

  <a tabindex="0" role="button" class="btn btn-primary" 
    v-popover
    data-bs-trigger="focus"
    data-bs-title="Popover title"
    data-bs-content="And here’s some amazing content. It’s very engaging. Right?">
    Focus trigger
  </a>
</template>`;

const htmlCode = `
<template>
  <div class="hstack gap-3">
    <button type="button" class="btn btn-primary" 
      v-popover 
      data-bs-html="true"
      :data-bs-title="htmlTitle"
      :data-bs-content='htmlContent'>
      Content popover
    </button>

    <button type="button" class="btn btn-primary" 
      v-if="timeoutContent !== null"
      v-popover
      data-bs-html="true"
      data-bs-custom-class="custom-popover" 
      data-bs-title="Detail title" 
      :data-bs-content="timeoutContent">
      Lazy Content
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const htmlTitle = \`<u>Popover title</u>\`
const htmlContent = \`
  <p class="text-danger">And here’s some amazing content. It’s very engaging. Right?</p>
  <p class="text-succes">And here’s some amazing content. It’s very engaging. Right?</p>\`

const timeoutContent = ref(null);
onMounted(() => {
  setTimeout(() => {
    const data = { code: '10001', name: 'kris', addr: 'Honghu City, Hubei Province, China' };
    timeoutContent.value = \`
    <dl class="row">
      <dt class="col-sm-3">Code</dt>
      <dd class="col-sm-9">\${data.code}</dd>

      <dt class="col-sm-3">Name</dt>
      <dd class="col-sm-9">\${data.name}</dd>

      <dt class="col-sm-3">Address</dt>
      <dd class="col-sm-9">\${data.addr}</dd>
    </dl>\`
  }, 300)
})
<\/script>`;

const customCode = `
<template>
  <button type="button" class="btn btn-primary"
    v-popover
    data-bs-custom-class="custom-popover" 
    data-bs-title="Custom popover"
    data-bs-content="This popover is themed via CSS variables.">
    Custom popover
  </button>
</template>

<style lang="css">
.custom-popover {
  --bs-popover-max-width: 400px;
  --bs-popover-border-color: var(--bs-primary);
  --bs-popover-header-bg: var(--bs-primary);
  --bs-popover-header-color: var(--bs-white);
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: .5rem;
}

.custom-popover>.popover-body {
  max-height: 30vh;
  overflow-y: auto;
}
</style>`;

const css1Code = `
--#{$prefix}popover-zindex: #{$zindex-popover};
--#{$prefix}popover-max-width: #{$popover-max-width};
@include rfs($popover-font-size, --#{$prefix}popover-font-size);
--#{$prefix}popover-bg: #{$popover-bg};
--#{$prefix}popover-border-width: #{$popover-border-width};
--#{$prefix}popover-border-color: #{$popover-border-color};
--#{$prefix}popover-border-radius: #{$popover-border-radius};
--#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};
--#{$prefix}popover-box-shadow: #{$popover-box-shadow};
--#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};
--#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};
@include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);
--#{$prefix}popover-header-color: #{$popover-header-color};
--#{$prefix}popover-header-bg: #{$popover-header-bg};
--#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};
--#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};
--#{$prefix}popover-body-color: #{$popover-body-color};
--#{$prefix}popover-arrow-width: #{$popover-arrow-width};
--#{$prefix}popover-arrow-height: #{$popover-arrow-height};
--#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);`;
</script>

<style lang="css">
.custom-popover {
  --bs-popover-max-width: 400px;
  --bs-popover-border-color: var(--bs-primary);
  --bs-popover-header-bg: var(--bs-primary);
  --bs-popover-header-color: var(--bs-white);
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: 0.5rem;
}

.custom-popover > .popover-body {
  max-height: 30vh;
  overflow-y: auto;
}
</style>
