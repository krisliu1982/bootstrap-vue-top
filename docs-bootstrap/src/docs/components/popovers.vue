
<template>
  <article>
    <h1>Popovers</h1>
    <p>Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</p>

    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>Things to know when using the popover plugin:</p>
    <ul>
    <li>Popovers rely on the third party library <a href="https://popper.js.org/docs/v2/">Popper</a> for positioning. You must include <a href="[[config:cdn.popper]]">popper.min.js</a> before <code>bootstrap.js</code>, or use one <code>bootstrap.bundle.min.js</code> which contains Popper.</li>
    <li>Popovers require the <a href="[[docsref:/components/popovers]]">popover plugin</a> as a dependency.</li>
    <li>Popovers are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
    <li>Zero-length <code>title</code> and <code>content</code> values will never show a popover.</li>
    <li>Specify <code>container: &#39;body&#39;</code> to avoid rendering problems in more complex components (like our input groups, button groups, etc).</li>
    <li>Triggering popovers on hidden elements will not work.</li>
    <li>Popovers for <code>.disabled</code> or <code>disabled</code> elements must be triggered on a wrapper element.</li>
    <li>When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors’ overall width. Use <code>.text-nowrap</code> on your <code>&lt;a&gt;</code>s to avoid this behavior.</li>
    <li>Popovers must be hidden before their corresponding elements have been removed from the DOM.</li>
    <li>Popovers can be triggered thanks to an element inside a shadow DOM.</li>
    </ul>
    <Callout name="info-sanitizer" /><Callout name="info-prefersreducedmotion" /><p>Keep reading to see how popovers work with some examples.</p>
    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <h3 id="enable-popovers">Enable popovers<a class="anchor-link" href="#enable-popovers" aria-label="Link to Enable popovers"></a></h3>
    <p>As mentioned above, you must initialize popovers before they can be used. One way to initialize all popovers on a page would be to select them by their <code>data-bs-toggle</code> attribute, like so:</p>
    <pre><code class="language-js">const popoverTriggerList = document.querySelectorAll(&#39;[data-bs-toggle=&quot;popover&quot;]&#39;)
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl =&gt; new bootstrap.Popover(popoverTriggerEl))
    </code></pre>
    <h3 id="live-demo">Live demo<a class="anchor-link" href="#live-demo" aria-label="Link to Live demo"></a></h3>
    <p>We use JavaScript similar to the snippet above to render the following live popover. Titles are set via <code>data-bs-title</code> and body content is set via <code>data-bs-content</code>.</p>
    <Callout name="warning-data-bs-title-vs-title" type="warning" /><Example addStackblitzJs code='<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Click to toggle popover</button>' /><h3 id="four-directions">Four directions<a class="anchor-link" href="#four-directions" aria-label="Link to Four directions"></a></h3>
    <p>Four options are available: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL. Set <code>data-bs-placement</code> to change the direction.</p>
    <Example addStackblitzJs code='<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
        Popover on top
      </button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
        Popover on right
      </button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
        Popover on bottom
      </button>
      <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
        Popover on left
      </button>' /><h3 id="custom-container">Custom <code>container</code><a class="anchor-link" href="#custom-container" aria-label="Link to Custom container"></a></h3>
    <p>When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom <code>container</code> so that the popover’s HTML appears within that element instead. This is common in responsive tables, input groups, and the like.</p>
    <pre><code class="language-js">const popover = new bootstrap.Popover(&#39;.example-popover&#39;, {
      container: &#39;body&#39;
    })
    </code></pre>
    <p>Another situation where you’ll want to set an explicit custom <code>container</code> are popovers inside a <a href="[[docsref:/components/modal]]">modal dialog</a>, to make sure that the popover itself is appended to the modal. This is particularly important for popovers that contain interactive elements – modal dialogs will trap focus, so unless the popover is a child element of the modal, users won’t be able to focus or activate these interactive elements.</p>
    <pre><code class="language-js">const popover = new bootstrap.Popover(&#39;.example-popover&#39;, {
      container: &#39;.modal-body&#39;
    })
    </code></pre>
    <h3 id="custom-popovers">Custom popovers<a class="anchor-link" href="#custom-popovers" aria-label="Link to Custom popovers"></a></h3>
    <AddedIn version="5.2.0" /><p>You can customize the appearance of popovers using <a href="#variables">CSS variables</a>. We set a custom class with <code>data-bs-custom-class=&quot;custom-popover&quot;</code> to scope our custom appearance and use it to override some of the local CSS variables.</p>
    <ScssDocs name="custom-popovers" file="site/src/scss/_component-examples.scss" /><Example addStackblitzJs class="custom-popover-demo" code='<button type="button" class="btn btn-secondary"
              data-bs-toggle="popover" data-bs-placement="right"
              data-bs-custom-class="custom-popover"
              data-bs-title="Custom popover"
              data-bs-content="This popover is themed via CSS variables.">
        Custom popover
      </button>' /><h3 id="dismiss-on-next-click">Dismiss on next click<a class="anchor-link" href="#dismiss-on-next-click" aria-label="Link to Dismiss on next click"></a></h3>
    <p>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of an element other than the toggle element.</p>
    <Callout type="danger">
    <p><strong>Dismissing on next click requires specific HTML for proper cross-browser and cross-platform behavior.</strong> You can only use <code>&lt;a&gt;</code> elements, not <code>&lt;button&gt;</code>s, and you must include a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"><code>tabindex</code></a>.</p>
    </Callout><Example addStackblitzJs code='<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Dismissible popover" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Dismissible popover</a>' />
    <pre><code class="language-js">const popover = new bootstrap.Popover(&#39;.popover-dismiss&#39;, {
      trigger: &#39;focus&#39;
    })
    </code></pre>
    <h3 id="disabled-elements">Disabled elements<a class="anchor-link" href="#disabled-elements" aria-label="Link to Disabled elements"></a></h3>
    <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex=&quot;0&quot;</code>.</p>
    <p>For disabled popover triggers, you may also prefer <code>data-bs-trigger=&quot;hover focus&quot;</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
    <Example addStackblitzJs code='<span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
      </span>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, popovers now use local CSS variables on <code>.popover</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="popover-css-vars" file="scss/_popover.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="popover-variables" file="scss/_variables.scss" /><h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <p>Enable popovers via JavaScript:</p>
    <pre><code class="language-js">const exampleEl = document.getElementById(&#39;example&#39;)
    const popover = new bootstrap.Popover(exampleEl, options)
    </code></pre>
    <Callout type="warning">
    <p><strong>Keep popovers accessible to keyboard and assistive technology users</strong> by only adding them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). While other HTML elements can be made focusable by adding <code>tabindex=&quot;0&quot;</code>, this can create annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce popovers in this situation. Additionally, do not rely solely on <code>hover</code> as the trigger for your popovers as this will make them impossible to trigger for keyboard users.</p>
    <p>Avoid adding an excessive amount of content in popovers with the <code>html</code> option. Once popovers are displayed, their content is tied to the trigger element with the <code>aria-describedby</code> attribute, causing all of the popover’s content to be announced to assistive technology users as one long, uninterrupted stream.</p>
    <p>Popovers do not manage keyboard focus order, and their placement can be random in the DOM, so be careful when adding interactive elements (like forms or links), as it may lead to an illogical focus order or make the popover content itself completely unreachable for keyboard users. In cases where you must use these elements, consider using a modal dialog instead.</p>
    </Callout><h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
    <JsDataAttributes /><Callout type="warning">
    <p>Note that for security reasons the <code>sanitize</code>, <code>sanitizeFn</code>, and <code>allowList</code> options cannot be supplied using data attributes.</p>
    </Callout><div class="table-responsive">
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
    <td><code>allowList</code></td>
    <td>object</td>
    <td><a href="[[docsref:/getting-started/javascript#sanitizer]]">Default value</a></td>
    <td>An object containing allowed tags and attributes. Those not explicitly allowed will be removed by <a href="[[docsref:/getting-started/javascript#sanitizer]]">the content sanitizer</a>. <Callout type="warning"><strong>Exercise caution when adding to this list.</strong> Refer to <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP’s Cross Site Scripting Prevention Cheat Sheet</a> for more information.</Callout></td>
    </tr>
    <tr>
    <td><code>animation</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Apply a CSS fade transition to the popover.</td>
    </tr>
    <tr>
    <td><code>boundary</code></td>
    <td>string, element</td>
    <td><code>&#39;clippingParents&#39;</code></td>
    <td>Overflow constraint boundary of the popover (applies only to Popper’s preventOverflow modifier). By default, it’s <code>&#39;clippingParents&#39;</code> and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper’s <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a>.</td>
    </tr>
    <tr>
    <td><code>container</code></td>
    <td>string, element, false</td>
    <td><code>false</code></td>
    <td>Appends the popover to a specific element. Example: <code>container: &#39;body&#39;</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element -&nbsp;which will prevent the popover from floating away from the triggering element during a window resize.</td>
    </tr>
    <tr>
    <td><code>content</code></td>
    <td>string, element, function</td>
    <td><code>&#39;&#39;</code></td>
    <td>The popover’s text content. If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</td>
    </tr>
    <tr>
    <td><code>customClass</code></td>
    <td>string, function</td>
    <td><code>&#39;&#39;</code></td>
    <td>Add classes to the popover when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: <code>&#39;class-1 class-2&#39;</code>. You can also pass a function that should return a single string containing additional class names.</td>
    </tr>
    <tr>
    <td><code>delay</code></td>
    <td>number, object</td>
    <td><code>0</code></td>
    <td>Delay showing and hiding the popover (ms)—doesn’t apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: <code>delay: { &quot;show&quot;: 500, &quot;hide&quot;: 100 }</code>.</td>
    </tr>
    <tr>
    <td><code>fallbackPlacements</code></td>
    <td>string, array</td>
    <td><code>[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</code></td>
    <td>Define fallback placements by providing a list of placements in array (in order of preference). For more information refer to Popper’s <a href="https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements">behavior docs</a>.</td>
    </tr>
    <tr>
    <td><code>html</code></td>
    <td>boolean</td>
    <td><code>false</code></td>
    <td>Allow HTML in the popover. If true, HTML tags in the popover’s <code>title</code> will be rendered in the popover. If false, <code>innerText</code> property will be used to insert content into the DOM. Prefer text when dealing with user-generated input to <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">prevent XSS attacks</a>.</td>
    </tr>
    <tr>
    <td><code>offset</code></td>
    <td>number, string, function</td>
    <td><code>[0, 8]</code></td>
    <td>Offset of the popover relative to its target. You can pass a string in data attributes with comma separated values like: <code>data-bs-offset=&quot;10,20&quot;</code>. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: <a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>. For more information refer to Popper’s <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">offset docs</a>.</td>
    </tr>
    <tr>
    <td><code>placement</code></td>
    <td>string, function</td>
    <td><code>&#39;right&#39;</code></td>
    <td>How to position the popover: auto, top, bottom, left, right. When <code>auto</code> is specified, it will dynamically reorient the popover. When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the popover instance.</td>
    </tr>
    <tr>
    <td><code>popperConfig</code></td>
    <td>null, object, function</td>
    <td><code>null</code></td>
    <td>To change Bootstrap’s default Popper config, see <a href="https://popper.js.org/docs/v2/constructors/#options">Popper’s configuration</a>. When a function is used to create the Popper configuration, it’s called with an object that contains the Bootstrap’s default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper.</td>
    </tr>
    <tr>
    <td><code>sanitize</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Enable <a href="[[docsref:/getting-started/javascript#sanitizer]]">content sanitization</a>. If true, the <code>template</code>, <code>content</code> and <code>title</code> options will be sanitized. <Callout type="warning"><strong>Exercise caution when disabling content sanitization.</strong> Refer to <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP’s Cross Site Scripting Prevention Cheat Sheet</a> for more information. Vulnerabilities caused solely by disabling content sanitization are not considered within scope for Bootstrap’s security model.</Callout></td>
    </tr>
    <tr>
    <td><code>sanitizeFn</code></td>
    <td>null, function</td>
    <td><code>null</code></td>
    <td>Provide an alternative <a href="[[docsref:/getting-started/javascript#sanitizer]]">content sanitization</a> function. This can be useful if you prefer to use a dedicated library to perform sanitization.</td>
    </tr>
    <tr>
    <td><code>selector</code></td>
    <td>string, false</td>
    <td><code>false</code></td>
    <td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to also apply popovers to dynamically added DOM elements (<code>jQuery.on</code> support). See <a href="[[config:repo]]/issues/4215">this issue</a> and <a href="https://codepen.io/Johann-S/pen/djJYPb">an informative example</a>. <strong>Note</strong>: <code>title</code> attribute must not be used as a selector.</td>
    </tr>
    <tr>
    <td><code>template</code></td>
    <td>string</td>
    <td><code>&#39;&lt;div class=&quot;popover&quot; role=&quot;tooltip&quot;&gt;&lt;div class=&quot;popover-arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-header&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-body&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;</code></td>
    <td>Base HTML to use when creating the popover. The popover’s <code>title</code> will be injected into the <code>.popover-header</code>. The popover’s <code>content</code> will be injected into the <code>.popover-body</code>. <code>.popover-arrow</code> will become the popover’s arrow. The outermost wrapper element should have the <code>.popover</code> class and <code>role=&quot;tooltip&quot;</code>.</td>
    </tr>
    <tr>
    <td><code>title</code></td>
    <td>string, element, function</td>
    <td><code>&#39;&#39;</code></td>
    <td>The popover title. If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</td>
    </tr>
    <tr>
    <td><code>trigger</code></td>
    <td>string</td>
    <td><code>&#39;click&#39;</code></td>
    <td>How popover is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. <code>&#39;manual&#39;</code> indicates that the popover will be triggered programmatically via the <code>.popover(&#39;show&#39;)</code>, <code>.popover(&#39;hide&#39;)</code> and <code>.popover(&#39;toggle&#39;)</code> methods; this value cannot be combined with any other trigger. <code>&#39;hover&#39;</code> on its own will result in popovers that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present.</td>
    </tr>
    </tbody></table>
    </div><Callout>
    <h4 id="data-attributes-for-individual-popovers">Data attributes for individual popovers</h4>
    <p>Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.</p>
    </Callout><h4 id="using-function-with-popperconfig">Using function with <code>popperConfig</code></h4>
    <pre><code class="language-js">const popover = new bootstrap.Popover(element, {
      popperConfig(defaultBsPopperConfig) {
        // const newPopperConfig = {...}
        // use defaultBsPopperConfig if needed...
        // return newPopperConfig
      }
    })
    </code></pre>
    <h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>disable</code></td>
    <td>Removes the ability for an element’s popover to be shown. The popover will only be able to be shown if it is re-enabled.</td>
    </tr>
    <tr>
    <td><code>dispose</code></td>
    <td>Hides and destroys an element’s popover (Removes stored data on the DOM element). Popovers that use delegation (which are created using <a href="#options">the <code>selector</code> option</a>) cannot be individually destroyed on descendant trigger elements.</td>
    </tr>
    <tr>
    <td><code>enable</code></td>
    <td>Gives an element’s popover the ability to be shown. <strong>Popovers are enabled by default.</strong></td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td><em>Static</em> method which allows you to get the popover instance associated with a DOM element.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td><em>Static</em> method which allows you to get the popover instance associated with a DOM element, or create a new one in case it wasn’t initialized.</td>
    </tr>
    <tr>
    <td><code>hide</code></td>
    <td>Hides an element’s popover. <strong>Returns to the caller before the popover has actually been hidden</strong> (i.e. before the <code>hidden.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover.</td>
    </tr>
    <tr>
    <td><code>setContent</code></td>
    <td>Gives a way to change the popover’s content after its initialization.</td>
    </tr>
    <tr>
    <td><code>show</code></td>
    <td>Reveals an element’s popover. <strong>Returns to the caller before the popover has actually been shown</strong> (i.e. before the <code>shown.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover. Popovers whose title and content are both zero-length are never displayed.</td>
    </tr>
    <tr>
    <td><code>toggle</code></td>
    <td>Toggles an element’s popover. <strong>Returns to the caller before the popover has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.popover</code> or <code>hidden.bs.popover</code> event occurs). This is considered a “manual” triggering of the popover.</td>
    </tr>
    <tr>
    <td><code>toggleEnabled</code></td>
    <td>Toggles the ability for an element’s popover to be shown or hidden.</td>
    </tr>
    <tr>
    <td><code>update</code></td>
    <td>Updates the position of an element’s popover.</td>
    </tr>
    </tbody></table>
    </div>
    <pre><code class="language-js">// getOrCreateInstance example
    const popover = bootstrap.Popover.getOrCreateInstance(&#39;#example&#39;) // Returns a Bootstrap popover instance

    // setContent example
    popover.setContent({
      &#39;.popover-header&#39;: &#39;another title&#39;,
      &#39;.popover-body&#39;: &#39;another content&#39;
    })
    </code></pre>
    <Callout>
    <p>The <code>setContent</code> method accepts an <code>object</code> argument, where each property-key is a valid <code>string</code> selector within the popover template, and each related property-value can be <code>string</code> | <code>element</code> | <code>function</code> | <code>null</code></p>
    </Callout><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Event</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>hide.bs.popover</code></td>
    <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
    <td><code>hidden.bs.popover</code></td>
    <td>This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
    <tr>
    <td><code>inserted.bs.popover</code></td>
    <td>This event is fired after the <code>show.bs.popover</code> event when the popover template has been added to the DOM.</td>
    </tr>
    <tr>
    <td><code>show.bs.popover</code></td>
    <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
    <td><code>shown.bs.popover</code></td>
    <td>This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete).</td>
    </tr>
    </tbody></table>
    </div>
    <pre><code class="language-js">const myPopoverTrigger = document.getElementById(&#39;myPopover&#39;)
    myPopoverTrigger.addEventListener(&#39;hidden.bs.popover&#39;, () =&gt; {
      // do something...
    })
    </code></pre>
  </article>
</template>
