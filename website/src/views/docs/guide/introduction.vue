<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-introduction">
      <a href="#breakpoints-core">核心概念</a>
      <a href="#breakpoints-available">可用的断点</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-introduction" class="docs-content">
    <h1>Introduction 介绍</h1>
    <p class="fs-4 fw-light">
      断点决定了在 Bootstrap 中响应式布局在不同设备或视口尺寸下的表现方式。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/layout/breakpoints/" target="_blank">Bootstrap Breakpoints</a>
    </p>

    <h2 id="breakpoints-core">
      核心概念<a class="anchor-link" aria-label="Link to this section: 核心概念" href="#breakpoints-core"> </a>
    </h2>
    <ul class="docs-content-list">
      <li>
        <p>
          <strong>断点是响应式设计的基础元素。</strong> 利用它们来控制您的布局在特定视口或设备尺寸下何时能够进行调整。
        </p>
      </li>
      <li>
        <p>
          <strong>使用媒体查询按断点来设计您的 CSS 代码。</strong> 媒体查询是 CSS
          的一个特性，它允许您根据一系列浏览器和操作系统参数有条件地应用样式。我们在媒体查询中最常使用的是
          <code>min-width</code>。
        </p>
      </li>
      <li>
        <p>
          <strong>“移动优先，响应式设计”便是 Bootstrap 的目标。</strong> Bootstrap 的 CSS
          的目的是在最小断点下应用最少量的样式以使布局能够正常工作，然后在更大的设备上添加样式来调整该设计。这优化了您的
          CSS，提高了渲染速度，并为您的访客提供了出色的体验。
        </p>
      </li>
    </ul>

    <h2 id="breakpoints-available">
      可用的断点<a class="anchor-link" aria-label="Link to this section: 可用的断点" href="#breakpoints-available"> </a>
    </h2>
    <p>
      Bootstrap 包含了六个默认的断点设置，有时也被称为“网格层级”，用于实现响应式设计。如果您使用的是 Bootstrap 的源 Sass
      文件，这些断点是可以进行自定义设置的。
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Breakpoint</th>
            <th>Class infix</th>
            <th>Dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Extra small</td>
            <td><em>None</em></td>
            <td>&lt;576px</td>
          </tr>
          <tr>
            <td>Small</td>
            <td><code>sm</code></td>
            <td>≥576px</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td><code>md</code></td>
            <td>≥768px</td>
          </tr>
          <tr>
            <td>Large</td>
            <td><code>lg</code></td>
            <td>≥992px</td>
          </tr>
          <tr>
            <td>Extra large</td>
            <td><code>xl</code></td>
            <td>≥1200px</td>
          </tr>
          <tr>
            <td>Extra extra large</td>
            <td><code>xxl</code></td>
            <td>≥1400px</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      每个断点的设定都是为了能够轻松容纳宽度为 12
      的倍数的容器。这些断点也代表了一部分常见的设备尺寸和视口大小——它们并非专门针对每一种使用场景或每一种设备。相反，这些范围为几乎任何设备提供了坚实且一致的基础，以便在此基础上进行构建。
    </p>
  </div>
</template>
