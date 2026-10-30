
<template>
  <article>
    <h1>Toasts</h1>
    <p>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>

    <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>
    <h2 id="overview">Overview<a class="anchor-link" href="#overview" aria-label="Link to Overview"></a></h2>
    <p>Things to know when using the toast plugin:</p>
    <ul>
    <li>Toasts are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
    <li>Toasts will automatically hide if you do not specify <code>autohide: false</code>.</li>
    </ul>
    <Callout name="info-prefersreducedmotion" /><h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <h3 id="basic">Basic<a class="anchor-link" href="#basic" aria-label="Link to Basic"></a></h3>
    <p>To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use <code>display: flex</code>, allowing easy alignment of content thanks to our margin and flexbox utilities.</p>
    <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
    <Example code={`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>`} /><Callout type="warning">
    <p>Previously, our scripts dynamically added the <code>.hide</code> class to completely hide a toast (with <code>display:none</code>, rather than just with <code>opacity:0</code>). This is now not necessary anymore. However, for backwards compatibility, our script will continue to toggle the class (even though there is no practical need for it) until the next major version.</p>
    </Callout><h3 id="live-example">Live example<a class="anchor-link" href="#live-example" aria-label="Link to Live example"></a></h3>
    <p>Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.</p>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div><Example showMarkup={false} code={`
    <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
    `} /><pre><code class="language-html">&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot; id=&quot;liveToastBtn&quot;&gt;Show live toast&lt;/button&gt;

    &lt;div class=&quot;toast-container position-fixed bottom-0 end-0 p-3&quot;&gt;
      &lt;div id=&quot;liveToast&quot; class=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
        &lt;div class=&quot;toast-header&quot;&gt;
          &lt;img src=&quot;...&quot; class=&quot;rounded me-2&quot; alt=&quot;...&quot;&gt;
          &lt;strong class=&quot;me-auto&quot;&gt;Bootstrap&lt;/strong&gt;
          &lt;small&gt;11 mins ago&lt;/small&gt;
          &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;toast-body&quot;&gt;
          Hello, world! This is a toast message.
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <p>We use the following JavaScript to trigger our live toast demo:</p>
    <JsDocs name="live-toast" file="site/src/assets/partials/snippets.js" /><h3 id="translucent">Translucent<a class="anchor-link" href="#translucent" aria-label="Link to Translucent"></a></h3>
    <p>Toasts are slightly translucent to blend in with what’s below them.</p>
    <Example class="bg-dark" code={`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
          <strong class="me-auto">Bootstrap</strong>
          <small class="text-body-secondary">11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>`} /><h3 id="stacking">Stacking<a class="anchor-link" href="#stacking" aria-label="Link to Stacking"></a></h3>
    <p>You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.</p>
    <Example code={`<div class="toast-container position-static">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-body-secondary">just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            See? Just like this.
          </div>
        </div>

        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
            <strong class="me-auto">Bootstrap</strong>
            <small class="text-body-secondary">2 seconds ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Heads up, toasts will stack automatically
          </div>
        </div>
      </div>`} /><h3 id="custom-content">Custom content<a class="anchor-link" href="#custom-content" aria-label="Link to Custom content"></a></h3>
    <p>Customize your toasts by removing sub-components, tweaking them with <a href="[[docsref:/utilities/api]]">utilities</a>, or by adding your own markup. Here we’ve created a simpler toast by removing the default <code>.toast-header</code>, adding a custom hide icon from <a href="[[config:icons]]">Bootstrap Icons</a>, and using some <a href="[[docsref:/utilities/flex]]">flexbox utilities</a> to adjust the layout.</p>
    <Example code={`<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>`} /><p>Alternatively, you can also add additional controls and components to toasts.</p>
    <Example code={`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
          Hello, world! This is a toast message.
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm">Take action</button>
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
          </div>
        </div>
      </div>`} /><h3 id="color-schemes">Color schemes<a class="anchor-link" href="#color-schemes" aria-label="Link to Color schemes"></a></h3>
    <p>Building on the above example, you can create different toast color schemes with our <a href="[[docsref:/utilities/colors]]">color</a> and <a href="[[docsref:/utilities/background]]">background</a> utilities. Here we’ve added <code>.text-bg-primary</code> to the <code>.toast</code>, and then added <code>.btn-close-white</code> to our close button. For a crisp edge, we remove the default border with <code>.border-0</code>.</p>
    <Example code={`<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>`} /><h2 id="placement">Placement<a class="anchor-link" href="#placement" aria-label="Link to Placement"></a></h2>
    <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>
    <Example addStackblitzJs code={`<form>
        <div class="mb-3">
          <label for="selectToastPlacement">Toast placement</label>
          <select class="form-select mt-2" id="selectToastPlacement">
            <option value="" selected>Select a position...</option>
            <option value="top-0 start-0">Top left</option>
            <option value="top-0 start-50 translate-middle-x">Top center</option>
            <option value="top-0 end-0">Top right</option>
            <option value="top-50 start-0 translate-middle-y">Middle left</option>
            <option value="top-50 start-50 translate-middle">Middle center</option>
            <option value="top-50 end-0 translate-middle-y">Middle right</option>
            <option value="bottom-0 start-0">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
            <option value="bottom-0 end-0">Bottom right</option>
          </select>
        </div>
      </form>
      <div aria-live="polite" aria-atomic="true" class="bg-body-secondary position-relative bd-example-toasts rounded-3">
        <div class="toast-container p-3" id="toastPlacement">
          <div class="toast">
            <div class="toast-header">
              <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>
      </div>`} /><p>For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
    <Example class="bd-example-toasts p-0" code={`<div aria-live="polite" aria-atomic="true" class="position-relative">
        <!-- Position it: -->
        <!-- - \`.toast-container\` for spacing between toasts -->
        <!-- - \`top-0\` & \`end-0\` to position the toasts in the upper right corner -->
        <!-- - \`.p-3\` to prevent the toasts from sticking to the edge of the container  -->
        <div class="toast-container top-0 end-0 p-3">

          <!-- Then put toasts within -->
          <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
              <strong class="me-auto">Bootstrap</strong>
              <small class="text-body-secondary">just now</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              See? Just like this.
            </div>
          </div>

          <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
              <strong class="me-auto">Bootstrap</strong>
              <small class="text-body-secondary">2 seconds ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Heads up, toasts will stack automatically
            </div>
          </div>
        </div>
      </div>`} /><p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
    <Example class="bd-example-toasts d-flex" code={`<!-- Flexbox container for aligning the toasts -->
      <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

        <!-- Then put toasts within -->
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>`} /><h2 id="accessibility">Accessibility<a class="anchor-link" href="#accessibility" aria-label="Link to Accessibility"></a></h2>
    <p>Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"><code>aria-live</code> region</a>. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user. Additionally, include <code>aria-atomic=&quot;true&quot;</code> to ensure that the entire toast is always announced as a single (atomic) unit, rather than just announcing what was changed (which could lead to problems if you only update part of the toast’s content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the <a href="[[docsref:/components/alerts]]">alert component</a> instead of toast.</p>
    <p>Note that the live region needs to be present in the markup <em>before</em> the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.</p>
    <p>You also need to adapt the <code>role</code> and <code>aria-live</code> level depending on the content. If it’s an important message like an error, use <code>role=&quot;alert&quot; aria-live=&quot;assertive&quot;</code>, otherwise use <code>role=&quot;status&quot; aria-live=&quot;polite&quot;</code> attributes.</p>
    <p>As the content you’re displaying changes, be sure to update the <a href="#options"><code>delay</code> timeout</a> so that users have enough time to read the toast.</p>
    <pre><code class="language-html">&lt;div class=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;polite&quot; aria-atomic=&quot;true&quot; data-bs-delay=&quot;10000&quot;&gt;
      &lt;div role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <p>When using <code>autohide: false</code>, you must add a close button to allow users to dismiss the toast.</p>
    <Example code={`<div role="alert" aria-live="assertive" aria-atomic="true" class="toast" data-bs-autohide="false">
        <div class="toast-header">
          <Placeholder width="20" height="20" background="#007aff" class="rounded me-2" text={false} title={false} />
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>`} /><p>While technically it’s possible to add focusable/actionable controls (such as additional buttons or links) in your toast, you should avoid doing this for autohiding toasts. Even if you give the toast a long <a href="#options"><code>delay</code> timeout</a>, keyboard and assistive technology users may find it difficult to reach the toast in time to take action (since toasts don’t receive focus when they are displayed). If you absolutely must have further controls, we recommend using a toast with <code>autohide: false</code>.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, toasts now use local CSS variables on <code>.toast</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="toast-css-vars" file="scss/_toasts.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="toast-variables" file="scss/_variables.scss" /><h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <p>Initialize toasts via JavaScript:</p>
    <pre><code class="language-js">const toastElList = document.querySelectorAll(&#39;.toast&#39;)
    const toastList = [...toastElList].map(toastEl =&gt; new bootstrap.Toast(toastEl, option))
    </code></pre>
    <h3 id="triggers">Triggers<a class="anchor-link" href="#triggers" aria-label="Link to Triggers"></a></h3>
    <JsDismiss name="toast" /><h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
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
    <td><code>animation</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Apply a CSS fade transition to the toast.</td>
    </tr>
    <tr>
    <td><code>autohide</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Automatically hide the toast after the delay.</td>
    </tr>
    <tr>
    <td><code>delay</code></td>
    <td>number</td>
    <td><code>5000</code></td>
    <td>Delay in milliseconds before hiding the toast.</td>
    </tr>
    </tbody></table>
    </BsTable><h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><BsTable>
    <table>
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>dispose</code></td>
    <td>Hides an element’s toast. Your toast will remain on the DOM but won’t show anymore.</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td><em>Static</em> method which allows you to get the toast instance associated with a DOM element. <br/> For example: <code>const myToastEl = document.getElementById(&#39;myToastEl&#39;)</code> <code>const myToast = bootstrap.Toast.getInstance(myToastEl)</code> Returns a Bootstrap toast instance.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td><em>Static</em> method which allows you to get the toast instance associated with a DOM element, or create a new one, in case it wasn’t initialized. <br/><code>const myToastEl = document.getElementById(&#39;myToastEl&#39;)</code> <code>const myToast = bootstrap.Toast.getOrCreateInstance(myToastEl)</code> Returns a Bootstrap toast instance.</td>
    </tr>
    <tr>
    <td><code>hide</code></td>
    <td>Hides an element’s toast. <strong>Returns to the caller before the toast has actually been hidden</strong> (i.e. before the <code>hidden.bs.toast</code> event occurs). You have to manually call this method if you made <code>autohide</code> to <code>false</code>.</td>
    </tr>
    <tr>
    <td><code>isShown</code></td>
    <td>Returns a boolean according to toast’s visibility state.</td>
    </tr>
    <tr>
    <td><code>show</code></td>
    <td>Reveals an element’s toast. <strong>Returns to the caller before the toast has actually been shown</strong> (i.e. before the <code>shown.bs.toast</code> event occurs). You have to manually call this method, instead your toast won’t show.</td>
    </tr>
    </tbody></table>
    </BsTable><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <BsTable>
    <table>
    <thead>
    <tr>
    <th>Event</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>hide.bs.toast</code></td>
    <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
    <td><code>hidden.bs.toast</code></td>
    <td>This event is fired when the toast has finished being hidden from the user.</td>
    </tr>
    <tr>
    <td><code>show.bs.toast</code></td>
    <td>This event fires immediately when the <code>show</code> instance method is called.</td>
    </tr>
    <tr>
    <td><code>shown.bs.toast</code></td>
    <td>This event is fired when the toast has been made visible to the user.</td>
    </tr>
    </tbody></table>
    </BsTable><pre><code class="language-js">const myToastEl = document.getElementById(&#39;myToast&#39;)
    myToastEl.addEventListener(&#39;hidden.bs.toast&#39;, () =&gt; {
      // do something...
    })
    </code></pre>
  </article>
</template>
