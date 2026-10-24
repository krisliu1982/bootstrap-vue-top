---
title: Reboot
description: Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.
aliases:
 - "/docs/[[config:docs_version]]/content/"
 - "/docs/content/"
 - "/content/"
toc: true
css_layer: reboot
---
[[toc]]
## Approach

Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

<CodeHighlight code="$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);" lang="scss" label="scss/_config.scss"></CodeHighlight>

## Headings

All heading elements—`<h1>`—`<h6>` have their `margin-top` removed, `margin-bottom: .5rem` set, and `line-height` tightened. While headings inherit their `color` by default, you can also override it via optional CSS variable, `--bs-heading-color`.

You can also use the `.h1`–`.h6` classes to style headings without using the HTML elements.

| Heading | Example |
| --- | --- |
| `<h1></h1>` | <span class="h1">h1. Bootstrap heading</span> |
| `<h2></h2>` | <span class="h2">h2. Bootstrap heading</span> |
| `<h3></h3>` | <span class="h3">h3. Bootstrap heading</span> |
| `<h4></h4>` | <span class="h4">h4. Bootstrap heading</span> |
| `<h5></h5>` | <span class="h5">h5. Bootstrap heading</span> |
| `<h6></h6>` | <span class="h6">h6. Bootstrap heading</span> |

```html
<body style="--bs-body-color: #333;">
  <!-- ... -->
</body>
```

<div class="table-responsive">
  <table class="table mb-4">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">xs<br/><span class="fw-normal">&lt;576px</span></th>
        <th scope="col">sm<br/><span class="fw-normal">&ge;576px</span></th>
        <th scope="col">md<br/><span class="fw-normal">&ge;768px</span></th>
        <th scope="col">lg<br/><span class="fw-normal">&ge;1024px</span></th>
        <th scope="col">xl<br/><span class="fw-normal">&ge;1280px</span></th>
        <th scope="col">2xl<br/><span class="fw-normal">&ge;1536px</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
        <td>1440px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.sm:col-</code></td>
        <td><code>.md:col-</code></td>
        <td><code>.lg:col-</code></td>
        <td><code>.xl:col-</code></td>
        <td><code>.2xl:col-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="6">1.5rem (.75rem on left and right)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Custom gutters</th>
        <td colspan="6"><a href="[[docsref:/layout/gutters]]">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="6"><a href="#nesting">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="6"><a href="[[docsref:/layout/columns#reordering]]">Yes</a></td>
      </tr>
    </tbody>
  </table>
</div>
