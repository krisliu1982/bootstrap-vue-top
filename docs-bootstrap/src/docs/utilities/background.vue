
<template>
  <article>
    <h1>Background</h1>
    <p>Convey meaning through `background-color` and add decoration with gradients.</p>

    <Callout name="warning-color-assistive-technologies" /><h2 id="background-color">Background color<a class="anchor-link" href="#background-color" aria-label="Link to Background color"></a></h2>
    <p>Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> <a href="[[docsref:/utilities/colors]]">color utilities</a>.</p>
    <Callout>
    <p>Background utilities like <code>.bg-*</code> that generated from our original <code>$theme-colors</code> Sass map don’t yet respond to color modes, however, any <code>.bg-*-subtle</code> utility will. This will be resolved in v6.</p>
    </Callout><Example :code='[
      ...data["theme-colors"].map((themeColor) => `<div class="p-3 mb-2 bg-${themeColor.name} ${themeColor.contrast_color ? `text-${themeColor.contrast_color}` : `text-white`}">.bg-${themeColor.name}</div>
    <div class="p-3 mb-2 bg-${themeColor.name}-subtle text-${themeColor.name}-emphasis">.bg-${themeColor.name}-subtle</div>`),
      `<div class="p-3 mb-2 bg-body-secondary">.bg-body-secondary</div>
    <div class="p-3 mb-2 bg-body-tertiary">.bg-body-tertiary</div>
    <div class="p-3 mb-2 bg-body text-body">.bg-body</div>
    <div class="p-3 mb-2 bg-black text-white">.bg-black</div>
    <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
    <div class="p-3 mb-2 bg-transparent text-body">.bg-transparent</div>`
    ].join("\n")' /><h2 id="background-gradient">Background gradient<a class="anchor-link" href="#background-gradient" aria-label="Link to Background gradient"></a></h2>
    <p>By adding a <code>.bg-gradient</code> class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.</p>
    <p>Do you need a gradient in your custom CSS? Just add <code>background-image: var(--bs-gradient);</code>.</p>
    <p>
      <div v-for="themeColor in data['theme-colors']" class="p-3 mb-2" :class="[`bg-${themeColor.name} bg-gradient`, themeColor.contrast_color ? 'text-' + themeColor.contrast_color : 'text-white']">.bg-{{themeColor.name}}.bg-gradient</div>
  </p>
    <div class="p-3 mb-2 bg-black bg-gradient text-white">.bg-black.bg-gradient</div><h2 id="opacity">Opacity<a class="anchor-link" href="#opacity" aria-label="Link to Opacity"></a></h2>
    <AddedIn version="5.1.0" /><p>As of v5.1.0, <code>background-color</code> utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.</p>
    <h3 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h3>
    <p>Consider our default <code>.bg-success</code> utility.</p>
    <pre><code class="language-css">.bg-success {
      --bs-bg-opacity: 1;
      background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
    }
    </code></pre>
    <p>We use an RGB version of our <code>--bs-success</code> (with the value of <code>25, 135, 84</code>) CSS variable and attached a second CSS variable, <code>--bs-bg-opacity</code>, for the alpha transparency (with a default value <code>1</code> thanks to a local CSS variable). That means anytime you use <code>.bg-success</code> now, your computed <code>color</code> value is <code>rgba(25, 135, 84, 1)</code>. The local CSS variable inside each <code>.bg-*</code> class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.</p>
    <h3 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h3>
    <p>To change that opacity, override <code>--bs-bg-opacity</code> via custom styles or inline styles.</p>
    <Example code={`<div class="bg-success p-2 text-white">This is default success background</div>
    <div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>`} /><p>Or, choose from any of the <code>.bg-opacity</code> utilities:</p>
    <Example code={`<div class="bg-success p-2 text-white">This is default success background</div>
    <div class="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
    <div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
    <div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
    <div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <p>In addition to the following Sass functionality, consider reading about our included <a href="[[docsref:/customize/css-variables]]">CSS custom properties</a> (aka CSS variables) for colors and more.</p>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Most <code>background-color</code> utilities are generated by our theme colors, reassigned from our generic color palette variables.</p>
    <ScssDocs name="color-variables" file="scss/_variables.scss" /><ScssDocs name="theme-color-variables" file="scss/_variables.scss" /><ScssDocs name="variable-gradient" file="scss/_variables.scss" /><p>Grayscale colors are also available, but only a subset are used to generate any utilities.</p>
    <ScssDocs name="gray-color-variables" file="scss/_variables.scss" /><p>Variables for setting <code>background-color</code> in <code>.bg-*-subtle</code> utilities in light and dark mode:</p>
    <ScssDocs name="theme-bg-subtle-variables" file="scss/_variables.scss" /><ScssDocs name="theme-bg-subtle-dark-variables" file="scss/_variables-dark.scss" /><h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.</p>
    <ScssDocs name="theme-colors-map" file="scss/_variables.scss" /><p>Grayscale colors are also available as a Sass map. <strong>This map is not used to generate any utilities.</strong></p>
    <ScssDocs name="gray-colors-map" file="scss/_variables.scss" /><p>RGB colors are generated from a separate Sass map:</p>
    <ScssDocs name="theme-colors-rgb" file="scss/_maps.scss" /><p>Background color opacities build on that with their own map that’s consumed by the utilities API:</p>
    <ScssDocs name="utilities-bg-colors" file="scss/_maps.scss" /><p>Color mode background colors are also available as a Sass map:</p>
    <ScssDocs name="theme-bg-subtle-map" file="scss/_maps.scss" /><ScssDocs name="theme-bg-subtle-dark-map" file="scss/_maps.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <p><strong>No mixins are used to generate our background utilities</strong>, but we do have some additional mixins for other situations where you’d like to create your own gradients.</p>
    <ScssDocs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" /><ScssDocs name="gradient-mixins" file="scss/mixins/_gradients.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Background utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-bg-color" file="scss/_utilities.scss" />
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
