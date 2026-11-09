<template>
  <article class="bd-content">
    <h1>导航与标签页</h1>
    <p>关于如何使用 Bootstrap 内置导航组件的文档与示例。</p>

    <h2 id="base-nav">基础导航<a class="anchor-link" href="#base-nav" aria-label="基础导航链接"></a></h2>
    <p>Bootstrap 中提供的导航共享通用标记和样式，从基础的 <code>.nav</code> 类到激活和禁用状态皆是如此。切换修饰类即可在每种样式之间切换。</p>
    <p>基础的 <code>.nav</code> 组件使用弹性盒子构建，为构建所有类型的导航组件提供了坚实的基础。它包含一些样式覆盖（用于配合列表）、一些为增大点击区域而添加的链接内边距，以及基本的禁用样式。</p>
    <Callout>
      <p>基础的 <code>.nav</code> 组件不包含任何 <code>.active</code> 状态。以下示例包含该类，主要是为了演示这个特定的类不会触发任何特殊样式。</p>
      <p>要向辅助技术传达激活状态，请使用 <code>aria-current</code> 属性——对当前页面使用 <code>page</code> 值，或对一组中的当前项使用 <code>true</code>。</p>
    </Callout>
    <Example
      code='<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <p>
      整个过程中都使用类，因此你的标记可以非常灵活。像上面一样使用 <code>&lt;ul&gt;</code>，如果项目顺序很重要则使用 <code>&lt;ol&gt;</code>，或者使用 <code>&lt;nav&gt;</code> 元素自行构建。由于 <code>.nav</code> 使用 <code>display: flex</code>，导航链接的行为与导航项相同，
      但无需额外的标记。
    </p>
    <Example
      code='<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>'
    />
    <h2 id="available-styles">可用样式<a class="anchor-link" href="#available-styles" aria-label="可用样式链接"></a></h2>
    <p>使用修饰类和工具类更改 <code>.nav</code> 组件的样式。根据需要组合搭配，或构建你自己的样式。</p>
    <h3 id="horizontal-alignment">水平对齐<a class="anchor-link" href="#horizontal-alignment" aria-label="水平对齐链接"></a></h3>
    <p>
      使用<a href="/utilities/flex#justify-content">弹性盒子工具类</a>更改导航的水平对齐。默认情况下，导航是左对齐的，但你可以轻松地将其改为居中对齐或右对齐。
    </p>
    <p>使用 <code>.justify-content-center</code> 居中：</p>
    <Example
      code='<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <p>使用 <code>.justify-content-end</code> 右对齐：</p>
    <Example
      code='<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h3 id="vertical">垂直排列<a class="anchor-link" href="#vertical" aria-label="垂直排列链接"></a></h3>
    <p>使用 <code>.flex-column</code> 工具类更改弹性项目的方向来堆叠导航。需要在某些视口下堆叠而在其他视口下不堆叠？使用响应式版本（例如 <code>.flex-sm-column</code>）。</p>
    <Example
      code='<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <p>一如既往，垂直导航也可以不使用 <code>&lt;ul&gt;</code>。</p>
    <Example
      code='<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>'
    />
    <h3 id="tabs">标签页<a class="anchor-link" href="#tabs" aria-label="标签页链接"></a></h3>
    <p>在上面的基础导航基础上添加 <code>.nav-tabs</code> 类，即可生成标签页式的界面。使用我们的<a href="#javascript-behavior">标签页 JavaScript 插件</a>创建可切换的区域。</p>
    <Example
      code='<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h3 id="pills">胶囊式标签<a class="anchor-link" href="#pills" aria-label="胶囊式标签链接"></a></h3>
    <p>使用相同的 HTML，但改用 <code>.nav-pills</code>：</p>
    <Example
      code='<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h3 id="underline">下划线<a class="anchor-link" href="#underline" aria-label="下划线链接"></a></h3>
    <p>使用相同的 HTML，但改用 <code>.nav-underline</code>：</p>
    <Example
      code='<ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h3 id="fill-and-justify">填充与均分<a class="anchor-link" href="#fill-and-justify" aria-label="填充与均分链接"></a></h3>
    <p>通过两个修饰类之一，让你的 <code>.nav</code> 内容占满可用宽度。若要按比例填满所有可用空间，请在你的 <code>.nav-item</code> 上使用 <code>.nav-fill</code>。请注意，所有水平空间都会被占用，但并非每个导航项宽度都相同。</p>
    <Example
      code='<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <p>使用基于 <code>&lt;nav&gt;</code> 的导航时，可以放心省略 <code>.nav-item</code>，因为为 <code>&lt;a&gt;</code> 元素添加样式只需 <code>.nav-link</code>。</p>
    <Example
      code='<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>'
    />
    <p>若要使各元素宽度相等，请使用 <code>.nav-justified</code>。所有水平空间都会被导航链接占用，但与上面的 <code>.nav-fill</code> 不同，每个导航项的宽度都相同。</p>
    <Example
      code='<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <p>与使用基于 <code>&lt;nav&gt;</code> 导航的 <code>.nav-fill</code> 示例类似。</p>
    <Example
      code='<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>'
    />
    <h2 id="working-with-flex-utilities">配合 Flex 工具类使用<a class="anchor-link" href="#working-with-flex-utilities" aria-label="配合 Flex 工具类使用"></a></h2>
    <p>
      如果你需要响应式的导航变体，可以考虑使用一系列
      <a href="/utilities/flex">flexbox 工具类</a>。虽然写法更冗长，但这些工具类能在各个响应式断点上提供更强的定制能力。在下面的示例中，我们的导航会在最小断点下堆叠显示，然后在小断点及以上时切换为水平布局并填满可用宽度。
    </p>
    <Example
      code='<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
</nav>'
    />
    <h2 id="regarding-accessibility">关于无障碍访问<a class="anchor-link" href="#regarding-accessibility" aria-label="关于无障碍访问"></a></h2>
    <p>
      如果你使用导航来提供导航栏，请务必为 <code>&lt;ul&gt;</code> 最合理的父容器添加 <code>role=&quot;navigation&quot;</code>，或用 <code>&lt;nav&gt;</code> 元素包裹整个导航。不要将 role 添加到 <code>&lt;ul&gt;</code> 本身，因为这会使其无法被辅助技术识别为真正的列表。
    </p>
    <p>
      请注意，导航栏即使在视觉上使用 <code>.nav-tabs</code> 类样式化为标签页，也<strong>不应</strong>添加 <code>role=&quot;tablist&quot;</code>、<code>role=&quot;tab&quot;</code> 或 <code>role=&quot;tabpanel&quot;</code> 属性。这些属性仅适用于动态标签页界面，如
      <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">ARIA 创作实践指南中的标签页模式</a>所述。本节中的动态标签页界面示例请参阅 <a href="#javascript-behavior">JavaScript 行为</a>。动态标签页界面不需要 <code>aria-current</code> 属性，因为我们的 JavaScript 会通过在活动标签页上添加 <code>aria-selected=&quot;true&quot;</code> 来处理选中状态。
    </p>
    <h2 id="using-dropdowns">使用下拉菜单<a class="anchor-link" href="#using-dropdowns" aria-label="使用下拉菜单"></a></h2>
    <p>
      添加少量额外 HTML 并配合
      <a href="/components/dropdowns#usage">下拉菜单 JavaScript 插件</a>即可使用下拉菜单。
    </p>
    <h3 id="tabs-with-dropdowns">带下拉菜单的标签页<a class="anchor-link" href="#tabs-with-dropdowns" aria-label="带下拉菜单的标签页"></a></h3>
    <Example
      code='<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h3 id="pills-with-dropdowns">带下拉菜单的胶囊导航<a class="anchor-link" href="#pills-with-dropdowns" aria-label="带下拉菜单的胶囊导航"></a></h3>
    <Example
      code='<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量"></a></h3>
    <AddedIn version="5.2.0" />
    <p>作为 Bootstrap 不断演进的 CSS 变量方案的一部分，导航现在在 <code>.nav</code>、<code>.nav-tabs</code> 和 <code>.nav-pills</code> 上使用局部 CSS 变量，以便更好地进行实时自定义。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。</p>
    <p>在 <code>.nav</code> 基类上：</p>
    <ScssDocs name="nav-css-vars" file="scss/_nav.scss" />
    <p>在 <code>.nav-tabs</code> 修饰类上：</p>
    <ScssDocs name="nav-tabs-css-vars" file="scss/_nav.scss" />
    <p>在 <code>.nav-pills</code> 修饰类上：</p>
    <ScssDocs name="nav-pills-css-vars" file="scss/_nav.scss" />
    <AddedIn version="5.3.0" />
    <p>在 <code>.nav-underline</code> 修饰类上：</p>
    <ScssDocs name="nav-underline-css-vars" file="scss/_nav.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量"></a></h3>
    <ScssDocs name="nav-variables" file="scss/_variables.scss" />
    <h2 id="javascript-behavior">JavaScript 行为<a class="anchor-link" href="#javascript-behavior" aria-label="JavaScript 行为"></a></h2>
    <p>使用标签页 JavaScript 插件——可以单独引入，或通过编译后的 <code>bootstrap.js</code> 文件引入——来扩展我们的导航标签页和胶囊导航，以创建可切换的本地内容面板。</p>
    <Example
      :showMarkup="false"
      code='
<ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"&gt;Home&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"&gt;Profile&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"&gt;Contact&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="tab-content" id="myTabContent"&gt;
  &lt;div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <p>
      为了满足你的需求，这既适用于上面展示的基于 <code>&lt;ul&gt;</code> 的标记，也适用于任意“自行定义”的标记。注意，如果你使用 <code>&lt;nav&gt;</code>，不应直接在其上添加 <code>role=&quot;tablist&quot;</code>，因为这会覆盖该元素作为导航地标（landmark）的原生角色。
      而应改用其他元素（下面示例中使用简单的 <code>&lt;div&gt;</code>），并在其外层包裹 <code>&lt;nav&gt;</code>。
    </p>
    <Example
      :showMarkup="false"
      code='
<nav>
  <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;nav&gt;
  &lt;div class="nav nav-tabs" id="nav-tab" role="tablist"&gt;
    &lt;button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"&gt;Home&lt;/button&gt;
    &lt;button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"&gt;Profile&lt;/button&gt;
    &lt;button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"&gt;Contact&lt;/button&gt;
    &lt;button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;
&lt;div class="tab-content" id="nav-tabContent"&gt;
  &lt;div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <p>标签页插件同样适用于胶囊导航。</p>
    <Example
      :showMarkup="false"
      code='
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
  </div>
  <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
    <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"&gt;Home&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"&gt;Profile&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"&gt;Contact&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="tab-content" id="pills-tabContent"&gt;
  &lt;div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <p>
      以及垂直胶囊导航。理想情况下，对于垂直标签页，还应在标签页列表容器上添加
      <code>aria-orientation=&quot;vertical&quot;</code>。
    </p>
    <Example
      :showMarkup="false"
      code='
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
      <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
      <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
    </div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
      <p>This is some placeholder content the <strong>Messages tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
      <p>This is some placeholder content the <strong>Settings tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
    </div>
  </div>
</div>
'
    />
    <CodeWrapper
      code='&lt;div class="d-flex align-items-start"&gt;
  &lt;div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical"&gt;
    &lt;button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"&gt;Home&lt;/button&gt;
    &lt;button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"&gt;Profile&lt;/button&gt;
    &lt;button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled&gt;Disabled&lt;/button&gt;
    &lt;button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"&gt;Messages&lt;/button&gt;
    &lt;button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"&gt;Settings&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="tab-content" id="v-pills-tabContent"&gt;
    &lt;div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="accessibility">无障碍访问<a class="anchor-link" href="#accessibility" aria-label="无障碍访问"></a></h3>
    <p>
      如
      <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">ARIA 创作实践指南中的标签页模式</a>所述，动态标签页界面需要 <code>role=&quot;tablist&quot;</code>、<code>role=&quot;tab&quot;</code>、<code>role=&quot;tabpanel&quot;</code> 以及其他 <code>aria-</code> 属性，以便向辅助技术（如屏幕阅读器）用户传达其结构、功能和当前状态。作为最佳实践，我们建议对标签页使用 <code>&lt;button&gt;</code> 元素，因为它们是触发动态变化的控件，而不是跳转到新页面或位置的链接。
    </p>
    <p>
      依据 ARIA 创作实践模式，只有当前活动的标签页会获得键盘焦点。JavaScript 插件初始化时，会为所有非活动标签页控件设置
      <code>tabindex=&quot;-1&quot;</code>。当当前活动标签页获得焦点后，方向键可激活上一个/下一个标签页。<kbd>Home</kbd> 和 <kbd>End</kbd> 键分别激活第一个和最后一个标签页。插件会相应地更改
      <a href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/">roving <code>tabindex</code></a>。
      但请注意，在方向键交互方面，JavaScript 插件并不区分水平与垂直的标签页列表：无论标签页列表的方向如何，向上
      <em>和</em>向左方向键都会切换到上一个标签页，向下<em>和</em>向右方向键都会切换到下一个标签页。
    </p>
    <Callout type="warning">
      <p>
        一般来说，为便于键盘导航，建议让标签页面板本身也可获得焦点，除非标签页面板内包含有意义内容的首个元素已经可以获得焦点。JavaScript 插件不会尝试处理这一方面——在适当的情况下，你需要在标记中为标签页面板添加 <code>tabindex=&quot;0&quot;</code> 以使其可获得焦点。
      </p>
    </Callout>
    <Callout type="danger">
      <p>
        标签页 JavaScript 插件<strong>不</strong>支持包含下拉菜单的标签页界面，因为这会导致可用性和无障碍访问问题。从可用性角度看，当前显示的标签页的触发元素不能立即可见（因为它位于关闭的下拉菜单中），会造成困惑。
        从无障碍访问角度看，目前没有合理的方式将这类构造映射到标准的 WAI ARIA 模式，这意味着无法轻易使辅助技术用户理解它。
      </p>
    </Callout>
    <h3 id="using-data-attributes">使用数据属性<a class="anchor-link" href="#using-data-attributes" aria-label="使用数据属性"></a></h3>
    <p>
      只需在元素上指定
      <code>data-bs-toggle=&quot;tab&quot;</code> 或 <code>data-bs-toggle=&quot;pill&quot;</code>，无需编写任何 JavaScript 即可激活标签页或胶囊导航。请在 <code>.nav-tabs</code> 或 <code>.nav-pills</code> 上使用这些数据属性。
    </p>
    <CodeWrapper
      code='&lt;!-- Nav tabs --&gt;
&lt;ul class="nav nav-tabs" id="myTab" role="tablist"&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"&gt;Home&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"&gt;Profile&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"&gt;Messages&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item" role="presentation"&gt;
    &lt;button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"&gt;Settings&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Tab panes --&gt;
&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript"></a></h3>
    <p>通过 JavaScript 启用可切换的标签页（每个标签页都需要单独激活）：</p>
    <CodeWrapper
      code="const triggerTabList = document.querySelectorAll(&#39;#myTab button&#39;)
triggerTabList.forEach(triggerEl =&gt; {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener(&#39;click&#39;, event =&gt; {
    event.preventDefault()
    tabTrigger.show()
  })
})
"
      lang="javascript"
    />
    <p>你可以通过多种方式激活单个标签页：</p>
    <CodeWrapper
      code='const triggerEl = document.querySelector(&#39;#myTab button[data-bs-target="#profile"]&#39;)
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector(&#39;#myTab li:first-child button&#39;)
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
'
      lang="javascript"
    />
    <h3 id="fade-effect">淡入效果<a class="anchor-link" href="#fade-effect" aria-label="淡入效果"></a></h3>
    <p>若要为标签页添加淡入效果，请为每个 <code>.tab-pane</code> 添加 <code>.fade</code>。第一个标签页面板还必须包含 <code>.show</code>，以使初始内容可见。</p>
    <CodeWrapper
      code='&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>将你的内容激活为标签页元素。</p>
    <p>你可以使用构造函数创建标签页实例，例如：</p>
    <CodeWrapper
      code="const bsTab = new bootstrap.Tab(&#39;#myTab&#39;)
"
      lang="javascript"
    />
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
            <td>销毁元素的标签页实例。</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>静态方法，允许你获取与 DOM 元素关联的标签页实例，可以这样使用：<code>bootstrap.Tab.getInstance(element)</code>。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
              <td>
                静态方法，返回与 DOM 元素关联的标签页实例，若未初始化则创建一个新实例。可以这样使用：
                <code>bootstrap.Tab.getOrCreateInstance(element)</code>。
              </td>
            </tr>
            <tr>
              <td><code>show</code></td>
              <td>
                选中指定的标签页并显示其关联面板。之前选中的其他标签页将变为未选中状态，其关联面板将被隐藏。
                <strong>在标签页面板实际显示之前</strong>（即 <code>shown.bs.tab</code> 事件发生之前）<strong>就会返回给调用方</strong>。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件"></a></h3>
      <p>显示新标签页时，事件按以下顺序触发：</p>
      <ol>
        <li><code>hide.bs.tab</code>（在当前活动标签页上）</li>
        <li><code>show.bs.tab</code>（在即将显示的标签页上）</li>
        <li><code>hidden.bs.tab</code>（在之前活动的标签页上，与 <code>hide.bs.tab</code> 事件的对象相同）</li>
        <li><code>shown.bs.tab</code>（在刚刚显示的新活动标签页上，与 <code>show.bs.tab</code> 事件的对象相同）</li>
      </ol>
      <p>如果此前没有活动标签页，则不会触发 <code>hide.bs.tab</code> 和 <code>hidden.bs.tab</code> 事件。</p>
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
              <td><code>hide.bs.tab</code></td>
              <td>
                在即将显示新标签页（因而要隐藏之前的活动标签页）时触发。分别使用
                <code>event.target</code> 和 <code>event.relatedTarget</code> 来定位当前活动标签页和即将变为活动状态的标签页。
              </td>
            </tr>
            <tr>
              <td><code>hidden.bs.tab</code></td>
              <td>
                在显示新标签页（因而隐藏之前的活动标签页）之后触发。分别使用
                <code>event.target</code> 和 <code>event.relatedTarget</code> 来定位之前的活动标签页和新的活动标签页。
              </td>
            </tr>
            <tr>
              <td><code>show.bs.tab</code></td>
              <td>在标签页显示时、新标签页显示之前触发。分别使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 来定位活动标签页和之前的活动标签页（如果存在）。</td>
            </tr>
            <tr>
              <td><code>shown.bs.tab</code></td>
              <td>在标签页显示之后触发。分别使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 来定位活动标签页和之前的活动标签页（如果存在）。</td>
            </tr>
          </tbody>
        </table>
      </div>
    <CodeWrapper
      code='const tabEl = document.querySelector(&#39;button[data-bs-toggle="tab"]&#39;)
tabEl.addEventListener(&#39;shown.bs.tab&#39;, event =&gt; {
  event.target // newly activated tab
  event.relatedTarget // previous active tab
})
'
      lang="javascript"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#base-nav">基础导航</a></li>
      <li>
        <a href="#available-styles">可用样式</a>
        <ul>
          <li><a href="#horizontal-alignment">水平对齐</a></li>
          <li><a href="#vertical">垂直方向</a></li>
          <li><a href="#tabs">标签页</a></li>
          <li><a href="#pills">胶囊导航</a></li>
          <li><a href="#underline">下划线</a></li>
          <li><a href="#fill-and-justify">填充与均分</a></li>
        </ul>
      </li>
      <li><a href="#working-with-flex-utilities">配合 Flex 工具类使用</a></li>
      <li><a href="#regarding-accessibility">关于无障碍访问</a></li>
      <li>
        <a href="#using-dropdowns">使用下拉菜单</a>
        <ul>
          <li><a href="#tabs-with-dropdowns">带下拉菜单的标签页</a></li>
          <li><a href="#pills-with-dropdowns">带下拉菜单的胶囊导航</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
      <li>
        <a href="#javascript-behavior">JavaScript 行为</a>
        <ul>
          <li><a href="#accessibility">无障碍访问</a></li>
          <li><a href="#using-data-attributes">使用数据属性</a></li>
          <li><a href="#via-javascript">通过 JavaScript</a></li>
          <li><a href="#fade-effect">淡入效果</a></li>
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
