<template>
  <article class="bd-content" data-pagefind-body>
    <h1>复选框与单选框</h1>
    <p class="lead">使用我们完全重写的复选框组件，创建跨浏览器、跨设备且外观一致的复选框与单选框。</p>

    <h2 id="approach">实现方式<a class="anchor-link" href="#approach" aria-label="实现方式链接"></a></h2>
    <p>借助 <code>.form-check</code> 替换浏览器默认的复选框和单选框，这是一系列同时适用于两种输入类型的类，可改进其 HTML 元素的布局和行为，带来更强的可自定义性和跨浏览器一致性。复选框用于在列表中选择一个或多个选项，而单选框用于从多个选项中仅选择一个。</p>
    <p>
      在结构上，我们的 <code>&lt;input&gt;</code> 和 <code>&lt;label&gt;</code> 是兄弟元素，而不是将 <code>&lt;input&gt;</code> 放在 <code>&lt;label&gt;</code> 内部。这种方式略显冗长，因为你必须指定 <code>id</code> 和 <code>for</code> 属性来关联 <code>&lt;input&gt;</code> 和 <code>&lt;label&gt;</code>。我们对所有 <code>&lt;input&gt;</code> 状态（如
      <code>:checked</code> 或 <code>:disabled</code>）都使用兄弟选择器（<code>~</code>）。结合 <code>.form-check-label</code> 类，我们可以根据 <code>&lt;input&gt;</code> 的状态轻松地为每一项的文本设置样式。
    </p>
    <p>我们的复选框使用自定义的 Bootstrap 图标来表示已选中或不确定状态。</p>
    <h2 id="checks">复选框<a class="anchor-link" href="#checks" aria-label="复选框链接"></a></h2>
    <Example
      code='<div class="form-check">
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
</div>'
    />
    <h3 id="indeterminate">不确定状态<a class="anchor-link" href="#indeterminate" aria-label="不确定状态链接"></a></h3>
    <p>通过 JavaScript 手动设置时，复选框可以使用 <code>:indeterminate</code> 伪类（没有可用的 HTML 属性来指定它）。</p>
    <Example
      addStackblitzJs
      class="bd-example-indeterminate"
      code='<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminate">
  <label class="form-check-label" for="checkIndeterminate">
    Indeterminate checkbox
  </label>
</div>'
    />
    <h3 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h3>
    <p>添加 <code>disabled</code> 属性后，关联的 <code>&lt;label&gt;</code> 会自动采用更浅的颜色，以帮助表明输入框的状态。</p>
    <Example
      addStackblitzJs
      class="bd-example-indeterminate"
      code='<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkIndeterminateDisabled" disabled>
  <label class="form-check-label" for="checkIndeterminateDisabled">
    Disabled indeterminate checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkDisabled" disabled>
  <label class="form-check-label" for="checkDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled>
  <label class="form-check-label" for="checkCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>'
    />
    <h2 id="radios">单选框<a class="anchor-link" href="#radios" aria-label="单选框链接"></a></h2>
    <Example
      code='<div class="form-check">
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
</div>'
    />
    <h3 id="disabled-1">禁用状态<a class="anchor-link" href="#disabled-1" aria-label="禁用状态链接"></a></h3>
    <p>添加 <code>disabled</code> 属性后，关联的 <code>&lt;label&gt;</code> 会自动采用更浅的颜色，以帮助表明输入框的状态。</p>
    <Example
      code='<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled>
  <label class="form-check-label" for="radioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="radioCheckedDisabled">
    Disabled checked radio
  </label>
</div>'
    />
    <h2 id="switches">开关<a class="anchor-link" href="#switches" aria-label="开关链接"></a></h2>
    <p>开关使用自定义复选框的标记结构，但通过 <code>.form-switch</code> 类渲染为切换开关。建议使用 <code>role=&quot;switch&quot;</code>，以便向支持该角色的辅助技术更准确地传达控件的性质。在较旧的辅助技术中，它将作为普通复选框读出，作为后备方案。开关同样支持 <code>disabled</code> 属性。</p>
    <Example
      code='<div class="form-check form-switch">
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
</div>'
    />
    <h3 id="native-switches">原生开关<a class="anchor-link" href="#native-switches" aria-label="原生开关链接"></a></h3>
    <p>为移动端 Safari（iOS 17.4+）渐进增强开关：在输入框上添加 <code>switch</code> 属性，即可在切换开关时启用触觉反馈，就像原生 iOS 开关一样。在 Bootstrap 中使用该属性不会带来样式变化，因为我们的所有开关都使用自定义样式。</p>
    <Example
      code='<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch>
  <label class="form-check-label" for="checkNativeSwitch">
    Native switch haptics
  </label>
</div>'
    />
    <p>请务必进一步了解 <a href="https://webkit.org/blog/15054/an-html-switch-control/">WebKit 博客上关于 switch 属性的文章</a> 。macOS 和 iOS 上的 Safari 17.4+ 在 HTML 中都支持原生样式的开关，而其他浏览器则回退到标准复选框外观。在较新版本的 Safari 中，将该属性应用于非 Bootstrap 的复选框也会渲染为原生开关。</p>
    <h2 id="default-stacked">默认（堆叠）<a class="anchor-link" href="#default-stacked" aria-label="默认（堆叠）链接"></a></h2>
    <p>默认情况下，任意数量的直接相邻的复选框和单选框都会借助 <code>.form-check</code> 垂直堆叠并保持适当的间距。</p>
    <Example
      code='<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
  <label class="form-check-label" for="defaultCheck2">
    Disabled checkbox
  </label>
</div>'
    /><Example
      code='<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>'
    />
    <h2 id="inline">行内排列<a class="anchor-link" href="#inline" aria-label="行内排列链接"></a></h2>
    <p>为任意 <code>.form-check</code> 添加 <code>.form-check-inline</code>，即可将复选框或单选框分组在同一水平行中。</p>
    <Example
      code='<div class="form-check form-check-inline">
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
</div>'
    /><Example
      code='<div class="form-check form-check-inline">
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
</div>'
    />
    <h2 id="reverse">反向排列<a class="anchor-link" href="#reverse" aria-label="反向排列链接"></a></h2>
    <p>使用 <code>.form-check-reverse</code> 修饰类，可将复选框、单选框和开关放在相反的一侧。</p>
    <Example
      code='<div class="form-check form-check-reverse">
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
</div>'
    />
    <h2 id="without-labels">不带标签<a class="anchor-link" href="#without-labels" aria-label="不带标签链接"></a></h2>
    <p>对于没有标签文本的复选框和单选框，省略包裹的 <code>.form-check</code>。请记住仍要为辅助技术提供可访问名称，例如使用 <code>aria-label</code>。该名称应说明控件的作用，例如 <code>aria-label="Select all rows"</code>，并替换下面示例中的 <code>...</code> 占位符。详情请参见 <a href="/forms/overview/#accessibility">表单概览的无障碍</a> 部分。</p>
    <Example
      code='<div>
  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
</div>

<div>
  <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
</div>'
    />
    <h2 id="toggle-buttons">切换按钮<a class="anchor-link" href="#toggle-buttons" aria-label="切换按钮链接"></a></h2>
    <p>在 <code>&lt;label&gt;</code> 元素上使用 <code>.btn</code> 样式代替 <code>.form-check-label</code>，即可创建类似按钮的复选框和单选框。如有需要，这些切换按钮还可以分组到 <a href="/components/button-group">按钮组</a> 中。</p>
    <h3 id="checkbox-toggle-buttons">复选框切换按钮<a class="anchor-link" href="#checkbox-toggle-buttons" aria-label="复选框切换按钮链接"></a></h3>
    <Example
      code='<input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
<label class="btn btn-primary" for="btn-check">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-2" checked autocomplete="off">
<label class="btn btn-primary" for="btn-check-2">Checked</label>

<input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled>
<label class="btn btn-primary" for="btn-check-3">Disabled</label>'
    /><Example
      code='<input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off">
<label class="btn" for="btn-check-4">Single toggle</label>

<input type="checkbox" class="btn-check" id="btn-check-5" checked autocomplete="off">
<label class="btn" for="btn-check-5">Checked</label>

<input type="checkbox" class="btn-check" id="btn-check-6" autocomplete="off" disabled>
<label class="btn" for="btn-check-6">Disabled</label>'
    /><Callout>
      <p>
        从视觉上看，这些复选框切换按钮与
        <a href="/components/buttons#button-plugin">按钮插件切换按钮</a
        >完全相同。但是，辅助技术对它们的传达方式不同：复选框切换按钮会被屏幕阅读器读作“已选中”/“未选中”（因为尽管外观如此，它们本质上仍是复选框），而按钮插件切换按钮会被读作“按钮”/“按钮已按下”。在这两种方式之间如何选择，取决于你要创建的切换类型，以及该切换在作为复选框或实际按钮被读出时对用户是否有意义。
      </p>
    </Callout>
    <h3 id="radio-toggle-buttons">单选框切换按钮<a class="anchor-link" href="#radio-toggle-buttons" aria-label="单选框切换按钮链接"></a></h3>
    <Example
      code='<input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
<label class="btn btn-secondary" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
<label class="btn btn-secondary" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
<label class="btn btn-secondary" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
<label class="btn btn-secondary" for="option4">Radio</label>'
    /><Example
      code='<input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" checked>
<label class="btn" for="option5">Checked</label>

<input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off">
<label class="btn" for="option6">Radio</label>

<input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off" disabled>
<label class="btn" for="option7">Disabled</label>

<input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off">
<label class="btn" for="option8">Radio</label>'
    />
    <h3 id="outlined-styles">描边样式<a class="anchor-link" href="#outlined-styles" aria-label="描边样式链接"></a></h3>
    <p>支持 <code>.btn</code> 的不同变体，例如各种描边样式。</p>
    <Example
      code='<input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off">
<label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked>
<label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
<label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>复选框的变量：</p>
    <ScssDocs name="form-check-variables" file="scss/_variables.scss" />
    <p>开关的变量：</p>
    <ScssDocs name="form-switch-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#approach">实现方式</a></li>
      <li>
        <a href="#checks">复选框</a>
        <ul>
          <li><a href="#indeterminate">不确定状态</a></li>
          <li><a href="#disabled">禁用状态</a></li>
        </ul>
      </li>
      <li>
        <a href="#radios">单选框</a>
        <ul>
          <li><a href="#disabled-1">禁用状态</a></li>
        </ul>
      </li>
      <li>
        <a href="#switches">开关</a>
        <ul>
          <li><a href="#native-switches">原生开关</a></li>
        </ul>
      </li>
      <li><a href="#default-stacked">默认（堆叠）</a></li>
      <li><a href="#inline">行内排列</a></li>
      <li><a href="#reverse">反向排列</a></li>
      <li><a href="#without-labels">不带标签</a></li>
      <li>
        <a href="#toggle-buttons">切换按钮</a>
        <ul>
          <li><a href="#checkbox-toggle-buttons">复选框切换按钮</a></li>
          <li><a href="#radio-toggle-buttons">单选框切换按钮</a></li>
          <li><a href="#outlined-styles">描边样式</a></li>
        </ul>
      </li>
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

import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]').forEach((checkbox) => {
    if (checkbox.id.includes('Indeterminate')) {
      checkbox.indeterminate = true;
    }
  });
});
</script>
