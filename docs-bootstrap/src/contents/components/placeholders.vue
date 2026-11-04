<template>
  <article class="docs-content">
    <h1>Placeholders</h1>
    <p>Use loading placeholders (skeleton loaders) for your components or pages to indicate something may still be loading.</p>

    <h2 id="about">About<a class="anchor-link" href="#about" aria-label="Link to About"></a></h2>
    <p>
      Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will,
      however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.
    </p>
    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>
      In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the
      two.
    </p>
    <ExampleCustom
      class="docs-example-placeholder-cards d-flex justify-content-around"
      code='<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>'
    >
      <div class="card">
        <Placeholder width="100%" height="180" class="card-img-top" :text="false" background="#20c997" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card" aria-hidden="true">
        <Placeholder width="100%" height="180" class="card-img-top" :text="false" />
        <div class="card-body">
          <div class="h5 card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </div>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
      </div>
    </ExampleCustom>
    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>
      Create placeholders with the <code>.placeholder</code> class and a grid column class (e.g., <code>.col-6</code>) to set the <code>width</code>. They can replace the text
      inside an element or be added as a modifier class to an existing component.
    </p>
    <p>
      We apply additional styling to <code>.btn</code>s via <code>::before</code> to ensure the <code>height</code> is respected. You may extend this pattern for other situations
      as needed, or add a <code>&amp;nbsp;</code> within the element to reflect the height when actual text is rendered in its place.
    </p>
    <Example
      code='<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>'
    />
    <Callout>
      <p>
        The use of <code>aria-hidden=&quot;true&quot;</code> only indicates that the element should be hidden to screen readers. The <em>loading</em> behavior of the placeholder
        depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to <em>swap</em> the state of the
        placeholder and inform AT users of the update.
      </p>
    </Callout>
    <h3 id="width">Width<a class="anchor-link" href="#width" aria-label="Link to Width"></a></h3>
    <p>You can change the <code>width</code> through grid column classes, width utilities, or inline styles.</p>
    <Example
      code='<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>'
    />
    <h3 id="color">Color<a class="anchor-link" href="#color" aria-label="Link to Color"></a></h3>
    <p>By default, the <code>placeholder</code> uses <code>currentColor</code>. This can be overridden with a custom color or utility class.</p>
    <Example
      :code="
        [
          `<span class=&quot;placeholder col-12&quot;></span>
  `,
          ...data['theme-colors'].map((themeColor) => `<span class=&quot;placeholder col-12 bg-${themeColor.name}&quot;></span>`)
        ].join('\n')
      "
    />
    <h3 id="sizing">Sizing<a class="anchor-link" href="#sizing" aria-label="Link to Sizing"></a></h3>
    <p>
      The size of <code>.placeholder</code>s are based on the typographic style of the parent element. Customize them with sizing modifiers: <code>.placeholder-lg</code>,
      <code>.placeholder-sm</code>, or <code>.placeholder-xs</code>.
    </p>
    <Example
      code='<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>'
    />
    <h3 id="animation">Animation<a class="anchor-link" href="#animation" aria-label="Link to Animation"></a></h3>
    <p>Animate placeholders with <code>.placeholder-glow</code> or <code>.placeholder-wave</code> to better convey the perception of something being <em>actively</em> loaded.</p>
    <Example
      code='<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="placeholders" file="scss/_variables.scss" />
  <DocsPager /></article>

  <nav class="docs-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#example">Example</a></li>
      <li>
        <a href="#how-it-works">How it works</a>
        <ul>
          <li><a href="#width">Width</a></li>
          <li><a href="#color">Color</a></li>
          <li><a href="#sizing">Sizing</a></li>
          <li><a href="#animation">Animation</a></li>
        </ul>
      </li>
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
import { useContent } from '@/components/content-handle.js'
import data from '@/data/data.js';

useContent()
</script>
