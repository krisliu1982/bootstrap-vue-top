<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-interactions">
      <a href="#interactions-selection">文本选择</a>
      <a href="#interactions-pointer">指针事件</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-interactions" class="docs-content">
    <h1>Interactions 交互</h1>
    <p class="fs-4 fw-light">
      用于改变用户与网站内容交互方式的工具类。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/interactions/" target="_blank">Boostrap Interactions</a>
    </p>

    <h2 id="interactions-selection">
      文本选择<a class="anchor-link" aria-label="Link to this section: 文本选择" href="#interactions-selection"> </a>
    </h2>
    <p>改变用户与内容进行交互时所选择内容的方式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="user-select-all">当用户点击此段落时，它将被全部选中。</p>
        <p class="user-select-auto">此段落具有默认的选择功能。</p>
        <p class="user-select-none">当用户点击此段落时，它将无法被选中。</p>
      </div>
      <code-highlight type="html" :code="selectionCode" label="html" />
    </div>

    <h2 id="interactions-pointer">
      指针事件<a class="anchor-link" aria-label="Link to this section: 指针事件" href="#interactions-pointer"> </a>
    </h2>
    <p>Bootstrap 提供了 <code>.pe-none</code> 和 <code>.pe-auto</code> 这两个类，用于阻止或添加元素交互效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">此链接</a>无法被点击。</p>
        <p><a href="#" class="pe-auto">此链接</a>可以被点击（这是默认行为）。</p>
        <p class="pe-none">
          <a href="#" tabindex="-1" aria-disabled="true">此链接</a>由于其父元素继承了
          <code>pointer-events</code> 属性而无法被点击。然而，<a href="#" class="pe-auto">此链接</a>具有
          <code>pe-auto</code> 类，因此可以被点击。
        </p>
      </div>
      <code-highlight type="html" :code="pointerCode" label="html" />
      <p>
        <code>.pe-none</code> 类（以及它所设置的 <code>pointer-events</code> CSS
        属性）仅能阻止指针（鼠标、触控笔、触摸设备）的交互操作。带有
        <code>.pe-none</code>
        样式的链接和控件，默认情况下对于键盘用户来说仍然是可聚焦和可操作的。若要确保即使对于键盘用户而言它们也能完全处于中立状态，您可能需要添加其他属性，例如
        <code>tabindex="-1"</code>（以防止它们获得键盘焦点）和
        <code>aria-disabled="true"</code>（向辅助技术传达它们实际上已被禁用的事实），并且可能还需要使用 JavaScript
        来完全阻止它们的可操作性。
      </p>
      <p>如果可能的话，较为简单的解决办法是：</p>
      <ul class="docs-content-list">
        <li>对于表单控件，添加 <code>disabled</code> HTML 属性。</li>
        <li>对于链接，删除 <code>href</code> 属性，使其成为非交互式的锚点或占位符链接。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const selectionCode = `
<p class="user-select-all">当用户点击此段落时，它将被全部选中。</p>
<p class="user-select-auto">此段落具有默认的选择功能。</p>
<p class="user-select-none">当用户点击此段落时，它将无法被选中。</p>`;

const pointerCode = `
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">此链接</a>无法被点击。</p>
<p><a href="#" class="pe-auto">此链接</a>可以被点击（这是默认行为）。</p>
<p class="pe-none">
  <a href="#" tabindex="-1" aria-disabled="true">此链接</a>
  由于其父元素继承了 <code>pointer-events</code> 属性而无法被点击。
  然而，<a href="#" class="pe-auto">此链接</a>具有 <code>pe-auto</code> 类，因此可以被点击。
</p>`;
</script>
