
<template>
  <article>
    <h1>Clearfix</h1>
    <p>Quickly and easily clear floated content within a container by adding a clearfix utility.</p>

    <p>Easily clear <code>float</code>s by adding <code>.clearfix</code> <strong>to the parent element</strong>. Can also be used as a mixin.</p>
    <p>Use in HTML:</p>
    <pre><code class="language-html">&lt;div class=&quot;clearfix&quot;&gt;...&lt;/div&gt;
    </code></pre>
    <p>The mixin source code:</p>
    <ScssDocs name="clearfix" file="scss/mixins/_clearfix.scss" /><p>Use the mixin in SCSS:</p>
    <pre><code class="language-scss">.element {
      @include clearfix;
    }
    </code></pre>
    <p>The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.</p>
    <Example code={`<div class="bg-info clearfix">
        <button type="button" class="btn btn-secondary float-start">Example Button floated left</button>
        <button type="button" class="btn btn-secondary float-end">Example Button floated right</button>
      </div>`} />
  </article>
</template>
