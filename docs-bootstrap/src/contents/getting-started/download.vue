
<template>
  <article>
    <h1>Download</h1>
    <p>Download Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.</p>

    <h2 id="compiled-css-and-js">Compiled CSS and JS<a class="anchor-link" href="#compiled-css-and-js" aria-label="Link to Compiled CSS and JS"></a></h2>
    <p>Download ready-to-use compiled code for <strong>Bootstrap v5.3.8</strong> to easily drop into your project, which includes:</p>
    <ul>
    <li>Compiled and minified CSS bundles (see <a href="/getting-started/contents#css-files">CSS files comparison</a>)</li>
    <li>Compiled and minified JavaScript plugins (see <a href="/getting-started/contents#js-files">JS files comparison</a>)</li>
    </ul>
    <p>This doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.</p>
    <p><a href="https://github.com/twbs/bootstrap/releases/download/v5.3.8/bootstrap-5.3.8-dist.zip" class="btn btn-docs-primary">Download</a></p>
    <h2 id="source-files">Source files<a class="anchor-link" href="#source-files" aria-label="Link to Source files"></a></h2>
    <p>Compile Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:</p>
    <ul>
    <li><a href="/getting-started/contribute#sass">Sass compiler</a> for compiling Sass source files into CSS files</li>
    <li><a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> for CSS vendor prefixing</li>
    </ul>
    <p>Should you require our full set of <a href="/getting-started/contribute#tooling-setup">build tools</a>, they are included for developing Bootstrap and its docs, but they’re likely unsuitable for your own purposes.</p>
    <p><a href="https://github.com/twbs/bootstrap/archive/v5.3.8.zip" class="btn btn-docs-primary">Download source</a></p>
    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>If you want to download and examine our <a href="/examples">examples</a>, you can grab the already built examples:</p>
    <p><a href="https://github.com/twbs/bootstrap/releases/download/v5.3.8/bootstrap-5.3.8-examples.zip" class="btn btn-docs-primary">Download Examples</a></p>
    <h2 id="cdn-via-jsdelivr">CDN via jsDelivr<a class="anchor-link" href="#cdn-via-jsdelivr" aria-label="Link to CDN via jsDelivr"></a></h2>
    <p>Skip the download with <a href="https://www.jsdelivr.com/">jsDelivr</a> to deliver cached version of Bootstrap’s compiled CSS and JS to your project.</p>
    <pre><code class="language-html">&lt;link href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; integrity=&quot;sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js&quot; integrity=&quot;sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    </code></pre>
    <p>If you’re using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.</p>
    <pre><code class="language-html">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js&quot; integrity=&quot;sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js&quot; integrity=&quot;sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    </code></pre>
    <h3 id="alternative-cdns">Alternative CDNs<a class="anchor-link" href="#alternative-cdns" aria-label="Link to Alternative CDNs"></a></h3>
    <p>We recommend <a href="https://www.jsdelivr.com/">jsDelivr</a> and use it ourselves in our documentation. However, in some cases—like in some specific countries or environments—you may need to use other CDN providers like <a href="https://cdnjs.com/">cdnjs</a> or <a href="https://unpkg.com/">unpkg</a>.</p>
    <p>You’ll find the same files on these CDN providers, albeit with different URLs. With cdnjs, you can <a href="https://cdnjs.com/libraries/bootstrap">use this direct Bootstrap package link</a> to copy and paste ready-to-use HTML snippets for each dist file from any version of Bootstrap.</p>
    <Callout type="warning">
    <p><strong>If the SRI hashes differ for a given file, you shouldn’t use the files from that CDN, because it means that the file was modified by someone else.</strong></p>
    </Callout><p>Note that you should compare same length hashes, e.g. <code>sha384</code> with <code>sha384</code>, otherwise it’s expected for them to be different.
    As such, you can use an online tool like <a href="https://www.srihash.org/">SRI Hash Generator</a> to make sure that the hashes are the same for a given file.
    Alternatively, assuming you have OpenSSL installed, you can achieve the same from the CLI, for example:</p>
    <pre><code class="language-sh">openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A
    </code></pre>
    <h2 id="package-managers">Package managers<a class="anchor-link" href="#package-managers" aria-label="Link to Package managers"></a></h2>
    <p>Pull in Bootstrap’s <strong>source files</strong> into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will <strong>require a <a href="/getting-started/contribute#sass">Sass compiler</a> and <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a></strong> for a setup that matches our official compiled versions.</p>
    <h3 id="npm">npm<a class="anchor-link" href="#npm" aria-label="Link to npm"></a></h3>
    <p>Install Bootstrap in your Node.js powered apps with <a href="https://www.npmjs.com/package/bootstrap">the npm package</a>:</p>
    <pre><code class="language-sh">npm install bootstrap@5.3.8
    </code></pre>
    <p><code>const bootstrap = require(&#39;bootstrap&#39;)</code> or <code>import bootstrap from &#39;bootstrap&#39;</code> will load all of Bootstrap’s plugins onto a <code>bootstrap</code> object.
    The <code>bootstrap</code> module itself exports all of our plugins. You can manually load Bootstrap’s plugins individually by loading the <code>/js/dist/*.js</code> files under the package’s top-level directory.</p>
    <p>Bootstrap’s <code>package.json</code> contains some additional metadata under the following keys:</p>
    <ul>
    <li><code>sass</code> - path to Bootstrap’s main <a href="https://sass-lang.com/">Sass</a> source file</li>
    <li><code>style</code> - path to Bootstrap’s non-minified CSS that’s been compiled using the default settings (no customization)</li>
    </ul>
    <Callout name="info-npm-starter" /><h3 id="yarn">yarn<a class="anchor-link" href="#yarn" aria-label="Link to yarn"></a></h3>
    <p>Install Bootstrap in your Node.js powered apps with <a href="https://yarnpkg.com/en/package/bootstrap">the yarn package</a>:</p>
    <pre><code class="language-sh">yarn add bootstrap@5.3.8
    </code></pre>
    <Callout type="warning">
    <p><strong>Yarn 2+ (aka Yarn Berry) doesn’t support the <code>node_modules</code> directory by default</strong>: using our <a href="https://github.com/twbs/examples/tree/main/sass-js">Sass &amp; JS example</a> needs some adjustments:</p>
    <pre><code class="language-sh">yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
yarn start # Start the project
    </code></pre>
    </Callout><h3 id="bun">Bun<a class="anchor-link" href="#bun" aria-label="Link to Bun"></a></h3>
    <p>Install Bootstrap in your Bun or Node.js powered apps with <a href="https://bun.sh/">the Bun CLI</a>:</p>
    <pre><code class="language-sh">bun add bootstrap@5.3.8
    </code></pre>
    <h3 id="rubygems">RubyGems<a class="anchor-link" href="#rubygems" aria-label="Link to RubyGems"></a></h3>
    <p>Install Bootstrap in your Ruby apps using <a href="https://bundler.io/">Bundler</a> (<strong>recommended</strong>) and <a href="https://rubygems.org/">RubyGems</a> by adding the following line to your <a href="https://bundler.io/guides/gemfile.html"><code>Gemfile</code></a>:</p>
    <pre><code class="language-ruby">gem &#39;bootstrap&#39;, &#39;~&gt; 5.3.8&#39;
    </code></pre>
    <p>Alternatively, if you’re not using Bundler, you can install the gem by running this command:</p>
    <pre><code class="language-sh">gem install bootstrap -v 5.3.8
    </code></pre>
    <p><a href="https://github.com/twbs/bootstrap-rubygem/blob/main/README.md">See the gem’s README</a> for further details.</p>
    <h3 id="composer">Composer<a class="anchor-link" href="#composer" aria-label="Link to Composer"></a></h3>
    <p>You can also install and manage Bootstrap’s Sass and JavaScript using <a href="https://getcomposer.org/">Composer</a>:</p>
    <pre><code class="language-sh">composer require twbs/bootstrap:5.3.8
    </code></pre>
    <h3 id="nuget">NuGet<a class="anchor-link" href="#nuget" aria-label="Link to NuGet"></a></h3>
    <p>If you develop in .NET Framework, you can also install and manage Bootstrap’s <a href="https://www.nuget.org/packages/bootstrap/">CSS</a> or <a href="https://www.nuget.org/packages/bootstrap.sass/">Sass</a> and JavaScript using <a href="https://www.nuget.org/">NuGet</a>. Newer projects should use <a href="https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/">libman</a> or another method as NuGet is designed for compiled code, not frontend assets.</p>
    <pre><code class="language-powershell">Install-Package bootstrap
    </code></pre>
    <pre><code class="language-powershell">Install-Package bootstrap.sass
    </code></pre>
    <h2 id="intellisense-extension">IntelliSense extension<a class="anchor-link" href="#intellisense-extension" aria-label="Link to IntelliSense extension"></a></h2>
    <img class="d-block mb-4 img-fluid rounded-3" src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-intellisense-autocomplete.png" width="573" height="332" alt="" /><p>Install the community-maintained <a href="https://marketplace.visualstudio.com/items?itemName=hossaini.bootstrap-intellisense">IntelliSense extension</a> for Visual Studio Code to get IntelliSense auto-completion for Bootstrap classes.</p>
    <p><a href="https://marketplace.visualstudio.com/items?itemName=hossaini.bootstrap-intellisense" class="btn btn-docs-primary">View in VS Code Marketplace</a></p>
  </article>
</template>
