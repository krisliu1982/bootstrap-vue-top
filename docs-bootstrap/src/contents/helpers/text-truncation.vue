
<template>
  <article>
    <h1>Text truncation</h1>
    <p>Truncate long strings of text with an ellipsis.</p>

    <p>For longer content, you can add a <code>.text-truncate</code> class to truncate the text with an ellipsis. <strong>Requires <code>display: inline-block</code> or <code>display: block</code>.</strong></p>
    <Example code='<!-- Block level -->
      <div class="row">
        <div class="col-2 text-truncate">
          This text is quite long, and will be truncated once displayed.
        </div>
      </div>

      <!-- Inline level -->
      <span class="d-inline-block text-truncate" style="max-width: 150px;">
        This text is quite long, and will be truncated once displayed.
      </span>' />
  </article>
</template>
