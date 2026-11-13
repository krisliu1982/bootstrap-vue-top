<template>
  <article class="bd-content" data-pagefind-body>
    <h1>模态框</h1>
    <p class="lead">使用 Bootstrap 的 JavaScript 模态框插件为你的站点添加对话框，用于灯箱、用户通知或完全自定义的内容。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <p>在开始使用 Bootstrap 的模态框组件之前，请务必阅读以下内容，因为我们的菜单选项最近有所变化。</p>
    <ul>
      <li>模态框由 HTML、CSS 和 JavaScript 构建。它们定位在文档中其他所有内容之上，并移除 <code>&lt;body&gt;</code> 的滚动，以便改为滚动模态框内容。</li>
      <li>点击模态框的“背景遮罩”将自动关闭模态框。</li>
      <li>Bootstrap 一次只支持一个模态框窗口。不支持嵌套模态框，因为我们认为其用户体验不佳。</li>
      <li>模态框使用 <code>position: fixed</code>，其渲染有时会比较特殊。请尽可能将模态框 HTML 放在顶层位置，以避免其他元素的潜在干扰。在另一个 fixed 元素中嵌套 <code>.modal</code> 时，你很可能会遇到问题。</li>
      <li>同样，由于 <code>position: fixed</code>，在移动设备上使用模态框存在一些注意事项。 详情请<a href="/getting-started/browsers-devices#modals-and-dropdowns-on-mobile">参阅浏览器支持文档</a>。</li>
      <li>
        由于 HTML5 定义其语义的方式，
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus"><code>autofocus</code> HTML 属性</a>
        在 Bootstrap 模态框中不起作用。要达到相同的效果，请使用一些自定义 JavaScript：
      </li>
    </ul>
    <CodeWrapper
      code="const myModal = document.getElementById(&#39;myModal&#39;)
const myInput = document.getElementById(&#39;myInput&#39;)

myModal.addEventListener(&#39;shown.bs.modal&#39;, () =&gt; {
  myInput.focus()
})
"
      lang="javascript"
    />
    <Callout name="info-prefersreducedmotion" />
    <p>继续阅读以了解演示和用法指南。</p>
    <h2 id="examples">示例<a class="anchor-link" href="#examples" aria-label="示例链接"></a></h2>
    <h3 id="modal-components">模态框组件<a class="anchor-link" href="#modal-components" aria-label="模态框组件链接"></a></h3>
    <p>下面是一个<em>静态</em>模态框示例（即其 <code>position</code> 和 <code>display</code> 已被覆盖）。其中包含模态框头部、模态框主体（<code>padding</code> 所需）和模态框页脚（可选）。我们建议你尽可能为模态框头部添加关闭操作，或提供另一种明确的 关闭操作。</p>
    <div class="bd-example bg-body-tertiary border rounded-3 p-3 mb-3">
      <div class="modal position-static d-block" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">模态框标题</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
            </div>
            <div class="modal-body">
              <p>模态框正文文本放在这里。</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary">保存更改</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CodeWrapper
      code='&lt;div class="modal" tabindex="-1"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title"&gt;Modal title&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        &lt;p&gt;Modal body text goes here.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <Callout>
      <p>在上面的静态示例中，我们使用 <code>&lt;h5&gt;</code>，以避免文档页面中标题层级的问题。不过，从结构上讲，模态框对话框代表其自身独立的文档/上下文，因此 <code>.modal-title</code> 理想情况下应为 <code>&lt;h1&gt;</code>。如有必要，你可以使用 <a href="/utilities/text#font-size">字体大小工具类</a>控制标题的外观。下面所有实时示例均采用此方法。</p>
    </Callout>
    <h3 id="live-demo">实时演示<a class="anchor-link" href="#live-demo" aria-label="实时演示链接"></a></h3>
    <p>点击下面的按钮来切换一个可用的模态框演示。它将从页面顶部滑下并淡入。</p>
    <div class="modal fade" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLiveLabel">模态框标题</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">
            <p>哇哈，你正在模态框中阅读这段文字！</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存更改</button>
          </div>
        </div>
      </div>
    </div>
    <Example
      :showMarkup="false"
      code='
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLive">Launch demo modal</button>
    '
    />
    <CodeWrapper
      code='&lt;!-- Button trigger modal --&gt;
&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"&gt;
  Launch demo modal
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h1 class="modal-title fs-5" id="exampleModalLabel"&gt;Modal title&lt;/h1&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        ...
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="static-backdrop">静态背景<a class="anchor-link" href="#static-backdrop" aria-label="静态背景链接"></a></h3>
    <p>当背景遮罩设置为 static 时，点击模态框外部不会关闭模态框。点击下面的按钮试试看。</p>
    <div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLiveLabel">模态框标题</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">
            <p>即使你在外部点击，我也不会关闭。连按 Esc 键也别想试。</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">明白</button>
          </div>
        </div>
      </div>
    </div>
    <Example
      :showMarkup="false"
      code='
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">Launch static backdrop modal</button>
    '
    />
    <CodeWrapper
      code='&lt;!-- Button trigger modal --&gt;
&lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"&gt;
  Launch static backdrop modal
&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h1 class="modal-title fs-5" id="staticBackdropLabel"&gt;Modal title&lt;/h1&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        ...
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Understood&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="scrolling-long-content">滚动长内容<a class="anchor-link" href="#scrolling-long-content" aria-label="滚动长内容链接"></a></h3>
    <p>当模态框内容对用户视口或设备来说过长时，它们会独立于页面本身滚动。试试下面的演示来了解我们的意思。</p>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLongTitle">模态框标题</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body" style="min-height: 100vh">
            <p>这是一些占位内容，用于展示模态框的滚动行为。我们没有在模态框中重复文本，而是使用内联样式设置最小高度，从而延长整个模态框的长度并演示溢出滚动。当内容变得比视口高度更长时，滚动将 按需移动模态框。</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存更改</button>
          </div>
        </div>
      </div>
    </div>
    <Example
      :showMarkup="false"
      code='
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Launch demo modal</button>
    '
    />
    <p>你还可以在 <code>.modal-dialog</code> 上添加 <code>.modal-dialog-scrollable</code>，创建允许滚动模态框主体的可滚动模态框。</p>
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalScrollableTitle">模态框标题</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">
            <p>这是一些占位内容，用于展示模态框的滚动行为。我们使用重复的换行来演示内容如何超出最小内部高度，从而显示内部滚动。当内容变得比模态框预定义的最大高度更长时，内容将被裁剪并可在模态框内滚动。</p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <p>滚动后，此内容应出现在底部。</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存更改</button>
          </div>
        </div>
      </div>
    </div>
    <Example
      :showMarkup="false"
      code='
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">Launch demo modal</button>
    '
    />
    <CodeWrapper
      code='&lt;!-- Scrollable modal --&gt;
&lt;div class="modal-dialog modal-dialog-scrollable"&gt;
  ...
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="vertically-centered">垂直居中<a class="anchor-link" href="#vertically-centered" aria-label="垂直居中链接"></a></h3>
    <p>在 <code>.modal-dialog</code> 上添加 <code>.modal-dialog-centered</code>，使模态框垂直居中。</p>
    <Example
      :showMarkup="false"
      code='<div class="modal fade" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalCenterTitle">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is a vertically centered modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is some placeholder content to show a vertically centered modal. We’ve added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>Just like that.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Vertically centered modal</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">Vertically centered scrollable modal</button>'
    />
    <CodeWrapper
      code='&lt;!-- Vertically centered modal --&gt;
&lt;div class="modal-dialog modal-dialog-centered"&gt;
  ...
&lt;/div&gt;

&lt;!-- Vertically centered scrollable modal --&gt;
&lt;div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"&gt;
  ...
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="tooltips-and-popovers">工具提示与弹出框<a class="anchor-link" href="#tooltips-and-popovers" aria-label="工具提示与弹出框链接"></a></h3>
    <p><a href="/components/tooltips">工具提示</a>和<a href="/components/popovers">弹出框</a>可以根据需要放置在模态框内。当模态框关闭时，其中的任何工具提示和弹出框也会自动消失。</p>
    <Example
      :showMarkup="false"
      code='<div class="modal fade" id="exampleModalPopovers" tabindex="-1" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalPopoversLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 class="fs-5">Popover in a modal</h2>
              <p>This <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute." data-bs-container="#exampleModalPopovers">button</button> triggers a popover on click.</p>
              <hr>
              <h2 class="fs-5">Tooltips in a modal</h2>
              <p><a href="#" data-bs-toggle="tooltip" title="Tooltip" data-bs-container="#exampleModalPopovers">This link</a>and<a href="#" data-bs-toggle="tooltip" title="Tooltip" data-bs-container="#exampleModalPopovers">that link</a>have tooltips on hover.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPopovers">Launch demo modal</button>'
    />
    <CodeWrapper
      code='&lt;div class="modal-body"&gt;
  &lt;h2 class="fs-5"&gt;Popover in a modal&lt;/h2&gt;
  &lt;p&gt;This &lt;button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute."&gt;button&lt;/button&gt; triggers a popover on click.&lt;/p&gt;
  &lt;hr&gt;
  &lt;h2 class="fs-5"&gt;Tooltips in a modal&lt;/h2&gt;
  &lt;p&gt;&lt;a href="#" data-bs-toggle="tooltip" title="Tooltip"&gt;This link&lt;/a&gt; and &lt;a href="#" data-bs-toggle="tooltip" title="Tooltip"&gt;that link&lt;/a&gt; have tooltips on hover.&lt;/p&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="using-the-grid">使用栅格<a class="anchor-link" href="#using-the-grid" aria-label="使用栅格链接"></a></h3>
    <p>在模态框中使用 Bootstrap 栅格系统：在 <code>.modal-body</code> 中嵌套 <code>.container-fluid</code>。然后，像在其他任何地方一样使用常规的栅格系统类。</p>
    <div class="modal fade" id="gridSystemModal" tabindex="-1" aria-labelledby="gridModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="gridModalLabel">模态框中的栅格</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid bd-example-row">
              <div class="row">
                <div class="col-md-4">.col-md-4</div>
                <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
              </div>
              <div class="row">
                <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
              </div>
              <div class="row">
                <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
              </div>
              <div class="row">
                <div class="col-sm-9">
                  第 1 层：.col-sm-9
                  <div class="row">
                    <div class="col-8 col-sm-6">第 2 层：.col-8 .col-sm-6</div>
                    <div class="col-4 col-sm-6">第 2 层：.col-4 .col-sm-6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存更改</button>
          </div>
        </div>
      </div>
    </div>
    <Example
      :showMarkup="false"
      code='
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gridSystemModal">Launch demo modal</button>
    '
    />
    <CodeWrapper
      code='&lt;div class="modal-body"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-4"&gt;.col-md-4&lt;/div&gt;
      &lt;div class="col-md-4 ms-auto"&gt;.col-md-4 .ms-auto&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-3 ms-auto"&gt;.col-md-3 .ms-auto&lt;/div&gt;
      &lt;div class="col-md-2 ms-auto"&gt;.col-md-2 .ms-auto&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-md-6 ms-auto"&gt;.col-md-6 .ms-auto&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="row"&gt;
      &lt;div class="col-sm-9"&gt;
        Level 1: .col-sm-9
        &lt;div class="row"&gt;
          &lt;div class="col-8 col-sm-6"&gt;
            Level 2: .col-8 .col-sm-6
          &lt;/div&gt;
          &lt;div class="col-4 col-sm-6"&gt;
            Level 2: .col-4 .col-sm-6
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="varying-modal-content">变化模态框内容<a class="anchor-link" href="#varying-modal-content" aria-label="变化模态框内容链接"></a></h3>
    <p>
      有一堆按钮都触发同一个模态框，但内容略有不同？使用
      <code>event.relatedTarget</code> 和
      <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">HTML <code>data-bs-*</code> 属性</a>
      根据点击的按钮来改变模态框的内容。
    </p>
    <p>下面是一个实时演示，随后是示例 HTML 和 JavaScript。更多关于 <code>relatedTarget</code> 的信息，请 <a href="#events">阅读模态框事件文档</a>。</p>
    <Example
      addStackblitzJs
      code='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>'
    />
    <JsDocs name="varying-modal-content" file="site/src/assets/partials/snippets.js" />
    <h3 id="toggle-between-modals">在模态框之间切换<a class="anchor-link" href="#toggle-between-modals" aria-label="在模态框之间切换链接"></a></h3>
    <p>通过对 <code>data-bs-target</code> 和 <code>data-bs-toggle</code> 属性进行一些巧妙的放置，可在多个模态框之间切换。例如，你可以在已打开的登录模态框中切换出密码重置模态框。<strong>请注意，多个模态框不能同时打开</strong>——此方法只是在 两个独立的模态框之间切换。</p>
    <Example
      code='<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>'
    />
    <h3 id="change-animation">更改动画<a class="anchor-link" href="#change-animation" aria-label="更改动画链接"></a></h3>
    <p><code>$modal-fade-transform</code> 变量决定模态框淡入动画之前 <code>.modal-dialog</code> 的变换状态，<code>$modal-show-transform</code> 变量决定模态框淡入动画结束时 <code>.modal-dialog</code> 的变换。</p>
    <p>例如，如果你想要缩放（zoom-in）动画，可以设置 <code>$modal-fade-transform: scale(.8)</code>。</p>
    <h3 id="remove-animation">移除动画<a class="anchor-link" href="#remove-animation" aria-label="移除动画链接"></a></h3>
    <p>对于只是直接出现而非淡入的模态框，请从模态框标记中移除 <code>.fade</code> 类。</p>
    <CodeWrapper
      code='&lt;div class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true"&gt;
  ...
&lt;/div&gt;'
      lang="html"
    />
    <h3 id="dynamic-heights">动态高度<a class="anchor-link" href="#dynamic-heights" aria-label="动态高度链接"></a></h3>
    <p>如果模态框在打开状态时高度发生变化，你应该调用 <code>myModal.handleUpdate()</code> 重新调整模态框的位置，以防出现滚动条。</p>
    <h3 id="accessibility">无障碍<a class="anchor-link" href="#accessibility" aria-label="无障碍链接"></a></h3>
    <p>请务必为 <code>.modal</code> 添加引用模态框标题的 <code>aria-labelledby=&quot;...&quot;</code>。此外，你还可以在 <code>.modal</code> 上使用 <code>aria-describedby</code> 为模态框对话框提供描述。请注意，你无需添加 <code>role=&quot;dialog&quot;</code>，因为我们已通过 JavaScript 添加了它。</p>
    <h3 id="embedding-youtube-videos">嵌入 YouTube 视频<a class="anchor-link" href="#embedding-youtube-videos" aria-label="嵌入 YouTube 视频链接"></a></h3>
    <p>在模态框中嵌入 YouTube 视频需要 Bootstrap 之外的额外 JavaScript 才能自动停止播放等。 更多信息请<a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">参阅这篇有用的 Stack Overflow 帖子</a>。</p>
    <h2 id="optional-sizes">可选尺寸<a class="anchor-link" href="#optional-sizes" aria-label="可选尺寸链接"></a></h2>
    <p>模态框有四种可选尺寸，可通过修饰类放置在 <code>.modal-dialog</code> 上。这些尺寸会在特定断点下生效，以避免在较窄的视口中出现水平滚动条。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>尺寸</th>
            <th>类</th>
            <th>模态框最大宽度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>小</td>
            <td><code>.modal-sm</code></td>
            <td><code>300px</code></td>
          </tr>
          <tr>
            <td>默认</td>
            <td><span class="text-body-secondary">无</span></td>
            <td><code>500px</code></td>
          </tr>
          <tr>
            <td>大</td>
            <td><code>.modal-lg</code></td>
            <td><code>800px</code></td>
          </tr>
          <tr>
            <td>超大</td>
            <td><code>.modal-xl</code></td>
            <td><code>1140px</code></td>
          </tr>
          <tr>
            <td>超超大</td>
            <td><code>.modal-xxl</code></td>
            <td><code>1320px</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>未加修饰类的默认模态框构成“中等”尺寸模态框。</p>
    <Example
      :showMarkup="false"
      code='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXxl">Extra extra large modal</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalXl">Extra large modal</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Large modal</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalSm">Small modal</button>'
    />
    <CodeWrapper
      code='<div class="modal-dialog modal-xxl">...</div>
<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-sm">...</div>'
      lang="html"
    />
    <div class="modal fade" id="exampleModalXxl" tabindex="-1" aria-labelledby="exampleModalXxlLabel" aria-hidden="true">
  <div class="modal-dialog modal-xxl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalXxlLabel">Extra extra large modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>
    <div class="modal fade" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalXlLabel">超大模态框</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalLgLabel">大模态框</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalSmLabel">小模态框</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
        </div>
      </div>
    </div>
    <h2 id="fullscreen-modal">全屏模态框<a class="anchor-link" href="#fullscreen-modal" aria-label="全屏模态框链接"></a></h2>
    <p>另一种覆盖方式是弹出一个覆盖用户视口的模态框，可通过放置在 <code>.modal-dialog</code> 上的修饰类来实现。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>类</th>
            <th>可用性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>.modal-fullscreen</code></td>
            <td>始终</td>
          </tr>
          <tr>
            <td><code>.modal-fullscreen-sm-down</code></td>
            <td><code>576px</code></td>
          </tr>
          <tr>
            <td><code>.modal-fullscreen-md-down</code></td>
            <td><code>768px</code></td>
          </tr>
          <tr>
            <td><code>.modal-fullscreen-lg-down</code></td>
            <td><code>992px</code></td>
          </tr>
          <tr>
            <td><code>.modal-fullscreen-xl-down</code></td>
            <td><code>1200px</code></td>
          </tr>
          <tr>
            <td><code>.modal-fullscreen-xxl-down</code></td>
            <td><code>1400px</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Example
      :showMarkup="false"
      code='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Full screen</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreenXxl">Full screen below xxl</button>'
    />
    <CodeWrapper
      code='&lt;!-- Full screen modal --&gt;
&lt;div class="modal-dialog modal-fullscreen-sm-down"&gt;
  ...
&lt;/div&gt;'
      lang="html"
    />
    <div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenLabel">全屏模态框</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1" aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-sm-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenSmLabel">小于 sm 时全屏</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1" aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenMdLabel">小于 md 时全屏</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1" aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-lg-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenLgLabel">小于 lg 时全屏</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1" aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-xl-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenXlLabel">小于 xl 时全屏</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1" aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-xxl-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-4" id="exampleModalFullscreenXxlLabel">小于 xxl 时全屏</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，模态框现在在
      <code>.modal</code> 和 <code>.modal-backdrop</code> 上使用局部 CSS 变量，以增强实时自定义能力。CSS 变量的值通过 Sass 设置，因此依然支持 Sass 自定义。
    </p>
    <ScssDocs name="modal-css-vars" file="scss/_modal.scss" /><ScssDocs name="modal-backdrop-css-vars" file="scss/_modal.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="modal-variables" file="scss/_variables.scss" />
    <h3 id="sass-loops">Sass 循环<a class="anchor-link" href="#sass-loops" aria-label="Sass 循环链接"></a></h3>
    <p><a href="#fullscreen-modal">响应式全屏模态框</a>通过 <code>$breakpoints</code> 映射和 <code>scss/_modal.scss</code> 中的一个循环生成。</p>
    <ScssDocs name="modal-fullscreen-loop" file="scss/_modal.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <p>
      模态框插件通过数据属性或 JavaScript 按需切换你隐藏的内容。它还会覆盖默认的滚动行为，并生成
      <code>.modal-backdrop</code>，以便在点击模态框外部时提供关闭已显示模态框的点击区域。
    </p>
    <h3 id="via-data-attributes">通过数据属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过数据属性链接"></a></h3>
    <h4 id="toggle">切换</h4>
    <p>无需编写 JavaScript 即可激活模态框。在控制器元素（如按钮）上设置 <code>data-bs-toggle=&quot;modal&quot;</code>，并配合 <code>data-bs-target=&quot;#foo&quot;</code> 或 <code>href=&quot;#foo&quot;</code> 来指定要切换的特定模态框。</p>
    <CodeWrapper code='&lt;button type="button" data-bs-toggle="modal" data-bs-target="#myModal"&gt;Launch modal&lt;/button&gt;' lang="html" />
    <h4 id="dismiss">关闭</h4>
    <JsDismiss name="modal" /><Callout type="warning">
      <p>
        虽然两种关闭模态框的方式都受支持，但请注意，从模态框外部关闭并不符合
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">ARIA 编写实践指南中的对话框（模态框）模式</a>。请自行承担风险。
      </p>
    </Callout>
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <p>用一行 JavaScript 创建模态框：</p>
    <CodeWrapper
      code="const myModal = new bootstrap.Modal(document.getElementById(&#39;myModal&#39;), options)
// or
const myModalAlternative = new bootstrap.Modal(&#39;#myModal&#39;, options)
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
            <td><code>backdrop</code></td>
            <td>boolean, <code>’static&#39;</code></td>
            <td><code>true</code></td>
            <td>包含一个模态框背景遮罩元素。或者，指定 <code>static</code> 以使用点击时不会关闭模态框的背景遮罩。</td>
          </tr>
          <tr>
            <td><code>focus</code></td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>初始化时将焦点放在模态框上。</td>
          </tr>
          <tr>
            <td><code>keyboard</code></td>
            <td>boolean</td>
            <td><code>true</code></td>
            <td>按下 Esc 键时关闭模态框。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <h4 id="passing-options">传递选项</h4>
    <p>将你的内容作为模态框激活。接受可选的选项 <code>object</code>。</p>
    <CodeWrapper
      code="const myModal = new bootstrap.Modal(&#39;#myModal&#39;, {
  keyboard: false
})
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
            <td>销毁元素的模态框。 （移除存储在 DOM 元素上的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td><em>静态</em>方法，用于获取与 DOM 元素关联的模态框实例。</td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td><em>静态</em>方法，用于获取与 DOM 元素关联的模态框实例，如果尚未初始化则创建一个新实例。</td>
          </tr>
          <tr>
            <td><code>handleUpdate</code></td>
            <td>如果模态框在打开状态时高度发生变化（即出现滚动条时），手动重新调整模态框的位置。</td>
          </tr>
          <tr>
            <td><code>hide</code></td>
            <td>
              手动隐藏模态框。
              <strong>在模态框实际隐藏之前就返回给调用者</strong>（即 <code>hidden.bs.modal</code> 事件发生之前）。
            </td>
          </tr>
          <tr>
            <td><code>show</code></td>
            <td>
              手动打开模态框。
              <strong>在模态框实际显示之前就返回给调用者</strong>（即 <code>shown.bs.modal</code> 事件发生之前）。此外，你可以传入一个 DOM 元素作为参数，该元素可在模态框事件中接收（作为 <code>relatedTarget</code> 属性）。（即 <code>const modalToggle = document.getElementById(&#39;toggleMyModal&#39;); myModal.show(modalToggle)</code>）。
            </td>
          </tr>
          <tr>
            <td><code>toggle</code></td>
            <td>
              手动切换模态框。
              <strong>在模态框实际显示或隐藏之前就返回给调用者</strong>（即 <code>shown.bs.modal</code> 或 <code>hidden.bs.modal</code> 事件发生之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>
      Bootstrap 的模态框类公开了几个事件，用于挂接模态框功能。所有模态框事件都在模态框本身触发（即在
      <code>&lt;div class=&quot;modal&quot;&gt;</code> 上）。
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>事件</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hide.bs.modal</code></td>
            <td>当调用 <code>hide</code> 实例方法时立即触发此事件。可通过调用 <code>event.preventDefault()</code> 阻止。关于阻止事件的更多细节，请参阅<a href="/getting-started/javascript#events">JavaScript 事件文档</a>。</td>
          </tr>
          <tr>
            <td><code>hidden.bs.modal</code></td>
            <td>当模态框对用户隐藏完毕后（将等待 CSS 过渡完成）触发此事件。</td>
          </tr>
          <tr>
            <td><code>hidePrevented.bs.modal</code></td>
            <td>当模态框已显示、其背景遮罩为 <code>static</code> 且在模态框外部点击时触发此事件。当按下 Esc 键且 <code>keyboard</code> 选项设置为 <code>false</code> 时也会触发此事件。</td>
          </tr>
          <tr>
            <td><code>show.bs.modal</code></td>
            <td>当调用 <code>show</code> 实例方法时立即触发此事件。如果由点击引起，被点击的元素可通过事件的 <code>relatedTarget</code> 属性获取。</td>
          </tr>
          <tr>
            <td><code>shown.bs.modal</code></td>
            <td>
              当模态框已对用户可见（将等待 CSS 过渡完成）时触发此事件。如果由点击引起，被点击的元素可通过事件的
              <code>relatedTarget</code> 属性获取。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myModalEl = document.getElementById(&#39;myModal&#39;)
myModalEl.addEventListener(&#39;hidden.bs.modal&#39;, event =&gt; {
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
      <li><a href="#how-it-works">工作原理</a></li>
      <li>
        <a href="#examples">示例</a>
        <ul>
          <li><a href="#modal-components">模态框组件</a></li>
          <li><a href="#live-demo">实时演示</a></li>
          <li><a href="#static-backdrop">静态背景</a></li>
          <li><a href="#scrolling-long-content">滚动长内容</a></li>
          <li><a href="#vertically-centered">垂直居中</a></li>
          <li><a href="#tooltips-and-popovers">工具提示与弹出框</a></li>
          <li><a href="#using-the-grid">使用栅格</a></li>
          <li><a href="#varying-modal-content">变化模态框内容</a></li>
          <li><a href="#toggle-between-modals">在模态框之间切换</a></li>
          <li><a href="#change-animation">更改动画</a></li>
          <li><a href="#remove-animation">移除动画</a></li>
          <li><a href="#dynamic-heights">动态高度</a></li>
          <li><a href="#accessibility">无障碍</a></li>
          <li><a href="#embedding-youtube-videos">嵌入 YouTube 视频</a></li>
        </ul>
      </li>
      <li><a href="#optional-sizes">可选尺寸</a></li>
      <li><a href="#fullscreen-modal">全屏模态框</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-loops">Sass 循环</a></li>
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

import { onMounted } from 'vue';

onMounted(() => {
  const exampleModal = document.getElementById('exampleModal');
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', (event) => {
      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever');
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title');
      const modalBodyInput = exampleModal.querySelector('.modal-body input');

      modalTitle.textContent = `New message to ${recipient}`;
      modalBodyInput.value = recipient;
    });
  }
});
</script>
