<template>
  <article class="bd-content" data-pagefind-body>
    <h1>Bootstrap 入门</h1>
    <p class="lead">Bootstrap 是一个功能强大、特性丰富的前端工具包。只需几分钟，你就能构建从原型到生产环境的各种项目。</p>

    <h2 id="quick-start">快速开始<a class="anchor-link" href="#quick-start" aria-label="快速开始链接"></a></h2>

    <p>通过 CDN 引入 Bootstrap 可直接用于生产的 CSS 和 JavaScript 即可开始使用，无需任何构建步骤。你可以通过这个<a href="https://codepen.io/team/bootstrap/pen/qBamdLj">Bootstrap CodePen 演示</a>查看实际效果。</p>

    <br />

    <ol>
      <li>
        <p>
          <strong>在项目根目录中新建一个 <code>index.html</code> 文件。</strong>同时加入 <code>&lt;meta name="viewport"&gt;</code> 标签，以确保移动设备上的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport">响应式行为</a>正常工作。
        </p>
        <CodeWrapper
          code='&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap demo&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;'
          lang="html"
        />
      </li>
      <li>
        <p><strong>引入 Bootstrap 的 CSS 和 JS。</strong>将 CSS 的 <code>&lt;link&gt;</code> 标签放在 <code>&lt;head&gt;</code> 中，并将 JavaScript 打包文件（包含用于下拉菜单、弹出框和工具提示定位的 Popper）的 <code>&lt;script&gt;</code> 标签放在 <code>&lt;/body&gt;</code> 闭合标签之前。了解更多关于<a href="#cdn-links">CDN 链接</a>的信息。</p>
        <CodeWrapper
          code='<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-yEPZ7jP9S0QKiUQ0m3jjsO4ProIW7wvR9gXkI7JOGa2XVsw53Yke2bsdkBbjmmiX" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/js/bootstrap.bundle.min.js" integrity="sha384-WyOxWvTyr1QaMPfiPJSv76iReVthorl5uWlFtZPyK0IEB0hGzo9y5Bp9mYanr8Bu" crossorigin="anonymous"></script>
  </body>
</html>'
          lang="html"
        />
        <p>你也可以分别引入<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/index.md">Popper</a>和我们的 JS。如果你不打算使用下拉菜单、弹出框或工具提示，可以不引入 Popper 以节省一些 千字节。</p>
        <CodeWrapper
          code='<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/js/bootstrap.min.js" integrity="sha384-89aa4glufciPv46aKltztWQEmk+Tu9W2RhzXr6VcnUUEub7F8+06RcL2RYLCOHUq" crossorigin="anonymous"></script>'
          lang="html"
        />
      </li>
      <li>
        <p><strong>Hello, world!</strong> 在浏览器中打开该页面，即可看到应用了 Bootstrap 的页面。现在，你可以通过创建自己的<a href="/layout/grid">布局</a>、添加数十种<a href="/components/buttons">组件</a>以及使用<a href="https://getbootstrap.com/examples">我们的官方示例</a>来开始使用 Bootstrap 进行构建了。</p>
      </li>
    </ol>

    <h2 id="cdn-links">CDN 链接<a class="anchor-link" href="#cdn-links" aria-label="CDN 链接"></a></h2>

    <p>作为参考，以下是我们主要的 CDN 链接。</p>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">描述</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CSS</td>
          <td><code>https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/css/bootstrap.min.css</code></td>
        </tr>
        <tr>
          <td>JS</td>
          <td><code>https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/js/bootstrap.bundle.min.js</code></td>
        </tr>
      </tbody>
    </table>

    <p>你也可以使用 CDN 获取任何<a href="/getting-started/contents">在「内容」页面中列出的其他构建版本</a>。</p>

    <p>使用 CDN 链接时，请务必使用 <code>integrity</code> 属性来校验正确的文件和版本。这些哈希值对于 Bootstrap 的每个文件和版本都是唯一的，因此当你更新到新版本时，请务必同时更新 <code>integrity</code> 属性。</p>

    <p>我们还包含了 <code>crossorigin="anonymous"</code> 属性，以防止<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>错误。</p>

    <h2 id="next-steps">后续步骤<a class="anchor-link" href="#next-steps" aria-label="后续步骤"></a></h2>

    <ul>
      <li>进一步了解 Bootstrap 使用的<a href="#important-globals">一些重要的全局环境设置</a>。</li>
      <li>阅读我们的<a href="/getting-started/contents/">内容章节</a>了解 Bootstrap 包含的内容，以及下方<a href="#js-components">需要 JavaScript 的组件</a>列表。</li>
      <li>需要更强大的功能？可以考虑通过<a href="/getting-started/download#package-managers">包管理器引入源文件</a>来使用 Bootstrap 构建。</li>
      <li>
        想要以 <code>&lt;script type="module"&gt;</code> 模块的方式使用 Bootstrap？请参阅我们的<a href="/getting-started/javascript#using-bootstrap-as-a-module">将 Bootstrap 用作模块</a>
        章节。
      </li>
    </ul>

    <h2 id="js-components">JS 组件<a class="anchor-link" href="#js-components" aria-label="JS 组件"></a></h2>

    <p>想知道哪些组件明确需要我们的 JavaScript 和 Popper？如果你对页面整体结构还有疑问，可以继续阅读下面的页面模板示例。</p>

    <ul>
      <li>折叠面板（Accordions），用于扩展我们的 Collapse 插件</li>
      <li>警告框（Alerts），用于关闭</li>
      <li>按钮（Buttons），用于切换状态以及复选框/单选按钮功能</li>
      <li>轮播（Carousel），用于所有幻灯片行为、控件和指示器</li>
      <li>折叠（Collapse），用于切换内容的可见性</li>
      <li>下拉菜单（Dropdowns），用于显示和定位（同样需要<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/index.md">Popper</a>）</li>
      <li>模态框（Modals），用于显示、定位和滚动行为</li>
      <li>导航栏（Navbar），用于扩展我们的 Collapse 和 Offcanvas 插件以实现响应式行为</li>
      <li>导航（Navs）配合 Tab 插件，用于切换内容面板</li>
      <li>抽屉（Offcanvases），用于显示、定位和滚动行为</li>
      <li>滚动监听（Scrollspy），用于滚动行为和导航更新</li>
      <li>轻提示（Toasts），用于显示和关闭</li>
      <li>工具提示（Tooltips）和弹出框（Popovers），用于显示和定位（同样需要<a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/index.md">Popper</a>）</li>
    </ul>

    <h2 id="important-globals">重要的全局设置<a class="anchor-link" href="#important-globals" aria-label="重要的全局设置"></a></h2>

    <p>Bootstrap 采用了一些重要的全局样式和设置，它们几乎全部用于跨浏览器样式的<em>规范化</em>。让我们深入了解一下。</p>

    <h3 id="html5-doctype">HTML5 文档类型<a class="anchor-link" href="#html5-doctype" aria-label="HTML5 文档类型"></a></h3>

    <p>Bootstrap 要求使用 HTML5 文档类型。没有它，你将会看到一些奇怪且不完整的样式。</p>

    <CodeWrapper
      code='&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  ...
&lt;/html&gt;'
      lang="html"
    />

    <h3 id="viewport-meta">视口 meta 标签<a class="anchor-link" href="#viewport-meta" aria-label="视口 meta 标签"></a></h3>

    <p>Bootstrap 采用<em>移动优先</em>的开发方式，即先针对移动设备优化代码，然后使用 CSS 媒体查询按需放大组件。 为确保所有设备都能正确渲染和触摸缩放，请将响应式视口 meta 标签添加到你的 <code>&lt;head&gt;</code> 中。</p>

    <CodeWrapper code='&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;' lang="html" />

    <p>你可以在<a href="#quick-start">快速开始</a>中看到实际效果示例。</p>

    <h3 id="box-sizing">盒模型（Box-sizing）<a class="anchor-link" href="#box-sizing" aria-label="盒模型（Box-sizing）"></a></h3>

    <p>为了让 CSS 中的尺寸计算更加直观，我们将全局的 <code>box-sizing</code> 值从 <code>content-box</code> 改为 <code>border-box</code>。这可以确保 <code>padding</code> 不会影响元素最终计算出的宽度，但可能会对某些第三方软件（如 Google Maps 和 Google 自定义搜索引擎）造成问题。</p>

    <p>在极少数需要覆盖它的情况下，可以使用类似下面的写法：</p>

    <CodeWrapper
      code=".selector-for-some-widget {
  box-sizing: content-box;
}"
      lang="css"
    />

    <p>使用上面的代码片段，嵌套元素——包括通过 <code>::before</code> 和 <code>::after</code> 生成的内容——都将继承该 <code>.selector-for-some-widget</code> 指定的 <code>box-sizing</code>。</p>

    <p>在<a href="https://css-tricks.com/box-sizing/">CSS Tricks 了解有关盒模型和尺寸计算的更多内容</a>。</p>

    <h3 id="reboot">重启动（Reboot）<a class="anchor-link" href="#reboot" aria-label="重启动（Reboot）"></a></h3>

    <p>为了改善跨浏览器渲染效果，我们使用<a href="/content/reboot">Reboot</a>来修正不同浏览器和设备之间的不一致，同时为常见 HTML 元素提供 稍微更具倾向性的重置样式。</p>

    <h2 id="community">社区<a class="anchor-link" href="#community" aria-label="社区"></a></h2>

    <p>通过以下有用的资源，随时了解 Bootstrap 的开发进展并与社区交流。</p>

    <ul>
      <li>阅读并订阅<a href="https://blog.getbootstrap.com/">官方 Bootstrap 博客</a>。</li>
      <li>在<a href="https://github.com/twbs/bootstrap/discussions">我们的 GitHub Discussions</a>中提问和探索。</li>
      <li>在<a href="https://discord.gg/bZUvakRU3M">社区 Discord</a>或<a href="https://www.reddit.com/r/bootstrap/">Bootstrap 子版块</a>进行讨论、提问等。</li>
      <li>在 IRC 中与其他 Bootstrap 用户交流。服务器为 <code>irc.libera.chat</code>，频道为 <code>#bootstrap</code>。</li>
      <li>
        可以在 Stack Overflow 上寻求实现方面的帮助（标签为<a href="https://stackoverflow.com/questions/tagged/bootstrap-5"><code>bootstrap-5</code></a
        >）。
      </li>
      <li>开发者在通过<a href="https://www.npmjs.com/search?q=keywords:bootstrap">npm</a>或类似的分发机制发布修改或扩展 Bootstrap 功能的包时，应使用关键词 <code>bootstrap</code>，以获得最大的可发现性。</li>
    </ul>

    <p>你也可以关注<a href="https://x.com/getbootstrap">X 上的 @getbootstrap</a>，获取最新动态和精彩的音乐视频。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#quick-start">快速开始</a></li>
      <li><a href="#cdn-links">CDN 链接</a></li>
      <li><a href="#next-steps">后续步骤</a></li>
      <li><a href="#js-components">JS 组件</a></li>
      <li>
        <a href="#important-globals">重要的全局设置</a>
        <ul>
          <li><a href="#html5-doctype">HTML5 文档类型</a></li>
          <li><a href="#viewport-meta">视口 meta 标签</a></li>
          <li><a href="#box-sizing">盒模型（Box-sizing）</a></li>
          <li><a href="#reboot">重启动（Reboot）</a></li>
        </ul>
      </li>
      <li><a href="#community">社区</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
