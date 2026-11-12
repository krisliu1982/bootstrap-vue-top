<template>
  <article class="bd-content" data-pagefind-body>
    <h1>图标链接</h1>
    <p class="lead">使用 Bootstrap Icons 或其他图标快速创建风格化的超链接。</p>

    <p>
      图标链接工具类组件修改了我们默认的链接样式，以提升其外观，并快速对齐任意图标与文本的组合。对齐方式通过内联弹性布局样式和默认的 <code>gap</code> 值设置。我们使用自定义的偏移量和颜色来设计下划线样式。图标会自动调整为 <code>1em</code>，以最好地匹配其关联文本的 <code>font-size</code>。
    </p>
    <p>图标链接假定使用的是<a href="https://icons.getbootstrap.com">Bootstrap Icons</a>，但你也可以使用任何自己喜欢的图标或图片。</p>
    <Callout>
      <p>
        当图标纯属装饰时，应使用
        <code>aria-hidden=&quot;true&quot;</code> 将其从辅助技术中隐藏，正如我们在示例中所做的那样。对于传达含义的图标，请为 SVG 添加 <code>role=&quot;img&quot;</code> 和适当的 <code>aria-label=&quot;...&quot;</code>，以提供合适的文本替代。
      </p>
    </Callout>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>取一个普通的 <code>&lt;a&gt;</code> 元素，添加 <code>.icon-link</code>，然后在链接文本的左侧或右侧插入一个图标。图标会自动调整尺寸、位置和颜色。</p>
    <Example
      code='<a class="icon-link" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
  </svg>
  Icon link
</a>'
    />
    <Example
      code='<a class="icon-link" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>'
    />
    <h2 id="style-on-hover">悬停样式<a class="anchor-link" href="#style-on-hover" aria-label="悬停样式链接"></a></h2>
    <p>添加 <code>.icon-link-hover</code> 可在悬停时将图标向右移动。</p>
    <Example
      code='<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>'
    />
    <h2 id="customize">自定义<a class="anchor-link" href="#customize" aria-label="自定义链接"></a></h2>
    <p>使用我们的链接 CSS 变量、Sass 变量、工具类或自定义样式来修改图标链接的样式。</p>
    <h3 id="css-variables">CSS 变量<a class="anchor-link" href="#css-variables" aria-label="CSS 变量链接"></a></h3>
    <p>根据需要修改 <code>--bs-link-*</code> 和 <code>--bs-icon-link-*</code> CSS 变量，以更改默认外观。</p>
    <p>通过覆盖 <code>--bs-icon-link-transform</code> CSS 变量来自定义悬停时的 <code>transform</code>：</p>
    <Example
      code='<a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
  </svg>
  Icon link
</a>'
    />
    <p>通过覆盖 <code>--bs-link-*</code> CSS 变量来自定义颜色：</p>
    <Example
      code='<a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>'
    />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>定制图标链接的 Sass 变量，即可修改整个由 Bootstrap 驱动的项目中所有图标链接样式。</p>
    <ScssDocs name="icon-link-variables" file="scss/_variables.scss" />
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>使用任意<a href="/utilities/link/">链接工具类</a>来修改下划线颜色和偏移量，从而调整图标链接。</p>
    <Example
      code='<a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
  Icon link
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
</a>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#example">示例</a></li>
      <li><a href="#style-on-hover">悬停样式</a></li>
      <li>
       <a href="#customize">自定义</a>
        <ul>
          <li><a href="#css-variables">CSS 变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
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
