<template>
  <article class="bd-content">
    <h1>实现方式</h1>
    <p>了解用于构建和维护 Bootstrap 的指导原则、策略和技术，以便你更轻松地自行自定义和扩展它。</p>

    <p>入门页面提供了对项目及其功能的入门介绍，而本文档则侧重于说明我们在 Bootstrap 中做事的 <em>原因</em>。它阐释了我们基于 Web 构建的理念，以便他人能向我们学习、与我们共同贡献，并帮助我们改进。</p>
    <p>
      发现了不妥之处，或者有更好的做法？
      <a href="https://github.com/twbs/bootstrap/issues/new/choose">提交 issue</a>——我们很乐意与你讨论。
    </p>
    <h2 id="summary">概述<a class="anchor-link" href="#summary" aria-label="概述链接"></a></h2>
    <p>我们会在后文深入探讨其中的每一项，但先从整体上说明指导我们实现方式的原则。</p>
    <ul>
      <li>组件应是响应式的，并遵循移动优先</li>
      <li>组件应基于一个基础类构建，并通过修饰类进行扩展</li>
      <li>组件状态应遵循统一的 z-index 层级</li>
      <li>只要有可能，优先使用 HTML 和 CSS 实现，而非 JavaScript</li>
      <li>只要有可能，优先使用工具类，而非自定义样式</li>
      <li>只要有可能，避免强制严格的 HTML 结构要求（子元素选择器）</li>
    </ul>
    <h2 id="responsive">响应式<a class="anchor-link" href="#responsive" aria-label="响应式链接"></a></h2>
    <p>
      Bootstrap 的响应式样式是为了实现响应式而构建的，这种方式通常被称为
      <em>移动优先</em>。我们在文档中使用这一术语，并在很大程度上认同它，但有时它会显得过于宽泛。虽然在 Bootstrap 中并非每个组件都<em>必须</em>完全响应式，但这种响应式方式的核心在于减少 CSS 覆盖，促使你随着视口变大而逐步添加样式。
    </p>
    <p>
      在整个 Bootstrap 中，你会在媒体查询里最清楚地看到这一点。大多数情况下，我们使用
      <code>min-width</code> 查询，它们从某个特定断点开始生效，并一直延续到更高的断点。例如，<code>.d-none</code> 从 <code>min-width: 0</code> 一直应用到无限大。另一方面，<code>.d-md-none</code> 从中等断点开始向上应用。
    </p>
    <p>有时，当组件的固有复杂性需要时，我们会使用 <code>max-width</code>。有时，与重写组件的核心功能相比，这些覆盖在功能上和思维上更易于实现和维护。我们努力限制这种做法，但偶尔也会使用。</p>
    <h2 id="classes">类<a class="anchor-link" href="#classes" aria-label="类链接"></a></h2>
    <p>
      除了我们的 Reboot（一个跨浏览器规范化样式表）之外，我们所有的样式都旨在使用类作为选择器。这意味着要避免使用类型选择器（例如
      <code>input[type=&quot;text&quot;]</code>）以及多余父级类（例如 <code>.parent .child</code>），因为它们会让样式过于具体，难以轻松覆盖。
    </p>
    <p>
      因此，组件应基于一个基础类构建，该类存放通用的、不应被覆盖的属性和值对。例如 <code>.btn</code> 和 <code>.btn-primary</code>。我们使用 <code>.btn</code> 来定义所有通用样式，如 <code>display</code>、<code>padding</code> 和 <code>border-width</code>。然后我们使用修饰类，如
      <code>.btn-primary</code>，来添加颜色、背景色、边框色等。
    </p>
    <p>只有当需要在多个变体中更改多个属性或值时，才应使用修饰类。修饰类并不总是必需的，因此在创建它们时，请确保你确实减少了代码行数，并避免了不必要的覆盖。修饰类的良好示例是我们的主题颜色类和尺寸变体。</p>
    <h2 id="z-index-scales">z-index 层级<a class="anchor-link" href="#z-index-scales" aria-label="z-index 层级链接"></a></h2>
    <p>Bootstrap 中有两个 <code>z-index</code> 层级——组件内部元素和覆盖层组件。</p>
    <h3 id="component-elements">组件元素<a class="anchor-link" href="#component-elements" aria-label="组件元素链接"></a></h3>
    <ul>
      <li>
        Bootstrap 中的一些组件使用重叠元素构建，以便在不修改
        <code>border</code> 属性的情况下防止出现双重边框。例如按钮组、输入框组和分页。
      </li>
      <li>这些组件共享一个标准的 <code>z-index</code> 层级，范围从 <code>0</code> 到 <code>3</code>。</li>
      <li><code>0</code> 为默认值（初始值），<code>1</code> 为 <code>:hover</code>，<code>2</code> 为 <code>:active</code>/<code>.active</code>，<code>3</code> 为 <code>:focus</code>。</li>
      <li>这种方式符合我们对最高用户优先级的预期。如果某个元素获得了焦点，它就处于视图中并引起用户的注意。活动元素优先级第二高，因为它们表示状态。悬停优先级第三高，因为它表示用户意图，但几乎<em>任何</em>元素都可以被悬停。</li>
    </ul>
    <h3 id="overlay-components">覆盖层组件<a class="anchor-link" href="#overlay-components" aria-label="覆盖层组件链接"></a></h3>
    <p>
      Bootstrap 包含若干个以某种方式充当覆盖层的组件。按 <code>z-index</code> 从高到低依次为下拉菜单、固定和粘性导航栏、模态框、工具提示和弹出框。这些组件拥有自己的 <code>z-index</code> 层级，从 <code>1000</code> 开始。这个起始数字是随意选定的，它充当我们的样式与你项目自定义样式之间的一个小缓冲区。
    </p>
    <p>每个覆盖层组件都会略微提高其 <code>z-index</code> 值，从而符合通用 UI 原则，使用户聚焦或悬停的元素始终保持可见。例如，模态框会阻止文档操作（即除了模态框内的操作外，你无法进行任何其他操作），因此我们将它置于导航栏之上。</p>
    <p>
      在我们的 <a href="/layout/z-index"><code>z-index</code> 布局页面</a>中了解更多相关内容。
    </p>
    <h2 id="html-and-css-over-js">HTML 和 CSS 优先于 JS<a class="anchor-link" href="#html-and-css-over-js" aria-label="HTML 和 CSS 优先于 JS链接"></a></h2>
    <p>只要有可能，我们更倾向于编写 HTML 和 CSS，而非 JavaScript。一般来说，HTML 和 CSS 更普及，更易于各种经验水平的人使用。在浏览器中，HTML 和 CSS 也比 JavaScript 更快，而且浏览器通常为你提供了大量功能。</p>
    <p>这一原则体现在我们基于 <code>data</code> 属性的一流 JavaScript API 中。你几乎不需要编写任何 JavaScript 就能使用我们的 JavaScript 插件；取而代之的是编写 HTML。请在<a href="/getting-started/javascript#data-attributes">我们的 JavaScript 概览页面</a>中了解更多相关内容。</p>
    <p>
      最后，我们的样式建立在常见 Web 元素的基本行为之上。只要有可能，我们更倾向于使用浏览器提供的能力。例如，你几乎可以在任何元素上添加
      <code>.btn</code> 类，但大多数元素并不提供任何语义价值或浏览器功能。因此，我们改用 <code>&lt;button&gt;</code> 和 <code>&lt;a&gt;</code>。
    </p>
    <p>对于更复杂的组件也是如此。虽然我们<em>本可以</em>编写自己的表单验证插件，根据输入框的状态向父元素添加类，从而将文本样式设为红色，但我们更倾向于使用每个浏览器都提供的 <code>:valid</code>/<code>:invalid</code> 伪元素。</p>
    <h2 id="utilities">工具类<a class="anchor-link" href="#utilities" aria-label="工具类链接"></a></h2>
    <p>
      工具类——在 Bootstrap 3 中称为辅助类——是对抗 CSS 臃肿和页面性能不佳的有力盟友。工具类通常是作为类表达的单个不可变的属性值对（例如
      <code>.d-block</code> 表示 <code>display: block;</code>）。它们的主要吸引力在于编写 HTML 时的使用速度，以及限制你必须编写的自定义 CSS 数量。
    </p>
    <p>具体到自定义 CSS，工具类可以通过将最常重复的属性值对缩减为单个类，帮助对抗文件体积增长。这在你项目的规模上能产生显著效果。</p>
    <h2 id="flexible-html">灵活的 HTML<a class="anchor-link" href="#flexible-html" aria-label="灵活的 HTML链接"></a></h2>
    <p>虽然并非总能做到，但我们力求在组件的 HTML 要求上避免过于教条。因此，我们在 CSS 选择器中专注于单个类，并尽量避免直接子元素选择器（<code>&gt;</code>）。这为你的实现提供了更大的灵活性，并有助于让我们的 CSS 保持简单、降低选择器特异性。</p>
    <h2 id="code-conventions">代码规范<a class="anchor-link" href="#code-conventions" aria-label="代码规范链接"></a></h2>
    <p><a href="https://codeguide.co/">Code Guide</a>（由 Bootstrap 联合创始人 @mdo 编写）记录了我们如何在 Bootstrap 中编写 HTML 和 CSS。它规定了通用格式、常识性默认值、属性和特性顺序等方面的准则。</p>
    <p>我们使用 <a href="https://stylelint.io/">Stylelint</a> 在我们的 Sass/CSS 中强制执行这些标准及其他规范。<a href="https://github.com/twbs/stylelint-config-twbs-bootstrap">我们的自定义 Stylelint 配置</a>是开源的，可供他人使用和扩展。</p>
    <p>我们使用 <a href="https://www.npmjs.com/package/vnu-jar">vnu-jar</a> 来强制实施标准且语义化的 HTML，并检测常见错误。</p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#summary">概述</a></li>
      <li><a href="#responsive">响应式</a></li>
      <li><a href="#classes">类</a></li>
      <li>
        <a href="#z-index-scales">z-index 层级</a>
        <ul>
          <li><a href="#component-elements">组件元素</a></li>
          <li><a href="#overlay-components">覆盖层组件</a></li>
        </ul>
      </li>
      <li><a href="#html-and-css-over-js">HTML 和 CSS 优先于 JS</a></li>
      <li><a href="#utilities">工具类</a></li>
      <li><a href="#flexible-html">灵活的 HTML</a></li>
      <li>
        <a href="#code-conventions">代码规范</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
