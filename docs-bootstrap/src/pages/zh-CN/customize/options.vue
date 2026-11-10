<template>
  <article class="bd-content">
    <h1>选项</h1>
    <p class="lead">使用内置变量快速自定义 Bootstrap，轻松切换控制样式和行为的全局 CSS 偏好设置。</p>

    <p>
      使用我们内置的自定义变量文件自定义 Bootstrap，并通过新增的
      <code>$enable-*</code> Sass 变量轻松切换全局 CSS 偏好设置。根据需要覆盖变量的值，并用 <code>npm run test</code> 重新编译。
    </p>
    <p>
      你可以在 Bootstrap 的 <code>scss/_variables.scss</code> 文件中找到并自定义这些关键全局选项的变量。
    </p>
    <div class="table-responsive">
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
            <td><code>1rem</code>（默认）或任何大于 0 的值</td>
            <td>
              指定用于以编程方式生成<a href="/utilities/spacing">间距工具类</a>的默认间距值。
            </td>
          </tr>
          <tr>
            <td><code>$enable-dark-mode</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>
              在整个项目及其组件中启用内置的
             <a href="/customize/color-modes#dark-mode">深色模式支持</a>。
            </td>
          </tr>
          <tr>
            <td><code>$enable-rounded</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>在各种组件上启用预定义的 <code>border-radius</code> 样式。</td>
          </tr>
          <tr>
            <td><code>$enable-shadows</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>在各种组件上启用预定义的装饰性 <code>box-shadow</code> 样式。不影响用于聚焦状态的 <code>box-shadow</code>。</td>
          </tr>
          <tr>
            <td><code>$enable-gradients</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>通过 <code>background-image</code> 样式在各种组件上启用预定义的渐变。</td>
          </tr>
          <tr>
            <td><code>$enable-transitions</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>在各种组件上启用预定义的 <code>transition</code>。</td>
          </tr>
          <tr>
            <td><code>$enable-reduced-motion</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>
              启用
             <a href="/getting-started/accessibility#reduced-motion"><code>prefers-reduced-motion</code> 媒体查询</a>，它会根据用户的浏览器/操作系统偏好设置抑制某些动画/过渡效果。
            </td>
          </tr>
          <tr>
            <td><code>$enable-grid-classes</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>启用为栅格系统生成 CSS 类（例如 <code>.row</code>、<code>.col-md-1</code> 等）。</td>
          </tr>
          <tr>
            <td><code>$enable-cssgrid</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>启用实验性的 CSS Grid 系统（例如 <code>.grid</code>、<code>.g-col-md-1</code> 等）。</td>
          </tr>
          <tr>
            <td><code>$enable-container-classes</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>启用为布局容器生成 CSS 类。（v5.2.0 新增）</td>
          </tr>
          <tr>
            <td><code>$enable-caret</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>在 <code>.dropdown-toggle</code> 上启用伪元素箭头。</td>
          </tr>
          <tr>
            <td><code>$enable-button-pointers</code></td>
            <td><code>true</code>（默认）或 <code>false</code></td>
            <td>为未禁用的按钮元素添加“手形”光标。</td>
          </tr>
          <tr>
            <td><code>$enable-rfs</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>全局启用<a href="/getting-started/rfs">RFS</a>。</td>
          </tr>
          <tr>
            <td><code>$enable-validation-icons</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>在文本输入框和部分自定义表单中启用用于验证状态的 <code>background-image</code> 图标。</td>
          </tr>
          <tr>
            <td><code>$enable-negative-margins</code></td>
            <td><code>true</code> 或 <code>false</code>（默认）</td>
            <td>
              启用<a href="/utilities/spacing#negative-margin">负外边距工具类</a>的生成。
            </td>
          </tr>
          <tr>
            <td><code>$enable-deprecation-messages</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>设为 <code>false</code> 以在使用任何计划在 <code>v6</code> 中移除的废弃 mixin 和函数时隐藏警告。</td>
          </tr>
          <tr>
            <td><code>$enable-important-utilities</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>在工具类中启用 <code>!important</code> 后缀。</td>
          </tr>
          <tr>
            <td><code>$enable-smooth-scroll</code></td>
            <td><code>true</code> （默认） or <code>false</code></td>
            <td>
              全局应用 <code>scroll-behavior: smooth</code>，但通过
             <a href="/getting-started/accessibility#reduced-motion"><code>prefers-reduced-motion</code> 媒体查询</a>请求减少动态效果的用户除外
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DocsPager />
  </article>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
