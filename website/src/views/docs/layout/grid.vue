<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-grid">
      <a href="#grid-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-grid" class="docs-content">
    <h1>Grid 网格</h1>
    <p class="fs-4 fw-light">
      利用 Boostrap 强大的移动优先弹性盒网格功能，借助十二列体系、六种默认响应式层级、Sass 变量和混合器以及数十种预定义类，您可以轻松构建各种形状和大小的布局。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank">Boostrap Grid</a>
    </p>

    <h2 id="grid-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#grid-about"> </a>
    </h2>
    <p>
      拆解来看，栅格系统的构成方式如下：
    </p>

    <ul class="docs-content-list">
      <li>
        <p><strong>我们的栅格系统支持<a href="https://getbootstrap.com/docs/5.3/layout/breakpoints" target="_blank">六个响应式断点</a>。</strong>断点基于
          <code>min-width</code> 媒体查询，这意味着它们会影响当前断点及其以上的所有断点（例如，<code>.col-sm-4</code> 适用于
          <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>）。这样您就可以在每个断点处控制容器和列的尺寸及行为。
        </p>
      </li>
      <li>
        <p><strong>容器可居中并水平内边距填充您的内容。</strong>使用 <code>.container</code> 可获得响应式像素宽度；使用 <code>.container-fluid</code>
          可获得所有视口和设备上的 <code>width: 100%</code>；或使用响应式容器（如 <code>.container-md</code>）结合流式宽度和像素宽度。</p>
      </li>
      <li>
        <p><strong>行是列的包装器。</strong>每列都有水平 <code>padding</code>（称为沟槽），用于控制列之间的间距。然后，通过在行上使用负边距来抵消该
          <code>padding</code>，以确保列中的内容在左侧视觉对齐。行还支持修饰类，以便<a href="https://getbootstrap.com/docs/5.3/layout/grid/#row-columns" target="_blank">统一应用列宽</a>和<a
            href="https://getbootstrap.com/docs/5.3/layout/gutters" target="_blank">沟槽类</a>来更改内容的间距。</p>
      </li>
      <li>
        <p><strong>列具有极大的灵活性。</strong>每行有 12 个模板列可用，允许您创建跨越任意列数的不同元素组合。列类表示要跨越的模板列数（例如，<code>col-4</code>
          跨越四列）。宽度以百分比设置，因此您始终具有相同的相对尺寸。</p>
      </li>
      <li>
        <p><strong>沟槽同样具有响应式且可自定义。</strong><a
            href="https://getbootstrap.com/docs/5.3/layout/gutters" target="_blank">沟槽类</a>在所有断点均可用，并且具有与我们的<a
            href="https://getbootstrap.com/docs/5.3/utilities/spacing" target="_blank">间距工具类</a>相同的所有尺寸。使用 <code>.gx-*</code>
          类可更改水平沟槽，使用 <code>.gy-*</code> 可更改垂直沟槽，或使用 <code>.g-*</code> 类可同时更改所有沟槽。<code>.g-0</code> 也可用于移除沟槽。</p>
      </li>
      <li>
        <p><strong>Sass 变量、映射和混合宏为栅格提供动力。</strong>如果您不想使用 Bootstrap 中预定义的栅格类，您可以使用我们的<a href="https://getbootstrap.com/docs/5.3/layout/grid/#sass-variables" target="_blank">栅格源
            Sass</a> 来创建具有更多语义标记的自定义栅格。我们还提供了一些 CSS 自定义属性，以使用这些 Sass 变量，为您带来更大的灵活性。</p>
      </li>
    </ul>
  </div>
</template>

