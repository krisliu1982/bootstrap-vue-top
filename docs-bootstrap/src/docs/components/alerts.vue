
<template>
  <article>
    <h1>Alerts</h1>
    <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts JavaScript plugin</a>.</p>
    <Callout>
    <p><strong>Heads up!</strong> As of v5.3.0, the <code>alert-variant()</code> Sass mixin is deprecated. Alert variants now have their CSS variables overridden in <a href="#sass-loops">a Sass loop</a>.</p>
    </Callout>
      <Example :code='data["theme-colors"].map((themeColor) => `<div class="alert alert-${themeColor.name}" role="alert">
        A simple ${themeColor.name} alert—check it out!
      </div>`).join("\n")' />
      <Callout name="warning-color-assistive-technologies" /><h3 id="live-example">Live example<a class="anchor-link" href="#live-example" aria-label="Link to Live example"></a></h3>
    <p>Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.</p>
    <Example addStackblitzJs code='<div id="liveAlertPlaceholder"></div>
    <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>' /><p>We use the following JavaScript to trigger our live alert demo:</p>
    <JsDocs name="live-alert" file="site/src/assets/partials/snippets.js" /><h3 id="link-color">Link color<a class="anchor-link" href="#link-color" aria-label="Link to Link color"></a></h3>
    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
    
    <Example :code='data["theme-colors"].map((themeColor) => `<div class="alert alert-${themeColor.name}" role="alert">
        A simple ${themeColor.name} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>`).join("\n")' />

    <h3 id="additional-content">Additional content<a class="anchor-link" href="#additional-content" aria-label="Link to Additional content"></a></h3>
    <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
    <Example code='<div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>' /><h3 id="icons">Icons<a class="anchor-link" href="#icons" aria-label="Link to Icons"></a></h3>
    <p>Similarly, you can use <a href="[[docsref:/utilities/flex]]">flexbox utilities</a> and <a href="[[config:icons]]">Bootstrap Icons</a> to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.</p>
    <Example code='<div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          An example alert with an icon
        </div>
      </div>' /><p>Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly.</p>
    <Example code='<svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>

      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
        <div>
          An example alert with an icon
        </div>
      </div>
      <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          An example success alert with an icon
        </div>
      </div>
      <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          An example warning alert with an icon
        </div>
      </div>
      <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          An example danger alert with an icon
        </div>
      </div>' /><h3 id="dismissing">Dismissing<a class="anchor-link" href="#dismissing" aria-label="Link to Dismissing"></a></h3>
    <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:</p>
    <ul>
    <li>Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.</li>
    <li>Add a <a href="[[docsref:/components/close-button]]">close button</a> and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the close button.</li>
    <li>On the close button, add the <code>data-bs-dismiss=&quot;alert&quot;</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code>&lt;button&gt;</code> element with it for proper behavior across all devices.</li>
    <li>To animate alerts when dismissing them, be sure to add the <code>.fade</code> and <code>.show</code> classes.</li>
    </ul>
    <p>You can see this in action with a live demo:</p>
    <Example code='<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>' /><Callout type="warning">
    <p>When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the <code>closed.bs.alert</code> event and programmatically sets <code>focus()</code> to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add <code>tabindex=&quot;-1&quot;</code> to the element.</p>
    </Callout><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, alerts now use local CSS variables on <code>.alert</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="alert-css-vars" file="scss/_alert.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="alert-variables" file="scss/_variables.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <DeprecatedIn version="5.3.0" /><ScssDocs name="alert-variant-mixin" file="scss/mixins/_alert.scss" removeIndentation={false} /><h3 id="sass-loops">Sass loops<a class="anchor-link" href="#sass-loops" aria-label="Link to Sass loops"></a></h3>
    <p>Loop that generates the modifier classes with an overriding of CSS variables.</p>
    <ScssDocs name="alert-modifiers" file="scss/_alert.scss" removeIndentation={false} /><h2 id="javascript-behavior">JavaScript behavior<a class="anchor-link" href="#javascript-behavior" aria-label="Link to JavaScript behavior"></a></h2>
    <h3 id="initialize">Initialize<a class="anchor-link" href="#initialize" aria-label="Link to Initialize"></a></h3>
    <p>Initialize elements as alerts</p>
    <pre><code class="language-js">const alertList = document.querySelectorAll(&#39;.alert&#39;)
    const alerts = [...alertList].map(element =&gt; new bootstrap.Alert(element))
    </code></pre>
    <Callout>
    <p>For the sole purpose of dismissing an alert, it isn’t necessary to initialize the component manually via the JS API. By making use of <code>data-bs-dismiss=&quot;alert&quot;</code>, the component will be initialized automatically and properly dismissed.</p>
    <p>See the <a href="#triggers">triggers</a> section for more details.</p>
    </Callout><h3 id="triggers">Triggers<a class="anchor-link" href="#triggers" aria-label="Link to Triggers"></a></h3>
    <JsDismiss name="alert" /><p><strong>Note that closing an alert will remove it from the DOM.</strong></p>
    <h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <p>You can create an alert instance with the alert constructor, for example:</p>
    <pre><code class="language-js">const bsAlert = new bootstrap.Alert(&#39;#myAlert&#39;)
    </code></pre>
    <p>This makes an alert listen for click events on descendant elements which have the <code>data-bs-dismiss=&quot;alert&quot;</code> attribute. (Not necessary when using the data-api’s auto-initialization.)</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>close</code></td>
    <td>Closes an alert by removing it from the DOM. If the <code>.fade</code> and <code>.show</code> classes are present on the element, the alert will fade out before it is removed.</td>
    </tr>
    <tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s alert. (Removes stored data on the DOM element)</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td>Static method which allows you to get the alert instance associated to a DOM element. For example: <code>bootstrap.Alert.getInstance(alert)</code>.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td>Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: <code>bootstrap.Alert.getOrCreateInstance(element)</code>.</td>
    </tr>
    </tbody></table>
    </div><p>Basic usage:</p>
    <pre><code class="language-js">const alert = bootstrap.Alert.getOrCreateInstance(&#39;#myAlert&#39;)
    alert.close()
    </code></pre>
    <h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <p>Bootstrap’s alert plugin exposes a few events for hooking into alert functionality.</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Event</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>close.bs.alert</code></td>
    <td>Fires immediately when the <code>close</code> instance method is called.</td>
    </tr>
    <tr>
    <td><code>closed.bs.alert</code></td>
    <td>Fired when the alert has been closed and CSS transitions have completed.</td>
    </tr>
    </tbody></table>
    </div><pre><code class="language-js">const myAlert = document.getElementById(&#39;myAlert&#39;)
    myAlert.addEventListener(&#39;closed.bs.alert&#39;, event =&gt; {
      // do something, for instance, explicitly move focus to the most appropriate element,
      // so it doesn’t get lost/reset to the start of the page
      // document.getElementById(&#39;...&#39;).focus()
    })
    </code></pre>
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
