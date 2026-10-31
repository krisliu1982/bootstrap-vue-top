
<template>
  <article>
    <h1>Browsers and devices</h1>
    <p>Learn about the browsers and devices, from modern to old, that are supported by Bootstrap, including known quirks and bugs for each.</p>

    <h2 id="supported-browsers">Supported browsers<a class="anchor-link" href="#supported-browsers" aria-label="Link to Supported browsers"></a></h2>
    <p>Bootstrap supports the <strong>latest, stable releases</strong> of all major browsers and platforms.</p>
    <p>Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Bootstrap should (in most cases) display and function correctly in these browsers as well. More specific support information is provided below.</p>
    <p>You can find our supported range of browsers and their versions <a href="https://github.com/twbs/bootstrap/blob/v5.3.8/.browserslistrc">in our <code>.browserslistrc file</code></a>:</p>
    <CodeWrapper code="# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
not kaios <= 2.5 # fix floating label issues in Firefox (see https://github.com/postcss/autoprefixer/issues/1533)" lang="plaintext" />
    <p>We use <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a> to handle intended browser support via CSS prefixes, which uses <a href="https://github.com/browserslist/browserslist">Browserslist</a> to manage these browser versions. Consult their documentation for how to integrate these tools into your projects.</p>
    <h3 id="mobile-devices">Mobile devices<a class="anchor-link" href="#mobile-devices" aria-label="Link to Mobile devices"></a></h3>
    <p>Generally speaking, Bootstrap supports the latest versions of each major platform’s default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile’s Turbo mode, UC Browser Mini, Amazon Silk) are not supported.</p>
    <div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th></th>
    <th>Chrome</th>
    <th>Firefox</th>
    <th>Safari</th>
    <th>Android Browser &amp; WebView</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><strong>Android</strong></td>
    <td>Supported</td>
    <td>Supported</td>
    <td><span class="text-body-secondary">&mdash;</span></td>
    <td>v6.0+</td>
    </tr>
    <tr>
    <td><strong>iOS</strong></td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    <td><span class="text-body-secondary">&mdash;</span></td>
    </tr>
    </tbody></table>
    </div><h3 id="desktop-browsers">Desktop browsers<a class="anchor-link" href="#desktop-browsers" aria-label="Link to Desktop browsers"></a></h3>
    <p>Similarly, the latest versions of most desktop browsers are supported.</p>
    <div class="table-responsive">
    <table class="table">
    <thead>
    <tr>
    <th></th>
    <th>Chrome</th>
    <th>Firefox</th>
    <th>Microsoft Edge</th>
    <th>Opera</th>
    <th>Safari</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><strong>Mac</strong></td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    </tr>
    <tr>
    <td><strong>Windows</strong></td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    <td>Supported</td>
    <td><span class="text-body-secondary">&mdash;</span></td>
    </tr>
    </tbody></table>
    </div><p>For Firefox, in addition to the latest normal stable release, we also support the latest <a href="https://www.mozilla.org/en-US/firefox/enterprise/">Extended Support Release (ESR)</a> version of Firefox.</p>
    <p>Unofficially, Bootstrap should look and behave well enough in Chromium and Chrome for Linux, and Firefox for Linux, though they are not officially supported.</p>
    <h2 id="internet-explorer">Internet Explorer<a class="anchor-link" href="#internet-explorer" aria-label="Link to Internet Explorer"></a></h2>
    <p>Internet Explorer is not supported. <strong>If you require Internet Explorer support, please use Bootstrap v4.</strong></p>
    <h2 id="modals-and-dropdowns-on-mobile">Modals and dropdowns on mobile<a class="anchor-link" href="#modals-and-dropdowns-on-mobile" aria-label="Link to Modals and dropdowns on mobile"></a></h2>
    <h3 id="overflow-and-scrolling">Overflow and scrolling<a class="anchor-link" href="#overflow-and-scrolling" aria-label="Link to Overflow and scrolling"></a></h3>
    <p>Support for <code>overflow: hidden;</code> on the <code>&lt;body&gt;</code> element is quite limited in iOS and Android. To that end, when you scroll past the top or bottom of a modal in either of those devices’ browsers, the <code>&lt;body&gt;</code> content will begin to scroll. See <a href="https://issues.chromium.org/issues/40301599">Chrome bug #175502</a> (fixed in Chrome v40) and <a href="https://bugs.webkit.org/show_bug.cgi?id=153852">WebKit bug #153852</a>.</p>
    <h3 id="ios-text-fields-and-scrolling">iOS text fields and scrolling<a class="anchor-link" href="#ios-text-fields-and-scrolling" aria-label="Link to iOS text fields and scrolling"></a></h3>
    <p>As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the boundary of a textual <code>&lt;input&gt;</code> or a <code>&lt;textarea&gt;</code>, the <code>&lt;body&gt;</code> content underneath the modal will be scrolled instead of the modal itself. See <a href="https://bugs.webkit.org/show_bug.cgi?id=153856">WebKit bug #153856</a>.</p>
    <h3 id="navbar-dropdowns">Navbar Dropdowns<a class="anchor-link" href="#navbar-dropdowns" aria-label="Link to Navbar Dropdowns"></a></h3>
    <p>The <code>.dropdown-backdrop</code> element isn’t used on iOS in the nav because of the complexity of z-indexing. Thus, to close dropdowns in navbars, you must directly click the dropdown element (or <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile">any other element which will fire a click event in iOS</a>).</p>
    <h2 id="browser-zooming">Browser zooming<a class="anchor-link" href="#browser-zooming" aria-label="Link to Browser zooming"></a></h2>
    <p>Page zooming inevitably presents rendering artifacts in some components, both in Bootstrap and the rest of the web. Depending on the issue, we may be able to fix it (search first and then open an issue if need be). However, we tend to ignore these as they often have no direct solution other than hacky workarounds.</p>
    <h2 id="validators">Validators<a class="anchor-link" href="#validators" aria-label="Link to Validators"></a></h2>
    <p>In order to provide the best possible experience to old and buggy browsers, Bootstrap uses <a href="http://browserhacks.com/">CSS browser hacks</a> in several places to target special CSS to certain browser versions in order to work around bugs in the browsers themselves. These hacks understandably cause CSS validators to complain that they are invalid. In a couple places, we also use bleeding-edge CSS features that aren’t yet fully standardized, but these are used purely for progressive enhancement.</p>
    <p>These validation warnings don’t matter in practice since the non-hacky portion of our CSS does fully validate and the hacky portions don’t interfere with the proper functioning of the non-hacky portion, hence why we deliberately ignore these particular warnings.</p>
    <p>Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to our inclusion of a workaround for <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">a certain Firefox bug</a>.</p>
  </article>
</template>
