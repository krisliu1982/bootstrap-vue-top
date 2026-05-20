<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-grid">
      <a href="#grid-about">使用说明</a>
      <a href="#flex-direction">方向调整</a>
      <a href="#flex-justify">内容布局</a>
      <a href="#flex-align">对齐项目</a>
      <a href="#flex-align-self">对齐自我</a>
      <a href="#flex-fill">占满空间</a>
      <a href="#flex-grow-shrink">增长与收缩</a>
      <a href="#flex-wrap">包裹项目</a>
      <a href="#flex-order">项目顺序</a>
      <a href="#flex-align-content">对齐内容</a>
      <a href="#flex-example">使用案例</a>
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
      具体来说，网格系统是如何构建起来的呢？以下是其大致流程：
    </p>

<ul>
<li>
<p><strong>我们的网格系统支持 <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints" target="_blank">六种响应式断点</a>。</strong> 断点是基于 <code>min-width</code> 媒体查询设定的，这意味着它们会影响到该断点及其之上所有的断点（例如，<code>.col-sm-4</code> 适用于 <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>）。这意味着您可以通过每个断点来控制容器和列的大小及行为。</p>
</li>
<li>
<p><strong>容器会将内容居中并进行水平填充。</strong> 使用 <code>.container</code> 可获得响应式的像素宽度，使用 <code>.container-fluid</code> 可在所有视口和设备上实现 <code>width： 100%</code>，或者使用响应式容器（例如 <code>.container-md</code>）来结合流式和像素宽度。</p>
</li>
<li>
<p><strong>行是列的容器。</strong> 每个列都有水平的 <code>填充</code>（称为缝隙），用于控制它们之间的间距。然后，这些 <code>填充</code> 在行上通过负边距来抵消，以确保列中的内容在左侧视觉上对齐。 </p>
</li>
</ul>行还支持修饰类 <a href="#row-columns">以统一应用列尺寸</a> 以及 <a href="https://getbootstrap.com/docs/5.3/layout/gutters">栅距类</a> 来更改内容的间距。</p>
</li>
<li>
<p><strong>列具有极高的灵活性。</strong> 每行有 12 个模板列可供使用，允许您创建不同元素的组合，这些元素可以跨越任意数量的列。列类指示要跨越的模板列数量（例如，<code>col-4</code> 跨越四个）。<code>宽度</code> 以百分比设置，因此您始终具有相同的相对尺寸。</p>
</li>
<li>
<p><strong>栅距也具有响应性和可定制性。</strong> <a href="/docs/5.3/layout/gutters">所有断点都提供了栅距类</a>，其大小与我们的 <a href="/docs/5.3/utilities/spacing">边距和内边距间距</a> 相同。使用 <code>.gx-*</code> 类更改水平栅距，使用 <code>.gy-*</code> 类更改垂直栅距，或使用 <code>.g-*</code> 类更改所有栅距。 <code>.g-0</code> 也可用于移除栅距。</p>
</li>
<li>
</li></ul>


    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-inline-grid p-2">I'm an inline flexbox container!</div>
      </div>
      <code-highlight type="html" :code="enable2Code" label="html" />
    </div>
    <p>对于 <code>.d-grid</code> 和 <code>.d-inline-grid</code> 这两个元素，也存在相应的响应式变化。</p>
    <ul class="docs-content-list">
      <li><code>.d-grid</code></li>
      <li><code>.d-inline-grid</code></li>
      <li><code>.d-sm-grid</code></li>
      <li><code>.d-sm-inline-grid</code></li>
      <li><code>.d-md-grid</code></li>
      <li><code>.d-md-inline-grid</code></li>
      <li><code>.d-lg-grid</code></li>
      <li><code>.d-lg-inline-grid</code></li>
      <li><code>.d-xl-grid</code></li>
      <li><code>.d-xl-inline-grid</code></li>
      <li><code>.d-xxl-grid</code></li>
      <li><code>.d-xxl-inline-grid</code></li>
    </ul>

    <h2 id="flex-direction">
      方向调整<a class="anchor-link" aria-label="Link to this section: 方向调整" href="#flex-direction"> </a>
    </h2>
    <p>
      使用方向工具设置 flex 容器中 flex 元素的方向。在大多数情况下，您可以省略这里的水平类，因为浏览器默认值是
      <code>row</code>
      。然而，您可能会遇到需要明确设置此值的情况（例如响应式布局）。
    </p>
    <p>
      使用
      <code>.flex-row</code> 可设置为水平方向（这是浏览器的默认设置），或者使用
      <code>.flex-row-reverse</code> 从相反的一侧开始设置水平方向。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-row mb-3">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        <div class="d-grid flex-row-reverse">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
      </div>
      <code-highlight type="html" :code="direction1Code" label="html" />
    </div>
    <p>
      使用 <code>.flex-column</code> 可设置垂直方向，或者使用
      <code>.flex-column-reverse</code> 从相反的一侧开始垂直方向的排列。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-column mb-3">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
        <div class="d-grid flex-column-reverse">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
        </div>
      </div>
      <code-highlight type="html" :code="direction2Code" label="html" />
    </div>
    <p>对于 <code>flex-direction</code> 也有相应的响应形式。</p>
    <ul class="docs-content-list">
      <li><code>.flex-row</code></li>
      <li><code>.flex-row-reverse</code></li>
      <li><code>.flex-column</code></li>
      <li><code>.flex-column-reverse</code></li>
      <li><code>.flex-sm-row</code></li>
      <li><code>.flex-sm-row-reverse</code></li>
      <li><code>.flex-sm-column</code></li>
      <li><code>.flex-sm-column-reverse</code></li>
      <li><code>.flex-md-row</code></li>
      <li><code>.flex-md-row-reverse</code></li>
      <li><code>.flex-md-column</code></li>
      <li><code>.flex-md-column-reverse</code></li>
      <li><code>.flex-lg-row</code></li>
      <li><code>.flex-lg-row-reverse</code></li>
      <li><code>.flex-lg-column</code></li>
      <li><code>.flex-lg-column-reverse</code></li>
      <li><code>.flex-xl-row</code></li>
      <li><code>.flex-xl-row-reverse</code></li>
      <li><code>.flex-xl-column</code></li>
      <li><code>.flex-xl-column-reverse</code></li>
      <li><code>.flex-xxl-row</code></li>
      <li><code>.flex-xxl-row-reverse</code></li>
      <li><code>.flex-xxl-column</code></li>
      <li><code>.flex-xxl-column-reverse</code></li>
    </ul>

    <h2 id="flex-justify">
      内容布局<a class="anchor-link" aria-label="Link to this section: 内容布局" href="#flex-justify"> </a>
    </h2>
    <p>
      在 flexbox 容器中使用 <code>justify-content</code> 元素可改变 flex 元素在主轴（即 x 轴，若
      <code>flex-direction: column</code> 则为 y 轴）上的排列方式。可供选择的值有
      <code>start</code>（浏览器默认值）、<code>end</code>、<code>center</code>、<code>between</code>、<code>around</code>
      或 <code>evenly</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid justify-content-start mb-3">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">Start</div>
        </div>
        <div class="d-grid justify-content-end mb-3">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">End</div>
        </div>
        <div class="d-grid justify-content-center mb-3">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">Center</div>
        </div>
        <div class="d-grid justify-content-between mb-3">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">Between</div>
        </div>
        <div class="d-grid justify-content-around mb-3">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">Around</div>
        </div>
        <div class="d-grid justify-content-evenly">
          <div class="p-2 bd-highlight">Justify</div>
          <div class="p-2 bd-highlight">Content</div>
          <div class="p-2 bd-highlight">Evenly</div>
        </div>
      </div>
      <code-highlight type="html" :code="justifyCode" label="html" />
    </div>
    <p>对于 <code>justify-content</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.justify-content-start</code></li>
      <li><code>.justify-content-end</code></li>
      <li><code>.justify-content-center</code></li>
      <li><code>.justify-content-between</code></li>
      <li><code>.justify-content-around</code></li>
      <li><code>.justify-content-evenly</code></li>
      <li><code>.justify-content-sm-start</code></li>
      <li><code>.justify-content-sm-end</code></li>
      <li><code>.justify-content-sm-center</code></li>
      <li><code>.justify-content-sm-between</code></li>
      <li><code>.justify-content-sm-around</code></li>
      <li><code>.justify-content-sm-evenly</code></li>
      <li><code>.justify-content-md-start</code></li>
      <li><code>.justify-content-md-end</code></li>
      <li><code>.justify-content-md-center</code></li>
      <li><code>.justify-content-md-between</code></li>
      <li><code>.justify-content-md-around</code></li>
      <li><code>.justify-content-md-evenly</code></li>
      <li><code>.justify-content-lg-start</code></li>
      <li><code>.justify-content-lg-end</code></li>
      <li><code>.justify-content-lg-center</code></li>
      <li><code>.justify-content-lg-between</code></li>
      <li><code>.justify-content-lg-around</code></li>
      <li><code>.justify-content-lg-evenly</code></li>
      <li><code>.justify-content-xl-start</code></li>
      <li><code>.justify-content-xl-end</code></li>
      <li><code>.justify-content-xl-center</code></li>
      <li><code>.justify-content-xl-between</code></li>
      <li><code>.justify-content-xl-around</code></li>
      <li><code>.justify-content-xl-evenly</code></li>
      <li><code>.justify-content-xxl-start</code></li>
      <li><code>.justify-content-xxl-end</code></li>
      <li><code>.justify-content-xxl-center</code></li>
      <li><code>.justify-content-xxl-between</code></li>
      <li><code>.justify-content-xxl-around</code></li>
      <li><code>.justify-content-xxl-evenly</code></li>
    </ul>

    <h2 id="flex-align">
      对齐项目<a class="anchor-link" aria-label="Link to this section: 对齐项目" href="#flex-align"> </a>
    </h2>
    <p>
      在 flexbox 容器中使用 <code>align-items</code> 元素，可更改 flex 元素在交叉轴（即起始的 y 轴，若
      <code>flex-direction： column</code> 则为 x 轴）上的排列方式。可供选择的值有
      <code>start</code>、<code>end</code>、<code>center</code>、<code>baseline</code> 或
      <code>stretch</code>（浏览器默认值）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-items-start mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid align-items-end mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid align-items-center mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid align-items-baseline mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid align-items-stretch" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignCode" label="html" />
    </div>
    <p>对于 <code>align-items</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.align-items-start</code></li>
      <li><code>.align-items-end</code></li>
      <li><code>.align-items-center</code></li>
      <li><code>.align-items-baseline</code></li>
      <li><code>.align-items-stretch</code></li>
      <li><code>.align-items-sm-start</code></li>
      <li><code>.align-items-sm-end</code></li>
      <li><code>.align-items-sm-center</code></li>
      <li><code>.align-items-sm-baseline</code></li>
      <li><code>.align-items-sm-stretch</code></li>
      <li><code>.align-items-md-start</code></li>
      <li><code>.align-items-md-end</code></li>
      <li><code>.align-items-md-center</code></li>
      <li><code>.align-items-md-baseline</code></li>
      <li><code>.align-items-md-stretch</code></li>
      <li><code>.align-items-lg-start</code></li>
      <li><code>.align-items-lg-end</code></li>
      <li><code>.align-items-lg-center</code></li>
      <li><code>.align-items-lg-baseline</code></li>
      <li><code>.align-items-lg-stretch</code></li>
      <li><code>.align-items-xl-start</code></li>
      <li><code>.align-items-xl-end</code></li>
      <li><code>.align-items-xl-center</code></li>
      <li><code>.align-items-xl-baseline</code></li>
      <li><code>.align-items-xl-stretch</code></li>
      <li><code>.align-items-xxl-start</code></li>
      <li><code>.align-items-xxl-end</code></li>
      <li><code>.align-items-xxl-center</code></li>
      <li><code>.align-items-xxl-baseline</code></li>
      <li><code>.align-items-xxl-stretch</code></li>
    </ul>

    <h2 id="flex-align-self">
      对齐自我<a class="anchor-link" aria-label="Link to this section: 对齐自我" href="#flex-align-self"> </a>
    </h2>
    <p>
      在 flexbox 元素上使用
      <code>align-self</code> 元素可单独改变其在交叉轴（即起始的 y 轴，对于
      <code>flex-direction： column</code> 来说则是 x 轴）上的对齐方式。您可以从与
      <code>align-items</code>
      相同的选项中进行选择：<code>start</code>、<code>end</code>、<code>center</code>、<code>baseline</code> 或
      <code>stretch</code>（浏览器默认值）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="align-self-start p-2">Aligned flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="align-self-end p-2">Aligned flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="align-self-center p-2">Aligned flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid mb-3" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="align-self-baseline p-2">Aligned flex item</div>
          <div class="p-2">Flex item</div>
        </div>
        <div class="d-grid" style="height: 100px">
          <div class="p-2">Flex item</div>
          <div class="align-self-stretch p-2">Aligned flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignSelfCode" label="html" />
    </div>
    <p>对于 <code>align-self</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.align-self-start</code></li>
      <li><code>.align-self-end</code></li>
      <li><code>.align-self-center</code></li>
      <li><code>.align-self-baseline</code></li>
      <li><code>.align-self-stretch</code></li>
      <li><code>.align-self-sm-start</code></li>
      <li><code>.align-self-sm-end</code></li>
      <li><code>.align-self-sm-center</code></li>
      <li><code>.align-self-sm-baseline</code></li>
      <li><code>.align-self-sm-stretch</code></li>
      <li><code>.align-self-md-start</code></li>
      <li><code>.align-self-md-end</code></li>
      <li><code>.align-self-md-center</code></li>
      <li><code>.align-self-md-baseline</code></li>
      <li><code>.align-self-md-stretch</code></li>
      <li><code>.align-self-lg-start</code></li>
      <li><code>.align-self-lg-end</code></li>
      <li><code>.align-self-lg-center</code></li>
      <li><code>.align-self-lg-baseline</code></li>
      <li><code>.align-self-lg-stretch</code></li>
      <li><code>.align-self-xl-start</code></li>
      <li><code>.align-self-xl-end</code></li>
      <li><code>.align-self-xl-center</code></li>
      <li><code>.align-self-xl-baseline</code></li>
      <li><code>.align-self-xl-stretch</code></li>
      <li><code>.align-self-xxl-start</code></li>
      <li><code>.align-self-xxl-end</code></li>
      <li><code>.align-self-xxl-center</code></li>
      <li><code>.align-self-xxl-baseline</code></li>
      <li><code>.align-self-xxl-stretch</code></li>
    </ul>

    <h2 id="flex-fill">
      占满空间<a class="anchor-link" aria-label="Link to this section: 占满空间" href="#flex-fill"> </a>
    </h2>
    <p>
      在一系列相邻元素上使用
      <code>.flex-fill</code>
      类，可强制这些元素的宽度与其中的内容相等（如果其内容未超出边框盒范围，则使其宽度与相邻元素相同），同时占据所有可用的水平空间。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid">
          <div class="p-2 flex-fill">Flex item with a lot of content</div>
          <div class="p-2 flex-fill">Flex item</div>
          <div class="p-2 flex-fill">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="fillCode" label="html" />
    </div>
    <p>对于 <code>flex-fill</code> 也有相应的响应式形式。</p>
    <ul>
      <li><code>.flex-fill</code></li>
      <li><code>.flex-sm-fill</code></li>
      <li><code>.flex-md-fill</code></li>
      <li><code>.flex-lg-fill</code></li>
      <li><code>.flex-xl-fill</code></li>
      <li><code>.flex-xxl-fill</code></li>
    </ul>

    <h2 id="flex-grow-shrink">
      增长与收缩<a class="anchor-link" aria-label="Link to this section: 增长与收缩" href="#flex-grow-shrink"> </a>
    </h2>
    <p>
      使用
      <code>.flex-grow-*</code>
      元素来切换弹性项填充可用空间的能力。在下面的示例中，<code>.flex-grow-1</code>
      元素会充分利用其可利用的空间，同时为其余两个弹性项留出必要的空间。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid">
          <div class="p-2 flex-grow-1">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Third flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="growCode" label="html" />
    </div>
    <p>
      使用
      <code>.flex-shrink-*</code>
      元素样式来控制弹性项在必要时的收缩能力。在下面的示例中，带有
      <code>.flex-shrink-1</code>
      样式的第二个弹性项被强制将其内容换行到新行，从而“收缩”以为带有
      <code>.w-100</code> 样式的前一个弹性项腾出更多空间。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid">
          <div class="p-2 w-100">Flex item</div>
          <div class="p-2 flex-shrink-1">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="shrinkCode" label="html" />
    </div>
    <p>对于 <code>flex-grow</code> 和 <code>flex-shrink</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.flex-{grow|shrink}-0</code></li>
      <li><code>.flex-{grow|shrink}-1</code></li>
      <li><code>.flex-sm-{grow|shrink}-0</code></li>
      <li><code>.flex-sm-{grow|shrink}-1</code></li>
      <li><code>.flex-md-{grow|shrink}-0</code></li>
      <li><code>.flex-md-{grow|shrink}-1</code></li>
      <li><code>.flex-lg-{grow|shrink}-0</code></li>
      <li><code>.flex-lg-{grow|shrink}-1</code></li>
      <li><code>.flex-xl-{grow|shrink}-0</code></li>
      <li><code>.flex-xl-{grow|shrink}-1</code></li>
      <li><code>.flex-xxl-{grow|shrink}-0</code></li>
      <li><code>.flex-xxl-{grow|shrink}-1</code></li>
    </ul>

    <h2 id="flex-auto-margin">
      自动边距<a class="anchor-link" aria-label="Link to this section: 自动边距" href="#flex-auto-margin"> </a>
    </h2>
    <p>
      当将弹性布局的对齐方式与自动边距相结合时，它能够实现一些非常出色的效果。下面展示了通过自动边距来控制弹性项的三个示例：默认情况（无自动边距）、将两个项目向右推（<code>.me-auto</code>）以及将两个项目向左推（<code>.ms-auto</code>）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid mb-3">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>

        <div class="d-grid mb-3">
          <div class="me-auto p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>

        <div class="d-grid mb-3">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="ms-auto p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="auto1Code" label="html" />
    </div>
    <p>
      通过结合使用 <code>align-items</code>、<code>flex-direction: column</code> 以及 <code>margin-top: auto</code> 或
      <code>margin-bottom: auto</code>
      这些属性，可以将一个弹性项目垂直移动到容器的顶部或底部。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-items-start flex-column mb-3" style="height: 200px">
          <div class="mb-auto p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>

        <div class="d-grid align-items-end flex-column mb-3" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="mt-auto p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="auto2Code" label="html" />
    </div>

    <h2 id="flex-wrap">
      包裹项目<a class="anchor-link" aria-label="Link to this section: 包裹项目" href="#flex-wrap"> </a>
    </h2>
    <p>
      更改 flex 容器中 flex 元素的排列方式。您可以选择完全不进行排列（这是浏览器的默认设置），使用
      <code>.flex-nowrap</code>；选择进行排列（使用 <code>.flex-wrap</code>）；或者选择反向排列（使用
      <code>.flex-wrap-reverse</code>）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-nowrap" style="width: 8rem">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="wrap1Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-wrap">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
          <div class="p-2">Flex item 4</div>
          <div class="p-2">Flex item 5</div>
          <div class="p-2">Flex item 6</div>
          <div class="p-2">Flex item 7</div>
          <div class="p-2">Flex item 8</div>
          <div class="p-2">Flex item 9</div>
          <div class="p-2">Flex item 10</div>
          <div class="p-2">Flex item 11</div>
          <div class="p-2">Flex item 12</div>
          <div class="p-2">Flex item 13</div>
          <div class="p-2">Flex item 14</div>
        </div>
      </div>
      <code-highlight type="html" :code="wrap2Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-wrap-reverse">
          <div class="p-2">Flex item 1</div>
          <div class="p-2">Flex item 2</div>
          <div class="p-2">Flex item 3</div>
          <div class="p-2">Flex item 4</div>
          <div class="p-2">Flex item 5</div>
          <div class="p-2">Flex item 6</div>
          <div class="p-2">Flex item 7</div>
          <div class="p-2">Flex item 8</div>
          <div class="p-2">Flex item 9</div>
          <div class="p-2">Flex item 10</div>
          <div class="p-2">Flex item 11</div>
          <div class="p-2">Flex item 12</div>
          <div class="p-2">Flex item 13</div>
          <div class="p-2">Flex item 14</div>
        </div>
      </div>
      <code-highlight type="html" :code="wrap3Code" label="html" />
    </div>
    <p>对于 <code>flex-wrap</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.flex-nowrap</code></li>
      <li><code>.flex-wrap</code></li>
      <li><code>.flex-wrap-reverse</code></li>
      <li><code>.flex-sm-nowrap</code></li>
      <li><code>.flex-sm-wrap</code></li>
      <li><code>.flex-sm-wrap-reverse</code></li>
      <li><code>.flex-md-nowrap</code></li>
      <li><code>.flex-md-wrap</code></li>
      <li><code>.flex-md-wrap-reverse</code></li>
      <li><code>.flex-lg-nowrap</code></li>
      <li><code>.flex-lg-wrap</code></li>
      <li><code>.flex-lg-wrap-reverse</code></li>
      <li><code>.flex-xl-nowrap</code></li>
      <li><code>.flex-xl-wrap</code></li>
      <li><code>.flex-xl-wrap-reverse</code></li>
      <li><code>.flex-xxl-nowrap</code></li>
      <li><code>.flex-xxl-wrap</code></li>
      <li><code>.flex-xxl-wrap-reverse</code></li>
    </ul>

    <h2 id="flex-order">
      项目顺序<a class="anchor-link" aria-label="Link to this section: 项目顺序" href="#flex-order"> </a>
    </h2>
    <p>
      通过使用少量的
      <code>order</code>
      便捷工具，可以改变特定弹性项的视觉排列顺序。我们仅提供将某个项置于首位或末位的选项，以及一个用于恢复原始 DOM
      排序的选项。由于 <code>order</code> 可接受 0 到 5 之间的任何整数值，因此您可以为所需的任何其他值添加自定义 CSS。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid flex-nowrap">
          <div class="order-3 p-2">First flex item</div>
          <div class="order-2 p-2">Second flex item</div>
          <div class="order-1 p-2">Third flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="orderCode" label="html" />
    </div>
    <p>对于 <code>order</code> 也有相应的响应式形式。</p>
    <ul>
      <li><code>.order-0</code></li>
      <li><code>.order-1</code></li>
      <li><code>.order-2</code></li>
      <li><code>.order-3</code></li>
      <li><code>.order-4</code></li>
      <li><code>.order-5</code></li>
      <li><code>.order-sm-0</code></li>
      <li><code>.order-sm-1</code></li>
      <li><code>.order-sm-2</code></li>
      <li><code>.order-sm-3</code></li>
      <li><code>.order-sm-4</code></li>
      <li><code>.order-sm-5</code></li>
      <li><code>.order-md-0</code></li>
      <li><code>.order-md-1</code></li>
      <li><code>.order-md-2</code></li>
      <li><code>.order-md-3</code></li>
      <li><code>.order-md-4</code></li>
      <li><code>.order-md-5</code></li>
      <li><code>.order-lg-0</code></li>
      <li><code>.order-lg-1</code></li>
      <li><code>.order-lg-2</code></li>
      <li><code>.order-lg-3</code></li>
      <li><code>.order-lg-4</code></li>
      <li><code>.order-lg-5</code></li>
      <li><code>.order-xl-0</code></li>
      <li><code>.order-xl-1</code></li>
      <li><code>.order-xl-2</code></li>
      <li><code>.order-xl-3</code></li>
      <li><code>.order-xl-4</code></li>
      <li><code>.order-xl-5</code></li>
      <li><code>.order-xxl-0</code></li>
      <li><code>.order-xxl-1</code></li>
      <li><code>.order-xxl-2</code></li>
      <li><code>.order-xxl-3</code></li>
      <li><code>.order-xxl-4</code></li>
      <li><code>.order-xxl-5</code></li>
    </ul>
    <p>
      此外，还有响应式的 <code>.order-first</code> 和 <code>.order-last</code> 类，它们通过分别应用
      <code>order: -1</code> 和 <code>order: 6</code> 来改变元素的 <code>顺序</code> 。
    </p>
    <ul class="docs-content-list">
      <li><code>.order-first</code></li>
      <li><code>.order-last</code></li>
      <li><code>.order-sm-first</code></li>
      <li><code>.order-sm-last</code></li>
      <li><code>.order-md-first</code></li>
      <li><code>.order-md-last</code></li>
      <li><code>.order-lg-first</code></li>
      <li><code>.order-lg-last</code></li>
      <li><code>.order-xl-first</code></li>
      <li><code>.order-xl-last</code></li>
      <li><code>.order-xxl-first</code></li>
      <li><code>.order-xxl-last</code></li>
    </ul>

    <h2 id="flex-align-content">
      对齐内容<a class="anchor-link" aria-label="Link to this section: 对齐内容" href="#flex-align-content"> </a>
    </h2>
    <p>
      在 flexbox 容器中使用 <code>align-content</code> 元素，可使 flex 元素在交叉轴上 <em>排列在一起</em> 。您可以从
      <code>start</code>（浏览器默认值）、<code>end</code>、<code>center</code>、<code>between</code>、<code>around</code>
      或 <code>stretch</code> 中进行选择。为了演示这些元素，我们已设置了 <code>flex-wrap： wrap</code> 并增加了 flex
      元素的数量。
    </p>
    <p><strong>注意！</strong> 此属性对 flex 元素的单个行项没有影响。</p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-start flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent1Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-end flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent2Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-center flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent3Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-between flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent4Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-around flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent5Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data docs-content-grid-util">
        <div class="d-grid align-content-stretch flex-wrap" style="height: 200px">
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
          <div class="p-2">Flex item</div>
        </div>
      </div>
      <code-highlight type="html" :code="alignContent6Code" label="html" />
    </div>
    <p>对于 <code>align-content</code> 也有相应的响应式形式。</p>
    <ul class="docs-content-list">
      <li><code>.align-content-start</code></li>
      <li><code>.align-content-end</code></li>
      <li><code>.align-content-center</code></li>
      <li><code>.align-content-between</code></li>
      <li><code>.align-content-around</code></li>
      <li><code>.align-content-stretch</code></li>
      <li><code>.align-content-sm-start</code></li>
      <li><code>.align-content-sm-end</code></li>
      <li><code>.align-content-sm-center</code></li>
      <li><code>.align-content-sm-between</code></li>
      <li><code>.align-content-sm-around</code></li>
      <li><code>.align-content-sm-stretch</code></li>
      <li><code>.align-content-md-start</code></li>
      <li><code>.align-content-md-end</code></li>
      <li><code>.align-content-md-center</code></li>
      <li><code>.align-content-md-between</code></li>
      <li><code>.align-content-md-around</code></li>
      <li><code>.align-content-md-stretch</code></li>
      <li><code>.align-content-lg-start</code></li>
      <li><code>.align-content-lg-end</code></li>
      <li><code>.align-content-lg-center</code></li>
      <li><code>.align-content-lg-between</code></li>
      <li><code>.align-content-lg-around</code></li>
      <li><code>.align-content-lg-stretch</code></li>
      <li><code>.align-content-xl-start</code></li>
      <li><code>.align-content-xl-end</code></li>
      <li><code>.align-content-xl-center</code></li>
      <li><code>.align-content-xl-between</code></li>
      <li><code>.align-content-xl-around</code></li>
      <li><code>.align-content-xl-stretch</code></li>
      <li><code>.align-content-xxl-start</code></li>
      <li><code>.align-content-xxl-end</code></li>
      <li><code>.align-content-xxl-center</code></li>
      <li><code>.align-content-xxl-between</code></li>
      <li><code>.align-content-xxl-around</code></li>
      <li><code>.align-content-xxl-stretch</code></li>
    </ul>

    <h2 id="flex-example">
      使用案例<a class="anchor-link" aria-label="Link to this section: 使用案例" href="#flex-example"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-grid">
          <div class="flex-shrink-0">
            <svg aria-label="Placeholder: Image" class="docs-placeholder-img" height="100"
              preserveAspectRatio="xMidYMid slice" role="img" width="100" xmlns="http://www.w3.org/2000/svg">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#e5e5e5"></rect>
              <text x="50%" y="50%" fill="#999" dy=".3em">Image</text>
            </svg>
          </div>
          <div class="flex-grow-1 ms-3">
            This is some content from a media component. You can replace this with any content and adjust it as needed.
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="example1Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-grid align-items-center">
          <div class="flex-shrink-0">
            <svg aria-label="Placeholder: Image" class="docs-placeholder-img" height="100"
              preserveAspectRatio="xMidYMid slice" role="img" width="100" xmlns="http://www.w3.org/2000/svg">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#e5e5e5"></rect>
              <text x="50%" y="50%" fill="#999" dy=".3em">Image</text>
            </svg>
          </div>
          <div class="flex-grow-1 ms-3">
            This is some content from a media component. You can replace this with any content and adjust it as needed.
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="example2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const enable1Code = `
<div class="d-grid p-2">I'm a flexbox container!</div>`;
const enable2Code = `
<div class="d-inline-grid p-2">I'm an inline flexbox container!</div>`;

const direction1Code = `
<div class="d-grid flex-row mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
<div class="d-grid flex-row-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>`;

const direction2Code = `
<div class="d-grid flex-column mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
<div class="d-grid flex-column-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>`;

const justifyCode = `
<div class="d-grid justify-content-start">...</div>
<div class="d-grid justify-content-end">...</div>
<div class="d-grid justify-content-center">...</div>
<div class="d-grid justify-content-between">...</div>
<div class="d-grid justify-content-around">...</div>
<div class="d-grid justify-content-evenly">...</div>`;

const alignCode = `
<div class="d-grid align-items-start">...</div>
<div class="d-grid align-items-end">...</div>
<div class="d-grid align-items-center">...</div>
<div class="d-grid align-items-baseline">...</div>
<div class="d-grid align-items-stretch">...</div>`;

const alignSelfCode = `
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>`;

const fillCode = `
<div class="d-grid">
  <div class="p-2 flex-fill">Flex item with a lot of content</div>
  <div class="p-2 flex-fill">Flex item</div>
  <div class="p-2 flex-fill">Flex item</div>
</div>`;

const growCode = `
<div class="d-grid">
  <div class="p-2 flex-grow-1">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Third flex item</div>
</div>`;

const shrinkCode = `
<div class="d-grid">
  <div class="p-2 w-100">Flex item</div>
  <div class="p-2 flex-shrink-1">Flex item</div>
</div>`;

const auto1Code = `
<div class="d-grid mb-3">
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div>

<div class="d-grid mb-3">
  <div class="me-auto p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div>

<div class="d-grid mb-3">
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="ms-auto p-2">Flex item</div>
</div>`;

const auto2Code = `
<div class="d-grid align-items-start flex-column mb-3" style="height: 200px;">
  <div class="mb-auto p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
</div>

<div class="d-grid align-items-end flex-column mb-3" style="height: 200px;">
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="mt-auto p-2">Flex item</div>
</div>`;

const wrap1Code = `
<div class="d-grid flex-nowrap">
  ...
</div>`;

const wrap2Code = `
<div class="d-grid flex-wrap">
  ...
</div>`;

const wrap3Code = `
<div class="d-grid flex-wrap-reverse">
  ...
</div>`;

const orderCode = `
<div class="d-grid flex-nowrap">
  <div class="order-3 p-2">First flex item</div>
  <div class="order-2 p-2">Second flex item</div>
  <div class="order-1 p-2">Third flex item</div>
</div>`;

const alignContent1Code = `
<div class="d-grid align-content-start flex-wrap">
  ...
</div>`;
const alignContent2Code = `
<div class="d-grid align-content-end flex-wrap">...</div>`;
const alignContent3Code = `
<div class="d-grid align-content-center flex-wrap">...</div>`;
const alignContent4Code = `
<div class="d-grid align-content-between flex-wrap">...</div>`;
const alignContent5Code = `
<div class="d-grid align-content-around flex-wrap">...</div>`;
const alignContent6Code = `
<div class="d-grid align-content-stretch flex-wrap">...</div>`;

const example1Code = `
<div class="d-grid">
  <div class="flex-shrink-0">
    <img src="..." alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    This is ... 
  </div>
</div>`;

const example2Code = `
<div class="d-grid align-items-center">
  <div class="flex-shrink-0">
    <img src="..." alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    This is ...
  </div>
</div>`;
</script>
