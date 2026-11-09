<template>
  <article class="bd-content">
    <h1>范围滑块</h1>
    <p>使用我们自定义的范围输入框，获得一致的跨浏览器样式和内置的自定义能力。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2>
    <p>
      使用 <code>.form-range</code> 创建自定义的 <code>&lt;input type=&quot;range&quot;&gt;</code> 控件。轨道（背景）和滑块（数值）都经过样式处理，以便在各浏览器中外观一致。由于只有 Firefox 支持从滑块左侧或右侧“填充”轨道来直观表示进度，我们目前暂不支持该效果。
    </p>
    <Example
      code='<label for="range1" class="form-label">Example range</label>
<input type="range" class="form-range" id="range1">'
    />
    <h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2>
    <p>在输入框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观、移除指针事件并阻止获得焦点。</p>
    <Example
      code='<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>'
    />
    <h2 id="min-and-max">最小值与最大值<a class="anchor-link" href="#min-and-max" aria-label="最小值与最大值链接"></a></h2>
    <p>范围输入框对 <code>min</code> 和 <code>max</code> 有隐式值，分别为 <code>0</code> 和 <code>100</code>。你可以使用 <code>min</code> 和 <code>max</code> 属性为它们指定新值。</p>
    <Example
      code='<label for="range2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="range2">'
    />
    <h2 id="steps">步长<a class="anchor-link" href="#steps" aria-label="步长链接"></a></h2>
    <p>默认情况下，范围输入框会“吸附”到整数值。要改变这一点，你可以指定 <code>step</code> 值。在下面的示例中，我们通过 <code>step=&quot;0.5&quot;</code> 将步数翻倍。</p>
    <Example
      code='<label for="range3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="range3">'
    />
    <h2 id="output-value">输出值<a class="anchor-link" href="#output-value" aria-label="输出值链接"></a></h2>
    <p>可以使用 <code>output</code> 元素配合少量 JavaScript 来显示范围输入框的值。</p>
    <Example
      code='<label for="range4" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" value="50" id="range4">
<output for="range4" id="rangeValue" aria-hidden="true"></output>

<script>
  // This is an example script, please modify as needed
  const rangeInput = document.getElementById(&#39;range4&#39;);
  const rangeOutput = document.getElementById(&#39;rangeValue&#39;);

  // Set initial value
  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener(&#39;input&#39;, function() {
    rangeOutput.textContent = this.value;
  });


</script>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="form-range-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li><a href="#disabled">禁用状态</a></li>
      <li><a href="#min-and-max">最小值与最大值</a></li>
      <li><a href="#steps">步长</a></li>
      <li><a href="#output-value">输出值</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
