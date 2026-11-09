<template>
  <article class="bd-content">
    <h1>关闭按钮</h1>
    <p>一个通用的关闭按钮，用于关闭模态框和警告框等内容。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>使用 <code>.btn-close</code> 为组件提供关闭或隐藏选项。默认样式较为简单，但高度可自定义。修改 Sass 变量即可替换默认的 <code>background-image</code>。<strong>务必为屏幕阅读器提供文本</strong>，就像我们使用 <code>aria-label</code> 所做的那样。</p>
    <Example code='<button type="button" class="btn-close" aria-label="Close"></button>' />
    <h2 id="disabled-state">禁用状态<a class="anchor-link" href="#disabled-state" aria-label="禁用状态链接"></a></h2>
    <p>被禁用的关闭按钮会改变其 <code>opacity</code>。我们还应用了 <code>pointer-events: none</code> 和 <code>user-select: none</code>，以防止触发悬停和激活状态。</p>
    <Example code='<button type="button" class="btn-close" disabled aria-label="Close"></button>' />
    <h2 id="dark-variant">深色变体<a class="anchor-link" href="#dark-variant" aria-label="深色变体链接"></a></h2>
    <DeprecatedIn version="5.3.0" /><Callout type="warning">
      <p><strong>请注意！</strong> 自 v5.3.0 起，<code>.btn-close-white</code> 类已废弃。请改用 <code>data-bs-theme=&quot;dark&quot;</code> 来更改关闭按钮的颜色模式。</p>
    </Callout>
    <p>在 <code>.btn-close</code> 或其父元素上添加 <code>data-bs-theme=&quot;dark&quot;</code> 即可反转关闭按钮。这会使用 <code>filter</code> 属性反转 <code>background-image</code>，而不会覆盖其值。</p>
    <Example
      class="bg-dark"
      code='<div data-bs-theme="dark">
  <button type="button" class="btn-close" aria-label="Close"></button>
  <button type="button" class="btn-close" disabled aria-label="Close"></button>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.3.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，关闭按钮现在在
      <code>.btn-close</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="close-css-vars" file="scss/_close.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="close-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#example">示例</a></li>
      <li><a href="#disabled-state">禁用状态</a></li>
      <li><a href="#dark-variant">深色变体</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
