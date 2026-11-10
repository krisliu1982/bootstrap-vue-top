<template>
  <article class="bd-content">
    <h1>卡片</h1>
    <p class="lead">Bootstrap 的卡片提供了一个灵活且可扩展的内容容器，并带有多种变体和选项。</p>

    <h2 id="about">关于<a class="anchor-link" href="#about" aria-label="关于链接"></a></h2>
    <p>
      <strong>卡片</strong>是一个灵活且可扩展的内容容器。它包含页眉和页脚、丰富多样的内容、情境背景色以及强大的显示选项。如果你熟悉 Bootstrap 3，卡片取代了我们的旧版面板（panels）、井（wells）和缩略图（thumbnails）。这些组件的类似功能可作为卡片的修饰类使用。
    </p>
    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>卡片以尽可能少的标记和样式构建，但仍能提供大量控制和自定义能力。它们基于 flexbox 构建，提供简便的对齐方式，并能与其他 Bootstrap 组件良好配合。它们默认没有 <code>margin</code>，因此可根据需要使用<a href="/utilities/spacing">间距工具类</a>。</p>
    <p>
      下面是一个具有混合内容和固定宽度的基本卡片示例。卡片初始没有固定宽度，因此会自然填满其父元素的全部宽度。可以通过我们的各种
     <a href="#sizing">尺寸选项</a>轻松自定义。
    </p>
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
      ><div class="card" style="width: 18rem">
        <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
        <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></ExampleCustom
    >
    <h2 id="content-types">内容类型<a class="anchor-link" href="#content-types" aria-label="内容类型链接"></a></h2>
    <p>卡片支持多种内容类型，包括图片、文本、列表组、链接等。以下是支持内容的示例。</p>
    <h3 id="body">主体<a class="anchor-link" href="#body" aria-label="主体链接"></a></h3>
    <p>卡片的基本构成部分是 <code>.card-body</code>。当你需要在卡片内使用带内边距的区域时，就可以使用它。</p>
    <Example
      code='<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>'
    />
    <h3 id="titles-text-and-links">标题、文本和链接<a class="anchor-link" href="#titles-text-and-links" aria-label="标题、文本和链接"></a></h3>
    <p>通过在 <code>&lt;h*&gt;</code> 标签上添加 <code>.card-title</code> 即可使用卡片标题。同样，在 <code>&lt;a&gt;</code> 标签上添加 <code>.card-link</code> 即可添加链接并将它们并排放置。</p>
    <p>通过在 <code>&lt;h*&gt;</code> 标签上添加 <code>.card-subtitle</code> 即可使用副标题。如果将 <code>.card-title</code> 和 <code>.card-subtitle</code> 项放在 <code>.card-body</code> 项中，卡片标题和副标题将很好地对齐。</p>
    <Example
      code='<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>'
    />
    <h3 id="images">图片<a class="anchor-link" href="#images" aria-label="图片链接"></a></h3>
    <p><code>.card-img-top</code> 和 <code>.card-img-bottom</code> 分别将顶部和底部的圆角设置为与卡片边框相匹配。使用 <code>.card-text</code> 可以向卡片添加文本。<code>.card-text</code> 内的文本也可以使用标准 HTML 标签进行样式设置。</p>
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>'
      ><div class="card" style="width: 18rem">
        <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
        <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div></ExampleCustom
    >
    <h3 id="list-groups">列表组<a class="anchor-link" href="#list-groups" aria-label="列表组链接"></a></h3>
    <p>使用无边框的列表组在卡片中创建内容列表。</p>
    <Example
      code='<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>'
    /><Example
      code='<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>'
    /><Example
      code='<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div>'
    />
    <h3 id="kitchen-sink">综合示例<a class="anchor-link" href="#kitchen-sink" aria-label="综合示例链接"></a></h3>
    <p>混合搭配多种内容类型，创建你所需的卡片，或者把所有内容都放进去。下面展示了图片样式、块、文本样式和一个列表组——全部包裹在一个固定宽度的卡片中。</p>
    <ExampleCustom
      code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
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
</div>'
      ><div class="card" style="width: 18rem">
        <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
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
      </div></ExampleCustom
    >
    <h3 id="header-and-footer">页眉和页脚<a class="anchor-link" href="#header-and-footer" aria-label="页眉和页脚链接"></a></h3>
    <p>在卡片内添加可选的页眉和/或页脚。</p>
    <Example
      code='<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
    />
    <p>通过在 <code>&lt;h*&gt;</code> 元素上添加 <code>.card-header</code>，可以为卡片页眉设置样式。</p>
    <Example
      code='<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
    /><Example
      code='<div class="card">
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
</div>'
    /><Example
      code='<div class="card text-center">
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
</div>'
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>卡片初始不假设特定的 <code>width</code>，因此除非另有说明，它们将是 100% 宽。你可以根据需要使用自定义 CSS、网格类、网格 Sass mixin 或工具类来更改它。</p>
    <h3 id="using-grid-markup">使用网格标记<a class="anchor-link" href="#using-grid-markup" aria-label="使用网格标记链接"></a></h3>
    <p>使用网格系统，根据需要将卡片包裹在列和行中。</p>
    <Example
      code='<div class="row">
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
</div>'
    />
    <h3 id="using-utilities">使用工具类<a class="anchor-link" href="#using-utilities" aria-label="使用工具类链接"></a></h3>
    <p>使用我们提供的这些<a href="/utilities/sizing">可用尺寸工具类</a>即可快速设置卡片宽度。</p>
    <Example
      code='<div class="card w-75 mb-3">
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
</div>'
    />
    <h3 id="using-custom-css">使用自定义 CSS<a class="anchor-link" href="#using-custom-css" aria-label="使用自定义 CSS链接"></a></h3>
    <p>在样式表中使用自定义 CSS 或作为内联样式来设置宽度。</p>
    <Example
      code='<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
    />
    <h2 id="text-alignment">文本对齐<a class="anchor-link" href="#text-alignment" aria-label="文本对齐链接"></a></h2>
    <p>
      你可以使用我们的
     <a href="/utilities/text#text-alignment">文本对齐类</a>快速更改任意卡片的文本对齐方式——无论是整体还是特定部分。
    </p>
    <Example
      code='<div class="card mb-3" style="width: 18rem;">
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
</div>'
    />
    <h2 id="navigation">导航<a class="anchor-link" href="#navigation" aria-label="导航链接"></a></h2>
    <p>
      使用 Bootstrap 的
     <a href="/components/navs-tabs">导航组件</a>为卡片的页眉（或块）添加一些导航。
    </p>
    <Example
      code='<div class="card text-center">
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
</div>'
    /><Example
      code='<div class="card text-center">
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
</div>'
    />
    <h2 id="images-1">图片<a class="anchor-link" href="#images-1" aria-label="图片链接"></a></h2>
    <p>卡片包含几个处理图片的选项。你可以选择在卡片任一端附加“图片封面”、将图片与卡片内容叠加，或直接将图片嵌入卡片中。</p>
    <h3 id="image-caps">图片封面<a class="anchor-link" href="#image-caps" aria-label="图片封面链接"></a></h3>
    <p>与页眉和页脚类似，卡片可以包含顶部和底部“图片封面”——即位于卡片顶部或底部的图片。</p>
    <ExampleCustom
      code='<div class="card mb-3">
  <img src="..." class="card-img-top" alt="...">
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
  <img src="..." class="card-img-bottom" alt="...">
</div>'
      ><div class="card mb-3">
        <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
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
        <Placeholder width="100%" height="180" class="card-img-bottom" text="Image cap" /></div
    ></ExampleCustom>
    <h3 id="image-overlays">图片叠加<a class="anchor-link" href="#image-overlays" aria-label="图片叠加链接"></a></h3>
    <p>将图片设为卡片背景，并将卡片文本叠加其上。根据图片的不同，你可能需要也可能不需要额外的样式或工具类。</p>
    <ExampleCustom
      code='<div class="card text-bg-dark">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>'
      ><div class="card text-bg-dark">
        <Placeholder width="100%" height="270" class="bd-placeholder-img-lg card-img" text="Card image" />
        <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
      </div></ExampleCustom
    >
    <Callout>
      <p>请注意，内容不应大于图片的高度。如果内容大于图片，内容将显示在图片之外。</p>
    </Callout>
    <h2 id="horizontal">水平排列<a class="anchor-link" href="#horizontal" aria-label="水平排列链接"></a></h2>
    <p>
      结合使用网格和工具类，可以让卡片以适配移动端的响应式方式水平排列。在下面的示例中，我们使用
      <code>.g-0</code> 移除网格间距，并使用 <code>.col-md-*</code> 类使卡片在 <code>md</code> 断点处水平排列。根据卡片内容的不同，可能还需要进一步调整。
    </p>
    <ExampleCustom
      code='<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>'
      ><div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <Placeholder width="100%" height="250" text="Image" class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
          </div>
        </div>
      </div></ExampleCustom
    >
    <h2 id="card-styles">卡片样式<a class="anchor-link" href="#card-styles" aria-label="卡片样式链接"></a></h2>
    <p>卡片提供了多种选项来自定义其背景、边框和颜色。</p>
    <h3 id="background-and-color">背景和颜色<a class="anchor-link" href="#background-and-color" aria-label="背景和颜色链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      使用<a href="helpers/color-background">我们的 <code>.text-bg-{color}</code> 辅助类</a>设置具有对比前景 <code>color</code> 的 <code>background-color</code>。以前需要手动搭配所选的<a href="/utilities/colors"><code>.text-{color}</code></a>和
     <a href="/utilities/background"><code>.bg-{color}</code></a>工具类进行样式设置，如果你愿意，仍可继续使用。
    </p>
    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;card text-bg-${themeColor.name} mb-3&quot; style=&quot;max-width: 18rem;&quot;>
  <div class=&quot;card-header&quot;>Header</div>
  <div class=&quot;card-body&quot;>
    <h5 class=&quot;card-title&quot;>${themeColor.name} card title</h5>
    <p class=&quot;card-text&quot;>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`
          )
          .join('\n')
      "
    />
    <Callout name="warning-color-assistive-technologies" />
    <h3 id="border">边框<a class="anchor-link" href="#border" aria-label="边框链接"></a></h3>
    <p>使用<a href="/utilities/borders">边框工具类</a>仅更改卡片的 <code>border-color</code>。请注意，你可以将 <code>.text-{color}</code> 类放在父级 <code>.card</code> 上，或放在卡片内容的一部分上，如下所示。</p>
    <Example
      :code="
        data['theme-colors']
          .map(
            (themeColor) => `<div class=&quot;card border-${themeColor.name} mb-3&quot; style=&quot;max-width: 18rem;&quot;>
  <div class=&quot;card-header&quot;>Header</div>
  <div class=&quot;card-body${themeColor.contrast_color ? '' : ' text-' + themeColor.name}&quot;>
    <h5 class=&quot;card-title&quot;>${themeColor.name} card title</h5>
    <p class=&quot;card-text&quot;>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>`
          )
          .join('\n')
      "
    />
    <h3 id="mixins-utilities">Mixin 工具类<a class="anchor-link" href="#mixins-utilities" aria-label="Mixin 工具类链接"></a></h3>
    <p>
      你还可以根据需要更改卡片页眉和页脚的边框，甚至使用 <code>.bg-transparent</code> 移除它们的
      <code>background-color</code>。
    </p>
    <Example
      code='<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>'
    />
    <h2 id="card-layout">卡片布局<a class="anchor-link" href="#card-layout" aria-label="卡片布局链接"></a></h2>
    <p>
      除了为卡片内的内容设置样式外，Bootstrap 还提供了几个用于布局一系列卡片的选项。目前，
      <strong>这些布局选项尚不具备响应式能力</strong>。
    </p>
    <h3 id="card-groups">卡片组<a class="anchor-link" href="#card-groups" aria-label="卡片组链接"></a></h3>
    <p>使用卡片组可将卡片渲染为具有相同宽度和高度列的单一相连元素。卡片组一开始是堆叠的，从 <code>sm</code> 断点开始使用 <code>display: flex;</code> 变为具有统一尺寸的相连元素。</p>
    <ExampleCustom
      code='<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>'
      ><div class="card-group">
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
<div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
        </div>
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
        </div>
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
        </div>
      </div></ExampleCustom
    >
    <p>当使用带页脚的卡片组时，其内容会自动对齐。</p>
    <ExampleCustom
      code='<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
</div>'
      ><div class="card-group">
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
        </div>
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
        </div>
        <div class="card">
          <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </div>
        </div>
      </div></ExampleCustom
    >
    <h3 id="grid-cards">网格卡片<a class="anchor-link" href="#grid-cards" aria-label="网格卡片链接"></a></h3>
    <p>
      使用 Bootstrap 网格系统及其
     <a href="/layout/grid#row-columns"><code>.row-cols</code> 类</a>来控制每行显示的网格列数（包裹卡片）。例如，这里的 <code>.row-cols-1</code> 将卡片排成一列，而 <code>.row-cols-md-2</code> 在中型断点及以上将四张卡片分成等宽的多行。
    </p>
    <ExampleCustom
      code='<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>'
      ><div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
      </div></ExampleCustom
    >
    <p>将其改为 <code>.row-cols-3</code>，你会看到第四张卡片换行。</p>
    <ExampleCustom
      code='<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>'
      ><div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
      </div></ExampleCustom
    >
    <p>当你需要等高时，为卡片添加 <code>.h-100</code>。如果希望默认等高，可以在 Sass 中设置 <code>$card-height: 100%</code>。</p>
    <ExampleCustom
      code='<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>'
      ><div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="140" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
          </div>
        </div>
      </div></ExampleCustom
    >
    <p>与卡片组一样，卡片页脚会自动对齐。</p>
    <ExampleCustom
      code='<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>'
      ><div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
            <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
            <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
            <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div></ExampleCustom
    >
    <h3 id="masonry">瀑布流（Masonry）<a class="anchor-link" href="#masonry" aria-label="瀑布流（Masonry）链接"></a></h3>
    <p>
      在 <code>v4</code> 中，我们使用仅靠 CSS 的技巧来模拟<a href="https://masonry.desandro.com/">瀑布流（Masonry）</a>式列布局，但这种技巧带来了许多令人不快的<a href="https://github.com/twbs/bootstrap/pull/28922">副作用</a>。如果你希望在 <code>v5</code> 中使用这种布局，可以直接使用
      瀑布流（Masonry）插件。<strong>Masonry 并不包含在 Bootstrap 中</strong>，但我们提供了一个<a href="https://getbootstrap.com/docs/5.3/examples/masonry">演示示例</a>帮助你入门。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS链接"></a></h2>
    <h3 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      作为 Bootstrap 不断演进的 CSS 变量方案的一部分，卡片现在在
      <code>.card</code> 上使用局部 CSS 变量，以便更好地进行实时自定义。CSS 变量的值通过 Sass 设置，因此仍然支持 Sass 自定义。
    </p>
    <ScssDocs name="card-css-vars" file="scss/_card.scss" />
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="card-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#about">关于</a></li>
      <li><a href="#example">示例</a></li>
      <li>
       <a href="#content-types">内容类型</a>
        <ul>
          <li><a href="#body">Body</a></li>
          <li><a href="#titles-text-and-links">标题、文本和链接</a></li>
          <li><a href="#images">图片</a></li>
          <li><a href="#list-groups">列表组</a></li>
          <li><a href="#kitchen-sink">综合示例</a></li>
          <li><a href="#header-and-footer">页眉和页脚</a></li>
        </ul>
      </li>
      <li>
       <a href="#sizing">尺寸</a>
        <ul>
          <li><a href="#using-grid-markup">使用网格标记</a></li>
          <li><a href="#using-utilities">使用工具类</a></li>
          <li><a href="#using-custom-css">使用自定义 CSS</a></li>
        </ul>
      </li>
      <li><a href="#text-alignment">文本对齐</a></li>
      <li><a href="#navigation">导航</a></li>
      <li>
       <a href="#images-1">图片</a>
        <ul>
          <li><a href="#image-caps">图片封面</a></li>
          <li><a href="#image-overlays">图片叠加</a></li>
        </ul>
      </li>
      <li><a href="#horizontal">水平排列</a></li>
      <li>
       <a href="#card-styles">卡片样式</a>
        <ul>
          <li><a href="#background-and-color">背景和颜色</a></li>
          <li><a href="#border">边框</a></li>
          <li><a href="#mixins-utilities">Mixin 工具类</a></li>
        </ul>
      </li>
      <li>
       <a href="#card-layout">卡片布局</a>
        <ul>
          <li><a href="#card-groups">卡片组</a></li>
          <li><a href="#grid-cards">网格卡片</a></li>
          <li><a href="#masonry">瀑布流（Masonry）</a></li>
        </ul>
      </li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#variables">变量</a></li>
          <li><a href="#sass-variables">Sass 变量</a></li>
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
