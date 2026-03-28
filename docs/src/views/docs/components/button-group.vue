<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-button">
      <a href="#button-group-example">示例</a>
      <a href="#button-group-check">复选框和单选按钮组</a>
      <a href="#button-group-toolbar">按钮工具栏</a>
      <a href="#button-group-size">尺寸</a>
      <a href="#button-group-nesting">嵌套</a>
      <a href="#button-group-vertical">竖向变化</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-button" class="docs-content">
    <h1>Button group 按钮组</h1>
    <p class="fs-4 fw-light">
      将一系列按钮排列在一条直线上，或将其堆叠成垂直列。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/button-group/" target="_blank">Boostrap Button group</a>
    </p>

    <h2 id="button-group-example">示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#button-group-example"> </a></h2>
    <p>使用 <code>.btn</code> 将一系列按钮包裹在 <code>.btn-group</code> 中。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
        </div>
        <hr />
        <div class="btn-group">
          <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
          <a href="#" class="btn btn-primary">Link</a>
          <a href="#" class="btn btn-primary">Link</a>
        </div>
        <hr />
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger">Left</button>
          <button type="button" class="btn btn-warning">Middle</button>
          <button type="button" class="btn btn-success">Right</button>
        </div>
        <hr />
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">Left</button>
          <button type="button" class="btn btn-outline-primary">Middle</button>
          <button type="button" class="btn btn-outline-primary">Right</button>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>
    <p class="text-bg-info">
      按钮组需要适当的
      <code>role</code>
      属性和明确的标签，以确保屏幕阅读器等辅助技术能够识别出按钮是分组的，并对其进行播报。对于按钮组，使用
      <code>role="group"</code>；对于按钮工具栏，使用 <code>role="toolbar"</code>。然后使用 <code>aria-label</code> 或
      <code>aria-labelledby</code> 来为它们添加标签。
    </p>

    <h2 id="button-group-check">
      复选框和单选按钮组<a class="anchor-link" aria-label="Link to this section: 复选框和单选按钮组" href="#button-group-check"> </a>
    </h2>
    <p>
      将类似按钮的复选框和单选框
      <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios" target="_blank">切换按钮</a>
      组合成一个外观无缝的按钮组。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" value="btncheck1" v-model="checkboxVal" />
          <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

          <input type="checkbox" class="btn-check" id="btncheck2" value="btncheck2" v-model="checkboxVal" />
          <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

          <input type="checkbox" class="btn-check" id="btncheck3" value="btncheck3" v-model="checkboxVal" />
          <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
        </div>
        <hr />
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" id="btnradio1" value="btnradio1" v-model="radioVal" />
          <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

          <input type="radio" class="btn-check" id="btnradio2" value="btnradio2" v-model="radioVal" />
          <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

          <input type="radio" class="btn-check" id="btnradio3" value="btnradio3" v-model="radioVal" />
          <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
        </div>
      </div>
      <code-highlight type="vue" :code="checkCode" label="vue" />
    </div>

    <h2 id="button-group-toolbar">按钮工具栏<a class="anchor-link" aria-label="Link to this section: 按钮工具栏" href="#button-group-toolbar"> </a></h2>
    <p>将多组按钮组合成按钮工具栏，以构建更复杂的组件。根据需要使用实用类来分隔组、按钮等。</p>
    <p>在你的工具栏中，可以随意将输入组与按钮组混合使用。与上面的示例类似，你可能需要一些工具来合理布局。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary">1</button>
            <button type="button" class="btn btn-primary">2</button>
            <button type="button" class="btn btn-primary">3</button>
            <button type="button" class="btn btn-primary">4</button>
          </div>
          <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-info">8</button>
          </div>
        </div>

        <hr />

        <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-secondary">1</button>
            <button type="button" class="btn btn-outline-secondary">2</button>
            <button type="button" class="btn btn-outline-secondary">3</button>
            <button type="button" class="btn btn-outline-secondary">4</button>
          </div>
          <div class="input-group">
            <div class="input-group-text" id="btnGroupAddon">@</div>
            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
          </div>
        </div>

        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-secondary">1</button>
            <button type="button" class="btn btn-outline-secondary">2</button>
            <button type="button" class="btn btn-outline-secondary">3</button>
            <button type="button" class="btn btn-outline-secondary">4</button>
          </div>
          <div class="input-group">
            <div class="input-group-text" id="btnGroupAddon2">@</div>
            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="toolbarCode" label="html" />
    </div>

    <h2 id="button-group-size">尺寸<a class="anchor-link" aria-label="Link to this section: 尺寸" href="#button-group-size"> </a></h2>
    <p>
      无需为组中的每个按钮都应用按钮大小类，只需在每个
      <code>.btn-group</code> 中添加 <code>.btn-group-*</code>，包括嵌套多个组时也要为每个组添加。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
          <button type="button" class="btn btn-outline-primary">Left</button>
          <button type="button" class="btn btn-outline-primary">Middle</button>
          <button type="button" class="btn btn-outline-primary">Right</button>
        </div>
        <hr />
        <div class="btn-group" role="group" aria-label="Default button group">
          <button type="button" class="btn btn-outline-primary">Left</button>
          <button type="button" class="btn btn-outline-primary">Middle</button>
          <button type="button" class="btn btn-outline-primary">Right</button>
        </div>
        <hr />
        <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
          <button type="button" class="btn btn-outline-primary">Left</button>
          <button type="button" class="btn btn-outline-primary">Middle</button>
          <button type="button" class="btn btn-outline-primary">Right</button>
        </div>
      </div>
      <code-highlight type="html" :code="sizeCode" label="html" />
    </div>

    <h2 id="button-group-nesting">嵌套<a class="anchor-link" aria-label="Link to this section: 嵌套" href="#button-group-nesting"> </a></h2>
    <p>
      当您希望在一系列按钮中混合使用下拉菜单时，请将一个
      <code>.btn-group</code> 放置在另一个 <code>.btn-group</code> 中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button type="button" class="btn btn-primary">1</button>
          <button type="button" class="btn btn-primary">2</button>

          <div class="btn-group" role="group">
            <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="nestingCode" label="html" />
    </div>

    <h2 id="button-group-vertical">竖向变化<a class="anchor-link" aria-label="Link to this section: 竖向变化" href="#button-group-vertical"> </a></h2>
    <p>使一组按钮垂直堆叠显示，而非水平排列。<strong>此处不支持拆分按钮下拉菜单。</strong></p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
          <button type="button" class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
        </div>

        <hr />

        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
          <div class="btn-group" role="group">
            <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
          <button type="button" class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
          <div class="btn-group dropstart" role="group">
            <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
          <div class="btn-group dropend" role="group">
            <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
          <div class="btn-group dropup" role="group">
            <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
              <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
          <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" checked />
          <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
          <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" />
          <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
          <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" />
          <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
        </div>
      </div>
      <code-highlight type="html" :code="verticalCode" label="html" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checkboxVal = ref([])
const radioVal = ref('btnradio1')
const exampleCode = `<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<hr/>
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>
<hr/>
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
<hr/>
<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>`

const checkCode = `<template>
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" value="btncheck1" v-model="checkboxVal">
        <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

        <input type="checkbox" class="btn-check" id="btncheck2" value="btncheck2" v-model="checkboxVal">
        <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

        <input type="checkbox" class="btn-check" id="btncheck3" value="btncheck3" v-model="checkboxVal">
        <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
    </div>
    <hr/>
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" id="btnradio1" value="btnradio1" v-model="radioVal">
        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

        <input type="radio" class="btn-check" id="btnradio2" value="btnradio2" v-model="radioVal">
        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

        <input type="radio" class="btn-check" id="btnradio3" value="btnradio3" v-model="radioVal">
        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const checkboxVal = ref([]);
const radioVal = ref('btnradio1')
<\/script>`

const toolbarCode = `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-info">8</button>
  </div>
</div>

<hr />

<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>
</div>

<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-outline-secondary">1</button>
    <button type="button" class="btn btn-outline-secondary">2</button>
    <button type="button" class="btn btn-outline-secondary">3</button>
    <button type="button" class="btn btn-outline-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-text" id="btnGroupAddon2">@</div>
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
  </div>
</div>`

const sizeCode = `<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
<hr/>
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
<hr/>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>`

const nestingCode = `<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group">
    <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>`

const verticalCode = `<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>

<hr />

<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <div class="btn-group" role="group">
    <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <div class="btn-group dropstart" role="group">
    <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend" role="group">
    <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup" role="group">
    <button v-dropdown type="button" class="btn btn-primary dropdown-toggle" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>

<hr />

<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" checked>
  <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2">
  <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3">
  <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
</div>`
</script>
