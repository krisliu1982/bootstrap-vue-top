
<template>
  <article>
    <h1>Vertical alignment</h1>
    <p>Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.</p>

    <p>Change the alignment of elements with the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"><code>vertical-alignment</code></a> utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.</p>
    <p>Choose from <code>.align-baseline</code>, <code>.align-top</code>, <code>.align-middle</code>, <code>.align-bottom</code>, <code>.align-text-bottom</code>, and <code>.align-text-top</code> as needed.</p>
    <p>To vertically center non-inline content (like <code>&lt;div&gt;</code>s and more), use our <a href="[[docsref:/utilities/flex#align-items]]">flex box utilities</a>.</p>
    <p>With inline elements:</p>
    <Example code='<span class="align-baseline">baseline</span>
    <span class="align-top">top</span>
    <span class="align-middle">middle</span>
    <span class="align-bottom">bottom</span>
    <span class="align-text-top">text-top</span>
    <span class="align-text-bottom">text-bottom</span>' /><p>With table cells:</p>
    <Example code='<table style="height: 100px;">
        <tbody>
          <tr>
            <td class="align-baseline">baseline</td>
            <td class="align-top">top</td>
            <td class="align-middle">middle</td>
            <td class="align-bottom">bottom</td>
            <td class="align-text-top">text-top</td>
            <td class="align-text-bottom">text-bottom</td>
          </tr>
        </tbody>
      </table>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Vertical align utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-vertical-align" file="scss/_utilities.scss" />
  </article>
</template>
