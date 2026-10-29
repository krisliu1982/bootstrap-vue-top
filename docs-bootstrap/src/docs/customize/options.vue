<template>
<article class="docs-content prose">
    <h1>选项</h1>
<p>使用内置变量快速自定义 Bootstrap，轻松切换控制样式和行为的全局 CSS 偏好。</p>

<p>使用我们内置的自定义变量文件自定义 Bootstrap，并通过新的 <code>$enable-*</code> Sass 变量轻松切换全局 CSS 偏好。覆盖变量的值，并根据需要使用 <code>npm run test</code> 重新编译。</p>

<p>你可以在 Bootstrap 的 <code>scss/_config.scss</code> 文件中找到并自定义这些关键全局选项的变量。</p>

<table class="table table-options">
    <thead>
        <tr>
            <th>变量</th>
            <th>值</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>$spacer</code></td>
            <td><code>1rem</code>（默认），或任何大于 0 的值</td>
            <td>指定默认间距值，用于以编程方式生成我们的<a href="[[docsref:/utilities/margin]]">外边距</a>、<a href="[[docsref:/utilities/padding]]">内边距</a>和<a href="[[docsref:/utilities/gap]]">间隙</a>工具类。</td>
        </tr>
        <tr>
            <td><code>$enable-rounded</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>在各种组件上启用预定义的 <code>border-radius</code> 样式。</td>
        </tr>
        <tr>
            <td><code>$enable-shadows</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>在各种组件上启用预定义的装饰性 <code>box-shadow</code> 样式。不影响用于焦点状态的 <code>box-shadow</code>。</td>
        </tr>
        <tr>
            <td><code>$enable-gradients</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>通过各种组件上的 <code>background-image</code> 样式启用预定义渐变。</td>
        </tr>
        <tr>
            <td><code>$enable-transitions</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>在各种组件上启用预定义的 <code>transition</code>。</td>
        </tr>
        <tr>
            <td><code>$enable-reduced-motion</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>启用 <a href="[[docsref:/getting-started/accessibility#reduced-motion]]"><code>prefers-reduced-motion</code> 媒体查询</a>，根据用户的浏览器/操作系统偏好抑制某些动画/过渡。</td>
        </tr>
        <tr>
            <td><code>$enable-grid-classes</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>启用网格系统 CSS 类的生成（例如 <code>.row</code>、<code>.md:col-1</code> 等）。</td>
        </tr>
        <tr>
            <td><code>$enable-cssgrid</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>启用 <a href="[[docsref:/layout/css-grid]]">CSS 网格系统</a>（例如 <code>.grid</code>、<code>.md:g-col-1</code> 等）。</td>
        </tr>
        <tr>
            <td><code>$enable-container-classes</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>启用布局容器 CSS 类的生成。</td>
        </tr>
        <tr>
            <td><code>$enable-button-pointers</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>为非禁用按钮元素添加“手形”光标。</td>
        </tr>
        <tr>
            <td><code>$enable-negative-margins</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>启用<a href="[[docsref:/utilities/margin#negative-margin]]">负外边距工具类</a>的生成。</td>
        </tr>
        <tr>
            <td><code>$enable-deprecation-messages</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>设置为 <code>false</code> 以隐藏使用任何已弃用 mixin 和函数（计划在未来主要版本中移除）时的警告。</td>
        </tr>
        <tr>
            <td><code>$enable-smooth-scroll</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>全局应用 <code>scroll-behavior: smooth</code>，但通过 <a href="[[docsref:/getting-started/accessibility#reduced-motion]]"><code>prefers-reduced-motion</code> 媒体查询</a>要求减少动态效果的用户除外。</td>
        </tr>
    </tbody>
</table>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
    </ul>
</nav>
  </template>