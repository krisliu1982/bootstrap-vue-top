
<template>
  <article>
    <h1>Object fit</h1>
    <p>Use the object fit utilities to modify how the content of a &lt;a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element" target="_blank" rel="noopener noreferrer"&gt;replaced element&lt;/a&gt;, such as an `&lt;img&gt;` or `&lt;video&gt;`, should be resized to fit its container.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code>object-fit</code> property</a> with our responsive <code>object-fit</code> utility classes. This property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible.</p>
    <p>Classes for the value of <code>object-fit</code> are named using the format <code>.object-fit-{value}</code>. Choose from the following values:</p>
    <ul>
    <li><code>contain</code></li>
    <li><code>cover</code></li>
    <li><code>fill</code></li>
    <li><code>scale</code> (for scale-down)</li>
    <li><code>none</code></li>
    </ul>
    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>Add the <code>object-fit-{value}</code> class to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">replaced element</a>:</p>
    <Example class="d-flex overflow-auto" code='<Placeholder width="140" height="120" class="object-fit-contain border rounded" text="Object fit contain" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-cover border rounded" text="Object fit cover" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-fill border rounded" text="Object fit fill" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-scale border rounded" text="Object fit scale down" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-none border rounded" text="Object fit none" markup="img" />' /><h2 id="responsive">Responsive<a class="anchor-link" href="#responsive" aria-label="Link to Responsive"></a></h2>
    <p>Responsive variations also exist for each <code>object-fit</code> value using the format <code>.object-fit-{breakpoint}-{value}</code>, for the following breakpoint abbreviations: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>. Classes can be combined for various effects as you need.</p>
    <Example class="d-flex overflow-auto" code='<Placeholder width="140" height="80" class="object-fit-sm-contain border rounded" text="Contain on sm" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-md-contain border rounded" text="Contain on md" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-lg-contain border rounded" text="Contain on lg" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-xl-contain border rounded" text="Contain on xl" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-xxl-contain border rounded" text="Contain on xxl" markup="img" />' /><h2 id="video">Video<a class="anchor-link" href="#video" aria-label="Link to Video"></a></h2>
    <p>The <code>.object-fit-{value}</code> and responsive <code>.object-fit-{breakpoint}-{value}</code> utilities also work on <code>&lt;video&gt;</code> elements.</p>
    <pre><code class="language-html">&lt;video src=&quot;...&quot; class=&quot;object-fit-contain&quot; autoplay&gt;&lt;/video&gt;
    &lt;video src=&quot;...&quot; class=&quot;object-fit-cover&quot; autoplay&gt;&lt;/video&gt;
    &lt;video src=&quot;...&quot; class=&quot;object-fit-fill&quot; autoplay&gt;&lt;/video&gt;
    &lt;video src=&quot;...&quot; class=&quot;object-fit-scale&quot; autoplay&gt;&lt;/video&gt;
    &lt;video src=&quot;...&quot; class=&quot;object-fit-none&quot; autoplay&gt;&lt;/video&gt;
    </code></pre>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Object fit utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-object-fit" file="scss/_utilities.scss" />
  </article>
</template>
