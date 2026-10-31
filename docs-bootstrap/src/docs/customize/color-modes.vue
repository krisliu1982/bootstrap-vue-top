
<template>
  <article>
    <h1>Color modes</h1>
    <p>Bootstrap now supports color modes, or themes, as of v5.3.0. Explore our default light color mode and the new dark mode, or create your own using our styles as your template.</p>

    <Callout>
    <p><strong>Try it yourself!</strong> Download the source code and working demo for using Bootstrap with Stylelint, and the color modes from the <a href="https://github.com/twbs/examples/tree/main/color-modes">twbs/examples repository</a>. You can also <a href="https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index.html">open the example in StackBlitz</a>.</p>
    </Callout><h2 id="dark-mode">Dark mode<a class="anchor-link" href="#dark-mode" aria-label="Link to Dark mode"></a></h2>
    <p><strong>Bootstrap now supports color modes, starting with dark mode!</strong> With v5.3.0 you can implement your own color mode toggler (see below for an example from Bootstrap’s docs) and apply the different color modes as you see fit. We support a light mode (default) and now dark mode. Color modes can be toggled globally on the <code>&lt;html&gt;</code> element, or on specific components and elements, thanks to the <code>data-bs-theme</code> attribute.</p>
    <p>Alternatively, you can also switch to a media query implementation thanks to our color mode mixin—see <a href="#building-with-sass">the usage section for details</a>. Heads up though—this eliminates your ability to change themes on a per-component basis as shown below.</p>
    <h2 id="example">Example<a class="anchor-link" href="#example" aria-label="Link to Example"></a></h2>
    <p>For example, to change the color mode of a dropdown menu, add <code>data-bs-theme=&quot;light&quot;</code> or <code>data-bs-theme=&quot;dark&quot;</code> to the parent <code>.dropdown</code>. Now, no matter the global color mode, these dropdowns will display with the specified theme value.</p>
    <Example class="d-flex justify-content-between" code='<div class="dropdown" data-bs-theme="light">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
          Default dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>

      <div class="dropdown" data-bs-theme="dark">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
          Dark dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>' /><h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <ul>
    <li><p>As shown above, color mode styles are controlled by the <code>data-bs-theme</code> attribute. This attribute can be applied to the <code>&lt;html&gt;</code> element, or to any other element or Bootstrap component. If applied to the <code>&lt;html&gt;</code> element, it will apply to everything. If applied to a component or element, it will be scoped to that specific component or element.</p>
    </li>
    <li><p>For each color mode you wish to support, you’ll need to add new overrides for the shared global CSS variables. We do this already in our <code>_root.scss</code> stylesheet for dark mode, with light mode being the default values. In writing color mode specific styles, use the mixin:</p>
    <pre><code class="language-scss">// Color mode variables in _root.scss
@include color-mode(dark) {
  // CSS variable overrides here...
}
    </code></pre>
    </li>
    <li><p>We use a custom <code>_variables-dark.scss</code> to power those shared global CSS variable overrides for dark mode. This file isn’t required for your own custom color modes, but it’s required for our dark mode for two reasons. First, it’s better to have a single place to reset global colors. Second, some Sass variables had to be overridden for background images embedded in our CSS for accordions, form components, and more.</p>
    </li>
    </ul>
    <h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <h3 id="enable-dark-mode">Enable dark mode<a class="anchor-link" href="#enable-dark-mode" aria-label="Link to Enable dark mode"></a></h3>
    <p>Enable the built in dark color mode across your entire project by adding the <code>data-bs-theme=&quot;dark&quot;</code> attribute to the <code>&lt;html&gt;</code> element. This will apply the dark color mode to all components and elements, other than those with a specific <code>data-bs-theme</code> attribute applied. Building on the <a href="[[docsref:/getting-started/introduction#quick-start]]">quick start template</a>:</p>
    <pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot; data-bs-theme=&quot;dark&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;Bootstrap demo&lt;/title&gt;
    &lt;link href=&quot;[[config:cdn.css]]&quot; rel=&quot;stylesheet&quot; integrity=&quot;[[config:cdn.css_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
    &lt;script src=&quot;[[config:cdn.js_bundle]]&quot; integrity=&quot;[[config:cdn.js_bundle_hash]]&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <p>Bootstrap does not yet ship with a built-in color mode picker, but you can use the one from our own documentation if you like. <a href="#javascript">Learn more in the JavaScript section.</a></p>
    <h3 id="building-with-sass">Building with Sass<a class="anchor-link" href="#building-with-sass" aria-label="Link to Building with Sass"></a></h3>
    <p>Our new dark mode option is available to use for all users of Bootstrap, but it’s controlled via data attributes instead of media queries and does not automatically toggle your project’s color mode. You can disable our dark mode entirely via Sass by changing <code>$enable-dark-mode</code> to <code>false</code>.</p>
    <p>We use a custom Sass mixin, <code>color-mode()</code>, to help you control <em>how</em> color modes are applied. By default, we use a <code>data</code> attribute approach, allowing you to create more user-friendly experiences where your visitors can choose to have an automatic dark mode or control their preference (like in our own docs here). This is also an easy and scalable way to add different themes and more custom color modes beyond light and dark.</p>
    <p>In case you want to use media queries and only make color modes automatic, you can change the mixin’s default type via Sass variable. Consider the following snippet and its compiled CSS output.</p>
    <pre><code class="language-scss">$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
    </code></pre>
    <p>Outputs to:</p>
    <pre><code class="language-css">[data-bs-theme=dark] .element {
  color: var(--bs-primary-text-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}
    </code></pre>
    <p>And when setting to <code>media-query</code>:</p>
    <pre><code class="language-scss">$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
    </code></pre>
    <p>Outputs to:</p>
    <pre><code class="language-css">@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
    </code></pre>
    <h2 id="custom-color-modes">Custom color modes<a class="anchor-link" href="#custom-color-modes" aria-label="Link to Custom color modes"></a></h2>
    <p>While the primary use case for color modes is light and dark mode, custom color modes are also possible. Create your own <code>data-bs-theme</code> selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed. We opted to create a separate <code>_variables-dark.scss</code> stylesheet to house Bootstrap’s dark mode specific Sass variables, but that’s not required for you.</p>
    <p>For example, you can create a “blue theme” with the selector <code>data-bs-theme=&quot;blue&quot;</code>. In your custom Sass or CSS file, add the new selector and override any global or component CSS variables as needed. If you’re using Sass, you can also use Sass’s functions within your CSS variable overrides.</p>
    <ScssDocs name="custom-color-mode" file="site/src/scss/_content.scss" /><Example :showMarkup="false" code='<div class="docs-example text-body bg-body" data-bs-theme="blue">
      <div class="h4">Example blue theme</div>
      <p>Some paragraph text to show how the blue theme might look with written copy.</p>

      <hr class="my-4"/>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonCustom" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCustom">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>' />
    <pre><code class="language-html">&lt;div data-bs-theme=&quot;blue&quot;&gt;
  ...
&lt;/div&gt;
    </code></pre>
    <h2 id="javascript">JavaScript<a class="anchor-link" href="#javascript" aria-label="Link to JavaScript"></a></h2>
    <p>To allow visitors or users to toggle color modes, you’ll need to create a toggle element to control the <code>data-bs-theme</code> attribute on the root element, <code>&lt;html&gt;</code>. We’ve built a toggler in our documentation that initially defers to a user’s current system color mode, but provides an option to override that and pick a specific color mode.</p>
    <p>Here’s a look at the JavaScript that powers it. Feel free to inspect our own documentation navbar to see how it’s implemented using HTML and CSS from our own components. It is suggested to include the JavaScript at the top of your page to reduce potential screen flickering during reloading of your site. Note that if you decide to use media queries for your color modes, your JavaScript may need to be modified or removed if you prefer an implicit control.</p>
    <CodeWrapper code="/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#docs-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#docs-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value=&quot;${theme}&quot;]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()" lang="javascript" />
    <h2 id="adding-theme-colors">Adding theme colors<a class="anchor-link" href="#adding-theme-colors" aria-label="Link to Adding theme colors"></a></h2>
    <p>Adding a new color in <code>$theme-colors</code> is not enough for some of our components like <a href="[[docsref:/components/alerts]]">alerts</a> and <a href="[[docsref:/components/list-group]]">list groups</a>. New colors must also be defined in <code>$theme-colors-text</code>, <code>$theme-colors-bg-subtle</code>, and <code>$theme-colors-border-subtle</code> for light theme; but also in <code>$theme-colors-text-dark</code>, <code>$theme-colors-bg-subtle-dark</code>, and <code>$theme-colors-border-subtle-dark</code> for dark theme.</p>
    <p>This is a manual process because Sass cannot generate its own Sass variables from an existing variable or map. In future versions of Bootstrap, we&#39;ll revisit this setup to reduce the duplication.</p>
    <pre><code class="language-scss">// Required
@import &quot;functions&quot;;
@import &quot;variables&quot;;
@import &quot;variables-dark&quot;;

// Add a custom color to $theme-colors
$custom-colors: (
  &quot;custom-color&quot;: #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import &quot;maps&quot;;
@import &quot;mixins&quot;;
@import &quot;utilities&quot;;

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: (&quot;custom-color&quot;: #712cf9);
$custom-colors-bg-subtle: (&quot;custom-color&quot;: #e1d2fe);
$custom-colors-border-subtle: (&quot;custom-color&quot;: #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: (&quot;custom-color&quot;: #e1d2f2);
$custom-colors-bg-subtle-dark: (&quot;custom-color&quot;: #8951fa);
$custom-colors-border-subtle-dark: (&quot;custom-color&quot;: #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import &quot;root&quot;;
@import &quot;reboot&quot;;
// etc
    </code></pre>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <p>Dozens of root level CSS variables are repeated as overrides for dark mode. These are scoped to the color mode selector, which defaults to <code>data-bs-theme</code> but <a href="#building-with-sass">can be configured</a> to use a <code>prefers-color-scheme</code> media query. Use these variables as a guideline for generating your own new color modes.</p>
    <ScssDocs name="root-dark-mode-vars" file="scss/_root.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>CSS variables for our dark color mode are partially generated from dark mode specific Sass variables in <code>_variables-dark.scss</code>. This also includes some custom overrides for changing the colors of embedded SVGs used throughout our components.</p>
    <ScssDocs name="sass-dark-mode-vars" file="scss/_variables-dark.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <p>Styles for dark mode, and any custom color modes you create, can be scoped appropriately to the <code>data-bs-theme</code> attribute selector or media query with the customizable <code>color-mode()</code> mixin. See the <a href="#building-with-sass">Sass usage section</a> for more details.</p>
    <ScssDocs name="color-mode-mixin" file="scss/mixins/_color-mode.scss" />
  </article>
</template>
