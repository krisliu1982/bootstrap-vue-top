<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-stacks">
      <a href="#stacks-vertical">垂直</a>
      <a href="#stacks-horizontal">水平</a>
      <a href="#stacks-example">示例</a>
      <a href="#stacks-css">CSS</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-stacks" class="docs-content">
    <h1>Stacks 堆叠</h1>
    <p class="fs-4 fw-light">
      基于我们的弹性盒布局工具开发的简写辅助功能，能够使组件布局的速度和效率达到前所未有的水平。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/helpers/stacks/" target="_blank">Boostrap Stacks</a>
    </p>
    <p>
      “堆栈”为应用一系列 flexbox 属性提供了便捷的途径，从而能够快速、轻松地在 Bootstrap
      中创建布局。该概念及实现均归功于开源项目<a href="https://almonk.github.io/pylon/" target="_blank">Pylon 项目</a>。
    </p>
    <p class="text-bg-warning">
      <strong>注意！</strong> 在 Safari 14.5 之前，使用 flexbox
      实现间距功能的功能并不支持，因此请考虑确认您所使用的浏览器是否支持该功能。网格布局应该不会出现任何问题。
      <a href="https://caniuse.com/flexbox-gap" target="_blank">了解更多</a>。
    </p>

    <h2 id="stacks-vertical">
      垂直<a class="anchor-link" aria-label="Link to this section: 垂直" href="#stacks-vertical"> </a>
    </h2>
    <p>
      使用 <code>.vstack</code> 可以创建垂直布局。默认情况下，堆叠的项目是全宽的。使用
      <code>.gap-*</code> 通配符样式可以为项目之间添加间距。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-flex-util">
        <div class="vstack gap-3">
          <div class="p-2">First item</div>
          <div class="p-2">Second item</div>
          <div class="p-2">Third item</div>
        </div>
      </div>
      <code-highlight type="html" :code="verticalCode" label="html" />
    </div>

    <h2 id="stacks-horizontal">
      水平<a class="anchor-link" aria-label="Link to this section: 水平" href="#stacks-horizontal"> </a>
    </h2>
    <p>
      对于水平布局，请使用 <code>.hstack</code> 。默认情况下，堆叠的项目会垂直居中，并且只会占用其所需的宽度。使用
      <code>.gap-*</code> 通配符样式来为项目之间添加间距。
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-flex-util">
        <div class="hstack gap-3">
          <div class="p-2">First item</div>
          <div class="p-2">Second item</div>
          <div class="p-2">Third item</div>
        </div>
      </div>
      <code-highlight type="html" :code="horizontal1Code" label="html" />
    </div>
    <p>使用诸如 <code>.ms-auto</code> 这样的水平内边距样式作为分隔符：</p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-flex-util">
        <div class="hstack gap-3">
          <div class="p-2">First item</div>
          <div class="p-2 ms-auto">Second item</div>
          <div class="p-2">Third item</div>
        </div>
      </div>
      <code-highlight type="html" :code="horizontal2Code" label="html" />
    </div>
    <p>
      并且使用了 <a href="https://getbootstrap.com/docs/5.3/helpers/vertical-rule" target="_blank">垂直分隔线</a> ：
    </p>
    <div class="docs-example">
      <div class="docs-example-data docs-content-flex-util">
        <div class="hstack gap-3">
          <div class="p-2">First item</div>
          <div class="p-2 ms-auto">Second item</div>
          <div class="vr"></div>
          <div class="p-2">Third item</div>
        </div>
      </div>
      <code-highlight type="html" :code="horizontal3Code" label="html" />
    </div>

    <h2 id="stacks-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#stacks-example"> </a>
    </h2>
    <p>使用 <code>.vstack</code> 来堆叠按钮及其他元素：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="vstack gap-2 col-md-5 mx-auto">
          <button type="button" class="btn btn-secondary">Save changes</button>
          <button type="button" class="btn btn-outline-secondary">Cancel</button>
        </div>
      </div>
      <code-highlight type="html" :code="example1Code" label="html" />
    </div>
    <p>使用 <code>.hstack</code> 创建一个内联表单：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <input
            class="form-control me-auto"
            type="text"
            placeholder="Add your item here..."
            aria-label="Add your item here..."
          />
          <button type="button" class="btn btn-secondary">Submit</button>
          <div class="vr"></div>
          <button type="button" class="btn btn-outline-danger">Reset</button>
        </div>
      </div>
      <code-highlight type="html" :code="example2Code" label="html" />
    </div>

    <h2 id="stacks-css">
      CSS<a class="anchor-link" aria-label="Link to this section: CSS" href="#stacks-css"> </a>
      <code-highlight type="scss" :code="css1Code" label="scss/helpers/_stacks.scss" />
    </h2>
  </div>
</template>

<script setup>
const verticalCode = `
<div class="vstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>`;

const horizontal1Code = `
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2">Second item</div>
  <div class="p-2">Third item</div>
</div>`;

const horizontal2Code = `
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="p-2">Third item</div>
</div>`;

const horizontal3Code = `
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>`;

const example1Code = `
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Save changes</button>
  <button type="button" class="btn btn-outline-secondary">Cancel</button>
</div>
`;

const example2Code = `
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reset</button>
</div>
`;

const css1Code = `
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}`;
</script>
