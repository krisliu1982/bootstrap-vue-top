<template>
  <article class="bd-content">
    <h1>Color and background</h1>
    <p class="lead">Set a background color with contrasting foreground color.</p>

    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>
      Color and background helpers combine the power of our
      <a href="/utilities/colors"><code>.text-*</code> utilities</a> and <a href="/utilities/background"><code>.bg-*</code> utilities</a> in one class. Using our Sass <code>color-contrast()</code> function, we automatically determine a contrasting <code>color</code> for a particular <code>background-color</code>.
    </p>
    <Callout type="warning">
      <p><strong>Heads up!</strong> There’s currently no support for a CSS-native <code>color-contrast</code> function, so we use our own via Sass. This means that customizing our theme colors via CSS variables may cause color contrast issues with these utilities.</p> </Callout
    ><Example :code="data['theme-colors'].map((themeColor) => `<div class=&quot;text-bg-${themeColor.name} p-3&quot;>${themeColor.name} with contrasting color</div>`).join('\n')" /><Callout name="warning-color-assistive-technologies" />
    <h2 id="with-components">With components<a class="anchor-link" href="#with-components" aria-label="Link to With components"></a></h2>
    <p>Use them in place of combined <code>.text-*</code> and <code>.bg-*</code> classes, like on <a href="/components/badge#background-colors">badges</a>:</p>
    <Example
      code='<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-info">Info</span>'
    />
    <p>Or on <a href="/components/card#background-and-color">cards</a>:</p>
    <Example
      code='<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
<div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li>
        <a href="#with-components">With components</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();

import data from '@/data/data.js';
</script>
