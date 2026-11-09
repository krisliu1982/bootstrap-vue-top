<template>
  <article class="bd-content">
    <h1>从右到左（RTL）</h1>
    <p>了解如何在 Bootstrap 的布局、组件和工具类中启用从右到左的文字支持。</p>

    <h2 id="get-familiar">熟悉基础<a class="anchor-link" href="#get-familiar" aria-label="熟悉基础链接"></a></h2>
    <p>
      我们建议先阅读<a href="/getting-started/introduction">入门中的介绍页面</a>来熟悉 Bootstrap。阅读完毕之后，再继续阅读下面的内容，了解如何启用 RTL。
    </p>
    <p>你可能还想了解一下<a href="https://rtlcss.com/">RTLCSS 项目</a>，因为它是我们实现 RTL 方案的基础。</p>
    <Callout type="warning">
      <p><strong>Bootstrap 的 RTL 特性仍处于实验阶段</strong>，并将根据用户反馈不断演进。发现问题或有改进建议？欢迎<a href="https://github.com/twbs/bootstrap/issues/new/choose">提交 issue</a>，我们非常期待你的见解。</p>
    </Callout>
    <h2 id="required-html">必需的 HTML<a class="anchor-link" href="#required-html" aria-label="必需的 HTML 链接"></a></h2>
    <p>要在由 Bootstrap 驱动的页面中启用 RTL，有两个严格的要求。</p>
    <ol>
      <li>在 <code>&lt;html&gt;</code> 元素上设置 <code>dir=&quot;rtl&quot;</code>。</li>
      <li>在 <code>&lt;html&gt;</code> 元素上添加合适的 <code>lang</code> 属性，例如 <code>lang=&quot;ar&quot;</code>。</li>
    </ol>
    <p>接下来，你需要引入我们 CSS 的 RTL 版本。例如，下面是启用了 RTL 的编译并压缩后的 CSS 样式表：</p>
    <CodeWrapper code='&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css" integrity="sha384-CfCrinSRH2IR6a4e6fy2q6ioOX7O6Mtm1L9vRvFZ1trBncWmMePhzvafv7oIcWiW" crossorigin="anonymous"&gt;' lang="html" />
    <h3 id="starter-template">入门模板<a class="anchor-link" href="#starter-template" aria-label="入门模板链接"></a></h3>
    <p>你可以在下面这个修改过的 RTL 入门模板中看到上述要求的体现。</p>
    <CodeWrapper
      code='&lt;!doctype html&gt;
&lt;html lang="ar" dir="rtl"&gt;
  &lt;head&gt;
    &lt;!-- Required meta tags --&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;

    &lt;!-- Bootstrap CSS --&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css" integrity="sha384-CfCrinSRH2IR6a4e6fy2q6ioOX7O6Mtm1L9vRvFZ1trBncWmMePhzvafv7oIcWiW" crossorigin="anonymous"&gt;

    &lt;title&gt;مرحبًا بالعالم!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;مرحبًا بالعالم!&lt;/h1&gt;

    &lt;!-- Optional JavaScript; choose one of the two! --&gt;

    &lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"&gt;&lt;/script&gt;

    &lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;
    &lt;!--
    &lt;script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"&gt;&lt;/script&gt;
    --&gt;
  &lt;/body&gt;
&lt;/html&gt;'
      lang="html"
    />
    <h3 id="rtl-examples">RTL 示例<a class="anchor-link" href="#rtl-examples" aria-label="RTL 示例链接"></a></h3>
    <p>从我们的多个<a href="https://getbootstrap.com/docs/5.3/examples/#rtl">RTL 示例</a>中选择一个开始吧。</p>
    <h2 id="approach">实现方式<a class="anchor-link" href="#approach" aria-label="实现方式链接"></a></h2>
    <p>我们在 Bootstrap 中构建 RTL 支持的方式包含两个重要决定，它们会影响我们编写和使用 CSS 的方式：</p>
    <ol>
      <li>
        <p>
          <strong>首先，我们决定借助<a href="https://rtlcss.com/">RTLCSS</a>项目来构建它。</strong>这为我们提供了强大的功能，可在从 LTR 转换为 RTL 时管理变更和覆盖。它还让我们能够基于同一份代码库构建两个版本的 Bootstrap。
        </p>
      </li>
      <li>
        <p>
          <strong>其次，我们重命名了少数方向性类，以采用逻辑属性的思路。</strong>得益于我们的 flex 工具类，你们中的大多数人已经接触过逻辑属性——它们用 <code>start</code> 和 <code>end</code> 取代了 <code>left</code> 和 <code>right</code> 等方向属性。这使得类名和值同时适用于 LTR 和 RTL，且无需任何额外开销。
        </p>
      </li>
    </ol>
    <p>例如，将用于 <code>margin-left</code> 的 <code>.ml-3</code> 替换为 <code>.ms-3</code>。</p>
    <p>不过，无论通过我们的 Sass 源码还是编译后的 CSS 使用 RTL，都不应与默认的 LTR 有太大差别。</p>
    <h2 id="customize-from-source">从源码自定义<a class="anchor-link" href="#customize-from-source" aria-label="从源码自定义链接"></a></h2>
    <p>谈到<a href="/customize/sass">自定义</a>，首选方式是借助变量、map 和 mixin。得益于<a href="https://rtlcss.com/learn/getting-started/why-rtlcss/">RTLCSS 的工作方式</a>，即使 RTL 是基于编译后的文件进行后处理生成的，这种方式对 RTL 同样适用。</p>
    <h3 id="custom-rtl-values">自定义 RTL 值<a class="anchor-link" href="#custom-rtl-values" aria-label="自定义 RTL 值链接"></a></h3>
    <p>使用<a href="https://rtlcss.com/learn/usage-guide/value-directives/">RTLCSS 值指令</a>，可以让某个变量在 RTL 下输出不同的值。例如，要在整个代码库中降低 <code>$font-weight-bold</code> 的粗细，可以使用 <code>/*rtl: {value}*/</code> 语法：</p>
    <CodeWrapper
      code="$font-weight-bold: 700 #{/* rtl:600 */} !default;
"
      lang="scss"
    />
    <p>这将在我们的默认 CSS 和 RTL CSS 中分别输出如下内容：</p>
    <CodeWrapper
      code="/* bootstrap.css */
dt {
  font-weight: 700 /* rtl:600 */;
}

/* bootstrap.rtl.css */
dt {
  font-weight: 600;
}"
      lang="css"
    />
    <h3 id="alternative-font-stack">替代字体栈<a class="anchor-link" href="#alternative-font-stack" aria-label="替代字体栈链接"></a></h3>
    <p>
      如果你使用自定义字体，请注意并非所有字体都支持非拉丁字母。要从泛欧字体家族切换到阿拉伯语字体家族，你可能需要在字体栈中使用 <code>/*rtl:insert: {value}*/</code> 来修改字体家族的名称。
    </p>
    <p>例如，要将 LTR 下的 <code>Helvetica Neue</code> 字体切换为 RTL 下的 <code>Helvetica Neue Arabic</code>，你的 Sass 代码可以这样写：</p>
    <CodeWrapper
      code='$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome &lt; 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;'
      lang="scss"
    />
    <h3 id="ltr-and-rtl-at-the-same-time">同时使用 LTR 和 RTL<a class="anchor-link" href="#ltr-and-rtl-at-the-same-time" aria-label="同时使用 LTR 和 RTL 链接"></a></h3>
    <p>
      需要在同一页面上同时使用 LTR 和 RTL？借助<a href="https://rtlcss.com/learn/usage-guide/string-map/">RTLCSS 字符串映射</a>，这非常直接。用一个类包裹你的 <code>@import</code>，并为 RTLCSS 设置自定义的重命名规则：
    </p>
    <CodeWrapper
      code='/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  } ]
} */
.ltr {
  @import "../node_modules/bootstrap/scss/bootstrap";
}
/*rtl:end:options*/
'
      lang="scss"
    />
    <p>依次运行 Sass 和 RTLCSS 后，你的 CSS 文件中的每个选择器都会被加上 <code>.ltr</code> 前缀，而 RTL 文件则会加上 <code>.rtl</code> 前缀。现在，你可以在同一页面上使用这两个文件，只需在组件的外层容器上使用 <code>.ltr</code> 或 <code>.rtl</code>，即可使用其中任一方向。</p>
    <Callout type="warning">
      <p>在采用 LTR 与 RTL 组合实现时，需要考虑的<strong>边界情况和已知局限</strong>：</p>
      <ol>
        <li>切换 <code>.ltr</code> 和 <code>.rtl</code> 时，请确保相应地添加 <code>dir</code> 和 <code>lang</code> 属性。</li>
        <li>
          同时加载两个文件可能成为真正的性能瓶颈：请考虑进行一些<a href="/customize/optimize">优化</a>，也许可以尝试<a href="https://www.filamentgroup.com/lab/load-css-simpler/">异步加载其中一个文件</a>。
        </li>
        <li>以这种方式嵌套样式会导致我们的 <code>form-validation-state()</code> mixin 无法按预期工作，因此需要你自己稍作调整。<a href="https://github.com/twbs/bootstrap/issues/31223">参见 #31223</a>。</li>
      </ol>
    </Callout>
    <p>
      想要自动化这一过程，并在同一份样式表中处理涉及两个方向的多种边界情况？那么可以考虑将<a href="https://github.com/elchininet/postcss-rtlcss">PostCSS RTLCSS</a>作为<a href="https://github.com/postcss/postcss">PostCSS</a>插件来处理源文件。PostCSS RTLCSS 在底层使用<a href="https://rtlcss.com">RTLCSS</a>管理方向翻转过程，但它会将翻转后的声明分离到使用不同前缀的 LTR 和 RTL 规则中，从而让你能在同一个样式表文件中同时拥有两个方向。这样一来，只需更改页面的 <code>dir</code>（如果相应配置了插件，甚至可以修改特定类），就可以在 LTR 和 RTL 方向之间切换。
    </p>
    <Callout type="warning">
      <p>使用 PostCSS RTLCSS 构建 LTR 与 RTL 组合实现时，<strong>需要重点注意的事项</strong>：</p>
      <ol>
        <li>建议为 <code>html</code> 元素添加 <code>dir</code> 属性。这样，更改方向时整个页面都会受影响。同时，请确保相应地添加 <code>lang</code> 属性。</li>
        <li>
          将两个方向打包到单个文件中会增加最终样式表的大小（平均增加 20%-30%）：请考虑进行一些<a href="/customize/optimize">优化</a>。
        </li>
        <li>
          请注意，PostCSS RTLCSS 与 <code>/* rtl:remove */</code> 指令不兼容，因为它不会移除任何 CSS 规则。你应分别将 <code>/* rtl:remove */</code>、<code>/* rtl:begin:remove */</code> 和 <code>/* rtl:end:remove */</code> 指令替换为 <code>/* rtl:freeze */</code>、<code>/* rtl:begin:freeze */</code> 和 <code>/* rtl:end:freeze */</code> 指令。这些指令会为目标规则或声明加上当前方向的前缀，但不会创建 RTL 对应版本（效果与 RTLCSS 中的 <code>remove</code> 指令相同）。
        </li>
      </ol>
    </Callout>
    <h2 id="the-breadcrumb-case">面包屑的特殊情况<a class="anchor-link" href="#the-breadcrumb-case" aria-label="面包屑的特殊情况链接"></a></h2>
    <p><a href="/components/breadcrumb#dividers">面包屑分隔符</a>是唯一需要专属全新变量的情况——即 <code>$breadcrumb-divider-flipped</code>——其默认值为 <code>$breadcrumb-divider</code>。</p>
    <h2 id="additional-resources">其他资源<a class="anchor-link" href="#additional-resources" aria-label="其他资源链接"></a></h2>
    <ul>
      <li><a href="https://rtlcss.com/">RTLCSS</a></li>
      <li><a href="https://rtlstyling.com/posts/rtl-styling">RTL 样式入门</a></li>
    </ul>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#get-familiar">熟悉基础</a></li>
      <li>
       <a href="#required-html">必需的 HTML</a>
        <ul>
          <li><a href="#starter-template">入门模板</a></li>
          <li><a href="#rtl-examples">RTL 示例</a></li>
        </ul>
      </li>
      <li><a href="#approach">实现方式</a></li>
      <li>
       <a href="#customize-from-source">从源码自定义</a>
        <ul>
          <li><a href="#custom-rtl-values">自定义 RTL 值</a></li>
          <li><a href="#alternative-font-stack">替代字体栈</a></li>
          <li><a href="#ltr-and-rtl-at-the-same-time">同时使用 LTR 和 RTL</a></li>
        </ul>
      </li>
      <li><a href="#the-breadcrumb-case">面包屑的特殊情况</a></li>
      <li>
       <a href="#additional-resources">其他资源</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
