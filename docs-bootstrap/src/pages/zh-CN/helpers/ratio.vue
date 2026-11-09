<template>
  <article class="bd-content">
    <h1>比例</h1>
    <p>使用生成的伪元素让元素保持你选择的长宽比。非常适合根据父元素宽度响应式地处理视频或幻灯片嵌入内容。</p>

    <h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2>
    <p>
      使用比例工具类可以管理外部内容（如 <code>&lt;iframe&gt;</code>、<code>&lt;embed&gt;</code>、<code>&lt;video&gt;</code> 和 <code>&lt;object&gt;</code>）的长宽比。这些工具类也可用于任何标准 HTML 子元素（例如 <code>&lt;div&gt;</code> 或 <code>&lt;img&gt;</code>）。样式会从父级的 <code>.ratio</code> 类直接应用到子元素。
    </p>
    <p>
      长宽比在 Sass 映射中声明，并通过 CSS 变量包含在每个类中，这也支持
     <a href="#custom-ratios">自定义长宽比</a>。
    </p>
    <Callout>
      <p><strong>专业提示！</strong>你无需在 <code>&lt;iframe&gt;</code> 上添加 <code>frameborder=&quot;0&quot;</code>，因为我们在<a href="/content/reboot">Reboot</a>中已经为你覆盖了该设置。</p>
    </Callout>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>将任意嵌入内容（如 <code>&lt;iframe&gt;</code>）包裹在带有 <code>.ratio</code> 和长宽比类的父元素中。得益于通配选择器 <code>.ratio &gt; *</code>，直接子元素会自动调整尺寸。</p>
    <Example
      code='<div class="ratio ratio-16x9">
  <iframe src="https://player.bilibili.com/player.html?bvid=BV15Kxu6nE9f" title="bilibili video" allowfullscreen></iframe>
</div>'
    />
    <h2 id="aspect-ratios">长宽比<a class="anchor-link" href="#aspect-ratios" aria-label="长宽比链接"></a></h2>
    <p>可以使用修饰类来自定义长宽比。默认提供以下比例类：</p>
    <Example
      class="bd-example-ratios"
      code='<div class="ratio ratio-1x1">
  <div>1x1</div>
</div>
<div class="ratio ratio-4x3">
  <div>4x3</div>
</div>
<div class="ratio ratio-16x9">
  <div>16x9</div>
</div>
<div class="ratio ratio-21x9">
  <div>21x9</div>
</div>'
    />
    <h2 id="custom-ratios">自定义比例<a class="anchor-link" href="#custom-ratios" aria-label="自定义比例链接"></a></h2>
    <p>每个 <code>.ratio-*</code> 类的选择器中都包含一个 CSS 自定义属性（或 CSS 变量）。你可以覆盖这个 CSS 变量，自己做一些简单的计算，就能即时创建自定义长宽比。</p>
    <p>例如，要创建一个 2x1 的长宽比，可在 <code>.ratio</code> 上设置 <code>--bs-aspect-ratio: 50%</code>。</p>
    <Example
      class="bd-example-ratios"
      code='<div class="ratio" style="--bs-aspect-ratio: 50%;">
  <div>2x1</div>
</div>'
    />
    <p>这个 CSS 变量使得跨断点修改长宽比变得非常方便。下面的示例起始为 4x3，但在中等断点时会变为自定义的 2x1。</p>
    <CodeWrapper
      code=".ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}"
      lang="scss"
    />
    <Example
      class="bd-example-ratios bd-example-ratios-breakpoint"
      code='<div class="ratio ratio-4x3">
  <div>4x3, then 2x1</div>
</div>'
    />
    <h2 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h2>
    <p>在 <code>_variables.scss</code> 中，你可以修改想要使用的长宽比。以下是我们默认的 <code>$ratio-aspect-ratios</code> 映射。按需修改该映射并重新编译 Sass 即可使用。</p>
    <ScssDocs name="aspect-ratios" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#about">关于</a></li>
      <li><a href="#example">示例</a></li>
      <li><a href="#aspect-ratios">长宽比</a></li>
      <li><a href="#custom-ratios">自定义比例</a></li>
      <li>
       <a href="#sass-maps">Sass 映射</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
