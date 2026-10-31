
<template>
  <article>
    <h1>Gutters</h1>
    <p>Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.</p>

    <h2 id="how-they-work">How they work<a class="anchor-link" href="#how-they-work" aria-label="Link to How they work"></a></h2>
    <ul>
    <li><p><strong>Gutters are the gaps between column content, created by horizontal <code>padding</code>.</strong> We set <code>padding-right</code> and <code>padding-left</code> on each column, and use negative <code>margin</code> to offset that at the start and end of each row to align content.</p>
    </li>
    <li><p><strong>Gutters start at <code>1.5rem</code> (<code>24px</code>) wide.</strong> This allows us to match our grid to the <a href="[[docsref:/utilities/spacing]]">padding and margin spacers</a> scale.</p>
    </li>
    <li><p><strong>Gutters can be responsively adjusted.</strong> Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.</p>
    </li>
    </ul>
    <h2 id="horizontal-gutters">Horizontal gutters<a class="anchor-link" href="#horizontal-gutters" aria-label="Link to Horizontal gutters"></a></h2>
    <p><code>.gx-*</code> classes can be used to control the horizontal gutter widths. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we’ve increased the padding with <code>.px-4</code>:</p>
    <Example class="docs-example-cols" code='<div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col">
            <div class="p-3">Custom column padding</div>
          </div>
        </div>
      </div>' /><p>An alternative solution is to add a wrapper around the <code>.row</code> with the <code>.overflow-hidden</code> class:</p>
    <Example class="docs-example-cols" code='<div class="container overflow-hidden text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col">
            <div class="p-3">Custom column padding</div>
          </div>
        </div>
      </div>' /><h2 id="vertical-gutters">Vertical gutters<a class="anchor-link" href="#vertical-gutters" aria-label="Link to Vertical gutters"></a></h2>
    <p><code>.gy-*</code> classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the <code>.row</code> at the end of a page. If this occurs, you add a wrapper around <code>.row</code> with the <code>.overflow-hidden</code> class:</p>
    <Example class="docs-example-cols" code='<div class="container overflow-hidden text-center">
        <div class="row gy-5">
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
        </div>
      </div>' /><h2 id="horizontal-vertical-gutters">Horizontal &amp; vertical gutters<a class="anchor-link" href="#horizontal-vertical-gutters" aria-label="Link to Horizontal &amp; vertical gutters"></a></h2>
    <p>Use <code>.g-*</code> classes to control the horizontal and vertical grid gutters. In the example below, we use a smaller gutter width, so there isn’t a need for the <code>.overflow-hidden</code> wrapper class.</p>
    <Example class="docs-example-cols" code='<div class="container text-center">
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
          <div class="col-6">
            <div class="p-3">Custom column padding</div>
          </div>
        </div>
      </div>' /><h2 id="row-columns-gutters">Row columns gutters<a class="anchor-link" href="#row-columns-gutters" aria-label="Link to Row columns gutters"></a></h2>
    <p>Gutter classes can also be added to <a href="[[docsref:/layout/grid#row-columns]]">row columns</a>. In the following example, we use responsive row columns and responsive gutter classes.</p>
    <Example class="docs-example-cols" code='<div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
          <div class="col">
            <div class="p-3">Row column</div>
          </div>
        </div>
      </div>' /><h2 id="no-gutters">No gutters<a class="anchor-link" href="#no-gutters" aria-label="Link to No gutters"></a></h2>
    <p>The gutters between columns in our predefined grid classes can be removed with <code>.g-0</code>. This removes the negative <code>margin</code>s from <code>.row</code> and the horizontal <code>padding</code> from all immediate children columns.</p>
    <p><strong>Need an edge-to-edge design?</strong> Drop the parent <code>.container</code> or <code>.container-fluid</code> and add <code>.mx-0</code> to the <code>.row</code> to prevent overflow.</p>
    <p>In practice, here’s how it looks. Note that you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).</p>
    <Example class="docs-example-row" code='<div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>' /><h2 id="change-the-gutters">Change the gutters<a class="anchor-link" href="#change-the-gutters" aria-label="Link to Change the gutters"></a></h2>
    <p>Classes are built from the <code>$gutters</code> Sass map which is inherited from the <code>$spacers</code> Sass map.</p>
    <pre><code class="language-scss">$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
    </code></pre>
  </article>
</template>
