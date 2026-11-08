<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-vertical-align">
      <a href="#vertical-align-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-vertical-align" class="docs-content">
    <h1>Vertical align 垂直对齐</h1>
    <p class="fs-4 fw-light">
      可以轻松更改内联元素、内联块元素、内联表格元素以及表格单元格元素的垂直对齐方式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/vertical-align/" target="_blank">Bootstrap Vertical align</a>
    </p>

    <h2 id="vertical-align-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#vertical-align-about"> </a>
    </h2>
    <p>
      使用
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align" target="_blank">
        <code>vertical-alignment</code>
      </a>
      语法来调整元素的对齐方式。请注意，vertical-align 仅对内联、内联块、内联表格以及表格单元格元素有效。
    </p>
    <p>
      根据需要从以下选项中进行选择：<code>.align-baseline</code>、<code>.align-top</code>、<code>.align-middle</code>、<code>.align-bottom</code>、<code
        >.align-text-bottom</code
      >
      和 <code>.align-text-top</code> 。
    </p>
    <p>
      若要垂直居中非内联内容（例如 <code>&lt;div&gt;</code> 元素及其他类似元素），请使用我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex#align-items">flex box utilities</a>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <span class="align-baseline">baseline</span>
        <span class="align-top">top</span>
        <span class="align-middle">middle</span>
        <span class="align-bottom">bottom</span>
        <span class="align-text-top">text-top</span>
        <span class="align-text-bottom">text-bottom</span>
      </div>
      <code-highlight type="html" :code="about1Code" label="html" />
    </div>
    <p>使用表格单元格：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <table style="height: 100px">
          <tbody>
            <tr>
              <td class="align-baseline">baseline</td>
              <td class="align-top">top</td>
              <td class="align-middle">middle</td>
              <td class="align-bottom">bottom</td>
              <td class="align-text-top">text-top</td>
              <td class="align-text-bottom">text-bottom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <code-highlight type="html" :code="about2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const about1Code = `
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>`;

const about2Code = `
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>`;
</script>
