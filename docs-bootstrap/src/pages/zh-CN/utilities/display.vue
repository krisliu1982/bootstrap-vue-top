<template>
  <article class="bd-content">
    <h1>显示属性</h1>
    <p>使用我们的显示工具类，可以快速、响应式地切换组件及其他元素的显示值。支持一些较常见的取值，以及一些用于控制打印时显示的额外取值。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>
      使用我们响应式的显示工具类更改
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><code>display</code> 属性</a>的值。我们有意只支持 <code>display</code> 所有可能取值中的一个子集。可以根据需要组合类来实现各种效果。
    </p>
    <h2 id="notation">命名规则<a class="anchor-link" href="#notation" aria-label="命名规则链接"></a></h2>
    <p>
      适用于所有<a href="/layout/breakpoints">断点</a>（从 <code>xs</code> 到 <code>xxl</code>）的显示工具类名称中不包含断点缩写。这是因为这些类是从 <code>min-width: 0;</code> 开始向上生效的，因此不受媒体查询的约束。而其余的断点则确实包含断点缩写。
    </p>
    <p>因此，这些类使用以下格式命名：</p>
    <ul>
      <li><code>.d-{value}</code>（对应 <code>xs</code>）</li>
      <li><code>.d-{breakpoint}-{value}</code>（对应 <code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code> 和 <code>xxl</code>）。</li>
    </ul>
    <p>其中 <em>value</em> 为以下之一：</p>
    <ul>
      <li><code>none</code></li>
      <li><code>inline</code></li>
      <li><code>inline-block</code></li>
      <li><code>block</code></li>
      <li><code>grid</code></li>
      <li><code>inline-grid</code></li>
      <li><code>table</code></li>
      <li><code>table-cell</code></li>
      <li><code>table-row</code></li>
      <li><code>flex</code></li>
      <li><code>inline-flex</code></li>
    </ul>
    <p>可以通过修改 <code>$utilities</code> 中定义的 <code>display</code> 值并重新编译 SCSS 来更改显示值。</p>
    <p>媒体查询会影响处于给定断点<em>或更大</em>屏幕宽度的设备。例如，<code>.d-lg-none</code> 会在 <code>lg</code>、<code>xl</code> 和 <code>xxl</code> 屏幕上设置 <code>display: none;</code>。</p>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <Example
      code='<div class="d-inline p-2 text-bg-primary">d-inline</div>
<div class="d-inline p-2 text-bg-dark">d-inline</div>'
    /><Example
      code='<span class="d-block p-2 text-bg-primary">d-block</span>
<span class="d-block p-2 text-bg-dark">d-block</span>'
    />
    <h2 id="hiding-elements">隐藏元素<a class="anchor-link" href="#hiding-elements" aria-label="隐藏元素链接"></a></h2>
    <p>为了更快地进行移动端友好开发，可使用响应式显示类按设备显示和隐藏元素。避免为同一网站创建完全不同的版本，而应针对每种屏幕尺寸响应式地隐藏元素。</p>
    <p>要隐藏元素，只需使用 <code>.d-none</code> 类，或使用针对任意响应式屏幕变体的 <code>.d-{sm,md,lg,xl,xxl}-none</code> 类之一。</p>
    <p>要仅在给定的屏幕尺寸区间内显示元素，可以将一个 <code>.d-*-none</code> 类与一个 <code>.d-*-*</code> 类组合使用，例如 <code>.d-none .d-md-block .d-xl-none</code> 会在除中型和大型设备之外的所有屏幕尺寸上隐藏该元素。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>屏幕尺寸</th>
            <th>类</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>在所有尺寸隐藏</td>
            <td><code>.d-none</code></td>
          </tr>
          <tr>
            <td>仅在 xs 隐藏</td>
            <td><code>.d-none .d-sm-block</code></td>
          </tr>
          <tr>
            <td>仅在 sm 隐藏</td>
            <td><code>.d-sm-none .d-md-block</code></td>
          </tr>
          <tr>
            <td>仅在 md 隐藏</td>
            <td><code>.d-md-none .d-lg-block</code></td>
          </tr>
          <tr>
            <td>仅在 lg 隐藏</td>
            <td><code>.d-lg-none .d-xl-block</code></td>
          </tr>
          <tr>
            <td>仅在 xl 隐藏</td>
            <td><code>.d-xl-none .d-xxl-block</code></td>
          </tr>
          <tr>
            <td>仅在 xxl 隐藏</td>
            <td><code>.d-xxl-none</code></td>
          </tr>
          <tr>
            <td>在所有尺寸显示</td>
            <td><code>.d-block</code></td>
          </tr>
          <tr>
            <td>仅在 xs 显示</td>
            <td><code>.d-block .d-sm-none</code></td>
          </tr>
          <tr>
            <td>仅在 sm 显示</td>
            <td><code>.d-none .d-sm-block .d-md-none</code></td>
          </tr>
          <tr>
            <td>仅在 md 显示</td>
            <td><code>.d-none .d-md-block .d-lg-none</code></td>
          </tr>
          <tr>
            <td>仅在 lg 显示</td>
            <td><code>.d-none .d-lg-block .d-xl-none</code></td>
          </tr>
          <tr>
            <td>仅在 xl 显示</td>
            <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
          </tr>
          <tr>
            <td>仅在 xxl 显示</td>
            <td><code>.d-none .d-xxl-block</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Example
      code='<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>'
    />
    <h2 id="display-in-print">打印显示<a class="anchor-link" href="#display-in-print" aria-label="打印显示链接"></a></h2>
    <p>使用我们的打印显示工具类，在打印时更改元素的 <code>display</code> 值。支持与响应式 <code>.d-*</code> 工具类相同的 <code>display</code> 取值。</p>
    <ul>
      <li><code>.d-print-none</code></li>
      <li><code>.d-print-inline</code></li>
      <li><code>.d-print-inline-block</code></li>
      <li><code>.d-print-block</code></li>
      <li><code>.d-print-grid</code></li>
      <li><code>.d-print-inline-grid</code></li>
      <li><code>.d-print-table</code></li>
      <li><code>.d-print-table-row</code></li>
      <li><code>.d-print-table-cell</code></li>
      <li><code>.d-print-flex</code></li>
      <li><code>.d-print-inline-flex</code></li>
    </ul>
    <p>打印类和显示类可以组合使用。</p>
    <Example
      code='<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass 工具类 API<a class="anchor-link" href="#sass-utilities-api" aria-label="Sass 工具类 API链接"></a></h3>
    <p>
      显示工具类在我们 <code>scss/_utilities.scss</code> 中的工具类 API 里声明。
      <a href="/utilities/api#using-the-api">了解如何使用工具类 API。</a>
    </p>
    <ScssDocs name="utils-display" file="scss/_utilities.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#how-it-works">工作原理</a></li>
      <li><a href="#notation">命名规则</a></li>
      <li><a href="#examples">示例</a></li>
      <li><a href="#hiding-elements">隐藏元素</a></li>
      <li><a href="#display-in-print">打印显示</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
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
