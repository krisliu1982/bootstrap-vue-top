<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-check">
      <a href="#check-approach">处理方式</a>
      <a href="#check-checks">复选框</a>
      <a href="#check-radios">单选框</a>
      <a href="#check-disabled">禁用</a>
      <a href="#check-switches">开关</a>
      <a href="#check-inline">内联</a>
      <a href="#check-reverse">反向</a>
      <a href="#check-nolabels">无标签</a>
      <a href="#check-checkbox-buttons">复选按钮</a>
      <a href="#check-radio-buttons">单选按钮</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-check" class="docs-content">
    <h1>Checks and radios 复单选</h1>
    <p class="fs-4 fw-light">
      使用我们完全重写的 checks 组件，可以创建跨浏览器和跨设备一致性的复选框和单选按钮。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/" target="_blank"
        >Bootstrap Form Checks & radios</a
      >
    </p>

    <h2 id="check-approach">
      处理方式<a class="anchor-link" aria-label="Link to this section: 处理方式" href="#check-approach"> </a>
    </h2>
    <p>
      借助
      <code>.form-check</code>，浏览器默认的复选框和单选按钮得以替换。这是一系列针对这两种输入类型的类，可改善其 HTML
      元素的布局和行为，提供更大的自定义空间和跨浏览器一致性。复选框用于从列表中选择一个或多个选项，而单选按钮则用于从多个选项中选择一个。
    </p>
    <p>
      从结构上来说，我们的 <code>&lt;input&gt;</code> 和 <code>&lt;label&gt;</code> 是同级元素，而不是
      <code>&lt;input&gt;</code> 在 <code>&lt;label&gt;</code> 内部。这种方式略显冗长，因为必须指定 <code>id</code> 和
      <code>for</code> 属性来关联 <code>&lt;input&gt;</code> 和 <code>&lt;label&gt;</code>。我们为所有的
      <code>&lt;input&gt;</code> 状态（如 <code>:checked</code> 或
      <code>:disabled</code>）使用同级选择器（<code>~</code>），当与
      <code>.form-check-label</code> 类结合使用时，我们可以根据
      <code>&lt;input&gt;</code> 的状态轻松地为每个项目设置文本样式。
    </p>
    <p>我们的复选框使用自定义的 Bootstrap 图标来指示选中或未确定状态。</p>

    <h2 id="check-checks">
      复选框<a class="anchor-link" aria-label="Link to this section: 复选框" href="#check-checks"> </a>
    </h2>
    <p>
      当通过 JavaScript 手动设置复选框时，可以使用
      <code>:indeterminate</code> 伪类（没有可用的 HTML 属性来指定它）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
          <label class="form-check-label" for="checkDefault"> Default checkbox </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked />
          <label class="form-check-label" for="checkChecked"> Checked checkbox </label>
        </div>
      </div>
      <code-highlight type="html" :code="checksCode" label="html" />
    </div>

    <h2 id="check-radios">
      单选框<a class="anchor-link" aria-label="Link to this section: 单选框" href="#check-radios"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
          <label class="form-check-label" for="radioDefault1"> Default radio </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
          <label class="form-check-label" for="radioDefault2"> Default checked radio </label>
        </div>
      </div>
      <code-highlight type="html" :code="radiosCode" label="html" />
    </div>

    <h2 id="check-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#check-disabled"> </a>
    </h2>
    <p>
      添加 <code>disabled</code> 属性后，相关的
      <code>&lt;label&gt;</code>
      会自动应用样式，以更浅的颜色显示，从而帮助指示输入的状态。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled />
          <label class="form-check-label" for="checkDisabled"> Disabled checkbox </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled />
          <label class="form-check-label" for="radioDisabled"> Disabled radio </label>
        </div>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>

    <h2 id="check-switches">
      开关<a class="anchor-link" aria-label="Link to this section: 开关" href="#check-switches"> </a>
    </h2>
    <p>
      开关具有自定义复选框的标记，但使用
      <code>.form-switch</code> 类来呈现切换开关。考虑使用
      <code>role="switch"</code>
      来更准确地向支持此角色的辅助技术传达控件的性质。在较旧的辅助技术中，它将作为常规复选框被简单地宣布为回退选项。开关还支持
      <code>disabled</code> 属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
          <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
          <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled />
          <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckCheckedDisabled"
            checked
            disabled
          />
          <label class="form-check-label" for="switchCheckCheckedDisabled"
            >Disabled checked switch checkbox input</label
          >
        </div>
      </div>
      <code-highlight type="html" :code="switchesCode" label="html" />
    </div>
    <h3>原生开关</h3>
    <p>
      通过在输入框中添加 <code>switch</code> 属性，为移动版 Safari（iOS
      17.4+）逐步增强您的开关功能，以便在切换开关时启用触觉反馈，就像原生 iOS 开关一样。在 Bootstrap
      中使用此属性不会改变样式，因为我们所有的开关都使用了自定义样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
          <label class="form-check-label" for="checkNativeSwitch"> Native switch haptics </label>
        </div>
      </div>
      <code-highlight type="html" :code="switches1Code" label="html" />
    </div>
    <p>
      请务必阅读
      <a href="https://webkit.org/blog/15054/an-html-switch-control/" target="_blank"
        >WebKit 博客上关于开关属性的更多信息</a
      >。macOS 和 iOS 上的 Safari 17.4+ 版本在 HTML
      中都有原生风格的开关，而其他浏览器则只能退而求其次，使用标准的复选框外观。在较新版本的 Safari 中，将该属性应用于非
      Bootstrap 复选框将呈现原生开关效果。
    </p>

    <h2 id="check-inline">
      内联<a class="anchor-link" aria-label="Link to this section: 内联" href="#check-inline"> </a>
    </h2>
    <p>
      通过向任何 <code>.form-check</code> 添加
      <code>.form-check-inline</code>，可以将同一水平行上的复选框或单选框组合在一起。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <section class="mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
            <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
          </div>
        </section>

        <section>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">1</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">2</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              disabled
            />
            <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
          </div>
        </section>
      </div>
      <code-highlight type="html" :code="inlineCode" label="html" />
    </div>

    <h2 id="check-reverse">
      反向<a class="anchor-link" aria-label="Link to this section: 反向" href="#check-reverse"> </a>
    </h2>
    <p>
      使用
      <code>.form-check-reverse</code>
      修饰符类，将你的复选框、单选按钮和开关置于对侧。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-check form-check-reverse">
          <input class="form-check-input" type="checkbox" value="" id="reverseCheck1" />
          <label class="form-check-label" for="reverseCheck1"> Reverse checkbox </label>
        </div>
        <div class="form-check form-check-reverse">
          <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled />
          <label class="form-check-label" for="reverseCheck2"> Disabled reverse checkbox </label>
        </div>

        <div class="form-check form-switch form-check-reverse">
          <input class="form-check-input" type="checkbox" id="switchCheckReverse" />
          <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
        </div>
      </div>
      <code-highlight type="html" :code="reverseCode" label="html" />
    </div>

    <h2 id="check-nolabels">
      无标签<a class="anchor-link" aria-label="Link to this section: 无标签" href="#check-nolabels"> </a>
    </h2>
    <p>
      对于没有标签文本的复选框和单选按钮，可以省略其包裹的
      <code>.form-check</code>。但请记住，仍需为辅助技术提供某种形式的可访问名称（例如，使用
      <code>aria-label</code>）。有关详细信息，请参阅
      <a href="https://getbootstrap.com/docs/5.3/forms/overview/#accessibility" target="_blank">表单概述中的可访问性</a>
      部分。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div>
          <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
        </div>

        <div>
          <input
            class="form-check-input"
            type="radio"
            name="radioNoLabel"
            id="radioNoLabel1"
            value=""
            aria-label="..."
          />
        </div>
      </div>
      <code-highlight type="html" :code="nolabelsCode" label="html" />
    </div>

    <h2 id="check-checkbox-buttons">
      复选框按钮<a
        class="anchor-link"
        aria-label="Link to this section: Checkbox buttons"
        href="#check-checkbox-buttons"
      >
      </a>
    </h2>
    <p>
      通过在 <code>&lt;label&gt;</code> 元素上使用 <code>.btn</code> 样式而非
      <code>.form-check-label</code>
      样式，可以创建类似按钮的复选框按钮。如果需要，这些切换按钮还可以进一步分组到
      <a href="https://getbootstrap.com/docs/5.3/components/button-group" target="_blank">按钮组</a>
      中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <input type="checkbox" class="btn-check" value="one" id="cb-1" v-model="checkboxVal" />
          <label class="btn btn-outline-primary" for="cb-1">Check1</label>

          <input type="checkbox" class="btn-check" value="two" id="cb-2" v-model="checkboxVal" />
          <label class="btn btn-outline-primary" for="cb-2">Check2</label>

          <input type="checkbox" class="btn-check" value="three" id="cb-3" v-model="checkboxVal" disabled />
          <label class="btn btn-outline-primary" for="cb-3">Check3</label>
        </div>
      </div>
      <code-highlight type="vue" :code="checkButtonCode" label="vue" />
    </div>

    <h2 id="check-radio-buttons">
      单选按钮<a class="anchor-link" aria-label="Link to this section: 单选按钮" href="#check-radio-buttons"> </a>
    </h2>
    <p>
      在 <code>&lt;label&gt;</code> 元素上使用 <code>.btn</code> 样式而非
      <code>.form-check-label</code>
      样式，以创建类似按钮的单选按钮。如果需要，这些切换按钮还可以进一步分组到
      <a href="https://getbootstrap.com/docs/5.3/components/button-group" target="_blank">按钮组</a>
      中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3">
          <input type="radio" class="btn-check" value="one" id="rb-1" v-model="radioVal" />
          <label class="btn btn-outline-primary" for="rb-1">Radio1</label>

          <input type="radio" class="btn-check" value="two" id="rb-2" v-model="radioVal" />
          <label class="btn btn-outline-primary" for="rb-2">Radio2</label>

          <input type="radio" class="btn-check" value="three" id="rb-3" v-model="radioVal" disabled />
          <label class="btn btn-outline-secondary" for="rb-3">Radio3</label>
        </div>
      </div>
      <code-highlight type="vue" :code="radioButtonCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkboxVal = ref([]);
const radioVal = ref(null);

const checksCode = `
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
  <label class="form-check-label" for="checkDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked>
  <label class="form-check-label" for="checkChecked">
    Checked checkbox
  </label>
</div>`;

const radiosCode = `
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
  <label class="form-check-label" for="radioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
  <label class="form-check-label" for="radioDefault2">
    Default checked radio
  </label>
</div>`;

const disabledCode = `
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled>
  <label class="form-check-label" for="radioDisabled">
    Disabled radio
  </label>
</div>`;

const switchesCode = `
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
  <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
  <label class="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled>
  <label class="form-check-label" for="switchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="switchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>`;

const switches1Code = `
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch>
  <label class="form-check-label" for="checkNativeSwitch">
    Native switch haptics
  </label>
</div>`;

const inlineCode = `
<section class="mb-3">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>
</section>

<section>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
    </div>
</section>`;

const reverseCode = `
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
  <label class="form-check-label" for="reverseCheck1">
    Reverse checkbox
  </label>
</div>
<div class="form-check form-check-reverse">
  <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
  <label class="form-check-label" for="reverseCheck2">
    Disabled reverse checkbox
  </label>
</div>

<div class="form-check form-switch form-check-reverse">
  <input class="form-check-input" type="checkbox" id="switchCheckReverse">
  <label class="form-check-label" for="switchCheckReverse">Reverse switch checkbox input</label>
</div>`;

const nolabelsCode = `
<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>`;

const checkButtonCode = `
<templete>
    <div class="hstack gap-3">
        <input type="checkbox" class="btn-check" value="one" id="cb-1" v-model="checkboxVal">
        <label class="btn btn-outline-primary" for="cb-1">Check1</label>

        <input type="checkbox" class="btn-check" value="two" id="cb-2" v-model="checkboxVal">
        <label class="btn btn-outline-primary" for="cb-2">Check2</label>

        <input type="checkbox" class="btn-check" value="three" id="cb-3" v-model="checkboxVal" disabled>
        <label class="btn btn-outline-secondary" for="cb-3">Check3</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const checkboxVal = ref([]);
<\/script>`;

const radioButtonCode = `
<templete>
    <div class="hstack gap-3">
        <input type="radio" class="btn-check" value="one" id="rb-1" v-model="radioVal">
        <label class="btn btn-outline-primary" for="rb-1">Radio1</label>

        <input type="radio" class="btn-check" value="two" id="rb-2" v-model="radioVal">
        <label class="btn btn-outline-primary" for="rb-2">Radio2</label>

        <input type="radio" class="btn-check" value="three" id="rb-3" v-model="radioVal" disabled>
        <label class="btn btn-outline-secondary" for="rb-3">Radio3</label>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const radioVal = ref(null);
<\/script>`;
</script>
