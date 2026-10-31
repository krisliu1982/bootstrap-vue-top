<template>
  <article class="docs-content">
    <h1>Color</h1>
    <p>Bootstrap is supported by an extensive color system that themes our styles and components. This enables more
      comprehensive customization and extension for any project.</p>

    <h2 id="colors">Colors<a class="anchor-link" href="#colors" aria-label="Link to Colors"></a></h2>
    <AddedIn version="5.3.0" />
    <p>Bootstrap’s color palette has continued to expand and become more nuanced in v5.3.0. We’ve added new variables
      for <code>secondary</code> and <code>tertiary</code> text and background colors, plus
      <code>{color}-bg-subtle</code>, <code>{color}-border-subtle</code>, and <code>{color}-text-emphasis</code> for our
      theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility
      classes) with the express goal of making it easier to customize across multiple colors modes like light and dark.
      These new variables are globally set on <code>:root</code> and are adapted for our new dark color mode while our
      original theme colors remain unchanged.
    </p>
    <p>Colors ending in <code>-rgb</code> provide the <code>red, green, blue</code> values for use in <code>rgb()</code>
      and <code>rgba()</code> color modes. For example, <code>rgba(var(--bs-secondary-bg-rgb), .5)</code>.</p>
    <Callout type="warning">
      <p><strong>Heads up!</strong> There’s some potential confusion with our new secondary and tertiary colors, and our
        existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6.
      </p>
    </Callout>
    <div class="table-responsive">
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
              <p><strong>Body —</strong> Default foreground (color) and background, including components.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-body-color);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-body-color</code><br><code>--bs-body-color-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-body-bg);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-body-bg</code><br><code>--bs-body-bg-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p><strong>Secondary —</strong> Use the <code>color</code> option for lighter text. Use the
                <code>bg</code> option for dividers and to indicate disabled component states.
              </p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-secondary-color);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-secondary-color</code><br><code>--bs-secondary-color-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-secondary-bg</code><br><code>--bs-secondary-bg-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p><strong>Tertiary —</strong> Use the <code>color</code> option for even lighter text. Use the
                <code>bg</code> option to style backgrounds for hover states, accents, and wells.
              </p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-tertiary-color</code><br><code>--bs-tertiary-color-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2 border" style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-tertiary-bg</code><br><code>--bs-tertiary-bg-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>Emphasis —</strong> For higher contrast text. Not applicable for backgrounds.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-emphasis-color</code><br><code>--bs-emphasis-color-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>Border —</strong> For component borders, dividers, and rules. Use
                <code>--bs-border-color-translucent</code> to blend with backgrounds with an <code>rgba()</code> value.
              </p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2" style="background-color: var(--bs-border-color);">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-border-color</code><br><code>--bs-border-color-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Primary —</strong> Main theme color, used for hyperlinks, focus styles, and component and form
                active states.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-primary">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-primary</code><br><code>--bs-primary-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-primary-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-primary-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-primary-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-primary-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-primary-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-primary-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Success —</strong> Theme color used for positive or successful actions and information.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-success">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-success</code><br><code>--bs-success-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-success-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-success-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-success-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-success-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-success-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-success-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Danger —</strong> Theme color used for errors and dangerous actions.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-danger">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-danger</code><br><code>--bs-danger-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-danger-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-danger-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-danger-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-danger-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-danger-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-danger-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Warning —</strong> Theme color used for non-destructive warning messages.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-warning">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-warning</code><br><code>--bs-warning-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-warning-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-warning-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-warning-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-warning-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-warning-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-warning-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Info —</strong> Theme color used for neutral and informative content.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-info">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-info</code><br><code>--bs-info-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-info-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-info-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-info-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-info-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-info-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-info-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Light —</strong> Additional theme option for less contrasting colors.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-light">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-light</code><br><code>--bs-light-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-light-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-light-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-light-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-light-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-light-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-light-text-emphasis</code></p>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              <p><strong>Dark —</strong> Additional theme option for higher contrasting colors.</p>
            </td>
            <td class="ps-0">
              <div class="p-3 rounded-2 bg-dark">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-dark</code><br><code>--bs-dark-rgb</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="background-color: var(--bs-dark-bg-subtle)">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-dark-bg-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-3 rounded-2" style="border: 5px var(--bs-dark-border-subtle) solid">&nbsp;</div>
            </td>
            <td>
              <p><code>--bs-dark-border-subtle</code></p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-3 fw-bold h5" style="color: var(--bs-dark-text-emphasis)">Text</div>
            </td>
            <td>
              <p><code>--bs-dark-text-emphasis</code></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="using-the-new-colors">Using the new colors<a class="anchor-link" href="#using-the-new-colors"
        aria-label="Link to Using the new colors"></a></h3>
    <p>These new colors are accessible via CSS variables and utility classes—like <code>--bs-primary-bg-subtle</code>
      and <code>.bg-primary-subtle</code>—allowing you to compose your own CSS rules with the variables, or to quickly
      apply styles via classes. The utilities are built with the color’s associated CSS variables, and since we
      customize those CSS variables for dark mode, they are also adaptive to color mode by default.</p>
    <Example code='<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  Example element with utilities
</div>' />
    <h3 id="theme-colors">Theme colors<a class="anchor-link" href="#theme-colors" aria-label="Link to Theme colors"></a>
    </h3>
    <p>We use a subset of all colors to create a smaller color palette for generating color schemes, also available as
      Sass variables and a Sass map in Bootstrap’s <code>scss/_variables.scss</code> file.</p>
    <div class="row">
      <div v-for="themeColor in data['theme-colors']" class="col-md-4">
        <div :class="`p-3 mb-3 text-bg-${themeColor.name} rounded-3`">{{ themeColor.name }}</div>
      </div>
    </div>
    <p>All these colors are available as a Sass map, <code>$theme-colors</code>.</p>
    <ScssDocs name="theme-colors-map" file="scss/_variables.scss" />
    <p>Check out <a href="[[docsref:/customize/sass#maps-and-loops]]">our Sass maps and loops docs</a> for how to modify
      these colors.</p>
    <h3 id="all-colors">All colors<a class="anchor-link" href="#all-colors" aria-label="Link to All colors"></a></h3>
    <p>All Bootstrap colors are available as Sass variables and a Sass map in <code>scss/_variables.scss</code> file. To
      avoid increased file sizes, we don’t create text or background color classes for each of these variables. Instead,
      we choose a subset of these colors for a <a href="#theme-colors">theme palette</a>.</p>
    <p>Be sure to monitor contrast ratios as you customize colors. As shown below, we’ve added three contrast ratios to
      each of the main colors—one for the swatch’s current colors, one for against white, and one for against black.</p>
    <div class="row font-monospace">
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-blue"><strong class="d-block">$blue</strong>#0d6efd</div>
        <div class="p-3 docs-blue-100">$blue-100</div>
        <div class="p-3 docs-blue-200">$blue-200</div>
        <div class="p-3 docs-blue-300">$blue-300</div>
        <div class="p-3 docs-blue-400">$blue-400</div>
        <div class="p-3 docs-blue-500">$blue-500</div>
        <div class="p-3 docs-blue-600">$blue-600</div>
        <div class="p-3 docs-blue-700">$blue-700</div>
        <div class="p-3 docs-blue-800">$blue-800</div>
        <div class="p-3 docs-blue-900">$blue-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-indigo"><strong class="d-block">$indigo</strong>#6610f2</div>
        <div class="p-3 docs-indigo-100">$indigo-100</div>
        <div class="p-3 docs-indigo-200">$indigo-200</div>
        <div class="p-3 docs-indigo-300">$indigo-300</div>
        <div class="p-3 docs-indigo-400">$indigo-400</div>
        <div class="p-3 docs-indigo-500">$indigo-500</div>
        <div class="p-3 docs-indigo-600">$indigo-600</div>
        <div class="p-3 docs-indigo-700">$indigo-700</div>
        <div class="p-3 docs-indigo-800">$indigo-800</div>
        <div class="p-3 docs-indigo-900">$indigo-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-purple"><strong class="d-block">$purple</strong>#6f42c1</div>
        <div class="p-3 docs-purple-100">$purple-100</div>
        <div class="p-3 docs-purple-200">$purple-200</div>
        <div class="p-3 docs-purple-300">$purple-300</div>
        <div class="p-3 docs-purple-400">$purple-400</div>
        <div class="p-3 docs-purple-500">$purple-500</div>
        <div class="p-3 docs-purple-600">$purple-600</div>
        <div class="p-3 docs-purple-700">$purple-700</div>
        <div class="p-3 docs-purple-800">$purple-800</div>
        <div class="p-3 docs-purple-900">$purple-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-pink"><strong class="d-block">$pink</strong>#d63384</div>
        <div class="p-3 docs-pink-100">$pink-100</div>
        <div class="p-3 docs-pink-200">$pink-200</div>
        <div class="p-3 docs-pink-300">$pink-300</div>
        <div class="p-3 docs-pink-400">$pink-400</div>
        <div class="p-3 docs-pink-500">$pink-500</div>
        <div class="p-3 docs-pink-600">$pink-600</div>
        <div class="p-3 docs-pink-700">$pink-700</div>
        <div class="p-3 docs-pink-800">$pink-800</div>
        <div class="p-3 docs-pink-900">$pink-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-red"><strong class="d-block">$red</strong>#dc3545</div>
        <div class="p-3 docs-red-100">$red-100</div>
        <div class="p-3 docs-red-200">$red-200</div>
        <div class="p-3 docs-red-300">$red-300</div>
        <div class="p-3 docs-red-400">$red-400</div>
        <div class="p-3 docs-red-500">$red-500</div>
        <div class="p-3 docs-red-600">$red-600</div>
        <div class="p-3 docs-red-700">$red-700</div>
        <div class="p-3 docs-red-800">$red-800</div>
        <div class="p-3 docs-red-900">$red-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-orange"><strong class="d-block">$orange</strong>#fd7e14</div>
        <div class="p-3 docs-orange-100">$orange-100</div>
        <div class="p-3 docs-orange-200">$orange-200</div>
        <div class="p-3 docs-orange-300">$orange-300</div>
        <div class="p-3 docs-orange-400">$orange-400</div>
        <div class="p-3 docs-orange-500">$orange-500</div>
        <div class="p-3 docs-orange-600">$orange-600</div>
        <div class="p-3 docs-orange-700">$orange-700</div>
        <div class="p-3 docs-orange-800">$orange-800</div>
        <div class="p-3 docs-orange-900">$orange-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-yellow"><strong class="d-block">$yellow</strong>#ffc107</div>
        <div class="p-3 docs-yellow-100">$yellow-100</div>
        <div class="p-3 docs-yellow-200">$yellow-200</div>
        <div class="p-3 docs-yellow-300">$yellow-300</div>
        <div class="p-3 docs-yellow-400">$yellow-400</div>
        <div class="p-3 docs-yellow-500">$yellow-500</div>
        <div class="p-3 docs-yellow-600">$yellow-600</div>
        <div class="p-3 docs-yellow-700">$yellow-700</div>
        <div class="p-3 docs-yellow-800">$yellow-800</div>
        <div class="p-3 docs-yellow-900">$yellow-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-green"><strong class="d-block">$green</strong>#198754</div>
        <div class="p-3 docs-green-100">$green-100</div>
        <div class="p-3 docs-green-200">$green-200</div>
        <div class="p-3 docs-green-300">$green-300</div>
        <div class="p-3 docs-green-400">$green-400</div>
        <div class="p-3 docs-green-500">$green-500</div>
        <div class="p-3 docs-green-600">$green-600</div>
        <div class="p-3 docs-green-700">$green-700</div>
        <div class="p-3 docs-green-800">$green-800</div>
        <div class="p-3 docs-green-900">$green-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-teal"><strong class="d-block">$teal</strong>#20c997</div>
        <div class="p-3 docs-teal-100">$teal-100</div>
        <div class="p-3 docs-teal-200">$teal-200</div>
        <div class="p-3 docs-teal-300">$teal-300</div>
        <div class="p-3 docs-teal-400">$teal-400</div>
        <div class="p-3 docs-teal-500">$teal-500</div>
        <div class="p-3 docs-teal-600">$teal-600</div>
        <div class="p-3 docs-teal-700">$teal-700</div>
        <div class="p-3 docs-teal-800">$teal-800</div>
        <div class="p-3 docs-teal-900">$teal-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-cyan"><strong class="d-block">$cyan</strong>#0dcaf0</div>
        <div class="p-3 docs-cyan-100">$cyan-100</div>
        <div class="p-3 docs-cyan-200">$cyan-200</div>
        <div class="p-3 docs-cyan-300">$cyan-300</div>
        <div class="p-3 docs-cyan-400">$cyan-400</div>
        <div class="p-3 docs-cyan-500">$cyan-500</div>
        <div class="p-3 docs-cyan-600">$cyan-600</div>
        <div class="p-3 docs-cyan-700">$cyan-700</div>
        <div class="p-3 docs-cyan-800">$cyan-800</div>
        <div class="p-3 docs-cyan-900">$cyan-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 position-relative swatch-gray-500"><strong class="d-block">$gray-500</strong>#adb5bd</div>
        <div class="p-3 docs-gray-100">$gray-100</div>
        <div class="p-3 docs-gray-200">$gray-200</div>
        <div class="p-3 docs-gray-300">$gray-300</div>
        <div class="p-3 docs-gray-400">$gray-400</div>
        <div class="p-3 docs-gray-500">$gray-500</div>
        <div class="p-3 docs-gray-600">$gray-600</div>
        <div class="p-3 docs-gray-700">$gray-700</div>
        <div class="p-3 docs-gray-800">$gray-800</div>
        <div class="p-3 docs-gray-900">$gray-900</div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 mb-2 docs-black text-white">
          <p><strong class="d-block">$black</strong>
            #000</p>
        </div>
        <div class="p-3 mb-2 docs-white border">
          <p><strong class="d-block">$white</strong>
            #fff</p>
        </div>
      </div>
    </div>
    <h3 id="notes-on-sass">Notes on Sass<a class="anchor-link" href="#notes-on-sass"
        aria-label="Link to Notes on Sass"></a></h3>
    <p>Sass cannot programmatically generate variables, so we manually created variables for every tint and shade
      ourselves. We specify the midpoint value (e.g., <code>$blue-500</code>) and use custom color functions to tint
      (lighten) or shade (darken) our colors via Sass’s <code>mix()</code> color function.</p>
    <p>Using <code>mix()</code> is not the same as <code>lighten()</code> and <code>darken()</code>—the former blends
      the specified color with white or black, while the latter only adjusts the lightness value of each color. The
      result is a much more complete suite of colors, as <a href="https://codepen.io/emdeoh/pen/zYOQOPB">shown in this
        CodePen demo</a>.</p>
    <p>Our <code>tint-color()</code> and <code>shade-color()</code> functions use <code>mix()</code> alongside our
      <code>$theme-color-interval</code> variable, which specifies a stepped percentage value for each mixed color we
      produce. See the <code>scss/_functions.scss</code> and <code>scss/_variables.scss</code> files for the full source
      code.
    </p>
    <h2 id="color-sass-maps">Color Sass maps<a class="anchor-link" href="#color-sass-maps"
        aria-label="Link to Color Sass maps"></a></h2>
    <p>Bootstrap’s source Sass files include three maps to help you quickly and easily loop over a list of colors and
      their hex values.</p>
    <ul>
      <li><code>$colors</code> lists all our available base (<code>500</code>) colors</li>
      <li><code>$theme-colors</code> lists all semantically named theme colors (shown below)</li>
      <li><code>$grays</code> lists all tints and shades of gray</li>
    </ul>
    <p>Within <code>scss/_variables.scss</code>, you’ll find Bootstrap’s color variables and Sass map. Here’s an example
      of the <code>$colors</code> Sass map:</p>
    <ScssDocs name="colors-map" file="scss/_variables.scss" />
    <p>Add, remove, or modify values within the map to update how they’re used in many other components. Unfortunately
      at this time, not <em>every</em> component utilizes this Sass map. Future updates will strive to improve upon
      this. Until then, plan on making use of the <code>${color}</code> variables and this Sass map.</p>
    <h3 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h3>
    <p>Here’s how you can use these in your Sass:</p>
    <pre><code class="language-scss">.alpha { color: $purple; }
    .beta {
      color: $yellow-300;
      background-color: $indigo-900;
    }
    </code></pre>
    <p><a href="[[docsref:/utilities/colors]]">Color</a> and <a href="[[docsref:/utilities/background]]">background</a>
      utility classes are also available for setting <code>color</code> and <code>background-color</code> using the
      <code>500</code> color values.
    </p>
    <h2 id="generating-utilities">Generating utilities<a class="anchor-link" href="#generating-utilities"
        aria-label="Link to Generating utilities"></a></h2>
    <AddedIn version="5.1.0" />
    <p>Bootstrap doesn’t include <code>color</code> and <code>background-color</code> utilities for every color
      variable, but you can generate these yourself with our <a href="[[docsref:/utilities/api]]">utility API</a> and
      our extended Sass maps added in v5.1.0.</p>
    <ol>
      <li>To start, make sure you’ve imported our functions, variables, mixins, and utilities.</li>
      <li>Use our <code>map-merge-multiple()</code> function to quickly merge multiple Sass maps together in a new map.
      </li>
      <li>Merge this new combined map to extend any utility with a <code>{color}-{level}</code> class name.</li>
    </ol>
    <p>Here’s an example that generates text color utilities (e.g., <code>.text-purple-500</code>) using the above
      steps.</p>
    <pre><code class="language-scss">@import "bootstrap/scss/functions";
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

    <p>This will generate new <code>.text-{color}-{level}</code> utilities for every color and level. You can do the
      same for any other utility and property as well.</p>
  </article>
</template>

<script setup>
import data from '@data/data.js'
import CodeWrapper from '../../components/code-wrapper.vue';
</script>
