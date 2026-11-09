<template>
  <article class="bd-content">
    <h1>按钮组</h1>
    <p>将一系列按钮组合在同一行中，或将它们堆叠成一列。</p>

    <h2 id="basic-example">基本示例<a class="anchor-link" href="#basic-example" aria-label="基本示例链接"></a></h2>
    <p>将一系列带有 <code>.btn</code> 的按钮包裹在 <code>.btn-group</code> 中。</p>
    <Example
      code='<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>'
    />
    <Callout>
      <p>
        按钮组需要合适的 <code>role</code> 属性和明确的标签，以确保屏幕阅读器等辅助技术能够识别按钮已分组并进行播报。按钮组请使用 <code>role=&quot;group&quot;</code>，按钮工具栏请使用 <code>role=&quot;toolbar&quot;</code>。然后使用 <code>aria-label</code> 或
        <code>aria-labelledby</code> 为它们添加标签。
      </p>
    </Callout>
    <p>
      这些类也可以添加到链接组中，作为
      <a href="/components/navs-tabs"><code>.nav</code> 导航组件</a>的替代方案。
    </p>
    <Example
      code='<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
  <a href="#" class="btn btn-primary">Link</a>
  <a href="#" class="btn btn-primary">Link</a>
</div>'
    />
    <h2 id="mixed-styles">混合样式<a class="anchor-link" href="#mixed-styles" aria-label="混合样式链接"></a></h2>
    <Example
      code='<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>'
    />
    <h2 id="outlined-styles">轮廓样式<a class="anchor-link" href="#outlined-styles" aria-label="轮廓样式链接"></a></h2>
    <Example
      code='<div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>'
    />
    <h2 id="checkbox-and-radio-button-groups">复选框和单选按钮组<a class="anchor-link" href="#checkbox-and-radio-button-groups" aria-label="复选框和单选按钮组链接"></a></h2>
    <p>将按钮式的复选框和单选<a href="/forms/checks-radios">切换按钮</a>组合成外观无缝的按钮组。</p>
    <Example
      code='<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>'
    />
    <Example
      code='<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>'
    />
    <h2 id="button-toolbar">按钮工具栏<a class="anchor-link" href="#button-toolbar" aria-label="按钮工具栏链接"></a></h2>
    <p>将多组按钮组合成按钮工具栏，以构建更复杂的组件。可根据需要使用工具类来为组、按钮等添加间距。</p>
    <Example
      code='<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
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
</div>'
    />
    <p>你可以随意在工具栏中混合使用输入框组和按钮组。与上面的示例类似，你很可能需要使用一些工具类来正确设置间距。</p>
    <Example
      code='<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
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
</div>'
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>无需为组内的每个按钮应用按钮尺寸类，只需为每个 <code>.btn-group</code> 添加 <code>.btn-group-*</code>，嵌套多个组时也要为每个组添加。</p>
    <Example
      code='<div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
<br>
<div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>
<br>
<div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>'
    />
    <h2 id="nesting">嵌套<a class="anchor-link" href="#nesting" aria-label="嵌套链接"></a></h2>
    <p>当你希望在一系列按钮中混合下拉菜单时，可将一个 <code>.btn-group</code> 放入另一个 <code>.btn-group</code> 中。</p>
    <Example
      code='<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" class="btn btn-primary">1</button>
  <button type="button" class="btn btn-primary">2</button>

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>'
    />
    <h2 id="vertical-variation">垂直排列变体<a class="anchor-link" href="#vertical-variation" aria-label="垂直排列变体链接"></a></h2>
    <p>
      让一组按钮呈垂直堆叠显示，而不是水平排列。
      <strong>此处不支持分裂式下拉按钮。</strong>
    </p>
    <Example
      code='<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>'
    />
    <Example
      code='<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>'
    />
    <Example
      code='<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
</div>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#basic-example">基本示例</a></li>
      <li><a href="#mixed-styles">混合样式</a></li>
      <li><a href="#outlined-styles">轮廓样式</a></li>
      <li><a href="#checkbox-and-radio-button-groups">复选框和单选按钮组</a></li>
      <li><a href="#button-toolbar">按钮工具栏</a></li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#nesting">嵌套</a></li>
      <li>
        <a href="#vertical-variation">垂直排列变体</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
