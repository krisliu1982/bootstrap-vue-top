<template>
  <article ref="contentRef" class="bd-content">
    <h1>Images</h1>
    <p>Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.</p>

    <h2 id="responsive-images">Responsive images<a class="anchor-link" href="#responsive-images" aria-label="Link to Responsive images"></a></h2>
    <p>
      Images in Bootstrap are made responsive with <code>.img-fluid</code>. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales
      with the parent width.
    </p>
    <ExampleCustom code='<img src="..." class="img-fluid" alt="...">'
      ><Placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" />
    </ExampleCustom>
    <h2 id="image-thumbnails">Image thumbnails<a class="anchor-link" href="#image-thumbnails" aria-label="Link to Image thumbnails"></a></h2>

    <p>
      In addition to our <a href="/docs-bootstrap/5.3/utilities/borders">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border
      appearance.
    </p>

    <ExampleCustom code='<img src="..." class="img-thumbnail" alt="...">'
      ><Placeholder
        width="200"
        height="200"
        class="img-thumbnail"
        title="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera"
      />
    </ExampleCustom>
    <h2 id="aligning-images">Aligning images<a class="anchor-link" href="#aligning-images" aria-label="Link to Aligning images"></a></h2>

    <p>
      Align images with the <a href="/docs-bootstrap/5.3/utilities/float">helper float classes</a> or
      <a href="/docs-bootstrap/5.3/utilities/text#text-alignment">text alignment classes</a>. <code>block</code>-level images can be centered using
      <a href="/docs-bootstrap/5.3/utilities/spacing#horizontal-centering">the <code>.mx-auto</code> margin utility class</a>.
    </p>

    <ExampleCustom
      code='<img src="..." class="rounded float-start" alt="...">
<img src="..." class="rounded float-end" alt="...">'
      ><Placeholder width="200" height="200" class="rounded float-start" /> <Placeholder width="200" height="200" class="rounded float-end"
    /></ExampleCustom>

    <ExampleCustom code='<img src="..." class="rounded mx-auto d-block" alt="...">'><Placeholder width="200" height="200" class="rounded mx-auto d-block" /></ExampleCustom>

    <ExampleCustom
      code='<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>'
      ><div class="text-center">
        <Placeholder width="200" height="200" class="rounded" /></div
    ></ExampleCustom>
    <h2 id="picture">Picture<a class="anchor-link" href="#picture" aria-label="Link to Picture"></a></h2>
    <p>
      If you are using the <code>&lt;picture&gt;</code> element to specify multiple <code>&lt;source&gt;</code> elements for a specific <code>&lt;img&gt;</code>, make sure to add
      the <code>.img-*</code> classes to the <code>&lt;img&gt;</code> and not to the <code>&lt;picture&gt;</code> tag.
    </p>
    <CodeWrapper
      code='&lt;picture&gt;
  &lt;source srcset="..." type="image/svg+xml"&gt;
  &lt;img src="..." class="img-fluid img-thumbnail" alt="..."&gt;
&lt;/picture&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Variables are available for image thumbnails.</p>
    <ScssDocs name="thumbnail-variables" file="scss/_variables.scss" />
  <DocsPager /></article>

  <nav ref="tocRef" class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#responsive-images">Responsive images</a></li>
      <li><a href="#image-thumbnails">Image thumbnails</a></li>
      <li><a href="#aligning-images">Aligning images</a></li>
      <li><a href="#picture">Picture</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass variables</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>import {ref} from 'vue'; const contentRef = ref(null);const tocRef = ref(null);
import { useContent } from '@/components/content-handle.js'

useContent(contentRef.value,  tocRef.value)
</script>
