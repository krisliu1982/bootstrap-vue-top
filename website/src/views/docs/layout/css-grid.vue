<template>
    <div class="docs-intro">
        <h1>CSS Grid</h1>
        <p>Learn how to enable, use, and customize our alternate layout system built on CSS Grid with examples and
            code snippets.</p>
    </div>

    <div class="docs-toc">
        <nav id="TableOfContents" aria-label="Table of contents">
            <ul>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#key-differences">Key differences</a></li>
                <li><a href="#examples">Examples</a>
                    <ul>
                        <li><a href="#three-columns">Three columns</a></li>
                        <li><a href="#responsive">Responsive</a></li>
                        <li><a href="#playground">Playground</a></li>
                    </ul>
                </li>
                <li><a href="#wrapping">Wrapping</a></li>
                <li><a href="#starts">Starts</a></li>
                <li><a href="#auto-columns">Auto columns</a></li>
                <li><a href="#nesting">Nesting</a></li>
                <li><a href="#customizing">Customizing</a>
                    <ul>
                        <li><a href="#no-grid-classes">No grid classes</a></li>
                        <li><a href="#columns-and-gaps">Columns and gaps</a></li>
                        <li><a href="#adding-rows">Adding rows</a></li>
                        <li><a href="#gaps">Gaps</a></li>
                    </ul>
                </li>
                <li><a href="#sass">Sass</a></li>
            </ul>
        </nav>
    </div>
    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
        <p>Bootstrap’s default grid system represents the culmination of over a decade of CSS layout techniques, tried
            and tested by millions of people. But, it was also created without many of the modern CSS features and
            techniques we’re seeing in browsers like the new CSS Grid.</p>
        <div class="docs-callout docs-callout-warning">
            <p><strong>Heads up—our CSS Grid system is opt-in!</strong> We included it in our documentation’s CSS to
                demonstrate it for you, but it’s disabled by default. Keep reading to learn how to enable it in your
                projects. See also our <a href="/docs/6.0/utilities/container-queries">container query utilities</a>,
                which cover a related but distinct use case.</p>
        </div>
        <h2 id="how-it-works">How it works<a class="anchor-link" aria-label="Link to this section: How it works"
                href="#how-it-works"> </a></h2>
        <p>Bootstrap includes an optional grid system built on CSS Grid, but with a Bootstrap twist. You still get
            classes you can apply on a whim to build responsive layouts, but with a different approach under the hood.
        </p>
        <ul>
            <li>
                <p><strong>CSS Grid is opt-in.</strong> Disable the default grid system by setting
                    <code>$enable-grid-classes: false</code> and enable the CSS Grid by setting
                    <code>$enable-cssgrid: true</code>. Then, recompile your Sass.
                </p>
            </li>
            <li>
                <p><strong>Replace instances of <code>.row</code> with <code>.grid</code>.</strong> The
                    <code>.grid</code> class sets <code>display: grid</code> and creates a <code>grid-template</code>
                    that you build on with your HTML.
                </p>
            </li>
            <li>
                <p><strong>Replace <code>.col-*</code> classes with <code>.g-col-*</code> classes.</strong> This is
                    because our CSS Grid columns use the <code>grid-column</code> property instead of
                    <code>width</code>.
                </p>
            </li>
            <li>
                <p><strong>Columns and gutter sizes are set via CSS variables.</strong> Set these on the parent
                    <code>.grid</code> and customize however you want, inline or in a stylesheet, with
                    <code>--bs-columns</code> and <code>--bs-gap</code>.
                </p>
            </li>
            <li>
                <p><strong>Responsive classes use container queries.</strong> Each <code>.grid</code> is a query
                    container (<code>container-type: inline-size</code>), so responsive <code>.g-col-*</code> and
                    <code>.g-start-*</code> classes respond to the width of the <code>.grid</code> itself rather than
                    the viewport.
                </p>
            </li>
        </ul>
        <h2 id="key-differences">Key differences<a class="anchor-link"
                aria-label="Link to this section: Key differences" href="#key-differences"> </a></h2>
        <p>Compared to the default grid system:</p>
        <ul>
            <li>
                <p>Flex utilities don’t affect the CSS Grid columns in the same way.</p>
            </li>
            <li>
                <p>Gaps replaces gutters. The <code>gap</code> property replaces the horizontal <code>padding</code>
                    from our default grid system and functions more like <code>margin</code>.</p>
            </li>
            <li>
                <p>As such, unlike <code>.row</code>s, <code>.grid</code>s have no negative margins and margin utilities
                    cannot be used to change the grid gutters. Grid gaps are applied horizontally and vertically by
                    default. See the <a href="#customizing">customizing section</a> for more details.</p>
            </li>
            <li>
                <p>Inline and custom styles should be viewed as replacements for modifier classes (e.g.,
                    <code>style="--bs-columns: 3;"</code> vs <code>class="row-cols-3"</code>).
                </p>
            </li>
            <li>
                <p>Nesting works similarly, but may require you to reset your column counts on each instance of a nested
                    <code>.grid</code>. See the <a href="#nesting">nesting section</a> for details.
                </p>
            </li>
        </ul>
        <h2 id="examples">Examples<a class="anchor-link" aria-label="Link to this section: Examples" href="#examples">
            </a></h2>
        <h3 id="three-columns">Three columns<a class="anchor-link" aria-label="Link to this section: Three columns"
                href="#three-columns"> </a></h3>
        <p>Three equal-width columns across all container sizes and devices can be created by using the
            <code>.g-col-4</code> classes. Add <a href="#responsive">responsive classes</a> to change the layout by the
            <code>.grid</code> container’s width.
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-4">.g-col-4</div>
                    <div class="g-col-4">.g-col-4</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="responsive">Responsive<a class="anchor-link" aria-label="Link to this section: Responsive"
                href="#responsive"> </a></h3>
        <p>Use responsive classes to adjust your layout across breakpoints. Here we start with two columns on the
            narrowest containers, and then grow to three columns on medium containers and above. Drag the example’s
            handle to resize the <code>.grid</code> and watch the columns reflow based on its width rather than the
            viewport.</p>
        <div class="docs-callout docs-callout-info">
            <p>Responsive <code>.g-col-*</code> and <code>.g-start-*</code> classes are powered by <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">container
                    queries</a> rather than media queries. The <code>.grid</code> is set as a query container
                (<code>container-type: inline-size</code>), so its grid items respond to the width of the
                <code>.grid</code> itself instead of the viewport. This means a <code>.grid</code> placed inside a
                narrow column will switch layouts based on that column’s width, not the size of the browser window.
            </p>
        </div>
        <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
            <div class="docs-example docs-example-resizable bg-1">
                <div class="docs-resizable-container bg-body border border-keyline shadow-xs docs-example-cssgrid"
                    style="width: 100%; min-width: 200px;">
                    <div class="grid text-center">
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                        <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
                    </div><output class="docs-resizable-badge" data-resizable-badge="" aria-live="polite"
                        data-breakpoint="sm">sm · 677px</output>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
  <div class="g-col-6 md:g-col-4">.g-col-6 .md:g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>Compare that to this two column layout at all container sizes.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="playground">Playground<a class="anchor-link" aria-label="Link to this section: Playground"
                href="#playground"> </a></h3>
        <p>The examples above are constrained by the width of this page, so you can only resize them up to the
            <code>sm</code> range before running out of room. Open the fullscreen demo below to drag a set of grids
            across the full range of breakpoints and watch each layout reflow based on the container's width rather than
            the viewport.
        </p>
        <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog"
            data-bs-target="#gridPlaygroundDialog">
            <p>Open fullscreen grid demo</p>
        </button>
        <dialog class="dialog dialog-fullscreen dialog-scrollable" id="gridPlaygroundDialog">
            <div class="dialog-header">
                <h1 class="dialog-title">CSS Grid container queries</h1><button type="button" class="btn-close"
                    data-bs-dismiss="dialog" aria-label="Close"></button>
            </div>
            <div class="dialog-body">
                <p>Drag the handle on the right edge of the example to resize it. The badge shows the active
                    container-query breakpoint, and every grid below responds to the example's width—not the size of the
                    browser window.</p>
                <div class="docs-example-snippet docs-code-snippet" data-pagefind-ignore>
                    <div class="docs-example docs-example-resizable bg-1">
                        <div class="docs-resizable-container bg-body border border-keyline shadow-xs docs-example-cssgrid"
                            style="width: 100%; min-width: 200px;">
                            <div class="grid text-center">
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                                <div class="g-col-12 sm:g-col-6 md:g-col-4 lg:g-col-3 xl:g-col-2">cell</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                                <div class="g-col-6 md:g-col-3">card</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 lg:g-col-3">sidebar</div>
                                <div class="g-col-12 lg:g-col-9">main content</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 lg:g-col-8">primary</div>
                                <div class="g-col-12 lg:g-col-4">secondary</div>
                            </div>
                            <div class="grid text-center">
                                <div class="g-col-12 md:g-col-6 md:g-start-4">centered with .md:g-start-4</div>
                            </div><output class="docs-resizable-badge" data-resizable-badge="" aria-live="polite"
                                data-breakpoint="sm">sm · 651px</output>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer"><button type="button" class="btn-solid theme-secondary"
                    data-bs-dismiss="dialog">Close</button></div>
        </dialog>
        <h2 id="wrapping">Wrapping<a class="anchor-link" aria-label="Link to this section: Wrapping" href="#wrapping">
            </a></h2>
        <p>Grid items automatically wrap to the next line when there’s no more room horizontally. Note that the
            <code>gap</code> applies to horizontal and vertical gaps between grid items.
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="starts">Starts<a class="anchor-link" aria-label="Link to this section: Starts" href="#starts"> </a></h2>
        <p>Start classes aim to replace our default grid’s offset classes, but they’re not entirely the same. CSS Grid
            creates a grid template through styles that tell browsers to “start at this column” and “end at this
            column”. Those properties are <code>grid-column-start</code> and <code>grid-column-end</code>. Start classes
            are shorthand for the former. Pair them with the column classes to size and align your columns however you
            need. Start classes begin at <code>1</code> as <code>0</code> is an invalid value for these properties.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
                    <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-3 g-start-2">.g-col-3 .g-start-2</div>
  <div class="g-col-4 g-start-6">.g-col-4 .g-start-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="auto-columns">Auto columns<a class="anchor-link" aria-label="Link to this section: Auto columns"
                href="#auto-columns"> </a></h2>
        <p>When there are no classes on the grid items (the immediate children of a <code>.grid</code>), each grid item
            will automatically be sized to one column.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>This behavior can be mixed with grid column classes.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center">
                    <div class="g-col-6">.g-col-6</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center">
  <div class="g-col-6">.g-col-6</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
  <div>1</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="nesting">Nesting<a class="anchor-link" aria-label="Link to this section: Nesting" href="#nesting"> </a>
        </h2>
        <p>Similar to our default grid system, our CSS Grid allows for easy nesting of <code>.grid</code>s. However,
            unlike the default, this grid inherits changes in the rows, columns, and gaps. Consider the example below:
        </p>
        <ul>
            <li>We override the default number of columns with a local CSS variable: <code>--bs-columns: 3</code>.</li>
            <li>In the first auto-column, the column count is inherited and each column is one-third of the available
                width.</li>
            <li>In the second auto-column, we’ve reset the column count on the nested <code>.grid</code> to 12 (our
                default).</li>
            <li>The third auto-column has no nested content.</li>
        </ul>
        <p>In practice this allows for more complex and custom layouts when compared to our default grid system.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">
                    <div>
                        First auto-column
                        <div class="grid">
                            <div>Auto-column</div>
                            <div>Auto-column</div>
                        </div>
                    </div>
                    <div>
                        Second auto-column
                        <div class="grid" style="--bs-columns: 12;">
                            <div class="g-col-6">6 of 12</div>
                            <div class="g-col-4">4 of 12</div>
                            <div class="g-col-2">2 of 12</div>
                        </div>
                    </div>
                    <div>Third auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center overflow-x-auto" style="--bs-columns: 3;">
  <div>
    First auto-column
    <div class="grid">
      <div>Auto-column</div>
      <div>Auto-column</div>
    </div>
  </div>
  <div>
    Second auto-column
    <div class="grid" style="--bs-columns: 12;">
      <div class="g-col-6">6 of 12</div>
      <div class="g-col-4">4 of 12</div>
      <div class="g-col-2">2 of 12</div>
    </div>
  </div>
  <div>Third auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="customizing">Customizing<a class="anchor-link" aria-label="Link to this section: Customizing"
                href="#customizing"> </a></h2>
        <p>Customize the number of columns, the number of rows, and the width of the gaps with local CSS variables.</p>
        <div class="table-responsive">
            <table class="table md:table-stacked">
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Fallback value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-cell="Variable"><code>--bs-rows</code></td>
                        <td data-cell="Fallback value"><code>1</code></td>
                        <td data-cell="Description">The number of rows in your grid template</td>
                    </tr>
                    <tr>
                        <td data-cell="Variable"><code>--bs-columns</code></td>
                        <td data-cell="Fallback value"><code>12</code></td>
                        <td data-cell="Description">The number of columns in your grid template</td>
                    </tr>
                    <tr>
                        <td data-cell="Variable"><code>--bs-gap</code></td>
                        <td data-cell="Fallback value"><code>1.5rem</code></td>
                        <td data-cell="Description">The size of the gap between columns (vertical and horizontal)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>These CSS variables have no default value; instead, they apply fallback values that are used <em>until</em> a
            local instance is provided. For example, we use <code>var(--bs-rows, 1)</code> for our CSS Grid rows, which
            ignores <code>--bs-rows</code> because that hasn’t been set anywhere yet. Once it is, the <code>.grid</code>
            instance will use that value instead of the fallback value of <code>1</code>.</p>
        <h3 id="no-grid-classes">No grid classes<a class="anchor-link"
                aria-label="Link to this section: No grid classes" href="#no-grid-classes"> </a></h3>
        <p>Immediate children elements of <code>.grid</code> are grid items, so they’ll be sized without explicitly
            adding a <code>.g-col</code> class.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 3;">
                    <div>Auto-column</div>
                    <div>Auto-column</div>
                    <div>Auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 3;">
  <div>Auto-column</div>
  <div>Auto-column</div>
  <div>Auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="columns-and-gaps">Columns and gaps<a class="anchor-link"
                aria-label="Link to this section: Columns and gaps" href="#columns-and-gaps"> </a></h3>
        <p>Adjust the number of columns and the gap.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 4; --gap: 5rem;">
                    <div class="g-col-2">.g-col-2</div>
                    <div class="g-col-2">.g-col-2</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 4; --bs-gap: 5rem;">
  <div class="g-col-2">.g-col-2</div>
  <div class="g-col-2">.g-col-2</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 10; --gap: 1rem;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 10; --bs-gap: 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="adding-rows">Adding rows<a class="anchor-link" aria-label="Link to this section: Adding rows"
                href="#adding-rows"> </a></h3>
        <p>Adding more rows and changing the placement of columns:</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--rows: 3; --columns: 3;">
                    <div>Auto-column</div>
                    <div class="g-start-2" style="grid-row: 2">Auto-column</div>
                    <div class="g-start-3" style="grid-row: 3">Auto-column</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-rows: 3; --bs-columns: 3;">
  <div>Auto-column</div>
  <div class="g-start-2" style="grid-row: 2">Auto-column</div>
  <div class="g-start-3" style="grid-row: 3">Auto-column</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h3 id="gaps">Gaps<a class="anchor-link" aria-label="Link to this section: Gaps" href="#gaps"> </a></h3>
        <p>Change the vertical gaps only by modifying the <code>row-gap</code>. Note that we use <code>gap</code> on
            <code>.grid</code>s, but <code>row-gap</code> and <code>column-gap</code> can be modified as needed.
        </p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="row-gap: 0;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="row-gap: 0;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <p>Because of that, you can have different vertical and horizontal <code>gap</code>s, which can take a single
            value (all sides) or a pair of values (vertical and horizontal). This can be applied with an inline style
            for <code>gap</code>, or with our <code>--bs-gap</code> CSS variable.</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--gap: .25rem 1rem;">
                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>

                    <div class="g-col-6">.g-col-6</div>
                    <div class="g-col-6">.g-col-6</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-gap: .25rem 1rem;">
  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>

  <div class="g-col-6">.g-col-6</div>
  <div class="g-col-6">.g-col-6</div>
</div>`' lang="html"></CodeHighlight>
        </div>
        <h2 id="sass">Sass<a class="anchor-link" aria-label="Link to this section: Sass" href="#sass"> </a></h2>
        <p>One limitation of the CSS Grid is that our default classes are still generated by two Sass variables,
            <code>$grid-columns</code> and <code>$grid-gutter-x</code>. This effectively predetermines the number of
            classes generated in our compiled CSS. You have two options here:
        </p>
        <ul>
            <li>Modify those default Sass variables and recompile your CSS.</li>
            <li>Use inline or custom styles to augment the provided classes.</li>
        </ul>
        <p>For example, you can increase the column count and change the gap size, and then size your “columns” with a
            mix of inline styles and predefined CSS Grid column classes (e.g., <code>.g-col-4</code>).</p>
        <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
            <div class="docs-example docs-example-cssgrid">
                <div class="grid text-center" style="--columns: 18; --gap: .5rem;">
                    <div style="grid-column: span 14;">14 columns</div>
                    <div class="g-col-4">.g-col-4</div>
                </div>
            </div>
            <CodeHighlight :code='`<div class="grid text-center" style="--bs-columns: 18; --bs-gap: .5rem;">
  <div style="grid-column: span 14;">14 columns</div>
  <div class="g-col-4">.g-col-4</div>
</div>`' lang="html"></CodeHighlight>
        </div>

        <nav class="docs-links-nav py-9">
            <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/z-index/"
                    class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
                    <div class="fg-3">← Previous</div>
                    <div class="fw-semibold">Z-index</div>
                    <div class="fg-3">Layout</div>
                </a><a href="/docs/6.0/content/reboot/"
                    class="d-flex flex-column gap-3 text-decoration-none flex-grow-1" rel="next">
                    <div class="fg-3">Next →</div>
                    <div class="fw-semibold">Reboot</div>
                    <div class="fg-3">Content</div>
                </a></div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const e = [{ name: `xs`, min: 0 }, { name: `sm`, min: 576 }, { name: `md`, min: 768 }, { name: `lg`, min: 1024 }, { name: `xl`, min: 1280 }, { name: `2xl`, min: 1536 }];
function t(t) {
    let n = e[0];
    for (let r of e) t >= r.min && (n = r);
    return n
}

let observer = null;
onMounted(() => {
    document.querySelectorAll(`[data-resizable-badge]`).forEach(e => {
        let n = e.closest(`.docs-resizable-container`);
        if (!n) return;
        let r = n.querySelector(`:scope > *:not(.docs-resizable-badge)`) ?? n, i = n => { let r = t(n); e.dataset.breakpoint = r.name, e.textContent = `${r.name} · ${Math.round(n)}px` };
        observer = new ResizeObserver(e => {
            for (let t of e)
                i(t.contentBoxSize?.[0]?.inlineSize ?? t.contentRect.width)
        }).observe(r, { box: `content-box` })
    });
})

onBeforeUnmount(() => {
    observer?.disconnect();
})
</script>