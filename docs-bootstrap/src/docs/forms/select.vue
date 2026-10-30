
<template>
  <article>
    <h1>Select</h1>
    <p>Customize the native `&lt;select&gt;`s with custom CSS that changes the element’s initial appearance.</p>

    <h2 id="default">Default<a class="anchor-link" href="#default" aria-label="Link to Default"></a></h2>
    <p>Custom <code>&lt;select&gt;</code> menus need only a custom class, <code>.form-select</code> to trigger the custom styles. Custom styles are limited to the <code>&lt;select&gt;</code>’s initial appearance and cannot modify the <code>&lt;option&gt;</code>s due to browser limitations.</p>
    <Example code={`<select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`} /><h2 id="sizing">Sizing<a class="anchor-link" href="#sizing" aria-label="Link to Sizing"></a></h2>
    <p>You may also choose from small and large custom selects to match our similarly sized text inputs.</p>
    <Example code={`<select class="form-select form-select-lg mb-3" aria-label="Large select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select class="form-select form-select-sm" aria-label="Small select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`} /><p>The <code>multiple</code> attribute is also supported:</p>
    <Example code={`<select class="form-select" multiple aria-label="Multiple select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`} /><p>As is the <code>size</code> attribute:</p>
    <Example code={`<select class="form-select" size="3" aria-label="Size 3 select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`} /><h2 id="disabled">Disabled<a class="anchor-link" href="#disabled" aria-label="Link to Disabled"></a></h2>
    <p>Add the <code>disabled</code> boolean attribute on a select to give it a grayed out appearance and remove pointer events.</p>
    <Example code={`<select class="form-select" aria-label="Disabled select example" disabled>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="form-select-variables" file="scss/_variables.scss" />
  </article>
</template>
