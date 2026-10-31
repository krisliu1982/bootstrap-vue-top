
<template>
  <article>
    <h1>Grid system</h1>
    <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.</p>

    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a> and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.</p>
    <Callout>
    <p><strong>New to or unfamiliar with flexbox?</strong> <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">Read this CSS Tricks flexbox guide</a> for background, terminology, guidelines, and code snippets.</p>
    </Callout><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div>' /><p>The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent <code>.container</code>.</p>
    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Breaking it down, here’s how the grid system comes together:</p>
    <ul>
    <li><p><strong>Our grid supports <a href="/layout/breakpoints">six responsive breakpoints</a>.</strong>  Breakpoints are based on <code>min-width</code> media queries, meaning they affect that breakpoint and all those above it (e.g., <code>.col-sm-4</code> applies to <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>). This means you can control container and column sizing and behavior by each breakpoint.</p>
    </li>
    <li><p><strong>Containers center and horizontally pad your content.</strong> Use <code>.container</code> for a responsive pixel width, <code>.container-fluid</code> for <code>width: 100%</code> across all viewports and devices, or a responsive container (e.g., <code>.container-md</code>) for a combination of fluid and pixel widths.</p>
    </li>
    <li><p><strong>Rows are wrappers for columns.</strong> Each column has horizontal <code>padding</code> (called a gutter) for controlling the space between them. This <code>padding</code> is then counteracted on the rows with negative margins to ensure the content in your columns is visually aligned down the left side. Rows also support modifier classes to <a href="#row-columns">uniformly apply column sizing</a> and <a href="/layout/gutters">gutter classes</a> to change the spacing of your content.</p>
    </li>
    <li><p><strong>Columns are incredibly flexible.</strong> There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., <code>col-4</code> spans four). <code>width</code>s are set in percentages so you always have the same relative sizing.</p>
    </li>
    <li><p><strong>Gutters are also responsive and customizable.</strong> <a href="/layout/gutters">Gutter classes are available</a> across all breakpoints, with all the same sizes as our <a href="/utilities/spacing">margin and padding spacing</a>. Change horizontal gutters with <code>.gx-*</code> classes, vertical gutters with <code>.gy-*</code>, or all gutters with <code>.g-*</code> classes. <code>.g-0</code> is also available to remove gutters.</p>
    </li>
    <li><p><strong>Sass variables, maps, and mixins power the grid.</strong> If you don’t want to use the predefined grid classes in Bootstrap, you can use our <a href="#sass-variables">grid’s source Sass</a> to create your own with more semantic markup. We also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.</p>
    </li>
    </ul>
    <p>Be aware of the limitations and <a href="https://github.com/philipwalton/flexbugs">bugs around flexbox</a>, like the <a href="https://github.com/philipwalton/flexbugs#flexbug-9">inability to use some HTML elements as flex containers</a>.</p>
    <h2 id="grid-options">Grid options<a class="anchor-link" href="#grid-options" aria-label="Link to Grid options"></a></h2>
    <p>Bootstrap’s grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follows:</p>
    <ul>
    <li>Extra small (xs)</li>
    <li>Small (sm)</li>
    <li>Medium (md)</li>
    <li>Large (lg)</li>
    <li>Extra large (xl)</li>
    <li>Extra extra large (xxl)</li>
    </ul>
    <p>As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here’s how the grid changes across these breakpoints:</p>
    <div class="table-responsive">
      <table class="table mb-4">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">xs<br/><span class="fw-normal">&lt;576px</span></th>
            <th scope="col">sm<br/><span class="fw-normal">&ge;576px</span></th>
            <th scope="col">md<br/><span class="fw-normal">&ge;768px</span></th>
            <th scope="col">lg<br/><span class="fw-normal">&ge;992px</span></th>
            <th scope="col">xl<br/><span class="fw-normal">&ge;1200px</span></th>
            <th scope="col">xxl<br/><span class="fw-normal">&ge;1400px</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th>
            <td>None (auto)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
            <td>1320px</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">Class prefix</th>
            <td><code>.col-</code></td>
            <td><code>.col-sm-</code></td>
            <td><code>.col-md-</code></td>
            <td><code>.col-lg-</code></td>
            <td><code>.col-xl-</code></td>
            <td><code>.col-xxl-</code></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row"># of columns</th>
            <td colspan="6">12</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">Gutter width</th>
            <td colspan="6">1.5rem (.75rem on left and right)</td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">Custom gutters</th>
            <td colspan="6"><a href="/layout/gutters">Yes</a></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">Nestable</th>
            <td colspan="6"><a href="#nesting">Yes</a></td>
          </tr>
          <tr>
            <th class="text-nowrap" scope="row">Column ordering</th>
            <td colspan="6"><a href="/layout/columns#reordering">Yes</a></td>
          </tr>
        </tbody>
      </table>
    </div><h2 id="auto-layout-columns">Auto-layout columns<a class="anchor-link" href="#auto-layout-columns" aria-label="Link to Auto-layout columns"></a></h2>
    <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code>.col-sm-6</code>.</p>
    <h3 id="equal-width">Equal-width<a class="anchor-link" href="#equal-width" aria-label="Link to Equal-width"></a></h3>
    <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xxl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col">
            1 of 2
          </div>
          <div class="col">
            2 of 2
          </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col">
            2 of 3
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>' /><h3 id="setting-one-column-width">Setting one column width<a class="anchor-link" href="#setting-one-column-width" aria-label="Link to Setting one column width"></a></h3>
    <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col-6">
            2 of 3 (wider)
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col-5">
            2 of 3 (wider)
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>' /><h3 id="variable-width-content">Variable width content<a class="anchor-link" href="#variable-width-content" aria-label="Link to Variable width content"></a></h3>
    <p>Use <code>col-{breakpoint}-auto</code> classes to size columns based on the natural width of their content.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col-md-auto">
            Variable width content
          </div>
          <div class="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>' /><h2 id="responsive-classes">Responsive classes<a class="anchor-link" href="#responsive-classes" aria-label="Link to Responsive classes"></a></h2>
    <p>Bootstrap’s grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
    <h3 id="all-breakpoints">All breakpoints<a class="anchor-link" href="#all-breakpoints" aria-label="Link to All breakpoints"></a></h3>
    <p>For grids that are the same from the smallest of devices to the largest, use the <code>.col</code> and <code>.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code>.col</code>.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
          <div class="col">col</div>
        </div>
        <div class="row">
          <div class="col-8">col-8</div>
          <div class="col-4">col-4</div>
        </div>
      </div>' /><h3 id="stacked-to-horizontal">Stacked to horizontal<a class="anchor-link" href="#stacked-to-horizontal" aria-label="Link to Stacked to horizontal"></a></h3>
    <p>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>
      </div>' /><h3 id="mix-and-match">Mix and match<a class="anchor-link" href="#mix-and-match" aria-label="Link to Mix and match"></a></h3>
    <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="row">
          <div class="col-md-8">.col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>
      </div>' /><h3 id="row-columns">Row columns<a class="anchor-link" href="#row-columns" aria-label="Link to Row columns"></a></h3>
    <p>Use the responsive <code>.row-cols-*</code> classes to quickly set the number of columns that best render your content and layout. Whereas normal <code>.col-*</code> classes apply to the individual columns (e.g., <code>.col-md-4</code>), the row columns classes are set on the parent <code>.row</code> as a shortcut. With <code>.row-cols-auto</code> you can give the columns their natural width.</p>
    <p>Use these row columns classes to quickly create basic grid layouts or to control your card layouts.</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-3">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-4">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-4">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col-6">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><Example class="docs-example-row" code='<div class="container text-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>' /><p>You can also use the accompanying Sass mixin, <code>row-cols()</code>:</p>
    <pre><code class="language-scss">.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
    </code></pre>
    <h2 id="nesting">Nesting<a class="anchor-link" href="#nesting" aria-label="Link to Nesting"></a></h2>
    <p>To nest your content with the default grid, add a new <code>.row</code> and set of <code>.col-sm-*</code> columns within an existing <code>.col-sm-*</code> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
    <Example class="docs-example-row" code='<div class="container text-center">
        <div class="row">
          <div class="col-sm-3">
            Level 1: .col-sm-3
          </div>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-8 col-sm-6">
                Level 2: .col-8 .col-sm-6
              </div>
              <div class="col-4 col-sm-6">
                Level 2: .col-4 .col-sm-6
              </div>
            </div>
          </div>
        </div>
      </div>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <p>When using Bootstrap’s source Sass files, you have the option of using Sass variables and mixins to create custom, semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide a whole suite of ready-to-use classes for fast responsive layouts.</p>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom mixins listed below.</p>
    <pre><code class="language-scss">$grid-columns:      12;
$grid-gutter-width: 1.5rem;
$grid-row-columns:  6;
    </code></pre>
    <ScssDocs name="grid-breakpoints" file="scss/_variables.scss" /><ScssDocs name="container-max-widths" file="scss/_variables.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <p>Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.</p>
    <pre><code class="language-scss">// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
    </code></pre>
    <h3 id="example-usage">Example usage<a class="anchor-link" href="#example-usage" aria-label="Link to Example usage"></a></h3>
    <p>You can modify the variables to your own custom values, or just use the mixins with their default values. Here’s an example of using the default settings to create a two-column layout with a gap between.</p>
    <pre><code class="language-scss">.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
    </code></pre>
    <Example code='<div class="example-container">
        <div class="example-row">
          <div class="example-content-main">Main content</div>
          <div class="example-content-secondary">Secondary content</div>
        </div>
      </div>' /><h2 id="customizing-the-grid">Customizing the grid<a class="anchor-link" href="#customizing-the-grid" aria-label="Link to Customizing the grid"></a></h2>
    <p>Using our built-in grid Sass variables and maps, it’s possible to completely customize the predefined grid classes. Change the number of tiers, the media query dimensions, and the container widths—then recompile.</p>
    <h3 id="columns-and-gutters">Columns and gutters<a class="anchor-link" href="#columns-and-gutters" aria-label="Link to Columns and gutters"></a></h3>
    <p>The number of grid columns can be modified via Sass variables. <code>$grid-columns</code> is used to generate the widths (in percent) of each individual column while <code>$grid-gutter-width</code> sets the width for the column gutters. <code>$grid-row-columns</code> is used to set the maximum number of columns of <code>.row-cols-*</code>, any number over this limit is ignored.</p>
    <pre><code class="language-scss">$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
$grid-row-columns: 6 !default;
    </code></pre>
    <h3 id="grid-tiers">Grid tiers<a class="anchor-link" href="#grid-tiers" aria-label="Link to Grid tiers"></a></h3>
    <p>Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four grid tiers, you’d update the <code>$grid-breakpoints</code> and <code>$container-max-widths</code> to something like this:</p>
    <pre><code class="language-scss">$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
    </code></pre>
    <p>When making any changes to the Sass variables or maps, you’ll need to save your changes and recompile. Doing so will output a brand-new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in <code>px</code> (not <code>rem</code>, <code>em</code>, or <code>%</code>).</p>
  </article>
</template>
