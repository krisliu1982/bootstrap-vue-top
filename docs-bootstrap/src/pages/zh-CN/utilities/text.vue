<template>
  <article class="bd-content">
    <h1>文本</h1>
    <p>用于控制对齐、换行、字重等的常用文本工具类的文档与示例。</p>

    <h2 id="text-alignment">文本对齐<a class="anchor-link" href="#text-alignment" aria-label="文本对齐"></a></h2>
    <p>使用文本对齐类可以轻松地重新对齐组件中的文本。对于起始、结束和居中对齐，还提供了使用与栅格系统相同视口宽度断点的响应式类。</p>
    <Example
      code='<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>'
    />
    <Callout>
      <p>请注意，我们没有为两端对齐文本提供工具类。虽然从美学上看，两端对齐的文本可能更吸引人，但它会使词间距更加随机，因而更难阅读。</p>
    </Callout>
    <h2 id="text-wrapping-and-overflow">文本换行与溢出<a class="anchor-link" href="#text-wrapping-and-overflow" aria-label="文本换行与溢出"></a></h2>
    <p>使用 <code>.text-wrap</code> 类让文本换行。</p>
    <Example
      code='<div class="badge text-bg-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>'
    />
    <p>使用 <code>.text-nowrap</code> 类阻止文本换行。</p>
    <Example
      code='<div class="text-nowrap bg-body-secondary border" style="width: 8rem;">
  This text should overflow the parent.
</div>'
    />
    <h2 id="word-break">断词<a class="anchor-link" href="#word-break" aria-label="断词"></a></h2>
    <p>
      使用 <code>.text-break</code> 设置 <code>word-wrap: break-word</code> 和 <code>word-break: break-word</code>，防止长字符串文本破坏组件的布局。为了获得更广泛的浏览器支持，我们使用 <code>word-wrap</code> 而不是更常见的 <code>overflow-wrap</code>，并添加了已废弃的
      <code>word-break: break-word</code> 以避免 flex 容器出现问题。
    </p>
    <Example code='<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>' /><Callout type="warning">
      <p>
        请注意，
       <a href="https://rtlstyling.com/posts/rtl-styling#3.-line-break">阿拉伯语（最常用的 RTL 语言）中无法断词</a>。因此 <code>.text-break</code> 已从我们编译的 RTL CSS 中移除。
      </p>
    </Callout>
    <h2 id="text-transform">文本转换<a class="anchor-link" href="#text-transform" aria-label="文本转换"></a></h2>
    <p>使用文本大小写类转换组件中的文本：<code>text-lowercase</code>、<code>text-uppercase</code> 或 <code>text-capitalize</code>。</p>
    <Example
      code='<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>'
    />
    <p>请注意，<code>.text-capitalize</code> 只会更改每个单词的首字母，其他字母的大小写保持不变。</p>
    <h2 id="font-size">字体大小<a class="anchor-link" href="#font-size" aria-label="字体大小"></a></h2>
    <p>
      快速更改文本的 <code>font-size</code>。我们的标题类（例如 <code>.h1</code>–<code>.h6</code>）会应用 <code>font-size</code>、<code>font-weight</code> 和 <code>line-height</code>，而这些工具类<em>仅</em>应用 <code>font-size</code>。这些工具类的尺寸与 HTML 的标题元素一致，因此数字越大，尺寸越小。
    </p>
    <Example
      code='<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>'
    />
    <p>通过修改 <code>$font-sizes</code> Sass 映射来自定义可用的 <code>font-size</code>。</p>
    <h2 id="font-weight-and-italics">字重与斜体<a class="anchor-link" href="#font-weight-and-italics" aria-label="字重与斜体"></a></h2>
    <p>使用这些工具类快速更改文本的 <code>font-weight</code> 或 <code>font-style</code>。<code>font-style</code> 工具类缩写为 <code>.fst-*</code>，<code>font-weight</code> 工具类缩写为 <code>.fw-*</code>。</p>
    <Example
      code='<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p>'
    />
    <h2 id="line-height">行高<a class="anchor-link" href="#line-height" aria-label="行高"></a></h2>
    <p>使用 <code>.lh-*</code> 工具类更改行高。</p>
    <Example
      code='<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>'
    />
    <h2 id="monospace">等宽字体<a class="anchor-link" href="#monospace" aria-label="等宽字体"></a></h2>
    <p>使用 <code>.font-monospace</code> 将所选内容更改为我们的等宽字体栈。</p>
    <Example code='<p class="font-monospace">This is in monospace</p>' />
    <h2 id="reset-color">重置颜色<a class="anchor-link" href="#reset-color" aria-label="重置颜色"></a></h2>
    <p>使用 <code>.text-reset</code> 重置文本或链接的颜色，使其继承父元素的颜色。</p>
    <Example
      code='<p class="text-body-secondary">
  Secondary body text with a<a href="#" class="text-reset">reset link</a>.
</p>'
    />
    <h2 id="text-decoration">文本装饰<a class="anchor-link" href="#text-decoration" aria-label="文本装饰"></a></h2>
    <p>使用文本装饰类为组件中的文本添加装饰。</p>
    <Example
      code='<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量"></a></h3>
    <p>与默认字体相关的 Sass 变量：</p>
    <ScssDocs name="font-variables" file="scss/_variables.scss" />
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射"></a></h3>
    <p>字体大小工具类由该映射结合我们的工具类 API 生成。</p>
    <ScssDocs name="font-sizes" file="scss/_variables.scss" /><ScssDocs name="theme-text-map" file="scss/_maps.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API"></a></h3>
    <p>
      字体和文本工具类在 <code>scss/_utilities.scss</code> 中的工具类 API 中声明。
     <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-text" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#text-alignment">文本对齐</a></li>
      <li><a href="#text-wrapping-and-overflow">文本换行与溢出</a></li>
      <li><a href="#word-break">断词</a></li>
      <li><a href="#text-transform">文本转换</a></li>
      <li><a href="#font-size">字体大小</a></li>
      <li><a href="#font-weight-and-italics">字重与斜体</a></li>
      <li><a href="#line-height">行高</a></li>
      <li><a href="#monospace">等宽字体</a></li>
      <li><a href="#reset-color">重置颜色</a></li>
      <li><a href="#text-decoration">文本装饰</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-maps">Sass 映射</a></li>
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
