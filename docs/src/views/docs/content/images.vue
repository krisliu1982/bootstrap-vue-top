<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-img">
      <a href="#img-responsive">响应式图片</a>
      <a href="#img-thumbnail">图片缩略图</a>
      <a href="#img-align">图像对齐</a>
      <a href="#img-picture">Picture</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-img" class="docs-content">
    <h1>Images 图片</h1>
    <p class="fs-4 fw-light">
      提供文档和示例，说明如何通过类为图像设置响应式行为（使其宽度永远不会超过其父元素），并为它们添加轻量级样式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/content/images/" target="_blank">Bootstrap Images</a>
    </p>

    <h2 id="img-responsive">响应式图片<a class="anchor-link" aria-label="Link to this section: 响应式图片" href="#img-responsive"> </a></h2>
    <p>
      Bootstrap 中的图片通过 <code>.img-fluid</code> 实现自适应。这会对图片应用 <code>max-width: 100%;</code> 和
      <code>height: auto;</code>，使其随父元素的宽度而缩放。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <img src="https://picsum.photos/1000/400?random=1" class="img-fluid" alt="..." />
      </div>
      <code-highlight type="html" :code="responsiveCode" label="html" />
    </div>

    <h2 id="img-thumbnail">图片缩略图<a class="anchor-link" aria-label="Link to this section: 图片缩略图" href="#img-thumbnail"> </a></h2>
    <p>
      除了我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/borders" target="_blank">border-radius 工具</a>
      之外，您还可以使用
      <code>.img-thumbnail</code> 为图像赋予一个1px的圆形边框外观。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <img src="https://picsum.photos/200/200?random=1" class="img-thumbnail" alt="..." />
      </div>
      <code-highlight type="html" :code="thumbnailCode" label="html" />
    </div>

    <h2 id="img-align">图像对齐<a class="anchor-link" aria-label="Link to this section: 图像对齐" href="#img-align"> </a></h2>
    <p>
      使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/float" target="_blank">辅助浮动类</a>
      或
      <a href="https://getbootstrap.com/docs/5.3/utilities/text#text-alignment" target="_blank">文本对齐类</a>
      来对齐图像。<code>block</code> 级别的图像可以使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/spacing#horizontal-centering" target="_blank"><code>.mx-auto</code> 边距辅助类</a>
      来居中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="clearfix">
          <img src="https://picsum.photos/200/200?random=1" class="rounded float-start" alt="..." />
          <img src="https://picsum.photos/200/200?random=2" class="rounded float-end" alt="..." />
        </div>
        <hr />

        <img src="https://picsum.photos/200/200?random=3" class="rounded mx-auto d-block" alt="..." />
        <hr />

        <div class="text-center">
          <img src="https://picsum.photos/200/200?random=4" class="rounded" alt="..." />
        </div>
      </div>
      <code-highlight type="html" :code="alignCode" label="html" />
    </div>

    <h2 id="img-picture">Picture<a class="anchor-link" aria-label="Link to this section: Picture" href="#img-picture"> </a></h2>
    <p>
      如果你正在使用 <code>&lt;picture&gt;</code> 元素为特定的 <code>&lt;img&gt;</code> 指定多个 <code>&lt;source&gt;</code> 元素，请确保将
      <code>.img-*</code> 类添加到 <code>&lt;img&gt;</code> 标签上，而不是 <code>&lt;picture&gt;</code> 标签上。
    </p>
    <code-highlight type="html" :code="pictureCode" label="html" />
  </div>
</template>

<script setup>
const responsiveCode = `<img src="https://picsum.photos/1000/400?random=1" class="img-fluid" alt="...">`

const thumbnailCode = `<img src="https://picsum.photos/200/200?random=1" class="img-thumbnail" alt="...">`

const alignCode = `<div class="clearfix">
    <img src="https://picsum.photos/200/200?random=1" class="rounded float-start" alt="...">
    <img src="https://picsum.photos/200/200?random=2" class="rounded float-end" alt="...">
</div>
<hr/>

<img src="https://picsum.photos/200/200?random=3" class="rounded mx-auto d-block" alt="...">
<hr/>

<div class="text-center">
  <img src="https://picsum.photos/200/200?random=4" class="rounded" alt="...">
</div>`

const pictureCode = `<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>`
</script>
