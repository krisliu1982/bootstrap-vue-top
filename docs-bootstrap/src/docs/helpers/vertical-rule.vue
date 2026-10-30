
<template>
  <article>
    <h1>Vertical rule</h1>
    <p>Use the custom vertical rule helper to create vertical dividers like the `&lt;hr&gt;` element.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Vertical rules are inspired by the <code>&lt;hr&gt;</code> element, allowing you to create vertical dividers in common layouts. They’re styled just like <code>&lt;hr&gt;</code> elements:</p>
    <ul>
    <li>They’re <code>1px</code> wide</li>
    <li>They have <code>min-height</code> of <code>1em</code></li>
    <li>Their color is set via <code>currentColor</code> and <code>opacity</code></li>
    </ul>
    <p>Customize them with additional styles as needed.</p>
    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <Example code={`<div class="vr"></div>`} /><p>Vertical rules scale their height in flex layouts:</p>
    <Example code={`<div class="d-flex" style="height: 200px;">
        <div class="vr"></div>
      </div>`} /><h2 id="with-stacks">With stacks<a class="anchor-link" href="#with-stacks" aria-label="Link to With stacks"></a></h2>
    <p>They can also be used in <a href="[[docsref:/helpers/stacks]]">stacks</a>:</p>
    <Example class="bd-example-flex" code={`<div class="hstack gap-3">
        <div class="p-2">First item</div>
        <div class="p-2 ms-auto">Second item</div>
        <div class="vr"></div>
        <div class="p-2">Third item</div>
      </div>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Customize the vertical rule Sass variable to change its width.</p>
    <ScssDocs name="vr-variables" file="scss/_variables.scss" />
  </article>
</template>
