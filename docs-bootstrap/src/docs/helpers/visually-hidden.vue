
<template>
  <article>
    <h1>Visually hidden</h1>
    <p>Use these helpers to visually hide elements but keep them accessible to assistive technologies.</p>

    <p>Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with <code>.visually-hidden</code>. Use <code>.visually-hidden-focusable</code> to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user). <code>.visually-hidden-focusable</code> can also be applied to a container–thanks to <code>:focus-within</code>, the container will be displayed when any child element of the container receives focus.</p>
    <Example code='<h2 class="visually-hidden">Title for screen readers</h2>
      <a class="visually-hidden-focusable" href="#content">Skip to main content</a>
      <div class="visually-hidden-focusable">A container with a <a href="#">focusable element</a>.</div>' /><p>Both <code>visually-hidden</code> and <code>visually-hidden-focusable</code> can also be used as mixins.</p>
    <pre><code class="language-scss">// Usage as a mixin

.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
    </code></pre>
  </article>
</template>
