
<template>
  <article>
    <h1>Close button</h1>
    <p>A generic close button for dismissing content like modals and alerts.</p>

    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>Provide an option to dismiss or close a component with <code>.btn-close</code>. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default <code>background-image</code>. <strong>Be sure to include text for screen readers</strong>, as we’ve done with <code>aria-label</code>.</p>
    <Example code='<button type="button" class="btn-close" aria-label="Close"></button>' /><h2 id="disabled-state">Disabled state<a class="anchor-link" href="#disabled-state" aria-label="Link to Disabled state"></a></h2>
    <p>Disabled close buttons change their <code>opacity</code>. We’ve also applied <code>pointer-events: none</code> and <code>user-select: none</code> to preventing hover and active states from triggering.</p>
    <Example code='<button type="button" class="btn-close" disabled aria-label="Close"></button>' /><h2 id="dark-variant">Dark variant<a class="anchor-link" href="#dark-variant" aria-label="Link to Dark variant"></a></h2>
    <DeprecatedIn version="5.3.0" /><Callout type="warning">
    <p><strong>Heads up!</strong> As of v5.3.0, the <code>.btn-close-white</code> class is deprecated. Instead, use <code>data-bs-theme=&quot;dark&quot;</code> to change the color mode of the close button.</p>
    </Callout><p>Add <code>data-bs-theme=&quot;dark&quot;</code> to the <code>.btn-close</code>, or to its parent element, to invert the close button. This uses the <code>filter</code> property to invert the <code>background-image</code> without overriding its value.</p>
    <Example class="bg-dark" code='<div data-bs-theme="dark">
        <button type="button" class="btn-close" aria-label="Close"></button>
        <button type="button" class="btn-close" disabled aria-label="Close"></button>
      </div>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.3.0" /><p>As part of Bootstrap’s evolving CSS variables approach, close button now uses local CSS variables on <code>.btn-close</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="close-css-vars" file="scss/_close.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="close-variables" file="scss/_variables.scss" />
  </article>
</template>
