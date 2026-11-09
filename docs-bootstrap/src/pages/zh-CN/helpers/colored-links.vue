<template>
  <article class="bd-content">
    <h1>彩色链接</h1>
    <p>带有悬停状态的彩色链接</p>

    <h2 id="link-colors">链接颜色<a class="anchor-link" href="#link-colors" aria-label="链接颜色链接"></a></h2>
    <p>
      你可以使用 <code>.link-*</code> 类为链接着色。与<a href="/utilities/colors"><code>.text-*</code> 类</a>不同，这些类具有 <code>:hover</code> 和 <code>:focus</code> 状态。部分链接样式使用相对较浅的前景色，因此只能用于深色背景，以保证
      足够的对比度。
    </p>
    <Callout>
      <p>
        <strong>请注意！</strong><code>.link-body-emphasis</code> 是目前唯一能适应颜色模式的彩色链接。在 v6 发布、我们能够针对颜色模式更全面地重构主题颜色之前，它被视为一个特例。在此之前，它是一种独特的高对比度链接颜色，带有自定义的 <code>:hover</code> 和
        <code>:focus</code> 样式。不过，它仍然会响应新的链接工具类。
      </p> </Callout
    ><Example :code="[...data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;link-${themeColor.name}&quot;>${themeColor.name} link</a></p>`), `<p><a href=&quot;#&quot; class=&quot;link-body-emphasis&quot;>Emphasis link</a></p>`].join('\n')" /><Callout name="warning-color-assistive-technologies" />
    <h2 id="link-utilities">链接工具类<a class="anchor-link" href="#link-utilities" aria-label="链接工具类链接"></a></h2>
    <AddedIn version="5.3.0" />
    <p>彩色链接也可以通过我们的<a href="/utilities/link/">链接工具类</a>进行修改。</p>
    <Example
      :code="
        [
          ...data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover&quot;>${themeColor.name} link</a></p>`),
          `<p><a href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover&quot;>Emphasis link</a></p>`
        ].join('\n')
      "
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#link-colors">链接颜色</a></li>
      <li>
       <a href="#link-utilities">链接工具类</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
