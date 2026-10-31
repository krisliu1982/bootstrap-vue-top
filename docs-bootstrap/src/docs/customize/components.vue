
<template>
  <article>
    <h1>Components</h1>
    <p>Learn how and why we build nearly all our components responsively and with base and modifier classes.</p>

    <h2 id="base-classes">Base classes<a class="anchor-link" href="#base-classes" aria-label="Link to Base classes"></a></h2>
    <p>Bootstrap’s components are largely built with a base-modifier nomenclature. We group as many shared properties as possible into a base class, like <code>.btn</code>, and then group individual styles for each variant into modifier classes, like <code>.btn-primary</code> or <code>.btn-success</code>.</p>
    <p>To build our modifier classes, we use Sass’s <code>@each</code> loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our <code>$theme-colors</code> and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you’ll automatically see your changes reflected in these loops.</p>
    <p>Check out <a href="[[docsref:/customize/sass#maps-and-loops]]">our Sass maps and loops docs</a> for how to customize these loops and extend Bootstrap’s base-modifier approach to your own code.</p>
    <h2 id="modifiers">Modifiers<a class="anchor-link" href="#modifiers" aria-label="Link to Modifiers"></a></h2>
    <p>Many of Bootstrap’s components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., <code>.btn</code>) while style variations are confined to modifier classes (e.g., <code>.btn-danger</code>). These modifier classes are built from the <code>$theme-colors</code> map to make customizing the number and name of our modifier classes.</p>
    <p>Here are two examples of how we loop over the <code>$theme-colors</code> map to generate modifiers to the <code>.alert</code> and <code>.list-group</code> components.</p>
    <ScssDocs name="alert-modifiers" file="scss/_alert.scss" /><ScssDocs name="list-group-modifiers" file="scss/_list-group.scss" /><h2 id="responsive">Responsive<a class="anchor-link" href="#responsive" aria-label="Link to Responsive"></a></h2>
    <p>These Sass loops aren’t limited to color maps, either. You can also generate responsive variations of your components. Take for example our responsive alignment of the dropdowns where we mix an <code>@each</code> loop for the <code>$grid-breakpoints</code> Sass map with a media query include.</p>
    <ScssDocs name="responsive-breakpoints" file="scss/_dropdown.scss" /><p>Should you modify your <code>$grid-breakpoints</code>, your changes will apply to all the loops iterating over that map.</p>
    <ScssDocs name="grid-breakpoints" file="scss/_variables.scss" /><p>For more information and examples on how to modify our Sass maps and variables, please refer to <a href="[[docsref:/layout/grid#css]]">the CSS section of the Grid documentation</a>.</p>
    <h2 id="creating-your-own">Creating your own<a class="anchor-link" href="#creating-your-own" aria-label="Link to Creating your own"></a></h2>
    <p>We encourage you to adopt these guidelines when building with Bootstrap to create your own components. We’ve extended this approach ourselves to the custom components in our documentation and examples. Components like our callouts are built just like our provided components with base and modifier classes.</p>
    <Example :showMarkup="false" code='<div class="docs-callout my-0">
      <strong>This is a callout.</strong> We built it custom for our docs so our messages to you stand out. It has three variants via modifier classes.
    </div>
    ' />
    <pre><code class="language-html">&lt;div class=&quot;callout&quot;&gt;...&lt;/div&gt;
    </code></pre>
    <p>In your CSS, you’d have something like the following where the bulk of the styling is done via <code>.callout</code>. Then, the unique styles between each variant is controlled via modifier class.</p>
    <pre><code class="language-scss">// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
    </code></pre>
    <p>For the callouts, that unique styling is just a <code>border-left-color</code>. When you combine that base class with one of those modifier classes, you get your complete component family:</p>
    <Callout>
    <p><strong>This is an info callout.</strong> Example text to show it in action.</p>
    </Callout><Callout type="warning">
    <p><strong>This is a warning callout.</strong> Example text to show it in action.</p>
    </Callout><Callout type="danger">
    <p><strong>This is a danger callout.</strong> Example text to show it in action.</p>
    </Callout>
  </article>
</template>
