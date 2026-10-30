
<template>
  <article>
    <h1>RTL</h1>
    <p>Learn how to enable support for right-to-left text in Bootstrap across our layout, components, and utilities.</p>

    <h2 id="get-familiar">Get familiar<a class="anchor-link" href="#get-familiar" aria-label="Link to Get familiar"></a></h2>
    <p>We recommend getting familiar with Bootstrap first by reading through our <a href="[[docsref:/getting-started/introduction]]">Getting Started Introduction page</a>. Once you’ve run through it, continue reading here for how to enable RTL.</p>
    <p>You may also want to read up on <a href="https://rtlcss.com/">the RTLCSS project</a>, as it powers our approach to RTL.</p>
    <Callout type="warning">
    <p><strong>Bootstrap’s RTL feature is still experimental</strong> and will evolve based on user feedback. Spotted something or have an improvement to suggest? <a href="[[config:repo]]/issues/new/choose">Open an issue</a>, we’d love to get your insights.</p>
    </Callout><h2 id="required-html">Required HTML<a class="anchor-link" href="#required-html" aria-label="Link to Required HTML"></a></h2>
    <p>There are two strict requirements for enabling RTL in Bootstrap-powered pages.</p>
    <ol>
    <li>Set <code>dir=&quot;rtl&quot;</code> on the <code>&lt;html&gt;</code> element.</li>
    <li>Add an appropriate <code>lang</code> attribute, like <code>lang=&quot;ar&quot;</code>, on the <code>&lt;html&gt;</code> element.</li>
    </ol>
    <p>From there, you’ll need to include an RTL version of our CSS. For example, here’s the stylesheet for our compiled and minified CSS with RTL enabled:</p>
    <pre><code class="language-html">&lt;link rel=&quot;stylesheet&quot; href=&quot;[[config:cdn.css_rtl]]&quot; integrity=&quot;[[config:cdn.css_rtl_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;
    </code></pre>
    <h3 id="starter-template">Starter template<a class="anchor-link" href="#starter-template" aria-label="Link to Starter template"></a></h3>
    <p>You can see the above requirements reflected in this modified RTL starter template.</p>
    <pre><code class="language-html">&lt;!doctype html&gt;
    &lt;html lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;
      &lt;head&gt;
        &lt;!-- Required meta tags --&gt;
        &lt;meta charset=&quot;utf-8&quot;&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;

        &lt;!-- Bootstrap CSS --&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;[[config:cdn.css_rtl]]&quot; integrity=&quot;[[config:cdn.css_rtl_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;

        &lt;title&gt;مرحبًا بالعالم!&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;مرحبًا بالعالم!&lt;/h1&gt;

        &lt;!-- Optional JavaScript; choose one of the two! --&gt;

        &lt;!-- Option 1: Bootstrap Bundle with Popper --&gt;
        &lt;script src=&quot;[[config:cdn.js_bundle]]&quot; integrity=&quot;[[config:cdn.js_bundle_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;

        &lt;!-- Option 2: Separate Popper and Bootstrap JS --&gt;
        &lt;!--
        &lt;script src=&quot;[[config:cdn.popper]]&quot; integrity=&quot;[[config:cdn.popper_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;[[config:cdn.js]]&quot; integrity=&quot;[[config:cdn.js_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
        --&gt;
      &lt;/body&gt;
    &lt;/html&gt;
    </code></pre>
    <h3 id="rtl-examples">RTL examples<a class="anchor-link" href="#rtl-examples" aria-label="Link to RTL examples"></a></h3>
    <p>Get started with one of our several <a href="[[docsref:/examples/#rtl]]">RTL examples</a>.</p>
    <h2 id="approach">Approach<a class="anchor-link" href="#approach" aria-label="Link to Approach"></a></h2>
    <p>Our approach to building RTL support into Bootstrap comes with two important decisions that impact how we write and use our CSS:</p>
    <ol>
    <li><p><strong>First, we decided to build it with the <a href="https://rtlcss.com/">RTLCSS</a> project.</strong> This gives us some powerful features for managing changes and overrides when moving from LTR to RTL. It also allows us to build two versions of Bootstrap from one codebase.</p>
    </li>
    <li><p><strong>Second, we’ve renamed a handful of directional classes to adopt a logical properties approach.</strong> Most of you have already interacted with logical properties thanks to our flex utilities—they replace direction properties like <code>left</code> and <code>right</code> in favor <code>start</code> and <code>end</code>. That makes the class names and values appropriate for LTR and RTL without any overhead.</p>
    </li>
    </ol>
    <p>  For example, instead of <code>.ml-3</code> for <code>margin-left</code>, use <code>.ms-3</code>.</p>
    <p>Working with RTL, through our source Sass or compiled CSS, shouldn’t be much different from our default LTR though.</p>
    <h2 id="customize-from-source">Customize from source<a class="anchor-link" href="#customize-from-source" aria-label="Link to Customize from source"></a></h2>
    <p>When it comes to <a href="[[docsref:/customize/sass]]">customization</a>, the preferred way is to take advantage of variables, maps, and mixins. This approach works the same for RTL, even if it’s post-processed from the compiled files, thanks to <a href="https://rtlcss.com/learn/getting-started/why-rtlcss/">how RTLCSS works</a>.</p>
    <h3 id="custom-rtl-values">Custom RTL values<a class="anchor-link" href="#custom-rtl-values" aria-label="Link to Custom RTL values"></a></h3>
    <p>Using <a href="https://rtlcss.com/learn/usage-guide/value-directives/">RTLCSS value directives</a>, you can make a variable output a different value for RTL. For example, to decrease the weight for <code>$font-weight-bold</code> throughout the codebase, you may use the <code>/*rtl: {value}*/</code> syntax:</p>
    <pre><code class="language-scss">$font-weight-bold: 700 #{/* rtl:600 */} !default;
    </code></pre>
    <p>Which would output to the following for our default CSS and RTL CSS:</p>
    <pre><code class="language-css">/* bootstrap.css */
    dt {
      font-weight: 700 /* rtl:600 */;
    }

    /* bootstrap.rtl.css */
    dt {
      font-weight: 600;
    }
    </code></pre>
    <h3 id="alternative-font-stack">Alternative font stack<a class="anchor-link" href="#alternative-font-stack" aria-label="Link to Alternative font stack"></a></h3>
    <p>In the case you’re using a custom font, be aware that not all fonts support the non-Latin alphabet. To switch from Pan-European to Arabic family, you may need to use <code>/*rtl:insert: {value}*/</code> in your font stack to modify the names of font families.</p>
    <p>For example, to switch from <code>Helvetica Neue</code> font for LTR to <code>Helvetica Neue Arabic</code> for RTL, your Sass code could look like this:</p>
    <pre><code class="language-scss">$font-family-sans-serif:
      Helvetica Neue #{&quot;/* rtl:insert:Arabic */&quot;},
      // Cross-platform generic font family (default user interface font)
      system-ui,
      // Safari for macOS and iOS (San Francisco)
      -apple-system,
      // Chrome &lt; 56 for macOS (San Francisco)
      BlinkMacSystemFont,
      // Windows
      &quot;Segoe UI&quot;,
      // Android
      Roboto,
      // Basic web fallback
      Arial,
      // Linux
      &quot;Noto Sans&quot;,
      // Sans serif fallback
      sans-serif,
      // Emoji fonts
      &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot; !default;
    </code></pre>
    <h3 id="ltr-and-rtl-at-the-same-time">LTR and RTL at the same time<a class="anchor-link" href="#ltr-and-rtl-at-the-same-time" aria-label="Link to LTR and RTL at the same time"></a></h3>
    <p>Need both LTR and RTL on the same page? Thanks to <a href="https://rtlcss.com/learn/usage-guide/string-map/">RTLCSS String Maps</a>, this is pretty straightforward. Wrap your <code>@import</code>s with a class, and set a custom rename rule for RTLCSS:</p>
    <pre><code class="language-scss">/* rtl:begin:options: {
      &quot;autoRename&quot;: true,
      &quot;stringMap&quot;:[ {
        &quot;name&quot;: &quot;ltr-rtl&quot;,
        &quot;priority&quot;: 100,
        &quot;search&quot;: [&quot;ltr&quot;],
        &quot;replace&quot;: [&quot;rtl&quot;],
        &quot;options&quot;: {
          &quot;scope&quot;: &quot;*&quot;,
          &quot;ignoreCase&quot;: false
        }
      } ]
    } */
    .ltr {
      @import &quot;../node_modules/bootstrap/scss/bootstrap&quot;;
    }
    /*rtl:end:options*/
    </code></pre>
    <p>After running Sass then RTLCSS, each selector in your CSS files will be prepended by <code>.ltr</code>, and <code>.rtl</code> for RTL files. Now you’re able to use both files on the same page, and simply use <code>.ltr</code> or <code>.rtl</code> on your components wrappers to use one or the other direction.</p>
    <Callout type="warning">
    <p><strong>Edge cases and known limitations</strong> to consider when working with a combined LTR and RTL implementation:</p>
    <ol>
    <li>When switching <code>.ltr</code> and <code>.rtl</code>, make sure you add <code>dir</code> and <code>lang</code> attributes accordingly.</li>
    <li>Loading both files can be a real performance bottleneck: consider some <a href="[[docsref:/customize/optimize]]">optimization</a>, and maybe try to <a href="https://www.filamentgroup.com/lab/load-css-simpler/">load one of those files asynchronously</a>.</li>
    <li>Nesting styles this way will prevent our <code>form-validation-state()</code> mixin from working as intended, thus require you tweak it a bit by yourself. <a href="https://github.com/twbs/bootstrap/issues/31223">See #31223</a>.</li>
    </ol>
    </Callout><p>Do you want to automate this process and address several edge cases involving both directions within a single stylesheet? Then, consider using <a href="https://github.com/elchininet/postcss-rtlcss">PostCSS RTLCSS</a> as a <a href="https://github.com/postcss/postcss">PostCSS</a> plugin to process your source files. PostCSS RTLCSS uses <a href="https://rtlcss.com">RTLCSS</a> behind the scenes to manage the direction flipping process, but it separates the flipped declarations into rules with a different prefix for LTR and RTL, something that allows you to have both directions within the same stylesheet file. By doing this, you can switch between LTR and RTL orientations by simply changing the <code>dir</code> of the page (or even by modifying a specific class if you configure the plugin accordingly).</p>
    <Callout type="warning">
    <p><strong>Important things to take into account</strong> when using PostCSS RTLCSS to build a combined LTR and RTL implementation:</p>
    <ol>
    <li>It is recommended that you add the <code>dir</code> attribute to the <code>html</code> element. This way, the entire page will be affected when you change the direction. Also, make sure you add the <code>lang</code> attribute accordingly.</li>
    <li>Having a single bundle with both directions will increase the size of the final stylesheet (on average, by 20%-30%): consider some <a href="[[docsref:/customize/optimize]]">optimization</a>.</li>
    <li>Take into account that PostCSS RTLCSS is not compatible with <code>/* rtl:remove */</code> directives because it doesn’t remove any CSS rule. You should replace your <code>/* rtl:remove */</code>, <code>/* rtl:begin:remove */</code> and <code>/* rtl:end:remove */</code> directives with <code>/* rtl:freeze */</code>, <code>/* rtl:begin:freeze */</code> and <code>/* rtl:end:freeze */</code> directives respectively. These directives will prefix the targeted rules or declarations with the current direction but will not create an RTL counterpart (same result as the <code>remove</code> ones in RTLCSS).</li>
    </ol>
    </Callout><h2 id="the-breadcrumb-case">The breadcrumb case<a class="anchor-link" href="#the-breadcrumb-case" aria-label="Link to The breadcrumb case"></a></h2>
    <p>The <a href="[[docsref:/components/breadcrumb]]#dividers">breadcrumb separator</a> is the only case requiring its own brand-new variable— namely <code>$breadcrumb-divider-flipped</code> —defaulting to <code>$breadcrumb-divider</code>.</p>
    <h2 id="additional-resources">Additional resources<a class="anchor-link" href="#additional-resources" aria-label="Link to Additional resources"></a></h2>
    <ul>
    <li><a href="https://rtlcss.com/">RTLCSS</a></li>
    <li><a href="https://rtlstyling.com/posts/rtl-styling">RTL Styling 101</a></li>
    </ul>
  </article>
</template>
