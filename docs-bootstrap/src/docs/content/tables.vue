
<template>
  <article>
    <h1>Tables</h1>
    <p>Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</p>

    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>Due to the widespread use of <code>&lt;table&gt;</code> elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are <strong>opt-in</strong>. Add the base class <code>.table</code> to any <code>&lt;table&gt;</code>, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.</p>
    <p>Using the most basic table markup, here’s how <code>.table</code>-based tables look in Bootstrap.</p>
    <Table class="table" simplified={false} /><h2 id="variants">Variants<a class="anchor-link" href="#variants" aria-label="Link to Variants"></a></h2>
    <p>Use contextual classes to color tables, table rows or individual cells.</p>
    <Callout>
    <p><strong>Heads up!</strong> Because of the more complicated CSS used to generate our table variants, they most likely won’t see color mode adaptive styling until v6.</p>
    </Callout><div class="bd-example">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          {getData('theme-colors').map((themeColor) => {
            return (
              <tr class={`table-${themeColor.name}`}>
                <th scope="row">{themeColor.title}</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div><Code code={[
      `<!-- On tables -->`,
      ...getData('theme-colors').map((themeColor) => `<table class="table-${themeColor.name}">...</table>`),
      `
    <!-- On rows -->`,
      ...getData('theme-colors').map((themeColor) => `<tr class="table-${themeColor.name}">...</tr>`),
      `
    <!-- On cells (\`td\` or \`th\`) -->
    <tr>`,
      ...getData('theme-colors').map((themeColor) => `  <td class="table-${themeColor.name}">...</td>`),
      `</tr>`
    ]} lang="html" /><Callout name="warning-color-assistive-technologies" /><h2 id="accented-tables">Accented tables<a class="anchor-link" href="#accented-tables" aria-label="Link to Accented tables"></a></h2>
    <h3 id="striped-rows">Striped rows<a class="anchor-link" href="#striped-rows" aria-label="Link to Striped rows"></a></h3>
    <p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
    <Table class="table table-striped" /><h3 id="striped-columns">Striped columns<a class="anchor-link" href="#striped-columns" aria-label="Link to Striped columns"></a></h3>
    <p>Use <code>.table-striped-columns</code> to add zebra-striping to any table column.</p>
    <Table class="table table-striped-columns" /><p>These classes can also be added to table variants:</p>
    <Table class="table table-dark table-striped" /><Table class="table table-dark table-striped-columns" /><Table class="table table-success table-striped" /><Table class="table table-success table-striped-columns" /><h3 id="hoverable-rows">Hoverable rows<a class="anchor-link" href="#hoverable-rows" aria-label="Link to Hoverable rows"></a></h3>
    <p>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p>
    <Table class="table table-hover" /><Table class="table table-dark table-hover" /><p>These hoverable rows can also be combined with the striped rows variant:</p>
    <Table class="table table-striped table-hover" /><h3 id="active-tables">Active tables<a class="anchor-link" href="#active-tables" aria-label="Link to Active tables"></a></h3>
    <p>Highlight a table row or cell by adding a <code>.table-active</code> class.</p>
    <Example showMarkup={false} code={`
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td class="table-active">@social</td>
        </tr>
      </tbody>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
      &lt;thead&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr class=&quot;table-active&quot;&gt;
          ...
        &lt;/tr&gt;
        &lt;tr&gt;
          ...
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
          &lt;td&gt;John&lt;/td&gt;
          &lt;td&gt;Doe&lt;/td&gt;
          &lt;td class=&quot;table-active&quot;&gt;@social&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <Example showMarkup={false} code={`
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td class="table-active">@social</td>
        </tr>
      </tbody>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table table-dark&quot;&gt;
      &lt;thead&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        &lt;tr class=&quot;table-active&quot;&gt;
          ...
        &lt;/tr&gt;
        &lt;tr&gt;
          ...
        &lt;/tr&gt;
        &lt;tr&gt;
          &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
          &lt;td&gt;John&lt;/td&gt;
          &lt;td&gt;Doe&lt;/td&gt;
          &lt;td class=&quot;table-active&quot;&gt;@social&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <h2 id="how-do-the-variants-and-accented-tables-work">How do the variants and accented tables work?<a class="anchor-link" href="#how-do-the-variants-and-accented-tables-work" aria-label="Link to How do the variants and accented tables work?"></a></h2>
    <p>For the accented tables (<a href="#striped-rows">striped rows</a>, <a href="#striped-columns">striped columns</a>, <a href="#hoverable-rows">hoverable rows</a>, and <a href="#active-tables">active tables</a>), we used some techniques to make these effects work for all our <a href="#variants">table variants</a>:</p>
    <ul>
    <li>We start by setting the background of a table cell with the <code>--bs-table-bg</code> custom property. All table variants then set that custom property to colorize the table cells. This way, we don’t get into trouble if semi-transparent colors are used as table backgrounds.</li>
    <li>Then we add an inset box shadow on the table cells with <code>box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));</code> to layer on top of any specified <code>background-color</code>. It uses custom cascade to override the <code>box-shadow</code>, regardless the CSS specificity. Because we use a huge spread and no blur, the color will be monotone. Since <code>--bs-table-accent-bg</code> is set to <code>transparent</code> by default, we don’t have a default box shadow.</li>
    <li>When either <code>.table-striped</code>, <code>.table-striped-columns</code>, <code>.table-hover</code> or <code>.table-active</code> classes are added, either <code>--bs-table-bg-type</code> or <code>--bs-table-bg-state</code> (by default set to <code>initial</code>) are set to a semitransparent color (<code>--bs-table-striped-bg</code>, <code>--bs-table-active-bg</code> or <code>--bs-table-hover-bg</code>) to colorize the background and override default <code>--bs-table-accent-bg</code>.</li>
    <li>For each table variant, we generate a <code>--bs-table-accent-bg</code> color with the highest contrast depending on that color. For example, the accent color for <code>.table-primary</code> is darker while <code>.table-dark</code> has a lighter accent color.</li>
    <li>Text and border colors are generated the same way, and their colors are inherited by default.</li>
    </ul>
    <p>Behind the scenes it looks like this:</p>
    <ScssDocs name="table-variant" file="scss/mixins/_table-variants.scss" /><h2 id="table-borders">Table borders<a class="anchor-link" href="#table-borders" aria-label="Link to Table borders"></a></h2>
    <h3 id="bordered-tables">Bordered tables<a class="anchor-link" href="#bordered-tables" aria-label="Link to Bordered tables"></a></h3>
    <p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
    <Table class="table table-bordered" /><p><a href="[[docsref:/utilities/borders#border-color]]">Border color utilities</a> can be added to change colors:</p>
    <Table class="table table-bordered border-primary" /><h3 id="tables-without-borders">Tables without borders<a class="anchor-link" href="#tables-without-borders" aria-label="Link to Tables without borders"></a></h3>
    <p>Add <code>.table-borderless</code> for a table without borders.</p>
    <Table class="table table-borderless" /><Table class="table table-dark table-borderless" /><h2 id="small-tables">Small tables<a class="anchor-link" href="#small-tables" aria-label="Link to Small tables"></a></h2>
    <p>Add <code>.table-sm</code> to make any <code>.table</code> more compact by cutting all cell <code>padding</code> in half.</p>
    <Table class="table table-sm" /><Table class="table table-dark table-sm" /><h2 id="table-group-dividers">Table group dividers<a class="anchor-link" href="#table-group-dividers" aria-label="Link to Table group dividers"></a></h2>
    <p>Add a thicker border, darker between table groups—<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code>—with <code>.table-group-divider</code>. Customize the color by changing the <code>border-top-color</code> (which we don’t currently provide a utility class for at this time).</p>
    <Example code={`<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>`} /><h2 id="vertical-alignment">Vertical alignment<a class="anchor-link" href="#vertical-alignment" aria-label="Link to Vertical alignment"></a></h2>
    <p>Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the top by default. Use the <a href="[[docsref:/utilities/vertical-align]]">vertical align</a> classes to re-align where needed.</p>
    <Example showMarkup={false} code={`
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col" class="w-25">Heading 1</th>
            <th scope="col" class="w-25">Heading 2</th>
            <th scope="col" class="w-25">Heading 3</th>
            <th scope="col" class="w-25">Heading 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
          <tr class="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
          <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td class="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.</td>
          </tr>
        </tbody>
      </table>
    </div>
    `} /><pre><code class="language-html">&lt;div class=&quot;table-responsive&quot;&gt;
      &lt;table class=&quot;table align-middle&quot;&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            ...
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          &lt;tr&gt;
            ...
          &lt;/tr&gt;
          &lt;tr class=&quot;align-bottom&quot;&gt;
            ...
          &lt;/tr&gt;
          &lt;tr&gt;
            &lt;td&gt;...&lt;/td&gt;
            &lt;td&gt;...&lt;/td&gt;
            &lt;td class=&quot;align-top&quot;&gt;This cell is aligned to the top.&lt;/td&gt;
            &lt;td&gt;...&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;
      &lt;/table&gt;
    &lt;/div&gt;
    </code></pre>
    <h2 id="nesting">Nesting<a class="anchor-link" href="#nesting" aria-label="Link to Nesting"></a></h2>
    <p>Border styles, active styles, and table variants are not inherited by nested tables.</p>
    <Example showMarkup={false} code={`
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td colspan="4">
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
                <tr>
                  <th scope="row">B</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
                <tr>
                  <th scope="row">C</th>
                  <td>First</td>
                  <td>Last</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table table-striped table-bordered&quot;&gt;
      &lt;thead&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        ...
        &lt;tr&gt;
          &lt;td colspan=&quot;4&quot;&gt;
            &lt;table class=&quot;table mb-0&quot;&gt;
              ...
            &lt;/table&gt;
          &lt;/td&gt;
        &lt;/tr&gt;
        ...
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <h2 id="how-nesting-works">How nesting works<a class="anchor-link" href="#how-nesting-works" aria-label="Link to How nesting works"></a></h2>
    <p>To prevent <em>any</em> styles from leaking to nested tables, we use the child combinator (<code>&gt;</code>) selector in our CSS. Since we need to target all the <code>td</code>s and <code>th</code>s in the <code>thead</code>, <code>tbody</code>, and <code>tfoot</code>, our selector would look pretty long without it. As such, we use the rather odd looking <code>.table &gt; :not(caption) &gt; * &gt; *</code> selector to target all <code>td</code>s and <code>th</code>s of the <code>.table</code>, but none of any potential nested tables.</p>
    <p>Note that if you add <code>&lt;tr&gt;</code>s as direct children of a table, those <code>&lt;tr&gt;</code> will be wrapped in a <code>&lt;tbody&gt;</code> by default, thus making our selectors work as intended.</p>
    <h2 id="anatomy">Anatomy<a class="anchor-link" href="#anatomy" aria-label="Link to Anatomy"></a></h2>
    <h3 id="table-head">Table head<a class="anchor-link" href="#table-head" aria-label="Link to Table head"></a></h3>
    <p>Similar to tables and dark tables, use the modifier classes <code>.table-light</code> or <code>.table-dark</code> to make <code>&lt;thead&gt;</code>s appear light or dark gray.</p>
    <Example showMarkup={false} code={`
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
      &lt;thead class=&quot;table-light&quot;&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        ...
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <Example showMarkup={false} code={`
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
      &lt;thead class=&quot;table-dark&quot;&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        ...
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <h3 id="table-foot">Table foot<a class="anchor-link" href="#table-foot" aria-label="Link to Table foot"></a></h3>
    <Example showMarkup={false} code={`
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
        </tr>
      </tfoot>
    </table>
    `} /><pre><code class="language-html">&lt;table class=&quot;table&quot;&gt;
      &lt;thead&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        ...
      &lt;/tbody&gt;
      &lt;tfoot&gt;
        ...
      &lt;/tfoot&gt;
    &lt;/table&gt;
    </code></pre>
    <h3 id="captions">Captions<a class="anchor-link" href="#captions" aria-label="Link to Captions"></a></h3>
    <p>A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
    <div class="bd-example">
      <table class="table">
        <caption>List of users</caption>
        <TableContent />
      </table>
    </div><pre><code class="language-html">&lt;table class=&quot;table table-sm&quot;&gt;
      &lt;caption&gt;List of users&lt;/caption&gt;
      &lt;thead&gt;
        ...
      &lt;/thead&gt;
      &lt;tbody&gt;
        ...
      &lt;/tbody&gt;
    &lt;/table&gt;
    </code></pre>
    <p>You can also put the <code>&lt;caption&gt;</code> on the top of the table with <code>.caption-top</code>.</p>
    <Example code={`<table class="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>`} /><h2 id="responsive-tables">Responsive tables<a class="anchor-link" href="#responsive-tables" aria-label="Link to Responsive tables"></a></h2>
    <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code>.table</code> with <code>.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code>.</p>
    <Callout type="warning">
    <h5 id="vertical-clippingtruncation">Vertical clipping/truncation</h5>
    <p>Responsive tables make use of <code>overflow-y: hidden</code>, which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets.</p>
    </Callout><h3 id="always-responsive">Always responsive<a class="anchor-link" href="#always-responsive" aria-label="Link to Always responsive"></a></h3>
    <p>Across every breakpoint, use <code>.table-responsive</code> for horizontally scrolling tables.</p>
    <Example showMarkup={false} code={`
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
    </div>
    `} /><pre><code class="language-html">&lt;div class=&quot;table-responsive&quot;&gt;
      &lt;table class=&quot;table&quot;&gt;
        ...
      &lt;/table&gt;
    &lt;/div&gt;
    </code></pre>
    <h3 id="breakpoint-specific">Breakpoint specific<a class="anchor-link" href="#breakpoint-specific" aria-label="Link to Breakpoint specific"></a></h3>
    <p>Use <code>.table-responsive{-sm|-md|-lg|-xl|-xxl}</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.</p>
    <p><strong>These tables may appear broken until their responsive styles apply at specific viewport widths.</strong></p>
    <p>{getData(&#39;breakpoints&#39;).map((breakpoint) =&gt; {
      return (
        <div class="bd-example">
          &lt;div class={<code>table-responsive${breakpoint.abbr}</code>}&gt;
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                  <th scope="col">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    })}</p>
    <Code code={getData('breakpoints').map((breakpoint) => `<div class="table-responsive${breakpoint.abbr}">
        <table class="table">
          ...
        </table>
    </div>
    `)} lang="html" /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="table-variables" file="scss/_variables.scss" /><h3 id="sass-loops">Sass loops<a class="anchor-link" href="#sass-loops" aria-label="Link to Sass loops"></a></h3>
    <ScssDocs name="table-loop" file="scss/_variables.scss" /><h3 id="customizing">Customizing<a class="anchor-link" href="#customizing" aria-label="Link to Customizing"></a></h3>
    <ul>
    <li>The factor variables (<code>$table-striped-bg-factor</code>, <code>$table-active-bg-factor</code> &amp; <code>$table-hover-bg-factor</code>) are used to determine the contrast in table variants.</li>
    <li>Apart from the light &amp; dark table variants, theme colors are lightened by the <code>$table-bg-scale</code> variable.</li>
    </ul>
  </article>
</template>
