
<template>
  <article>
    <h1>Utilities for layout</h1>
    <p>For faster mobile-friendly and responsive development, Bootstrap includes dozens of utility classes for showing, hiding, aligning, and spacing content.</p>

    <h2 id="changing-display">Changing <code>display</code><a class="anchor-link" href="#changing-display" aria-label="Link to Changing display"></a></h2>
    <p>Use our <a href="/utilities/display">display utilities</a> for responsively toggling common values of the <code>display</code> property. Mix it with our grid system, content, or components to show or hide them across specific viewports.</p>
    <h2 id="flexbox-options">Flexbox options<a class="anchor-link" href="#flexbox-options" aria-label="Link to Flexbox options"></a></h2>
    <p>Bootstrap is built with flexbox, but not every element’s <code>display</code> has been changed to <code>display: flex</code> as this would add many unnecessary overrides and unexpectedly change key browser behaviors. Most of <a href="/components/alerts">our components</a> are built with flexbox enabled.</p>
    <p>Should you need to add <code>display: flex</code> to an element, do so with <code>.d-flex</code> or one of the responsive variants (e.g., <code>.d-sm-flex</code>). You’ll need this class or <code>display</code> value to allow the use of our extra <a href="/utilities/flex">flexbox utilities</a> for sizing, alignment, spacing, and more.</p>
    <h2 id="margin-and-padding">Margin and padding<a class="anchor-link" href="#margin-and-padding" aria-label="Link to Margin and padding"></a></h2>
    <p>Use the <code>margin</code> and <code>padding</code> <a href="/utilities/spacing">spacing utilities</a> to control how elements and components are spaced and sized. Bootstrap includes a six-level scale for spacing utilities, based on a <code>1rem</code> value default <code>$spacer</code> variable. Choose values for all viewports (e.g., <code>.me-3</code> for <code>margin-right: 1rem</code> in LTR), or pick responsive variants to target specific viewports (e.g., <code>.me-md-3</code> for <code>margin-right: 1rem</code> —in LTR— starting at the <code>md</code> breakpoint).</p>
    <h2 id="toggle-visibility">Toggle <code>visibility</code><a class="anchor-link" href="#toggle-visibility" aria-label="Link to Toggle visibility"></a></h2>
    <p>When toggling <code>display</code> isn’t needed, you can toggle the <code>visibility</code> of an element with our <a href="/utilities/visibility">visibility utilities</a>. Invisible elements will still affect the layout of the page, but are visually hidden from visitors.</p>
  </article>
</template>
