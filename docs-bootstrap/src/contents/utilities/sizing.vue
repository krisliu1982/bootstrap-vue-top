
<template>
  <article>
    <h1>Sizing</h1>
    <p>Easily make an element as wide or as tall with our width and height utilities.</p>

    <h2 id="relative-to-the-parent">Relative to the parent<a class="anchor-link" href="#relative-to-the-parent" aria-label="Link to Relative to the parent"></a></h2>
    <p>Width and height utilities are generated from the utility API in <code>_utilities.scss</code>. Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and <code>auto</code> by default. Modify those values as you need to generate different utilities here.</p>
    <Example class="docs-example-flex" code='<div class="w-25 p-3">Width 25%</div>
    <div class="w-50 p-3">Width 50%</div>
    <div class="w-75 p-3">Width 75%</div>
    <div class="w-100 p-3">Width 100%</div>
    <div class="w-auto p-3">Width auto</div>' /><Example class="docs-example-flex" code='<div style="height: 100px;">
        <div class="h-25 d-inline-block" style="width: 120px;">Height 25%</div>
        <div class="h-50 d-inline-block" style="width: 120px;">Height 50%</div>
        <div class="h-75 d-inline-block" style="width: 120px;">Height 75%</div>
        <div class="h-100 d-inline-block" style="width: 120px;">Height 100%</div>
        <div class="h-auto d-inline-block" style="width: 120px;">Height auto</div>
      </div>' /><p>You can also use <code>max-width: 100%;</code> and <code>max-height: 100%;</code> utilities as needed.</p>
    <Example class="docs-example-flex" code='<div style="width: 50%; height: 100px;">
        <div class="mw-100" style="width: 200%;">Max-width 100%</div>
      </div>' /><Example class="docs-example-flex" code='<div style="height: 100px;">
        <div class="mh-100" style="width: 100px; height: 200px;">Max-height 100%</div>
      </div>' /><h2 id="relative-to-the-viewport">Relative to the viewport<a class="anchor-link" href="#relative-to-the-viewport" aria-label="Link to Relative to the viewport"></a></h2>
    <p>You can also use utilities to set the width and height relative to the viewport.</p>
    <pre><code class="language-html">&lt;div class=&quot;min-vw-100&quot;&gt;Min-width 100vw&lt;/div&gt;
&lt;div class=&quot;min-vh-100&quot;&gt;Min-height 100vh&lt;/div&gt;
&lt;div class=&quot;vw-100&quot;&gt;Width 100vw&lt;/div&gt;
&lt;div class=&quot;vh-100&quot;&gt;Height 100vh&lt;/div&gt;
    </code></pre>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Sizing utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-sizing" file="scss/_utilities.scss" />
  </article>
</template>
