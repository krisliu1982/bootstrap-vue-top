<template>
  <article class="docs-content">
    <h1>Cards</h1>
    <p>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>

    <h2 id="about">About<a class="anchor-link" href="#about" aria-label="Link to About"></a></h2>
    <p>
      A <strong>card</strong> is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors,
      and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available
      as modifier classes for cards.
    </p>
    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>
      Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment
      and mix well with other Bootstrap components. They have no <code>margin</code> by default, so use <a href="/docs-bootstrap/5.3/utilities/spacing">spacing utilities</a> as
      needed.
    </p>
    <p>
      Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element.
      This is easily customized with our various
      <a href="#sizing">sizing options</a>.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'><div class="card" style="width: 18rem;">
    <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></ExampleCustom>
    <h2 id="content-types">Content types<a class="anchor-link" href="#content-types" aria-label="Link to Content types"></a></h2>
    <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>
    <h3 id="body">Body<a class="anchor-link" href="#body" aria-label="Link to Body"></a></h3>
    <p>The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.</p>
    <Example addStackblitzJs
      code='<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>'
    />
    <h3 id="titles-text-and-links">Titles, text, and links<a class="anchor-link" href="#titles-text-and-links" aria-label="Link to Titles, text, and links"></a></h3>
    <p>
      Card titles are used by adding <code>.card-title</code> to a <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed next to each other by adding
      <code>.card-link</code> to an <code>&lt;a&gt;</code> tag.
    </p>
    <p>
      Subtitles are used by adding a <code>.card-subtitle</code> to a <code>&lt;h*&gt;</code> tag. If the <code>.card-title</code> and the <code>.card-subtitle</code> items are
      placed in a <code>.card-body</code> item, the card title and subtitle are aligned nicely.
    </p>
    <Example addStackblitzJs
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
    <h3 id="images">Images<a class="anchor-link" href="#images" aria-label="Link to Images"></a></h3>
    <p>
      <code>.card-img-top</code> and <code>.card-img-bottom</code> respectively set the top and bottom corners rounded to match the card’s borders. With <code>.card-text</code>,
      text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>'><div class="card" style="width: 18rem;">
    <Placeholder width="100%" height="180" class="card-img-top" text="Image cap" />
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div></ExampleCustom>
    <h3 id="list-groups">List groups<a class="anchor-link" href="#list-groups" aria-label="Link to List groups"></a></h3>
    <p>Create lists of content in a card with a flush list group.</p>
    <Example addStackblitzJs
      code='<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>'
  /><Example addStackblitzJs
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
  /><Example addStackblitzJs
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
    <h3 id="kitchen-sink">Kitchen sink<a class="anchor-link" href="#kitchen-sink" aria-label="Link to Kitchen sink"></a></h3>
    <p>
      Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all
      wrapped in a fixed-width card.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="card" style="width: 18rem;">
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
</div>'><div class="card" style="width: 18rem;">
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
      </div></ExampleCustom>
    <h3 id="header-and-footer">Header and footer<a class="anchor-link" href="#header-and-footer" aria-label="Link to Header and footer"></a></h3>
    <p>Add an optional header and/or footer within a card.</p>
    <Example addStackblitzJs
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
    <p>Card headers can be styled by adding <code>.card-header</code> to <code>&lt;h*&gt;</code> elements.</p>
    <Example addStackblitzJs
      code='<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
  /><Example addStackblitzJs
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
  /><Example addStackblitzJs
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
    <h2 id="sizing">Sizing<a class="anchor-link" href="#sizing" aria-label="Link to Sizing"></a></h2>
    <p>
      Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass
      mixins, or utilities.
    </p>
    <h3 id="using-grid-markup">Using grid markup<a class="anchor-link" href="#using-grid-markup" aria-label="Link to Using grid markup"></a></h3>
    <p>Using the grid, wrap cards in columns and rows as needed.</p>
    <Example addStackblitzJs
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
    <h3 id="using-utilities">Using utilities<a class="anchor-link" href="#using-utilities" aria-label="Link to Using utilities"></a></h3>
    <p>Use our handful of <a href="/docs-bootstrap/5.3/utilities/sizing">available sizing utilities</a> to quickly set a card’s width.</p>
    <Example addStackblitzJs
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
    <h3 id="using-custom-css">Using custom CSS<a class="anchor-link" href="#using-custom-css" aria-label="Link to Using custom CSS"></a></h3>
    <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>
    <Example addStackblitzJs
      code='<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>'
    />
    <h2 id="text-alignment">Text alignment<a class="anchor-link" href="#text-alignment" aria-label="Link to Text alignment"></a></h2>
    <p>
      You can quickly change the text alignment of any card—in its entirety or specific parts—with our
      <a href="/docs-bootstrap/5.3/utilities/text#text-alignment">text align classes</a>.
    </p>
    <Example addStackblitzJs
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
    <h2 id="navigation">Navigation<a class="anchor-link" href="#navigation" aria-label="Link to Navigation"></a></h2>
    <p>
      Add some navigation to a card’s header (or block) with Bootstrap’s
      <a href="/docs-bootstrap/5.3/components/navs-tabs">nav components</a>.
    </p>
    <Example addStackblitzJs
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
  /><Example addStackblitzJs
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
    <h2 id="images-1">Images<a class="anchor-link" href="#images-1" aria-label="Link to Images"></a></h2>
    <p>
      Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the
      image in a card.
    </p>
    <h3 id="image-caps">Image caps<a class="anchor-link" href="#image-caps" aria-label="Link to Image caps"></a></h3>
    <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>
    <ExampleCustom addStackblitzJs code='<div class="card mb-3">
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
</div>'><div class="card mb-3">
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
        <Placeholder width="100%" height="180" class="card-img-bottom" text="Image cap" />
      </div></ExampleCustom>
    <h3 id="image-overlays">Image overlays<a class="anchor-link" href="#image-overlays" aria-label="Link to Image overlays"></a></h3>
    <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
    <ExampleCustom addStackblitzJs code='<div class="card text-bg-dark">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>'><div class="card text-bg-dark">
    <Placeholder width="100%" height="270" class="docs-placeholder-img-lg card-img" text="Card image" />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div></ExampleCustom>
    <Callout>
      <p>Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.</p>
    </Callout>
    <h2 id="horizontal">Horizontal<a class="anchor-link" href="#horizontal" aria-label="Link to Horizontal"></a></h2>
    <p>
      Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with
      <code>.g-0</code> and use <code>.col-md-*</code> classes to make the card horizontal at the <code>md</code> breakpoint. Further adjustments may be needed depending on your
      card content.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="card mb-3" style="max-width: 540px;">
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
</div>'><div class="card mb-3" style="max-width: 540px;">
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
      </div></ExampleCustom>
    <h2 id="card-styles">Card styles<a class="anchor-link" href="#card-styles" aria-label="Link to Card styles"></a></h2>
    <p>Cards include various options for customizing their backgrounds, borders, and color.</p>
    <h3 id="background-and-color">Background and color<a class="anchor-link" href="#background-and-color" aria-label="Link to Background and color"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      Set a <code>background-color</code> with contrasting foreground <code>color</code> with <a href="helpers/color-background">our <code>.text-bg-{color}</code> helpers</a>.
      Previously it was required to manually pair your choice of <a href="/docs-bootstrap/5.3/utilities/colors"><code>.text-{color}</code></a> and
      <a href="/docs-bootstrap/5.3/utilities/background"><code>.bg-{color}</code></a> utilities for styling, which you still may use if you prefer.
    </p>
    <Example addStackblitzJs
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
    <h3 id="border">Border<a class="anchor-link" href="#border" aria-label="Link to Border"></a></h3>
    <p>
      Use <a href="/docs-bootstrap/5.3/utilities/borders">border utilities</a> to change just the <code>border-color</code> of a card. Note that you can put
      <code>.text-{color}</code> classes on the parent <code>.card</code> or a subset of the card’s contents as shown below.
    </p>
    <Example addStackblitzJs
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
    <h3 id="mixins-utilities">Mixins utilities<a class="anchor-link" href="#mixins-utilities" aria-label="Link to Mixins utilities"></a></h3>
    <p>
      You can also change the borders on the card header and footer as needed, and even remove their
      <code>background-color</code> with <code>.bg-transparent</code>.
    </p>
    <Example addStackblitzJs
      code='<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>'
    />
    <h2 id="card-layout">Card layout<a class="anchor-link" href="#card-layout" aria-label="Link to Card layout"></a></h2>
    <p>
      In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being,
      <strong>these layout options are not yet responsive</strong>.
    </p>
    <h3 id="card-groups">Card groups<a class="anchor-link" href="#card-groups" aria-label="Link to Card groups"></a></h3>
    <p>
      Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use <code>display: flex;</code> to become
      attached with uniform dimensions starting at the <code>sm</code> breakpoint.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="card-group">
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
</div>'><div class="card-group">
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
      </div></ExampleCustom>
    <p>When using card groups with footers, their content will automatically line up.</p>
    <ExampleCustom addStackblitzJs code='<div class="card-group">
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
</div>'><div class="card-group">
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
      </div></ExampleCustom>
    <h3 id="grid-cards">Grid cards<a class="anchor-link" href="#grid-cards" aria-label="Link to Grid cards"></a></h3>
    <p>
      Use the Bootstrap grid system and its
      <a href="/docs-bootstrap/5.3/layout/grid#row-columns"><code>.row-cols</code> classes</a> to control how many grid columns (wrapped around your cards) you show per row. For
      example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from
      the medium breakpoint up.
    </p>
    <ExampleCustom addStackblitzJs code='<div class="row row-cols-1 row-cols-md-2 g-4">
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
</div>'><div class="row row-cols-1 row-cols-md-2 g-4">
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
      </div></ExampleCustom>
    <p>Change it to <code>.row-cols-3</code> and you’ll see the fourth card wrap.</p>
    <ExampleCustom addStackblitzJs code='<div class="row row-cols-1 row-cols-md-3 g-4">
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
</div>'><div class="row row-cols-1 row-cols-md-3 g-4">
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
      </div></ExampleCustom>
    <p>When you need equal height, add <code>.h-100</code> to the cards. If you want equal heights by default, you can set <code>$card-height: 100%</code> in Sass.</p>
    <ExampleCustom addStackblitzJs code='<div class="row row-cols-1 row-cols-md-3 g-4">
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
</div>'><div class="row row-cols-1 row-cols-md-3 g-4">
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
      </div></ExampleCustom>
    <p>Just like with card groups, card footers will automatically line up.</p>
    <ExampleCustom addStackblitzJs code='<div class="row row-cols-1 row-cols-md-3 g-4">
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
</div>'><div class="row row-cols-1 row-cols-md-3 g-4">
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
      </div></ExampleCustom>
    <h3 id="masonry">Masonry<a class="anchor-link" href="#masonry" aria-label="Link to Masonry"></a></h3>
    <p>
      In <code>v4</code> we used a CSS-only technique to mimic the behavior of <a href="https://masonry.desandro.com/">Masonry</a>-like columns, but this technique came with lots
      of unpleasant <a href="https://github.com/twbs/bootstrap/pull/28922">side effects</a>. If you want to have this type of layout in <code>v5</code>, you can just make use of
      Masonry plugin. <strong>Masonry is not included in Bootstrap</strong>, but we’ve made a <a href="https://getbootstrap.com/docs/5.3/examples/masonry">demo example</a> to help
      you get started.
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" />
    <p>
      As part of Bootstrap’s evolving CSS variables approach, cards now use local CSS variables on
      <code>.card</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.
    </p>
    <ScssDocs name="card-css-vars" file="scss/_card.scss" />
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="card-variables" file="scss/_variables.scss" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <h2 class="h6 mb-2">本页目录</h2>
    <ul class="list-unstyled mb-0">
      <li><a href="#about">About</a></li>
      <li><a href="#example">Example</a></li>
      <li>
        <a href="#content-types">Content types</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#body" class="ps-4">Body</a></li>
          <li><a href="#titles-text-and-links" class="ps-4">Titles, text, and links</a></li>
          <li><a href="#images" class="ps-4">Images</a></li>
          <li><a href="#list-groups" class="ps-4">List groups</a></li>
          <li><a href="#kitchen-sink" class="ps-4">Kitchen sink</a></li>
          <li><a href="#header-and-footer" class="ps-4">Header and footer</a></li>
        </ul>
      </li>
      <li>
        <a href="#sizing">Sizing</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#using-grid-markup" class="ps-4">Using grid markup</a></li>
          <li><a href="#using-utilities" class="ps-4">Using utilities</a></li>
          <li><a href="#using-custom-css" class="ps-4">Using custom CSS</a></li>
        </ul>
      </li>
      <li><a href="#text-alignment">Text alignment</a></li>
      <li><a href="#navigation">Navigation</a></li>
      <li>
        <a href="#images-1">Images</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#image-caps" class="ps-4">Image caps</a></li>
          <li><a href="#image-overlays" class="ps-4">Image overlays</a></li>
        </ul>
      </li>
      <li><a href="#horizontal">Horizontal</a></li>
      <li>
        <a href="#card-styles">Card styles</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#background-and-color" class="ps-4">Background and color</a></li>
          <li><a href="#border" class="ps-4">Border</a></li>
          <li><a href="#mixins-utilities" class="ps-4">Mixins utilities</a></li>
        </ul>
      </li>
      <li>
        <a href="#card-layout">Card layout</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#card-groups" class="ps-4">Card groups</a></li>
          <li><a href="#grid-cards" class="ps-4">Grid cards</a></li>
          <li><a href="#masonry" class="ps-4">Masonry</a></li>
        </ul>
      </li>
      <li>
        <a href="#css">CSS</a>
        <ul class="list-unstyled mb-0">
          <li><a href="#variables" class="ps-4">Variables</a></li>
          <li><a href="#sass-variables" class="ps-4">Sass variables</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import data from '@/data/data.js';
</script>
