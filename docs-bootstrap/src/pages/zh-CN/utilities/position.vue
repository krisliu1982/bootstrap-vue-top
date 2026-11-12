<template>
  <article class="bd-content" data-pagefind-body>
    <h1>定位</h1>
    <p class="lead">使用这些简写工具类可以快速配置元素的位置。</p>

    <h2 id="position-values">定位值<a class="anchor-link" href="#position-values" aria-label="定位值链接"></a></h2>
    <p>提供了快速定位的类，不过它们不是响应式的。</p>
    <CodeWrapper
      code='&lt;div class="position-static"&gt;...&lt;/div&gt;
&lt;div class="position-relative"&gt;...&lt;/div&gt;
&lt;div class="position-absolute"&gt;...&lt;/div&gt;
&lt;div class="position-fixed"&gt;...&lt;/div&gt;
&lt;div class="position-sticky"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <h2 id="arrange-elements">排列元素<a class="anchor-link" href="#arrange-elements" aria-label="排列元素链接"></a></h2>
    <p>使用边缘定位工具类可以轻松排列元素。格式为 <code>{property}-{position}</code>。</p>
    <p>其中 <em>property</em> 为以下之一：</p>
    <ul>
      <li><code>top</code> - 表示垂直的 <code>top</code> 位置</li>
      <li><code>start</code> - 表示水平的 <code>left</code> 位置（在 LTR 中）</li>
      <li><code>bottom</code> - 表示垂直的 <code>bottom</code> 位置</li>
      <li><code>end</code> - 表示水平的 <code>right</code> 位置（在 LTR 中）</li>
    </ul>
    <p>其中 <em>position</em> 为以下之一：</p>
    <ul>
      <li><code>0</code> - 表示 <code>0</code> 边缘位置</li>
      <li><code>50</code> - 表示 <code>50%</code> 边缘位置</li>
      <li><code>100</code> - 表示 <code>100%</code> 边缘位置</li>
    </ul>
    <p>（你可以通过向 <code>$position-values</code> Sass 映射变量添加条目来添加更多定位值。）</p>
    <Example
      class="bd-example-position-utils"
      code='<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>'
    />
    <h2 id="center-elements">居中元素<a class="anchor-link" href="#center-elements" aria-label="居中元素链接"></a></h2>
    <p>此外，你还可以使用 transform 工具类 <code>.translate-middle</code> 来居中元素。</p>
    <p>该类会对元素应用 <code>translateX(-50%)</code> 和 <code>translateY(-50%)</code> 变换，结合边缘定位工具类，即可将元素绝对居中。</p>
    <Example
      class="bd-example-position-utils"
      code='<div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle"></div>
  <div class="position-absolute top-0 start-50 translate-middle"></div>
  <div class="position-absolute top-0 start-100 translate-middle"></div>
  <div class="position-absolute top-50 start-0 translate-middle"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 start-100 translate-middle"></div>
  <div class="position-absolute top-100 start-0 translate-middle"></div>
  <div class="position-absolute top-100 start-50 translate-middle"></div>
  <div class="position-absolute top-100 start-100 translate-middle"></div>
</div>'
    />
    <p>通过添加 <code>.translate-middle-x</code> 或 <code>.translate-middle-y</code> 类，元素可以仅在水平或垂直方向上居中定位。</p>
    <Example
      class="bd-example-position-utils"
      code='<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>'
    />
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>以下是一些这些类的实际应用示例：</p>
    <Example
      class="bd-example-position-examples d-flex justify-content-around align-items-center"
      code='<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>'
    />
    <p>你可以将这些类与现有组件结合使用以创建新组件。请记住，你可以通过向 <code>$position-values</code> 变量添加条目来扩展其功能。</p>
    <Example
      class="bd-example-position-examples"
      code='<div class="position-relative m-4">
  <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
    <div class="progress-bar" style="width: 50%"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-maps">Sass 映射<a class="anchor-link" href="#sass-maps" aria-label="Sass 映射链接"></a></h3>
    <p>默认的定位工具类取值在 Sass 映射中声明，然后用于生成我们的工具类。</p>
    <ScssDocs name="position-map" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      定位工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-position" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#position-values">定位值</a></li>
      <li><a href="#arrange-elements">排列元素</a></li>
      <li><a href="#center-elements">居中元素</a></li>
      <li><a href="#examples">示例</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
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
