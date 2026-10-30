
<template>
  <article>
    <h1>Form controls</h1>
    <p>Give textual form controls like `&lt;input&gt;`s and `&lt;textarea&gt;`s an upgrade with custom styles, sizing, focus states, and more.</p>

    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>Form controls are styled with a mix of Sass and CSS variables, allowing them to adapt to color modes and support any customization method.</p>
    <Example code={`<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>`} /><h2 id="sizing">Sizing<a class="anchor-link" href="#sizing" aria-label="Link to Sizing"></a></h2>
    <p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
    <Example code={`<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
    <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">`} /><h2 id="form-text">Form text<a class="anchor-link" href="#form-text" aria-label="Link to Form text"></a></h2>
    <p>Block-level or inline-level form text can be created using <code>.form-text</code>.</p>
    <Callout type="warning">
    <p>Form text should be explicitly associated with the form control it relates to using the <code>aria-describedby</code> attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.</p>
    </Callout><p>Form text below inputs can be styled with <code>.form-text</code>. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.</p>
    <Example code={`<label for="inputPassword5" class="form-label">Password</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      <div id="passwordHelpBlock" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>`} /><p>Inline text can use any typical inline HTML element (be it a <code>&lt;span&gt;</code>, <code>&lt;small&gt;</code>, or something else) with nothing more than the <code>.form-text</code> class.</p>
    <Example code={`<div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
          <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">
            Must be 8-20 characters long.
          </span>
        </div>
      </div>`} /><h2 id="disabled">Disabled<a class="anchor-link" href="#disabled" aria-label="Link to Disabled"></a></h2>
    <p>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.</p>
    <Example code={`<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
    <input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>`} /><h2 id="readonly">Readonly<a class="anchor-link" href="#readonly" aria-label="Link to Readonly"></a></h2>
    <p>Add the <code>readonly</code> boolean attribute on an input to prevent modification of the input’s value. <code>readonly</code> inputs can still be focused and selected, while <code>disabled</code> inputs cannot.</p>
    <Example code={`<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>`} /><h2 id="readonly-plain-text">Readonly plain text<a class="anchor-link" href="#readonly-plain-text" aria-label="Link to Readonly plain text"></a></h2>
    <p>If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled as plain text, replace <code>.form-control</code> with <code>.form-control-plaintext</code> to remove the default form field styling and preserve the correct <code>margin</code> and <code>padding</code>.</p>
    <Example code={`<div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword">
        </div>
      </div>`} /><Example code={`<form class="row g-3">
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
        </div>
        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
        </div>
      </form>`} /><h2 id="file-input">File input<a class="anchor-link" href="#file-input" aria-label="Link to File input"></a></h2>
    <Example code={`<div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Multiple files input example</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple>
      </div>
      <div class="mb-3">
        <label for="formFileDisabled" class="form-label">Disabled file input example</label>
        <input class="form-control" type="file" id="formFileDisabled" disabled>
      </div>
      <div class="mb-3">
        <label for="formFileSm" class="form-label">Small file input example</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
      </div>
      <div>
        <label for="formFileLg" class="form-label">Large file input example</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file">
      </div>`} /><h2 id="color">Color<a class="anchor-link" href="#color" aria-label="Link to Color"></a></h2>
    <p>Set the <code>type=&quot;color&quot;</code> and add <code>.form-control-color</code> to the <code>&lt;input&gt;</code>. We use the modifier class to set fixed <code>height</code>s and override some inconsistencies between browsers.</p>
    <Example code={`<label for="exampleColorInput" class="form-label">Color picker</label>
    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">`} /><h2 id="datalists">Datalists<a class="anchor-link" href="#datalists" aria-label="Link to Datalists"></a></h2>
    <p>Datalists allow you to create a group of <code>&lt;option&gt;</code>s that can be accessed (and autocompleted) from within an <code>&lt;input&gt;</code>. These are similar to <code>&lt;select&gt;</code> elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for <code>&lt;datalist&gt;</code> elements, their styling is inconsistent at best.</p>
    <p>Learn more about <a href="https://caniuse.com/datalist">support for datalist elements</a>.</p>
    <Example code={`<label for="exampleDataList" class="form-label">Datalist example</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
      <datalist id="datalistOptions">
        <option value="San Francisco">
        <option value="New York">
        <option value="Seattle">
        <option value="Los Angeles">
        <option value="Chicago">
      </datalist>`} /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p><code>$input-*</code> are shared across most of our form controls (and not buttons).</p>
    <ScssDocs name="form-input-variables" file="scss/_variables.scss" /><p><code>$form-label-*</code> and <code>$form-text-*</code> are for our <code>&lt;label&gt;</code>s and <code>.form-text</code> component.</p>
    <ScssDocs name="form-label-variables" file="scss/_variables.scss" /><ScssDocs name="form-text-variables" file="scss/_variables.scss" /><p><code>$form-file-*</code> are for file input.</p>
    <ScssDocs name="form-file-variables" file="scss/_variables.scss" />
  </article>
</template>
