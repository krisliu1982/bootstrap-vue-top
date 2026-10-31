
<template>
  <article>
    <h1>Bootstrap and Webpack</h1>
    <p>The official guide for how to include and bundle Bootstrap’s CSS and JavaScript in your project using Webpack.</p>

    <img class="d-block mx-auto mb-4 img-fluid rounded-3" srcset="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png, https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack@2x.png 2x" src="https://getbootstrap.com/docs/5.3/assets/img/guides/bootstrap-webpack.png" width="800" height="400" alt=""/><Callout>
    <p><strong>Want to skip to the end?</strong> Download the source code and working demo for this guide from the <a href="https://github.com/twbs/examples/tree/main/webpack">twbs/examples repository</a>. You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index.html">open the example in StackBlitz</a> for live editing.</p>
    </Callout><h2 id="what-is-webpack">What is Webpack?<a class="anchor-link" href="#what-is-webpack" aria-label="Link to What is Webpack?"></a></h2>
    <p><a href="https://webpack.js.org/">Webpack</a> is a JavaScript module bundler that processes modules and their dependencies to generate static assets. It simplifies managing complex web applications with multiple files and dependencies.</p>
    <h2 id="setup">Setup<a class="anchor-link" href="#setup" aria-label="Link to Setup"></a></h2>
    <p>We’re building a Webpack project with Bootstrap from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.</p>
    <ol>
    <li><p><strong>Create a project folder and set up npm.</strong> We&#39;ll create the <code>my-project</code> folder and initialize npm with the <code>-y</code> argument to avoid it asking us all the interactive questions.</p>
    <pre><code class="language-sh">mkdir my-project &amp;&amp; cd my-project
npm init -y
    </code></pre>
    </li>
    <li><p><strong>Install Webpack.</strong> Next we need to install our Webpack development dependencies: <code>webpack</code> for the core of Webpack, <code>webpack-cli</code> so we can run Webpack commands from the terminal, and <code>webpack-dev-server</code> so we can run a local development server. Additionally, we&#39;ll install <code>html-webpack-plugin</code> to be able to store our <code>index.html</code> in <code>src</code> directory instead of the default <code>dist</code> one. We use <code>--save-dev</code> to signal that these dependencies are only for development use and not for production.</p>
    <pre><code class="language-sh">npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
    </code></pre>
    </li>
    <li><p><strong>Install Bootstrap.</strong> Now we can install Bootstrap. We&#39;ll also install Popper since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don’t plan on using those components, you can omit Popper here.</p>
    <pre><code class="language-sh">npm i --save bootstrap @popperjs/core
    </code></pre>
    </li>
    <li><p><strong>Install additional dependencies.</strong> In addition to Webpack and Bootstrap, we need a few more dependencies to properly import and bundle Bootstrap’s CSS and JS with Webpack. These include Sass, some loaders, and Autoprefixer.</p>
    <pre><code class="language-sh">npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
    </code></pre>
    </li>
    </ol>
    <p>Now that we have all the necessary dependencies installed, we can get to work creating the project files and importing Bootstrap.</p>
    <h2 id="project-structure">Project structure<a class="anchor-link" href="#project-structure" aria-label="Link to Project structure"></a></h2>
    <p>We’ve already created the <code>my-project</code> folder and initialized npm. Now we&#39;ll also create our <code>src</code> and <code>dist</code> folders to round out the project structure. Run the following from <code>my-project</code>, or manually create the folder and file structure shown below.</p>
    <pre><code class="language-sh">mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js
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
├── package.json
└── webpack.config.js
    </code></pre>
    <p>At this point, everything is in the right place, but Webpack won’t work because we haven’t filled in our <code>webpack.config.js</code> yet.</p>
    <h2 id="configure-webpack">Configure Webpack<a class="anchor-link" href="#configure-webpack" aria-label="Link to Configure Webpack"></a></h2>
    <p>With dependencies installed and our project folder ready for us to start coding, we can now configure Webpack and run our project locally.</p>
    <ol>
    <li><p><strong>Open <code>webpack.config.js</code> in your editor.</strong> Since it’s blank, we&#39;ll need to add some boilerplate config to it so we can start our server. This part of the config tells Webpack where to look for our project’s JavaScript, where to output the compiled code to (<code>dist</code>), and how the development server should behave (pulling from the <code>dist</code> folder with hot reload).</p>
    <pre><code class="language-js">&#39;use strict&#39;

const path = require(&#39;path&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)

module.exports = {
  mode: &#39;development&#39;,
  entry: &#39;./src/js/main.js&#39;,
  output: {
    filename: &#39;main.js&#39;,
    path: path.resolve(__dirname, &#39;dist&#39;)
  },
  devServer: {
    static: path.resolve(__dirname, &#39;dist&#39;),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
  ]
}
    </code></pre>
    </li>
    <li><p><strong>Next we fill in our <code>src/index.html</code>.</strong> This is the HTML page Webpack will load in the browser to utilize the bundled CSS and JS we&#39;ll add to it in later steps. Before we can do that, we have to give it something to render and include the <code>output</code> JS from the previous step.</p>
    <pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;Bootstrap w/ Webpack&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class=&quot;container py-4 px-3 mx-auto&quot;&gt;
      &lt;h1&gt;Hello, Bootstrap and Webpack!&lt;/h1&gt;
      &lt;button class=&quot;btn btn-primary&quot;&gt;Primary button&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <p>We’re including a little bit of Bootstrap styling here with the <code>div class=&quot;container&quot;</code> and <code>&lt;button&gt;</code> so that we see when Bootstrap’s CSS is loaded by Webpack.</p>
    </li>
    <li><p><strong>Now we need an npm script to run Webpack.</strong> Open <code>package.json</code> and add the <code>start</code> script shown below (you should already have the test script). We&#39;ll use this script to start our local Webpack dev server. You can also add a <code>build</code> script shown below to build your project.</p>
    <pre><code class="language-json">{
  // ...
  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;webpack serve&quot;,
    &quot;build&quot;: &quot;webpack build --mode=production&quot;,
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;
  },
  // ...
}
    </code></pre>
    </li>
    <li><p><strong>And finally, we can start Webpack.</strong> From the <code>my-project</code> folder in your terminal, run that newly added npm script:</p>
    <pre><code class="language-sh">npm start
    </code></pre>
    <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server.png" alt="Webpack dev server running"/></li>
    </ol>
    <p>In the next and final section to this guide, we&#39;ll set up the Webpack loaders and import all of Bootstrap’s CSS and JavaScript.</p>
    <h2 id="import-bootstrap">Import Bootstrap<a class="anchor-link" href="#import-bootstrap" aria-label="Link to Import Bootstrap"></a></h2>
    <p>Importing Bootstrap into Webpack requires the loaders we installed in the first section. We’ve installed them with npm, but now Webpack needs to be configured to use them.</p>
    <ol>
    <li><p><strong>Set up the loaders in <code>webpack.config.js</code>.</strong> Your configuration file is now complete and should match the snippet below. The only new part here is the <code>module</code> section.</p>
    <pre><code class="language-js">&#39;use strict&#39;

const path = require(&#39;path&#39;)
const autoprefixer = require(&#39;autoprefixer&#39;)
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)

module.exports = {
  mode: &#39;development&#39;,
  entry: &#39;./src/js/main.js&#39;,
  output: {
    filename: &#39;main.js&#39;,
    path: path.resolve(__dirname, &#39;dist&#39;)
  },
  devServer: {
    static: path.resolve(__dirname, &#39;dist&#39;),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `&lt;style&gt;` tag
            loader: &#39;style-loader&#39;
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: &#39;css-loader&#39;
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: &#39;postcss-loader&#39;,
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: &#39;sass-loader&#39;,
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  &#39;mixed-decls&#39;,
                  &#39;color-functions&#39;,
                  &#39;global-builtin&#39;,
                  &#39;import&#39;
                ]
              }
            }
          }
        ]
      }
    ]
  }
}
    </code></pre>
    <p>Here’s a recap of why we need all these loaders. <code>style-loader</code> injects the CSS into a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> of the HTML page, <code>css-loader</code> helps with using <code>@import</code> and <code>url()</code>, <code>postcss-loader</code> is required for Autoprefixer, and <code>sass-loader</code> allows us to use Sass.</p>
    <p><strong>Note:</strong> Sass deprecation warnings are shown when compiling source Sass files with the latest versions of Dart Sass. This does not prevent compilation or usage of Bootstrap. We’re <a href="[[config:repo]]/issues/40962">working on a long-term fix</a>, but in the meantime these deprecation notices can be ignored.</p>
    </li>
    <li><p><strong>Now, let’s import Bootstrap’s CSS.</strong> Add the following to <code>src/scss/styles.scss</code> to import all of Bootstrap’s source Sass.</p>
    <pre><code class="language-scss">// Import all of Bootstrap’s CSS
@import &quot;bootstrap/scss/bootstrap&quot;;
    </code></pre>
    <p><em>You can also import our stylesheets individually if you want. <a href="[[docsref:/customize/sass#importing]]">Read our Sass import docs</a> for details.</em></p>
    </li>
    <li><p><strong>Next we load the CSS and import Bootstrap’s JavaScript.</strong> Add the following to <code>src/js/main.js</code> to load the CSS and import all of Bootstrap’s JS. Popper will be imported automatically through Bootstrap.</p>
    <pre><code class="language-js">// Import our custom CSS
import &#39;../scss/styles.scss&#39;

// Import all of Bootstrap’s JS
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
    <img class="img-fluid" src="https://getbootstrap.com/docs/5.3/assets/img/guides/webpack-dev-server-bootstrap.png" alt="Webpack dev server running with Bootstrap"/><p>Now you can start adding any Bootstrap components you want to use. Be sure to <a href="https://github.com/twbs/examples/tree/main/webpack">check out the complete Webpack example project</a> for how to include additional custom Sass and optimize your build by importing only the parts of Bootstrap’s CSS and JS that you need.</p>
    </li>
    </ol>
    <h2 id="production-optimizations">Production optimizations<a class="anchor-link" href="#production-optimizations" aria-label="Link to Production optimizations"></a></h2>
    <p>Depending on your setup, you may want to implement some additional security and speed optimizations useful for running the project in production. Note that these optimizations are not applied on <a href="https://github.com/twbs/examples/tree/main/webpack">the Webpack example project</a> and are up to you to implement.</p>
    <h3 id="extracting-css">Extracting CSS<a class="anchor-link" href="#extracting-css" aria-label="Link to Extracting CSS"></a></h3>
    <p>The <code>style-loader</code> we configured above conveniently emits CSS into the bundle so that manually loading a CSS file in <code>dist/index.html</code> isn’t necessary. This approach may not work with a strict Content Security Policy, however, and it may become a bottleneck in your application due to the large bundle size.</p>
    <p>To separate the CSS so that we can load it directly from <code>dist/index.html</code>, use the <code>mini-css-extract-loader</code> Webpack plugin.</p>
    <p>First, install the plugin:</p>
    <pre><code class="language-sh">npm install --save-dev mini-css-extract-plugin
    </code></pre>
    <p>Then instantiate and use the plugin in the Webpack configuration:</p>
    <pre><code class="language-diff">--- a/webpack.config.js
+++ b/webpack.config.js
@@ -3,6 +3,7 @@
 const path = require(&#39;path&#39;)
 const autoprefixer = require(&#39;autoprefixer&#39;)
 const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)
+const miniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;)

 module.exports = {
   mode: &#39;development&#39;,
@@ -17,7 +18,8 @@ module.exports = {
     hot: true
   },
   plugins: [
-    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; })
+    new HtmlWebpackPlugin({ template: &#39;./src/index.html&#39; }),
+    new miniCssExtractPlugin()
   ],
   module: {
     rules: [
@@ -25,8 +27,8 @@ module.exports = {
         test: /\.(scss)$/,
         use: [
           {
-            // Adds CSS to the DOM by injecting a `&lt;style&gt;` tag
-            loader: &#39;style-loader&#39;
+            // Extracts CSS for each JS file that includes CSS
+            loader: miniCssExtractPlugin.loader
           },
           {
    </code></pre>
    <p>After running <code>npm run build</code> again, there will be a new file <code>dist/main.css</code>, which will contain all of the CSS imported by <code>src/js/main.js</code>. If you view <code>dist/index.html</code> in your browser now, the style will be missing, as it is now in <code>dist/main.css</code>. You can include the generated CSS in <code>dist/index.html</code> like this:</p>
    <pre><code class="language-diff">--- a/dist/index.html
+++ b/dist/index.html
@@ -3,6 +3,7 @@
   &lt;head&gt;
     &lt;meta charset=&quot;utf-8&quot;&gt;
     &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
+    &lt;link rel=&quot;stylesheet&quot; href=&quot;./main.css&quot;&gt;
     &lt;title&gt;Bootstrap w/ Webpack&lt;/title&gt;
   &lt;/head&gt;
   &lt;body&gt;
    </code></pre>
    <h3 id="extracting-svg-files">Extracting SVG files<a class="anchor-link" href="#extracting-svg-files" aria-label="Link to Extracting SVG files"></a></h3>
    <p>Bootstrap’s CSS includes multiple references to SVG files via inline <code>data:</code> URIs. If you define a Content Security Policy for your project that blocks <code>data:</code> URIs for images, then these SVG files will not load. You can get around this problem by extracting the inline SVG files using Webpack’s asset modules feature.</p>
    <p>Configure Webpack to extract inline SVG files like this:</p>
    <pre><code class="language-diff">--- a/webpack.config.js
+++ b/webpack.config.js
@@ -23,6 +23,14 @@ module.exports = {
   },
   module: {
     rules: [
+      {
+        mimetype: &#39;image/svg+xml&#39;,
+        scheme: &#39;data&#39;,
+        type: &#39;asset/resource&#39;,
+        generator: {
+          filename: &#39;icons/[hash].svg&#39;
+        }
+      },
       {
         test: /\.(scss)$/,
         use: [
    </code></pre>
    <p>After running <code>npm run build</code> again, you’ll find the SVG files extracted into <code>dist/icons</code> and properly referenced from CSS.</p>
    <GuideFooter />
  </article>
</template>
