
<template>
  <article>
    <h1>RFS</h1>
    <p>Bootstrap’s resizing engine responsively scales common CSS properties to better utilize available space across viewports and devices.</p>

    <h2 id="what-is-rfs">What is RFS?<a class="anchor-link" href="#what-is-rfs" aria-label="Link to What is RFS?"></a></h2>
    <p>Bootstrap’s side project <a href="https://github.com/twbs/rfs/tree/v10.0.0">RFS</a> is a unit resizing engine which was initially developed to resize font sizes (hence its abbreviation for Responsive Font Sizes). Nowadays RFS is capable of rescaling most CSS properties with unit values like <code>margin</code>, <code>padding</code>, <code>border-radius</code>, or even <code>box-shadow</code>.</p>
    <p>The mechanism automatically calculates the appropriate values based on the dimensions of the browser viewport. It will be compiled into <code>calc()</code> functions with a mix of <code>rem</code> and viewport units to enable the responsive scaling behavior.</p>
    <h2 id="using-rfs">Using RFS<a class="anchor-link" href="#using-rfs" aria-label="Link to Using RFS"></a></h2>
    <p>The mixins are included in Bootstrap and are available once you include Bootstrap’s <code>scss</code>. RFS can also be <a href="https://github.com/twbs/rfs/tree/v10.0.0#installation">installed standalone</a> if needed.</p>
    <h3 id="using-the-mixins">Using the mixins<a class="anchor-link" href="#using-the-mixins" aria-label="Link to Using the mixins"></a></h3>
    <p>The <code>rfs()</code> mixin has shorthands for <code>font-size</code>, <code>margin</code>, <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code>, <code>padding</code>, <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>. See the example below for source Sass and compiled CSS.</p>
    <pre><code class="language-scss">.title {
  @include font-size(4rem);
}
    </code></pre>
    <pre><code class="language-css">.title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
    </code></pre>
    <p>Any other property can be passed to the <code>rfs()</code> mixin like this:</p>
    <pre><code class="language-scss">.selector {
  @include rfs(4rem, border-radius);
}
    </code></pre>
    <p><code>!important</code> can also just be added to whatever value you want:</p>
    <pre><code class="language-scss">.selector {
  @include padding(2.5rem !important);
}
    </code></pre>
    <h3 id="using-the-functions">Using the functions<a class="anchor-link" href="#using-the-functions" aria-label="Link to Using the functions"></a></h3>
    <p>When you don’t want to use the includes, there are also two functions:</p>
    <ul>
    <li><code>rfs-value()</code> converts a value into a <code>rem</code> value if a <code>px</code> value is passed, in other cases it returns the same result.</li>
    <li><code>rfs-fluid-value()</code> returns the fluid version of a value if the property needs rescaling.</li>
    </ul>
    <p>In this example, we use one of Bootstrap’s built-in <a href="/layout/breakpoints">responsive breakpoint mixins</a> to only apply styling below the <code>lg</code> breakpoint.</p>
    <pre><code class="language-scss">.selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
    </code></pre>
    <pre><code class="language-css">@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won’t rescale this */
  }
}
    </code></pre>
    <h2 id="extended-documentation">Extended documentation<a class="anchor-link" href="#extended-documentation" aria-label="Link to Extended documentation"></a></h2>
    <p>RFS is a separate project under the Bootstrap organization. More about RFS and its configuration can be found on its <a href="https://github.com/twbs/rfs/tree/v10.0.0">GitHub repository</a>.</p>
  </article>
</template>
