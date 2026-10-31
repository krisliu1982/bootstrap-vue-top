
<template>
  <article>
    <h1>Visibility</h1>
    <p>Control the visibility of elements, without modifying their display, with visibility utilities.</p>

    <p>Set the <code>visibility</code> of elements with our visibility utilities. These utility classes do not modify the <code>display</code> value at all and do not affect layout – <code>.invisible</code> elements still take up space in the page.</p>
    <Callout type="warning">
    <p>Elements with the <code>.invisible</code> class will be hidden <em>both</em> visually and for assistive technology/screen reader users.</p>
    </Callout><p>Apply <code>.visible</code> or <code>.invisible</code> as needed.</p>
    <pre><code class="language-html">&lt;div class=&quot;visible&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;invisible&quot;&gt;...&lt;/div&gt;
    </code></pre>
    <pre><code class="language-scss">// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
    </code></pre>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Visibility utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="/utilities/api#using-the-api">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-visibility" file="scss/_utilities.scss" />
  </article>
</template>
