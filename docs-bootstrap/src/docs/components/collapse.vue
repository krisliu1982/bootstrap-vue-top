
<template>
  <article>
    <h1>Collapse</h1>
    <p>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the <code>height</code> from its current value to <code>0</code>. Given how CSS handles animations, you cannot use <code>padding</code> on a <code>.collapse</code> element. Instead, use the class as an independent wrapping element.</p>
    <Callout name="info-prefersreducedmotion" /><h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>Click the buttons below to show and hide another element via class changes:</p>
    <ul>
    <li><code>.collapse</code> hides content</li>
    <li><code>.collapsing</code> is applied during transitions</li>
    <li><code>.collapse.show</code> shows content</li>
    </ul>
    <p>Generally, we recommend using a <code>&lt;button&gt;</code> with the <code>data-bs-target</code> attribute. While not recommended from a semantic point of view, you can also use an <code>&lt;a&gt;</code> link with the <code>href</code> attribute (and a <code>role=&quot;button&quot;</code>). In both cases, the <code>data-bs-toggle=&quot;collapse&quot;</code> is required.</p>
    <Example code='<p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div>' /><h2 id="horizontal">Horizontal<a class="anchor-link" href="#horizontal" aria-label="Link to Horizontal"></a></h2>
    <p>The collapse plugin supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our <a href="[[docsref:/utilities/sizing]]">width utilities</a>.</p>
    <Callout>
    <p>Please note that while the example below has a <code>min-height</code> set to avoid excessive repaints in our docs, this is not explicitly required. <strong>Only the <code>width</code> on the child element is required.</strong></p>
    </Callout><Example code='<p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          Toggle width collapse
        </button>
      </p>
      <div style="min-height: 120px;">
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card card-body" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It’s hidden by default and shown when triggered.
          </div>
        </div>
      </div>' /><h2 id="multiple-toggles-and-targets">Multiple toggles and targets<a class="anchor-link" href="#multiple-toggles-and-targets" aria-label="Link to Multiple toggles and targets"></a></h2>
    <p>A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element can show and hide multiple elements by referencing them with a selector in its <code>data-bs-target</code> or <code>href</code> attribute.
    Conversely, multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> elements can show and hide the same element if they each reference it with their <code>data-bs-target</code> or <code>href</code> attribute.</p>
    <Example code='<p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>' /><h2 id="accessibility">Accessibility<a class="anchor-link" href="#accessibility" aria-label="Link to Accessibility"></a></h2>
    <p>Be sure to add <code>aria-expanded</code> to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of <code>aria-expanded=&quot;false&quot;</code>. If you’ve set the collapsible element to be open by default using the <code>show</code> class, set <code>aria-expanded=&quot;true&quot;</code> on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element’s HTML element is not a button (e.g., an <code>&lt;a&gt;</code> or <code>&lt;div&gt;</code>), the attribute <code>role=&quot;button&quot;</code> should be added to the element.</p>
    <p>If your control element is targeting a single collapsible element – i.e. the <code>data-bs-target</code> attribute is pointing to an <code>id</code> selector – you should add the <code>aria-controls</code> attribute to the control element, containing the <code>id</code> of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.</p>
    <p>Note that Bootstrap’s current implementation does not cover the various <em>optional</em> keyboard interactions described in the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">ARIA Authoring Practices Guide accordion pattern</a> - you will need to include these yourself with custom JavaScript.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="collapse-transition" file="scss/_variables.scss" /><h3 id="classes">Classes<a class="anchor-link" href="#classes" aria-label="Link to Classes"></a></h3>
    <p>Collapse transition classes can be found in <code>scss/_transitions.scss</code> as these are shared across multiple components (collapse and accordion).</p>
    <ScssDocs name="collapse-classes" file="scss/_transitions.scss" /><h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <p>The collapse plugin utilizes a few classes to handle the heavy lifting:</p>
    <ul>
    <li><code>.collapse</code> hides the content</li>
    <li><code>.collapse.show</code> shows the content</li>
    <li><code>.collapsing</code> is added when the transition starts, and removed when it finishes</li>
    </ul>
    <p>These classes can be found in <code>_transitions.scss</code>.</p>
    <h3 id="via-data-attributes">Via data attributes<a class="anchor-link" href="#via-data-attributes" aria-label="Link to Via data attributes"></a></h3>
    <p>Just add <code>data-bs-toggle=&quot;collapse&quot;</code> and a <code>data-bs-target</code> to the element to automatically assign control of one or more collapsible elements. The <code>data-bs-target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the class <code>collapse</code> to the collapsible element. If you’d like it to default open, add the additional class <code>show</code>.</p>
    <p>To add accordion-like group management to a collapsible area, add the data attribute <code>data-bs-parent=&quot;#selector&quot;</code>. Refer to the <a href="[[docsref:/components/accordion]]">accordion page</a> for more information.</p>
    <h3 id="via-javascript">Via JavaScript<a class="anchor-link" href="#via-javascript" aria-label="Link to Via JavaScript"></a></h3>
    <p>Enable manually with:</p>
    <pre><code class="language-js">const collapseElementList = document.querySelectorAll(&#39;.collapse&#39;)
    const collapseList = [...collapseElementList].map(collapseEl =&gt; new bootstrap.Collapse(collapseEl))
    </code></pre>
    <h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
    <JsDataAttributes /><BsTable>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>parent</code></td>
    <td>selector, DOM element</td>
    <td><code>null</code></td>
    <td>If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>card</code> class). The attribute has to be set on the target collapsible area.</td>
    </tr>
    <tr>
    <td><code>toggle</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Toggles the collapsible element on invocation.</td>
    </tr>
    </tbody></table>
    </BsTable><h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><p>Activates your content as a collapsible element. Accepts an optional options <code>object</code>.</p>
    <p>You can create a collapse instance with the constructor, for example:</p>
    <pre><code class="language-js">const bsCollapse = new bootstrap.Collapse(&#39;#myCollapse&#39;, {
      toggle: false
    })
    </code></pre>
    <BsTable>
    <table>
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s collapse. (Removes stored data on the DOM element)</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td>Static method which allows you to get the collapse instance associated to a DOM element, you can use it like this: <code>bootstrap.Collapse.getInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td>Static method which returns a collapse instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: <code>bootstrap.Collapse.getOrCreateInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>hide</code></td>
    <td>Hides a collapsible element. <strong>Returns to the caller before the collapsible element has actually been hidden</strong> (e.g., before the <code>hidden.bs.collapse</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>show</code></td>
    <td>Shows a collapsible element. <strong>Returns to the caller before the collapsible element has actually been shown</strong> (e.g., before the <code>shown.bs.collapse</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>toggle</code></td>
    <td>Toggles a collapsible element to shown or hidden. <strong>Returns to the caller before the collapsible element has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.collapse</code> or <code>hidden.bs.collapse</code> event occurs).</td>
    </tr>
    </tbody></table>
    </BsTable><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <p>Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.</p>
    <BsTable>
    <table>
    <thead>
    <tr>
    <th>Event type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>hide.bs.collapse</code></td>
    <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
    </tr>
    <tr>
    <td><code>hidden.bs.collapse</code></td>
    <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
    <td><code>show.bs.collapse</code></td>
    <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
    <td><code>shown.bs.collapse</code></td>
    <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    </tbody></table>
    </BsTable><pre><code class="language-js">const myCollapsible = document.getElementById(&#39;myCollapsible&#39;)
    myCollapsible.addEventListener(&#39;hidden.bs.collapse&#39;, event =&gt; {
      // do something...
    })
    </code></pre>
  </article>
</template>
