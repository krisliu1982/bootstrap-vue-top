
<template>
  <article>
    <h1>Colored links</h1>
    <p>Colored links with hover states</p>

    <h2 id="link-colors">Link colors<a class="anchor-link" href="#link-colors" aria-label="Link to Link colors"></a></h2>
    <p>You can use the <code>.link-*</code> classes to colorize links. Unlike the <a href="[[docsref:/utilities/colors]]"><code>.text-*</code> classes</a>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</p>
    <Callout>
    <p><strong>Heads up!</strong> <code>.link-body-emphasis</code> is currently the only colored link that adapts to color modes. It’s treated as a special case until v6 arrives and we can more thoroughly rebuild our theme colors for color modes. Until then, it’s a unique, high-contrast link color with custom <code>:hover</code> and <code>:focus</code> styles. However, it still responds to the new link utilities.</p>
    </Callout><Example code={[
      ...getData('theme-colors').map((themeColor) => `<p><a href="#" class="link-${themeColor.name}">${themeColor.title} link</a></p>`),
      `<p><a href="#" class="link-body-emphasis">Emphasis link</a></p>`
    ]} /><Callout name="warning-color-assistive-technologies" /><h2 id="link-utilities">Link utilities<a class="anchor-link" href="#link-utilities" aria-label="Link to Link utilities"></a></h2>
    <AddedIn version="5.3.0"/><p>Colored links can also be modified by our <a href="[[docsref:/utilities/link/]]">link utilities</a>.</p>
    <Example code={[
      ...getData('theme-colors').map((themeColor) => `<p><a href="#" class="link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">${themeColor.title} link</a></p>`),
      `<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>`
    ]} />
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
