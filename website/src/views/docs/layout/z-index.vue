<template>
  <div class="docs-intro">
    <h1>Z-index</h1>
    <p>While not a part of Bootstrap’s grid system, z-indexes play an important part in how our components overlay
      and interact with one another.</p>
  </div>
  <div class="docs-toc">
  </div>
  <div class="docs-content prose" v-scrollspy.body data-bs-target="#TableOfContents" data-pagefind-body>
    <p>Several Bootstrap components utilize <code>z-index</code>, the CSS property that helps control layout by
      providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that’s been designed
      to properly layer navigation, tooltips and popovers, modals, and more.</p>
    <p>These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need
      a standard set of these across our layered components—tooltips, popovers, navbars, menus, modals—so we can be
      reasonably consistent in the behaviors. There’s no reason we couldn’t have used <code>100</code>+ or
      <code>500</code>+.
    </p>
    <p>We don’t encourage customization of these individual values; should you change one, you likely need to change
      them all.</p>
    <div class="docs-code-snippet docs-example-snippet" data-pagefind-ignore="">
      <CodeHighlight :code='`$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  menu: 1000,
  sticky: 1010,
  fixed: 1020,
  drawer: 1030,
  dialog: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
);`' lang="scss" label="scss/_config.scss"></CodeHighlight>
    </div>
    <p>To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single
      digit <code>z-index</code> values of <code>1</code>, <code>2</code>, and <code>3</code> for default, hover, and
      active states. On hover/focus/active, we bring a particular element to the forefront with a higher
      <code>z-index</code> value to show their border over the sibling elements.
    </p>

    <nav class="docs-links-nav py-9">
      <div class="d-flex justify-content-stretch gap-9 lh-1"><a href="/docs/6.0/layout/utilities/"
          class="d-flex flex-column gap-3 text-decoration-none text-end flex-grow-1" rel="prev">
          <div class="fg-3">← Previous</div>
          <div class="fw-semibold">Utilities</div>
          <div class="fg-3">Layout</div>
        </a><a href="/docs/6.0/layout/css-grid/" class="d-flex flex-column gap-3 text-decoration-none flex-grow-1"
          rel="next">
          <div class="fg-3">Next →</div>
          <div class="fw-semibold">CSS Grid</div>
          <div class="fg-3">Layout</div>
        </a></div>
    </nav>
  </div>
</template>
