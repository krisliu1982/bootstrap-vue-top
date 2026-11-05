<template>
  <article ref="contentRef" class="bd-content">
    <h1>Object fit</h1>
<p>Use the object fit utilities to modify how the content of a replaced element, such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>
      Change the value of the
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code>object-fit</code> property</a> with our responsive <code>object-fit</code> utility classes. This
      property tells the content to fill the parent container in a variety of ways, such as preserving the aspect ratio or stretching to take up as much space as possible.
    </p>
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
    <ExampleCustom class="d-flex overflow-auto" code='<img src="..." class="object-fit-contain border rounded" alt="...">
<img src="..." class="object-fit-cover border rounded" alt="...">
<img src="..." class="object-fit-fill border rounded" alt="...">
<img src="..." class="object-fit-scale border rounded" alt="...">
<img src="..." class="object-fit-none border rounded" alt="...">'><Placeholder width="140" height="120" class="object-fit-contain border rounded" text="Object fit contain" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-cover border rounded" text="Object fit cover" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-fill border rounded" text="Object fit fill" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-scale border rounded" text="Object fit scale down" markup="img" />
    <Placeholder width="140" height="120" class="object-fit-none border rounded" text="Object fit none" markup="img" /></ExampleCustom>
    <h2 id="responsive">Responsive<a class="anchor-link" href="#responsive" aria-label="Link to Responsive"></a></h2>
    <p>
      Responsive variations also exist for each <code>object-fit</code> value using the format <code>.object-fit-{breakpoint}-{value}</code>, for the following breakpoint
      abbreviations: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>. Classes can be combined for various effects as you need.
    </p>
    <ExampleCustom class="d-flex overflow-auto" code='<img src="..." class="object-fit-sm-contain border rounded" alt="...">
<img src="..." class="object-fit-md-contain border rounded" alt="...">
<img src="..." class="object-fit-lg-contain border rounded" alt="...">
<img src="..." class="object-fit-xl-contain border rounded" alt="...">
<img src="..." class="object-fit-xxl-contain border rounded" alt="...">'><Placeholder width="140" height="80" class="object-fit-sm-contain border rounded" text="Contain on sm" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-md-contain border rounded" text="Contain on md" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-lg-contain border rounded" text="Contain on lg" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-xl-contain border rounded" text="Contain on xl" markup="img" />
    <Placeholder width="140" height="80" class="object-fit-xxl-contain border rounded" text="Contain on xxl" markup="img" /></ExampleCustom>
    <h2 id="video">Video<a class="anchor-link" href="#video" aria-label="Link to Video"></a></h2>
    <p>The <code>.object-fit-{value}</code> and responsive <code>.object-fit-{breakpoint}-{value}</code> utilities also work on <code>&lt;video&gt;</code> elements.</p>
    <CodeWrapper
      code='&lt;video src="..." class="object-fit-contain" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-cover" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-fill" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-scale" autoplay&gt;&lt;/video&gt;
&lt;video src="..." class="object-fit-none" autoplay&gt;&lt;/video&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>
      Object fit utilities are declared in our utilities API in <code>scss/_utilities.scss</code>.
      <a href="/docs-bootstrap/5.3/utilities/api#using-the-api">Learn how to use the utilities API.</a>
    </p>
    <ScssDocs name="utils-object-fit" file="scss/_utilities.scss" />
  <DocsPager /></article>

  <nav ref="tocRef" class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#how-it-works">How it works</a></li>
      <li><a href="#examples">Examples</a></li>
      <li><a href="#responsive">Responsive</a></li>
      <li><a href="#video">Video</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-utilities-api">Sass utilities API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>import {ref} from 'vue'; const contentRef = ref(null);const tocRef = ref(null);
import { useContent } from '@/assets/content-handle.js'

useContent(contentRef.value,  tocRef.value)
</script>
