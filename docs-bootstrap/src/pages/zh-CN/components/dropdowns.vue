<template>
  <article class="bd-content" data-pagefind-body>
    <h1>下拉菜单</h1>
    <p class="lead">使用 Bootstrap 下拉菜单插件切换上下文浮层，以显示链接列表等内容。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2>
    <p>
      下拉菜单是可切换的上下文浮层，用于显示链接列表等内容。它们通过与 Bootstrap 一同提供的下拉菜单 JavaScript 插件实现交互。它们通过点击而非悬停来切换；这是
      <a href="https://markdotto.com/blog/bootstrap-explained-dropdowns/">有意为之的设计决策</a> 。
    </p>
    <p>
      下拉菜单构建于第三方库 <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/index.md">Popper</a> 之上，该库提供动态定位和视口检测。请确保在 Bootstrap 的 JavaScript 之前引入 <a href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js">popper.min.js</a> ，或使用 包含 Popper 的
      <code>bootstrap.bundle.min.js</code> / <code>bootstrap.bundle.js</code>。不过，导航栏中的下拉菜单并不使用 Popper 定位，因为那里不需要动态定位。
    </p>
    <h2 id="accessibility">无障碍<a class="anchor-link" href="#accessibility" aria-label="无障碍链接"></a></h2>
    <p>
      <a href="https://www.w3.org/TR/wai-aria/"><abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr></a
      >标准定义了一种真正的 <a href="https://www.w3.org/TR/wai-aria/#menu"><code>role=&quot;menu&quot;</code> 部件</a> ，但它专门针对触发操作或功能的类应用菜单。<abbr title="Accessible Rich Internet Applications">ARIA</abbr> 菜单只能包含菜单项、复选框菜单项、单选按钮菜单项、单选按钮组 和子菜单。
    </p>
    <p>
      另一方面，Bootstrap 的下拉菜单被设计为通用组件，适用于各种场景和标记结构。例如，可以创建包含额外输入框和表单控件的下拉菜单，如搜索框或登录表单。因此，Bootstrap 不期望（也不会自动添加）真正的 <abbr title="Accessible Rich Internet Applications">ARIA</abbr> 菜单所需的任何 <code>role</code> 和
      <code>aria-</code> 属性。作者需要自行添加这些更具体的属性。
    </p>
    <p>不过，Bootstrap 确实为大多数标准键盘菜单交互提供了内置支持，例如使用方向键在单个 <code>.dropdown-item</code> 元素间移动，以及按 <kbd>Esc</kbd> 键关闭菜单。</p>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <p>
      将下拉菜单的切换按钮（你的按钮或链接）和下拉菜单包裹在 <code>.dropdown</code> 或声明了 <code>position: relative;</code> 的其他元素中。理想情况下，应使用 <code>&lt;button&gt;</code> 元素作为下拉菜单触发器，不过该插件也能配合 <code>&lt;a&gt;</code> 元素使用。此处 展示的示例在适当位置使用了语义化的
      <code>&lt;ul&gt;</code> 元素，但也支持自定义标记。
    </p>
    <h3 id="single-button">单按钮<a class="anchor-link" href="#single-button" aria-label="单按钮链接"></a></h3>
    <p>任何单个 <code>.btn</code> 只需稍作标记修改即可变为下拉菜单切换按钮。以下是如何将它们与 <code>&lt;button&gt;</code> 元素配合使用：</p>
    <Example
      code='<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>'
    />
    <p>虽然推荐使用 <code>&lt;button&gt;</code> 作为下拉菜单的切换控件，但有时可能不得不使用 <code>&lt;a&gt;</code> 元素。如果这样做，我们建议添加 <code>role=&quot;button&quot;</code> 属性，以便向屏幕阅读器等辅助技术正确传达该控件的用途。</p>
    <Example
      code='<div class="dropdown">
 <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a> 

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>'
    />
    <p>最棒的是，你也可以对任何按钮变体这样做：</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Example single danger button --&gt;
&lt;div class="btn-group"&gt;
  &lt;button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Danger
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="split-button">分割按钮<a class="anchor-link" href="#split-button" aria-label="分割按钮链接"></a></h3>
    <p>类似地，创建分割按钮下拉菜单的标记与单按钮下拉菜单几乎完全相同，只是额外添加了 <code>.dropdown-toggle-split</code>，以便在下拉箭头周围留出合适的间距。</p>
    <p>我们使用这个额外的类将箭头两侧的水平 <code>padding</code> 减少 25%，并移除普通按钮下拉菜单中添加的 <code>margin-left</code>。这些额外的改动使箭头在分割按钮中保持居中，并在主按钮旁提供更合适大小的点击区域。</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Example split danger button --&gt;
&lt;div class="btn-group"&gt;
  &lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
  &lt;button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>按钮下拉菜单适用于各种尺寸的按钮，包括默认和分割下拉按钮。</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Large button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Large button groups (default and split) --&gt;
&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Large button
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-secondary btn-lg" type="button"&gt;
    Large split button
  &lt;/button&gt;
  &lt;button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <Example
      :showMarkup="false"
      code='<div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Small button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Small button
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div class="btn-group"&gt;
  &lt;button class="btn btn-secondary btn-sm" type="button"&gt;
    Small split button
  &lt;/button&gt;
  &lt;button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="dark-dropdowns">深色下拉菜单<a class="anchor-link" href="#dark-dropdowns" aria-label="深色下拉菜单链接"></a></h2>
    <DeprecatedIn version="5.3.0" />
    <p>在现有的 <code>.dropdown-menu</code> 上添加 <code>.dropdown-menu-dark</code>，即可启用更深的深色下拉菜单，以匹配深色导航栏或自定义样式。下拉菜单项无需任何更改。</p>
    <CalloutDeprecatedDarkVariants component="dropdown-menu" /><Example
      code='<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>'
    />
    <p>并在导航栏中使用它：</p>
    <Example
      code='<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">Navbar</a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>'
    />
    <h2 id="directions">方向<a class="anchor-link" href="#directions" aria-label="方向链接"></a></h2>
    <Callout>
      <p><strong>在 RTL 模式下方向会翻转。</strong>因此，<code>.dropstart</code> 将显示在右侧。</p>
    </Callout>
    <h3 id="centered">居中<a class="anchor-link" href="#centered" aria-label="居中链接"></a></h3>
    <p>在父元素上使用 <code>.dropdown-center</code>，使下拉菜单居中显示在切换按钮下方。</p>
    <Example
      code='<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>'
    />
    <h3 id="dropup">上拉菜单<a class="anchor-link" href="#dropup" aria-label="上拉菜单链接"></a></h3>
    <p>在父元素上添加 <code>.dropup</code>，即可在元素上方触发下拉菜单。</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">Split dropup</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Default dropup button --&gt;
&lt;div class="btn-group dropup"&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Dropup
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Split dropup button --&gt;
&lt;div class="btn-group dropup"&gt;
  &lt;button type="button" class="btn btn-secondary"&gt;
    Split dropup
  &lt;/button&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="dropup-centered">上拉居中对齐<a class="anchor-link" href="#dropup-centered" aria-label="上拉居中对齐链接"></a></h3>
    <p>在父元素上使用 <code>.dropup-center</code>，使上拉菜单居中显示在切换按钮上方。</p>
    <Example
      code='<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>'
    />
    <h3 id="dropend">右侧下拉菜单<a class="anchor-link" href="#dropend" aria-label="右侧下拉菜单链接"></a></h3>
    <p>在父元素上添加 <code>.dropend</code>，即可在元素右侧触发下拉菜单。</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">Split dropend</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropend</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Default dropend button --&gt;
&lt;div class="btn-group dropend"&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Dropend
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Split dropend button --&gt;
&lt;div class="btn-group dropend"&gt;
  &lt;button type="button" class="btn btn-secondary"&gt;
    Split dropend
  &lt;/button&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropend&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="dropstart">左侧下拉菜单<a class="anchor-link" href="#dropstart" aria-label="左侧下拉菜单链接"></a></h3>
    <p>在父元素上添加 <code>.dropstart</code>，即可在元素左侧触发下拉菜单。</p>
    <Example
      :showMarkup="false"
      code='<div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropstart
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <button type="button" class="btn btn-secondary">Split dropstart</button>
  </div>'
    />
    <CodeWrapper
      code='&lt;!-- Default dropstart button --&gt;
&lt;div class="btn-group dropstart"&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Dropstart
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Split dropstart button --&gt;
&lt;div class="btn-group dropstart"&gt;
  &lt;button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    &lt;span class="visually-hidden"&gt;Toggle Dropstart&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    &lt;!-- Dropdown menu links --&gt;
  &lt;/ul&gt;
  &lt;button type="button" class="btn btn-secondary"&gt;
    Split dropstart
  &lt;/button&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h2 id="menu-items">菜单项<a class="anchor-link" href="#menu-items" aria-label="菜单项链接"></a></h2>
    <p>你可以使用 <code>&lt;a&gt;</code> 或 <code>&lt;button&gt;</code> 元素作为下拉菜单项。</p>
    <Example
      code='<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>'
    />
    <p>你还可以使用 <code>.dropdown-item-text</code> 创建非交互式下拉菜单项。可以随意使用自定义 CSS 或文本工具类进一步设置样式。</p>
    <Example
      code='<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>'
    />
    <h3 id="active">激活状态<a class="anchor-link" href="#active" aria-label="激活状态链接"></a></h3>
    <p>为下拉菜单中的项添加 <code>.active</code>，<strong>将其样式设置为激活状态</strong>。要向辅助技术传达激活状态，请使用 <code>aria-current</code> 属性——对当前页面使用 <code>page</code> 值，或对一组中的当前项使用 <code>true</code>。</p>
    <Example
      code='<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>'
    />
    <h3 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h3>
    <p>为下拉菜单中的项添加 <code>.disabled</code>，<strong>将其样式设置为禁用状态</strong>。</p>
    <Example
      code='<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>'
    />
    <h2 id="menu-alignment">菜单对齐<a class="anchor-link" href="#menu-alignment" aria-label="菜单对齐链接"></a></h2>
    <p>
      默认情况下，下拉菜单会自动定位在父元素顶部向下 100%、并沿其左侧对齐的位置。你可以通过方向类
      <code>.drop*</code> 来改变这一点，但也可以使用额外的修饰类来控制它们。
    </p>
    <p>在 <code>.dropdown-menu</code> 上添加 <code>.dropdown-menu-end</code> 可使下拉菜单右对齐。在 RTL 模式下使用 Bootstrap 时方向会镜像，即 <code>.dropdown-menu-end</code> 将显示在左侧。</p>
    <Callout>
      <p><strong>注意！</strong>除了位于导航栏中的下拉菜单外，下拉菜单均借助 Popper 进行定位。</p> </Callout
    ><Example
      code='<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>'
    />
    <h3 id="responsive-alignment">响应式对齐<a class="anchor-link" href="#responsive-alignment" aria-label="响应式对齐链接"></a></h3>
    <p>
      如果你希望使用响应式对齐，请添加
      <code>data-bs-display=&quot;static&quot;</code> 属性来禁用动态定位，并使用响应式变体类。
    </p>
    <p>要使下拉菜单在给定断点或更大断点处<strong>右</strong>对齐，请添加 <code>.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end</code>。</p>
    <Example
      code='<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>'
    />
    <p>要使下拉菜单在给定断点或更大断点处<strong>左</strong>对齐，请添加 <code>.dropdown-menu-end</code> 和 <code>.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start</code>。</p>
    <Example
      code='<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>'
    />
    <p>请注意，你无需为导航栏中的下拉按钮添加 <code>data-bs-display=&quot;static&quot;</code> 属性，因为导航栏中不使用 Popper。</p>
    <h3 id="alignment-options">对齐选项<a class="anchor-link" href="#alignment-options" aria-label="对齐选项链接"></a></h3>
    <p>采用上面展示的大部分选项，这里用一个小的综合示例集中演示各种下拉菜单对齐选项。</p>
    <Example
      code='<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned, right-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>'
    />
    <h2 id="menu-content">菜单内容<a class="anchor-link" href="#menu-content" aria-label="菜单内容链接"></a></h2>
    <h3 id="headers">标题<a class="anchor-link" href="#headers" aria-label="标题链接"></a></h3>
    <p>在任何下拉菜单中添加标题，用于标记操作分区。</p>
    <Example
      code='<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>'
    />
    <h3 id="dividers">分隔线<a class="anchor-link" href="#dividers" aria-label="分隔线链接"></a></h3>
    <p>使用分隔线将相关的菜单项分组隔开。</p>
    <Example
      code='<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>'
    />
    <h3 id="text">文本<a class="anchor-link" href="#text" aria-label="文本链接"></a></h3>
    <p>在下拉菜单中放置任意自由形式的文本，并使用 <a href="/utilities/spacing">间距工具类</a> 。请注意，你可能需要额外的尺寸样式来限制菜单宽度。</p>
    <Example
      code='<div class="dropdown-menu p-4 text-body-secondary" style="max-width: 200px;">
  <p>
    Some example text that’s free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>'
    />
    <h3 id="forms">表单<a class="anchor-link" href="#forms" aria-label="表单链接"></a></h3>
    <p>在下拉菜单中放置表单，或直接将表单作为下拉菜单，并使用 <a href="/utilities/spacing">外边距或内边距工具类</a> 给它留出所需的空白区域。</p>
    <Example
      code='<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>'
    /><Example
      code='<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2">
        <label class="form-check-label" for="dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>'
    />
    <h2 id="dropdown-options">下拉菜单选项<a class="anchor-link" href="#dropdown-options" aria-label="下拉菜单选项链接"></a></h2>
    <p>使用 <code>data-bs-offset</code> 或 <code>data-bs-reference</code> 来改变下拉菜单的位置。</p>
    <Example
      code='<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>'
    />
    <h3 id="auto-close-behavior">自动关闭行为<a class="anchor-link" href="#auto-close-behavior" aria-label="自动关闭行为链接"></a></h3>
    <p>
      默认情况下，在下拉菜单内部或外部点击时，下拉菜单都会关闭。你可以使用
      <code>autoClose</code> 选项来更改下拉菜单的此行为。
    </p>
    <Example
      code='<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，下拉菜单现在在
      <code>.dropdown-menu</code> 上使用局部 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此依然支持 Sass 自定义。
    </p>
    <ScssDocs name="dropdown-css-vars" file="scss/_dropdown.scss" /><Callout>
      <p>下拉菜单项至少包含一个未在 <code>.dropdown</code> 上设置的变量。这允许你提供新值，而 Bootstrap 默认使用回退值。</p>
      <ul>
        <li><code>--bs-dropdown-item-border-radius</code></li>
      </ul>
    </Callout>
    <p>通过 CSS 变量进行自定义的方式可以在 <code>.dropdown-menu-dark</code> 类中看到，其中我们在不添加重复 CSS 选择器的情况下覆盖了特定值。</p>
    <ScssDocs name="dropdown-dark-css-vars" file="scss/_dropdown.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>所有下拉菜单的变量：</p>
    <ScssDocs name="dropdown-variables" file="scss/_variables.scss" />
    <p><a href="#dark-dropdowns">深色下拉菜单</a> 的变量：</p>
    <ScssDocs name="dropdown-dark-variables" file="scss/_variables.scss" />
    <p>用于 CSS 箭头（指示下拉菜单可交互状态）的变量：</p>
    <ScssDocs name="caret-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixins 链接"></a></h3>
    <p>Mixins 用于生成基于 CSS 的箭头，可在 <code>scss/mixins/_caret.scss</code> 中找到。</p>
    <ScssDocs name="caret-mixins" file="scss/mixins/_caret.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>通过数据属性或 JavaScript，下拉菜单插件通过切换父级 <code>.dropdown-menu</code> 上的 <code>.show</code> 类来切换隐藏内容（下拉菜单）。在应用层面上，关闭下拉菜单依赖于 <code>data-bs-toggle=&quot;dropdown&quot;</code> 属性，因此最好始终使用它。</p>
    <Callout>
      <p>
        在支持触摸的设备上，打开下拉菜单会向 <code>&lt;body&gt;</code> 元素的直接子元素添加空的 <code>mouseover</code> 处理程序。这个公认不太优雅的技巧是为了绕过 <a href="https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html">iOS 事件委托的一个怪癖</a> ，否则在
        下拉菜单外任意位置轻触将无法触发关闭下拉菜单的代码。一旦下拉菜单关闭，这些额外的空 <code>mouseover</code> 处理程序就会被移除。
      </p>
    </Callout>
    <h3 id="via-data-attributes">通过数据属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过数据属性链接"></a></h3>
    <p>在链接或按钮上添加 <code>data-bs-toggle=&quot;dropdown&quot;</code> 以切换下拉菜单。</p>
    <CodeWrapper
      code='&lt;div class="dropdown"&gt;
  &lt;button type="button" data-bs-toggle="dropdown" aria-expanded="false"&gt;
    Dropdown trigger
  &lt;/button&gt;
  &lt;ul class="dropdown-menu"&gt;
    ...
  &lt;/ul&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <Callout type="warning">
      <p>无论你是通过 JavaScript 调用下拉菜单还是使用数据 API，下拉菜单的触发元素上都必须有 <code>data-bs-toggle=&quot;dropdown&quot;</code>。</p>
    </Callout>
    <p>通过 JavaScript 调用下拉菜单：</p>
    <CodeWrapper
      code="const dropdownElementList = document.querySelectorAll(&#39;.dropdown-toggle&#39;)
const dropdownList = [...dropdownElementList].map(dropdownToggleEl =&gt; new bootstrap.Dropdown(dropdownToggleEl))
"
      lang="javascript"
    />
    <h3 id="options">选项<a class="anchor-link" href="#options" aria-label="选项链接"></a></h3>
    <JsDataAttributes />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
            <th>默认值</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>autoClose</code></td>
            <td>boolean, string</td>
            <td><code>true</code></td>
            <td>
              配置下拉菜单的自动关闭行为：
              <ul class="my-2">
                <li><code>true</code> - 在下拉菜单外部或内部点击时，下拉菜单将关闭。</li>
                <li><code>false</code> - 通过点击切换按钮并手动调用 <code>hide</code> 或 <code>toggle</code> 方法时，下拉菜单将关闭。（按下 <kbd>Esc</kbd> 键也不会关闭）</li>
                <li><code>&#39;inside&#39;</code> - （仅）在下拉菜单内部点击时，下拉菜单将关闭。</li>
                <li><code>&#39;outside&#39;</code> - （仅）在下拉菜单外部点击时，下拉菜单将关闭。</li>
              </ul>
              注意：下拉菜单始终可以用 <kbd>Esc</kbd> 键关闭。
            </td>
          </tr>
          <tr>
            <td><code>boundary</code></td>
            <td>string, element</td>
            <td><code>&#39;clippingParents&#39;</code></td>
            <td>下拉菜单的溢出约束边界（仅适用于 Popper 的 preventOverflow 修饰符）。默认值为 <code>clippingParents</code>，可接受 HTMLElement 引用（仅限通过 JavaScript）。更多信息请参阅 Popper 的 <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/utils/detect-overflow/#boundary">detectOverflow 文档</a> 。</td>
          </tr>
          <tr>
            <td><code>display</code></td>
            <td>string</td>
            <td><code>&#39;dynamic&#39;</code></td>
            <td>默认情况下，我们使用 Popper 进行动态定位。使用 <code>static</code> 可禁用此功能。</td>
          </tr>
          <tr>
            <td><code>offset</code></td>
            <td>array, string, function</td>
            <td><code>[0, 2]</code></td>
            <td>
              下拉菜单相对于其目标的偏移量。你可以在数据属性中传递以逗号分隔值的字符串，例如：
              <code>data-bs-offset=&quot;10,20&quot;</code>。当使用函数来确定偏移量时，会以包含 popper 位置、reference 和 popper 矩形的对象作为第一个参数调用它。触发元素的 DOM 节点作为第二个参数传入。该函数必须返回一个包含两个数字的数组：
              <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#skidding-1">skidding</a> 、 <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#distance-1">distance</a> 。更多信息请参阅 Popper 的<a
                href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/modifiers/offset/#options"
                >offset 文档</a
              >。
            </td>
          </tr>
          <tr>
            <td><code>popperConfig</code></td>
            <td>null, object, function</td>
            <td><code>null</code></td>
            <td>要更改 Bootstrap 的默认 Popper 配置，请参阅 <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/constructors/#options">Popper 的配置</a> 。当使用函数来创建 Popper 配置时，会以包含 Bootstrap 默认 Popper 配置的对象调用它。这有助于你将默认配置与自己的配置一起使用和合并。该函数必须返回一个 Popper 配置对象。</td>
          </tr>
          <tr>
            <td><code>reference</code></td>
            <td>string, element, object</td>
            <td><code>&#39;toggle&#39;</code></td>
            <td>
              下拉菜单的引用元素。接受 <code>&#39;toggle&#39;</code>、<code>&#39;parent&#39;</code>、HTMLElement 引用或提供 <code>getBoundingClientRect</code> 的对象。更多信息请参阅 Popper 的 <a href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/constructors/#createpopper">构造函数文档</a> 和<a
                href="https://github.com/floating-ui/popper-docs/blob/main/docs/v2/virtual-elements/"
                >虚拟元素文档</a
              >。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 id="using-function-with-popperconfig">配合 <code>popperConfig</code> 使用函数</h4>
    <CodeWrapper
      code="const dropdown = new bootstrap.Dropdown(element, {
  popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
  }
})
"
      lang="javascript"
    />
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
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
            <td>销毁元素的实例。 （移除存储在 DOM 元素上的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>
              静态方法，用于获取与 DOM 元素关联的下拉菜单实例，可以这样使用：
              <code>bootstrap.Dropdown.getInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与 DOM 元素关联的下拉菜单实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Dropdown.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>隐藏给定导航栏或标签式导航的下拉菜单。</td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>显示给定导航栏或标签式导航的下拉菜单。</td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>切换给定导航栏或标签式导航的下拉菜单。</td>
          </tr>
          <tr>
            <td><code>update</code></td>
            <td>更新元素的下拉菜单位置。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>所有下拉菜单事件都在切换元素上触发，然后向上冒泡。因此，你也可以在 <code>.dropdown-menu</code> 的父元素上添加事件监听器。<code>hide.bs.dropdown</code> 和 <code>hidden.bs.dropdown</code> 事件有一个 <code>clickEvent</code> 属性（仅当原始 Event 类型为 <code>click</code> 时）， 其中包含点击事件的 Event 对象。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>事件类型</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hide.bs.dropdown</code></td>
            <td>当调用 <code>hide</code> 实例方法时立即触发。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.dropdown</code></td>
            <td>当下拉菜单已从用户视野中隐藏完毕且 CSS 过渡完成后触发。</td>
          </tr>
          <tr>
            <td><code>show.bs.dropdown</code></td>
            <td>当调用 <code>show</code> 实例方法时立即触发。</td>
          </tr>
          <tr>
            <td><code>shown.bs.dropdown</code></td>
            <td>当下拉菜单已对用户可见且 CSS 过渡完成后触发。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myDropdown = document.getElementById(&#39;myDropdown&#39;)
myDropdown.addEventListener(&#39;show.bs.dropdown&#39;, event =&gt; {
  // do something...
})
"
      lang="javascript"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li><a href="#accessibility">无障碍</a></li>
      <li>
        <a href="#examples">示例</a>
        <ul>
          <li><a href="#single-button">单按钮</a></li>
          <li><a href="#split-button">分割按钮</a></li>
        </ul>
      </li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#dark-dropdowns">深色下拉菜单</a></li>
      <li>
        <a href="#directions">方向</a>
        <ul>
          <li><a href="#centered">居中</a></li>
          <li><a href="#dropup">上拉菜单</a></li>
          <li><a href="#dropup-centered">上拉居中对齐</a></li>
          <li><a href="#dropend">右侧下拉菜单</a></li>
          <li><a href="#dropstart">左侧下拉菜单</a></li>
        </ul>
      </li>
      <li>
        <a href="#menu-items">菜单项</a>
        <ul>
          <li><a href="#active">激活状态</a></li>
          <li><a href="#disabled">禁用状态</a></li>
        </ul>
      </li>
      <li>
        <a href="#menu-alignment">菜单对齐</a>
        <ul>
          <li><a href="#responsive-alignment">响应式对齐</a></li>
          <li><a href="#alignment-options">对齐选项</a></li>
        </ul>
      </li>
      <li>
        <a href="#menu-content">菜单内容</a>
        <ul>
          <li><a href="#headers">标题</a></li>
          <li><a href="#dividers">分隔线</a></li>
          <li><a href="#text">文本</a></li>
          <li><a href="#forms">表单</a></li>
        </ul>
      </li>
      <li>
        <a href="#dropdown-options">下拉菜单选项</a>
        <ul>
          <li><a href="#auto-close-behavior">自动关闭行为</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixins</a></li>
        </ul>
      </li>
      <li>
        <a href="#usage">用法</a>
        <ul>
          <li><a href="#via-data-attributes">通过数据属性</a></li>
          <li><a href="#via-javascript">通过 JavaScript</a></li>
          <li><a href="#options">选项</a></li>
          <li><a href="#methods">方法</a></li>
          <li><a href="#events">事件</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
