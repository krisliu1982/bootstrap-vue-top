
<template>
  <article>
    <h1>JavaScript</h1>
    <p>Bring Bootstrap to life with our optional JavaScript plugins. Learn about each plugin, our data and programmatic API options, and more.</p>

    <h2 id="individual-or-compiled">Individual or compiled<a class="anchor-link" href="#individual-or-compiled" aria-label="Link to Individual or compiled"></a></h2>
    <p>Plugins can be included individually (using Bootstrap’s individual <code>js/dist/*.js</code>), or all at once using <code>bootstrap.js</code> or the minified <code>bootstrap.min.js</code> (don’t include both).</p>
    <p>If you use a bundler (Webpack, Parcel, Vite…), you can use <code>/js/dist/*.js</code> files which are UMD ready.</p>
    <h2 id="usage-with-javascript-frameworks">Usage with JavaScript frameworks<a class="anchor-link" href="#usage-with-javascript-frameworks" aria-label="Link to Usage with JavaScript frameworks"></a></h2>
    <p>While the Bootstrap CSS can be used with any framework, <strong>the Bootstrap JavaScript is not fully compatible with JavaScript frameworks like React, Vue, and Angular</strong> which assume full knowledge of the DOM. Both Bootstrap and the framework may attempt to mutate the same DOM element, resulting in bugs like dropdowns that are stuck in the “open” position.</p>
    <p>A better alternative for those using this type of frameworks is to use a framework-specific package <strong>instead of</strong> the Bootstrap JavaScript. Here are some of the most popular options:</p>
    <ul>
    <li>React: <a href="https://react-bootstrap.github.io/">React Bootstrap</a><Callout>
    <strong>Try it yourself!</strong> Download the source code and working demo for using Bootstrap with React, Next.js, and React Bootstrap from the <a href="https://github.com/twbs/examples/tree/main/react-nextjs">twbs/examples repository</a>. You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx">open the example in StackBlitz</a>.</Callout></li>
    <li>Vue: <a href="https://bootstrap-vue.org/">BootstrapVue</a> (Bootstrap 4)</li>
    <li>Vue 3: <a href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/">BootstrapVueNext</a> (Bootstrap 5, currently in alpha)</li>
    <li>Angular: <a href="https://ng-bootstrap.github.io/">ng-bootstrap</a> or <a href="https://valor-software.com/ngx-bootstrap">ngx-bootstrap</a></li>
    </ul>
    <h2 id="using-bootstrap-as-a-module">Using Bootstrap as a module<a class="anchor-link" href="#using-bootstrap-as-a-module" aria-label="Link to Using Bootstrap as a module"></a></h2>
    <Callout>
    <p><strong>Try it yourself!</strong> Download the source code and working demo for using Bootstrap as an ES module from the <a href="https://github.com/twbs/examples/tree/main/sass-js-esm">twbs/examples repository</a>. You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index.html">open the example in StackBlitz</a>.</p>
    </Callout><p>We provide a version of Bootstrap built as <code>ESM</code> (<code>bootstrap.esm.js</code> and <code>bootstrap.esm.min.js</code>) which allows you to use Bootstrap as a module in the browser, if your <a href="https://caniuse.com/es6-module">targeted browsers support it</a>.</p>
    <pre><code class="language-html">&lt;script type=&quot;module&quot;&gt;
  import { Toast } from &#39;bootstrap.esm.min.js&#39;

  Array.from(document.querySelectorAll(&#39;.toast&#39;))
    .forEach(toastNode =&gt; new Toast(toastNode))
&lt;/script&gt;
    </code></pre>
    <p>Compared to JS bundlers, using ESM in the browser requires you to use the full path and filename instead of the module name. <a href="https://v8.dev/features/modules#specifiers">Read more about JS modules in the browser.</a> That’s why we use <code>&#39;bootstrap.esm.min.js&#39;</code> instead of <code>&#39;bootstrap&#39;</code> above. However, this is further complicated by our Popper dependency, which imports Popper into our JavaScript like so:</p>
    <pre><code class="language-js">import * as Popper from &quot;@popperjs/core&quot;
    </code></pre>
    <p>If you try this as-is, you’ll see an error in the console like the following:</p>
    <pre><code class="language-text">Uncaught TypeError: Failed to resolve module specifier &quot;@popperjs/core&quot;. Relative references must start with either &quot;/&quot;, &quot;./&quot;, or &quot;../&quot;.
    </code></pre>
    <p>To fix this, you can use an <code>importmap</code> to resolve the arbitrary module names to complete paths. If your <a href="https://caniuse.com/?search=importmap">targeted browsers</a> do not support <code>importmap</code>, you’ll need to use the <a href="https://github.com/guybedford/es-module-shims">es-module-shims</a> project. Here’s how it works for Bootstrap and Popper:</p>
    <pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;link href=&quot;[[config:cdn.css]]&quot; rel=&quot;stylesheet&quot; integrity=&quot;[[config:cdn.css_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;
    &lt;title&gt;Hello, modularity!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, modularity!&lt;/h1&gt;
    &lt;button id=&quot;popoverButton&quot; type=&quot;button&quot; class=&quot;btn btn-primary btn-lg&quot; data-bs-toggle=&quot;popover&quot; title=&quot;ESM in Browser&quot; data-bs-content=&quot;Bang!&quot;&gt;Custom popover&lt;/button&gt;

    &lt;script async src=&quot;https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;importmap&quot;&gt;
    {
      &quot;imports&quot;: {
        &quot;@popperjs/core&quot;: &quot;[[config:cdn.popper_esm]]&quot;,
        &quot;bootstrap&quot;: &quot;https://cdn.jsdelivr.net/npm/bootstrap@[[config:current_version]]/dist/js/bootstrap.esm.min.js&quot;
      }
    }
    &lt;/script&gt;
    &lt;script type=&quot;module&quot;&gt;
      import * as bootstrap from &#39;bootstrap&#39;

      new bootstrap.Popover(document.getElementById(&#39;popoverButton&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <h2 id="dependencies">Dependencies<a class="anchor-link" href="#dependencies" aria-label="Link to Dependencies"></a></h2>
    <p>Some plugins and CSS components depend on other plugins. If you include plugins individually, make sure to check for these dependencies in the docs.</p>
    <p>Our dropdowns, popovers, and tooltips also depend on <a href="https://popper.js.org/docs/v2/">Popper</a>.</p>
    <h2 id="data-attributes">Data attributes<a class="anchor-link" href="#data-attributes" aria-label="Link to Data attributes"></a></h2>
    <p>Nearly all Bootstrap plugins can be enabled and configured through HTML alone with data attributes (our preferred way of using JavaScript functionality). Be sure to <strong>only use one set of data attributes on a single element</strong> (e.g., you cannot trigger a tooltip and modal from the same button.)</p>
    <JsDataAttributes /><h2 id="selectors">Selectors<a class="anchor-link" href="#selectors" aria-label="Link to Selectors"></a></h2>
    <p>We use the native <code>querySelector</code> and <code>querySelectorAll</code> methods to query DOM elements for performance reasons, so you must use <a href="https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">valid selectors</a>. If you use special selectors like <code>collapse:Example</code>, be sure to escape them.</p>
    <h2 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h2>
    <p>Bootstrap provides custom events for most plugins’ unique actions. Generally, these come in an infinitive and past participle form - where the infinitive (ex. <code>show</code>) is triggered at the start of an event, and its past participle form (ex. <code>shown</code>) is triggered on the completion of an action.</p>
    <p>All infinitive events provide <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"><code>preventDefault()</code></a> functionality. This provides the ability to stop the execution of an action before it starts. Returning false from an event handler will also automatically call <code>preventDefault()</code>.</p>
    <pre><code class="language-js">const myModal = document.querySelector(&#39;#myModal&#39;)

myModal.addEventListener(&#39;show.bs.modal&#39;, event =&gt; {
  return event.preventDefault() // stops modal from being shown
})
    </code></pre>
    <h2 id="programmatic-api">Programmatic API<a class="anchor-link" href="#programmatic-api" aria-label="Link to Programmatic API"></a></h2>
    <p>All constructors accept an optional options object or nothing (which initiates a plugin with its default behavior):</p>
    <pre><code class="language-js">const myModalEl = document.querySelector(&#39;#myModal&#39;)
const modal = new bootstrap.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) // initialized with no keyboard
    </code></pre>
    <p>If you’d like to get a particular plugin instance, each plugin exposes a <code>getInstance</code> method. For example, to retrieve an instance directly from an element:</p>
    <pre><code class="language-js">bootstrap.Popover.getInstance(myPopoverEl)
    </code></pre>
    <p>This method will return <code>null</code> if an instance is not initiated over the requested element.</p>
    <p>Alternatively, <code>getOrCreateInstance</code> can be used to get the instance associated with a DOM element, or create a new one in case it wasn’t initialized.</p>
    <pre><code class="language-js">bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
    </code></pre>
    <p>In case an instance wasn’t initialized, it may accept and use an optional configuration object as second argument.</p>
    <h3 id="css-selectors-in-constructors">CSS selectors in constructors<a class="anchor-link" href="#css-selectors-in-constructors" aria-label="Link to CSS selectors in constructors"></a></h3>
    <p>In addition to the <code>getInstance</code> and <code>getOrCreateInstance</code> methods, all plugin constructors can accept a DOM element or a valid <a href="#selectors">CSS selector</a> as the first argument. Plugin elements are found with the <code>querySelector</code> method since our plugins only support a single element.</p>
    <pre><code class="language-js">const modal = new bootstrap.Modal(&#39;#myModal&#39;)
const dropdown = new bootstrap.Dropdown(&#39;[data-bs-toggle=&quot;dropdown&quot;]&#39;)
const offcanvas = bootstrap.Offcanvas.getInstance(&#39;#myOffcanvas&#39;)
const alert = bootstrap.Alert.getOrCreateInstance(&#39;#myAlert&#39;)
    </code></pre>
    <h3 id="asynchronous-functions-and-transitions">Asynchronous functions and transitions<a class="anchor-link" href="#asynchronous-functions-and-transitions" aria-label="Link to Asynchronous functions and transitions"></a></h3>
    <p>All programmatic API methods are <strong>asynchronous</strong> and return to the caller once the transition is started, but <strong>before it ends</strong>. In order to execute an action once the transition is complete, you can listen to the corresponding event.</p>
    <pre><code class="language-js">const myCollapseEl = document.querySelector(&#39;#myCollapse&#39;)

myCollapseEl.addEventListener(&#39;shown.bs.collapse&#39;, event =&gt; {
  // Action to execute once the collapsible area is expanded
})
    </code></pre>
    <p>In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
    <pre><code class="language-js">const myCarouselEl = document.querySelector(&#39;#myCarousel&#39;)
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener(&#39;slid.bs.carousel&#39;, event =&gt; {
  carousel.to(&#39;2&#39;) // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to(&#39;1&#39;) // Will start sliding to the slide 1 and returns to the caller
carousel.to(&#39;2&#39;) // !! Will be ignored, as the transition to the slide 1 is not finished !!
    </code></pre>
    <h4 id="dispose-method"><code>dispose</code> method</h4>
    <p>While it may seem correct to use the <code>dispose</code> method immediately after <code>hide()</code>, it will lead to incorrect results. Here’s an example of the problem use:</p>
    <pre><code class="language-js">const myModal = document.querySelector(&#39;#myModal&#39;)
myModal.hide() // it is asynchronous

myModal.addEventListener(&#39;shown.bs.hidden&#39;, event =&gt; {
  myModal.dispose()
})
    </code></pre>
    <h3 id="default-settings">Default settings<a class="anchor-link" href="#default-settings" aria-label="Link to Default settings"></a></h3>
    <p>You can change the default settings for a plugin by modifying the plugin’s <code>Constructor.Default</code> object:</p>
    <pre><code class="language-js">// changes default for the modal plugin’s `keyboard` option to false
bootstrap.Modal.Default.keyboard = false
    </code></pre>
    <h2 id="methods-and-properties">Methods and properties<a class="anchor-link" href="#methods-and-properties" aria-label="Link to Methods and properties"></a></h2>
    <p>Every Bootstrap plugin exposes the following methods and static properties.</p>
    <div class="table-responsive">
   <table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s modal. (Removes stored data on the DOM element)</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td><em>Static</em> method which allows you to get the modal instance associated with a DOM element.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td><em>Static</em> method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn’t initialized.</td>
    </tr>
    </tbody></table>
    </div><div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th>Static property</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>NAME</code></td>
    <td>Returns the plugin name. (Example: <code>bootstrap.Tooltip.NAME</code>)</td>
    </tr>
    <tr>
    <td><code>VERSION</code></td>
    <td>The version of each of Bootstrap’s plugins can be accessed via the <code>VERSION</code> property of the plugin’s constructor (Example: <code>bootstrap.Tooltip.VERSION</code>)</td>
    </tr>
    </tbody></table>
    </div><h2 id="sanitizer">Sanitizer<a class="anchor-link" href="#sanitizer" aria-label="Link to Sanitizer"></a></h2>
    <p>Our tooltip and popover components are able to render arbitrary HTML to the page if configured to do so.
    To prevent cross-site scripting (XSS) attacks, these components use our built-in content sanitizer to sanitize any options which accept HTML before they are rendered to the page. Content sanitization is enabled by default.</p>
    <p>The tags and attributes allowed by default are as follows. Any tags or attributes not explicitly allowed will be removed during sanitization:</p>
    <JsDocs name="allow-list" file="js/sanitizer.js" /><Callout type="warning">
    <p><strong>Exercise caution when using these advanced options.</strong> Refer to <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html">OWASP’s Cross Site Scripting Prevention Cheat Sheet</a> for more information. Vulnerabilities caused solely by disabling or modifying content sanitization are not considered within scope for Bootstrap’s security model.</p>
    </Callout><p>You can add new values to this default <code>allowList</code>:</p>
    <pre><code class="language-js">const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = [&#39;data-bs-option&#39;]

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList[&#39;*&#39;].push(myCustomRegex)
    </code></pre>
    <p>You can also replace our sanitizer with a dedicated library, for example <a href="https://www.npmjs.com/package/dompurify">DOMPurify</a>:</p>
    <pre><code class="language-js">const yourTooltipEl = document.querySelector(&#39;#yourTooltip&#39;)
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content)
  }
})
    </code></pre>
    <h2 id="optionally-using-jquery">Optionally using jQuery<a class="anchor-link" href="#optionally-using-jquery" aria-label="Link to Optionally using jQuery"></a></h2>
    <p><strong>You don’t need jQuery in Bootstrap 5</strong>, but it’s still possible to use our components with jQuery. If Bootstrap detects <code>jQuery</code> in the <code>window</code> object, it&#39;ll add all of our components in jQuery’s plugin system. This allows you to do the following:</p>
    <pre><code class="language-js">// to enable tooltips with the default configuration
$(&#39;[data-bs-toggle=&quot;tooltip&quot;]&#39;).tooltip()

// to initialize tooltips with given configuration
$(&#39;[data-bs-toggle=&quot;tooltip&quot;]&#39;).tooltip({
  boundary: &#39;clippingParents&#39;,
  customClass: &#39;myClass&#39;
})

// to trigger the `show` method
$(&#39;#myTooltip&#39;).tooltip(&#39;show&#39;)
    </code></pre>
    <p>The same goes for our other components.</p>
    <h3 id="no-conflict">No conflict<a class="anchor-link" href="#no-conflict" aria-label="Link to No conflict"></a></h3>
    <p>Sometimes it is necessary to use Bootstrap plugins with other UI frameworks. In these circumstances, namespace collisions can occasionally occur. If this happens, you may call <code>.noConflict</code> on the plugin you wish to revert the value of.</p>
    <pre><code class="language-js">const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
    </code></pre>
    <p>Bootstrap does not officially support third-party JavaScript libraries like Prototype or jQuery UI. Despite <code>.noConflict</code> and namespaced events, there may be compatibility problems that you need to fix on your own.</p>
    <h3 id="jquery-events">jQuery events<a class="anchor-link" href="#jquery-events" aria-label="Link to jQuery events"></a></h3>
    <p>Bootstrap will detect jQuery if <code>jQuery</code> is present in the <code>window</code> object and there is no <code>data-bs-no-jquery</code> attribute set on <code>&lt;body&gt;</code>. If jQuery is found, Bootstrap will emit events thanks to jQuery’s event system. So if you want to listen to Bootstrap’s events, you’ll have to use the jQuery methods (<code>.on</code>, <code>.one</code>) instead of <code>addEventListener</code>.</p>
    <pre><code class="language-js">$(&#39;#myTab a&#39;).on(&#39;shown.bs.tab&#39;, () =&gt; {
  // do something...
})
    </code></pre>
    <h2 id="disabled-javascript">Disabled JavaScript<a class="anchor-link" href="#disabled-javascript" aria-label="Link to Disabled JavaScript"></a></h2>
    <p>Bootstrap’s plugins have no special fallback when JavaScript is disabled. If you care about the user experience in this case, use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a> to explain the situation (and how to re-enable JavaScript) to your users, and/or add your own custom fallbacks.</p>
  </article>
</template>
