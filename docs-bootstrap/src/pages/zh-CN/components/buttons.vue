<template>
  <article class="bd-content" data-pagefind-body>
    <h1>按钮</h1>
    <p class="lead">使用 Bootstrap 的自定义按钮样式，为表单、对话框等中的操作提供支持，并支持多种尺寸、状态等。</p>

    <h2 id="base-class">基类<a class="anchor-link" href="#base-class" aria-label="基类链接"></a></h2>
    <p>Bootstrap 有一个基础类 <code>.btn</code>，用于设置内边距和内容对齐等基本样式。默认情况下，<code>.btn</code> 控件具有透明的边框和背景色，并且没有明确的焦点和悬停样式。</p>
    <Example code='<button type="button" class="btn">Base class</button>' />
    <p><code>.btn</code> 类旨在与我们的按钮变体结合使用，或作为你自定义样式的基类。</p>
    <Callout type="warning">
      <p>如果你单独使用 <code>.btn</code> 类，请记得至少定义一些明确的 <code>:focus</code> 和/或 <code>:focus-visible</code> 样式。</p>
    </Callout>
    <h2 id="variants">变体<a class="anchor-link" href="#variants" aria-label="变体链接"></a></h2>
    <p>Bootstrap 包含多个按钮变体，每个变体都有其特定的语义用途，并额外提供了一些用于更多控制的选项。</p>

    <Example :code="[...data['theme-colors'].map((themeColor) => `<button type=&quot;button&quot; class=&quot;btn btn-${themeColor.name}&quot;>${themeColor.name}</button>`), `<button type=&quot;button&quot; class=&quot;btn btn-link&quot;>Link</button>`].join('\n')" />
    <Callout name="warning-color-assistive-technologies" />
    <h2 id="disable-text-wrapping">禁用文本换行<a class="anchor-link" href="#disable-text-wrapping" aria-label="禁用文本换行链接"></a></h2>
    <p>如果你不希望按钮文本换行，可以给按钮添加 <code>.text-nowrap</code> 类。在 Sass 中，你可以设置 <code>$btn-white-space: nowrap</code> 来为每个按钮禁用文本换行。</p>
    <h2 id="button-tags">按钮标签<a class="anchor-link" href="#button-tags" aria-label="按钮标签链接"></a></h2>
    <p><code>.btn</code> 类旨在与 <code>&lt;button&gt;</code> 元素配合使用。不过，你也可以在 <code>&lt;a&gt;</code> 或 <code>&lt;input&gt;</code> 元素上使用这些类（尽管某些浏览器可能会呈现略有不同的渲染效果）。</p>
    <p>当在 <code>&lt;a&gt;</code> 元素上使用按钮类，用于触发页面内功能（例如折叠内容）而非链接到新页面或当前页面内的某个部分时，应为这些链接添加 <code>role=&quot;button&quot;</code>，以便向屏幕阅读器等辅助技术正确传达其用途。</p>
    <Example
      code='<a class="btn btn-primary" href="#" role="button">Link</a> 
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">'
    />
    <h2 id="outline-buttons">轮廓按钮<a class="anchor-link" href="#outline-buttons" aria-label="轮廓按钮链接"></a></h2>
    <p>
      需要按钮，但又不想使用它带来的厚重背景色？用
      <code>.btn-outline-*</code> 替换默认的修饰类，即可移除任意按钮上的所有背景图像和颜色。
    </p>
    <Example :code="data['theme-colors'].map((themeColor) => `<button type=&quot;button&quot; class=&quot;btn btn-outline-${themeColor.name}&quot;>${themeColor.name}</button>`).join('\n')" /><Callout>
      <p>部分按钮样式使用相对较浅的前景色，仅应在深色背景上使用，以确保足够的对比度。</p>
    </Callout>
    <h2 id="sizes">尺寸<a class="anchor-link" href="#sizes" aria-label="尺寸链接"></a></h2>
    <p>想要更大或更小的按钮？添加 <code>.btn-lg</code> 或 <code>.btn-sm</code> 以获得不同的尺寸。</p>
    <Example
      code='<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>'
    /><Example
      code='<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>'
    />
    <p>你甚至可以使用 CSS 变量来自定义尺寸：</p>
    <Example
      code='<button type="button" class="btn btn-primary"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
  Custom button
</button>'
    />
    <h2 id="disabled-state">禁用状态<a class="anchor-link" href="#disabled-state" aria-label="禁用状态链接"></a></h2>
    <p>通过为任意 <code>&lt;button&gt;</code> 元素添加 <code>disabled</code> 布尔属性，使按钮看起来处于非活动状态。禁用按钮会应用 <code>pointer-events: none</code>，从而阻止触发悬停和活动状态。</p>
    <Example
      code='<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>'
    />
    <p>使用 <code>&lt;a&gt;</code> 元素的禁用按钮行为略有不同：</p>
    <ul>
      <li><code>&lt;a&gt;</code> 不支持 <code>disabled</code> 属性，因此你必须添加 <code>.disabled</code> 类才能使其在视觉上显示为禁用状态。</li>
      <li>包含了一些面向未来的样式，用于禁用锚点按钮上的所有 <code>pointer-events</code>。</li>
      <li>使用 <code>&lt;a&gt;</code> 的禁用按钮应包含 <code>aria-disabled=&quot;true&quot;</code> 属性，以向辅助技术表明该元素的状态。</li>
      <li>使用 <code>&lt;a&gt;</code> 的禁用按钮<em>不应</em>包含 <code>href</code> 属性。</li>
    </ul>
    <Example
      code='<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a> 
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a> '
    />
    <h3 id="link-functionality-caveat">链接功能注意事项<a class="anchor-link" href="#link-functionality-caveat" aria-label="链接功能注意事项链接"></a></h3>
    <p>
      为应对必须在禁用链接上保留 <code>href</code> 属性的情况，<code>.disabled</code> 类使用 <code>pointer-events: none</code> 来尝试禁用 <code>&lt;a&gt;</code> 的链接功能。请注意，此 CSS 属性尚未针对 HTML 标准化，但所有现代浏览器都支持它。此外， 即使在支持
      <code>pointer-events: none</code> 的浏览器中，键盘导航也不受影响，这意味着有视力的键盘用户和辅助技术用户仍然能够激活这些链接。因此，为了安全起见，除了 <code>aria-disabled=&quot;true&quot;</code> 之外，还应在这类链接上添加 <code>tabindex=&quot;-1&quot;</code> 属性，以防止它们获得键盘焦点，并使用自定义 JavaScript 完全禁用其功能。
    </p>
    <Example
      code=' <a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a> 
 <a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a> '
    />
    <h2 id="block-buttons">块级按钮<a class="anchor-link" href="#block-buttons" aria-label="块级按钮链接"></a></h2>
    <p>结合使用显示工具类和间距工具类，可以创建响应式的整宽“块级按钮”堆叠，类似 Bootstrap 4 中的效果。通过使用工具类而非按钮专用类，我们可以更好地控制间距、对齐方式和响应式行为。</p>
    <Example
      code='<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>'
    />
    <p>
      这里我们创建一个响应式变体，按钮一开始垂直堆叠，直到
      <code>md</code> 断点处，<code>.d-md-block</code> 会替换 <code>.d-grid</code> 类，从而取消 <code>gap-2</code> 工具类的作用。调整浏览器大小即可看到它们的变化。
    </p>
    <Example
      code='<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>'
    />
    <p>你可以使用网格列宽类来调整块级按钮的宽度。例如，要实现半宽的“块级按钮”，可使用 <code>.col-6</code>。还可以使用 <code>.mx-auto</code> 使其水平居中。</p>
    <Example
      code='<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>'
    />
    <p>当按钮水平排列时，可以使用其他工具类来调整其对齐方式。这里我们在前面的响应式示例基础上添加了一些 flex 工具类，并在按钮上添加了一个外边距工具类，以便在按钮不再堆叠时将其右对齐。</p>
    <Example
      code='<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>'
    />
    <h2 id="button-plugin">按钮插件<a class="anchor-link" href="#button-plugin" aria-label="按钮插件链接"></a></h2>
    <p>按钮插件允许你创建简单的开/关切换按钮。</p>
    <Callout>
      <p>
        从视觉上看，这些切换按钮与
        <a href="/forms/checks-radios#checkbox-toggle-buttons">复选框切换按钮</a
        >完全相同。不过，辅助技术对它们的播报方式不同：复选框切换按钮会被屏幕阅读器播报为“已选中”/“未选中”（因为尽管外观如此，它们本质上仍然是复选框），而这些切换按钮则会被播报为“按钮”/“按钮已按下”。在两种方案之间做选择，将取决于你要创建的切换类型，以及该切换在被播报为复选框或实际按钮时对用户是否有意义。
      </p>
    </Callout>
    <h3 id="toggle-states">切换状态<a class="anchor-link" href="#toggle-states" aria-label="切换状态链接"></a></h3>
    <p>添加 <code>data-bs-toggle=&quot;button&quot;</code> 以切换按钮的 <code>active</code> 状态。如果你要预先切换某个按钮，必须手动添加 <code>.active</code> 类<strong>以及</strong> <code>aria-pressed=&quot;true&quot;</code>，以确保向辅助技术正确传达其状态。</p>
    <Example
      code='<p class="d-inline-flex gap-1">
  <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
<p class="d-inline-flex gap-1">
  <button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
  <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>'
    /><Example
      code='<p class="d-inline-flex gap-1">
  <a href="#" class="btn" role="button" data-bs-toggle="button">Toggle link</a> 
  <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a> 
 <a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a> 
</p>
<p class="d-inline-flex gap-1">
  <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a> 
  <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a> 
 <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a> 
</p>'
    />
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <p>你可以使用按钮构造函数创建一个按钮实例，例如：</p>
    <CodeWrapper code="const bsButton = new bootstrap.Button(&#39;#myButton&#39;)" lang="javascript" />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>方法</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>dispose</code></td>
            <td>销毁元素的按钮功能。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>静态方法，用于获取与某个 DOM 元素关联的按钮实例，可以这样使用：<code>bootstrap.Button.getInstance(element)</code>。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与某个 DOM 元素关联的按钮实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Button.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>切换按下状态。使按钮呈现已被激活的外观。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>例如，切换所有按钮</p>
    <CodeWrapper
      code="document.querySelectorAll(&#39;.btn&#39;).forEach(buttonElement =&gt; {
  const button = bootstrap.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
"
      lang="javascript"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，按钮现在在
      <code>.btn</code> 上使用本地 CSS 变量，以增强实时自定义能力。CSS 变量的值由 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="btn-css-vars" file="scss/_buttons.scss" />
    <p>每个 <code>.btn-*</code> 修饰类都会更新相应的 CSS 变量，并通过我们的 <code>button-variant()</code>、<code>button-outline-variant()</code> 和 <code>button-size()</code> mixin 来尽量减少额外的 CSS 规则。</p>
    <p>下面是一个构建自定义 <code>.btn-*</code> 修饰类的示例，与我们为文档专用按钮所做的一样：通过混合使用我们自己的 CSS 和 Sass 变量重新赋值 Bootstrap 的 CSS 变量。</p>
    <Example :showMarkup="false" code='<button type="button" class="btn btn-bd-primary">Custom button</button>' /><ScssDocs name="btn-css-vars-example" file="site/src/scss/_buttons.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="btn-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin链接"></a></h3>
    <p>
      按钮共有三个 mixin：按钮和按钮轮廓变体 mixin（两者都基于
      <code>$theme-colors</code>），以及一个按钮尺寸 mixin。
    </p>
    <ScssDocs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" /><ScssDocs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" /><ScssDocs name="btn-size-mixin" file="scss/mixins/_buttons.scss" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p>
      按钮变体（用于常规按钮和轮廓按钮）将其各自的 mixin 与我们的
      <code>$theme-colors</code> 映射结合使用，在 <code>scss/_buttons.scss</code> 中生成修饰类。
    </p>
    <ScssDocs name="btn-variant-loops" file="scss/_buttons.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#base-class">基类</a></li>
      <li><a href="#variants">变体</a></li>
      <li><a href="#disable-text-wrapping">禁用文本换行</a></li>
      <li><a href="#button-tags">按钮标签</a></li>
      <li><a href="#outline-buttons">轮廓按钮</a></li>
      <li><a href="#sizes">尺寸</a></li>
      <li>
        <a href="#disabled-state">禁用状态</a>
        <ul>
          <li><a href="#link-functionality-caveat">链接功能注意事项</a></li>
        </ul>
      </li>
      <li><a href="#block-buttons">块级按钮</a></li>
      <li>
        <a href="#button-plugin">按钮插件</a>
        <ul>
          <li><a href="#toggle-states">切换状态</a></li>
          <li><a href="#methods">方法</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
