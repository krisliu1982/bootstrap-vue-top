
<template>
  <article>
    <h1>Colors</h1>
    <p>Convey meaning through `color` with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

    <Callout name="warning-color-assistive-technologies" /><h2 id="colors">Colors<a class="anchor-link" href="#colors" aria-label="Link to Colors"></a></h2>
    <p>Colorize text with color utilities. If you want to colorize links, you can use the <a href="[[docsref:/helpers/colored-links]]"><code>.link-*</code> helper classes</a> which have <code>:hover</code> and <code>:focus</code> states.</p>
    <Callout>
    <p>Color utilities like <code>.text-*</code> that generated from our original <code>$theme-colors</code> Sass map don’t yet respond to color modes, however, any <code>.text-*-emphasis</code> utility will. This will be resolved in v6.</p>
    </Callout><Example code={[
      ...getData('theme-colors').map((themeColor) => `<p class="text-${themeColor.name}${themeColor.contrast_color ? ` bg-${themeColor.contrast_color}` : ``}">.text-${themeColor.name}</p>
    <p class="text-${themeColor.name}-emphasis">.text-${themeColor.name}-emphasis</p>`),
      `
    <p class="text-body">.text-body</p>
    <p class="text-body-emphasis">.text-body-emphasis</p>
    <p class="text-body-secondary">.text-body-secondary</p>
    <p class="text-body-tertiary">.text-body-tertiary</p>

    <p class="text-black bg-white">.text-black</p>
    <p class="text-white bg-dark">.text-white</p>
    <p class="text-black-50 bg-white">.text-black-50</p>
    <p class="text-white-50 bg-dark">.text-white-50</p>`
    ]} /><Callout type="warning">
    <p><strong>Deprecation:</strong> With the addition of <code>.text-opacity-*</code> utilities and CSS variables for text utilities, <code>.text-black-50</code> and <code>.text-white-50</code> are deprecated as of v5.1.0. They’ll be removed in v6.0.0.</p>
    </Callout><Callout type="warning">
    <p><strong>Deprecation:</strong> With the addition of the expanded theme colors and variables, the <code>.text-muted</code> utility has been deprecated as of v5.3.0. Its default value has also been reassigned to the new <code>--bs-secondary-color</code> CSS variable to better support color modes. It will be removed in v6.0.0.</p>
    </Callout><h2 id="opacity">Opacity<a class="anchor-link" href="#opacity" aria-label="Link to Opacity"></a></h2>
    <AddedIn version="5.1.0" /><p>As of v5.1.0, text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.</p>
    <h3 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h3>
    <p>Consider our default <code>.text-primary</code> utility.</p>
    <pre><code class="language-css">.text-primary {
      --bs-text-opacity: 1;
      color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
    }
    </code></pre>
    <p>We use an RGB version of our <code>--bs-primary</code> (with the value of <code>13, 110, 253</code>) CSS variable and attached a second CSS variable, <code>--bs-text-opacity</code>, for the alpha transparency (with a default value <code>1</code> thanks to a local CSS variable). That means anytime you use <code>.text-primary</code> now, your computed <code>color</code> value is <code>rgba(13, 110, 253, 1)</code>. The local CSS variable inside each <code>.text-*</code> class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.</p>
    <h3 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h3>
    <p>To change that opacity, override <code>--bs-text-opacity</code> via custom styles or inline styles.</p>
    <Example code={`<div class="text-primary">This is default primary text</div>
    <div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>`} /><p>Or, choose from any of the <code>.text-opacity</code> utilities:</p>
    <Example code={`<div class="text-primary">This is default primary text</div>
    <div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
    <div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
    <div class="text-primary text-opacity-25">This is 25% opacity primary text</div>`} /><h2 id="specificity">Specificity<a class="anchor-link" href="#specificity" aria-label="Link to Specificity"></a></h2>
    <p>Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element’s content in a <code>&lt;div&gt;</code> or more semantic element with the desired class.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <p>In addition to the following Sass functionality, consider reading about our included <a href="[[docsref:/customize/css-variables]]">CSS custom properties</a> (aka CSS variables) for colors and more.</p>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Most <code>color</code> utilities are generated by our theme colors, reassigned from our generic color palette variables.</p>
    <ScssDocs name="color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-color-variables" file="scss/_variables.scss" /><p>Grayscale colors are also available, but only a subset are used to generate any utilities.</p>
    <ScssDocs name="gray-color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-text-map" file="scss/_maps.scss" /><p>Variables for setting colors in <code>.text-*-emphasis</code> utilities in light and dark mode:</p>
    <ScssDocs name="theme-text-variables" file="scss/_variables.scss" /><ScssDocs name="theme-text-dark-variables" file="scss/_variables-dark.scss" /><h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.</p>
    <ScssDocs name="theme-colors-map" file="scss/_variables.scss" /><p>Grayscale colors are also available as a Sass map. <strong>This map is not used to generate any utilities.</strong></p>
    <ScssDocs name="gray-colors-map" file="scss/_variables.scss" /><p>RGB colors are generated from a separate Sass map:</p>
    <ScssDocs name="theme-colors-rgb" file="scss/_maps.scss" /><p>Color opacities build on that with their own map that’s consumed by the utilities API:</p>
    <ScssDocs name="utilities-text-colors" file="scss/_maps.scss" /><p>Color mode adaptive text colors are also available as a Sass map:</p>
    <ScssDocs name="theme-text-map" file="scss/_maps.scss" /><ScssDocs name="theme-text-dark-map" file="scss/_maps.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Color utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-color" file="scss/_utilities.scss" />
  </article>
</template>
