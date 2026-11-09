<template>
  <article class="bd-content">
    <h1>对象适配</h1>
    <p>使用对象适配工具类来修改替换元素（如 <code>&lt;img&gt;</code> 或 <code>&lt;video&gt;</code>）的内容应如何调整尺寸以适应其容器。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>
      使用我们响应式的 <code>object-fit</code> 工具类更改
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code>object-fit</code> 属性</a>的值。该属性会以多种方式告知内容填充父容器，例如保持长宽比，或拉伸以尽可能占据更多空间。
    </p>
    <p><code>object-fit</code> 取值的类使用 <code>.object-fit-{value}</code> 格式命名。可从以下取值中选择：</p>
    <ul>
      <li><code>contain</code></li>
      <li><code>cover</code></li>
      <li><code>fill</code></li>
      <li><code>scale</code>（用于 scale-down）</li>
      <li><code>none</code></li>
    </ul>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>为<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">替换元素</a>添加 <code>object-fit-{value}</code> 类：</p>
    <ExampleCustom
      class="d-flex overflow-auto"
      code='<img src="..." class="object-fit-contain border rounded" alt="...">
<img src="..." class="object-fit-cover border rounded" alt="...">
<img src="..." class="object-fit-fill border rounded" alt="...">
<img src="..." class="object-fit-scale border rounded" alt="...">
<img src="..." class="object-fit-none border rounded" alt="...">'
      ><Placeholder width="140" height="120" class="object-fit-contain border rounded" text="对象适配 contain" markup="img" />
      <Placeholder width="140" height="120" class="object-fit-cover border rounded" text="对象适配 cover" markup="img" />
      <Placeholder width="140" height="120" class="object-fit-fill border rounded" text="对象适配 fill" markup="img" />
      <Placeholder width="140" height="120" class="object-fit-scale border rounded" text="对象适配 scale down" markup="img" />
      <Placeholder width="140" height="120" class="object-fit-none border rounded" text="对象适配 none" markup="img"
    /></ExampleCustom>
    <h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2>
    <p>每个 <code>object-fit</code> 取值都提供了响应式变体，使用 <code>.object-fit-{breakpoint}-{value}</code> 格式，适用于以下断点缩写：<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>。可以根据需要组合类来实现各种效果。</p>
    <ExampleCustom
      class="d-flex overflow-auto"
      code='<img src="..." class="object-fit-sm-contain border rounded" alt="...">
<img src="..." class="object-fit-md-contain border rounded" alt="...">
<img src="..." class="object-fit-lg-contain border rounded" alt="...">
<img src="..." class="object-fit-xl-contain border rounded" alt="...">
<img src="..." class="object-fit-xxl-contain border rounded" alt="...">'
      ><Placeholder width="140" height="80" class="object-fit-sm-contain border rounded" text="在 sm 上 contain" markup="img" />
      <Placeholder width="140" height="80" class="object-fit-md-contain border rounded" text="在 md 上 contain" markup="img" />
      <Placeholder width="140" height="80" class="object-fit-lg-contain border rounded" text="在 lg 上 contain" markup="img" />
      <Placeholder width="140" height="80" class="object-fit-xl-contain border rounded" text="在 xl 上 contain" markup="img" />
      <Placeholder width="140" height="80" class="object-fit-xxl-contain border rounded" text="在 xxl 上 contain" markup="img"
    /></ExampleCustom>
    <h2 id="video">视频<a class="anchor-link" href="#video" aria-label="视频链接"></a></h2>
    <p><code>.object-fit-{value}</code> 和响应式的 <code>.object-fit-{breakpoint}-{value}</code> 工具类也适用于 <code>&lt;video&gt;</code> 元素。</p>
    <CodeWrapper
      code='&lt;video src="..." class="object-fit-contain" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-cover" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-fill" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-scale" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-none" autoplay&gt;&lt;/video&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      对象适配工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-object-fit" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#examples">示例</a></li>
      <li><a href="#responsive">响应式</a></li>
      <li><a href="#video">视频</a></li>
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
