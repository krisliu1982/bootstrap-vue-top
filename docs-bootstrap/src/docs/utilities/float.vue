
<template>
  <article>
    <h1>Float</h1>
    <p>Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>

    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">CSS <code>float</code> property</a>. <code>!important</code> is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items.</p>
    <Example code='<div class="float-start">Float start on all viewport sizes</div><br>
    <div class="float-end">Float end on all viewport sizes</div><br>
    <div class="float-none">Don’t float on all viewport sizes</div>' /><p>Use the <a href="[[docsref:/helpers/clearfix]]">clearfix helper</a> on a parent element to clear floats.</p>
    <h2 id="responsive">Responsive<a class="anchor-link" href="#responsive" aria-label="Link to Responsive"></a></h2>
    <p>Responsive variations also exist for each <code>float</code> value.</p>
    <Example code='<div class="float-sm-end">Float end on viewports sized SM (small) or wider</div><br>
    <div class="float-md-end">Float end on viewports sized MD (medium) or wider</div><br>
    <div class="float-lg-end">Float end on viewports sized LG (large) or wider</div><br>
    <div class="float-xl-end">Float end on viewports sized XL (extra large) or wider</div><br>
    <div class="float-xxl-end">Float end on viewports sized XXL (extra extra large) or wider</div><br>' /><p>Here are all the support classes:</p>
    <ul>

        <template v-for="breakpoint in data['breakpoints']">
          <li><code>.float{{breakpoint.abbr}}-start</code></li>
          <li><code>.float{{breakpoint.abbr}}-end</code></li>
          <li><code>.float{{breakpoint.abbr}}-none</code></li>
        </template>

    </ul><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Float utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-float" file="scss/_utilities.scss" />
  </article>
</template>

<script setup>
import data from '@/data/data.js'
</script>
