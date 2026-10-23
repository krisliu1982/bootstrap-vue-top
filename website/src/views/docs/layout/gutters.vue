<template>
    <div class="docs-intro pt-5 md:pt-2 lg:ps-2">
        <h1>Gutters</h1>
        <p>Gutters are the padding between your columns, used to responsively space and align content in the
            Bootstrap grid system.</p>
    </div>
    <div class="docs-toc">

        <nav id="TableOfContents" aria-label="Table of contents">
            <ul>
                <li><a href="#how-they-work">How they work</a></li>
                <li><a href="#horizontal-gutters">Horizontal gutters</a></li>
                <li><a href="#vertical-gutters">Vertical gutters</a></li>
                <li><a href="#horizontal--vertical-gutters">Horizontal &amp; vertical
                        gutters</a></li>
                <li><a href="#row-columns-gutters">Row columns gutters</a></li>
                <li><a href="#no-gutters">No gutters</a></li>
                <li><a href="#change-the-gutters">Change the gutters</a></li>
            </ul>
        </nav>
    </div>
    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
        <h2 id="how-they-work">How they work<a class="anchor-link" aria-label="Link to this section: How they work"
                href="#how-they-work"> </a></h2>
        <ul>
            <li>
                <p><strong>Gutters are the gaps between column content, created by horizontal
                        <code>padding</code>.</strong> We set <code>padding-right</code> and
                    <code>padding-left</code> on each column, and use negative <code>margin</code> to offset that at
                    the start and end of each row to align content.
                </p>
            </li>
            <li>
                <p><strong>Gutters start at <code>1.5rem</code> (<code>24px</code>) wide.</strong> This allows us to
                    match our grid to the <a href="/docs/6.0/utilities/margin">margin</a> and <a
                        href="/docs/6.0/utilities/padding">padding</a> utilities scale.</p>
            </li>
            <li>
                <p><strong>Gutters can be responsively adjusted.</strong> Use breakpoint-specific gutter classes to
                    modify horizontal gutters, vertical gutters, and all gutters.</p>
            </li>
        </ul>
        <h2 id="horizontal-gutters">Horizontal gutters<a class="anchor-link"
                aria-label="Link to this section: Horizontal gutters" href="#horizontal-gutters"> </a></h2>
        <p><code>.gx-*</code> classes can be used to control the horizontal gutter widths. The
            <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted if larger
            gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the
            following example we’ve increased the padding with <code>.px-4</code>:
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container px-4 text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>An alternative solution is to add a wrapper around the <code>.row</code> with the
            <code>.overflow-hidden</code> class:
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container overflow-hidden text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="<div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3">Custom column padding</div>
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="vertical-gutters">Vertical gutters<a class="anchor-link"
                aria-label="Link to this section: Vertical gutters" href="#vertical-gutters"> </a></h2>
        <p><code>.gy-*</code> classes can be used to control the vertical gutter widths within a row when columns
            wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the
            <code>.row</code> at the end of a page. If this occurs, you add a wrapper around <code>.row</code> with
            the <code>.overflow-hidden</code> class:
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container overflow-hidden text-center">
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
                </div>
            </div>
            <CodeHighlight :code='`<div class="container overflow-hidden text-center">
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
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="horizontal--vertical-gutters">Horizontal &amp; vertical gutters<a class="anchor-link"
                aria-label="Link to this section: Horizontal &amp; vertical gutters"
                href="#horizontal--vertical-gutters"> </a></h2>
        <p>Use <code>.g-*</code> classes to control the horizontal and vertical grid gutters. In the example below,
            we use a smaller gutter width, so there isn’t a need for the <code>.overflow-hidden</code> wrapper
            class.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container text-center">
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
                </div>
            </div>
            <CodeHighlight :code='`<div class="container text-center">
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
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="row-columns-gutters">Row columns gutters<a class="anchor-link"
                aria-label="Link to this section: Row columns gutters" href="#row-columns-gutters"> </a></h2>
        <p>Gutter classes can also be added to <a href="/docs/6.0/layout/grid#row-columns">row columns</a>. In the
            following example, we use responsive row columns and responsive gutter classes.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cols">
                <div class="container text-center">
                    <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
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
                </div>
            </div>
            <CodeHighlight :code='`<div class="container text-center">
  <div class="row row-cols-2 lg:row-cols-5 g-2 lg:g-3">
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
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="no-gutters">No gutters<a class="anchor-link" aria-label="Link to this section: No gutters"
                href="#no-gutters"> </a></h2>
        <p>The gutters between columns in our predefined grid classes can be removed with <code>.g-0</code>. This
            removes the negative <code>margin</code>s from <code>.row</code> and the horizontal <code>padding</code>
            from all immediate children columns.</p>
        <p><strong>Need an edge-to-edge design?</strong> Drop the parent <code>.container</code> or
            <code>.container-fluid</code> and add <code>.mx-0</code> to the <code>.row</code> to prevent overflow.
        </p>
        <p>In practice, here’s how it looks. Note that you can continue to use this with all other predefined grid
            classes (including column widths, responsive tiers, reorders, and more).</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-row">
                <div class="row g-0 text-center">
                    <div class="sm:col-6 md:col-8">.sm:col-6 .md:col-8</div>
                    <div class="col-6 md:col-4">.col-6 .md:col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="row g-0 text-center">
  <div class="sm:col-6 md:col-8">.sm:col-6 .md:col-8</div>
  <div class="col-6 md:col-4">.col-6 .md:col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="change-the-gutters">Change the gutters<a class="anchor-link"
                aria-label="Link to this section: Change the gutters" href="#change-the-gutters"> </a></h2>
        <p>Classes are built from the <code>$gutters</code> Sass map which is inherited from the
            <code>$spacers</code> Sass map.
        </p>
        <div class="docs-code-snippet" data-pagefind-ignore>
            <CodeHighlight :code='`$grid-gutter-x: 1.5rem;
$gutters: $spacers;`' lang="scss"></CodeHighlight>
        </div>

        <nav class="docs-links-nav py-9">
            <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/columns/"
                    class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
                    <div class="fg-3">← Previous</div>
                    <div class="fw-semibold">Columns</div>
                    <div class="fg-3">Layout</div>
                </a><a href="/docs/6.0/layout/utilities/"
                    class="d-flex flex-column gap-3 text-decoration-none flex-grow-1" rel="next">
                    <div class="fg-3">Next →</div>
                    <div class="fw-semibold">Utilities</div>
                    <div class="fg-3">Layout</div>
                </a></div>
        </nav>
    </div>
</template>