<template>
<article class="docs-content prose">
    <h1>过渡<a class="anchor-link" href="#top" aria-label="链接到 过渡"></a></h1>
<p>了解 Bootstrap 组件如何添加动画、哪些状态类驱动它们，以及如何重新调整或移除动态效果。</p>

<h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="链接到 工作原理"></a></h2>

<p>在 Bootstrap 中，所有组件的过渡都由 CSS 掌控。JavaScript 只负责切换一个状态类，然后等待过渡结束，再触发事件或移除元素。</p>

<p>这意味着你只需用 CSS 就能重新设置动态效果，无需重新实现组件即可改变其动画方式。</p>

<p>每个带动画的组件都遵循相同的三条规则：</p>

<ol>
    <li>基础选择器持有隐藏状态，以及 <code>transition</code> 声明。</li>
    <li>一个状态类持有可见状态。</li>
    <li><code>@starting-style</code> 提供进入起始状态，因为元素在状态类生效之前尚未渲染。</li>
</ol>

<p>轻提示（toast）是参考实现。</p>

<pre><code class="language-scss">// scss/_toasts.scss（节选）
.toast {
  // …
  transition-property: var(--bs-toast-transition-property);
  transition-duration: var(--bs-toast-transition-duration);
  transition-timing-function: var(--bs-toast-transition-timing);
  display: none;
  opacity: 0;

  &.show {
    display: block;
    opacity: 1;

    @starting-style {
      opacity: 0;
    }
  }
}</code></pre>

<p><code>display</code> 配合 <code>allow-discrete</code> 进行过渡，使轻提示在淡出结束前保持布局。没有它，元素会在第一帧就消失，你就看不到退出动画了。</p>

<h2 id="state-classes">状态类<a class="anchor-link" href="#state-classes" aria-label="链接到 状态类"></a></h2>

<p>JavaScript 会添加和移除一组小型、固定的类。为这些类设置样式，你的自定义就会随组件生效。</p>

<table class="table">
    <thead>
        <tr><th>类</th><th>含义</th></tr>
    </thead>
    <tbody>
        <tr><td><code>.show</code></td><td>组件已显示。其缺失即为隐藏状态。由 collapse、menu、popover、toast 和 tooltip 使用。Collapse 不切换其他任何类。</td></tr>
        <tr><td><code>.active</code></td><td>标签页面板的显示状态，同时也标记选中的面板。</td></tr>
        <tr><td><code>.hiding</code></td><td>仅在退出过渡播放期间存在。Bootstrap 在过渡结束后将其移除。由 alert、dialog 和 drawer 使用。</td></tr>
        <tr><td><code>.{component}-instant</code></td><td>让单个元素跳过其过渡，例如 <code>.toast-instant</code> 或 <code>.dialog-instant</code>。</td></tr>
        <tr><td><code>.{component}-static</code></td><td>一个短暂的弹跳，表示模态框拒绝关闭，例如 <code>.dialog-static</code>。</td></tr>
    </tbody>
</table>

<p><code>.hiding</code> 是为那些必须在自身退出后仍存活的组件而存在的。警告框会从 DOM 中移除，对话框会离开顶层，因此两者都需要一个标记离开状态的类。仅隐藏的组件则可以改为移除 <code>.show</code>。</p>

<h2 id="customize-the-motion">自定义动态效果<a class="anchor-link" href="#customize-the-motion" aria-label="链接到 自定义动态效果"></a></h2>

<h3 id="token-trio">令牌三元组<a class="anchor-link" href="#token-trio" aria-label="链接到 令牌三元组"></a></h3>

<p>每个带动画的组件都暴露相同的三个自定义属性。</p>

<table class="table">
    <thead>
        <tr><th>自定义属性</th><th>用途</th></tr>
    </thead>
    <tbody>
        <tr><td><code>--bs-{component}-transition-property</code></td><td>参与动画的属性。</td></tr>
        <tr><td><code>--bs-{component}-transition-duration</code></td><td>动画持续时间。设为 <code>0s</code> 可移除动态效果。</td></tr>
        <tr><td><code>--bs-{component}-transition-timing</code></td><td>缓动曲线。</td></tr>
    </tbody>
</table>

<p>由于属性列表是一个令牌，你可以在不重写整个声明的情况下为新的内容添加动画。向 toast 列表添加 <code>transform</code>，toast 就会在淡入的同时滑动。按下按钮可重新播放。</p>

<div class="bd-example">
    <div class="toast-container position-static">
        <div class="toast bd-toast-slide" id="slideToast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                This toast slides up as it fades in.
            </div>
        </div>
    </div>
    <button type="button" class="btn-solid theme-primary mt-3" id="slideToastBtn">Replay</button>
</div>

<pre><code class="language-css">.toast-slide {
  --bs-toast-transition-property: opacity, transform, display;
  --bs-toast-transition-duration: .3s;
  --bs-toast-transition-timing: ease-out;

  transform: translateY(1rem);
}

.toast-slide.show {
  transform: none;
}</code></pre>

<div class="callout">
    <p>将离散属性保留在列表中。toast 和 menu 需要 <code>display</code>，dialog 和 drawer 需要 <code>visibility</code>。正是该属性使元素在退出动画结束前保持渲染。</p>
</div>

<h3 id="size-animations">尺寸动画<a class="anchor-link" href="#size-animations" aria-label="链接到 尺寸动画"></a></h3>

<p>Collapse 和 accordion 动画的是尺寸而非不透明度，因此它们添加了 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/interpolate-size"><code>interpolate-size</code></a>，让 <code>0</code> 能插值到打开状态的 <code>auto</code>。无需 JavaScript 测量内容。不支持 <code>interpolate-size</code> 的浏览器会立即打开和关闭元素，这也是 collapse 始终裁剪动画轴的原因。</p>

<p>collapse 三元组将组件名称放在最后，因为这两个组件共享它。</p>

<pre><code class="language-scss">// scss/_transitions.scss（节选）
:root {
  --bs-transition-collapse-property: height, width;
  --bs-transition-collapse-duration: .35s;
  --bs-transition-collapse-timing: ease;
}</code></pre>

<h3 id="shared-easing">共享缓动<a class="anchor-link" href="#shared-easing" aria-label="链接到 共享缓动"></a></h3>

<p>Dialog、drawer 和 menu 从 <code>:root</code> 读取一条缓动曲线，因此一次覆盖即可重新设置全部三个覆盖层的样式。</p>

<pre><code class="language-scss">// scss/_root.scss（节选）
:root {
  --bs-transition-timing-overlay: cubic-bezier(0.32, 0.72, 0, 1);
}</code></pre>

<h2 id="remove-the-motion">移除动态效果<a class="anchor-link" href="#remove-the-motion" aria-label="链接到 移除动态效果"></a></h2>

<p>你有四种选项，从最窄到最广：</p>

<ol>
    <li>向单个元素添加组件的 <code>-instant</code> 类，例如 <code>.toast-instant</code>。</li>
    <li>向单个元素添加 <a href="[[docsref:/utilities/motion]]"><code>.transition-none</code> 工具类</a>。</li>
    <li>为某个组件或子树将 <code>-duration</code> 令牌设置为 <code>0s</code>。</li>
    <li>将 <code>$enable-transitions</code> Sass 选项设置为 <code>false</code>，在构建时移除所有过渡。</li>
</ol>

<p>Bootstrap 将其过渡包裹在 <code>prefers-reduced-motion: no-preference</code> 中，因此要求减少动态效果的用户已经获得即时的状态变化。更多信息请参阅<a href="[[docsref:/getting-started/accessibility#reduced-motion]]">减少动态效果</a>。</p>

<p>JavaScript 在等待之前会读取计算后的过渡持续时间。当持续时间为 <code>0s</code> 时，无论是什么移除了动态效果，事件和 Promise 都会立即 resolve。</p>

<h2 id="events-and-promises">事件与 Promise<a class="anchor-link" href="#events-and-promises" aria-label="链接到 事件与 Promise"></a></h2>

<p><code>show()</code> 和 <code>hide()</code> 返回在过渡结束后 resolve 的 Promise。匹配的 <code>shown</code> 和 <code>hidden</code> 事件会在同一时间触发。</p>

<pre><code class="language-js">const toast = new bootstrap.Toast('#myToast')

await toast.show()
// 淡入已完成。</code></pre>

<p>没有过渡的元素仍会 resolve，只是发生在下一个 tick。</p>
  </article>

  <nav class="docs-toc" id="table-of-contents" aria-label="目录">
    <ul>
        <li><a href="#how-it-works">工作原理</a></li>
        <li><a href="#state-classes">状态类</a></li>
        <li><a href="#customize-the-motion">自定义动态效果</a>
            <ul>
                <li><a href="#token-trio">令牌三元组</a></li>
                <li><a href="#size-animations">尺寸动画</a></li>
                <li><a href="#shared-easing">共享缓动</a></li>
            </ul>
        </li>
        <li><a href="#remove-the-motion">移除动态效果</a></li>
        <li><a href="#events-and-promises">事件与 Promise</a></li>
    </ul>
</nav>
  </template>