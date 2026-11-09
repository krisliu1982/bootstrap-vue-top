<template>
  <article class="bd-content">
    <h1>颜色模式</h1>
    <p>Bootstrap 从 v5.3.0 起支持颜色模式（或称主题）。你可以探索我们默认的浅色颜色模式和新的深色模式，或使用我们的样式作为模板来创建自己的颜色模式。</p>

    <Callout>
      <p>
        <strong>亲自试一试！</strong>从 <a href="https://github.com/twbs/examples/tree/main/color-modes">twbs/examples 仓库</a>下载将 Bootstrap 与 Stylelint 以及颜色模式配合使用的源代码和工作演示。你也可以
        <a href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html">在 StackBlitz 中打开该示例</a>。
      </p>
    </Callout>
    <h2 id="dark-mode">深色模式<a class="anchor-link" href="#dark-mode" aria-label="深色模式"></a></h2>
    <p>
      <strong>Bootstrap 现在支持颜色模式，首先从深色模式开始！</strong>在 v5.3.0 中，你可以实现自己的颜色模式切换器（参见下方 Bootstrap 文档中的示例），并按需应用不同的颜色模式。我们支持浅色模式（默认）以及现在的深色模式。借助 <code>data-bs-theme</code> 属性，颜色模式既可以在
      <code>&lt;html&gt;</code> 元素上全局切换，也可以在特定组件和元素上切换。
    </p>
    <p>
      或者，你也可以借助我们的颜色模式 mixin 切换到媒体查询的实现方式——详见
      <a href="#building-with-sass">用法部分</a>。但请注意，这会让你无法像下面展示的那样按组件逐个更改主题。
    </p>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>例如，要更改下拉菜单的颜色模式，请将 <code>data-bs-theme=&quot;light&quot;</code> 或 <code>data-bs-theme=&quot;dark&quot;</code> 添加到父级 <code>.dropdown</code> 上。这样，无论全局颜色模式是什么，这些下拉菜单都会以指定的主题值显示。</p>
    <Example
      class="d-flex justify-content-between"
      code='<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>'
    />
    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理"></a></h2>
    <ul>
      <li>
        <p>
          如上所示，颜色模式样式由 <code>data-bs-theme</code> 属性控制。该属性可以应用于 <code>&lt;html&gt;</code> 元素，或任何其他元素或 Bootstrap 组件。如果应用于 <code>&lt;html&gt;</code> 元素，它将应用于所有内容。如果应用于某个组件或元素，其作用域将限定在该特定组件或元素上。
        </p>
      </li>
      <li>
        <p>
          对于你希望支持的每种颜色模式，你都需要为共享的全局 CSS 变量添加新的覆盖。我们已在
          <code>_root.scss</code> 样式表中为深色模式这样做了，其中浅色模式作为默认值。在编写颜色模式专用的样式时，请使用该 mixin：
        </p>
        <CodeWrapper
          code="// Color mode variables in _root.scss
@include color-mode(dark) {
  // CSS variable overrides here...
}
"
          lang="scss"
        />
      </li>
      <li>
        <p>
          我们使用自定义的 <code>_variables-dark.scss</code> 来为深色模式提供这些共享的全局 CSS 变量覆盖。你自己的自定义颜色模式并不需要此文件，但我们的深色模式需要它，原因有二。第一，最好有一个统一的地方来重置全局颜色。第二，必须覆盖一些 Sass 变量，以适配嵌入在我们 CSS 中的背景图像（用于折叠面板、表单组件等）。
        </p>
      </li>
    </ul>
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法"></a></h2>
    <h3 id="enable-dark-mode">启用深色模式<a class="anchor-link" href="#enable-dark-mode" aria-label="启用深色模式"></a></h3>
    <p>
      将 <code>data-bs-theme=&quot;dark&quot;</code> 属性添加到 <code>&lt;html&gt;</code> 元素，即可在整个项目中启用内置的深色颜色模式。这会将深色颜色模式应用于所有组件和元素，但已应用特定 <code>data-bs-theme</code> 属性的元素除外。基于<a href="/getting-started/introduction#quick-start">快速开始模板</a>：
    </p>
    <CodeWrapper
      code='&lt;!doctype html&gt;
&lt;html lang="en" data-bs-theme="dark"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Bootstrap demo&lt;/title&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;'
      lang="html"
    />
    <p>
      Bootstrap 尚未内置颜色模式选择器，但如果你愿意，可以使用我们自己文档中的选择器。
      <a href="#javascript">在 JavaScript 部分了解更多。</a>
    </p>
    <h3 id="building-with-sass">使用 Sass 构建<a class="anchor-link" href="#building-with-sass" aria-label="使用 Sass 构建"></a></h3>
    <p>我们新的深色模式选项可供所有 Bootstrap 用户使用，但它通过 data 属性而不是媒体查询来控制，且不会自动切换项目的颜色模式。你可以通过将 <code>$enable-dark-mode</code> 更改为 <code>false</code>，在 Sass 中完全禁用我们的深色模式。</p>
    <p>
      我们使用自定义的 Sass mixin <code>color-mode()</code>，帮助你控制颜色模式的<em>应用方式</em>。默认情况下，我们采用 <code>data</code> 属性方式，让你能够创造更友好的用户体验，让访问者可以选择自动深色模式，或控制自己的偏好（就像我们这里的文档一样）。
      这也是一种简单且可扩展的方式，用于添加除浅色和深色之外的不同主题和更多自定义颜色模式。
    </p>
    <p>如果你希望使用媒体查询并仅让颜色模式自动生效，可以通过 Sass 变量更改该 mixin 的默认类型。请参考以下代码片段及其编译后的 CSS 输出。</p>
    <CodeWrapper
      code="$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
"
      lang="scss"
    />
    <p>输出结果：</p>
    <CodeWrapper
      code="[data-bs-theme=dark] .element {
  color: var(--bs-primary-text-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}
"
      lang="css"
    />
    <p>而当设置为 <code>media-query</code> 时：</p>
    <CodeWrapper
      code="$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
"
      lang="scss"
    />
    <p>输出结果：</p>
    <CodeWrapper
      code="@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
"
      lang="css"
    />
    <h2 id="custom-color-modes">自定义颜色模式<a class="anchor-link" href="#custom-color-modes" aria-label="自定义颜色模式"></a></h2>
    <p>
      虽然颜色模式的主要用例是浅色和深色模式，但也可以创建自定义颜色模式。使用自定义值作为颜色模式名称来创建你自己的 <code>data-bs-theme</code> 选择器，然后按需修改我们的 Sass 和 CSS 变量。我们选择创建一个单独的 <code>_variables-dark.scss</code> 样式表来存放
      Bootstrap 深色模式专用的 Sass 变量，但你并不需要这样做。
    </p>
    <p>例如，你可以使用选择器 <code>data-bs-theme=&quot;blue&quot;</code> 创建一个“蓝色主题”。在你的自定义 Sass 或 CSS 文件中，添加新的选择器，并按需覆盖任何全局或组件的 CSS 变量。如果你使用 Sass，还可以在 CSS 变量覆盖中使用 Sass 函数。</p>
    <ScssDocs name="custom-color-mode" file="site/src/scss/_content.scss" /><Example
      :showMarkup="false"
      code='<div class="bd-example text-body bg-body" data-bs-theme="blue">
      <div class="h4">Example blue theme</div>
      <p>Some paragraph text to show how the blue theme might look with written copy.</p>

      <hr class="my-4"/>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonCustom" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCustom">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>'
    />
    <CodeWrapper
      code='&lt;div data-bs-theme="blue"&gt;
  ...
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="JavaScript"></a></h2>
    <p>
      要允许访问者或用户切换颜色模式，你需要创建一个切换元素来控制根元素 <code>&lt;html&gt;</code> 上的
      <code>data-bs-theme</code> 属性。我们在文档中构建了一个切换器，它初始会遵循用户当前系统颜色模式，但提供了覆盖该设置并选择特定颜色模式的选项。
    </p>
    <p>
      下面介绍为其提供支持的 JavaScript。欢迎查看我们自己的文档导航栏，了解如何使用我们组件中的 HTML 和 CSS 来实现它。建议将 JavaScript 放在页面顶部，以减少站点重新加载期间的屏幕闪烁。请注意，如果你决定为颜色模式使用媒体
      查询，并且更倾向于隐式控制，则可能需要修改或移除 JavaScript。
    </p>
    <CodeWrapper
      code="/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value=&quot;${theme}&quot;]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()"
      lang="javascript"
    />
    <h2 id="    adding-theme-colors">添加主题色<a class="anchor-link" href="#adding-theme-colors" aria-label="添加主题色"></a></h2>
    <p>
          对于我们的某些组件（如<a href="/components/alerts">警告框</a>和<a href="/components/list-group">列表组</a>），仅在 <code>$theme-colors</code> 中添加新颜色是不够的。还必须为浅色主题在 <code>$theme-colors-text</code>、<code>$theme-colors-bg-subtle</code> 和 <code>$theme-colors-border-subtle</code> 中定义新颜色；
          同时还要为深色主题在 <code>$theme-colors-text-dark</code>、<code>$theme-colors-bg-subtle-dark</code> 和 <code>$theme-colors-border-subtle-dark</code> 中定义。
    </p>
        <p>这是一个手动过程，因为 Sass 无法从现有变量或映射生成自己的 Sass 变量。在未来版本的 Bootstrap 中，我们将重新审视这一设置以减少重复。</p>
    <CodeWrapper
      code='// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add a custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: ("custom-color": #712cf9);
$custom-colors-bg-subtle: ("custom-color": #e1d2fe);
$custom-colors-border-subtle: ("custom-color": #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark: ("custom-color": #8951fa);
$custom-colors-border-subtle-dark: ("custom-color": #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc
'
      lang="scss"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量"></a></h3>
    <p>
      数十个根级 CSS 变量被重复用作深色模式的覆盖。它们的作用域限定在颜色模式选择器上，该选择器默认为 <code>data-bs-theme</code>，但<a href="#building-with-sass">可以配置</a>为使用 <code>prefers-color-scheme</code> 媒体查询。请将这些变量作为生成你自己新
      颜色模式的参考。
    </p>
    <ScssDocs name="root-dark-mode-vars" file="scss/_root.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量"></a></h3>
    <p>
      我们深色颜色模式的 CSS 变量部分由 <code>_variables-dark.scss</code> 中深色模式专用的 Sass 变量生成。这还包括一些用于更改组件中嵌入 SVG 颜色的自定义覆盖。
    </p>
    <ScssDocs name="sass-dark-mode-vars" file="scss/_variables-dark.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin"></a></h3>
    <p>
      深色模式以及你创建的任何自定义颜色模式的样式，都可以使用可自定义的 <code>color-mode()</code> mixin，将作用域适当地限定到
      <code>data-bs-theme</code> 属性选择器或媒体查询。更多细节请参阅 <a href="#building-with-sass">Sass 用法部分</a>。
    </p>
    <ScssDocs name="color-mode-mixin" file="scss/mixins/_color-mode.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#dark-mode">深色模式</a></li>
      <li><a href="#example">示例</a></li>
      <li><a href="#how-it-works">工作原理</a></li>
      <li>
        <a href="#usage">用法</a>
        <ul>
          <li><a href="#enable-dark-mode">启用深色模式</a></li>
          <li><a href="#building-with-sass">使用 Sass 构建</a></li>
        </ul>
      </li>
      <li><a href="#custom-color-modes">自定义颜色模式</a></li>
      <li><a href="#javascript">JavaScript</a></li>
      <li><a href="#adding-theme-colors">添加主题色</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
