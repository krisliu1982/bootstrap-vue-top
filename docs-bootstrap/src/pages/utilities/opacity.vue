<template>
  <article class="bd-content">
    <h1>Opacity</h1>
    <p>Control the opacity of elements.</p>

    <p>
      The <code>opacity</code> property sets the opacity level for an element. The opacity level describes the transparency level, where <code>1</code> is not transparent at all,
      <code>.5</code> is 50% visible, and <code>0</code> is completely transparent.
    </p>
    <p>Set the <code>opacity</code> of an element using <code>.opacity-{value}</code> utilities.</p>
    <div class="bd-example d-sm-flex">
      <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
      <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
      <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
      <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
      <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
    </div>
    <CodeWrapper
      code='&lt;div class="opacity-100"&gt;...&lt;/div&gt;
&lt;div class="opacity-75"&gt;...&lt;/div&gt;
&lt;div class="opacity-50"&gt;...&lt;/div&gt;
&lt;div class="opacity-25"&gt;...&lt;/div&gt;
&lt;div class="opacity-0"&gt;...&lt;/div&gt;'
      lang="html"
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>
      Opacity utilities are declared in our utilities API in <code>scss/_utilities.scss</code>.
      <a href="/docs-bootstrap/5.3/utilities/api#using-the-api">Learn how to use the utilities API.</a>
    </p>
    <ScssDocs name="utils-opacity" file="scss/_utilities.scss" />
  <DocsPager /></article>

  <nav class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-utilities-api">Sass utilities API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>



</script>
