
<template>
  <article>
    <h1>Link</h1>
    <p>Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.</p>

    <h2 id="link-opacity">Link opacity<a class="anchor-link" href="#link-opacity" aria-label="Link to Link opacity"></a></h2>
    <p>Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color’s opacity can lead to links with <a href="[[docsref:getting-started/accessibility/#color-contrast]]"><em>insufficient</em> contrast</a>.</p>
    <Example code={`<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
    <p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
    <p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
    <p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
    <p><a class="link-opacity-100" href="#">Link opacity 100</a></p>`} /><p>You can even change the opacity level on hover.</p>
    <Example code={`<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
    <p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
    <p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
    <p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
    <p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>`} /><h2 id="link-underlines">Link underlines<a class="anchor-link" href="#link-underlines" aria-label="Link to Link underlines"></a></h2>
    <h3 id="underline-color">Underline color<a class="anchor-link" href="#underline-color" aria-label="Link to Underline color"></a></h3>
    <p>Change the underline’s color independent of the link text color.</p>
    <Example code={getData('theme-colors').map((themeColor) => `<p><a href="#" class="link-underline-${themeColor.name}">${themeColor.title} underline</a></p>`)} /><h3 id="underline-offset">Underline offset<a class="anchor-link" href="#underline-offset" aria-label="Link to Underline offset"></a></h3>
    <p>Change the underline’s distance from your text. Offset is set in <code>em</code> units to automatically scale with the element’s current <code>font-size</code>.</p>
    <Example code={`<p><a href="#">Default link</a></p>
    <p><a class="link-offset-1" href="#">Offset 1 link</a></p>
    <p><a class="link-offset-2" href="#">Offset 2 link</a></p>
    <p><a class="link-offset-3" href="#">Offset 3 link</a></p>`} /><h3 id="underline-opacity">Underline opacity<a class="anchor-link" href="#underline-opacity" aria-label="Link to Underline opacity"></a></h3>
    <p>Change the underline’s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>
    <Example code={`<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
    <p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
    <p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
    <p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
    <p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
    <p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>`} /><h3 id="hover-variants">Hover variants<a class="anchor-link" href="#hover-variants" aria-label="Link to Hover variants"></a></h3>
    <p>Just like the <code>.link-opacity-*-hover</code> utilities, <code>.link-offset</code> and <code>.link-underline-opacity</code> utilities include <code>:hover</code> variants by default. Mix and match to create unique link styles.</p>
    <Example code={`<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
        Underline opacity 0
      </a>`} /><h2 id="colored-links">Colored links<a class="anchor-link" href="#colored-links" aria-label="Link to Colored links"></a></h2>
    <p><a href="[[docsref:/helpers/colored-links/]]">Colored link helpers</a> have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.</p>
    <Example code={[
      ...getData('theme-colors').map((themeColor) => `<p><a href="#" class="link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">${themeColor.title} link</a></p>`),
      `<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>`
    ]} /><Callout name="warning-color-assistive-technologies" /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <p>In addition to the following Sass functionality, consider reading about our included <a href="[[docsref:/customize/css-variables]]">CSS custom properties</a> (aka CSS variables) for colors and more.</p>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Link utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-links" file="scss/_utilities.scss" />
  </article>
</template>
