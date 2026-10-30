
<template>
  <article>
    <h1>Stacks</h1>
    <p>Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.</p>

    <p>Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source <a href="https://almonk.github.io/pylon/">Pylon project</a>.</p>
    <Callout type="warning">
    <p><strong>Heads up!</strong> Support for gap utilities with flexbox isn’t available in Safari prior to 14.5, so consider verifying your intended browser support. Grid layout should have no issues. <a href="https://caniuse.com/flexbox-gap">Read more</a>.</p>
    </Callout><h2 id="vertical">Vertical<a class="anchor-link" href="#vertical" aria-label="Link to Vertical"></a></h2>
    <p>Use <code>.vstack</code> to create vertical layouts. Stacked items are full-width by default. Use <code>.gap-*</code> utilities to add space between items.</p>
    <Example class="bd-example-flex" code={`<div class="vstack gap-3">
        <div class="p-2">First item</div>
        <div class="p-2">Second item</div>
        <div class="p-2">Third item</div>
      </div>`} /><h2 id="horizontal">Horizontal<a class="anchor-link" href="#horizontal" aria-label="Link to Horizontal"></a></h2>
    <p>Use <code>.hstack</code> for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use <code>.gap-*</code> utilities to add space between items.</p>
    <Example class="bd-example-flex" code={`<div class="hstack gap-3">
        <div class="p-2">First item</div>
        <div class="p-2">Second item</div>
        <div class="p-2">Third item</div>
      </div>`} /><p>Using horizontal margin utilities like <code>.ms-auto</code> as spacers:</p>
    <Example class="bd-example-flex" code={`<div class="hstack gap-3">
        <div class="p-2">First item</div>
        <div class="p-2 ms-auto">Second item</div>
        <div class="p-2">Third item</div>
      </div>`} /><p>And with <a href="[[docsref:/helpers/vertical-rule]]">vertical rules</a>:</p>
    <Example class="bd-example-flex" code={`<div class="hstack gap-3">
        <div class="p-2">First item</div>
        <div class="p-2 ms-auto">Second item</div>
        <div class="vr"></div>
        <div class="p-2">Third item</div>
      </div>`} /><h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>Use <code>.vstack</code> to stack buttons and other elements:</p>
    <Example code={`<div class="vstack gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-secondary">Save changes</button>
        <button type="button" class="btn btn-outline-secondary">Cancel</button>
      </div>`} /><p>Create an inline form with <code>.hstack</code>:</p>
    <Example code={`<div class="hstack gap-3">
        <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
        <button type="button" class="btn btn-secondary">Submit</button>
        <div class="vr"></div>
        <button type="button" class="btn btn-outline-danger">Reset</button>
      </div>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <ScssDocs name="stacks" file="scss/helpers/_stacks.scss" />
  </article>
</template>
