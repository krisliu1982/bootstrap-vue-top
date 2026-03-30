<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-display">
      <a href="#display-notation">表示法</a>
      <a href="#display-hide">隐藏元素</a>
      <a href="#display-print">打印显示</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-display" class="docs-content">
    <h1>Display 显示属性</h1>
    <p class="fs-4 fw-light">
      借助我们的显示工具，您可以快速、灵活地调整组件的显示值及其他内容。它支持一些常见的显示值，并且还提供了用于控制打印时显示效果的一些附加功能。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/utilities/display/" target="_blank">Boostrap Display</a>
    </p>
    <p>
      通过使用我们的响应式显示类来更改 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
        target="_blank"><code>display</code> 属性</a> 的值。我们特意只支持 <code>display</code>
      属性的所有可能值中的一个子集。您可以根据需要组合使用这些类以实现不同的效果。
    </p>

    <h2 id="display-notation">
      表示法<a class="anchor-link" aria-label="Link to this section: 表示法" href="#display-notation"> </a>
    </h2>
    <p>
      适用于所有 <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints" target="_blank">断点</a>（从 <code>xs</code> 到
      <code>xxl</code>）的显示类中没有断点缩写。这是因为这些类是从 <code>min-width: 0;</code> 开始应用的，因此不受媒体查询的限制。然而，其余的断点确实包含断点缩写。
    </p>
    <p>因此，这些类的名称采用的格式为：</p>
    <ul class="docs-content-list">
      <li>对于 <code>xs</code>，使用 <code>.d-{value}</code> ；</li>
      <li>对于 <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>，使用
        <code>.d-{breakpoint}-{value}</code> 。
      </li>
    </ul>
    <p>其中 <em>value</em> 指的是以下之一：</p>
    <ul class="docs-content-list">
      <li><code>none</code></li>
      <li><code>inline</code></li>
      <li><code>inline-block</code></li>
      <li><code>block</code></li>
      <li><code>grid</code></li>
      <li><code>inline-grid</code></li>
      <li><code>table</code></li>
      <li><code>table-cell</code></li>
      <li><code>table-row</code></li>
      <li><code>flex</code></li>
      <li><code>inline-flex</code></li>
    </ul>
    <p>媒体查询会根据指定的断点（或更大尺寸）来调整屏幕宽度。例如，<code>.d-lg-none</code> 会在 <code>lg</code>、<code>xl</code> 和 <code>xxl</code> 屏幕上设置
      <code>display: none;</code> 。
    </p>

    <h2 id="display-hide">
      隐藏元素<a class="anchor-link" aria-label="Link to this section: 隐藏元素" href="#display-hide"> </a>
    </h2>
    <p>
      为了实现更快速且适用于移动设备的开发，应使用响应式显示类来根据设备情况显示和隐藏元素。避免创建完全不同的同一网站的不同版本，而是针对每个屏幕尺寸以响应式方式隐藏元素。
    </p>
    <p>若要隐藏元素，只需使用 <code>.d-none</code> 类，或者使用 <code>.d-{sm,md,lg,xl,xxl}-none</code> 类中的任何一个来针对任何响应式屏幕变体进行设置即可。</p>
    <p>若要仅在特定屏幕尺寸范围内显示某个元素，您可以将一个 <code>.d-*-none</code> 类与一个 <code>.d-*-*</code> 类组合使用，例如
      <code>.d-none .d-md-block .d-xl-none</code> 将会使该元素在除中型和大型设备之外的所有屏幕尺寸上均不显示。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Screen size</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hidden on all</td>
            <td><code>.d-none</code></td>
          </tr>
          <tr>
            <td>Hidden only on xs</td>
            <td><code>.d-none .d-sm-block</code></td>
          </tr>
          <tr>
            <td>Hidden only on sm</td>
            <td><code>.d-sm-none .d-md-block</code></td>
          </tr>
          <tr>
            <td>Hidden only on md</td>
            <td><code>.d-md-none .d-lg-block</code></td>
          </tr>
          <tr>
            <td>Hidden only on lg</td>
            <td><code>.d-lg-none .d-xl-block</code></td>
          </tr>
          <tr>
            <td>Hidden only on xl</td>
            <td><code>.d-xl-none .d-xxl-block</code></td>
          </tr>
          <tr>
            <td>Hidden only on xxl</td>
            <td><code>.d-xxl-none</code></td>
          </tr>
          <tr>
            <td>Visible on all</td>
            <td><code>.d-block</code></td>
          </tr>
          <tr>
            <td>Visible only on xs</td>
            <td><code>.d-block .d-sm-none</code></td>
          </tr>
          <tr>
            <td>Visible only on sm</td>
            <td><code>.d-none .d-sm-block .d-md-none</code></td>
          </tr>
          <tr>
            <td>Visible only on md</td>
            <td><code>.d-none .d-md-block .d-lg-none</code></td>
          </tr>
          <tr>
            <td>Visible only on lg</td>
            <td><code>.d-none .d-lg-block .d-xl-none</code></td>
          </tr>
          <tr>
            <td>Visible only on xl</td>
            <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
          </tr>
          <tr>
            <td>Visible only on xxl</td>
            <td><code>.d-none .d-xxl-block</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="display-print">
      打印显示<a class="anchor-link" aria-label="Link to this section: 打印显示" href="#display-opacity"> </a>
    </h2>
    <p>使用我们的打印显示实用类来更改元素的 <code>display</code> 值，以便在打印时生效。该功能还支持与我们的响应式 <code>.d-*</code> 实用类相同的 <code>display</code> 值。
    </p>
    <ul class="docs-content-list">
      <li><code>.d-print-none</code></li>
      <li><code>.d-print-inline</code></li>
      <li><code>.d-print-inline-block</code></li>
      <li><code>.d-print-block</code></li>
      <li><code>.d-print-grid</code></li>
      <li><code>.d-print-inline-grid</code></li>
      <li><code>.d-print-table</code></li>
      <li><code>.d-print-table-row</code></li>
      <li><code>.d-print-table-cell</code></li>
      <li><code>.d-print-flex</code></li>
      <li><code>.d-print-inline-flex</code></li>
    </ul>
    <p>打印类和显示类可以合并在一起。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="d-print-none">Screen Only (Hide on print only)</div>
        <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
        <div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
      </div>
      <code-highlight type="html" :code="printCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const printCode = `<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>`;
</script>
