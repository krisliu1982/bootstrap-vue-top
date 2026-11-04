<template>
  <article class="docs-content">
    <h1>Colored links</h1>
    <p>Colored links with hover states</p>

    <h2 id="link-colors">Link colors<a class="anchor-link" href="#link-colors" aria-label="Link to Link colors"></a></h2>
    <p>
      You can use the <code>.link-*</code> classes to colorize links. Unlike the <a href="/docs-bootstrap/5.3/utilities/colors"><code>.text-*</code> classes</a>, these classes have
      a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to
      have sufficient contrast.
    </p>
    <Callout>
      <p>
        <strong>Heads up!</strong> <code>.link-body-emphasis</code> is currently the only colored link that adapts to color modes. It’s treated as a special case until v6 arrives
        and we can more thoroughly rebuild our theme colors for color modes. Until then, it’s a unique, high-contrast link color with custom <code>:hover</code> and
        <code>:focus</code> styles. However, it still responds to the new link utilities.
      </p> </Callout
    ><Example
      :code="
        [
          ...data['theme-colors'].map((themeColor) => `<p><a href=&quot;#&quot; class=&quot;link-${themeColor.name}&quot;>${themeColor.name} link</a></p>`),
          `<p><a href=&quot;#&quot; class=&quot;link-body-emphasis&quot;>Emphasis link</a></p>`
        ].join('\n')
      "
    /><Callout name="warning-color-assistive-technologies" />
    <h2 id="link-utilities">Link utilities<a class="anchor-link" href="#link-utilities" aria-label="Link to Link utilities"></a></h2>
    <AddedIn version="5.3.0" />
    <p>Colored links can also be modified by our <a href="/docs-bootstrap/5.3/utilities/link/">link utilities</a>.</p>
    <Example
      :code="
        [
          ...data['theme-colors'].map(
            (themeColor) =>
              `<p><a href=&quot;#&quot; class=&quot;link-${themeColor.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover&quot;>${themeColor.name} link</a></p>`
          ),
          `<p><a href=&quot;#&quot; class=&quot;link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover&quot;>Emphasis link</a></p>`
        ].join('\n')
      "
    />
  </article>

  <nav class="docs-toc" aria-label="On this page">
    <h6>On this page</h6>
    <ul>
      <li><a href="#link-colors">Link colors</a></li>
      <li>
        <a href="#link-utilities">Link utilities</a>
        
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useContent } from '@/components/content-handle.js'
import data from '@/data/data.js';

useContent()
</script>
