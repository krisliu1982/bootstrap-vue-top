<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-select">
      <a href="#select-base">预设</a>
      <a href="#select-sizing">尺寸调整</a>
      <a href="#select-disabled">禁用</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-select" class="docs-content">
    <h1>Select 选择器</h1>
    <p class="fs-4 fw-light">
      使用自定义CSS对原生
      <code>&lt;select&gt;</code> 元素进行定制，以改变其初始外观。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/select/" target="_blank">Bootstrap Form Select</a>
    </p>

    <h2 id="select-base">
      预设<a class="anchor-link" aria-label="Link to this section: 预设" href="#select-base"> </a>
    </h2>
    <p>
      自定义 <code>&lt;select&gt;</code> 选择器只需一个自定义类名
      <code>.form-select</code> 即可触发自定义样式。自定义样式仅限于
      <code>&lt;select&gt;</code> 的初始外观，并且由于浏览器的限制，无法修改 <code>&lt;option&gt;</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <select class="form-select" aria-label="Default select example">
          <option value="0" selected>--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>

    <h2 id="select-sizing">
      尺寸调整<a class="anchor-link" aria-label="Link to this section: 尺寸调整" href="#select-sizing"> </a>
    </h2>
    <p>您还可以从小型和大型自定义选择器中进行选择，以匹配我们相似大小的 input 输入框。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
          <option value="0" selected>--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-sm" aria-label="Small select example">
          <option value="0" selected>--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <code-highlight type="html" :code="sizingCode" label="html" />
    </div>
    <p><code>multiple</code> 属性也受支持：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <select class="form-select" multiple aria-label="Multiple select example">
          <option value="0" selected>-</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <code-highlight type="html" :code="sizingMultipleCode" label="html" />
    </div>
    <p>与 <code>size</code> 属性相同：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <select class="form-select" size="3" aria-label="Size 3 select example">
          <option value="0" selected>--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <code-highlight type="html" :code="sizingSizeCode" label="html" />
    </div>

    <h2 id="select-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#select-disabled"> </a>
    </h2>
    <p>
      在 select 上添加
      <code>disabled</code> 布尔属性，使其外观变灰，并移除鼠标事件。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <select class="form-select" aria-label="Disabled select example" disabled>
          <option value="0" selected>--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const baseCode = `<select class="form-select" aria-label="Default select example">
    <option value="0" selected>--</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`;

const sizingCode = `<select class="form-select form-select-lg mb-3" aria-label="Large select example">
    <option value="0" selected>--</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<select class="form-select form-select-sm" aria-label="Small select example">
    <option value="0" selected>--</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`;

const sizingMultipleCode = `<select class="form-select" multiple aria-label="Multiple select example">
  <option value="0" selected>--</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const sizingSizeCode = `<select class="form-select" size="3" aria-label="Size 3 select example">
  <option value="0" selected>--</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;

const disabledCode = `<select class="form-select" aria-label="Disabled select example" disabled>
  <option value="0" selected>--</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>`;
</script>
