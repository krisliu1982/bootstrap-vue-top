
<template>
  <article>
    <h1>Bootstrap and Parcel</h1>
    <p>The official guide for how to include and bundle Bootstrap’s CSS and JavaScript in your project using Parcel.</p>

    <img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-parcel.png" width="800" height="400" alt=""/><Callout>
    <p><strong>Want to skip to the end?</strong> Download the source code and working demo for this guide from the <a href="https://github.com/twbs/examples/tree/main/parcel">twbs/examples repository</a>. You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index.html">open the example in StackBlitz</a> but not run it because Parcel isn’t currently supported there.</p>
    </Callout><h2 id="what-is-parcel">What is Parcel?<a class="anchor-link" href="#what-is-parcel" aria-label="Link to What is Parcel?"></a></h2>
    <p><a href="https://parceljs.org/">Parcel</a> is a web application bundler designed to simplify the development process with a zero-configuration setup out of the box. It offers features found in more advanced bundlers while focusing on ease of use, making it ideal for developers seeking a quick start.</p>
    <h2 id="setup">Setup<a class="anchor-link" href="#setup" aria-label="Link to Setup"></a></h2>
    <p>We’re building a Parcel project with Bootstrap from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.</p>
    <ol>
    <li><p><strong>Create a project folder and set up npm.</strong> We&#39;ll create the <code>my-project</code> folder and initialize npm with the <code>-y</code> argument to avoid it asking us all the interactive questions.</p>
    <pre><code class="language-sh">mkdir my-project &amp;&amp; cd my-project
npm init -y
    </code></pre>
    </li>
    <li><p><strong>Install Parcel.</strong> Unlike our Webpack guide, there’s only a single build tool dependency here. Parcel will automatically install language transformers (like Sass) as it detects them. We use <code>--save-dev</code> to signal that this dependency is only for development use and not for production.</p>
    <pre><code class="language-sh">npm i --save-dev parcel
    </code></pre>
    </li>
    <li><p><strong>Install Bootstrap.</strong> Now we can install Bootstrap. We&#39;ll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don’t plan on using those components, you can omit Popper here.</p>
    <pre><code class="language-sh">npm i --save bootstrap @popperjs/core
    </code></pre>
    </li>
    </ol>
    <p>Now that we have all the necessary dependencies installed, we can get to work creating the project files and importing Bootstrap.</p>
    <h2 id="project-structure">Project structure<a class="anchor-link" href="#project-structure" aria-label="Link to Project structure"></a></h2>
    <p>We’ve already created the <code>my-project</code> folder and initialized npm. Now we&#39;ll also create our <code>src</code> folder, stylesheet, and JavaScript file to round out the project structure. Run the following from <code>my-project</code>, or manually create the folder and file structure shown below.</p>
    <pre><code class="language-sh">mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss
    </code></pre>
    <p>When you’re done, your complete project should look like this:</p>
    <pre><code class="language-text">my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
└── package.json
    </code></pre>
    <p>At this point, everything is in the right place, but Parcel needs an HTML page and npm script to start our server.</p>
    <h2 id="configure-parcel">Configure Parcel<a class="anchor-link" href="#configure-parcel" aria-label="Link to Configure Parcel"></a></h2>
    <p>With dependencies installed and our project folder ready for us to start coding, we can now configure Parcel and run our project locally. Parcel itself requires no configuration file by design, but we do need an npm script and an HTML file to start our server.</p>
    <ol>
    <li><p><strong>Fill in the <code>src/index.html</code> file.</strong> Parcel needs a page to render, so we use our <code>index.html</code> page to set up some basic HTML, including our CSS and JavaScript files.</p>
    <pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;Bootstrap w/ Parcel&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;scss/styles.scss&quot;&gt;
    &lt;script type=&quot;module&quot; src=&quot;js/main.js&quot;&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;container py-4 px-3 mx-auto&quot;&gt;
      &lt;h1&gt;Hello, Bootstrap and Parcel!&lt;/h1&gt;
      &lt;button class=&quot;btn btn-primary&quot;&gt;Primary button&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <p>We’re including a little bit of Bootstrap styling here with the <code>div class=&quot;container&quot;</code> and <code>&lt;button&gt;</code> so that we see when Bootstrap’s CSS is loaded by Parcel.</p>
    <p>Parcel will automatically detect we’re using Sass and install the <a href="https://parceljs.org/languages/sass/">Sass Parcel plugin</a> to support it. However, if you wish, you can also manually run <code>npm i --save-dev @parcel/transformer-sass</code>.</p>
    </li>
    <li><p><strong>Add the Parcel npm scripts.</strong> Open the <code>package.json</code> and add the following <code>start</code> script to the <code>scripts</code> object. We&#39;ll use this script to start our Parcel development server and render the HTML file we created after it’s compiled into the <code>dist</code> directory.</p>
    <pre><code class="language-json">{
   // ...
   &quot;scripts&quot;: {
     &quot;start&quot;: &quot;parcel serve src/index.html --public-url / --dist-dir dist&quot;,
     &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
   },
   // ...
}
    </code></pre>
    </li>
    <li><p><strong>And finally, we can start Parcel.</strong> From the <code>my-project</code> folder in your terminal, run that newly added npm script:</p>
    <pre><code class="language-sh">npm start
    </code></pre>
    <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/parcel-dev-server.png" alt="Parcel dev server running" /></li>
    </ol>
    <p>In the next and final section to this guide, we&#39;ll import all of Bootstrap’s CSS and JavaScript.</p>
    <h2 id="import-bootstrap">Import Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="Link to Import Bootstrap"></a></h2>
    <p>Importing Bootstrap into Parcel requires two imports, one into our <code>styles.scss</code> and one into our <code>main.js</code>.</p>
    <ol>
    <li><p><strong>Import Bootstrap’s CSS.</strong> Add the following to <code>src/scss/styles.scss</code> to import all of Bootstrap’s source Sass.</p>
    <pre><code class="language-scss">// Import all of Bootstrap’s CSS
@import &quot;bootstrap/scss/bootstrap&quot;;
    </code></pre>
    <p><em>You can also import our stylesheets individually if you want. <a href="[[docsref:/customize/sass#importing]]">Read our Sass import docs</a> for details.</em></p>
    <p><strong>Optional:</strong> You may see Sass deprecation warnings with the latest versions of Dart Sass. These can silenced by adding the following configuration in a <code>.sassrc.js</code> file in the root folder with the following:</p>
    <pre><code class="language-js">module.exports = {
  silenceDeprecations: [&#39;import&#39;, &#39;mixed-decls&#39;, &#39;color-functions&#39;, &#39;global-builtin&#39;]
}
    </code></pre>
    </li>
    <li><p><strong>Import Bootstrap’s JS.</strong> Add the following to <code>src/js/main.js</code> to import all of Bootstrap’s JS. Popper will be imported automatically through Bootstrap.</p>
    <pre><code class="language-js">// Import all of Bootstrap’s JS
import * as bootstrap from &#39;bootstrap&#39;
    </code></pre>
    <p>You can also import JavaScript plugins individually as needed to keep bundle sizes down:</p>
    <pre><code class="language-js">import Alert from &#39;bootstrap/js/dist/alert&#39;

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from &#39;bootstrap&#39;
    </code></pre>
    <p><em><a href="[[docsref:/getting-started/javascript/]]">Read our JavaScript docs</a> for more information on how to use Bootstrap’s plugins.</em></p>
    </li>
    <li><p><strong>And you’re done! 🎉</strong> With Bootstrap’s source Sass and JS fully loaded, your local development server should now look like this:</p>
    <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/parcel-dev-server-bootstrap.png" alt="Parcel dev server running with Bootstrap" /><p>Now you can start adding any Bootstrap components you want to use. Be sure to <a href="https://github.com/twbs/examples/tree/main/parcel">check out the complete Parcel example project</a> for how to include additional custom Sass and optimize your build by importing only the parts of Bootstrap’s CSS and JS that you need.</p>
    </li>
    </ol>
    <GuideFooter />
  </article>
</template>
