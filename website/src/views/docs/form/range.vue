<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-range">
      <a href="#range-overview">概述</a>
      <a href="#range-disabled">禁用</a>
      <a href="#range-minmax">最小和最大</a>
      <a href="#range-steps">步长</a>
      <a href="#range-output">输出值</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-range" class="docs-content">
    <h1>Range 滑块</h1>
    <p class="fs-4 fw-light">
      使用我们的自定义范围输入，以实现一致的跨浏览器样式和内置自定义功能。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/range/" target="_blank">Bootstrap Form Range</a>
    </p>

    <h2 id="range-overview">
      概述<a class="anchor-link" aria-label="Link to this section: 概述" href="#range-overview"> </a>
    </h2>
    <p>
      使用 <code>.form-range</code> 来创建自定义的
      <code>&lt;input type="range"&gt;</code>
      控件。轨道（背景）和滑块（值）在各个浏览器中的样式都保持一致。由于只有 Firefox
      支持从滑块的左侧或右侧“填充”轨道以直观地表示进度，因此我们目前不支持这种功能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="range1" class="form-label">Example range</label>
        <input type="range" class="form-range" id="range1" />
      </div>
      <code-highlight type="html" :code="overviewCode" label="html" />
    </div>

    <h2 id="range-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#range-disabled"> </a>
    </h2>
    <p>
      在输入框上添加
      <code>disabled</code> 布尔属性，使其外观变灰，移除鼠标事件，并阻止聚焦。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="disabledRange" class="form-label">Disabled range</label>
        <input type="range" class="form-range" id="disabledRange" disabled />
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>

    <h2 id="range-minmax">
      最小和最大<a class="anchor-link" aria-label="Link to this section: 最小和最大" href="#range-minmax"> </a>
    </h2>
    <p>
      范围输入具有隐式的 <code>min</code> 和 <code>max</code> 值，分别为 <code>0</code> 和 <code>100</code>。您可以使用
      <code>min</code> 和 <code>max</code> 属性为这些值指定新的值。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="range2" class="form-label">Example range</label>
        <input type="range" class="form-range" min="0" max="100" id="range2" />
      </div>
      <code-highlight type="html" :code="minmaxCode" label="html" />
    </div>

    <h2 id="range-steps">
      步长<a class="anchor-link" aria-label="Link to this section: 步长" href="#range-steps"> </a>
    </h2>
    <p>
      默认情况下，范围输入会“捕捉”到整数值。若要更改此设置，可以指定一个
      <code>step</code> 值。 在下面的示例中，我们通过使用 <code>step="0.5"</code> 将步数加倍。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="range3" class="form-label">Example range</label>
        <input type="range" class="form-range" min="0" max="5" step="0.5" id="range3" />
      </div>
      <code-highlight type="html" :code="stepsCode" label="html" />
    </div>

    <h2 id="range-output">
      输出值<a class="anchor-link" aria-label="Link to this section: 输出值" href="#range-output"> </a>
    </h2>
    <p>Range 的值可以通过 <code>v-model</code> 来获取和展示。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="range4" class="form-label">Example range</label>
        <input type="range" class="form-range" min="0" max="100" id="range4" v-model="outVal" />
        <output for="range4" class="fw-bold fs-5" id="rangeValue" aria-hidden="true">{{ outVal }}</output>
      </div>
      <code-highlight type="vue" :code="outputCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const outVal = ref(0);

const overviewCode = `
<label for="range1" class="form-label">Example range</label>
<input type="range" class="form-range" id="range1">`;

const disabledCode = `
<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>`;

const minmaxCode = `
<label for="range2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" id="range2">`;

const stepsCode = `
<label for="range3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="range3">`;

const outputCode = `
<templete>
<label for="range4" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="100" id="range4" v-model="outVal">
<output for="range4" id="rangeValue" aria-hidden="true">{{ outVal }}</output>
</template>

<script setup>
import { ref } from 'vue'
const outVal = ref(0);
<\/script>`;
</script>
