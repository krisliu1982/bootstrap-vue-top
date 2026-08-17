<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-containers">
      <a href="#containers-about">使用说明</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-containers" class="docs-content">
    <h1>Containers 容器</h1>
    <p class="fs-4 fw-light">
      容器是 Bootstrap 的一个基本组成部分，它能够容纳、填充并调整页面内容在特定设备或视口中的布局。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/layout/containers/" target="_blank">Bootstrap Containers</a>
    </p>

    <h2 id="containers-about">
      使用说明<a class="anchor-link" aria-label="Link to this section: 使用说明" href="#containers-about"> </a>
    </h2>
    <p>
      容器是 Bootstrap
      中最基本的布局元素，当使用网格系统时，<strong>必须使用容器</strong>。容器用于容纳、填充以及（有时）使内容在其中居中对齐。虽然容器可以嵌套，但大多数布局并不需要嵌套的容器。
    </p>
    <p>Bootstrap 提供了三种不同的容器：</p>
    <ul class="docs-content-list">
      <li><code>.container</code>，它会在每个响应式断点处设置一个 <code>max-width</code></li>
      <li><code>.container-{breakpoint}</code>，直到指定的断点之前为 <code>width: 100%</code></li>
      <li><code>.container-fluid</code>，在所有断点处其 <code>width: 100%</code></li>
    </ul>
    <p>
      下面的表格展示了每个容器的 <code>max-width</code> 与原始的 <code>.container</code> 和
      <code>.container-fluid</code> 在每个断点下的对比情况。
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>
              Extra small
              <div class="fw-normal">&lt;576px</div>
            </th>
            <th>
              Small
              <div class="fw-normal">≥576px</div>
            </th>
            <th>
              Medium
              <div class="fw-normal">≥768px</div>
            </th>
            <th>
              Large
              <div class="fw-normal">≥992px</div>
            </th>
            <th>
              X-Large
              <div class="fw-normal">≥1200px</div>
            </th>
            <th>
              XX-Large
              <div class="fw-normal">≥1400px</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.container</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-sm</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-md</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-lg</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-xl</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-xxl</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td>1320px</td>
          </tr>
          <tr>
            <td><code>.container-fluid</code></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
            <td><span class="text-body-secondary">100%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>
