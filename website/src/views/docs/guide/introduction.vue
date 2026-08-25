<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-introduction">
      <a href="#introduction-features">特点</a>
      <a href="#introduction-browser">浏览器支持</a>
      <a href="#introduction-license">开源协议</a>
      <a href="#introduction-support">商业支持</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-introduction" class="docs-content">
    <h1>Introduction 介绍</h1>
    <ul class="docs-content-list">
      <li><p>这是一个融合了 Bootstrap 5.3.x 和 Vue 3.x 的现代化前端框架解决方案，充分发挥了两者的优势：Bootstrap 5 提供强大的 UI 组件库和响应式布局系统，Vue 3 则带来了高效的响应式数据驱动和组合式 API。
</p></li>
<li><p>严格遵循“样式归 Bootstrap，行为归 Vue”的架构范式。完全继承 Bootstrap 的原子化工具类（间距、排版、颜色、Flex/Grid 栅格），开发者无需学习新的 CSS类名，直接使用 d-flex、text-primary、mb-3 等原生类名控制外观。
</p></li>
<li><p>所有 Bootstrap 官方文档中关于样式类的说明（如表格条纹、卡片分组、网格偏移）在 Vue项目中直接适用，降低了团队的学习与迁移成本。</p></li>
    </ul>

    <h2 id="introduction-features">
      特点<a class="anchor-link" aria-label="Link to this section: 特点" href="#introduction-features"> </a>
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
