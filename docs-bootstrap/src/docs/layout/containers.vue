
<template>
  <article>
    <h1>Containers</h1>
    <p>Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.</p>

    <h2 id="how-they-work">How they work<a class="anchor-link" href="#how-they-work" aria-label="Link to How they work"></a></h2>
    <p>Containers are the most basic layout element in Bootstrap and are <strong>required when using our default grid system</strong>. Containers are used to contain, pad, and (sometimes) center the content within them. While containers <em>can</em> be nested, most layouts do not require a nested container.</p>
    <p>Bootstrap comes with three different containers:</p>
    <ul>
    <li><code>.container</code>, which sets a <code>max-width</code> at each responsive breakpoint</li>
    <li><code>.container-{breakpoint}</code>, which is <code>width: 100%</code> until the specified breakpoint</li>
    <li><code>.container-fluid</code>, which is <code>width: 100%</code> at all breakpoints</li>
    </ul>
    <p>The table below illustrates how each container’s <code>max-width</code> compares to the original <code>.container</code> and <code>.container-fluid</code> across each breakpoint.</p>
    <p>See them in action and compare them in our <a href="[[docsref:/examples/grid/#containers]]">Grid example</a>.</p>
    <BsTable>
    <table>
    <thead>
    <tr>
    <th></th>
    <th>Extra small<div class="fw-normal">&lt;576px</div></th>
    <th>Small<div class="fw-normal">&ge;576px</div></th>
    <th>Medium<div class="fw-normal">&ge;768px</div></th>
    <th>Large<div class="fw-normal">&ge;992px</div></th>
    <th>X-Large<div class="fw-normal">&ge;1200px</div></th>
    <th>XX-Large<div class="fw-normal">&ge;1400px</div></th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>.container</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>540px</td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-sm</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>540px</td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-md</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>720px</td>
    <td>960px</td>
    <td>1140px</td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-lg</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>960px</td>
    <td>1140px</td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-xl</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>1140px</td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-xxl</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td>1320px</td>
    </tr>
    <tr>
    <td><code>.container-fluid</code></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    <td><span class="text-body-secondary">100%</span></td>
    </tr>
    </tbody></table>
    </BsTable><h2 id="default-container">Default container<a class="anchor-link" href="#default-container" aria-label="Link to Default container"></a></h2>
    <p>Our default <code>.container</code> class is a responsive, fixed-width container, meaning its <code>max-width</code> changes at each breakpoint.</p>
    <pre><code class="language-html">&lt;div class=&quot;container&quot;&gt;
      &lt;!-- Content here --&gt;
    &lt;/div&gt;
    </code></pre>
    <h2 id="responsive-containers">Responsive containers<a class="anchor-link" href="#responsive-containers" aria-label="Link to Responsive containers"></a></h2>
    <p>Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply <code>max-width</code>s for each of the higher breakpoints. For example, <code>.container-sm</code> is 100% wide to start until the <code>sm</code> breakpoint is reached, where it will scale up with <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.</p>
    <pre><code class="language-html">&lt;div class=&quot;container-sm&quot;&gt;100% wide until small breakpoint&lt;/div&gt;
    &lt;div class=&quot;container-md&quot;&gt;100% wide until medium breakpoint&lt;/div&gt;
    &lt;div class=&quot;container-lg&quot;&gt;100% wide until large breakpoint&lt;/div&gt;
    &lt;div class=&quot;container-xl&quot;&gt;100% wide until extra large breakpoint&lt;/div&gt;
    &lt;div class=&quot;container-xxl&quot;&gt;100% wide until extra extra large breakpoint&lt;/div&gt;
    </code></pre>
    <h2 id="fluid-containers">Fluid containers<a class="anchor-link" href="#fluid-containers" aria-label="Link to Fluid containers"></a></h2>
    <p>Use <code>.container-fluid</code> for a full width container, spanning the entire width of the viewport.</p>
    <pre><code class="language-html">&lt;div class=&quot;container-fluid&quot;&gt;
      ...
    &lt;/div&gt;
    </code></pre>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in <code>_variables.scss</code>) that powers them:</p>
    <ScssDocs name="container-max-widths" file="scss/_variables.scss" /><p>For more information and examples on how to modify our Sass maps and variables, please refer to <a href="[[docsref:/layout/grid#css]]">the Sass section of the Grid documentation</a>.</p>
    <h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <p>In addition to customizing the Sass, you can also create your own containers with our Sass mixin.</p>
    <pre><code class="language-scss">// Source mixin
    @mixin make-container($padding-x: $container-padding-x) {
      width: 100%;
      padding-right: $padding-x;
      padding-left: $padding-x;
      margin-right: auto;
      margin-left: auto;
    }

    // Usage
    .custom-container {
      @include make-container();
    }
    </code></pre>
  </article>
</template>
