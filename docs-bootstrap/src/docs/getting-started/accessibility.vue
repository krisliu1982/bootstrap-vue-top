
<template>
  <article>
    <h1>Accessibility</h1>
    <p>A brief overview of Bootstrap’s features and limitations for the creation of accessible content.</p>

    <p>Bootstrap provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.</p>
    <h2 id="overview-and-limitations">Overview and limitations<a class="anchor-link" href="#overview-and-limitations" aria-label="Link to Overview and limitations"></a></h2>
    <p>The overall accessibility of any project built with Bootstrap depends in large part on the author’s markup, additional styling, and scripting they’ve included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Bootstrap that fulfill <a href="https://www.w3.org/TR/WCAG/"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.2</a> (A/AA/AAA), <a href="https://www.section508.gov/">Section 508</a>, and similar accessibility standards and requirements.</p>
    <h3 id="structural-markup">Structural markup<a class="anchor-link" href="#structural-markup" aria-label="Link to Structural markup"></a></h3>
    <p>Bootstrap’s styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of Bootstrap itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.</p>
    <h3 id="interactive-components">Interactive components<a class="anchor-link" href="#interactive-components" aria-label="Link to Interactive components"></a></h3>
    <p>Bootstrap’s interactive components—such as modal dialogs, dropdown menus, and custom tooltips—are designed to work for touch, mouse, and keyboard users. Through the use of relevant <a href="https://www.w3.org/WAI/standards-guidelines/aria/"><abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).</p>
    <p>Because Bootstrap’s components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.</p>
    <h3 id="color-contrast">Color contrast<a class="anchor-link" href="#color-contrast" aria-label="Link to Color contrast"></a></h3>
    <p>Some combinations of colors that currently make up Bootstrap’s default palette—used throughout the framework for things such as button variations, alert variations, form validation indicators—may lead to <em>insufficient</em> color contrast (below the recommended <a href="https://www.w3.org/TR/WCAG/#contrast-minimum">WCAG 2.2 text color contrast ratio of 4.5:1</a> and the <a href="https://www.w3.org/TR/WCAG/#non-text-contrast">WCAG 2.2 non-text color contrast ratio of 3:1</a>), particularly when used against a light background. Authors are encouraged to test their specific uses of color and, where necessary, manually modify/extend these default colors to ensure adequate color contrast ratios.</p>
    <h3 id="visually-hidden-content">Visually hidden content<a class="anchor-link" href="#visually-hidden-content" aria-label="Link to Visually hidden content"></a></h3>
    <p>Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the <code>.visually-hidden</code> class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.</p>
    <pre><code class="language-html">&lt;p class=&quot;text-danger&quot;&gt;
      &lt;span class=&quot;visually-hidden&quot;&gt;Danger: &lt;/span&gt;
      This action is not reversible
    &lt;/p&gt;
    </code></pre>
    <p>For visually hidden interactive controls, such as traditional “skip” links, use the <code>.visually-hidden-focusable</code> class. This will ensure that the control becomes visible once focused (for sighted keyboard users). <strong>Watch out, compared to the equivalent <code>.sr-only</code> and <code>.sr-only-focusable</code> classes in past versions, Bootstrap 5’s <code>.visually-hidden-focusable</code> is a standalone class, and must not be used in combination with the <code>.visually-hidden</code> class.</strong></p>
    <pre><code class="language-html">&lt;a class=&quot;visually-hidden-focusable&quot; href=&quot;#content&quot;&gt;Skip to main content&lt;/a&gt;
    </code></pre>
    <h3 id="reduced-motion">Reduced motion<a class="anchor-link" href="#reduced-motion" aria-label="Link to Reduced motion"></a></h3>
    <p>Bootstrap includes support for the <a href="https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion"><code>prefers-reduced-motion</code> media feature</a>. In browsers/environments that allow the user to specify their preference for reduced motion, most CSS transition effects in Bootstrap (for instance, when a modal dialog is opened or closed, or the sliding animation in carousels) will be disabled, and meaningful animations (such as spinners) will be slowed down.</p>
    <p>On browsers that support <code>prefers-reduced-motion</code>, and where the user has <em>not</em> explicitly signaled that they’d prefer reduced motion (i.e. where <code>prefers-reduced-motion: no-preference</code>), Bootstrap enables smooth scrolling using the <code>scroll-behavior</code> property.</p>
    <h2 id="additional-resources">Additional resources<a class="anchor-link" href="#additional-resources" aria-label="Link to Additional resources"></a></h2>
    <ul>
    <li><a href="https://www.w3.org/TR/WCAG/">Web Content Accessibility Guidelines (WCAG) 2.2</a></li>
    <li><a href="https://www.a11yproject.com/">The A11Y Project</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">MDN accessibility documentation</a></li>
    <li><a href="https://www.tpgi.com/color-contrast-checker/">Color Contrast Analyser (CCA)</a></li>
    <li><a href="https://github.com/squizlabs/HTML_CodeSniffer">&quot;HTML Codesniffer&quot; bookmarklet for identifying accessibility issues</a></li>
    <li><a href="https://accessibilityinsights.io/">Microsoft Accessibility Insights</a></li>
    <li><a href="https://www.deque.com/axe/">Deque Axe testing tools</a></li>
    <li><a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">Introduction to Web Accessibility</a></li>
    </ul>
  </article>
</template>
