<template>
  <article class="bd-content">
    <h1>可见性</h1>
    <p>使用可见性工具类在不修改元素显示方式的情况下控制元素的可见性。</p>

    <p>使用我们的可见性工具类设置元素的 <code>visibility</code>。这些工具类完全不修改 <code>display</code> 值，也不影响布局——<code>.invisible</code> 元素仍会在页面中占据空间。</p>
    <Callout type="warning">
      <p>带有 <code>.invisible</code> 类的元素将<em>同时</em>在视觉上和辅助技术/屏幕阅读器用户面前被隐藏。</p>
    </Callout>
    <p>根据需要应用 <code>.visible</code> 或 <code>.invisible</code>。</p>
    <CodeWrapper
      code='&lt;div class="visible"&gt;...&lt;/div&gt;
&lt;div class="invisible"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <CodeWrapper
      code="// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
"
      lang="scss"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      可见性工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-visibility" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-utilities-api">Sass 工具类 API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
