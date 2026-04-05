<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-object-fit">
      <a href="#object-fit-work">工作方式</a>
      <a href="#object-fit-example">示例</a>
      <a href="#object-fit-responsive">响应性</a>
      <a href="#object-fit-video">视频</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-object-fit" class="docs-content">
    <h1>Object fit 对象拟合</h1>
    <p class="fs-4 fw-light">
      使用“对象拟合”工具来调整被替换元素（如 <code>&lt;img&gt;</code> 或
      <code>&lt;video&gt;</code> 等）的内容应如何根据其容器进行调整以实现适配。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/object-fit/" target="_blank">Boostrap Object fit</a>
    </p>

    <h2 id="object-fit-work">
      工作方式<a class="anchor-link" aria-label="Link to this section: 工作方式" href="#object-fit-work"> </a>
    </h2>
    <p>
      通过我们的响应式 <code>object-fit</code> 实用类来更改
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank"
        ><code>object-fit</code> 属性</a
      >
      的值。此属性能让内容以多种方式填充父容器，例如保持纵横比或拉伸以尽可能占据更多空间。
    </p>
    <p>
      对于 <code>object-fit</code> 的值，其对应的类名采用的格式为 <code>.object-fit-{value}</code> 。可供选择的值有：
    </p>
    <ul class="docs-content-list">
      <li><code>contain</code></li>
      <li><code>cover</code></li>
      <li><code>fill</code></li>
      <li><code>scale</code> (for scale-down)</li>
      <li><code>none</code></li>
    </ul>

    <h2 id="object-fit-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#object-fit-example"> </a>
    </h2>
    <p>
      将 <code>object-fit-{值}</code> 类添加到
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element" target="_blank">replaced element</a>
      上：
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <img
            alt="Placeholder: Object fit contain"
            class="docs-placeholder-img object-fit-contain border rounded"
            height="120"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EObject%20fit%20contain%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Object fit cover"
            class="docs-placeholder-img object-fit-cover border rounded"
            height="120"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EObject%20fit%20cover%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Object fit fill"
            class="docs-placeholder-img object-fit-fill border rounded"
            height="120"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EObject%20fit%20fill%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Object fit scale down"
            class="docs-placeholder-img object-fit-scale border rounded"
            height="120"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EObject%20fit%20scale%20down%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Object fit none"
            class="docs-placeholder-img object-fit-none border rounded"
            height="120"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EObject%20fit%20none%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="object-fit-responsive">
      响应性<a class="anchor-link" aria-label="Link to this section: 响应性" href="#object-fit-responsive"> </a>
    </h2>
    <p>
      对于每个“object-fit”值，还存在相应的响应式变体，其格式为
      <code>.object-fit-{breakpoint}-{value}</code
      >，对应的断点缩写有：<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和
      <code>xxl</code>。您可以根据需要将多个类组合使用以实现不同的效果。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <img
            alt="Placeholder: Contain on sm"
            class="docs-placeholder-img object-fit-sm-contain border rounded"
            height="80"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EContain%20on%20sm%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Contain on md"
            class="docs-placeholder-img object-fit-md-contain border rounded"
            height="80"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EContain%20on%20md%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Contain on lg"
            class="docs-placeholder-img object-fit-lg-contain border rounded"
            height="80"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EContain%20on%20lg%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Contain on xl"
            class="docs-placeholder-img object-fit-xl-contain border rounded"
            height="80"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EContain%20on%20xl%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
          <img
            alt="Placeholder: Contain on xxl"
            class="docs-placeholder-img object-fit-xxl-contain border rounded"
            height="80"
            src="data:image/svg+xml,%3Csvg%20style%3D'font-size%3A%201.125rem%3B%20font-family%3Asystem-ui%2C-apple-system%2C%22Segoe%20UI%22%2CRoboto%2C%22Helvetica%20Neue%22%2C%22Noto%20Sans%22%2C%22Liberation%20Sans%22%2CArial%2Csans-serif%2C%22Apple%20Color%20Emoji%22%2C%22Segoe%20UI%20Emoji%22%2C%22Segoe%20UI%20Symbol%22%2C%22Noto%20Color%20Emoji%22%3B%20-webkit-user-select%3A%20none%3B%20-moz-user-select%3A%20none%3B%20user-select%3A%20none%3B%20text-anchor%3A%20middle%3B'%20width%3D'200'%20height%3D'200'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Ctitle%3EPlaceholder%3C%2Ftitle%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23868e96'%3E%3C%2Frect%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20fill%3D'%23dee2e6'%20dy%3D'.3em'%3EContain%20on%20xxl%3C%2Ftext%3E%3C%2Fsvg%3E"
            width="140"
          />
        </div>
      </div>
      <code-highlight type="html" :code="responsiveCode" label="html" />
    </div>

    <h2 id="object-fit-video">
      视频<a class="anchor-link" aria-label="Link to this section: 视频" href="#object-fit-video"> </a>
    </h2>
    <p>
      <code>.object-fit-{value}</code> 和响应式的 <code>.object-fit-{breakpoint}-{value}</code> 样式也适用于
      <code>&lt;video&gt;</code> 元素。
    </p>
    <code-highlight type="html" :code="videoCode" label="html" />
  </div>
</template>

<script setup>
const exampleCode = `
<img src="..." class="object-fit-contain border rounded" alt="...">
<img src="..." class="object-fit-cover border rounded" alt="...">
<img src="..." class="object-fit-fill border rounded" alt="...">
<img src="..." class="object-fit-scale border rounded" alt="...">
<img src="..." class="object-fit-none border rounded" alt="...">`;

const responsiveCode = `
<img src="..." class="object-fit-sm-contain border rounded" alt="...">
<img src="..." class="object-fit-md-contain border rounded" alt="...">
<img src="..." class="object-fit-lg-contain border rounded" alt="...">
<img src="..." class="object-fit-xl-contain border rounded" alt="...">
<img src="..." class="object-fit-xxl-contain border rounded" alt="...">`;

const videoCode = `
<video src="..." class="object-fit-contain" autoplay></video>
<video src="..." class="object-fit-cover" autoplay></video>
<video src="..." class="object-fit-fill" autoplay></video>
<video src="..." class="object-fit-scale" autoplay></video>
<video src="..." class="object-fit-none" autoplay></video>`;
</script>
