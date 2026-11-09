<template>
  <article class="bd-content">
    <h1>溢出</h1>
    <p>使用这些简写工具类可以快速配置内容如何溢出元素。</p>

    <h2 id="overflow">溢出<a class="anchor-link" href="#overflow" aria-label="溢出链接"></a></h2>
    <p>通过四个默认值和类，可即时调整 <code>overflow</code> 属性。这些类默认不是响应式的。</p>
    <div class="bd-example d-md-flex">
      <div class="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary" style="max-width: 260px; max-height: 100px">这是在设置了宽度和高度尺寸的元素上使用 <code>.overflow-auto</code> 的示例。按照设计，此内容将会垂直滚动。</div>
      <div class="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary" style="max-width: 260px; max-height: 100px">这是在设置了宽度和高度尺寸的元素上使用 <code>.overflow-hidden</code> 的示例。</div>
      <div class="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary" style="max-width: 260px; max-height: 100px">这是在设置了宽度和高度尺寸的元素上使用 <code>.overflow-visible</code> 的示例。</div>
      <div class="overflow-scroll p-3 bg-body-tertiary" style="max-width: 260px; max-height: 100px">这是在设置了宽度和高度尺寸的元素上使用 <code>.overflow-scroll</code> 的示例。</div>
    </div>
    <CodeWrapper
      code='&lt;div class="overflow-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-scroll"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <h3 id="overflow-x"><code>overflow-x</code><a class="anchor-link" href="#overflow-x" aria-label="overflow-x链接"></a></h3>
    <p>调整 <code>overflow-x</code> 属性，以影响内容的水平溢出。</p>
    <div class="bd-example d-md-flex">
      <div class="overflow-x-auto p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px; white-space: nowrap">
        <div>在元素上使用 <code>.overflow-x-auto</code> 的示例</div>
        <div>该元素设置了宽度和高度尺寸。</div>
      </div>
      <div class="overflow-x-hidden p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px; white-space: nowrap">
        <div><code>.overflow-x-hidden</code> 示例</div>
        <div>该元素设置了宽度和高度尺寸。</div>
      </div>
      <div class="overflow-x-visible p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px; white-space: nowrap">
        <div><code>.overflow-x-visible</code> 示例</div>
        <div>该元素设置了宽度和高度尺寸。</div>
      </div>
      <div class="overflow-x-scroll p-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px; white-space: nowrap">
        <div>在元素上使用 <code>.overflow-x-scroll</code> 的示例</div>
        <div>该元素设置了宽度和高度尺寸。</div>
      </div>
    </div>
    <CodeWrapper
      code='&lt;div class="overflow-x-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-x-scroll"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <h3 id="overflow-y"><code>overflow-y</code><a class="anchor-link" href="#overflow-y" aria-label="overflow-y链接"></a></h3>
    <p>调整 <code>overflow-y</code> 属性，以影响内容的垂直溢出。</p>
    <div class="bd-example d-md-flex">
      <div class="overflow-y-auto p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px">在设置了宽度和高度尺寸的元素上使用 <code>.overflow-y-auto</code> 的示例。</div>
      <div class="overflow-y-hidden p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px">在设置了宽度和高度尺寸的元素上使用 <code>.overflow-y-hidden</code> 的示例。</div>
      <div class="overflow-y-visible p-3 mb-3 mb-md-0 me-md-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px">在设置了宽度和高度尺寸的元素上使用 <code>.overflow-y-visible</code> 的示例。</div>
      <div class="overflow-y-scroll p-3 bg-body-tertiary w-100" style="max-width: 200px; max-height: 100px">在设置了宽度和高度尺寸的元素上使用 <code>.overflow-y-scroll</code> 的示例。</div>
    </div>
    <CodeWrapper
      code='&lt;div class="overflow-y-auto"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-hidden"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-visible"&gt;...&lt;/div&gt;
&lt;div class="overflow-y-scroll"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <p>使用 Sass 变量，你可以通过修改 <code>_variables.scss</code> 中的 <code>$overflows</code> 变量来自定义溢出工具类。</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      溢出工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-overflow" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overflow">溢出</a></li>
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
