<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-card">
      <a href="#card-about">简介</a>
      <a href="#card-example">示例</a>
      <a href="#card-type">内容类型</a>
      <a href="#card-sizing">尺寸调整</a>
      <a href="#card-align">文本对齐</a>
      <a href="#card-nav">导航</a>
      <a href="#card-image">图片元素</a>
      <a href="#card-horizontal">水平方式</a>
      <a href="#card-style">样式调整</a>
      <a href="#card-layout">布局</a>
      <a href="#card-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-card" class="docs-content">
    <h1>Card 卡片</h1>
    <p class="fs-4 fw-light">
      Bootstrap 的卡片提供了一个灵活且可扩展的内容容器，具有多种变体和选项。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/card/" target="_blank">Bootstrap Card</a>
    </p>

    <h2 id="card-about">简介<a class="anchor-link" aria-label="Link to this section: 简介" href="#card-about"> </a></h2>
    <p>
      <strong>卡片</strong
      >是一个灵活且可扩展的内容容器。它包含页眉和页脚选项、丰富多样的内容、上下文背景颜色以及强大的显示选项。如果你熟悉
      Bootstrap
      3，那么卡片就取代了我们之前的面板、井状框和缩略图。与这些组件类似的功能，可以通过为卡片添加修饰类来实现。
    </p>

    <h2 id="card-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#card-example"> </a>
    </h2>
    <p>
      卡片构建时尽量减少标记和样式，但仍能提供大量的控制和自定义功能。它们基于 flexbox 构建，易于对齐，并能与其他
      Bootstrap 组件很好地混合使用。默认情况下，卡片没有
      <code>margin</code>，因此可根据需要使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/spacing" target="_blank">间距工具</a>。
    </p>
    <p>
      以下是一个包含混合内容且宽度固定的基本卡片示例。卡片初始时没有固定宽度，因此它们会自然地填充其父元素的整个宽度。通过我们提供的各种
      <a href="#card-sizing">尺寸选项</a>，可以轻松地进行自定义。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="card-type">
      内容类型<a class="anchor-link" aria-label="Link to this section: 内容类型" href="#card-type"> </a>
    </h2>
    <p>卡片支持多种内容，包括图片、文本、列表组、链接等。以下是所支持内容的示例。</p>
    <h3>Body</h3>
    <p>卡片的基本构建块是<code>.card-body</code>。当您需要在卡片内创建一个带有填充的区域时，请使用它。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>
      <code-highlight type="html" :code="type1Code" label="html" />
    </div>
    <h3>Titles, text, and links</h3>
    <p>
      卡片标题是通过在 <code>&lt;h*&gt;</code> 标签上添加 <code>.card-title</code> 来设置的。同样地，链接也是通过在
      <code>&lt;a&gt;</code> 标签上添加 <code>.card-link</code> 来添加并彼此相邻放置的。
    </p>
    <p>
      通过在 <code>&lt;h*&gt;</code> 标签中添加 <code>.card-subtitle</code> 来使用副标题。如果将
      <code>.card-title</code> 和 <code>.card-subtitle</code> 项放置在
      <code>.card-body</code> 项中，则卡片标题和副标题会整齐对齐。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type2Code" label="html" />
    </div>
    <h3>Images</h3>
    <p>
      <code>.card-img-top</code> 和
      <code>.card-img-bottom</code>
      分别设置卡片上角和下角的圆角，以匹配卡片的边框。使用
      <code>.card-text</code>，可以在卡片上添加文本。在
      <code>.card-text</code> 内的文本也可以使用标准的HTML标签进行样式设置。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type3Code" label="html" />
    </div>
    <h3>List groups</h3>
    <p>使用齐平列表组在卡片中创建内容列表。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <code-highlight type="html" :code="type40Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <div class="card-header">Featured</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      <code-highlight type="html" :code="type41Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-footer">Card footer</div>
        </div>
      </div>
      <code-highlight type="html" :code="type42Code" label="html" />
    </div>
    <h3>Kitchen sink</h3>
    <p>
      混合搭配多种内容类型，打造你所需的卡片，或者将所有内容都放进去。下面展示的是图片样式、区块、文本样式和一个列表组——全部都包裹在一个固定宽度的卡片中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card" style="width: 18rem">
          <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type5Code" label="html" />
    </div>
    <h3>Header and footer</h3>
    <p>在卡片中添加可选的页眉和/或页脚。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type60Code" label="html" />
    </div>
    <p>可以通过在 <code>&lt;h*&gt;</code> 元素上添加 <code>.card-header</code> 来设置卡片标题的样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card">
          <h5 class="card-header">Featured</h5>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type61Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card">
          <div class="card-header">Quote</div>
          <div class="card-body">
            <figure>
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="type62Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card text-center">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-body-secondary">2 days ago</div>
        </div>
      </div>
      <code-highlight type="html" :code="type63Code" label="html" />
    </div>

    <h2 id="card-sizing">
      尺寸调整<a class="anchor-link" aria-label="Link to this section: 尺寸调整" href="#card-sizing"> </a>
    </h2>
    <p>
      卡片一开始没有特定的
      <code>width</code>，除非另有说明，否则它们的宽度将为100%。你可以根据需要通过自定义 CSS、 grid classes、grid Sass
      mixins 或 utilities 来更改这一点。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="card w-75 mb-3">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>

        <div class="card w-50">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Button</a>
          </div>
        </div>

        <hr />

        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="sizingCode" label="html" />
    </div>

    <h2 id="card-align">
      文本对齐<a class="anchor-link" aria-label="Link to this section: 文本对齐" href="#card-align"> </a>
    </h2>
    <p>
      您可以通过我们的
      <a href="https://getbootstrap.com//docs/5.3/utilities/text#text-alignment" target="_blank">文本对齐类</a>
      快速更改任何卡片（整体或特定部分）的文本对齐方式。
    </p>
    <div class="docs-example">
      <div class="card mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card text-center mb-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card text-end" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <code-highlight type="html" :code="alignCode" label="html" />
    </div>

    <h2 id="card-nav">导航<a class="anchor-link" aria-label="Link to this section: 导航" href="#card-nav"> </a></h2>
    <p>
      使用 Bootstrap 的
      <a href="https://getbootstrap.com//docs/5.3/components/navs-tabs">导航组件</a
      >，为卡片头部（或区块）添加一些导航功能。
    </p>

    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <hr />

        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="navCode" label="html" />
    </div>

    <h2 id="card-image">
      图片元素<a class="anchor-link" aria-label="Link to this section: 图片元素" href="#card-image"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card mb-3">
          <img src="https://picsum.photos/1000/400?random=1" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
          <img src="https://picsum.photos/1000/400?random=2" class="card-img-bottom" alt="..." />
        </div>

        <hr />

        <div class="card text-bg-dark">
          <img src="https://picsum.photos/1000/400?grayscale" class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="imageCode" label="html" />
    </div>
    <p class="text-bg-info">请注意，内容不应超过图像的高度。如果内容超过图像，则内容将显示在图像之外。</p>

    <h2 id="card-horizontal">
      水平方式<a class="anchor-link" aria-label="Link to this section: 水平方式" href="#card-horizontal"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://picsum.photos/200" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="horizontalCode" label="html" />
    </div>

    <h2 id="card-style">
      样式调整<a class="anchor-link" aria-label="Link to this section: 样式调整" href="#card-style"> </a>
    </h2>
    <p>卡片提供了多种选项，用于自定义其背景、边框和颜色。</p>
    <h3>Background and color</h3>
    <p>
      使用我们的
      <a href="https://getbootstrap.com/docs/5.3/helpers/color-background" target="_blank"
        >`.text-bg-{color}`辅助选择器</a
      >
      来设置与前景 <code>color</code> 形成对比的
      <code>background-color</code>。之前，为了进行样式设置，需要手动将您选择的
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors" target="_blank"><code>.text-{color}</code></a>
      和
      <a href="https://getbootstrap.com/docs/5.3/utilities/background" target="_blank"><code>.bg-{color}</code></a>
      进行配对，如果您愿意，仍然可以使用这种方式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card text-bg-primary mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-secondary mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-success mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-danger mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-warning mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-info mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card text-bg-dark mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="bgCode" label="html" />
    </div>
    <h3>Border</h3>
    <p>
      使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/borders">边框工具</a>
      来仅更改卡片的 <code>border-color</code>。请注意，您可以将 <code>.text-{color}</code> 类添加到父级
      <code>.card</code> 或卡片内容的一个子集上，如下所示。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card border-primary mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body text-primary">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-secondary mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body text-secondary">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-success mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body text-success">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-danger mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body text-danger">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-warning mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-info mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-light mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
        <div class="card border-dark mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="borderCode" label="html" />
    </div>
    <h3>Mixins utilities</h3>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card border-success mb-3" style="max-width: 18rem">
          <div class="card-header bg-transparent border-success">Header</div>
          <div class="card-body text-success">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
          </div>
          <div class="card-footer bg-transparent border-success">Footer</div>
        </div>
      </div>
      <code-highlight type="html" :code="mixinCode" label="html" />
    </div>

    <h2 id="card-layout">
      布局<a class="anchor-link" aria-label="Link to this section: 布局" href="#card-layout"> </a>
    </h2>
    <p>
      除了为卡片内的内容设计样式外，Bootstrap
      还提供了一些用于布局卡片系列的选项。目前，<strong>这些布局选项尚不支持响应式设计</strong>。
    </p>
    <h3>Card groups</h3>
    <p>
      使用卡片组将卡片渲染为具有相等宽度和高度的单个附加元素列。卡片组初始为堆叠状态，并使用
      <code>display: flex;</code> 在 <code>sm</code>
      断点处开始变为具有统一尺寸的附加状态。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card-group">
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="layout1Code" label="html" />
    </div>
    <p>当使用带有页脚的卡片组时，其内容会自动对齐。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="card-group">
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card
                has even longer content than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="layout2Code" label="html" />
    </div>
    <h3>Grid cards</h3>
    <p>
      使用 Bootstrap 网格系统及其
      <a href="https://getbootstrap.com/docs/5.3/layout/grid#row-columns" target="_blank"><code>.row-cols-*</code></a>
      来控制每行显示的网格列数（围绕卡片）。例如，这里的
      <code>.row-cols-1</code> 将卡片布局在一列上，而
      <code>.row-cols-md-2</code>
      则从中等断点开始，将四张卡片等宽地拆分到多行中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="layout3Code" label="html" />
    </div>
    <p>
      当你需要等高时，可以在卡片上添加
      <code>.h-100</code>。如果你希望默认情况下卡片高度相等，可以在 Sass 中设置 <code>$card-height: 100%</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="layout4Code" label="html" />
    </div>
    <h3>Masonry</h3>
    <p>
      在 <code>v4</code> 中，我们使用了一种仅依赖 CSS 的技术来模拟类似
      <a href="https://masonry.desandro.com/" target="_blank">Masonry</a>
      的列布局行为，但这种技术带来了许多令人不快的
      <a href="https://github.com/twbs/bootstrap/pull/28922" target="_blank">副作用</a>。如果你希望在
      <code>v5</code>
      中使用这种布局，你可以直接使用Masonry插件。<strong>Masonry并未包含在Bootstrap中</strong>，但我们制作了一个
      <a href="https://getbootstrap.com/docs/5.3/examples/masonry" target="_blank">演示示例</a>
      来帮助你入门。
    </p>

    <h2 id="card-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#card-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，卡片现在在
      <code>.card</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_card.scss" />
  </div>
</template>

<script setup>
const exampleCode = `
<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const type1Code = `
<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>`;

const type2Code = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;

const type3Code = `
<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`;

const type40Code = `
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>`;

const type41Code = `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>`;

const type42Code = `
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div>`;

const type5Code = `
<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/400/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;

const type60Code = `
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const type61Code = `
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const type62Code = `
<div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <figure>
      <blockquote class="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </figcaption>
    </figure>
  </div>
</div>`;

const type63Code = `
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>`;

const sizingCode = `
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

<hr/>

<div class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>

<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>

<hr/>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const alignCode = `
<div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-center mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card text-end" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const navCode = `
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<hr/>

<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

const imageCode = `
<div class="card mb-3">
  <img src="https://picsum.photos/1000/400?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src="https://picsum.photos/1000/400?random=2" class="card-img-bottom" alt="...">
</div>

<hr/>

<div class="card text-bg-dark">
  <img src="https://picsum.photos/1000/400?grayscale" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>`;

const horizontalCode = `
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://picsum.photos/200" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`;

const bgCode = `
<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`;

const borderCode = `
<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-secondary">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-danger">
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`;

const mixinCode = `
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>`;

const layout1Code = `
<div class="card-group">
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>`;

const layout2Code = `
<div class="card-group">
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>`;

const layout3Code = `
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>`;

const layout4Code = `
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>`;

const css1Code = `
--#{$prefix}card-spacer-y: #{$card-spacer-y};
--#{$prefix}card-spacer-x: #{$card-spacer-x};
--#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};
--#{$prefix}card-title-color: #{$card-title-color};
--#{$prefix}card-subtitle-color: #{$card-subtitle-color};
--#{$prefix}card-border-width: #{$card-border-width};
--#{$prefix}card-border-color: #{$card-border-color};
--#{$prefix}card-border-radius: #{$card-border-radius};
--#{$prefix}card-box-shadow: #{$card-box-shadow};
--#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};
--#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};
--#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};
--#{$prefix}card-cap-bg: #{$card-cap-bg};
--#{$prefix}card-cap-color: #{$card-cap-color};
--#{$prefix}card-height: #{$card-height};
--#{$prefix}card-color: #{$card-color};
--#{$prefix}card-bg: #{$card-bg};
--#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};
--#{$prefix}card-group-margin: #{$card-group-margin};`;
</script>
