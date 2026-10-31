
<template>
  <article>
    <h1>Contents</h1>
    <p>Discover what’s included in Bootstrap, including our compiled and source code flavors.</p>

    <h2 id="compiled-bootstrap">Compiled Bootstrap<a class="anchor-link" href="#compiled-bootstrap" aria-label="Link to Compiled Bootstrap"></a></h2>
    <p>Once downloaded, unzip the compressed folder and you’ll see something like this:</p>
    <p>{/* NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the <code>dist</code> folder. */}</p>
    <pre><code class="language-text">bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
    </code></pre>
    <p>This is the most basic form of Bootstrap: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (<code>bootstrap.*</code>), as well as compiled and minified CSS and JS (<code>bootstrap.min.*</code>). <a href="https://web.dev/articles/source-maps">Source maps</a> (<code>bootstrap.*.map</code>) are available for use with certain browsers’ developer tools. Bundled JS files (<code>bootstrap.bundle.js</code> and minified <code>bootstrap.bundle.min.js</code>) include <a href="https://popper.js.org/docs/v2/">Popper</a>.</p>
    <h3 id="css-files">CSS files<a class="anchor-link" href="#css-files" aria-label="Link to CSS files"></a></h3>
    <p>Bootstrap includes a handful of options for including some or all of our compiled CSS.</p>
    <div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th>CSS files</th>
    <th>Layout</th>
    <th>Content</th>
    <th>Components</th>
    <th>Utilities</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>bootstrap.css</code><br/> <code>bootstrap.min.css</code><br/> <code>bootstrap.rtl.css</code><br/> <code>bootstrap.rtl.min.css</code></td>
    <td>Included</td>
    <td>Included</td>
    <td>Included</td>
    <td>Included</td>
    </tr>
    <tr>
    <td><code>bootstrap-grid.css</code><br/> <code>bootstrap-grid.rtl.css</code><br/> <code>bootstrap-grid.min.css</code><br/> <code>bootstrap-grid.rtl.min.css</code></td>
    <td><a href="[[docsref:/layout/grid]]">Only grid system</a></td>
    <td>—</td>
    <td>—</td>
    <td><a href="[[docsref:/utilities/flex]]">Only flex utilities</a></td>
    </tr>
    <tr>
    <td><code>bootstrap-utilities.css</code><br/> <code>bootstrap-utilities.rtl.css</code><br/> <code>bootstrap-utilities.min.css</code><br/> <code>bootstrap-utilities.rtl.min.css</code></td>
    <td>—</td>
    <td>—</td>
    <td>—</td>
    <td>Included</td>
    </tr>
    <tr>
    <td><code>bootstrap-reboot.css</code><br/> <code>bootstrap-reboot.rtl.css</code><br/> <code>bootstrap-reboot.min.css</code><br/> <code>bootstrap-reboot.rtl.min.css</code></td>
    <td>—</td>
    <td><a href="[[docsref:/content/reboot]]">Only Reboot</a></td>
    <td>—</td>
    <td>—</td>
    </tr>
    </tbody></table>
    </div><h3 id="js-files">JS files<a class="anchor-link" href="#js-files" aria-label="Link to JS files"></a></h3>
    <p>Similarly, we have options for including some or all of our compiled JavaScript.</p>
    <div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th>JS Files</th>
    <th>Popper</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>bootstrap.bundle.js</code><br/> <code>bootstrap.bundle.min.js</code><br/></td>
    <td>Included</td>
    </tr>
    <tr>
    <td><code>bootstrap.js</code><br/> <code>bootstrap.min.js</code><br/></td>
    <td>–</td>
    </tr>
    </tbody></table>
    </div><h2 id="bootstrap-source-code">Bootstrap source code<a class="anchor-link" href="#bootstrap-source-code" aria-label="Link to Bootstrap source code"></a></h2>
    <p>The Bootstrap source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:</p>
    <pre><code class="language-text">bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── [[config:docs_version]]/
│              └── examples/
├── js/
└── scss/
    </code></pre>
    <p>The <code>scss/</code> and <code>js/</code> are the source code for our CSS and JavaScript. The <code>dist/</code> folder includes everything listed in the compiled download section above. The <code>site/content/docs/</code> folder includes the source code for our hosted documentation, including our live examples of Bootstrap usage.</p>
    <p>Beyond that, any other included file provides support for packages, license information, and development.</p>
  </article>
</template>
