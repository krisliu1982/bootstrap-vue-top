
<template>
  <article>
    <h1>Color</h1>
    <p>Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.</p>

    <h2 id="colors">Colors<a class="anchor-link" href="#colors" aria-label="Link to Colors"></a></h2>
    <AddedIn version="5.3.0" /><p>Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. We’ve added new variables for <code>secondary</code> and <code>tertiary</code> text and background colors, plus <code>{color}-bg-subtle</code>, <code>{color}-border-subtle</code>, and <code>{color}-text-emphasis</code> for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on <code>:root</code> and are adapted for our new dark color mode while our original theme colors remain unchanged.</p>
    <p>Colors ending in <code>-rgb</code> provide the <code>red, green, blue</code> values for use in <code>rgb()</code> and <code>rgba()</code> color modes. For example, <code>rgba(var(--bs-secondary-bg-rgb), .5)</code>.</p>
    <Callout type="warning">
    <p><strong>Heads up!</strong> There’s some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6.</p>
    </Callout><div class="table-responsive">
      <table class="table table-swatches">
        <thead>
          <tr>
            <th style="width: 340px;">Description</th>
            <th style="width: 200px;" class="ps-0">Swatch</th>
            <th>Variables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">
              **Body —** Default foreground (color) and background, including components.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-body-color);">&nbsp;</div>
            </td>
            <td>
              `--bs-body-color`<br/>`--bs-body-color-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-body-bg);">&nbsp;</div>
            </td>
            <td>
              `--bs-body-bg`<br/>`--bs-body-bg-rgb`
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              **Secondary —** Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-secondary-color);">&nbsp;</div>
            </td>
            <td>
              `--bs-secondary-color`<br/>`--bs-secondary-color-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
            </td>
            <td>
              `--bs-secondary-bg`<br/>`--bs-secondary-bg-rgb`
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              **Tertiary —** Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
            </td>
            <td>
              `--bs-tertiary-color`<br/>`--bs-tertiary-color-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
            </td>
            <td>
              `--bs-tertiary-bg`<br/>`--bs-tertiary-bg-rgb`
            </td>
          </tr>
          <tr>
            <td>
              **Emphasis —** For higher contrast text. Not applicable for backgrounds.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
            </td>
            <td>
              `--bs-emphasis-color`<br/>`--bs-emphasis-color-rgb`
            </td>
          </tr>
          <tr>
            <td>
              **Border —** For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-border-color);">&nbsp;</div>
            </td>
            <td>
              `--bs-border-color`<br/>`--bs-border-color-rgb`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Primary —** Main theme color, used for hyperlinks, focus styles, and component and form active states.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-primary">&nbsp;</div>
            </td>
            <td>
              `--bs-primary`<br/>`--bs-primary-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-primary-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-primary-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-primary-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-primary-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-primary-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-primary-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Success —** Theme color used for positive or successful actions and information.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-success">&nbsp;</div>
            </td>
            <td>
              `--bs-success`<br/>`--bs-success-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-success-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-success-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-success-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-success-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-success-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-success-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Danger —** Theme color used for errors and dangerous actions.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-danger">&nbsp;</div>
            </td>
            <td>
              `--bs-danger`<br/>`--bs-danger-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-danger-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-danger-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-danger-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-danger-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-danger-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-danger-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Warning —** Theme color used for non-destructive warning messages.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-warning">&nbsp;</div>
            </td>
            <td>
              `--bs-warning`<br/>`--bs-warning-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-warning-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-warning-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-warning-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-warning-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-warning-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-warning-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Info —** Theme color used for neutral and informative content.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-info">&nbsp;</div>
            </td>
            <td>
              `--bs-info`<br/>`--bs-info-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-info-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-info-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-info-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-info-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-info-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-info-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Light —** Additional theme option for less contrasting colors.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-light">&nbsp;</div>
            </td>
            <td>
              `--bs-light`<br/>`--bs-light-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-light-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-light-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-light-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-light-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-light-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-light-text-emphasis`
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              **Dark —** Additional theme option for higher contrasting colors.
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-dark">&nbsp;</div>
            </td>
            <td>
              `--bs-dark`<br/>`--bs-dark-rgb`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-dark-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              `--bs-dark-bg-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-dark-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              `--bs-dark-border-subtle`
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-dark-text-emphasis)">Text</div>
            </td>
            <td>
              `--bs-dark-text-emphasis`
            </td>
          </tr>
        </tbody>
      </table>
    </div><h3 id="using-the-new-colors">Using the new colors<a class="anchor-link" href="#using-the-new-colors" aria-label="Link to Using the new colors"></a></h3>
    <p>These new colors are accessible via CSS variables and utility classes—like <code>--bs-primary-bg-subtle</code> and <code>.bg-primary-subtle</code>—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color’s associated CSS variables, and since we customize those CSS variables for dark mode, they are also adaptive to color mode by default.</p>
    <Example code={`<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        Example element with utilities
      </div>`} /><h3 id="theme-colors">Theme colors<a class="anchor-link" href="#theme-colors" aria-label="Link to Theme colors"></a></h3>
    <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
    <div class="row">
      {getData('theme-colors').map((themeColor) => {
        return (
          <div class="col-md-4">
            <div class={`p-3 mb-3 text-bg-${themeColor.name} rounded-3`}>{themeColor.title}</div>
          </div>
        )
      })}
    </div><p>All these colors are available as a Sass map, <code>$theme-colors</code>.</p>
    <ScssDocs name="theme-colors-map" file="scss/_variables.scss" /><p>Check out <a href="[[docsref:/customize/sass#maps-and-loops]]">our Sass maps and loops docs</a> for how to modify these colors.</p>
    <h3 id="all-colors">All colors<a class="anchor-link" href="#all-colors" aria-label="Link to All colors"></a></h3>
    <p>All Bootstrap colors are available as Sass variables and a Sass map in <code>scss/_variables.scss</code> file. To avoid increased file sizes, we don’t create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a <a href="#theme-colors">theme palette</a>.</p>
    <p>Be sure to monitor contrast ratios as you customize colors. As shown below, we’ve added three contrast ratios to each of the main colors—one for the swatch’s current colors, one for against white, and one for against black.</p>
    <div class="row font-monospace">
      {getData('colors').map((color) => {
        if ((color.name !== "white") && (color.name !== "gray") && (color.name !== "gray-dark")) {
          return (
            <div class="col-md-4 mb-3">
              <div class={`p-3 mb-2 position-relative swatch-${color.name}`}>
                <strong class="d-block">${color.name}</strong>
                {color.hex}
              </div><pre><code>      {getSequence(100, 900, 100).map((value) =&gt; {
            return (
              &lt;div class={`p-3 bd-${color.name}-${value}`}&gt;${color.name}-{value}&lt;/div&gt;
            )
          })}
        &lt;/div&gt;
      )
    }
    </code></pre>
    <p>  })}</p>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-gray-500"><strong class="d-block">$gray-500</strong>#adb5bd</div>
        {getData('grays').map((gray) => {
          return (
            <div class={`p-3 bd-gray-${gray.name}`}>$gray-{gray.name}</div>
          )
        })}
      </div>  <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 bd-black text-white">
          <strong class="d-block">$black</strong>
          #000
        </div>
        <div class="p-3 mb-2 bd-white border">
          <strong class="d-block">$white</strong>
          #fff
        </div>
      </div>
    </div><h3 id="notes-on-sass">Notes on Sass<a class="anchor-link" href="#notes-on-sass" aria-label="Link to Notes on Sass"></a></h3>
    <p>Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We specify the midpoint value (e.g., <code>$blue-500</code>) and use custom color functions to tint (lighten) or shade (darken) our colors via Sass’s <code>mix()</code> color function.</p>
    <p>Using <code>mix()</code> is not the same as <code>lighten()</code> and <code>darken()</code>—the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as <a href="https://codepen.io/emdeoh/pen/zYOQOPB">shown in this CodePen demo</a>.</p>
    <p>Our <code>tint-color()</code> and <code>shade-color()</code> functions use <code>mix()</code> alongside our <code>$theme-color-interval</code> variable, which specifies a stepped percentage value for each mixed color we produce. See the <code>scss/_functions.scss</code> and <code>scss/_variables.scss</code> files for the full source code.</p>
    <h2 id="color-sass-maps">Color Sass maps<a class="anchor-link" href="#color-sass-maps" aria-label="Link to Color Sass maps"></a></h2>
    <p>Bootstrap’s source Sass files include three maps to help you quickly and easily loop over a list of colors and their hex values.</p>
    <ul>
    <li><code>$colors</code> lists all our available base (<code>500</code>) colors</li>
    <li><code>$theme-colors</code> lists all semantically named theme colors (shown below)</li>
    <li><code>$grays</code> lists all tints and shades of gray</li>
    </ul>
    <p>Within <code>scss/_variables.scss</code>, you’ll find Bootstrap’s color variables and Sass map. Here’s an example of the <code>$colors</code> Sass map:</p>
    <ScssDocs name="colors-map" file="scss/_variables.scss" /><p>Add, remove, or modify values within the map to update how they’re used in many other components. Unfortunately at this time, not <em>every</em> component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the <code>${color}</code> variables and this Sass map.</p>
    <h3 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h3>
    <p>Here’s how you can use these in your Sass:</p>
    <pre><code class="language-scss">.alpha { color: $purple; }
    .beta {
      color: $yellow-300;
      background-color: $indigo-900;
    }
    </code></pre>
    <p><a href="[[docsref:/utilities/colors]]">Color</a> and <a href="[[docsref:/utilities/background]]">background</a> utility classes are also available for setting <code>color</code> and <code>background-color</code> using the <code>500</code> color values.</p>
    <h2 id="generating-utilities">Generating utilities<a class="anchor-link" href="#generating-utilities" aria-label="Link to Generating utilities"></a></h2>
    <AddedIn version="5.1.0"/><p>Bootstrap doesn’t include <code>color</code> and <code>background-color</code> utilities for every color variable, but you can generate these yourself with our <a href="[[docsref:/utilities/api]]">utility API</a> and our extended Sass maps added in v5.1.0.</p>
    <ol>
    <li>To start, make sure you’ve imported our functions, variables, mixins, and utilities.</li>
    <li>Use our <code>map-merge-multiple()</code> function to quickly merge multiple Sass maps together in a new map.</li>
    <li>Merge this new combined map to extend any utility with a <code>{color}-{level}</code> class name.</li>
    </ol>
    <p>Here’s an example that generates text color utilities (e.g., <code>.text-purple-500</code>) using the above steps.</p>
    <pre><code class="language-scss">@import &quot;bootstrap/scss/functions&quot;;
    @import &quot;bootstrap/scss/variables&quot;;
    @import &quot;bootstrap/scss/variables-dark&quot;;
    @import &quot;bootstrap/scss/maps&quot;;
    @import &quot;bootstrap/scss/mixins&quot;;
    @import &quot;bootstrap/scss/utilities&quot;;

    $all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

    $utilities: map-merge(
      $utilities,
      (
        &quot;color&quot;: map-merge(
          map-get($utilities, &quot;color&quot;),
          (
            values: map-merge(
              map-get(map-get($utilities, &quot;color&quot;), &quot;values&quot;),
              (
                $all-colors
              ),
            ),
          ),
        ),
      )
    );

    @import &quot;bootstrap/scss/utilities/api&quot;;
    </code></pre>
    <p>This will generate new <code>.text-{color}-{level}</code> utilities for every color and level. You can do the same for any other utility and property as well.</p>
  </article>
</template>
