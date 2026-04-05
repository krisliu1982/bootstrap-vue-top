<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-overflow">
      <a href="#overflow-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-overflow" class="docs-content">
    <h1>Overflow 溢出</h1>
    <p class="fs-4 fw-light">
      使用这些简写工具可以快速设置内容在超出元素范围时的显示方式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/overflow/" target="_blank">Boostrap Overflow</a>
    </p>

    <h2 id="overflow-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#overflow-about"> </a>
    </h2>
    <p>
      通过四个默认值和类来动态调整 <code>overflow</code> 属性。这些类默认情况下并不具备响应式效果。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <div class="overflow-auto p-3 border"
            style="width: 150px; height: 100px;">
            <p>This is an example of using <code>.overflow-auto</code> on an element with set width and height
              dimensions. By design, this content will vertically scroll.</p>
          </div>
          <div class="overflow-hidden p-3 border"
            style="width: 150px; height: 100px;">
            <p>This is an example of using <code>.overflow-hidden</code> on an element with set width and height
              dimensions.</p>
          </div>
          <div class="overflow-visible p-3 border"
            style="width: 150px; height: 100px;">
            <p>This is an example of using <code>.overflow-visible</code> on an element with set width and height
              dimensions.</p>
          </div>
          <div class="overflow-scroll p-3 border" style="width: 150px; height: 100px;">
            <p>This is an example of using <code>.overflow-scroll</code> on an element with set width and height
              dimensions.</p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="aboutCode" label="html" />
    </div>
    <p>调整 <code>overflow-x</code> 属性可影响内容在水平方向上的溢出情况。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <div class="overflow-x-auto p-3 border"
            style="width: 150px; height: 100px; white-space: nowrap;">
            <div><code>.overflow-x-auto</code> example on an element</div>
            <div> with set width and height dimensions.</div>
          </div>
          <div class="overflow-x-hidden p-3 border"
            style="width: 150px; height: 100px;white-space: nowrap;">
            <div><code>.overflow-x-hidden</code> example</div>
            <div>on an element with set width and height dimensions.</div>
          </div>
          <div class="overflow-x-visible p-3 border"
            style="width: 150px; height: 100px;white-space: nowrap;">
            <div><code>.overflow-x-visible</code> example </div>
            <div>on an element with set width and height dimensions.</div>
          </div>
          <div class="overflow-x-scroll p-3 border"
            style="width: 150px; height: 100px;white-space: nowrap;">
            <div><code>.overflow-x-scroll</code> example on an element</div>
            <div> with set width and height dimensions.</div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="about1Code" label="html" />
    </div>
    <p>调整 <code>overflow-y</code> 属性可影响内容在垂直方向上的溢出情况。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <div class="overflow-y-auto p-3 border"
            style="width: 150px; height: 100px;">
            <p><code>.overflow-y-auto</code> example on an element with set width and height dimensions.</p>
          </div>
          <div class="overflow-y-hidden p-3 border"
            style="width: 150px; height: 100px;">
            <p><code>.overflow-y-hidden</code> example on an element with set width and height dimensions.</p>
          </div>
          <div class="overflow-y-visible p-3 border"
            style="width: 150px; height: 100px;">
            <p><code>.overflow-y-visible</code> example on an element with set width and height dimensions.</p>
          </div>
          <div class="overflow-y-scroll p-3 border" style="width: 150px; height: 100px;">
            <p><code>.overflow-y-scroll</code> example on an element with set width and height dimensions.</p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="about2Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const aboutCode = `
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>`;

const about1Code = `
<div class="overflow-x-auto">...</div>
<div class="overflow-x-hidden">...</div>
<div class="overflow-x-visible">...</div>
<div class="overflow-x-scroll">...</div>`;

const about2Code = `
<div class="overflow-y-auto">...</div>
<div class="overflow-y-hidden">...</div>
<div class="overflow-y-visible">...</div>
<div class="overflow-y-scroll">...</div>`;
</script>
