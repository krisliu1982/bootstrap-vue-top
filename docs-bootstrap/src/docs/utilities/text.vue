
<template>
  <article>
    <h1>Text</h1>
    <p>Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>

    <h2 id="text-alignment">Text alignment<a class="anchor-link" href="#text-alignment" aria-label="Link to Text alignment"></a></h2>
    <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>
    <Example code='<p class="text-start">Start aligned text on all viewport sizes.</p>
    <p class="text-center">Center aligned text on all viewport sizes.</p>
    <p class="text-end">End aligned text on all viewport sizes.</p>

    <p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
    <p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
    <p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
    <p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
    <p class="text-xxl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>' /><Callout>
    <p>Note that we don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.</p>
    </Callout><h2 id="text-wrapping-and-overflow">Text wrapping and overflow<a class="anchor-link" href="#text-wrapping-and-overflow" aria-label="Link to Text wrapping and overflow"></a></h2>
    <p>Wrap text with a <code>.text-wrap</code> class.</p>
    <Example code='<div class="badge text-bg-primary text-wrap" style="width: 6rem;">
        This text should wrap.
      </div>' /><p>Prevent text from wrapping with a <code>.text-nowrap</code> class.</p>
    <Example code='<div class="text-nowrap bg-body-secondary border" style="width: 8rem;">
        This text should overflow the parent.
      </div>' /><h2 id="word-break">Word break<a class="anchor-link" href="#word-break" aria-label="Link to Word break"></a></h2>
    <p>Prevent long strings of text from breaking your components’ layout by using <code>.text-break</code> to set <code>word-wrap: break-word</code> and <code>word-break: break-word</code>. We use <code>word-wrap</code> instead of the more common <code>overflow-wrap</code> for wider browser support, and add the deprecated <code>word-break: break-word</code> to avoid issues with flex containers.</p>
    <Example code='<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>' /><Callout type="warning">
    <p>Note that <a href="https://rtlstyling.com/posts/rtl-styling#3.-line-break">breaking words isn’t possible in Arabic</a>, which is the most used RTL language. Therefore <code>.text-break</code> is removed from our RTL compiled CSS.</p>
    </Callout><h2 id="text-transform">Text transform<a class="anchor-link" href="#text-transform" aria-label="Link to Text transform"></a></h2>
    <p>Transform text in components with our text capitalization classes: <code>text-lowercase</code>, <code>text-uppercase</code> or <code>text-capitalize</code>.</p>
    <Example code='<p class="text-lowercase">Lowercased text.</p>
    <p class="text-uppercase">Uppercased text.</p>
    <p class="text-capitalize">CapiTaliZed text.</p>' /><p>Note how <code>.text-capitalize</code> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>
    <h2 id="font-size">Font size<a class="anchor-link" href="#font-size" aria-label="Link to Font size"></a></h2>
    <p>Quickly change the <code>font-size</code> of text. While our heading classes (e.g., <code>.h1</code>–<code>.h6</code>) apply <code>font-size</code>, <code>font-weight</code>, and <code>line-height</code>, these utilities <em>only</em> apply <code>font-size</code>. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.</p>
    <Example code='<p class="fs-1">.fs-1 text</p>
    <p class="fs-2">.fs-2 text</p>
    <p class="fs-3">.fs-3 text</p>
    <p class="fs-4">.fs-4 text</p>
    <p class="fs-5">.fs-5 text</p>
    <p class="fs-6">.fs-6 text</p>' /><p>Customize your available <code>font-size</code>s by modifying the <code>$font-sizes</code> Sass map.</p>
    <h2 id="font-weight-and-italics">Font weight and italics<a class="anchor-link" href="#font-weight-and-italics" aria-label="Link to Font weight and italics"></a></h2>
    <p>Quickly change the <code>font-weight</code> or <code>font-style</code> of text with these utilities. <code>font-style</code> utilities are abbreviated as <code>.fst-*</code> and <code>font-weight</code> utilities are abbreviated as <code>.fw-*</code>.</p>
    <Example code='<p class="fw-bold">Bold text.</p>
    <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
    <p class="fw-semibold">Semibold weight text.</p>
    <p class="fw-medium">Medium weight text.</p>
    <p class="fw-normal">Normal weight text.</p>
    <p class="fw-light">Light weight text.</p>
    <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
    <p class="fst-italic">Italic text.</p>
    <p class="fst-normal">Text with normal font style</p>' /><h2 id="line-height">Line height<a class="anchor-link" href="#line-height" aria-label="Link to Line height"></a></h2>
    <p>Change the line height with <code>.lh-*</code> utilities.</p>
    <Example code='<p class="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
    <p class="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
    <p class="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
    <p class="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>' /><h2 id="monospace">Monospace<a class="anchor-link" href="#monospace" aria-label="Link to Monospace"></a></h2>
    <p>Change a selection to our monospace font stack with <code>.font-monospace</code>.</p>
    <Example code='<p class="font-monospace">This is in monospace</p>' /><h2 id="reset-color">Reset color<a class="anchor-link" href="#reset-color" aria-label="Link to Reset color"></a></h2>
    <p>Reset a text or link’s color with <code>.text-reset</code>, so that it inherits the color from its parent.</p>
    <Example code='<p class="text-body-secondary">
        Secondary body text with a <a href="#" class="text-reset">reset link</a>.
      </p>' /><h2 id="text-decoration">Text decoration<a class="anchor-link" href="#text-decoration" aria-label="Link to Text decoration"></a></h2>
    <p>Decorate text in components with text decoration classes.</p>
    <Example code='<p class="text-decoration-underline">This text has a line underneath it.</p>
    <p class="text-decoration-line-through">This text has a line going through it.</p>
    <a href="#" class="text-decoration-none">This link has its text decoration removed</a>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Default type and font related Sass variables:</p>
    <ScssDocs name="font-variables" file="scss/_variables.scss" /><h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Font-size utilities are generated from this map, in combination with our utilities API.</p>
    <ScssDocs name="font-sizes" file="scss/_variables.scss" /><ScssDocs name="theme-text-map" file="scss/_maps.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Font and text utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-text" file="scss/_utilities.scss" />
  </article>
</template>
