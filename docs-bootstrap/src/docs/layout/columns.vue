
<template>
  <article>
    <h1>Columns</h1>
    <p>Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.</p>

    <Callout>
    <p><strong>Heads up!</strong> Be sure to <a href="[[docsref:/layout/grid]]">read the Grid page</a> first before diving into how to modify and customize your grid columns.</p>
    </Callout><h2 id="how-they-work">How they work<a class="anchor-link" href="#how-they-work" aria-label="Link to How they work"></a></h2>
    <ul>
    <li><p><strong>Columns build on the grid’s flexbox architecture.</strong> Flexbox means we have options for changing individual columns and <a href="[[docsref:/layout/grid#row-columns]]">modifying groups of columns at the row level</a>. You choose how columns grow, shrink, or otherwise change.</p>
    </li>
    <li><p><strong>When building grid layouts, all content goes in columns.</strong> The hierarchy of Bootstrap’s grid goes from <a href="[[docsref:/layout/containers]]">container</a> to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.</p>
    </li>
    <li><p><strong>Bootstrap includes predefined classes for creating fast, responsive layouts.</strong> With <a href="[[docsref:/layout/breakpoints]]">six breakpoints</a> and a dozen columns at each grid tier, we have dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.</p>
    </li>
    </ul>
    <h2 id="alignment">Alignment<a class="anchor-link" href="#alignment" aria-label="Link to Alignment"></a></h2>
    <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
    <h3 id="vertical-alignment">Vertical alignment<a class="anchor-link" href="#vertical-alignment" aria-label="Link to Vertical alignment"></a></h3>
    <p>Change the vertical alignment with any of the responsive <code>align-items-*</code> classes.</p>
    <Example class="bd-example-row bd-example-row-flex-cols" code='<div class="container text-center">
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
      </div>' /><Example class="bd-example-row bd-example-row-flex-cols" code='<div class="container text-center">
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
      </div>' /><Example class="bd-example-row bd-example-row-flex-cols" code='<div class="container text-center">
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
      </div>' /><p>Or, change the alignment of each column individually with any of the responsive <code>.align-self-*</code> classes.</p>
    <Example class="bd-example-row bd-example-row-flex-cols" code='<div class="container text-center">
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
      </div>' /><h3 id="horizontal-alignment">Horizontal alignment<a class="anchor-link" href="#horizontal-alignment" aria-label="Link to Horizontal alignment"></a></h3>
    <p>Change the horizontal alignment with any of the responsive <code>justify-content-*</code> classes.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
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
      </div>' /><h3 id="column-wrapping">Column wrapping<a class="anchor-link" href="#column-wrapping" aria-label="Link to Column wrapping"></a></h3>
    <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>
    <Example class="bd-example-row" code='<div class="container">
        <div class="row">
          <div class="col-9">.col-9</div>
          <div class="col-4">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
          <div class="col-6">.col-6<br>Subsequent columns continue along the new line.</div>
        </div>
      </div>' /><h3 id="column-breaks">Column breaks<a class="anchor-link" href="#column-breaks" aria-label="Link to Column breaks"></a></h3>
    <p>Breaking columns to a new line in flexbox requires a small hack: add an element with <code>width: 100%</code> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <code>.row</code>s, but not every implementation method can account for this.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
          <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

          <!-- Force next columns to break to new line -->
          <div class="w-100"></div>

          <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
          <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        </div>
      </div>' /><p>You may also apply this break at specific breakpoints with our <a href="[[docsref:/utilities/display]]">responsive display utilities</a>.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
          <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

          <!-- Force next columns to break to new line at md breakpoint and up -->
          <div class="w-100 d-none d-md-block"></div>

          <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
          <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
        </div>
      </div>' /><h2 id="reordering">Reordering<a class="anchor-link" href="#reordering" aria-label="Link to Reordering"></a></h2>
    <h3 id="order-classes">Order classes<a class="anchor-link" href="#order-classes" aria-label="Link to Order classes"></a></h3>
    <p>Use <code>.order-</code> classes for controlling the <strong>visual order</strong> of your content. These classes are responsive, so you can set the <code>order</code> by breakpoint (e.g., <code>.order-1.order-md-2</code>). Includes support for <code>1</code> through <code>5</code> across all six grid tiers.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
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
      </div>' /><p>There are also responsive <code>.order-first</code> and <code>.order-last</code> classes that change the <code>order</code> of an element by applying <code>order: -1</code> and <code>order: 6</code>, respectively. These classes can also be intermixed with the numbered <code>.order-*</code> classes as needed.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
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
      </div>' /><p>If you need more <code>.order-*</code> classes, you can add new ones by modifying our <code>$utilities</code> Sass map. <a href="[[docsref:/customize/sass#maps-and-loops]]">Read our Sass maps and loops docs</a> or <a href="[[docsref:/utilities/api#modify-utilities]]">our Modify utilities docs</a> for details.</p>
    <pre><code class="language-scss">$utilities: map-merge(
  $utilities,
  (
    &quot;order&quot;: map-merge(
      map-get($utilities, &quot;order&quot;),
      (
        values: map-merge(
          map-get(map-get($utilities, &quot;order&quot;), &quot;values&quot;),
          (
            6: 6, // Add a new `.order-{breakpoint}-6` utility
            last: 7 // Change the `.order-{breakpoint}-last` utility to use the next number
          )
        ),
      ),
    ),
  )
);
    </code></pre>
    <h3 id="offsetting-columns">Offsetting columns<a class="anchor-link" href="#offsetting-columns" aria-label="Link to Offsetting columns"></a></h3>
    <p>You can offset grid columns in two ways: our responsive <code>.offset-</code> grid classes and our <a href="[[docsref:/utilities/spacing]]">margin utilities</a>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>
    <h4 id="offset-classes">Offset classes</h4>
    <p>Move columns to the right using <code>.offset-md-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.offset-md-4</code> moves <code>.col-md-4</code> over four columns.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
          <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
      </div>' /><p>In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in <a href="[[docsref:/examples/grid/]]">the grid example</a>.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
          <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        </div>
      </div>' /><h4 id="margin-utilities">Margin utilities</h4>
    <p>With the move to flexbox in v4, you can use margin utilities like <code>.me-auto</code> to force sibling columns away from one another.</p>
    <Example class="bd-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-md-4">.col-md-4</div>
          <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
        </div>
        <div class="row">
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
          <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
        </div>
        <div class="row">
          <div class="col-auto me-auto">.col-auto .me-auto</div>
          <div class="col-auto">.col-auto</div>
        </div>
      </div>' /><h2 id="standalone-column-classes">Standalone column classes<a class="anchor-link" href="#standalone-column-classes" aria-label="Link to Standalone column classes"></a></h2>
    <p>The <code>.col-*</code> classes can also be used outside a <code>.row</code> to give an element a specific width. Whenever column classes are used as non-direct children of a row, the paddings are omitted.</p>
    <Example class="bd-example-row" code='<div class="col-3 p-3 mb-2">
        .col-3: width of 25%
      </div>

      <div class="col-sm-9 p-3">
        .col-sm-9: width of 75% above sm breakpoint
      </div>' /><p>The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a <a href="[[docsref:/helpers/clearfix]]"><code>.clearfix</code></a> wrapper to clear the float if the text is shorter.</p>
    <Example code='<div class="clearfix">
        <Placeholder width="100%" height="210" class="col-md-6 float-md-end mb-3 ms-md-3" text="Responsive floated image" />

        <p>
          A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there’s none of that here.
        </p>
      </div>' />
  </article>
</template>
