
<template>
  <article>
    <h1>Borders</h1>
    <p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>

    <h2 id="border">Border<a class="anchor-link" href="#border" aria-label="Link to Border"></a></h2>
    <p>Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>
    <h3 id="additive">Additive<a class="anchor-link" href="#additive" aria-label="Link to Additive"></a></h3>
    <p>Add borders to custom elements:</p>
    <Example class="bd-example-border-utils" code='<span class="border"></span>
    <span class="border-top"></span>
    <span class="border-end"></span>
    <span class="border-bottom"></span>
    <span class="border-start"></span>' /><h3 id="subtractive">Subtractive<a class="anchor-link" href="#subtractive" aria-label="Link to Subtractive"></a></h3>
    <p>Or remove borders:</p>
    <Example class="bd-example-border-utils" code='<span class="border border-0"></span>
    <span class="border border-top-0"></span>
    <span class="border border-end-0"></span>
    <span class="border border-bottom-0"></span>
    <span class="border border-start-0"></span>' /><h2 id="color">Color<a class="anchor-link" href="#color" aria-label="Link to Color"></a></h2>
    <Callout>
    <p>Border utilities like <code>.border-*</code> that generated from our original <code>$theme-colors</code> Sass map don’t yet respond to color modes, however, any <code>.border-*-subtle</code> utility will. This will be resolved in v6.</p>
    </Callout><p>Change the border color using utilities built on our theme colors.</p>
    <Example class="bd-example-border-utils" :code='[
      ...data["theme-colors"].map((themeColor) => `<span class="border border-${themeColor.name}"></span>
    <span class="border border-${themeColor.name}-subtle"></span>`),
      `<span class="border border-black"></span>
    <span class="border border-white"></span>`
    ].join("\n")' /><p>Or modify the default <code>border-color</code> of a component:</p>
    <Example code='<div class="mb-4">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>

      <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
        Dangerous heading
      </div>

      <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        Changing border color and width
      </div>' /><h2 id="opacity">Opacity<a class="anchor-link" href="#opacity" aria-label="Link to Opacity"></a></h2>
    <AddedIn version="5.2.0" /><p>Bootstrap <code>border-{color}</code> utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.</p>
    <h3 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h3>
    <p>Consider our default <code>.border-success</code> utility.</p>
    <pre><code class="language-css">.border-success {
      --bs-border-opacity: 1;
      border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
    }
    </code></pre>
    <p>We use an RGB version of our <code>--bs-success</code> (with the value of <code>25, 135, 84</code>) CSS variable and attached a second CSS variable, <code>--bs-border-opacity</code>, for the alpha transparency (with a default value <code>1</code> thanks to a local CSS variable). That means anytime you use <code>.border-success</code> now, your computed <code>color</code> value is <code>rgba(25, 135, 84, 1)</code>. The local CSS variable inside each <code>.border-*</code> class avoids inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.</p>
    <h3 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h3>
    <p>To change that opacity, override <code>--bs-border-opacity</code> via custom styles or inline styles.</p>
    <Example code='<div class="border border-success p-2 mb-2">This is default success border</div>
    <div class="border border-success p-2" style="--bs-border-opacity: .5;">This is 50% opacity success border</div>' /><p>Or, choose from any of the <code>.border-opacity</code> utilities:</p>
    <Example code='<div class="border border-success p-2 mb-2">This is default success border</div>
    <div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
    <div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
    <div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
    <div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>' /><h2 id="width">Width<a class="anchor-link" href="#width" aria-label="Link to Width"></a></h2>
    <Example class="bd-example-border-utils" code='<span class="border border-1"></span>
    <span class="border border-2"></span>
    <span class="border border-3"></span>
    <span class="border border-4"></span>
    <span class="border border-5"></span>' /><h2 id="radius">Radius<a class="anchor-link" href="#radius" aria-label="Link to Radius"></a></h2>
    <p>Add classes to an element to easily round its corners.</p>
    <Example class="bd-example-rounded-utils" code='<Placeholder width="75" height="75" class="rounded" title="Example rounded image" />
    <Placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" />
    <Placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" />
    <Placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" />
    <Placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" />' /><h3 id="sizes">Sizes<a class="anchor-link" href="#sizes" aria-label="Link to Sizes"></a></h3>
    <p>Use the scaling classes for larger or smaller rounded corners. Sizes range from <code>0</code> to <code>5</code> including <code>circle</code> and <code>pill</code>, and can be configured by modifying the utilities API.</p>
    <Example class="bd-example-rounded-utils" code='<Placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" />
    <Placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" />
    <Placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" />
    <Placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" />
    <Placeholder width="75" height="75" class="rounded-4" title="Example larger rounded image" />
    <Placeholder width="75" height="75" class="rounded-5" title="Example extra large rounded image" />
    <Placeholder width="75" height="75" class="rounded-circle" title="Completely round image" />
    <Placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" />' /><Example class="bd-example-rounded-utils" code='<Placeholder width="75" height="75" class="rounded-bottom-1" title="Example small rounded image" />
    <Placeholder width="75" height="75" class="rounded-start-2" title="Example default left rounded image" />
    <Placeholder width="75" height="75" class="rounded-end-circle" title="Example right completely round image" />
    <Placeholder width="75" height="75" class="rounded-start-pill" title="Example left rounded pill image" />
    <Placeholder width="75" height="75" class="rounded-5 rounded-top-0" title="Example extra large bottom rounded image" />' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><ScssDocs name="root-border-var" file="scss/_root.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="border-variables" file="scss/_variables.scss" /><ScssDocs name="border-radius-variables" file="scss/_variables.scss" /><p>Variables for setting <code>border-color</code> in <code>.border-*-subtle</code> utilities in light and dark mode:</p>
    <ScssDocs name="theme-border-subtle-variables" file="scss/_variables.scss" /><ScssDocs name="theme-border-subtle-dark-variables" file="scss/_variables-dark.scss" /><h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Color mode adaptive border colors are also available as a Sass map:</p>
    <ScssDocs name="theme-border-subtle-map" file="scss/_maps.scss" /><ScssDocs name="theme-border-subtle-dark-map" file="scss/_maps.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <ScssDocs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Border utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-borders" file="scss/_utilities.scss" /><ScssDocs name="utils-border-radius" file="scss/_utilities.scss" />
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
