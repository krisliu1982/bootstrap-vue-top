
<template>
  <article>
    <h1>Offcanvas</h1>
    <p>Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and <code>data</code> attributes are used to invoke our JavaScript.</p>
    <ul>
    <li>Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.</li>
    <li>Similarly, some <a href="#sass-variables">source Sass</a> variables for offcanvas’s styles and dimensions are inherited from the modal’s variables.</li>
    <li>When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.</li>
    <li>Similar to modals, only one offcanvas can be shown at a time.</li>
    </ul>
    <p><strong>Heads up!</strong> Given how CSS handles animations, you cannot use <code>margin</code> or <code>translate</code> on an <code>.offcanvas</code> element. Instead, use the class as an independent wrapping element.</p>
    <Callout name="info-prefersreducedmotion" /><h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <h3 id="offcanvas-components">Offcanvas components<a class="anchor-link" href="#offcanvas-components" aria-label="Link to Offcanvas components"></a></h3>
    <p>Below is an offcanvas example that is shown by default (via <code>.show</code> on <code>.offcanvas</code>). Offcanvas includes support for a header with a close button and an optional body class for some initial <code>padding</code>. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.</p>
    <Example class="bd-example-offcanvas p-0 bg-body-tertiary overflow-hidden" code='<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        </div>
      </div>' /><h3 id="live-demo">Live demo<a class="anchor-link" href="#live-demo" aria-label="Link to Live demo"></a></h3>
    <p>Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the <code>.show</code> class on an element with the <code>.offcanvas</code> class.</p>
    <ul>
    <li><code>.offcanvas</code> hides content (default)</li>
    <li><code>.offcanvas.show</code> shows content</li>
    </ul>
    <p>You can use a link with the <code>href</code> attribute, or a button with the <code>data-bs-target</code> attribute. In both cases, the <code>data-bs-toggle=&quot;offcanvas&quot;</code> is required.</p>
    <Example code='<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Button with data-bs-target
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>' /><h3 id="body-scrolling">Body scrolling<a class="anchor-link" href="#body-scrolling" aria-label="Link to Body scrolling"></a></h3>
    <p>Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>data-bs-scroll</code> attribute to enable <code>&lt;body&gt;</code> scrolling.</p>
    <Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>' /><h3 id="body-scrolling-and-backdrop">Body scrolling and backdrop<a class="anchor-link" href="#body-scrolling-and-backdrop" aria-label="Link to Body scrolling and backdrop"></a></h3>
    <p>You can also enable <code>&lt;body&gt;</code> scrolling with a visible backdrop.</p>
    <Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>' /><h3 id="static-backdrop">Static backdrop<a class="anchor-link" href="#static-backdrop" aria-label="Link to Static backdrop"></a></h3>
    <p>When backdrop is set to static, the offcanvas will not close when clicking outside of it.</p>
    <Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        Toggle static offcanvas
      </button>

      <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            I will not close if you click outside of me.
          </div>
        </div>
      </div>' /><h2 id="dark-offcanvas">Dark offcanvas<a class="anchor-link" href="#dark-offcanvas" aria-label="Link to Dark offcanvas"></a></h2>
    <DeprecatedIn version="5.3.0" /> <AddedIn version="5.2.0" /><p>Change the appearance of offcanvases with utilities to better match them to different contexts like dark navbars. Here we add <code>.text-bg-dark</code> to the <code>.offcanvas</code> and <code>.btn-close-white</code> to <code>.btn-close</code> for proper styling with a dark offcanvas. If you have dropdowns within, consider also adding <code>.dropdown-menu-dark</code> to <code>.dropdown-menu</code>.</p>
    <Callout type="warning">
    <p><strong>Heads up!</strong> Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of manually adding classes mentioned above, set <code>data-bs-theme=&quot;dark&quot;</code> on the root element, a parent wrapper, or the component itself.</p>
    </Callout><Example class="bd-example-offcanvas p-0 bg-body-secondary overflow-hidden" code='<div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Place offcanvas content here.</p>
        </div>
      </div>' /><h2 id="responsive">Responsive<a class="anchor-link" href="#responsive" aria-label="Link to Responsive"></a></h2>
    <AddedIn version="5.2.0" /><p>Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, <code>.offcanvas-lg</code> hides content in an offcanvas below the <code>lg</code> breakpoint, but shows the content above the <code>lg</code> breakpoint. Responsive offcanvas classes are available for each breakpoint.</p>
    <ul>
    <li><code>.offcanvas</code></li>
    <li><code>.offcanvas-sm</code></li>
    <li><code>.offcanvas-md</code></li>
    <li><code>.offcanvas-lg</code></li>
    <li><code>.offcanvas-xl</code></li>
    <li><code>.offcanvas-xxl</code></li>
    </ul>
    <p>To make a responsive offcanvas, replace the <code>.offcanvas</code> base class with a responsive variant and ensure your close button has an explicit <code>data-bs-target</code>.</p>
    <Example code='<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

      <div class="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

      <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
        </div>
      </div>' /><h2 id="placement">Placement<a class="anchor-link" href="#placement" aria-label="Link to Placement"></a></h2>
    <p>There’s no default placement for offcanvas components, so you must add one of the modifier classes below.</p>
    <ul>
    <li><code>.offcanvas-start</code> places offcanvas on the left of the viewport (shown above)</li>
    <li><code>.offcanvas-end</code> places offcanvas on the right of the viewport</li>
    <li><code>.offcanvas-top</code> places offcanvas on the top of the viewport</li>
    <li><code>.offcanvas-bottom</code> places offcanvas on the bottom of the viewport</li>
    </ul>
    <p>Try the top, right, and bottom examples out below.</p>
    <Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ...
        </div>
      </div>' /><Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          ...
        </div>
      </div>' /><Example code='<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
          ...
        </div>
      </div>' /><h2 id="accessibility">Accessibility<a class="anchor-link" href="#accessibility" aria-label="Link to Accessibility"></a></h2>
    <p>Since the offcanvas panel is conceptually a modal dialog, be sure to add <code>aria-labelledby=&quot;...&quot;</code>—referencing the offcanvas title—to <code>.offcanvas</code>. Note that you don’t need to add <code>role=&quot;dialog&quot;</code> since we already add it via JavaScript.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, offcanvas now uses local CSS variables on <code>.offcanvas</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="offcanvas-css-vars" file="scss/_offcanvas.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="offcanvas-variables" file="scss/_variables.scss" /><h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <p>The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:</p>
    <ul>
    <li><code>.offcanvas</code> hides the content</li>
    <li><code>.offcanvas.show</code> shows the content</li>
    <li><code>.offcanvas-start</code> hides the offcanvas on the left</li>
    <li><code>.offcanvas-end</code> hides the offcanvas on the right</li>
    <li><code>.offcanvas-top</code> hides the offcanvas on the top</li>
    <li><code>.offcanvas-bottom</code> hides the offcanvas on the bottom</li>
    </ul>
    <p>Add a dismiss button with the <code>data-bs-dismiss=&quot;offcanvas&quot;</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code>&lt;button&gt;</code> element with it for proper behavior across all devices.</p>
    <h3 id="via-data-attributes">Via data attributes<a class="anchor-link" href="#via-data-attributes" aria-label="Link to Via data attributes"></a></h3>
    <h4 id="toggle">Toggle</h4>
    <p>Add <code>data-bs-toggle=&quot;offcanvas&quot;</code> and a <code>data-bs-target</code> or <code>href</code> to the element to automatically assign control of one offcanvas element. The <code>data-bs-target</code> attribute accepts a CSS selector to apply the offcanvas to. Be sure to add the class <code>offcanvas</code> to the offcanvas element. If you’d like it to default open, add the additional class <code>show</code>.</p>
    <h4 id="dismiss">Dismiss</h4>
    <JsDismiss name="offcanvas" /><Callout type="warning">
    <p>While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/">ARIA Authoring Practices Guide dialog (modal) pattern</a>. Do this at your own risk.</p>
    </Callout><h3 id="via-javascript">Via JavaScript<a class="anchor-link" href="#via-javascript" aria-label="Link to Via JavaScript"></a></h3>
    <p>Enable manually with:</p>
    <pre><code class="language-js">const offcanvasElementList = document.querySelectorAll(&#39;.offcanvas&#39;)
    const offcanvasList = [...offcanvasElementList].map(offcanvasEl =&gt; new bootstrap.Offcanvas(offcanvasEl))
    </code></pre>
    <h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
    <JsDataAttributes /><div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>backdrop</code></td>
    <td>boolean or the string <code>static</code></td>
    <td><code>true</code></td>
    <td>Apply a backdrop on body while offcanvas is open. Alternatively, specify <code>static</code> for a backdrop which doesn’t close the offcanvas when clicked.</td>
    </tr>
    <tr>
    <td><code>keyboard</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Closes the offcanvas when escape key is pressed.</td>
    </tr>
    <tr>
    <td><code>scroll</code></td>
    <td>boolean</td>
    <td><code>false</code></td>
    <td>Allow body scrolling while offcanvas is open.</td>
    </tr>
    </tbody></table>
    </div><h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><p>Activates your content as an offcanvas element. Accepts an optional options <code>object</code>.</p>
    <p>You can create an offcanvas instance with the constructor, for example:</p>
    <pre><code class="language-js">const bsOffcanvas = new bootstrap.Offcanvas(&#39;#myOffcanvas&#39;)
    </code></pre>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s offcanvas.</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td><em>Static</em> method which allows you to get the offcanvas instance associated with a DOM element.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td><em>Static</em> method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn’t initialized.</td>
    </tr>
    <tr>
    <td><code>hide</code></td>
    <td>Hides an offcanvas element. <strong>Returns to the caller before the offcanvas element has actually been hidden</strong> (i.e. before the <code>hidden.bs.offcanvas</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>show</code></td>
    <td>Shows an offcanvas element. <strong>Returns to the caller before the offcanvas element has actually been shown</strong> (i.e. before the <code>shown.bs.offcanvas</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>toggle</code></td>
    <td>Toggles an offcanvas element to shown or hidden. <strong>Returns to the caller before the offcanvas element has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.offcanvas</code> or <code>hidden.bs.offcanvas</code> event occurs).</td>
    </tr>
    </tbody></table>
    </div><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <p>Bootstrap’s offcanvas class exposes a few events for hooking into offcanvas functionality.</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Event type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>hide.bs.offcanvas</code></td>
    <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
    </tr>
    <tr>
    <td><code>hidden.bs.offcanvas</code></td>
    <td>This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
    <td><code>hidePrevented.bs.offcanvas</code></td>
    <td>This event is fired when the offcanvas is shown, its backdrop is <code>static</code> and a click outside of the offcanvas is performed. The event is also fired when the escape key is pressed and the <code>keyboard</code> option is set to <code>false</code>.</td>
    </tr>
    <tr>
    <td><code>show.bs.offcanvas</code></td>
    <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
    <td><code>shown.bs.offcanvas</code></td>
    <td>This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    </tbody></table>
    </div>
    <pre><code class="language-js">const myOffcanvas = document.getElementById(&#39;myOffcanvas&#39;)
    myOffcanvas.addEventListener(&#39;hidden.bs.offcanvas&#39;, event =&gt; {
      // do something...
    })
    </code></pre>
  </article>
</template>
