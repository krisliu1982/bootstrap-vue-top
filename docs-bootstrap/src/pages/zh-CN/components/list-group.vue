<template>
  <article class="bd-content">
    <h1>列表组</h1>
    <p>列表组是一个灵活而强大的组件，用于显示一系列内容。你可以修改和扩展它们，以支持几乎任意类型的内容。</p>

    <h2 id="basic-example">基本示例<a class="anchor-link" href="#basic-example" aria-label="基本示例链接"></a></h2>
    <p>最基本的列表组是一个带有列表项和相应类的无序列表。可以使用后续介绍的选项，或根据需要配合你自己的 CSS 来扩展它。</p>
    <Example
      code='<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>'
    />
    <h2 id="active-items">激活项<a class="anchor-link" href="#active-items" aria-label="激活项链接"></a></h2>
    <p>为 <code>.list-group-item</code> 添加 <code>.active</code>，以表示当前激活的选中项。</p>
    <Example
      code='<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>'
    />
    <h2 id="links-and-buttons">链接与按钮<a class="anchor-link" href="#links-and-buttons" aria-label="链接与按钮链接"></a></h2>
    <p>
      使用 <code>&lt;a&gt;</code> 或 <code>&lt;button&gt;</code> 并通过添加 <code>.list-group-item-action</code> 来创建具有悬停、禁用和激活状态的<em>可交互</em>列表组项。我们将这些伪类分开，以确保由非交互式元素（如 <code>&lt;li&gt;</code> 或 <code>&lt;div&gt;</code>）构成的列表组
      不会提供可点击或轻触的提示。
    </p>
    <p>通过添加 <code>.disabled</code> 和 <code>aria-disabled=&quot;true&quot;</code> 使 <code>.list-group-item-action</code> 实例<em>看起来</em>处于禁用状态，并告知辅助技术该元素已被禁用。你可能需要额外的 JavaScript 才能完全禁用链接和按钮。</p>
    <p>
      请务必<strong>不要在此处使用标准的 <code>.btn</code> 类</strong>。
    </p>
    <Example
      code='<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
</div>'
    />
    <p>使用 <code>&lt;button&gt;</code> 时，你还可以使用 <code>disabled</code> 属性来代替 <code>.disabled</code> 类。遗憾的是，<code>&lt;a&gt;</code> 不支持 disabled 属性。</p>
    <Example
      code='<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second button item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>'
    />
    <h2 id="flush">无边框<a class="anchor-link" href="#flush" aria-label="无边框链接"></a></h2>
    <p>添加 <code>.list-group-flush</code> 可移除部分边框和圆角，使列表组项在父容器（例如卡片）中紧贴边缘显示。</p>
    <Example
      code='<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>'
    />
    <h2 id="numbered">带编号<a class="anchor-link" href="#numbered" aria-label="带编号链接"></a></h2>
    <p>添加 <code>.list-group-numbered</code> 修饰类（并可选地使用 <code>&lt;ol&gt;</code> 元素），即可启用带编号的列表组项。编号通过 CSS 生成（而非 <code>&lt;ol&gt;</code> 的浏览器默认样式），以便在列表组项内更好地定位，并实现更好的自定义。</p>
    <p>编号通过在 <code>&lt;ol&gt;</code> 上设置 <code>counter-reset</code> 生成，然后通过 <code>counter-increment</code> 和 <code>content</code> 在 <code>&lt;li&gt;</code> 上使用 <code>::before</code> 伪元素进行样式设置和定位。</p>
    <Example
      code='<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>'
    />
    <p>它们与自定义内容配合也很出色。</p>
    <Example
      code='<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>'
    />
    <h2 id="horizontal">水平排列<a class="anchor-link" href="#horizontal" aria-label="水平排列链接"></a></h2>
    <p>
      在所有断点下添加 <code>.list-group-horizontal</code> 可将列表组项的布局从垂直改为水平。或者，选择响应式变体 <code>.list-group-horizontal-{sm|md|lg|xl|xxl}</code> 使列表组从该断点的 <code>min-width</code> 开始水平排列。目前
      <strong>水平列表组不能与无边框列表组（flush）组合使用。</strong>
    </p>
    <p><strong>专业提示：</strong>希望在水平排列时让列表组项等宽？为每个列表组项添加 <code>.flex-fill</code>。</p>
    <Example
      :code="
        data['breakpoints']
          .map(
            (breakpoint) => `<ul class=&quot;list-group list-group-horizontal${breakpoint.abbr}&quot;>
  <li class=&quot;list-group-item&quot;>An item</li>
  <li class=&quot;list-group-item&quot;>A second item</li>
  <li class=&quot;list-group-item&quot;>A third item</li>
</ul>`
          )
          .join('\n')
      "
    />
    <h2 id="variants">变体<a class="anchor-link" href="#variants" aria-label="变体链接"></a></h2>
    <Callout>
      <p><strong>注意！</strong>自 v5.3.0 起，<code>list-group-item-variant()</code> Sass mixin 已弃用。列表组项变体现在通过<a href="#sass-loops">一个 Sass 循环</a>覆盖其 CSS 变量。</p>
    </Callout>
    <p>使用上下文类为列表项设置带有状态背景和颜色的样式。</p>
    <Example
      :code="
        [
          `<ul class=&quot;list-group&quot;>
  <li class=&quot;list-group-item&quot;>A simple default list group item</li>
    `,
          ...data['theme-colors'].map((themeColor) => `  <li class=&quot;list-group-item list-group-item-${themeColor.name}&quot;>A simple ${themeColor.name} list group item</li>`),
          `</ul>`
        ].join('\n')
      "
    />
    <h3 id="for-links-and-buttons">用于链接和按钮<a class="anchor-link" href="#for-links-and-buttons" aria-label="用于链接和按钮链接"></a></h3>
    <p>
      上下文类也适用于 <code>&lt;a&gt;</code> 和 <code>&lt;button&gt;</code> 元素的 <code>.list-group-item-action</code>。请注意这里新增了前一个示例中没有的悬停样式。同样支持 <code>.active</code> 状态；应用它来表示上下文列表组项上的激活选中状态。
    </p>
    <Example
      :code="
        [
          `<div class=&quot;list-group&quot;>
  <a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action&quot;>A simple default list group item</a>
    `,
          ...data['theme-colors'].map((themeColor) => `  <a href=&quot;#&quot; class=&quot;list-group-item list-group-item-action list-group-item-${themeColor.name}&quot;>A simple ${themeColor.name} list group item</a>`),
          `</div>`
        ].join('\n')
      "
    /><Callout name="warning-color-assistive-technologies" />
    <h2 id="with-badges">带徽章<a class="anchor-link" href="#with-badges" aria-label="带徽章链接"></a></h2>
    <p>
      借助一些<a href="/utilities/flex">工具类</a>为任何列表组项添加徽章，以显示未读数量、活动状态等。
    </p>
    <Example
      code='<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge text-bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge text-bg-primary rounded-pill">1</span>
  </li>
</ul>'
    />
    <h2 id="custom-content">自定义内容<a class="anchor-link" href="#custom-content" aria-label="自定义内容链接"></a></h2>
    <p>
      借助<a href="/utilities/flex">弹性盒子工具类</a>，你几乎可以在其中添加任意 HTML，即使是像下面这样的链接列表组。
    </p>
    <Example
      code='<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
</div>'
    />
    <h2 id="checkboxes-and-radios">复选框与单选按钮<a class="anchor-link" href="#checkboxes-and-radios" aria-label="复选框与单选按钮链接"></a></h2>
    <p>
      将 Bootstrap 的复选框和单选按钮放在列表组项中，并根据需要自定义。你可以在不搭配
      <code>&lt;label&gt;</code> 的情况下使用它们，但请记得为无障碍添加 <code>aria-label</code> 属性及其值。
    </p>
    <Example
      code='<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>'
    /><Example
      code='<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>'
    />
    <p>你可以在 <code>&lt;label&gt;</code> 上使用 <code>.stretched-link</code>，使整个列表组项都可点击。</p>
    <Example
      code='<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
    <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
    <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，列表组现在在
      <code>.list-group</code> 上使用局部 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此依然支持 Sass 自定义。
    </p>
    <ScssDocs name="list-group-css-vars" file="scss/_list-group.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="list-group-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixins 链接"></a></h3>
    <DeprecatedIn version="5.3.0" /><ScssDocs name="list-group-mixin" file="scss/mixins/_list-group.scss" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p>生成修饰类并覆盖 CSS 变量的循环。</p>
    <ScssDocs name="list-group-modifiers" file="scss/_list-group.scss" />
    <h2 id="javascript-behavior">JavaScript 行为<a class="anchor-link" href="#javascript-behavior" aria-label="JavaScript 行为链接"></a></h2>
    <p>使用标签页 JavaScript 插件——单独引入它，或通过编译后的 <code>bootstrap.js</code> 文件引入——来扩展我们的列表组，创建可切换的本地内容面板。</p>
    <div class="bd-example" role="tabpanel">
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
              <p>一段与 “Home” 相关的占位段落。还有一些额外内容，仅用于填充这个标签页面板。在生产环境中，你显然会有更多真实内容，而且不仅仅是文本。它可以是任何东西，真的。文本、图片、表单。</p>
            </div>
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
              <p>一段与 “Profile” 相关的占位段落。还有一些额外内容，仅用于填充这个标签页面板。在生产环境中，你显然会有更多真实内容，而且不仅仅是文本。它可以是任何东西，真的。文本、图片、表单。</p>
            </div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
              <p>一段与 “Messages” 相关的占位段落。还有一些额外内容，仅用于填充这个标签页面板。在生产环境中，你显然会有更多真实内容，而且不仅仅是文本。它可以是任何东西，真的。文本、图片、表单。</p>
            </div>
            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
              <p>一段与 “Settings” 相关的占位段落。还有一些额外内容，仅用于填充这个标签页面板。在生产环境中，你显然会有更多真实内容，而且不仅仅是文本。它可以是任何东西，真的。文本、图片、表单。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CodeWrapper
      code='&lt;div class="row"&gt;
  &lt;div class="col-4"&gt;
    &lt;div class="list-group" id="list-tab" role="tablist"&gt;
      &lt;a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"&gt;Home&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"&gt;Profile&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"&gt;Messages&lt;/a&gt;
      &lt;a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"&gt;Settings&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-8"&gt;
    &lt;div class="tab-content" id="nav-tabContent"&gt;
      &lt;div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"&gt;...&lt;/div&gt;
      &lt;div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"&gt;...&lt;/div&gt;
      &lt;div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"&gt;...&lt;/div&gt;
      &lt;div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"&gt;...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="using-data-attributes">使用数据属性<a class="anchor-link" href="#using-data-attributes" aria-label="使用数据属性链接"></a></h3>
    <p>
      你只需在元素上指定 <code>data-bs-toggle=&quot;list&quot;</code>，无需编写任何 JavaScript 即可激活列表组导航。在 <code>.list-group-item</code> 上使用这些数据属性。
    </p>
    <CodeWrapper
      code='&lt;div role="tabpanel"&gt;
  &lt;!-- List group --&gt;
  &lt;div class="list-group" id="myList" role="tablist"&gt;
    &lt;a class="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab"&gt;Home&lt;/a&gt;
    &lt;a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#profile" role="tab"&gt;Profile&lt;/a&gt;
    &lt;a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#messages" role="tab"&gt;Messages&lt;/a&gt;
    &lt;a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#settings" role="tab"&gt;Settings&lt;/a&gt;
  &lt;/div&gt;

  &lt;!-- Tab panes --&gt;
  &lt;div class="tab-content"&gt;
    &lt;div class="tab-pane active" id="home" role="tabpanel"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane" id="profile" role="tabpanel"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane" id="messages" role="tabpanel"&gt;...&lt;/div&gt;
    &lt;div class="tab-pane" id="settings" role="tabpanel"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <p>通过 JavaScript 启用可切换的列表项（每个列表项都需要单独激活）：</p>
    <CodeWrapper
      code="const triggerTabList = document.querySelectorAll(&#39;#myTab a&#39;)
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
    <p>你可以通过多种方式激活单个列表项：</p>
    <CodeWrapper
      code='const triggerEl = document.querySelector(&#39;#myTab a[href="#profile"]&#39;)
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector(&#39;#myTab li:first-child a&#39;)
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
'
      lang="javascript"
    />
    <h3 id="fade-effect">淡入效果<a class="anchor-link" href="#fade-effect" aria-label="淡入效果链接"></a></h3>
    <p>要使标签页面板淡入，请为每个 <code>.tab-pane</code> 添加 <code>.fade</code>。第一个标签页面板还必须带有 <code>.show</code>，以使初始内容可见。</p>
    <CodeWrapper
      code='&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="home" role="tabpanel"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="profile" role="tabpanel"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="messages" role="tabpanel"&gt;...&lt;/div&gt;
  &lt;div class="tab-pane fade" id="settings" role="tabpanel"&gt;...&lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>将你的内容作为标签页元素激活。</p>
    <p>你可以使用构造函数创建标签页实例，例如：</p>
    <CodeWrapper code="const bsTab = new bootstrap.Tab(&#39;#myTab&#39;)" lang="javascript" />
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
            <td>销毁元素的标签页。</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>静态方法，用于获取与 DOM 元素关联的标签页实例，可以这样使用：<code>bootstrap.Tab.getInstance(element)</code>。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与 DOM 元素关联的标签页实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Tab.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              选中给定的标签页并显示其关联的面板。之前选中的其他任何标签页都将变为未选中状态，其关联的面板将被隐藏。
              <strong>在标签页面板实际显示之前就返回给调用者</strong>（即 <code>shown.bs.tab</code> 事件发生之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>显示新标签页时，事件按以下顺序触发：</p>
    <ol>
      <li><code>hide.bs.tab</code>（在当前激活的标签页上）</li>
      <li><code>show.bs.tab</code>（在将要显示的标签页上）</li>
      <li><code>hidden.bs.tab</code>（在之前激活的标签页上，与 <code>hide.bs.tab</code> 事件为同一个）</li>
      <li><code>shown.bs.tab</code>（在新激活、刚刚显示的标签页上，与 <code>show.bs.tab</code> 事件为同一个）</li>
    </ol>
    <p>如果此前没有已激活的标签页，则不会触发 <code>hide.bs.tab</code> 和 <code>hidden.bs.tab</code> 事件。</p>
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
              当即将显示新标签页（因此之前的激活标签页即将隐藏）时触发此事件。分别使用
              <code>event.target</code> 和 <code>event.relatedTarget</code> 定位当前激活的标签页和即将激活的新标签页。
            </td>
          </tr>
          <tr>
            <td><code>hidden.bs.tab</code></td>
            <td>
              此事件在新标签页显示后（因此之前的激活标签页被隐藏）触发。分别使用
              <code>event.target</code> 和 <code>event.relatedTarget</code> 定位之前的激活标签页和新的激活标签页。
            </td>
          </tr>
          <tr>
            <td><code>show.bs.tab</code></td>
            <td>此事件在标签页显示时触发，但在新标签页显示之前。分别使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 定位激活的标签页和之前的激活标签页（如果存在）。</td>
          </tr>
          <tr>
            <td><code>shown.bs.tab</code></td>
            <td>此事件在标签页显示之后触发。分别使用 <code>event.target</code> 和 <code>event.relatedTarget</code> 定位激活的标签页和之前的激活标签页（如果存在）。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code='const tabElms = document.querySelectorAll(&#39;a[data-bs-toggle="list"]&#39;)
tabElms.forEach(tabElm =&gt; {
  tabElm.addEventListener(&#39;shown.bs.tab&#39;, event =&gt; {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
  })
})
'
      lang="javascript"
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#basic-example">基本示例</a></li>
      <li><a href="#active-items">激活项</a></li>
      <li><a href="#links-and-buttons">链接与按钮</a></li>
      <li><a href="#flush">无边框</a></li>
      <li><a href="#numbered">带编号</a></li>
      <li><a href="#horizontal">水平排列</a></li>
      <li>
        <a href="#variants">变体</a>
        <ul>
          <li><a href="#for-links-and-buttons">用于链接和按钮</a></li>
        </ul>
      </li>
      <li><a href="#with-badges">带徽章</a></li>
      <li><a href="#custom-content">自定义内容</a></li>
      <li><a href="#checkboxes-and-radios">复选框与单选按钮</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixins</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
        </ul>
      </li>
      <li>
        <a href="#javascript-behavior">JavaScript 行为</a>
        <ul>
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

import data from '@/data/data.js';
</script>
