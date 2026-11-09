<template>
  <article class="bd-content">
    <h1>定位</h1>
    <p>使用这些工具类可以快速配置元素的位置。</p>

    <h2 id="fixed-top">固定顶部<a class="anchor-link" href="#fixed-top" aria-label="固定顶部链接"></a></h2>
    <p>将元素定位在视口顶部，横跨整个宽度。请务必理解项目中固定定位的影响；你可能需要添加额外的 CSS。</p>
    <CodeWrapper code='&lt;div class="fixed-top"&gt;...&lt;/div&gt;' lang="html" />
    <h2 id="fixed-bottom">固定底部<a class="anchor-link" href="#fixed-bottom" aria-label="固定底部链接"></a></h2>
    <p>将元素定位在视口底部，横跨整个宽度。请务必理解项目中固定定位的影响；你可能需要添加额外的 CSS。</p>
    <CodeWrapper code='&lt;div class="fixed-bottom"&gt;...&lt;/div&gt;' lang="html" />
    <h2 id="sticky-top">粘性顶部<a class="anchor-link" href="#sticky-top" aria-label="粘性顶部链接"></a></h2>
    <p>将元素定位在视口顶部，横跨整个宽度，但仅在滚动越过它之后才会固定。</p>
    <CodeWrapper code='&lt;div class="sticky-top"&gt;...&lt;/div&gt;' lang="html" />
    <h2 id="responsive-sticky-top">响应式粘性顶部<a class="anchor-link" href="#responsive-sticky-top" aria-label="响应式粘性顶部链接"></a></h2>
    <p><code>.sticky-top</code> 工具类也提供了响应式变体。</p>
    <CodeWrapper
      code='&lt;div class="sticky-sm-top"&gt;Stick to the top on viewports sized SM (small) or wider&lt;/div&gt;
&lt;div class="sticky-md-top"&gt;Stick to the top on viewports sized MD (medium) or wider&lt;/div&gt;
&lt;div class="sticky-lg-top"&gt;Stick to the top on viewports sized LG (large) or wider&lt;/div&gt;
&lt;div class="sticky-xl-top"&gt;Stick to the top on viewports sized XL (extra-large) or wider&lt;/div&gt;
&lt;div class="sticky-xxl-top"&gt;Stick to the top on viewports sized XXL (extra-extra-large) or wider&lt;/div&gt;'
      lang="html"
    />
    <h2 id="sticky-bottom">粘性底部<a class="anchor-link" href="#sticky-bottom" aria-label="粘性底部链接"></a></h2>
    <p>将元素定位在视口底部，横跨整个宽度，但仅在滚动越过它之后才会固定。</p>
    <CodeWrapper code='&lt;div class="sticky-bottom"&gt;...&lt;/div&gt;' lang="html" />
    <h2 id="responsive-sticky-bottom">响应式粘性底部<a class="anchor-link" href="#responsive-sticky-bottom" aria-label="响应式粘性底部链接"></a></h2>
    <p><code>.sticky-bottom</code> 工具类也提供了响应式变体。</p>
    <CodeWrapper
      code='&lt;div class="sticky-sm-bottom"&gt;Stick to the bottom on viewports sized SM (small) or wider&lt;/div&gt;
&lt;div class="sticky-md-bottom"&gt;Stick to the bottom on viewports sized MD (medium) or wider&lt;/div&gt;
&lt;div class="sticky-lg-bottom"&gt;Stick to the bottom on viewports sized LG (large) or wider&lt;/div&gt;
&lt;div class="sticky-xl-bottom"&gt;Stick to the bottom on viewports sized XL (extra-large) or wider&lt;/div&gt;
&lt;div class="sticky-xxl-bottom"&gt;Stick to the bottom on viewports sized XXL (extra-extra-large) or wider&lt;/div&gt;'
      lang="html"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#fixed-top">固定顶部</a></li>
      <li><a href="#fixed-bottom">固定底部</a></li>
      <li><a href="#sticky-top">粘性顶部</a></li>
      <li><a href="#responsive-sticky-top">响应式粘性顶部</a></li>
      <li><a href="#sticky-bottom">粘性底部</a></li>
      <li>
        <a href="#responsive-sticky-bottom">响应式粘性底部</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
