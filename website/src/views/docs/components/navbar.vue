<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-navbar">
      <a href="#navbar-example">基础示例</a>
      <a href="#navbar-brand">品牌标识</a>
      <a href="#navbar-nav">导航区</a>
      <a href="#navbar-form">表单控件区</a>
      <a href="#navbar-text">文本区</a>
      <a href="#navbar-color">配色方案</a>
      <a href="#navbar-container">容器</a>
      <a href="#navbar-placement">位置</a>
      <a href="#navbar-scroll">导航区滚动</a>
      <a href="#navbar-responsive">响应式行为</a>
      <a href="#navbar-toggler">切换器</a>
      <a href="#navbar-external">外部内容</a>
      <a href="#navbar-offcanvas">侧边栏导航</a>
      <a href="#navbar-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-navbar" class="docs-content">
    <h1>Navbar 导航栏</h1>
    <p class="fs-4 fw-light">
      有关 Bootstrap 强大且响应式的导航栏的文档和示例。其中包括品牌标识、导航功能等内容的支持，还包括我们 Collapse
      折叠组件的支持。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/navbar/" target="_blank">Bootstrap Navbar</a>
    </p>

    <h2 id="navbar-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#navbar-example"> </a>
    </h2>
    <p>导航栏内置支持多种子组件的功能。根据需要从以下选项中进行选择：</p>
    <ul class="docs-content-list">
      <li><code>.navbar-brand</code> 用于您的公司、产品或项目名称。</li>
      <li>
        <code>.navbar-nav</code>
        用于实现全屏且轻量级的导航（包括支持下拉菜单的功能）。
      </li>
      <li>
        <code>.navbar-toggler</code> 用于与我们的折叠组件以及其他
        <a href="#navbar-responsive">导航切换行为</a> 一起使用。
      </li>
      <li>flex 和 spacing 工具用于任何表单控件和操作。</li>
      <li><code>.navbar-text</code> 用于添加垂直居中的字符串文本。</li>
      <li>
        <code>.collapse.navbar-collapse</code>
        用于通过父断点对导航内容进行分组和隐藏。
      </li>
      <li>
        可选的 <code>.navbar-nav-scroll</code> 可用于设置 <code>max-height</code> 并
        <a href="#navbar-scroll">滚动显示导航内容</a>。
      </li>
    </ul>
    <p>
      以下是一个示例，展示了响应式浅色主题导航栏中包含的所有子组件。该导航栏会在
      <code>lg</code>（大） 规格下自动折叠。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" v-dropdown aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="navbar-brand">
      品牌标识<a class="anchor-link" aria-label="Link to this section: 品牌标识" href="#navbar-brand"> </a>
    </h2>
    <p>
      可以将
      <code>.navbar-brand</code>
      应用于大多数元素，但锚元素效果最佳，因为某些元素可能需要使用辅助类或自定义样式。
    </p>
    <h3>Text</h3>
    <div class="docs-example">
      <div class="docs-example-data">
        <!-- As a link -->
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
        <br />
        <!-- As a heading -->
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="brand1Code" label="html" />
    </div>
    <h3>Image</h3>
    <p>您可以将 <code>.navbar-brand</code> 标签内的文本替换为一个 <code>&lt;img&gt;</code> 标签。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar bg-body-tertiary">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Bootstrap"
                width="30"
                height="24"
              />
            </a>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="brand2Code" label="html" />
    </div>
    <h3>Image and text</h3>
    <p>
      您还可以利用一些额外的工具来同时添加图片和文字。请注意，在
      <code>&lt;img&gt;</code> 元素中添加了 <code>.d-inline-block</code> 和 <code>.align-text-top</code> 这两个类。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              Bootstrap
            </a>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="brand3Code" label="html" />
    </div>

    <h2 id="navbar-nav">
      导航区域<a class="anchor-link" aria-label="Link to this section: 导航区域" href="#navbar-nav"> </a>
    </h2>
    <p>
      导航栏中的导航链接基于我们的
      <code>.nav</code> 选项，并带有自身的修饰类，同时需要使用 <a href="#toggler">切换类</a> 以实现适当的响应式样式。
      <strong>导航栏中的内容也会扩展以占据尽可能多的水平空间</strong>，以确保导航栏内的内容能够稳定地保持对齐。
    </p>
    <p>在 <code>.nav-link</code> 元素上添加 <code>.active</code> 类，以表示当前页面。</p>
    <p>请注意，您还应在处于激活状态的 <code>.nav-link</code> 元素上添加 <code>aria-current</code> 属性。</p>
    <p>而且由于我们是通过类来实现导航栏的，所以如果您愿意的话，完全可以完全摒弃基于列表的这种做法。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="nav1Code" label="vue" />
    </div>
    <p>
      您还可以在导航栏中使用下拉菜单。下拉菜单需要一个包裹元素来确定其位置，因此请务必为
      <code>.nav-item</code> 和 <code>.nav-link</code> 使用单独且嵌套的元素，如下面所示。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" v-dropdown aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="nav2Code" label="vue" />
    </div>

    <h2 id="navbar-form">
      表单控件区<a class="anchor-link" aria-label="Link to this section: 表单控件区" href="#navbar-form"> </a>
    </h2>
    <p>
      在导航栏中放置各种表单控件和组件。<code>.navbar</code>
      元素的直接子元素采用弹性布局，并默认会设置为
      <code>justify-content: space-between</code>。如有需要，可使用额外的
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex" target="_blank">弹性工具</a>
      来调整此行为。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="formCode" label="html" />
    </div>

    <h2 id="navbar-text">
      文本区<a class="anchor-link" aria-label="Link to this section: 文本区" href="#navbar-text"> </a>
    </h2>
    <p>
      导航栏可以借助
      <code>.navbar-text</code>
      类来包含一些文本内容。该类能够调整文本字符串的垂直对齐方式和水平间距。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar w/ text</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
              <span class="navbar-text"> Navbar text with an inline element </span>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="textCode" label="html" />
    </div>

    <h2 id="navbar-color">
      配色方案<a class="anchor-link" aria-label="Link to this section: 配色方案" href="#navbar-color"> </a>
    </h2>
    <p>
      得益于 Bootstrap 将 Sass 和 CSS
      变量相结合的特性，导航栏主题的设置比以往任何时候都更加简便。默认情况下，我们提供了“浅色导航栏”供搭配浅色背景使用，但您也可以通过在
      <code>.navbar</code> 父元素上添加 <code>data-bs-theme="dark"</code> 来使用深色背景。然后，您还可以使用
      <code>.bg-*</code>
      和其他工具来进行个性化设置。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <br />
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <br />
        <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd" data-bs-theme="light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="colorCode" label="vue" />
    </div>

    <h2 id="navbar-container">
      容器<a class="anchor-link" aria-label="Link to this section: 容器" href="#navbar-container"> </a>
    </h2>
    <p>
      虽然这不是强制要求的，但您可以将导航栏包裹在
      <code>.container</code>
      元素中，以便将其在页面上居中显示——不过请注意，仍需要一个内部容器。或者，您可以在
      <code>.navbar</code> 内部添加一个容器，仅将 <a href="#navbar-placement">固定或静态顶部导航栏</a> 的内容居中显示。
    </p>
    <p>使用任意一种响应式容器来调整导航栏中内容的显示宽度即可。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
            </div>
          </nav>
        </div>
        <br />
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-md">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </div>
      <code-highlight type="html" :code="containerCode" label="html" />
    </div>

    <h2 id="navbar-placement">
      位置<a class="anchor-link" aria-label="Link to this section: 位置" href="#navbar-placement"> </a>
    </h2>
    <p>
      使用我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/position" target="_blank">位置工具</a>
      来将导航栏放置在非静态的位置上。
    </p>
    <p>
      固定导航栏使用 <code>position: fixed</code> 属性，这意味着它们脱离了 DOM 的正常流程，可能需要自定义 CSS（例如，在
      <code>&lt;body&gt;</code> 元素上设置 <code>padding-top</code> 属性）以避免与其他元素发生重叠。
    </p>
    <div class="docs-example">
      <code-highlight type="html" :code="placementCode" label="html" />
    </div>

    <h2 id="navbar-scroll">
      导航区滚动<a class="anchor-link" aria-label="Link to this section: 导航区滚动" href="#navbar-scroll"> </a>
    </h2>
    <p>
      将 <code>.navbar-nav-scroll</code> 添加到
      <code>.navbar-nav</code
      >（或其他导航栏子组件）中，即可在折叠式导航栏的可折叠内容内实现垂直滚动。默认情况下，滚动功能会在
      <code>75vh</code>（即视口高度的 75%）时启动，但您可以通过本地 CSS 自定义属性
      <code>--bs-navbar-height</code>
      或自定义样式来更改这一设置。在较大的视口下，当导航栏展开时，内容将与默认导航栏中的内容相同地显示出来。
    </p>
    <p>
      请注意，这种行为有一个潜在的缺点，<code>overflow</code> —当设置
      <code>overflow-y: auto</code>（需要在这里滚动内容）时，<code>overflow-x</code> 相当于
      <code>auto</code>，这会裁剪一些水平的内容。
    </p>
    <p>
      以下是一个使用 <code>.navbar-nav-scroll</code> 且带有
      <code>style="--bs-scroll-height: 100px;"</code>
      的导航栏示例，同时还使用了一些额外的边距工具以实现最佳间距效果。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar scroll</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" v-dropdown aria-expanded="false"> Link </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Link</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="scrollCode" label="vue" />
    </div>

    <h2 id="navbar-responsive">
      响应式行为<a class="anchor-link" aria-label="Link to this section: 响应式行为" href="#navbar-responsive"> </a>
    </h2>
    <p>
      导航栏可以使用 <code>.navbar-toggler</code>、<code>.navbar-collapse</code>
      和
      <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code>
      这些类来确定其内容何时会缩回至按钮之后。结合其他工具，您可以轻松地决定何时显示或隐藏特定元素。
    </p>
    <p>
      对于那些永远不会收起的导航栏，要在导航栏上添加
      <code>.navbar-expand</code>
      类。而对于那些总是会收起的导航栏，则无需添加任何
      <code>.navbar-expand</code> 类。
    </p>

    <h2 id="navbar-toggler">
      切换器<a class="anchor-link" aria-label="Link to this section: 切换器" href="#navbar-toggler"> </a>
    </h2>
    <p>
      导航栏切换按钮默认是左对齐的，但如果它们与诸如
      <code>.navbar-brand</code>
      这样的兄弟元素相邻时，它们会自动对齐到最右侧。更改您的标记结构将改变切换按钮的位置。以下是不同切换样式示例。
    </p>
    <p>在最小的视口尺寸下，没有显示 <code>.navbar-brand</code> 标签：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="#">Hidden brand</a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="toggler1Code" label="vue" />
    </div>
    <p>左侧显示品牌名称，右侧显示切换器：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="toggler2Code" label="vue" />
    </div>
    <p>左边是切换器，右边是品牌名称：</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="toggler3Code" label="vue" />
    </div>

    <h2 id="navbar-external">
      外部内容<a class="anchor-link" aria-label="Link to this section: 外部内容" href="#navbar-toggler"> </a>
    </h2>
    <p>
      有时您可能希望使用“折叠”来激活一个容器元素，以显示位于
      <code>.navbar</code> 之外的结构性内容。由于我们的插件是基于 <code>id</code> 和
      <code>data-bs-target</code> 的匹配机制工作的，所以这很容易实现！
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div class="bg-dark p-4">
            <h5 class="text-body-emphasis h4">Collapsed content</h5>
            <span class="text-body-secondary">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              v-collapse
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="externalCode" label="vue" />
    </div>
    <p>
      当您执行此操作时，我们建议添加额外的 JavaScript
      代码，以便在容器打开时通过程序方式将焦点自动移至该容器。否则，键盘用户和使用辅助技术的用户可能会难以找到新显示的内容——特别是如果在文档结构中打开的容器位于切换器之前的话。我们还建议确保切换器具有
      <code>aria-controls</code> 属性，该属性指向内容容器的
      <code>id</code>
      。理论上，这能让辅助技术用户直接从切换器跳转到它所控制的容器——但目前对此的支持相当不完善。
    </p>

    <h2 id="navbar-offcanvas">
      侧边栏导航<a class="anchor-link" aria-label="Link to this section: 侧边栏导航" href="#navbar-offcanvas"> </a>
    </h2>
    <p>
      使用
      <a href="/docs/components/offcanvas">offcanvas 组件</a>
      可将您不断扩展和收缩的导航栏转换为侧边抽屉形式。我们扩展了 offcanvas 的默认样式，并使用我们的
      <code>.navbar-expand-*</code> 类来创建一个动态且灵活的导航侧栏。
    </p>
    <p>
      在下面的示例中，若要创建一个在所有视口大小下始终保持折叠状态的侧边栏导航栏，请完全省略
      <code>.navbar-expand-*</code> 类。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Offcanvas navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              @click="offcanvasRef.toggle()"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <bv-offcanvas ref="offcanvasRef" title="Offcanvas" position="end">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" v-dropdown aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </bv-offcanvas>
          </div>
        </nav>
      </div>
      <code-highlight type="vue" :code="offcanvasCode" label="vue" />
    </div>

    <h2 id="navbar-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#navbar-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，按钮现在在
      <code>.navbar</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_navbar.scss" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const offcanvasRef = ref(null);

const exampleCode = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" 
              v-dropdown aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="..." />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>`;

const brand1Code = `
<!-- As a link -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>

<!-- As a heading -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>`;

const brand2Code = `
<nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" 
        alt="Bootstrap" width="30" height="24">
    </a>
  </div>
</nav>`;

const brand3Code = `
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" 
        alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>`;

const nav1Code = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
</template>`;

const nav2Code = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" 
              v-dropdown aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>`;

const formCode = `
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="..."/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>`;

const textCode = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarText" 
        aria-controls="navbarText" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </div>
    </div>
  </nav>
</template>`;

const colorCode = `
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar bg-primary" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar" style="background-color: #e3f2fd;" data-bs-theme="light">
  <!-- Navbar content -->
</nav>`;

const containerCode = `
<div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  </nav>
</div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-md">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>`;

const placementCode = `
<!--Default-->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Default</a>
  </div>
</nav>

<!--Fixed top-->
<nav class="navbar fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>

<!--Fixed bottom-->
<nav class="navbar fixed-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>

<!--Sticky bottom-->
<nav class="navbar sticky-bottom bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sticky top</a>
  </div>
</nav>`;

const scrollCode = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar scroll</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarScroll" 
        aria-controls="navbarScroll" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
          style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" 
              v-dropdown aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Link</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="..."/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>`;

const toggler1Code = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarTogglerDemo01" 
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="..."/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>`;

const toggler2Code = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarTogglerDemo02" 
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>`;

const toggler3Code = `
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarTogglerDemo03" 
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>`;

const externalCode = `
<template>
  <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    <div class="bg-dark p-4">
      <h5 class="text-body-emphasis h4">Collapsed content</h5>
      <span class="text-body-secondary">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" 
        v-collapse data-bs-target="#navbarToggleExternalContent" 
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="...">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>`;

const offcanvasCode = `
<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Offcanvas navbar</a>
      <button class="navbar-toggler" type="button" @click="offcanvasRef.toggle()" 
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <bv-offcanvas ref="offcanvasRef" title="Offcanvas" position="end">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" 
              v-dropdown aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" 
            placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </bv-offcanvas>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const offcanvasRef = ref(null)
<\/script>`;

const css1Code = `
--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
--#{$prefix}navbar-padding-y: #{$navbar-padding-y};
--#{$prefix}navbar-color: #{$navbar-light-color};
--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-light-active-color};
--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};`;
</script>
