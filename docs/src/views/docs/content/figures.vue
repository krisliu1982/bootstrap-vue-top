<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-figure">
      <a href="#figure-example">示例</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-figure" class="docs-content">
    <h1>Figures 图表区</h1>
    <p class="fs-4 fw-light">
      关于在 Bootstrap 中使用 figure 组件展示相关图像和文本的文档与示例。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/content/figures/" target="_blank">Bootstrap Figures</a>
    </p>

    <h2 id="figure-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#figure-example"> </a>
    </h2>
    <p>
      每当你需要展示一段内容时——比如一张带有可选说明的图片，可以考虑使用
      <code>&lt;figure&gt;</code>。
    </p>
    <p>
      使用附带的 <code>.figure</code>、<code>.figure-img</code> 和 <code>.figure-caption</code> 类为 HTML5 的
      <code>&lt;figure&gt;</code> 和
      <code>&lt;figcaption&gt;</code>
      元素提供一些基本样式。图中的图像没有明确的大小，因此请务必在
      <code>&lt;img&gt;</code> 中添加 <code>.img-fluid</code> 类，以使其具有响应式特性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <figure class="figure">
          <img src="https://picsum.photos/400/300?random=1" class="figure-img img-fluid rounded" alt="..." />
          <figcaption class="figure-caption">A caption for the above image.</figcaption>
        </figure>
      </div>
      <code-highlight type="html" :code="figure1Code" label="html" />
    </div>
    <p>
      使用我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/text#text-alignment" target="_blank">文本工具</a>
      可以轻松对齐图表的标题。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <figure class="figure">
          <img src="https://picsum.photos/400/300?random=2" class="figure-img img-fluid rounded" alt="..." />
          <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
        </figure>
      </div>
      <code-highlight type="html" :code="figure2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const figure1Code = `<figure class="figure">
  <img src="https://picsum.photos/400/300?random=1" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>`;

const figure2Code = `<figure class="figure">
  <img src="https://picsum.photos/400/300?random=2" class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>`;
</script>
