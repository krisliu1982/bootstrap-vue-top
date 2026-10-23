<template>
  <div class="docs-intro">
    <h1>Columns</h1>
    <p>Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our
      flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.</p>
  </div>
  <div class="docs-toc">
    <nav id="TableOfContents" aria-label="Table of contents">
      <ul>
        <li><a href="#how-they-work">How they work</a></li>
        <li><a href="#alignment">Alignment</a>
          <ul>
            <li><a href="#vertical-alignment">Vertical alignment</a></li>
            <li><a href="#horizontal-alignment">Horizontal alignment</a></li>
            <li><a href="#column-wrapping">Column wrapping</a></li>
            <li><a href="#column-breaks">Column breaks</a></li>
          </ul>
        </li>
        <li><a href="#reordering">Reordering</a>
          <ul>
            <li><a href="#order-classes">Order classes</a></li>
            <li><a href="#offsetting-columns">Offsetting columns</a></li>
          </ul>
        </li>
        <li><a href="#standalone-column-classes">Standalone column classes</a></li>
      </ul>
    </nav>
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
    <div class="docs-callout docs-callout-info">
      <p><strong>Heads up!</strong> Be sure to <a href="/docs/6.0/layout/grid">read the Grid page</a> first before
        diving into how to modify and customize your grid columns.</p>
    </div>
    <h2 id="how-they-work">How they work<a class="anchor-link" aria-label="Link to this section: How they work"
        href="#how-they-work"> </a></h2>
    <ul>
      <li>
        <p><strong>Columns build on the grid’s flexbox architecture.</strong> Flexbox means we have options for
          changing individual columns and <a href="/docs/6.0/layout/grid#row-columns">modifying groups of columns at
            the row level</a>. You choose how columns grow, shrink, or otherwise change.</p>
      </li>
      <li>
        <p><strong>When building grid layouts, all content goes in columns.</strong> The hierarchy of Bootstrap’s grid
          goes from <a href="/docs/6.0/layout/containers">container</a> to row to column to your content. On rare
          occasions, you may combine content and column, but be aware there can be unintended consequences.</p>
      </li>
      <li>
        <p><strong>Bootstrap includes predefined classes for creating fast, responsive layouts.</strong> With <a
            href="/docs/6.0/layout/breakpoints">six breakpoints</a> and a dozen columns at each grid tier, we have
          dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you
          wish.</p>
      </li>
    </ul>
    <h2 id="alignment">Alignment<a class="anchor-link" aria-label="Link to this section: Alignment" href="#alignment">
      </a></h2>
    <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
    <h3 id="vertical-alignment">Vertical alignment<a class="anchor-link"
        aria-label="Link to this section: Vertical alignment" href="#vertical-alignment"> </a></h3>
    <p>Change the vertical alignment with any of the responsive <code>align-items-*</code> classes.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row align-items-end">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>Or, change the alignment of each column individually with any of the responsive <code>.align-self-*</code>
      classes.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row docs-example-row-flex-cols">
        <div class="container text-center">
          <div class="row">
            <div class="col align-self-start">
              One of three columns
            </div>
            <div class="col align-self-center">
              One of three columns
            </div>
            <div class="col align-self-end">
              One of three columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="horizontal-alignment">Horizontal alignment<a class="anchor-link"
        aria-label="Link to this section: Horizontal alignment" href="#horizontal-alignment"> </a></h3>
    <p>Change the horizontal alignment with any of the responsive <code>justify-content-*</code> classes.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row justify-content-start">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
          <div class="row justify-content-evenly">
            <div class="col-4">
              One of two columns
            </div>
            <div class="col-4">
              One of two columns
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="column-wrapping">Column wrapping<a class="anchor-link" aria-label="Link to this section: Column wrapping"
        href="#column-wrapping"> </a></h3>
    <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap
      onto a new line.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container">
          <div class="row">
            <div class="col-9">.col-9</div>
            <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line
              as one contiguous unit.</div>
            <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h3 id="column-breaks">Column breaks<a class="anchor-link" aria-label="Link to this section: Column breaks"
        href="#column-breaks"> </a></h3>
    <p>Breaking columns to a new line in flexbox requires a small hack: add an element with <code>width: 100%</code>
      wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple
      <code>.row</code>s, but not every implementation method can account for this.
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>

            <!-- Force next columns to break to new line -->
            <div class="w-100"></div>

            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
            <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
    <div class="col-6 sm:col-3">.col-6 .sm:col-3</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>You may also apply this break at specific breakpoints with our <a href="/docs/6.0/utilities/display">responsive
        display utilities</a>.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>

            <!-- Force next columns to break to new line at md breakpoint and up -->
            <div class="w-100 d-none md:d-block"></div>

            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
            <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none md:d-block"></div>

    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
    <div class="col-6 sm:col-4">.col-6 .sm:col-4</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="reordering">Reordering<a class="anchor-link" aria-label="Link to this section: Reordering"
        href="#reordering"> </a></h2>
    <h3 id="order-classes">Order classes<a class="anchor-link" aria-label="Link to this section: Order classes"
        href="#order-classes"> </a></h3>
    <p>Use <code>.order-</code> classes for controlling the <strong>visual order</strong> of your content. These
      classes are responsive, so you can set the <code>order</code> by breakpoint (e.g.,
      <code>.order-1.md:order-2</code>). Includes support for <code>1</code> through <code>5</code> across all six
      grid tiers.
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              First in DOM, no order applied
            </div>
            <div class="col order-5">
              Second in DOM, with a larger order
            </div>
            <div class="col order-1">
              Third in DOM, with an order of 1
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>There are also responsive <code>.order-first</code> and <code>.order-last</code> classes that change the
      <code>order</code> of an element by applying <code>order: -1</code> and <code>order: 6</code>, respectively.
      These classes can also be intermixed with the numbered <code>.order-*</code> classes as needed.
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="col order-last">
              First in DOM, ordered last
            </div>
            <div class="col">
              Second in DOM, unordered
            </div>
            <div class="col order-first">
              Third in DOM, ordered first
            </div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
    <div class="col order-first">
      Third in DOM, ordered first
    </div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>If you need more <code>.order-*</code> classes, you can add new ones by modifying our <code>$utilities</code>
      Sass map. <a href="/docs/6.0/customize/sass#maps-and-loops">Read our Sass maps and loops docs</a> or <a
        href="/docs/6.0/utilities/api#modify-utilities">our Modify utilities docs</a> for details.</p>
    <div class="docs-code-snippet" data-pagefind-ignore>
      <CodeHighlight :code='`// _my-utilities.scss
@use "sass:map";
@use "bootstrap/scss/config" as *;
@use "bootstrap/scss/utilities";

$utilities: map.merge(
  $utilities,
  (
    "order": map.merge(
      map.get($utilities, "order"),
      (
        values: map.merge(
          map.get(map.get($utilities, "order"), "values"),
          (
            6: 6, // Add a new 、\`.{breakpoint}:order-6\` utility
            last: 7, // Change the \`.{breakpoint}:order-last\` utility to use the next number
          ),
        ),
      ),
    ),
  )
);`' lang="scss"></CodeHighlight>
    </div>
    <p>Load this partial before <code>bootstrap/scss/bootstrap</code>. See <a
        href="/docs/6.0/utilities/api#modify-utilities">Modify utilities</a> for the full load order.</p>
    <h3 id="offsetting-columns">Offsetting columns<a class="anchor-link"
        aria-label="Link to this section: Offsetting columns" href="#offsetting-columns"> </a></h3>
    <p>You can offset grid columns in two ways: our responsive <code>.offset-</code> grid classes and our <a
        href="/docs/6.0/utilities/margin">margin utilities</a>. Grid classes are sized to match columns while margins
      are more useful for quick layouts where the width of the offset is variable.</p>
    <h4 id="offset-classes">Offset classes<a class="anchor-link" aria-label="Link to this section: Offset classes"
        href="#offset-classes"> </a></h4>
    <p>Move columns to the right using <code>.md:offset-*</code> classes. These classes increase the left margin of a
      column by <code>*</code> columns. For example, <code>.md:offset-4</code> moves <code>.md:col-4</code> over four
      columns.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="md:col-4">.md:col-4</div>
            <div class="md:col-4 md:offset-4">.md:col-4 .md:offset-4</div>
          </div>
          <div class="row">
            <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
            <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
          </div>
          <div class="row">
            <div class="md:col-6 md:offset-3">.md:col-6 .md:offset-3</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="md:col-4">.md:col-4</div>
    <div class="md:col-4 md:offset-4">.md:col-4 .md:offset-4</div>
  </div>
  <div class="row">
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
    <div class="md:col-3 md:offset-3">.md:col-3 .md:offset-3</div>
  </div>
  <div class="row">
    <div class="md:col-6 md:offset-3">.md:col-6 .md:offset-3</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in
      <a href="/docs/6.0/examples/grid/">the grid example</a>.
    </p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="sm:col-5 md:col-6">.sm:col-5 .md:col-6</div>
            <div class="sm:col-5 sm:offset-2 md:col-6 md:offset-0">.sm:col-5 .sm:offset-2 .md:col-6 .md:offset-0</div>
          </div>
          <div class="row">
            <div class="sm:col-6 md:col-5 lg:col-6">.sm:col-6 .md:col-5 .lg:col-6</div>
            <div class="sm:col-6 md:col-5 md:offset-2 lg:col-6 lg:offset-0">.sm:col-6 .md:col-5 .md:offset-2 .lg:col-6
              .lg:offset-0</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="sm:col-5 md:col-6">.sm:col-5 .md:col-6</div>
    <div class="sm:col-5 sm:offset-2 md:col-6 md:offset-0">.sm:col-5 .sm:offset-2 .md:col-6 .md:offset-0</div>
  </div>
  <div class="row">
    <div class="sm:col-6 md:col-5 lg:col-6">.sm:col-6 .md:col-5 .lg:col-6</div>
    <div class="sm:col-6 md:col-5 md:offset-2 lg:col-6 lg:offset-0">.sm:col-6 .md:col-5 .md:offset-2 .lg:col-6 .lg:offset-0</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h4 id="margin-utilities">Margin utilities<a class="anchor-link" aria-label="Link to this section: Margin utilities"
        href="#margin-utilities"> </a></h4>
    <p>With the move to flexbox in v4, you can use margin utilities like <code>.me-auto</code> to force sibling
      columns away from one another.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="container text-center">
          <div class="row">
            <div class="md:col-4">.md:col-4</div>
            <div class="md:col-4 ms-auto">.md:col-4 .ms-auto</div>
          </div>
          <div class="row">
            <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
            <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
          </div>
          <div class="row">
            <div class="col-auto me-auto">.col-auto .me-auto</div>
            <div class="col-auto">.col-auto</div>
          </div>
        </div>
      </div>
      <CodeHighlight :code='`<div class="container text-center">
  <div class="row">
    <div class="md:col-4">.md:col-4</div>
    <div class="md:col-4 ms-auto">.md:col-4 .ms-auto</div>
  </div>
  <div class="row">
    <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
    <div class="md:col-3 md:ms-auto">.md:col-3 .md:ms-auto</div>
  </div>
  <div class="row">
    <div class="col-auto me-auto">.col-auto .me-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>`' lang="html"></CodeHighlight>
    </div>
    <h2 id="standalone-column-classes">Standalone column classes<a class="anchor-link"
        aria-label="Link to this section: Standalone column classes" href="#standalone-column-classes"> </a></h2>
    <p>The <code>.col-*</code> classes can also be used outside a <code>.row</code> to give an element a specific
      width. Whenever column classes are used as non-direct children of a row, the paddings are omitted.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example docs-example-row">
        <div class="col-3 p-3 mb-2">
          .col-3: width of 25%
        </div>

        <div class="sm:col-9 p-3">
          .sm:col-9: width of 75% above sm breakpoint
        </div>
      </div>
      <CodeHighlight :code='`<div class="col-3 p-3 mb-2">
  .col-3: width of 25%
</div>

<div class="sm:col-9 p-3">
  .sm:col-9: width of 75% above sm breakpoint
</div>`' lang="html"></CodeHighlight>
    </div>
    <p>The classes can be used together with utilities to create responsive floated images. Make sure to wrap the
      content in a <a href="/docs/6.0/utilities/display#clearfix"><code>.d-flow-root</code></a> wrapper to clear the
      float if the text is shorter.</p>
    <div class="docs-example-snippet docs-code-snippet not-prose" data-pagefind-ignore>
      <div class="docs-example">
        <div class="d-flow-root">
          <svg aria-label="Placeholder: Responsive floated image"
            class="docs-placeholder-img md:col-6 md:float-end mb-3 md:ms-3" height="210"
            preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-bg-2)"></rect><text x="50%" y="50%" fill="var(--bs-fg-4)"
              dy=".3em">Responsive floated image</text>
          </svg>

          <p>
            A paragraph of placeholder text. We’re using it here to show the use of the d-flow-root utility. We’re
            adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated
            image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look
            with some actual content in here, rather than just this boring placeholder text that goes on and on, but
            actually conveys no tangible information at. It simply takes up space and should not really be read.
          </p>

          <p>
            And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights,
            or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
          </p>
        </div>
      </div>
      <CodeHighlight :code='`<div class="d-flow-root">
  <img src="..." class="md:col-6 md:float-end mb-3 md:ms-3" alt="...">

  <p>
    A paragraph of placeholder text. We’re using it here to show the use of the d-flow-root utility. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
  </p>
</div>`' lang="html"></CodeHighlight>
    </div>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/grid/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← Previous</div>
          <div class="fw-semibold">Grid</div>
          <div class="fg-3">Layout</div>
        </a><a href="/docs/6.0/layout/gutters/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">Next →</div>
          <div class="fw-semibold">Gutters</div>
          <div class="fg-3">Layout</div>
        </a></div>
    </nav>
  </div>
</template>