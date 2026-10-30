
<template>
  <article>
    <h1>Z-index</h1>
    <p>Use our low-level `z-index` utilities to quickly change the stack level of an element or component.</p>

    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>Use <code>z-index</code> utilities to stack elements on top of one another. Requires a <code>position</code> value other than <code>static</code>, which can be set with custom styles or using our <a href="[[docsref:/utilities/position/]]">position utilities</a>.</p>
    <Callout>
    <p>We call these “low-level” <code>z-index</code> utilities because of their default values of <code>-1</code> through <code>3</code>, which we use for the layout of overlapping components. High-level <code>z-index</code> values are used for overlay components like modals and tooltips.</p>
    </Callout><Example class="bd-example-zindex-levels position-relative" code={`<div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
    <div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
    <div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
    <div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
    <div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>`} /><h2 id="overlays">Overlays<a class="anchor-link" href="#overlays" aria-label="Link to Overlays"></a></h2>
    <p>Bootstrap overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own <code>z-index</code> values to ensure a usable experience with competing “layers” of an interface.</p>
    <p>Read about them in the <a href="[[docsref:/layout/z-index]]"><code>z-index</code> layout page</a>.</p>
    <h2 id="component-approach">Component approach<a class="anchor-link" href="#component-approach" aria-label="Link to Component approach"></a></h2>
    <p>On some components, we use our low-level <code>z-index</code> values to manage repeating elements that overlap one another (like buttons in a button group or items in a list group).</p>
    <p>Learn about our <a href="[[docsref:/extend/approach#z-index-scales]]"><code>z-index</code> approach</a>.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Customize this Sass map to change the available values and generated utilities.</p>
    <ScssDocs name="zindex-levels-map" file="scss/_variables.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Position utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-zindex" file="scss/_utilities.scss" />
  </article>
</template>
