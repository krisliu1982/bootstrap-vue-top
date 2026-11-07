<template>
  <article class="bd-content">
    <h1>Figures</h1>
    <p>Documentation and examples for displaying related images and text with the figure component in Bootstrap.</p>

    <p>
      Anytime you need to display a piece of content—like an image with an optional caption, consider using a
      <code>&lt;figure&gt;</code>.
    </p>
    <p>
      Use the included <code>.figure</code>, <code>.figure-img</code> and <code>.figure-caption</code> classes to provide some baseline styles for the HTML5
      <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements. Images in figures have no explicit size, so be sure to add the <code>.img-fluid</code> class to your
      <code>&lt;img&gt;</code> to make it responsive.
    </p>

    <ExampleCustom
      code='<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>'
      ><figure class="figure">
        <Placeholder width="400" height="300" class="figure-img img-fluid rounded" />
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
      </figure></ExampleCustom
    >
    <p>
      Aligning the figure’s caption is easy with our
      <a href="/docs-bootstrap/5.3/utilities/text#text-alignment">text utilities</a>.
    </p>

    <ExampleCustom
      code='<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
</figure>'
      ><figure class="figure">
        <Placeholder width="400" height="300" class="figure-img img-fluid rounded" />
        <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
      </figure></ExampleCustom
    >
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="figure-variables" file="scss/_variables.scss" />
  <DocsPager /></article>

  <nav class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass variables</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>



</script>
