<template>
  <article class="bd-content" data-pagefind-body>
    <h1>浏览器与设备</h1>
    <p class="lead">了解 Bootstrap 支持的各种浏览器与设备（从新到旧），包括各自已知的怪异表现和缺陷。</p>

    <h2 id="supported-browsers">支持的浏览器<a class="anchor-link" href="#supported-browsers" aria-label="支持的浏览器链接"></a></h2>
    <p>Bootstrap 支持所有主流浏览器和平台的<strong>最新稳定版本</strong>。</p>
    <p>使用最新版 WebKit、Blink 或 Gecko 引擎的其他浏览器（无论是直接使用还是通过平台的 WebView API），并未获得明确支持。不过，在大多数情况下 Bootstrap 在这些浏览器中也应能正确显示和运行。更具体的支持信息见下文。</p>
    <p>
      你可以在<a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.browserslistrc">我们的 <code>.browserslistrc 文件</code></a
      >中找到我们支持的浏览器范围及其版本：
    </p>
    <CodeWrapper
      code="# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
not kaios <= 2.5 # fix floating label issues in Firefox (see https://github.com/postcss/autoprefixer/issues/1533)"
      lang="plaintext"
    />
    <p>我们使用<a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>通过 CSS 前缀来处理目标浏览器支持，它使用<a href="https://github.com/browserslist/browserslist">Browserslist</a>管理这些浏览器版本。如何将这些工具集成到项目中，请参阅它们的文档。</p>
    <h3 id="mobile-devices">移动设备<a class="anchor-link" href="#mobile-devices" aria-label="移动设备链接"></a></h3>
    <p>一般来说，Bootstrap 支持各主要平台默认浏览器的最新版本。请注意，不支持代理浏览器（如 Opera Mini、Opera Mobile 的 Turbo 模式、UC Browser Mini、Amazon Silk）。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Chrome</th>
            <th>Firefox</th>
            <th>Safari</th>
            <th>Android 浏览器 &amp; WebView</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Android</strong></td>
            <td>Supported</td>
            <td>Supported</td>
            <td><span class="text-body-secondary">&mdash;</span></td>
            <td>v6.0+</td>
          </tr>
          <tr>
            <td><strong>iOS</strong></td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
            <td><span class="text-body-secondary">&mdash;</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="desktop-browsers">桌面浏览器<a class="anchor-link" href="#desktop-browsers" aria-label="桌面浏览器链接"></a></h3>
    <p>同样，大多数桌面浏览器的最新版本都受到支持。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Chrome</th>
            <th>Firefox</th>
            <th>Microsoft Edge</th>
            <th>Opera</th>
            <th>Safari</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mac</strong></td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
          </tr>
          <tr>
            <td><strong>Windows</strong></td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
            <td>Supported</td>
            <td><span class="text-body-secondary">&mdash;</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>对于 Firefox，除最新的常规稳定版外，我们还支持 Firefox 最新的<a href="https://www.mozilla.org/en-US/firefox/enterprise/">延长支持版（ESR）</a>。</p>
    <p>非官方地说，Bootstrap 在 Linux 上的 Chromium、Chrome 以及 Firefox 中也应有足够良好的外观和行为，尽管它们并未获得官方支持。</p>
    <h2 id="internet-explorer">Internet Explorer<a class="anchor-link" href="#internet-explorer" aria-label="Internet Explorer 链接"></a></h2>
    <p>不支持 Internet Explorer。<strong>如果你需要支持 Internet Explorer，请使用 Bootstrap v4。</strong></p>
    <h2 id="modals-and-dropdowns-on-mobile">移动设备上的模态框和下拉菜单<a class="anchor-link" href="#modals-and-dropdowns-on-mobile" aria-label="移动设备上的模态框和下拉菜单链接"></a></h2>
    <h3 id="overflow-and-scrolling">溢出与滚动<a class="anchor-link" href="#overflow-and-scrolling" aria-label="溢出与滚动链接"></a></h3>
    <p>
      在 iOS 和 Android 中，对 <code>&lt;body&gt;</code> 元素上 <code>overflow: hidden;</code> 的支持相当有限。因此，当你在这些设备的浏览器中滚动到模态框的顶部或底部之外时，<code>&lt;body&gt;</code> 内容会开始滚动。参见<a href="https://issues.chromium.org/issues/40301599">Chrome bug #175502</a>（已在 Chrome v40 中修复）和<a
        href="https://bugs.webkit.org/show_bug.cgi?id=153852"
        >WebKit bug #153852</a
      >。
    </p>
    <h3 id="ios-text-fields-and-scrolling">iOS 文本字段与滚动<a class="anchor-link" href="#ios-text-fields-and-scrolling" aria-label="iOS 文本字段与滚动链接"></a></h3>
    <p>从 iOS 9.2 起，当模态框打开时，如果滚动手势的起始触摸点位于文本 <code>&lt;input&gt;</code> 或 <code>&lt;textarea&gt;</code> 的边界之内，那么滚动的将是模态框下方的 <code>&lt;body&gt;</code> 内容，而不是模态框本身。参见<a href="https://bugs.webkit.org/show_bug.cgi?id=153856">WebKit bug #153856</a>。</p>
    <h3 id="navbar-dropdowns">导航栏下拉菜单<a class="anchor-link" href="#navbar-dropdowns" aria-label="导航栏下拉菜单链接"></a></h3>
    <p>由于 z-index 层叠的复杂性，导航中的 <code>.dropdown-backdrop</code> 元素在 iOS 上不会被使用。因此，要关闭导航栏中的下拉菜单，必须直接点击下拉元素（或<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile">任何在 iOS 上会触发点击事件的其他元素</a>）。</p>
    <h2 id="browser-zooming">浏览器缩放<a class="anchor-link" href="#browser-zooming" aria-label="浏览器缩放链接"></a></h2>
    <p>页面缩放不可避免地会使某些组件出现渲染瑕疵，Bootstrap 和 Web 的其他部分均是如此。视具体问题而定，我们可能能够修复它（请先搜索，必要时再提交 issue）。不过，我们往往忽略这些问题，因为它们除了取巧的变通方案外，通常没有直接的解决办法。</p>
    <h2 id="validators">验证器<a class="anchor-link" href="#validators" aria-label="验证器链接"></a></h2>
    <p>为了给老旧且有缺陷的浏览器提供尽可能好的体验，Bootstrap 在多个地方使用了<a href="http://browserhacks.com/">CSS 浏览器 hack</a>，以针对特定浏览器版本应用特殊的 CSS，从而绕过浏览器自身的缺陷。这些 hack 自然会让 CSS 验证器报错，提示它们无效。在少数地方，我们还使用了尚未完全标准化的前沿 CSS 特性，但这些仅用于渐进增强。</p>
    <p>这些验证警告在实践中无关紧要，因为我们 CSS 中非 hack 的部分完全可以通过验证，而 hack 部分也不会干扰非 hack 部分的正常运行，因此我们有意识地忽略了这些特定的警告。</p>
    <p>同样，由于我们针对<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">某个 Firefox 缺陷</a>加入了变通方案，我们的 HTML 文档也会出现一些无关紧要的 HTML 验证警告。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
        <a href="#supported-browsers">支持的浏览器</a>
        <ul>
          <li><a href="#mobile-devices">移动设备</a></li>
          <li><a href="#desktop-browsers">桌面浏览器</a></li>
        </ul>
      </li>
      <li><a href="#internet-explorer">Internet Explorer</a></li>
      <li>
        <a href="#modals-and-dropdowns-on-mobile">移动设备上的模态框和下拉菜单</a>
        <ul>
          <li><a href="#overflow-and-scrolling">溢出与滚动</a></li>
          <li><a href="#ios-text-fields-and-scrolling">iOS 文本字段与滚动</a></li>
          <li><a href="#navbar-dropdowns">导航栏下拉菜单</a></li>
        </ul>
      </li>
      <li><a href="#browser-zooming">浏览器缩放</a></li>
      <li>
        <a href="#validators">验证器</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
