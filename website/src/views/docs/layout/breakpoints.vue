<template>

    <div class="docs-intro">
      <h1>Breakpoints</h1>
        <p>Breakpoints are customizable widths that determine how your responsive layout behaves across device or
          viewport sizes in Bootstrap.</p>
    </div>
    <div class="docs-toc">
          <nav id="TableOfContents" aria-label="Table of contents">
            <ul>
              <li><a href="#core-concepts">Core concepts</a></li>
              <li><a href="#available-breakpoints">Available breakpoints</a></li>
              <li><a href="#media-queries">Media queries</a>
                <ul>
                  <li><a href="#min-width">Min-width</a></li>
                  <li><a href="#max-width">Max-width</a></li>
                  <li><a href="#single-breakpoint">Single breakpoint</a></li>
                  <li><a href="#between-breakpoints">Between breakpoints</a></li>
                </ul>
              </li>
              <li><a href="#container-queries">Container queries</a>
                <ul>
                  <li><a href="#usage-in-bootstrap">Usage in Bootstrap</a></li>
                  <li><a href="#setting-a-container">Setting a container</a></li>
                  <li><a href="#container-query-mixins">Container query mixins</a></li>
                  <li><a href="#named-containers">Named containers</a></li>
                </ul>
              </li>
            </ul>
          </nav>
    </div>

    <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents">
      <h2 id="core-concepts">Core concepts<a class="anchor-link" aria-label="Link to this section: Core concepts"
          href="#core-concepts"> </a></h2>
      <ul>
        <li>
          <p><strong>Breakpoints are the building blocks of responsive design.</strong> Use them to control when your
            layout can be adapted at a particular viewport or device size.</p>
        </li>
        <li>
          <p><strong>Use media queries to architect your CSS by breakpoint.</strong> Media queries are a feature of CSS
            that allow you to conditionally apply styles based on a set of browser and operating system parameters. We
            most commonly use <code>min-width</code> in our media queries.</p>
        </li>
        <li>
          <p><strong>Mobile first, responsive design is the goal.</strong> Bootstrap’s CSS aims to apply the bare
            minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that
            design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience
            for your visitors.</p>
        </li>
      </ul>
      <h2 id="available-breakpoints">Available breakpoints<a class="anchor-link"
          aria-label="Link to this section: Available breakpoints" href="#available-breakpoints"> </a></h2>
      <p>Bootstrap includes six default breakpoints, sometimes referred to as <em>grid tiers</em>, for building
        responsively. These breakpoints can be customized if you’re using our source Sass files.</p>
      <div class="table-responsive">







































        <table class="table md:table-stacked">
          <thead>
            <tr>
              <th>Breakpoint</th>
              <th>Class infix</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-cell="Breakpoint">Extra small</td>
              <td data-cell="Class infix"><em>None</em></td>
              <td data-cell="Dimensions">&lt;576px</td>
            </tr>
            <tr>
              <td data-cell="Breakpoint">Small</td>
              <td data-cell="Class infix"><code>sm</code></td>
              <td data-cell="Dimensions">≥576px</td>
            </tr>
            <tr>
              <td data-cell="Breakpoint">Medium</td>
              <td data-cell="Class infix"><code>md</code></td>
              <td data-cell="Dimensions">≥768px</td>
            </tr>
            <tr>
              <td data-cell="Breakpoint">Large</td>
              <td data-cell="Class infix"><code>lg</code></td>
              <td data-cell="Dimensions">≥1024px</td>
            </tr>
            <tr>
              <td data-cell="Breakpoint">Extra large</td>
              <td data-cell="Class infix"><code>xl</code></td>
              <td data-cell="Dimensions">≥1280px</td>
            </tr>
            <tr>
              <td data-cell="Breakpoint">Extra extra large</td>
              <td data-cell="Class infix"><code>2xl</code></td>
              <td data-cell="Dimensions">≥1536px</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are
        also representative of a subset of common device sizes and viewport dimensions—they don’t specifically target
        every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly
        any device.</p>
      <p>These breakpoints are customizable via Sass—you’ll find them in a Sass map in our <code>_config.scss</code>
        stylesheet.</p>
      <CodeHighlight :code="breakpointsCode" lang="scss" label="scss/_config.scss"></CodeHighlight>
      <p>For more information and examples on how to modify our Sass maps and variables, please refer to <a
          href="/docs/6.0/layout/grid#css">the CSS section of the Grid documentation</a>.</p>
      <h2 id="media-queries">Media queries<a class="anchor-link" aria-label="Link to this section: Media queries"
          href="#media-queries"> </a></h2>
      <p>Since Bootstrap is developed to be mobile first, we use a handful of <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">media
          queries</a> to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based
        on minimum viewport widths and allow us to scale up elements as the viewport changes.</p>
      <h3 id="min-width">Min-width<a class="anchor-link" aria-label="Link to this section: Min-width" href="#min-width">
        </a></h3>
      <p>Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our
        layout, grid system, and components.</p>
        <CodeHighlight :code="mediaQueriesCode" lang="scss"></CodeHighlight>
      <p>These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:
      </p>
      <CodeHighlight :code="mediaQueriesCompiledCode" lang="scss"></CodeHighlight>
      <h3 id="max-width">Max-width<a class="anchor-link" aria-label="Link to this section: Max-width" href="#max-width">
        </a></h3>
      <p>We occasionally use media queries that go in the other direction (the given screen size <em>or smaller</em>):
      </p>
      <CodeHighlight :code="mediaQueriesMaxCode" lang="scss"></CodeHighlight>
      <p>These mixins use the breakpoint values to create <code>max-width</code> media queries using modern range
        syntax. For example:</p>
        <CodeHighlight :code="mediaQueriesMaxCompiledCode" lang="scss"></CodeHighlight>
      <h3 id="single-breakpoint">Single breakpoint<a class="anchor-link"
          aria-label="Link to this section: Single breakpoint" href="#single-breakpoint"> </a></h3>
      <p>There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and
        maximum breakpoint widths.</p>
        <CodeHighlight :code="mediaQueriesOnlyCode" lang="scss"></CodeHighlight>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">xs</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">sm</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">lg</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">xl</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#1A95CC, #68C3FA);--shiki-light:#1A95CC;--shiki-dark:#68C3FA">2</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">xl</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <p>For example the <code>@include media-breakpoint-only(md) { ... }</code> will result in :</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">media</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> (width</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> &gt;= 768px</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8"> and</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> (width</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> &lt; 1024px</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h3 id="between-breakpoints">Between breakpoints<a class="anchor-link"
          aria-label="Link to this section: Between breakpoints" href="#between-breakpoints"> </a></h3>
      <p>Similarly, media queries may span multiple breakpoint widths:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> media-breakpoint-between</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md, xl</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <p>Which results in:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Example</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Apply styles starting from medium devices and up to extra large devices</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">media</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> (width</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> &gt;= 768px</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8"> and</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> (width</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> &lt; 1280px</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h2 id="container-queries">Container queries<a class="anchor-link"
          aria-label="Link to this section: Container queries" href="#container-queries"> </a></h2>
      <p>In addition to viewport-based media queries, Bootstrap uses <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">container
          queries</a> for certain components. Container queries allow elements to respond to the size of a parent
        element rather than the viewport, enabling more flexible and modular responsive behavior.</p>
      <p>Container queries use the same breakpoint values as viewport media queries.</p>
      <h3 id="usage-in-bootstrap">Usage in Bootstrap<a class="anchor-link"
          aria-label="Link to this section: Usage in Bootstrap" href="#usage-in-bootstrap"> </a></h3>
      <p>The following components use container queries:</p>
      <ul>
        <li>
          <p><strong><a href="/docs/6.0/components/navbar">Navbar</a></strong> — Uses container queries for its
            responsive expand behavior. The <code>.navbar</code> element is set as a query container, and the
            <code>.*:navbar-expand</code> classes use <code>@container</code> queries instead of <code>@media</code>
            queries. This means the navbar responds to its own width rather than the viewport width, making it more
            adaptable when placed in different layout contexts (e.g., within a sidebar or constrained container).</p>
        </li>
        <li>
          <p><strong><a href="/docs/6.0/components/stepper">Stepper</a></strong> — The <code>.stepper-overflow</code>
            wrapper uses <code>container-type: inline-size</code> to establish a containment context for the
            horizontally scrolling stepper pattern.</p>
        </li>
        <li>
          <p><strong><a href="/docs/6.0/components/list-group">List group</a></strong> — The
            <code>.*:list-group-horizontal</code> classes use <code>@container</code> queries so the list group switches
            between vertical and horizontal layouts based on the width of its query container rather than the viewport.
          </p>
        </li>
        <li>
          <p><strong><a href="/docs/6.0/components/card">Card</a></strong> — The <code>.card-group</code> layout uses an
            <code>@container</code> query to attach cards into equal-width columns based on the width of its query
            container rather than the viewport.</p>
        </li>
      </ul>
      <p>Here’s how the navbar implements container queries:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// The navbar is defined as a query container</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">navbar</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">  container-type</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">:</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8"> inline-size</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">;</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Responsive classes use container queries</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">lg</span><span style="color:light-dark(#1A95CC, #68C3FA);--shiki-light:#1A95CC;--shiki-dark:#68C3FA">\:</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">navbar-expand</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">  @</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">container</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> (</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">min-width</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">:</span><span style="color:light-dark(#1A95CC, #68C3FA);--shiki-light:#1A95CC;--shiki-dark:#68C3FA"> 1024</span><span style="color:light-dark(#BE273A, #F26167);--shiki-light:#BE273A;--shiki-dark:#F26167">px</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">    // Expanded navbar styles...</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  }</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h3 id="setting-a-container">Setting a container<a class="anchor-link"
          aria-label="Link to this section: Setting a container" href="#setting-a-container"> </a></h3>
      <p>Use the <code>set-container()</code> mixin to establish an element as a query container:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Default: inline-size containment</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">my-component</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">();</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">  // Output: container-type: inline-size;</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// With explicit type</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">my-component</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">size</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">);</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">  // Output: container-type: size;</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// With a name (uses shorthand property)</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">my-component</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">inline-size</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">, sidebar</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">);</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">  // Output: container: sidebar / inline-size;</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h3 id="container-query-mixins">Container query mixins<a class="anchor-link"
          aria-label="Link to this section: Container query mixins" href="#container-query-mixins"> </a></h3>
      <p>Similar to the <code>media-breakpoint-*</code> mixins for viewport-based media queries, Bootstrap provides
        container query mixins that use the same breakpoint values and range syntax.</p>
      <h4 id="min-width-1">Min-width<a class="anchor-link" aria-label="Link to this section: Min-width"
          href="#min-width-1"> </a></h4>
      <p>Use <code>container-breakpoint-up()</code> to apply styles when the container is at least the given breakpoint
        width:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">my-component</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">();</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">my-component-child</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">  // …</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-up</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">    // Styles for when container is at least 768px wide</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-up</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">lg</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">    // Styles for when container is at least 1024px wide</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  }</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <p>These mixins use the same modern range syntax as media queries. For example:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container (width &gt;= 768px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container (width &gt;= 1024px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h4 id="max-width-1">Max-width<a class="anchor-link" aria-label="Link to this section: Max-width"
          href="#max-width-1"> </a></h4>
      <p>Use <code>container-breakpoint-down()</code> to apply styles when the container is narrower than the given
        breakpoint:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Sass usage</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-down</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">lg</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Compiled CSS</span></span>
<span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container (width &lt; 1024px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h4 id="single-breakpoint-1">Single breakpoint<a class="anchor-link"
          aria-label="Link to this section: Single breakpoint" href="#single-breakpoint-1"> </a></h4>
      <p>Use <code>container-breakpoint-only()</code> to target a single breakpoint range:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Sass usage</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-only</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Compiled CSS</span></span>
<span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container (width &gt;= 768px) and (width &lt; 1024px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h4 id="between-breakpoints-1">Between breakpoints<a class="anchor-link"
          aria-label="Link to this section: Between breakpoints" href="#between-breakpoints-1"> </a></h4>
      <p>Use <code>container-breakpoint-between()</code> to span multiple breakpoint widths:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Sass usage</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">@</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-between</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md, xl</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Compiled CSS</span></span>
<span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container (width &gt;= 768px) and (width &lt; 1280px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <h3 id="named-containers">Named containers<a class="anchor-link"
          aria-label="Link to this section: Named containers" href="#named-containers"> </a></h3>
      <p>All container query mixins accept an optional container name parameter for querying a specific ancestor
        container. This is useful when you have nested containers:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">sidebar</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">inline-size</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">, sidebar</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">);</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">main-content</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> set-container</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#00B4F8, #00B4F8);--shiki-light:#00B4F8;--shiki-dark:#00B4F8">inline-size</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">, main</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">);</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">// Query the sidebar container specifically, even if nested inside main</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">.</span><span style="color:light-dark(#169D96, #5FCBC4);--shiki-light:#169D96;--shiki-dark:#5FCBC4">widget</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  @</span><span style="color:light-dark(#E12871, #ED618B);--shiki-light:#E12871;--shiki-dark:#ED618B">include</span><span style="color:light-dark(#7740FF, #9C68FF);--shiki-light:#7740FF;--shiki-dark:#9C68FF"> container-breakpoint-up</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">(</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">md, sidebar</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">)</span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D"> {</span></span>
<span class="line"><span style="color:light-dark(#636C74, #636C74);--shiki-light:#636C74;--shiki-dark:#636C74">    // …</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">  }</span></span>
<span class="line"><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <p>The compiled output includes the container name:</p>
      <div class="bd-code-snippet" data-pagefind-ignore="">
        <div class="hstack highlight-toolbar align-items-center">
          <div class="font-monospace text-uppercase fs-xs fg-3">SCSS</div>
          <div class="d-flex ms-auto align-items-center gap-1"><button type="button"
              class="btn btn-xs btn-icon bg-transparent" data-bd-clipboard="" aria-label="Copy"
              data-bs-original-title="Copy"><svg class="bi fs-md" aria-hidden="true">
                <use href="#copy"></use>
              </svg></button></div>
        </div>
        <pre class="astro-code astro-code-themes  ">          <code><span class="line"><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8">@container sidebar (width &gt;= 768px) </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">{</span><span style="color:light-dark(#0B0C0D, #F6F7F8);--shiki-light:#0B0C0D;--shiki-dark:#F6F7F8"> ... </span><span style="color:light-dark(#50575D, #50575D);--shiki-light:#50575D;--shiki-dark:#50575D">}</span></span></code>
        </pre>
      </div>
      <nav class="bd-links-nav py-9 mt-9 border-top">
        <div class="d-flex flex-column md:flex-row justify-content-stretch gap-3 md:gap-5 lh-1"><a
            href="/docs/6.0/customize/optimize/"
            class="d-flex flex-column gap-2 p-5 text-decoration-none border rounded-5 flex-grow-1" rel="prev">
            <div class="fg-3">← Previous</div>
            <div class="fw-semibold">Optimize</div>
            <div class="fg-3">Customize</div>
          </a><a href="/docs/6.0/layout/containers/"
            class="d-flex flex-column gap-2 p-5 text-decoration-none text-end border rounded-5 flex-grow-1" rel="next">
            <div class="fg-3">Next →</div>
            <div class="fw-semibold">Containers</div>
            <div class="fg-3">Layout</div>
          </a></div>
      </nav>
    </div>

</template>

<script setup>
const breakpointsCode = 
`$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);`;

const mediaQueriesCode = 
`// Source mixins

// No media query necessary for xs breakpoint as it’s effectively \`@media (min-width: 0) { ... }\`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(2xl) { ... }

// Usage

// Example: Hide starting at \`min-width: 0\`, and then show at the \`sm\` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}`;

const mediaQueriesCompiledCode = 
`// X-Small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (width >= 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (width >= 768px) { ... }

// Large devices (desktops, 1024px and up)
@media (width >= 1024px) { ... }

// X-Large devices (large desktops, 1280px and up)
@media (width >= 1280px) { ... }

// XX-Large devices (larger desktops, 1536px and up)
@media (width >= 1536px) { ... }`;

const mediaQueriesMaxCode = 
`// No media query necessary for xs breakpoint as it’s effectively \`@media (max-width: 0) { ... }\`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(2xl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}`;

const mediaQueriesMaxCompiledCode = 
`// \`xs\` returns only a ruleset and no media query
// ... { ... }

// \`sm\` applies to x-small devices (portrait phones, less than 576px)
@media (width < 576px) { ... }

// \`md\` applies to small devices (landscape phones, less than 768px)
@media (width < 768px) { ... }

// \`lg\` applies to medium devices (tablets, less than 1024px)
@media (width < 1024px) { ... }

// \`xl\` applies to large devices (desktops, less than 1280px)
@media (width < 1280px) { ... }

// \`2xl\` applies to x-large devices (large desktops, less than 1536px)
@media (width < 1536px) { ... }`;

const mediaQueriesOnlyCode = 
`@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(2xl) { ... }`;
</script>
