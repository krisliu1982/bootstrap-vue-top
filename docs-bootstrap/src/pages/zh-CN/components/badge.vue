<template>
  <article class="bd-content" data-pagefind-body>
    <h1>徽章</h1>
    <p class="lead">徽章的文档和示例，这是我们用于计数和标记的小型组件。</p>

    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>
      徽章通过相对字号和
      <code>em</code> 单位，与紧邻的父元素尺寸保持一致。自 v5 起，徽章不再为链接提供聚焦或悬停样式。
    </p>
    <h3 id="headings">标题<a class="anchor-link" href="#headings" aria-label="标题链接"></a></h3>
    <Example
      code='<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
<h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
<h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
<h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
<h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
<h6>Example heading <span class="badge text-bg-secondary">New</span></h6>'
    />
    <h3 id="buttons">按钮<a class="anchor-link" href="#buttons" aria-label="按钮链接"></a></h3>
    <p>徽章可以作为链接或按钮的一部分，用于提供计数器。</p>
    <Example
      code='<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>'
    />
    <p>
      请注意，根据使用方式的不同，徽章可能会让屏幕阅读器和类似辅助技术的用户感到困惑。虽然徽章的样式提供了关于其用途的视觉提示，但这些用户只会听到徽章的内容。根据具体情况，这些徽章可能看起来像是句子、链接或按钮末尾随机附加的单词或数字。
    </p>
    <p>除非上下文清晰明确（如“Notifications”示例中，“4”被理解为通知的数量），否则请考虑添加一段视觉上隐藏的附加文本，以提供更多上下文。</p>
    <h3 id="positioned">定位<a class="anchor-link" href="#positioned" aria-label="定位链接"></a></h3>
    <p>使用工具类修改 <code>.badge</code>，将其定位到链接或按钮的角上。</p>
    <Example
      code='<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>'
    />
    <p>你也可以用一些不使用计数的其他工具类取代 <code>.badge</code>，从而获得更通用的指示器。</p>
    <Example
      code='<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>'
    />
    <h2 id="background-colors">背景颜色<a class="anchor-link" href="#background-colors" aria-label="背景颜色链接"></a></h2>
    <AddedIn version="5.2.0" />
    <p>
      使用<a href="helpers/color-background">我们的 <code>.text-bg-{color}</code> 辅助类</a>来设置 <code>background-color</code> 及其对比强烈的前景色 <code>color</code>。以前，需要手动将所选的<a href="/utilities/colors"><code>.text-{color}</code></a>和
     <a href="/utilities/background"><code>.bg-{color}</code></a>工具类配对进行样式设置，如果你愿意，仍然可以这样使用。
    </p>

    <Example :code="data['theme-colors'].map((themeColor) => `<span class=&quot;badge text-bg-${themeColor.name}&quot;>${themeColor.name}</span>`).join('\n')" /><Callout name="warning-color-assistive-technologies" />
    <h2 id="pill-badges">药丸徽章<a class="anchor-link" href="#pill-badges" aria-label="药丸徽章链接"></a></h2>

    <p>使用 <code>.rounded-pill</code> 工具类，通过更大的 <code>border-radius</code> 让徽章更圆润。</p>

    <Example :code="data['theme-colors'].map((themeColor) => `<span class=&quot;badge rounded-pill text-bg-${themeColor.name}&quot;>${themeColor.name}</span>`).join('\n')" />

    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，徽章现在在
      <code>.badge</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="badge-css-vars" file="scss/_badge.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="badge-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li>
       <a href="#examples">示例</a>
        <ul>
          <li><a href="#headings">标题</a></li>
          <li><a href="#buttons">按钮</a></li>
          <li><a href="#positioned">定位</a></li>
        </ul>
      </li>
      <li><a href="#background-colors">背景颜色</a></li>
      <li><a href="#pill-badges">药丸徽章</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
