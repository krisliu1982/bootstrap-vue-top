<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-ratio">
      <a href="#ratio-about">使用说明</a>
      <a href="#ratio-example">示例</a>
      <a href="#ratio-aspect">宽高比</a>
      <a href="#ratio-custom">自定义</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-ratio" class="docs-content">
    <h1>Ratio 比例</h1>
    <p class="fs-4 fw-light">
      利用生成的伪元素，可以让你的元素保持您所选择的特定比例。非常适合根据父元素的宽度来灵活处理视频或幻灯片嵌入内容。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/ratio/" target="_blank">Boostrap Ratio</a>
    </p>

    <h2 id="ratio-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#ratio-about"> </a>
    </h2>
    <p>
      使用比例辅助工具来管理外部内容（如 <code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;video&gt;</code> 和
      <code>&lt;object&gt;</code>）的纵横比。这些辅助工具也可应用于任何标准的 HTML 子元素（例如，<code>&lt;div&gt;</code> 或
      <code>&lt;img&gt;</code>）。样式会直接从父级的 <code>.ratio</code> 类应用到子元素上。
    </p>
    <p class="text-bg-info"><strong>温馨提示！</strong> 您无需在 <code>&lt;iframe&gt;</code> 元素中添加 <code>frameborder="0"</code>
      属性，因为我们会在 <a href="https://getbootstrap.com/docs/5.3/content/reboot" target="_blank">Reboot</a> 中为您进行相应的设置。</p>

    <h2 id="ratio-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#ratio-example"></a>
    </h2>
    <p>
      将任何嵌入内容（例如 <code>&lt;iframe&gt;</code> ）包裹在一个带有 <code>.ratio</code> 和纵横比类的父元素中。由于我们采用了通用选择器
      <code>.ratio &gt; *</code>，其直接子元素的大小会自动调整。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="ratio ratio-16x9">
          <iframe src="https://getbootstrap.com/" title="bootstrap"></iframe>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="ratio-aspect">
      宽高比<a class="anchor-link" aria-label="Link to this section: 宽高比" href="#ratio-aspect"></a>
    </h2>
    <p>可以通过修饰符类来自定义纵横比。默认情况下，提供了以下纵横比类：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <div class="ratio ratio-1x1" style="width:150px;">
            <div class="border p-3">1x1</div>
          </div>
          <div class="ratio ratio-4x3" style="width:150px;">
            <div class="border p-3">4x3</div>
          </div>
          <div class="ratio ratio-16x9" style="width:150px;">
            <div class="border p-3">16x9</div>
          </div>
          <div class="ratio ratio-21x9" style="width:150px;">
            <div class="border p-3">21x9</div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="aspectCode" label="html" />
    </div>

    <h2 id="ratio-custom">
      自定义<a class="anchor-link" aria-label="Link to this section: 自定义" href="#ratio-custom"></a>
    </h2>
    <p>每个 <code>.ratio-*</code> 类在选择器中都包含一个 CSS 自定义属性（或 CSS 变量）。您可以通过简单的数学运算来覆盖这个 CSS 变量，从而动态地创建自定义的纵横比。</p>
    <p>例如，若要设置为 2:1 的纵横比，则在 <code>.ratio</code> 元素中设置 <code>--bs-aspect-ratio: 50%</code> 。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="ratio" style="--bs-aspect-ratio: 50%;width:150px;">
          <div class="border p-3">2x1</div>
        </div>
      </div>
      <code-highlight type="html" :code="customCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const exampleCode = `
<div class="ratio ratio-16x9">
  <iframe src="https://getbootstrap.com/" title="bootstrap"></iframe>
</div>`;

const aspectCode = `
<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>`;

const customCode = `
<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>`;
</script>
