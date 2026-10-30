
<template>
  <article>
    <h1>Display property</h1>
    <p>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><code>display</code> property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <code>display</code>. Classes can be combined for various effects as you need.</p>
    <h2 id="notation">Notation<a class="anchor-link" href="#notation" aria-label="Link to Notation"></a></h2>
    <p>Display utility classes that apply to all <a href="[[docsref:/layout/breakpoints]]">breakpoints</a>, from <code>xs</code> to <code>xxl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
    <p>As such, the classes are named using the format:</p>
    <ul>
    <li><code>.d-{value}</code> for <code>xs</code></li>
    <li><code>.d-{breakpoint}-{value}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.</li>
    </ul>
    <p>Where <em>value</em> is one of:</p>
    <ul>
    <li><code>none</code></li>
    <li><code>inline</code></li>
    <li><code>inline-block</code></li>
    <li><code>block</code></li>
    <li><code>grid</code></li>
    <li><code>inline-grid</code></li>
    <li><code>table</code></li>
    <li><code>table-cell</code></li>
    <li><code>table-row</code></li>
    <li><code>flex</code></li>
    <li><code>inline-flex</code></li>
    </ul>
    <p>The display values can be altered by changing the <code>display</code> values defined in <code>$utilities</code> and recompiling the SCSS.</p>
    <p>The media queries affect screen widths with the given breakpoint <em>or larger</em>. For example, <code>.d-lg-none</code> sets <code>display: none;</code> on <code>lg</code>, <code>xl</code>, and <code>xxl</code> screens.</p>
    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <Example code={`<div class="d-inline p-2 text-bg-primary">d-inline</div>
    <div class="d-inline p-2 text-bg-dark">d-inline</div>`} /><Example code={`<span class="d-block p-2 text-bg-primary">d-block</span>
    <span class="d-block p-2 text-bg-dark">d-block</span>`} /><h2 id="hiding-elements">Hiding elements<a class="anchor-link" href="#hiding-elements" aria-label="Link to Hiding elements"></a></h2>
    <p>For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.</p>
    <p>To hide elements simply use the <code>.d-none</code> class or one of the <code>.d-{sm,md,lg,xl,xxl}-none</code> classes for any responsive screen variation.</p>
    <p>To show an element only on a given interval of screen sizes you can combine one <code>.d-*-none</code> class with a <code>.d-*-*</code> class, for example <code>.d-none .d-md-block .d-xl-none</code> will hide the element for all screen sizes except on medium and large devices.</p>
    <BsTable>
    <table>
    <thead>
    <tr>
    <th>Screen size</th>
    <th>Class</th>
    </tr>
    </thead>
    <tbody><tr>
    <td>Hidden on all</td>
    <td><code>.d-none</code></td>
    </tr>
    <tr>
    <td>Hidden only on xs</td>
    <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
    <td>Hidden only on sm</td>
    <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
    <td>Hidden only on md</td>
    <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
    <td>Hidden only on lg</td>
    <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
    <td>Hidden only on xl</td>
    <td><code>.d-xl-none .d-xxl-block</code></td>
    </tr>
    <tr>
    <td>Hidden only on xxl</td>
    <td><code>.d-xxl-none</code></td>
    </tr>
    <tr>
    <td>Visible on all</td>
    <td><code>.d-block</code></td>
    </tr>
    <tr>
    <td>Visible only on xs</td>
    <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
    <td>Visible only on sm</td>
    <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
    <td>Visible only on md</td>
    <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
    <td>Visible only on lg</td>
    <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
    <td>Visible only on xl</td>
    <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
    </tr>
    <tr>
    <td>Visible only on xxl</td>
    <td><code>.d-none .d-xxl-block</code></td>
    </tr>
    </tbody></table>
    </BsTable><Example code={`<div class="d-lg-none">hide on lg and wider screens</div>
    <div class="d-none d-lg-block">hide on screens smaller than lg</div>`} /><h2 id="display-in-print">Display in print<a class="anchor-link" href="#display-in-print" aria-label="Link to Display in print"></a></h2>
    <p>Change the <code>display</code> value of elements when printing with our print display utility classes. Includes support for the same <code>display</code> values as our responsive <code>.d-*</code> utilities.</p>
    <ul>
    <li><code>.d-print-none</code></li>
    <li><code>.d-print-inline</code></li>
    <li><code>.d-print-inline-block</code></li>
    <li><code>.d-print-block</code></li>
    <li><code>.d-print-grid</code></li>
    <li><code>.d-print-inline-grid</code></li>
    <li><code>.d-print-table</code></li>
    <li><code>.d-print-table-row</code></li>
    <li><code>.d-print-table-cell</code></li>
    <li><code>.d-print-flex</code></li>
    <li><code>.d-print-inline-flex</code></li>
    </ul>
    <p>The print and display classes can be combined.</p>
    <Example code={`<div class="d-print-none">Screen Only (Hide on print only)</div>
    <div class="d-none d-print-block">Print Only (Hide on screen only)</div>
    <div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Display utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-display" file="scss/_utilities.scss" />
  </article>
</template>
