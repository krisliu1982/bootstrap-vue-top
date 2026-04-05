<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-spacing">
      <a href="#spacing-mp">外边距和内边距</a>
      <a href="#spacing-gap">缝隙</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-spacing" class="docs-content">
    <h1>Spacing 间距</h1>
    <p class="fs-4 fw-light">
      Bootstrap 包含了众多简化的响应式边距、内边距和间距的实用类样式，用于调整元素的外观。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/" target="_blank">Boostrap Spacing</a>
    </p>

    <h2 id="spacing-mp">
      外边距和内边距<a class="anchor-link" aria-label="Link to this section: 外边距和内边距" href="#spacing-mp"> </a>
    </h2>
    <p>
      使用简写类为元素或其某一部分的边框设置响应式友好的“边距”或“内边距”值。该功能支持单个属性、所有属性以及垂直和水平属性。类名基于一个默认的 Sass 映射构建，范围从 <code>.25rem</code> 到
      <code>3rem</code> 。
    </p>
    <p>
      适用于所有断点（从 <code>xs</code> 到 <code>xxl</code>）的间距相关样式在其中没有断点缩写。这是因为这些类是从 <code>min-width： 0</code>
      及以上开始应用的，因此不受媒体查询的限制。然而，其余的断点确实包含断点缩写。
    </p>
    <p>这些类的命名采用以下格式：对于 <code>xs</code> 类型，使用 <code>{property}{sides}-{size}</code>；对于
      <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code> 类型，则使用
      <code>{property}{sides}-{breakpoint}-{size}</code> 。</p>
    <p>当 <em>property</em> 属于以下情况之一时：</p>
    <ul class="docs-content-list">
      <li><code>m</code> - for classes that set <code>margin</code></li>
      <li><code>p</code> - for classes that set <code>padding</code></li>
    </ul>
    <p>当 <em>sides</em> 属于以下情况之一时：</p>
    <ul class="docs-content-list">
      <li><code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>
      <li><code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>
      <li><code>s</code> - (start) for classes that set <code>margin-left</code> or <code>padding-left</code> in LTR,
        <code>margin-right</code> or <code>padding-right</code> in RTL</li>
      <li><code>e</code> - (end) for classes that set <code>margin-right</code> or <code>padding-right</code> in LTR,
        <code>margin-left</code> or <code>padding-left</code> in RTL</li>
      <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
      <li><code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>
      <li>blank - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>
    </ul>
    <p>当 <em>size</em> 属于以下情况之一时：</p>
    <ul class="docs-content-list">
      <li><code>0</code> - for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to
        <code>0</code></li>
      <li><code>1</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to
        <code>$spacer * .25</code></li>
      <li><code>2</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to
        <code>$spacer * .5</code></li>
      <li><code>3</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to
        <code>$spacer</code></li>
      <li><code>4</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to
        <code>$spacer * 1.5</code></li>
      <li><code>5</code> - (by default) for classes that set the <code>margin</code> or <code>padding</code> to
        <code>$spacer * 3</code></li>
      <li><code>auto</code> - for classes that set the <code>margin</code> to auto</li>
    </ul>
    <p>此外，Bootstrap 还包含一个名为 <code>.mx-auto</code> 的类，用于对固定宽度的块级内容进行水平居中显示——也就是说，那些具有 <code>display: block</code> 属性且设置了
      <code>width</code> 的内容——通过将水平外边距设置为 <code>auto</code> 可以实现这一效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mx-auto p-2 border border-primary" style="width: 200px;">
          Centered element
        </div>
      </div>
      <code-highlight type="html" :code="mp1Code" label="html" />
    </div>

    <h2 id="spacing-gap">
      缝隙<a class="anchor-link" aria-label="Link to this section: 缝隙" href="#spacing-gap">
      </a>
    </h2>
    <p>
      当使用 <code>display: grid</code> 或 <code>display: flex</code> 时，您可以利用父元素上的 <code>gap</code>
      辅助类。这样可以避免为网格或弹性容器的每个子元素单独添加边距辅助类。Gap 辅助类默认具有响应式特性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-3">
          <div class="p-2 border border-primary">Grid item 1</div>
          <div class="p-2 border border-primary">Grid item 2</div>
          <div class="p-2 border border-primary">Grid item 3</div>
          <div class="p-2 border border-primary">Grid item 4</div>
        </div>
      </div>
      <code-highlight type="html" :code="gap1Code" label="html" />
    </div>
    <p>支持功能涵盖了 Bootstrap 的所有网格断点的响应式选项，同时还包含了来自 <code>$spacers</code> 映射的六种尺寸（<code>0</code> 到 <code>5</code>）。并且没有
      <code>.gap-auto</code> 通用类，因为它实际上与 <code>.gap-0</code> 是相同的。</p>
    <h3>row-gap</h3>
    <p><code>row-gap</code> 属性用于设置指定容器内子元素之间的垂直间距。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 row-gap-3">
          <div class="p-2 border border-primary">Grid item 1</div>
          <div class="p-2 border border-primary">Grid item 2</div>
          <div class="p-2 border border-primary">Grid item 3</div>
          <div class="p-2 border border-primary">Grid item 4</div>
        </div>
      </div>
      <code-highlight type="html" :code="gap2Code" label="html" />
    </div>
    <h3>column-gap</h3>
    <p><code>column-gap</code> 用于设置指定容器内子元素之间的水平间距。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 column-gap-3">
          <div class="p-2 border border-primary">Grid item 1</div>
          <div class="p-2 border border-primary">Grid item 2</div>
          <div class="p-2 border border-primary">Grid item 3</div>
          <div class="p-2 border border-primary">Grid item 4</div>
        </div>
      </div>
      <code-highlight type="html" :code="gap3Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const mp1Code = `
<div class="mx-auto p-2" style="width: 200px;">
  Centered element
</div>`;

const gap1Code = `
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>`;

const gap2Code = `
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 row-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>`;

const gap3Code = `
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-0 column-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>`;
</script>
