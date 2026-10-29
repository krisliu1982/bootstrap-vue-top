<template>
<article class="docs-content prose">
    <h1>CSS 变量</h1>
    <p>使用 Bootstrap 的 CSS 自定义属性，实现快速且面向未来的设计与开发。</p>
    <h2 id="css-variables">
      CSS 变量
      <a class="anchor-link" href="#css-variables" aria-label="链接到CSS 变量章节"></a>
    </h2>

    <p>Bootstrap 在其编译后的 CSS 中内置了许多 <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS 自定义属性（变量）</a>，无需重新编译
      Sass 即可实时定制。在浏览器检查器、代码沙箱或一般原型设计中，它们让你可以轻松访问常用值，例如主题色、断点和主要字体栈。</p>

    <p><strong>我们所有的自定义属性都带有 <code>bs-</code> 前缀</strong>，以避免与第三方 CSS 冲突。</p>

    <h2 id="root-variables">
      根变量
      <a class="anchor-link" href="#root-variables" aria-label="链接到根变量章节"></a>
    </h2>

    <p>以下是我们内置的变量（注意 <code>:root, :host</code> 选择器是必需的），只要 Bootstrap 的 CSS 被加载，就能在任何地方访问它们。它们位于我们的
      <code>_root.scss</code> 文件中，并包含在编译后的 dist 文件里。其中许多变量通过 CSS 的 <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark"><code>light-dark()</code></a>
      函数自动解析亮色和暗色值，因此单个 <code>:root, :host</code> 声明即可覆盖两种<a href="/docs/customize/color-modes">颜色模式</a>。</p>

    <CodeWrapper code=":root,
:host {
  --bs-blue-025: color-mix(in oklch, var(--bs-white) 94%, oklch(60% 0.24 240deg));
  --bs-blue-050: color-mix(in oklch, var(--bs-white) 90%, oklch(60% 0.24 240deg));
  --bs-blue-100: color-mix(in oklch, var(--bs-white) 80%, oklch(60% 0.24 240deg));
  --bs-blue-200: color-mix(in oklch, var(--bs-white) 60%, oklch(60% 0.24 240deg));
  --bs-blue-300: color-mix(in oklch, var(--bs-white) 40%, oklch(60% 0.24 240deg));
  --bs-blue-400: color-mix(in oklch, var(--bs-white) 20%, oklch(60% 0.24 240deg));
  --bs-blue-500: oklch(60% 0.24 240deg);
  --bs-blue-600: color-mix(in oklch, var(--bs-black) 16%, oklch(60% 0.24 240deg));
  --bs-blue-700: color-mix(in oklch, var(--bs-black) 32%, oklch(60% 0.24 240deg));
  --bs-blue-800: color-mix(in oklch, var(--bs-black) 48%, oklch(60% 0.24 240deg));
  --bs-blue-900: color-mix(in oklch, var(--bs-black) 64%, oklch(60% 0.24 240deg));
  --bs-blue-950: color-mix(in oklch, var(--bs-black) 70%, oklch(60% 0.24 240deg));
  --bs-blue-975: color-mix(in oklch, var(--bs-black) 76%, oklch(60% 0.24 240deg));
  --bs-indigo-025: color-mix(in oklch, var(--bs-white) 94%, oklch(56% 0.26 288deg));
  --bs-indigo-050: color-mix(in oklch, var(--bs-white) 90%, oklch(56% 0.26 288deg));
  --bs-indigo-100: color-mix(in oklch, var(--bs-white) 80%, oklch(56% 0.26 288deg));
  --bs-indigo-200: color-mix(in oklch, var(--bs-white) 60%, oklch(56% 0.26 288deg));
  --bs-indigo-300: color-mix(in oklch, var(--bs-white) 40%, oklch(56% 0.26 288deg));
  --bs-indigo-400: color-mix(in oklch, var(--bs-white) 20%, oklch(56% 0.26 288deg));
  --bs-indigo-500: oklch(56% 0.26 288deg);
  --bs-indigo-600: color-mix(in oklch, var(--bs-black) 16%, oklch(56% 0.26 288deg));
  --bs-indigo-700: color-mix(in oklch, var(--bs-black) 32%, oklch(56% 0.26 288deg));
  --bs-indigo-800: color-mix(in oklch, var(--bs-black) 48%, oklch(56% 0.26 288deg));
  --bs-indigo-900: color-mix(in oklch, var(--bs-black) 64%, oklch(56% 0.26 288deg));
  --bs-indigo-950: color-mix(in oklch, var(--bs-black) 70%, oklch(56% 0.26 288deg));
  --bs-indigo-975: color-mix(in oklch, var(--bs-black) 76%, oklch(56% 0.26 288deg));
  --bs-violet-025: color-mix(in oklch, var(--bs-white) 94%, oklch(56% 0.24 300deg));
  --bs-violet-050: color-mix(in oklch, var(--bs-white) 90%, oklch(56% 0.24 300deg));
  --bs-violet-100: color-mix(in oklch, var(--bs-white) 80%, oklch(56% 0.24 300deg));
  --bs-violet-200: color-mix(in oklch, var(--bs-white) 60%, oklch(56% 0.24 300deg));
  --bs-violet-300: color-mix(in oklch, var(--bs-white) 40%, oklch(56% 0.24 300deg));
  --bs-violet-400: color-mix(in oklch, var(--bs-white) 20%, oklch(56% 0.24 300deg));
  --bs-violet-500: oklch(56% 0.24 300deg);
  --bs-violet-600: color-mix(in oklch, var(--bs-black) 16%, oklch(56% 0.24 300deg));
  --bs-violet-700: color-mix(in oklch, var(--bs-black) 32%, oklch(56% 0.24 300deg));
  --bs-violet-800: color-mix(in oklch, var(--bs-black) 48%, oklch(56% 0.24 300deg));
  --bs-violet-900: color-mix(in oklch, var(--bs-black) 64%, oklch(56% 0.24 300deg));
  --bs-violet-950: color-mix(in oklch, var(--bs-black) 70%, oklch(56% 0.24 300deg));
  --bs-violet-975: color-mix(in oklch, var(--bs-black) 76%, oklch(56% 0.24 300deg));
  --bs-purple-025: color-mix(in oklch, var(--bs-white) 94%, oklch(56% 0.24 320deg));
  --bs-purple-050: color-mix(in oklch, var(--bs-white) 90%, oklch(56% 0.24 320deg));
  --bs-purple-100: color-mix(in oklch, var(--bs-white) 80%, oklch(56% 0.24 320deg));
  --bs-purple-200: color-mix(in oklch, var(--bs-white) 60%, oklch(56% 0.24 320deg));
  --bs-purple-300: color-mix(in oklch, var(--bs-white) 40%, oklch(56% 0.24 320deg));
  --bs-purple-400: color-mix(in oklch, var(--bs-white) 20%, oklch(56% 0.24 320deg));
  --bs-purple-500: oklch(56% 0.24 320deg);
  --bs-purple-600: color-mix(in oklch, var(--bs-black) 16%, oklch(56% 0.24 320deg));
  --bs-purple-700: color-mix(in oklch, var(--bs-black) 32%, oklch(56% 0.24 320deg));
  --bs-purple-800: color-mix(in oklch, var(--bs-black) 48%, oklch(56% 0.24 320deg));
  --bs-purple-900: color-mix(in oklch, var(--bs-black) 64%, oklch(56% 0.24 320deg));
  --bs-purple-950: color-mix(in oklch, var(--bs-black) 70%, oklch(56% 0.24 320deg));
  --bs-purple-975: color-mix(in oklch, var(--bs-black) 76%, oklch(56% 0.24 320deg));
  --bs-pink-025: color-mix(in oklch, var(--bs-white) 94%, oklch(60% 0.22 4deg));
  --bs-pink-050: color-mix(in oklch, var(--bs-white) 90%, oklch(60% 0.22 4deg));
  --bs-pink-100: color-mix(in oklch, var(--bs-white) 80%, oklch(60% 0.22 4deg));
  --bs-pink-200: color-mix(in oklch, var(--bs-white) 60%, oklch(60% 0.22 4deg));
  --bs-pink-300: color-mix(in oklch, var(--bs-white) 40%, oklch(60% 0.22 4deg));
  --bs-pink-400: color-mix(in oklch, var(--bs-white) 20%, oklch(60% 0.22 4deg));
  --bs-pink-500: oklch(60% 0.22 4deg);
  --bs-pink-600: color-mix(in oklch, var(--bs-black) 16%, oklch(60% 0.22 4deg));
  --bs-pink-700: color-mix(in oklch, var(--bs-black) 32%, oklch(60% 0.22 4deg));
  --bs-pink-800: color-mix(in oklch, var(--bs-black) 48%, oklch(60% 0.22 4deg));
  --bs-pink-900: color-mix(in oklch, var(--bs-black) 64%, oklch(60% 0.22 4deg));
  --bs-pink-950: color-mix(in oklch, var(--bs-black) 70%, oklch(60% 0.22 4deg));
  --bs-pink-975: color-mix(in oklch, var(--bs-black) 76%, oklch(60% 0.22 4deg));
  --bs-red-025: color-mix(in oklch, var(--bs-white) 94%, oklch(60% 0.22 20deg));
  --bs-red-050: color-mix(in oklch, var(--bs-white) 90%, oklch(60% 0.22 20deg));
  --bs-red-100: color-mix(in oklch, var(--bs-white) 80%, oklch(60% 0.22 20deg));
  --bs-red-200: color-mix(in oklch, var(--bs-white) 60%, oklch(60% 0.22 20deg));
  --bs-red-300: color-mix(in oklch, var(--bs-white) 40%, oklch(60% 0.22 20deg));
  --bs-red-400: color-mix(in oklch, var(--bs-white) 20%, oklch(60% 0.22 20deg));
  --bs-red-500: oklch(60% 0.22 20deg);
  --bs-red-600: color-mix(in oklch, var(--bs-black) 16%, oklch(60% 0.22 20deg));
  --bs-red-700: color-mix(in oklch, var(--bs-black) 32%, oklch(60% 0.22 20deg));
  --bs-red-800: color-mix(in oklch, var(--bs-black) 48%, oklch(60% 0.22 20deg));
  --bs-red-900: color-mix(in oklch, var(--bs-black) 64%, oklch(60% 0.22 20deg));
  --bs-red-950: color-mix(in oklch, var(--bs-black) 70%, oklch(60% 0.22 20deg));
  --bs-red-975: color-mix(in oklch, var(--bs-black) 76%, oklch(60% 0.22 20deg));
  --bs-orange-025: color-mix(in oklch, var(--bs-white) 94%, oklch(70% 0.22 52deg));
  --bs-orange-050: color-mix(in oklch, var(--bs-white) 90%, oklch(70% 0.22 52deg));
  --bs-orange-100: color-mix(in oklch, var(--bs-white) 80%, oklch(70% 0.22 52deg));
  --bs-orange-200: color-mix(in oklch, var(--bs-white) 60%, oklch(70% 0.22 52deg));
  --bs-orange-300: color-mix(in oklch, var(--bs-white) 40%, oklch(70% 0.22 52deg));
  --bs-orange-400: color-mix(in oklch, var(--bs-white) 20%, oklch(70% 0.22 52deg));
  --bs-orange-500: oklch(70% 0.22 52deg);
  --bs-orange-600: color-mix(in oklch, var(--bs-black) 16%, oklch(70% 0.22 52deg));
  --bs-orange-700: color-mix(in oklch, var(--bs-black) 32%, oklch(70% 0.22 52deg));
  --bs-orange-800: color-mix(in oklch, var(--bs-black) 48%, oklch(70% 0.22 52deg));
  --bs-orange-900: color-mix(in oklch, var(--bs-black) 64%, oklch(70% 0.22 52deg));
  --bs-orange-950: color-mix(in oklch, var(--bs-black) 70%, oklch(70% 0.22 52deg));
  --bs-orange-975: color-mix(in oklch, var(--bs-black) 76%, oklch(70% 0.22 52deg));
  --bs-amber-025: color-mix(in oklch, var(--bs-white) 94%, oklch(79% 0.2 78deg));
  --bs-amber-050: color-mix(in oklch, var(--bs-white) 90%, oklch(79% 0.2 78deg));
  --bs-amber-100: color-mix(in oklch, var(--bs-white) 80%, oklch(79% 0.2 78deg));
  --bs-amber-200: color-mix(in oklch, var(--bs-white) 60%, oklch(79% 0.2 78deg));
  --bs-amber-300: color-mix(in oklch, var(--bs-white) 40%, oklch(79% 0.2 78deg));
  --bs-amber-400: color-mix(in oklch, var(--bs-white) 20%, oklch(79% 0.2 78deg));
  --bs-amber-500: oklch(79% 0.2 78deg);
  --bs-amber-600: color-mix(in oklch, var(--bs-black) 16%, oklch(79% 0.2 78deg));
  --bs-amber-700: color-mix(in oklch, var(--bs-black) 32%, oklch(79% 0.2 78deg));
  --bs-amber-800: color-mix(in oklch, var(--bs-black) 48%, oklch(79% 0.2 78deg));
  --bs-amber-900: color-mix(in oklch, var(--bs-black) 64%, oklch(79% 0.2 78deg));
  --bs-amber-950: color-mix(in oklch, var(--bs-black) 70%, oklch(79% 0.2 78deg));
  --bs-amber-975: color-mix(in oklch, var(--bs-black) 76%, oklch(79% 0.2 78deg));
  --bs-yellow-025: color-mix(in oklch, var(--bs-white) 94%, oklch(88% 0.24 88deg));
  --bs-yellow-050: color-mix(in oklch, var(--bs-white) 90%, oklch(88% 0.24 88deg));
  --bs-yellow-100: color-mix(in oklch, var(--bs-white) 80%, oklch(88% 0.24 88deg));
  --bs-yellow-200: color-mix(in oklch, var(--bs-white) 60%, oklch(88% 0.24 88deg));
  --bs-yellow-300: color-mix(in oklch, var(--bs-white) 40%, oklch(88% 0.24 88deg));
  --bs-yellow-400: color-mix(in oklch, var(--bs-white) 20%, oklch(88% 0.24 88deg));
  --bs-yellow-500: oklch(88% 0.24 88deg);
  --bs-yellow-600: color-mix(in oklch, var(--bs-black) 16%, oklch(88% 0.24 88deg));
  --bs-yellow-700: color-mix(in oklch, var(--bs-black) 32%, oklch(88% 0.24 88deg));
  --bs-yellow-800: color-mix(in oklch, var(--bs-black) 48%, oklch(88% 0.24 88deg));
  --bs-yellow-900: color-mix(in oklch, var(--bs-black) 64%, oklch(88% 0.24 88deg));
  --bs-yellow-950: color-mix(in oklch, var(--bs-black) 70%, oklch(88% 0.24 88deg));
  --bs-yellow-975: color-mix(in oklch, var(--bs-black) 76%, oklch(88% 0.24 88deg));
  --bs-lime-025: color-mix(in oklch, var(--bs-white) 94%, oklch(65% 0.24 135deg));
  --bs-lime-050: color-mix(in oklch, var(--bs-white) 90%, oklch(65% 0.24 135deg));
  --bs-lime-100: color-mix(in oklch, var(--bs-white) 80%, oklch(65% 0.24 135deg));
  --bs-lime-200: color-mix(in oklch, var(--bs-white) 60%, oklch(65% 0.24 135deg));
  --bs-lime-300: color-mix(in oklch, var(--bs-white) 40%, oklch(65% 0.24 135deg));
  --bs-lime-400: color-mix(in oklch, var(--bs-white) 20%, oklch(65% 0.24 135deg));
  --bs-lime-500: oklch(65% 0.24 135deg);
  --bs-lime-600: color-mix(in oklch, var(--bs-black) 16%, oklch(65% 0.24 135deg));
  --bs-lime-700: color-mix(in oklch, var(--bs-black) 32%, oklch(65% 0.24 135deg));
  --bs-lime-800: color-mix(in oklch, var(--bs-black) 48%, oklch(65% 0.24 135deg));
  --bs-lime-900: color-mix(in oklch, var(--bs-black) 64%, oklch(65% 0.24 135deg));
  --bs-lime-950: color-mix(in oklch, var(--bs-black) 70%, oklch(65% 0.24 135deg));
  --bs-lime-975: color-mix(in oklch, var(--bs-black) 76%, oklch(65% 0.24 135deg));
  --bs-green-025: color-mix(in oklch, var(--bs-white) 94%, oklch(64% 0.22 160deg));
  --bs-green-050: color-mix(in oklch, var(--bs-white) 90%, oklch(64% 0.22 160deg));
  --bs-green-100: color-mix(in oklch, var(--bs-white) 80%, oklch(64% 0.22 160deg));
  --bs-green-200: color-mix(in oklch, var(--bs-white) 60%, oklch(64% 0.22 160deg));
  --bs-green-300: color-mix(in oklch, var(--bs-white) 40%, oklch(64% 0.22 160deg));
  --bs-green-400: color-mix(in oklch, var(--bs-white) 20%, oklch(64% 0.22 160deg));
  --bs-green-500: oklch(64% 0.22 160deg);
  --bs-green-600: color-mix(in oklch, var(--bs-black) 16%, oklch(64% 0.22 160deg));
  --bs-green-700: color-mix(in oklch, var(--bs-black) 32%, oklch(64% 0.22 160deg));
  --bs-green-800: color-mix(in oklch, var(--bs-black) 48%, oklch(64% 0.22 160deg));
  --bs-green-900: color-mix(in oklch, var(--bs-black) 64%, oklch(64% 0.22 160deg));
  --bs-green-950: color-mix(in oklch, var(--bs-black) 70%, oklch(64% 0.22 160deg));
  --bs-green-975: color-mix(in oklch, var(--bs-black) 76%, oklch(64% 0.22 160deg));
  --bs-teal-025: color-mix(in oklch, var(--bs-white) 94%, oklch(68% 0.22 190deg));
  --bs-teal-050: color-mix(in oklch, var(--bs-white) 90%, oklch(68% 0.22 190deg));
  --bs-teal-100: color-mix(in oklch, var(--bs-white) 80%, oklch(68% 0.22 190deg));
  --bs-teal-200: color-mix(in oklch, var(--bs-white) 60%, oklch(68% 0.22 190deg));
  --bs-teal-300: color-mix(in oklch, var(--bs-white) 40%, oklch(68% 0.22 190deg));
  --bs-teal-400: color-mix(in oklch, var(--bs-white) 20%, oklch(68% 0.22 190deg));
  --bs-teal-500: oklch(68% 0.22 190deg);
  --bs-teal-600: color-mix(in oklch, var(--bs-black) 16%, oklch(68% 0.22 190deg));
  --bs-teal-700: color-mix(in oklch, var(--bs-black) 32%, oklch(68% 0.22 190deg));
  --bs-teal-800: color-mix(in oklch, var(--bs-black) 48%, oklch(68% 0.22 190deg));
  --bs-teal-900: color-mix(in oklch, var(--bs-black) 64%, oklch(68% 0.22 190deg));
  --bs-teal-950: color-mix(in oklch, var(--bs-black) 70%, oklch(68% 0.22 190deg));
  --bs-teal-975: color-mix(in oklch, var(--bs-black) 76%, oklch(68% 0.22 190deg));
  --bs-cyan-025: color-mix(in oklch, var(--bs-white) 94%, oklch(69% 0.22 220deg));
  --bs-cyan-050: color-mix(in oklch, var(--bs-white) 90%, oklch(69% 0.22 220deg));
  --bs-cyan-100: color-mix(in oklch, var(--bs-white) 80%, oklch(69% 0.22 220deg));
  --bs-cyan-200: color-mix(in oklch, var(--bs-white) 60%, oklch(69% 0.22 220deg));
  --bs-cyan-300: color-mix(in oklch, var(--bs-white) 40%, oklch(69% 0.22 220deg));
  --bs-cyan-400: color-mix(in oklch, var(--bs-white) 20%, oklch(69% 0.22 220deg));
  --bs-cyan-500: oklch(69% 0.22 220deg);
  --bs-cyan-600: color-mix(in oklch, var(--bs-black) 16%, oklch(69% 0.22 220deg));
  --bs-cyan-700: color-mix(in oklch, var(--bs-black) 32%, oklch(69% 0.22 220deg));
  --bs-cyan-800: color-mix(in oklch, var(--bs-black) 48%, oklch(69% 0.22 220deg));
  --bs-cyan-900: color-mix(in oklch, var(--bs-black) 64%, oklch(69% 0.22 220deg));
  --bs-cyan-950: color-mix(in oklch, var(--bs-black) 70%, oklch(69% 0.22 220deg));
  --bs-cyan-975: color-mix(in oklch, var(--bs-black) 76%, oklch(69% 0.22 220deg));
  --bs-brown-025: color-mix(in oklch, var(--bs-white) 94%, oklch(60% 0.12 54deg));
  --bs-brown-050: color-mix(in oklch, var(--bs-white) 90%, oklch(60% 0.12 54deg));
  --bs-brown-100: color-mix(in oklch, var(--bs-white) 80%, oklch(60% 0.12 54deg));
  --bs-brown-200: color-mix(in oklch, var(--bs-white) 60%, oklch(60% 0.12 54deg));
  --bs-brown-300: color-mix(in oklch, var(--bs-white) 40%, oklch(60% 0.12 54deg));
  --bs-brown-400: color-mix(in oklch, var(--bs-white) 20%, oklch(60% 0.12 54deg));
  --bs-brown-500: oklch(60% 0.12 54deg);
  --bs-brown-600: color-mix(in oklch, var(--bs-black) 16%, oklch(60% 0.12 54deg));
  --bs-brown-700: color-mix(in oklch, var(--bs-black) 32%, oklch(60% 0.12 54deg));
  --bs-brown-800: color-mix(in oklch, var(--bs-black) 48%, oklch(60% 0.12 54deg));
  --bs-brown-900: color-mix(in oklch, var(--bs-black) 64%, oklch(60% 0.12 54deg));
  --bs-brown-950: color-mix(in oklch, var(--bs-black) 70%, oklch(60% 0.12 54deg));
  --bs-brown-975: color-mix(in oklch, var(--bs-black) 76%, oklch(60% 0.12 54deg));
  --bs-gray-025: color-mix(in oklch, var(--bs-white) 94%, oklch(60% 0.02 245deg));
  --bs-gray-050: color-mix(in oklch, var(--bs-white) 90%, oklch(60% 0.02 245deg));
  --bs-gray-100: color-mix(in oklch, var(--bs-white) 80%, oklch(60% 0.02 245deg));
  --bs-gray-200: color-mix(in oklch, var(--bs-white) 60%, oklch(60% 0.02 245deg));
  --bs-gray-300: color-mix(in oklch, var(--bs-white) 40%, oklch(60% 0.02 245deg));
  --bs-gray-400: color-mix(in oklch, var(--bs-white) 20%, oklch(60% 0.02 245deg));
  --bs-gray-500: oklch(60% 0.02 245deg);
  --bs-gray-600: color-mix(in oklch, var(--bs-black) 16%, oklch(60% 0.02 245deg));
  --bs-gray-700: color-mix(in oklch, var(--bs-black) 32%, oklch(60% 0.02 245deg));
  --bs-gray-800: color-mix(in oklch, var(--bs-black) 48%, oklch(60% 0.02 245deg));
  --bs-gray-900: color-mix(in oklch, var(--bs-black) 64%, oklch(60% 0.02 245deg));
  --bs-gray-950: color-mix(in oklch, var(--bs-black) 70%, oklch(60% 0.02 245deg));
  --bs-gray-975: color-mix(in oklch, var(--bs-black) 76%, oklch(60% 0.02 245deg));
  --bs-pewter-025: color-mix(in oklch, var(--bs-white) 94%, oklch(65% 0.01 290deg));
  --bs-pewter-050: color-mix(in oklch, var(--bs-white) 90%, oklch(65% 0.01 290deg));
  --bs-pewter-100: color-mix(in oklch, var(--bs-white) 80%, oklch(65% 0.01 290deg));
  --bs-pewter-200: color-mix(in oklch, var(--bs-white) 60%, oklch(65% 0.01 290deg));
  --bs-pewter-300: color-mix(in oklch, var(--bs-white) 40%, oklch(65% 0.01 290deg));
  --bs-pewter-400: color-mix(in oklch, var(--bs-white) 20%, oklch(65% 0.01 290deg));
  --bs-pewter-500: oklch(65% 0.01 290deg);
  --bs-pewter-600: color-mix(in oklch, var(--bs-black) 16%, oklch(65% 0.01 290deg));
  --bs-pewter-700: color-mix(in oklch, var(--bs-black) 32%, oklch(65% 0.01 290deg));
  --bs-pewter-800: color-mix(in oklch, var(--bs-black) 48%, oklch(65% 0.01 290deg));
  --bs-pewter-900: color-mix(in oklch, var(--bs-black) 64%, oklch(65% 0.01 290deg));
  --bs-pewter-950: color-mix(in oklch, var(--bs-black) 70%, oklch(65% 0.01 290deg));
  --bs-pewter-975: color-mix(in oklch, var(--bs-black) 76%, oklch(65% 0.01 290deg));
}

:root,
:host {
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gradient: linear-gradient(180deg, color-mix(var(--bs-white) 15%, transparent), color-mix(var(--bs-white) 0%, transparent));
  --bs-body-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: var(--bs-font-weight-normal);
  --bs-body-line-height: 1.5;
  --bs-heading-color: inherit;
  --bs-hr-border-color: var(--bs-border-color);
  --bs-link-color: light-dark(var(--bs-primary-base), var(--bs-primary-fg));
  --bs-link-decoration: underline;
  --bs-link-underline-offset: 0.2em;
  --bs-link-hover-color: color-mix(in oklch, var(--bs-link-color) 90%, #000);
  --bs-font-mono: ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Monaco, 'Cascadia Mono', Consolas, 'Liberation Mono', monospace;
  --bs-code-font-size: 95%;
  --bs-code-color: var(--bs-fg-2);
  --bs-border-width: 1px;
  --bs-border-width-keyline: 0.5px;
  --bs-border-style: solid;
  --bs-border-color: light-dark(var(--bs-gray-200), var(--bs-gray-700));
  --bs-border-color-translucent: color-mix(in oklch, var(--bs-fg-body) 15%, transparent);
  --bs-shadow-color: #000;
  --bs-shadow-strength: 1;
  --bs-transition-timing-overlay: cubic-bezier(0.22, 1, 0.36, 1);
  --bs-spacer: 1rem;
  --bs-focus-ring-width: 3px;
  --bs-focus-ring-offset: 1px;
  --bs-focus-ring-color: var(--bs-primary-focus-ring);
  --bs-focus-ring: var(--bs-focus-ring-width) solid var(--bs-focus-ring-color);
  --bs-control-checked-bg: var(--bs-primary-base);
  --bs-control-checked-border-color: var(--bs-control-checked-bg);
  --bs-control-active-bg: var(--bs-primary-base);
  --bs-control-active-border-color: var(--bs-control-active-bg);
  --bs-control-disabled-bg: var(--bs-bg-3);
  --bs-control-disabled-opacity: 0.65;
  --bs-control-transition-duration: 0.15s;
  --bs-control-transition-timing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --bs-btn-input-fg: var(--bs-fg-body);
  --bs-btn-input-bg: var(--bs-bg-body);
  --bs-btn-input-gap: 0.375rem;
  --bs-btn-input-min-height: 2.375rem;
  --bs-btn-input-padding-y: 0.375rem;
  --bs-btn-input-padding-x: 0.75rem;
  --bs-btn-input-font-size: var(--bs-body-font-size);
  --bs-btn-input-font-weight: var(--bs-font-weight-normal);
  --bs-btn-input-line-height: var(--bs-body-line-height);
  --bs-btn-input-border-radius: var(--bs-radius-5);
  --bs-btn-input-xs-gap: var(--bs-spacer-1);
  --bs-btn-input-xs-min-height: 1.5rem;
  --bs-btn-input-xs-padding-y: 0.125rem;
  --bs-btn-input-xs-padding-x: 0.5rem;
  --bs-btn-input-xs-font-size: var(--bs-font-size-xs);
  --bs-btn-input-xs-line-height: 1.125;
  --bs-btn-input-xs-border-radius: var(--bs-radius-5);
  --bs-btn-input-sm-gap: 0.375rem;
  --bs-btn-input-sm-min-height: 2rem;
  --bs-btn-input-sm-padding-y: 0.25rem;
  --bs-btn-input-sm-padding-x: 0.625rem;
  --bs-btn-input-sm-font-size: var(--bs-font-size-sm);
  --bs-btn-input-sm-line-height: var(--bs-line-height-sm);
  --bs-btn-input-sm-border-radius: var(--bs-radius-5);
  --bs-btn-input-lg-gap: 0.375rem;
  --bs-btn-input-lg-min-height: 2.75rem;
  --bs-btn-input-lg-padding-y: 0.5rem;
  --bs-btn-input-lg-padding-x: 1rem;
  --bs-btn-input-lg-font-size: var(--bs-font-size-md);
  --bs-btn-input-lg-line-height: var(--bs-line-height-md);
  --bs-btn-input-lg-border-radius: var(--bs-radius-7);
  --bs-font-size-xs: 0.75rem;
  --bs-line-height-xs: 1.25;
  --bs-font-size-sm: 0.875rem;
  --bs-line-height-sm: 1.5;
  --bs-font-size-md: 1rem;
  --bs-line-height-md: 1.5;
  --bs-font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --bs-line-height-lg: 1.5;
  --bs-font-size-xl: clamp(1.5rem, 1.1rem + 0.75vw, 1.75rem);
  --bs-line-height-xl: 1.4285714286;
  --bs-font-size-2xl: clamp(1.75rem, 1.3rem + 1vw, 2rem);
  --bs-line-height-2xl: 1.3333333333;
  --bs-font-size-3xl: clamp(2rem, 1.5rem + 1.875vw, 2.5rem);
  --bs-line-height-3xl: 1.2;
  --bs-font-size-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
  --bs-line-height-4xl: 1.1;
  --bs-font-size-5xl: clamp(3rem, 2rem + 5vw, 4rem);
  --bs-line-height-5xl: 1.1;
  --bs-font-size-6xl: clamp(3.75rem, 2.5rem + 6.25vw, 5rem);
  --bs-line-height-6xl: 1;
  --bs-font-weight-lighter: lighter;
  --bs-font-weight-light: 300;
  --bs-font-weight-normal: 400;
  --bs-font-weight-medium: 500;
  --bs-font-weight-semibold: 600;
  --bs-font-weight-bold: 700;
  --bs-font-weight-bolder: bolder;
  --bs-primary-base: var(--bs-blue-500);
  --bs-primary-fg: light-dark(var(--bs-blue-600), var(--bs-blue-400));
  --bs-primary-fg-emphasis: light-dark(var(--bs-blue-800), var(--bs-blue-200));
  --bs-primary-bg: var(--bs-blue-500);
  --bs-primary-bg-subtle: light-dark(var(--bs-blue-100), var(--bs-blue-900));
  --bs-primary-bg-muted: light-dark(var(--bs-blue-200), var(--bs-blue-800));
  --bs-primary-border: light-dark(var(--bs-blue-300), var(--bs-blue-600));
  --bs-primary-focus-ring: light-dark(color-mix(in oklch, var(--bs-blue-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-blue-500) 75%, var(--bs-bg-body)));
  --bs-primary-contrast: var(--bs-white);
  --bs-accent-base: var(--bs-indigo-500);
  --bs-accent-fg: light-dark(var(--bs-indigo-600), color-mix(in oklch, var(--bs-indigo-400), var(--bs-indigo-300)));
  --bs-accent-fg-emphasis: light-dark(var(--bs-indigo-800), var(--bs-indigo-300));
  --bs-accent-bg: var(--bs-indigo-500);
  --bs-accent-bg-subtle: light-dark(var(--bs-indigo-100), var(--bs-indigo-900));
  --bs-accent-bg-muted: light-dark(var(--bs-indigo-200), var(--bs-indigo-800));
  --bs-accent-border: light-dark(var(--bs-indigo-300), var(--bs-indigo-600));
  --bs-accent-focus-ring: light-dark(color-mix(in oklch, var(--bs-indigo-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-indigo-500) 75%, var(--bs-bg-body)));
  --bs-accent-contrast: var(--bs-white);
  --bs-success-base: var(--bs-green-500);
  --bs-success-fg: light-dark(var(--bs-green-600), var(--bs-green-400));
  --bs-success-fg-emphasis: light-dark(var(--bs-green-800), var(--bs-green-300));
  --bs-success-bg: var(--bs-green-500);
  --bs-success-bg-subtle: light-dark(var(--bs-green-100), var(--bs-green-900));
  --bs-success-bg-muted: light-dark(var(--bs-green-200), var(--bs-green-800));
  --bs-success-border: light-dark(var(--bs-green-300), var(--bs-green-600));
  --bs-success-focus-ring: light-dark(color-mix(in oklch, var(--bs-green-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-green-500) 75%, var(--bs-bg-body)));
  --bs-success-contrast: var(--bs-white);
  --bs-danger-base: var(--bs-red-500);
  --bs-danger-fg: light-dark(var(--bs-red-600), var(--bs-red-400));
  --bs-danger-fg-emphasis: light-dark(var(--bs-red-800), var(--bs-red-300));
  --bs-danger-bg: var(--bs-red-500);
  --bs-danger-bg-subtle: light-dark(var(--bs-red-100), var(--bs-red-900));
  --bs-danger-bg-muted: light-dark(var(--bs-red-200), var(--bs-red-800));
  --bs-danger-border: light-dark(var(--bs-red-300), var(--bs-red-600));
  --bs-danger-focus-ring: light-dark(color-mix(in oklch, var(--bs-red-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-red-500) 75%, var(--bs-bg-body)));
  --bs-danger-contrast: var(--bs-white);
  --bs-warning-base: var(--bs-yellow-500);
  --bs-warning-fg: light-dark(var(--bs-yellow-700), var(--bs-yellow-400));
  --bs-warning-fg-emphasis: light-dark(var(--bs-yellow-800), var(--bs-yellow-300));
  --bs-warning-bg: var(--bs-yellow-500);
  --bs-warning-bg-subtle: light-dark(var(--bs-yellow-100), var(--bs-yellow-900));
  --bs-warning-bg-muted: light-dark(var(--bs-yellow-200), var(--bs-yellow-800));
  --bs-warning-border: light-dark(var(--bs-yellow-300), var(--bs-yellow-600));
  --bs-warning-focus-ring: light-dark(color-mix(in oklch, var(--bs-yellow-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-yellow-400) 85%, var(--bs-bg-body)));
  --bs-warning-contrast: var(--bs-gray-900);
  --bs-info-base: var(--bs-cyan-500);
  --bs-info-fg: light-dark(var(--bs-cyan-600), var(--bs-cyan-400));
  --bs-info-fg-emphasis: light-dark(var(--bs-cyan-800), var(--bs-cyan-300));
  --bs-info-bg: var(--bs-cyan-500);
  --bs-info-bg-subtle: light-dark(var(--bs-cyan-100), var(--bs-cyan-900));
  --bs-info-bg-muted: light-dark(var(--bs-cyan-200), var(--bs-cyan-800));
  --bs-info-border: light-dark(var(--bs-cyan-300), var(--bs-cyan-600));
  --bs-info-focus-ring: light-dark(color-mix(in oklch, var(--bs-cyan-500) 50%, var(--bs-bg-body)), color-mix(in oklch, var(--bs-cyan-500) 75%, var(--bs-bg-body)));
  --bs-info-contrast: var(--bs-gray-900);
  --bs-inverse-base: var(--bs-gray-900);
  --bs-inverse-fg: light-dark(var(--bs-gray-900), var(--bs-gray-200));
  --bs-inverse-fg-emphasis: light-dark(var(--bs-gray-975), var(--bs-white));
  --bs-inverse-bg: light-dark(var(--bs-gray-900), var(--bs-gray-025));
  --bs-inverse-bg-subtle: light-dark(var(--bs-gray-100), var(--bs-gray-900));
  --bs-inverse-bg-muted: light-dark(var(--bs-gray-200), var(--bs-gray-300));
  --bs-inverse-border: light-dark(var(--bs-gray-400), var(--bs-gray-100));
  --bs-inverse-focus-ring: color-mix(in oklch, light-dark(var(--bs-gray-900), var(--bs-gray-100)) 50%, var(--bs-bg-body));
  --bs-inverse-contrast: light-dark(var(--bs-white), var(--bs-gray-900));
  --bs-secondary-base: var(--bs-gray-200);
  --bs-secondary-fg: light-dark(var(--bs-gray-600), var(--bs-gray-400));
  --bs-secondary-fg-emphasis: light-dark(var(--bs-gray-800), var(--bs-gray-200));
  --bs-secondary-bg: light-dark(var(--bs-gray-100), var(--bs-gray-600));
  --bs-secondary-bg-subtle: light-dark(var(--bs-gray-050), var(--bs-gray-800));
  --bs-secondary-bg-muted: light-dark(var(--bs-gray-100), var(--bs-gray-700));
  --bs-secondary-border: light-dark(var(--bs-gray-300), var(--bs-gray-600));
  --bs-secondary-focus-ring: color-mix(in oklch, light-dark(var(--bs-gray-500), var(--bs-gray-300)) 50%, var(--bs-bg-body));
  --bs-secondary-contrast: light-dark(var(--bs-gray-900), var(--bs-white));
  --bs-bg-body: light-dark(var(--bs-white), var(--bs-gray-975));
  --bs-bg-1: light-dark(var(--bs-gray-025), var(--bs-gray-950));
  --bs-bg-2: light-dark(var(--bs-gray-050), var(--bs-gray-900));
  --bs-bg-3: light-dark(var(--bs-gray-100), var(--bs-gray-800));
  --bs-bg-4: light-dark(var(--bs-gray-200), var(--bs-gray-700));
  --bs-bg-fg: var(--bs-fg-body);
  --bs-bg-white: var(--bs-white);
  --bs-bg-black: var(--bs-black);
  --bs-bg-transparent: transparent;
  --bs-bg-inherit: inherit;
  --bs-fg-body: light-dark(var(--bs-gray-900), var(--bs-gray-050));
  --bs-fg-1: light-dark(var(--bs-gray-800), var(--bs-gray-200));
  --bs-fg-2: light-dark(var(--bs-gray-700), var(--bs-gray-300));
  --bs-fg-3: light-dark(var(--bs-gray-600), var(--bs-gray-500));
  --bs-fg-4: light-dark(var(--bs-gray-500), var(--bs-gray-600));
  --bs-fg-bg: var(--bs-bg-body);
  --bs-fg-white: var(--bs-white);
  --bs-fg-black: var(--bs-black);
  --bs-fg-inherit: inherit;
  --bs-border-bg: var(--bs-bg-body);
  --bs-border-body: light-dark(var(--bs-gray-300), var(--bs-gray-800));
  --bs-border-muted: light-dark(var(--bs-gray-200), var(--bs-gray-800));
  --bs-border-subtle: light-dark(color-mix(in oklch, var(--bs-gray-100), var(--bs-gray-200)), color-mix(in oklch, var(--bs-gray-800), var(--bs-gray-900)));
  --bs-border-emphasized: light-dark(var(--bs-gray-400), var(--bs-gray-600));
  --bs-border-white: var(--bs-white);
  --bs-border-black: var(--bs-black);
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 1024px;
  --bs-breakpoint-xl: 1280px;
  --bs-breakpoint-2xl: 1536px;
  --bs-spacer-0: 0;
  --bs-spacer-1: 0.25rem;
  --bs-spacer-2: 0.375rem;
  --bs-spacer-3: 0.5rem;
  --bs-spacer-4: 0.75rem;
  --bs-spacer-5: 1rem;
  --bs-spacer-6: 1.25rem;
  --bs-spacer-7: 1.5rem;
  --bs-spacer-8: 1.75rem;
  --bs-spacer-9: 2rem;
  --bs-spacer-10: 2.25rem;
  --bs-spacer-11: 2.5rem;
  --bs-spacer-12: 3rem;
  --bs-radius-0: 0;
  --bs-radius-1: 0.125rem;
  --bs-radius-2: 0.1875rem;
  --bs-radius-3: 0.25rem;
  --bs-radius-4: 0.375rem;
  --bs-radius-5: 0.5rem;
  --bs-radius-6: 0.625rem;
  --bs-radius-7: 0.75rem;
  --bs-radius-8: 0.875rem;
  --bs-radius-9: 1rem;
  --bs-radius-pill: 50rem;
  --bs-box-shadow: 0 .125rem .25rem -.0625rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.04 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .375rem .75rem -.125rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.05 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .75rem 1.5rem -.25rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.06 * var(--bs-shadow-strength) * var(--bs-so, 1)));
  --bs-box-shadow-xs: 0 0.0625rem 0.125rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h/calc(0.04 * var(--bs-shadow-strength) * var(--bs-so, 1)));
  --bs-box-shadow-sm: 0 .0625rem .125rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.04 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .125rem .375rem -.0625rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.05 * var(--bs-shadow-strength) * var(--bs-so, 1)));
  --bs-box-shadow-lg: 0 .125rem .375rem -.0625rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.05 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .375rem 1rem -.1875rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.06 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .75rem 2rem -.375rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.07 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 1.5rem 3.5rem -.75rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.08 * var(--bs-shadow-strength) * var(--bs-so, 1)));
  --bs-box-shadow-xl: 0 .1875rem .5rem -.0625rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.05 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 .5rem 1.25rem -.1875rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.06 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 1rem 2.5rem -.375rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.07 * var(--bs-shadow-strength) * var(--bs-so, 1))), 0 2rem 5rem -.75rem oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h / calc(.09 * var(--bs-shadow-strength) * var(--bs-so, 1)));
  --bs-box-shadow-inset: inset 0 1px 2px light-dark(oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h/calc(8% * var(--bs-so, 1))), oklch(from var(--bs-sc, var(--bs-shadow-color)) l c h/calc(26% * var(--bs-so, 1))));
  --bs-z-n1: -1;
  --bs-z-0: 0;
  --bs-z-1: 1;
  --bs-z-2: 2;
  --bs-z-3: 3;
  --bs-z-menu: 1000;
  --bs-z-sticky: 1010;
  --bs-z-fixed: 1020;
  --bs-z-drawer: 1030;
  --bs-z-dialog: 1040;
  --bs-z-popover: 1050;
  --bs-z-tooltip: 1060;
  --bs-z-toast: 1070;
  color-scheme: light dark;
  scrollbar-gutter: stable;
}

:root,
  :host {
    --bs-shadow-strength: 2.4;
  }

:root,
:host {
  --bs-heading-margin-bottom: var(--bs-spacer-2);
  --bs-heading-line-height: 1.2;
  --bs-paragraph-margin-bottom: var(--bs-spacer);
  --bs-legend-margin-bottom: var(--bs-spacer-2);
  --bs-legend-font-size: 1.5rem;
  --bs-list-padding-x: var(--bs-spacer-7);
}

:root,
  :host {
    accent-color: var(--bs-primary-base);
  }" lang="css" />

    <h2 id="component-variables">
      组件变量
      <a class="anchor-link" href="#component-variables" aria-label="链接到组件变量章节"></a>
    </h2>

    <p>Bootstrap 将自定义属性用作各种组件的局部变量。这样我们减少了编译后的 CSS，确保样式不会在嵌套表格等地方被继承，并允许在 Sass 编译后对 Bootstrap 组件进行一些基本的重设样式和扩展。</p>

    <p>几乎每个组件都暴露了自己的一组 CSS 变量，作用域限定在组件的基础类上。例如，alert 组件读取一组 <code>--bs-alert-*</code> 变量，你可以在自己的 CSS 中覆盖它们——无需编译 Sass：
    </p>

    <CodeWrapper code=".alert {
  --bs-alert-padding-x: 1.5rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-border-radius: var(--bs-radius-5);
}" lang="css" />

    <p>请查看我们的表格文档，<a href="/docs/content/tables#how-do-the-variants-and-accented-tables-work">了解我们如何使用 CSS 变量</a>。我们的<a
        href="/docs/components/navbar#css">导航栏也使用 CSS 变量</a>，并且我们在整个网格系统中使用 CSS 变量——主要用于间距和<a
        href="/docs/layout/css-grid">可选的 CSS 网格</a>。</p>

    <p>只要可能，我们会在基础组件层级（例如 navbar 及其子组件用 <code>.navbar</code>）分配 CSS 变量。这减少了“在哪里、如何定制”的猜测，也方便我们的团队在未来更新中轻松修改。</p>

    <h2 id="prefix">
      前缀
      <a class="anchor-link" href="#prefix" aria-label="链接到前缀章节"></a>
    </h2>

    <p>大多数 CSS 变量使用前缀，以避免与你自己的代码库冲突。这个前缀是在每个 CSS 变量必需的 <code>--</code> 之外额外添加的。</p>

    <p>在我们的构建过程中，<code>bs-</code> 前缀通过 <a href="https://postcss.org/">PostCSS</a> 的
      <code>postcss-prefix-custom-properties</code> 插件自动添加。这意味着你在源 Sass 中编写不带前缀的自定义属性（例如
      <code>--border-radius</code>），它们在编译后的 CSS 中会变成带前缀的形式（例如 <code>--bs-border-radius</code>）。</p>

    <p>如果你要构建自己自定义版本的 Bootstrap CSS 并想更改前缀，请更新 PostCSS 配置中的 <code>prefix</code> 选项：</p>

    <CodeWrapper code="// postcss.config.js
import postcssPrefixCustomProperties from 'postcss-prefix-custom-properties'

export default {
  plugins: [
    postcssPrefixCustomProperties({ prefix: 'custom-' })
  ]
}" lang="javascript" />

    <h2 id="examples">
      示例
      <a class="anchor-link" href="#examples" aria-label="链接到示例章节"></a>
    </h2>

    <p>CSS 变量提供了与 Sass 变量相似的灵活性，但无需在提供给浏览器之前进行编译。例如，下面我们用 CSS 变量重置页面的字体和链接样式。</p>

    <CodeWrapper code="body {
  font: 1rem/1.5 var(--bs-body-font-family);
}
a {
  color: var(--bs-blue);
}" lang="css" />

    <h2 id="focus-variables">
      焦点变量
      <a class="anchor-link" href="#focus-variables" aria-label="链接到焦点变量章节"></a>
    </h2>

    <p>Bootstrap 通过 Sass 和 CSS 变量的组合提供自定义的 <code>:focus</code> 样式，可选择性地添加到特定组件和元素上。我们尚未全局覆盖所有 <code>:focus</code> 样式。
    </p>

    <p>在我们的 Sass 中，我们设置了可在编译前自定义的默认值。</p>

    <CodeWrapper code="body {
  font: 1rem/1.5 var(--bs-body-font-family);
}
a {
  color: var(--bs-blue);
}" lang="scss" label="scss/_config.scss" />

    <p>然后这些变量被重新赋值为 <code>:root</code> 级别的 CSS 变量，可以实时自定义，包括 <code>x</code> 和 <code>y</code> 偏移选项（默认回退值为
      <code>0</code>）。</p>

    <CodeWrapper code="--focus-ring-width: 3px,
--focus-ring-offset: 1px,
--focus-ring-color: var(--primary-focus-ring),
--focus-ring: var(--focus-ring-width) solid var(--focus-ring-color)," lang="scss" label="scss/_root.scss" />

    <h2 id="grid-breakpoints">
      网格断点
      <a class="anchor-link" href="#grid-breakpoints" aria-label="链接到网格断点章节"></a>
    </h2>

    <p>虽然我们将网格断点作为 CSS 变量包含进来（<code>xs</code> 除外），但请注意 <strong>CSS 变量在媒体查询中不起作用</strong>。这是 CSS 规范对变量的设计使然，但未来几年随着对
      <code>env()</code> 变量的支持可能会改变。查看<a href="https://stackoverflow.com/a/47212942">这个 Stack Overflow
        回答</a>获取一些有用的链接。在此期间，你可以在其他 CSS 场景以及 JavaScript 中使用这些变量。</p>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
      <li><a href="#css-variables">CSS 变量</a></li>
      <li><a href="#root-variables">根变量</a></li>
      <li><a href="#component-variables">组件变量</a></li>
      <li><a href="#prefix">前缀</a></li>
      <li><a href="#examples">示例</a></li>
      <li><a href="#focus-variables">焦点变量</a></li>
      <li><a href="#grid-breakpoints">网格断点</a></li>
    </ul>
  </nav>
</template>