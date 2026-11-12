<template>
  <article class="bd-content" data-pagefind-body>
    <h1>轮播</h1>
    <p class="lead">用于在元素（图像或文本幻灯片）之间循环切换的幻灯片组件，就像轮播一样。</p>

    <h2 id="how-it-works">工作原理<a class="anchor-link" href="#how-it-works" aria-label="工作原理链接"></a></h2>
    <ul>
      <li>
        <p>轮播是一个用于循环展示一系列内容的幻灯片组件，基于 CSS 3D 变换和少量 JavaScript 构建。它适用于一系列图像、文本或自定义标记，同时支持上一页/下一页控件和指示器。</p>
      </li>
      <li>
        <p>出于性能考虑，<strong>轮播必须手动初始化</strong>，使用<a href="#methods">轮播构造函数方法</a>。如果不进行初始化，部分事件监听器（特别是触摸/滑动支持所需的事件）将不会被注册，直到用户显式激活某个控件或指示器。</p>
        <p>
          唯一的例外是带有 <code>data-bs-ride=&quot;carousel&quot;</code> 属性的<a href="#autoplaying-carousels">自动播放轮播</a>，因为它们会在页面加载时自动初始化。如果你使用带有 data 属性的自动播放轮播，
          <strong>就不要再用构造函数方法显式初始化相同的轮播。</strong>
        </p>
      </li>
      <li>
        <p>不支持嵌套轮播。你还应意识到，轮播通常会给可用性和无障碍访问带来挑战。</p>
      </li>
    </ul>
    <Callout name="info-prefersreducedmotion" />
    <h2 id="basic-examples">基本示例<a class="anchor-link" href="#basic-examples" aria-label="基本示例链接"></a></h2>
    <p>
      下面是一个包含三张幻灯片的基本轮播示例。请注意上一页/下一页控件。我们推荐使用
      <code>&lt;button&gt;</code> 元素，但你也可以使用带有 <code>role=&quot;button&quot;</code> 的 <code>&lt;a&gt;</code> 元素。
    </p>
    <ExampleCustom
      code='<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <p>轮播不会自动规范化幻灯片的尺寸。因此，你可能需要使用其他工具类或自定义样式来适当设置内容尺寸。虽然轮播支持上一页/下一页控件和指示器，但它们并不是必需的。你可以根据需要添加和自定义。</p>
    <p>
      <strong>你必须为其中一张幻灯片添加 <code>.active</code> 类</strong>，否则轮播将不可见。另外，请确保为 <code>.carousel</code> 设置唯一的 <code>id</code>，以便使用可选控件，尤其是在单个页面上使用多个轮播时。控件和指示器元素必须具有与 <code>.carousel</code> 元素的 <code>id</code> 匹配的 <code>data-bs-target</code> 属性（链接则为
      <code>href</code>）。
    </p>
    <h3 id="indicators">指示器<a class="anchor-link" href="#indicators" aria-label="指示器链接"></a></h3>
    <p>你可以为轮播添加指示器，与上一页/下一页控件并列。指示器允许用户直接跳转到特定的幻灯片。</p>
    <ExampleCustom
      code='<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h3 id="captions">字幕<a class="anchor-link" href="#captions" aria-label="字幕链接"></a></h3>
    <p>你可以在任意 <code>.carousel-item</code> 中使用 <code>.carousel-caption</code> 元素为幻灯片添加字幕。如下图所示，通过可选的<a href="/utilities/display">显示工具类</a>，可以轻松地在较小视口中隐藏它们。我们首先使用 <code>.d-none</code> 隐藏它们，然后在中等尺寸 设备上使用 <code>.d-md-block</code> 重新显示。</p>
    <ExampleCustom
      code='<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第一张幻灯片标题</h5>
              <p>第一张幻灯片的示例占位内容。</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第二张幻灯片标题</h5>
              <p>第二张幻灯片的示例占位内容。</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第三张幻灯片标题</h5>
              <p>第三张幻灯片的示例占位内容。</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h3 id="crossfade">交叉淡入<a class="anchor-link" href="#crossfade" aria-label="交叉淡入链接"></a></h3>
    <p>为轮播添加 <code>.carousel-fade</code>，以淡入过渡代替滑动来为幻灯片添加动画。根据轮播内容（例如纯文本幻灯片），你可能需要为 <code>.carousel-item</code> 添加 <code>.bg-body</code> 或一些自定义 CSS，以实现正确的交叉淡入效果。</p>
    <ExampleCustom
      code='<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h2 id="autoplaying-carousels">自动播放轮播<a class="anchor-link" href="#autoplaying-carousels" aria-label="自动播放轮播链接"></a></h2>
    <p>
      将 <code>ride</code> 选项设置为 <code>carousel</code>，即可让轮播在页面加载时自动播放。自动播放的轮播在鼠标悬停时会自动暂停。此行为可以通过 <code>pause</code> 选项进行控制。在支持
      <a href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a>的浏览器中，当网页对用户不可见时（例如浏览器标签页处于非活动状态，或浏览器窗口被最小化时），轮播将停止循环。
    </p>
    <Callout>
      <p>出于无障碍访问方面的原因，我们建议避免使用自动播放的轮播。如果你的页面确实包含自动播放的轮播，我们建议额外提供一个按钮或控件，用于显式暂停/停止轮播。</p>
      <p>
        参见
        <a href="https://www.w3.org/TR/WCAG/#pause-stop-hide">WCAG 2.2 成功准则 2.2.2 暂停、停止、隐藏</a>。
      </p>
    </Callout>
    <ExampleCustom
      code='<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <p>当 <code>ride</code> 选项设置为 <code>true</code> 而非 <code>carousel</code> 时，轮播不会在页面加载时自动开始循环。相反，它只会在用户首次交互后才开始。</p>
    <ExampleCustom
      code='<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h3 id="individual-carousel-item-interval">单独的 <code>.carousel-item</code> 间隔<a class="anchor-link" href="#individual-carousel-item-interval" aria-label="单独的 .carousel-item 间隔链接"></a></h3>
    <p>为 <code>.carousel-item</code> 添加 <code>data-bs-interval=&quot;&quot;</code>，以更改自动循环到下一项之间的延迟时间。</p>
    <ExampleCustom
      code='<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h3 id="autoplaying-carousels-without-controls">不带控件的自动播放轮播<a class="anchor-link" href="#autoplaying-carousels-without-controls" aria-label="不带控件的自动播放轮播链接"></a></h3>
    <p>下面是一个仅包含幻灯片的轮播。请注意轮播图像上的 <code>.d-block</code> 和 <code>.w-100</code>，它们用于防止浏览器默认的图像对齐方式。</p>
    <ExampleCustom
      code='<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>'
      ><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div></div
    ></ExampleCustom>
    <h2 id="disable-touch-swiping">禁用触摸滑动<a class="anchor-link" href="#disable-touch-swiping" aria-label="禁用触摸滑动链接"></a></h2>
    <p>轮播支持在触摸屏设备上左右滑动以在幻灯片之间切换。将 <code>touch</code> 选项设置为 <code>false</code> 即可禁用此功能。</p>
    <ExampleCustom
      code='<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="第一张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="第二张幻灯片" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="第三张幻灯片" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h2 id="dark-variant">深色变体<a class="anchor-link" href="#dark-variant" aria-label="深色变体链接"></a></h2>
    <DeprecatedIn version="5.3.0" />
    <p>为 <code>.carousel</code> 添加 <code>.carousel-dark</code>，以获得更深的控件、指示器和字幕。控件通过 <code>filter</code> CSS 属性相对于其默认的白色填充进行反转。字幕和控件具有额外的 Sass 变量，用于自定义 <code>color</code> 和 <code>background-color</code>。</p>
    <CalloutDeprecatedDarkVariants component="carousel" />
    <ExampleCustom
      code='<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>'
      ><div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="第一张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第一张幻灯片标题</h5>
              <p>第一张幻灯片的示例占位内容。</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="第二张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第二张幻灯片标题</h5>
              <p>第二张幻灯片的示例占位内容。</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="第三张幻灯片" />
            <div class="carousel-caption d-none d-md-block">
              <h5>第三张幻灯片标题</h5>
              <p>第三张幻灯片的示例占位内容。</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div></ExampleCustom
    >
    <h2 id="custom-transition">自定义过渡<a class="anchor-link" href="#custom-transition" aria-label="自定义过渡链接"></a></h2>
    <p><code>.carousel-item</code> 的过渡时长可以在编译前通过 <code>$carousel-transition-duration</code> Sass 变量更改，或者在使用已编译的 CSS 时通过自定义样式更改。如果应用了多个过渡，请确保首先定义 transform 过渡（例如 <code>transition: transform 2s ease, opacity .5s ease-out</code>）。</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>所有轮播的变量：</p>
    <ScssDocs name="carousel-variables" file="scss/_variables.scss" />
    <p><a href="#dark-variant">深色轮播</a>的变量：</p>
    <ScssDocs name="carousel-dark-variables" file="scss/_variables.scss" />
    <h2 id="usage">用法<a class="anchor-link" href="#usage" aria-label="用法链接"></a></h2>
    <h3 id="via-data-attributes">通过 data 属性<a class="anchor-link" href="#via-data-attributes" aria-label="通过 data 属性链接"></a></h3>
    <p>使用 data 属性可以轻松控制轮播的位置。<code>data-bs-slide</code> 接受关键字 <code>prev</code> 或 <code>next</code>，这会相对于幻灯片的当前位置改变其位置。或者，使用 <code>data-bs-slide-to</code> 向轮播传递原始幻灯片索引 <code>data-bs-slide-to=&quot;2&quot;</code>，这会将幻灯片位置移动到从 <code>0</code> 开始的特定索引。</p>
    <h3 id="via-javascript">通过 JavaScript<a class="anchor-link" href="#via-javascript" aria-label="通过 JavaScript 链接"></a></h3>
    <p>手动调用轮播：</p>
    <CodeWrapper
      code="const carousel = new bootstrap.Carousel(&#39;#myCarousel&#39;)
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
            <td><code>interval</code></td>
            <td>数字</td>
            <td><code>5000</code></td>
            <td>自动循环一项之间的延迟时间。</td>
          </tr>
          <tr>
            <td><code>keyboard</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>轮播是否应响应键盘事件。</td>
          </tr>
          <tr>
            <td><code>pause</code></td>
            <td>字符串、布尔值</td>
            <td><code>&quot;hover&quot;</code></td>
            <td>
              如果设置为 <code>&quot;hover&quot;</code>，则在 <code>mouseenter</code> 时暂停轮播的循环，并在 <code>mouseleave</code> 时恢复轮播的循环。如果设置为 <code>false</code>，则鼠标悬停在轮播上不会使其暂停。在支持触摸的设备上，当设置为 <code>&quot;hover&quot;</code> 时，循环将在
              <code>touchend</code>（用户完成与轮播的交互后）时暂停两个间隔，然后自动恢复。这是在鼠标行为之外的额外行为。
            </td>
          </tr>
          <tr>
            <td><code>ride</code></td>
            <td>字符串、布尔值</td>
            <td><code>false</code></td>
            <td>如果设置为 <code>true</code>，则在用户手动循环第一项后自动播放轮播。如果设置为 <code>&quot;carousel&quot;</code>，则在加载时自动播放轮播。</td>
          </tr>
          <tr>
            <td><code>touch</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>轮播是否应支持触摸屏设备上的左/右滑动交互。</td>
          </tr>
          <tr>
            <td><code>wrap</code></td>
            <td>布尔值</td>
            <td><code>true</code></td>
            <td>轮播是应连续循环还是硬停止。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="methods">方法<a class="anchor-link" href="#methods" aria-label="方法链接"></a></h3>
    <Callout name="danger-async-methods" type="danger" />
    <p>
      你可以使用轮播构造函数创建轮播实例，并传入任何附加选项。例如，要手动初始化一个具有特定间隔且禁用触摸支持的自动播放轮播（假设你没有在标记中使用
      <code>data-bs-ride=&quot;carousel&quot;</code> 属性），可以使用：
    </p>
    <CodeWrapper
      code="const myCarouselElement = document.querySelector(&#39;#myCarousel&#39;)

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
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
            <td><code>cycle</code></td>
            <td>开始从左到右循环切换轮播项。</td>
          </tr>
          <tr>
            <td><code>dispose</code></td>
            <td>销毁元素的轮播。（移除 DOM 元素上存储的数据）</td>
          </tr>
          <tr>
            <td><code>getInstance</code></td>
            <td>
              静态方法，用于获取与 DOM 元素关联的轮播实例。可以这样使用：
              <code>bootstrap.Carousel.getInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>getOrCreateInstance</code></td>
            <td>
              静态方法，返回与 DOM 元素关联的轮播实例，如果尚未初始化则创建一个新实例。可以这样使用：
              <code>bootstrap.Carousel.getOrCreateInstance(element)</code>。
            </td>
          </tr>
          <tr>
            <td><code>next</code></td>
            <td>循环到下一项。<strong>在下一项显示之前返回给调用者</strong>（例如，在 <code>slid.bs.carousel</code> 事件触发之前）。</td>
          </tr>
          <tr>
            <td><code>nextWhenVisible</code></td>
            <td>
              当页面、轮播或轮播的父元素不可见时，不要将轮播循环到下一项。
              <strong>在目标项显示之前返回给调用者</strong>。
            </td>
          </tr>
          <tr>
            <td><code>pause</code></td>
            <td>停止轮播循环切换项。</td>
          </tr>
          <tr>
            <td><code>prev</code></td>
            <td>
              循环到上一项。
              <strong>在上一项显示之前返回给调用者</strong>（例如，在 <code>slid.bs.carousel</code> 事件触发之前）。
            </td>
          </tr>
          <tr>
            <td><code>to</code></td>
            <td>
              将轮播循环到特定帧（从 0 开始，类似于数组）。
              <strong>在目标项显示之前返回给调用者</strong>（例如，在 <code>slid.bs.carousel</code> 事件触发之前）。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="events">事件<a class="anchor-link" href="#events" aria-label="事件链接"></a></h3>
    <p>Bootstrap 的轮播类公开了两个事件，用于挂钩到轮播功能。这两个事件都具有以下附加属性：</p>
    <ul>
      <li><code>direction</code>：轮播滑动的方向（<code>&quot;left&quot;</code> 或 <code>&quot;right&quot;</code>）。</li>
      <li><code>relatedTarget</code>：作为活动项滑入到位的 DOM 元素。</li>
      <li><code>from</code>：当前项的索引</li>
      <li><code>to</code>：下一项的索引</li>
    </ul>
    <p>
      所有轮播事件都在轮播自身上触发（即
      <code>&lt;div class=&quot;carousel&quot;&gt;</code> 上）。
    </p>
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
            <td><code>slid.bs.carousel</code></td>
            <td>当轮播完成其幻灯片过渡时触发。</td>
          </tr>
          <tr>
            <td><code>slide.bs.carousel</code></td>
            <td>当调用 <code>slide</code> 实例方法时立即触发。</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CodeWrapper
      code="const myCarousel = document.getElementById(&#39;myCarousel&#39;)

myCarousel.addEventListener(&#39;slide.bs.carousel&#39;, event =&gt; {
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
        <a href="#basic-examples">基本示例</a>
        <ul>
          <li><a href="#indicators">指示器</a></li>
          <li><a href="#captions">字幕</a></li>
          <li><a href="#crossfade">交叉淡入</a></li>
        </ul>
      </li>
      <li>
        <a href="#autoplaying-carousels">自动播放轮播</a>
        <ul>
          <li>
            <a href="#autoplaying-carousels-without-controls">不带控件的自动播放轮播</a>
          </li>
        </ul>
      </li>
      <li><a href="#disable-touch-swiping">禁用触摸滑动</a></li>
      <li><a href="#dark-variant">深色变体</a></li>
      <li><a href="#custom-transition">自定义过渡</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
      <li>
        <a href="#usage">用法</a>
        <ul>
          <li><a href="#via-data-attributes">通过 data 属性</a></li>
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

import { onMounted, onBeforeUnmount } from 'vue';

let articleEl = null;

onMounted(() => {
  import('bootstrap').then((bootstrap) => {
    articleEl = document.querySelector('article.bd-content');

    articleEl.querySelectorAll('.carousel').forEach((carousel) => {
      new bootstrap.Carousel(carousel);
    });
  });
});
onBeforeUnmount(() => {
  import('bootstrap').then((bootstrap) => {
    articleEl.querySelectorAll('.carousel').forEach((carousel) => {
      bootstrap.Carousel.getInstance(carousel).dispose();
    });
  });
});
</script>
