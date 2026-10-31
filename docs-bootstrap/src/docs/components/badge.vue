
<template>
  <article>
    <h1>Badges</h1>
    <p>Documentation and examples for badges, our small count and labeling component.</p>

    <h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units. As of v5, badges no longer have focus or hover styles for links.</p>
    <h3 id="headings">Headings<a class="anchor-link" href="#headings" aria-label="Link to Headings"></a></h3>
    <Example code='<h1>Example heading <span class="badge text-bg-secondary">New</span></h1>
    <h2>Example heading <span class="badge text-bg-secondary">New</span></h2>
    <h3>Example heading <span class="badge text-bg-secondary">New</span></h3>
    <h4>Example heading <span class="badge text-bg-secondary">New</span></h4>
    <h5>Example heading <span class="badge text-bg-secondary">New</span></h5>
    <h6>Example heading <span class="badge text-bg-secondary">New</span></h6>' /><h3 id="buttons">Buttons<a class="anchor-link" href="#buttons" aria-label="Link to Buttons"></a></h3>
    <p>Badges can be used as part of links or buttons to provide a counter.</p>
    <Example code='<button type="button" class="btn btn-primary">
        Notifications <span class="badge text-bg-secondary">4</span>
      </button>' /><p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>
    <p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p>
    <h3 id="positioned">Positioned<a class="anchor-link" href="#positioned" aria-label="Link to Positioned"></a></h3>
    <p>Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.</p>
    <Example code='<button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>' /><p>You can also replace the <code>.badge</code> class with a few more utilities without a count for a more generic indicator.</p>
    <Example code='<button type="button" class="btn btn-primary position-relative">
        Profile
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
      </button>' /><h2 id="background-colors">Background colors<a class="anchor-link" href="#background-colors" aria-label="Link to Background colors"></a></h2>
    <AddedIn version="5.2.0" /><p>Set a <code>background-color</code> with contrasting foreground <code>color</code> with <a href="[[docsref:helpers/color-background]]">our <code>.text-bg-{color}</code> helpers</a>. Previously it was required to manually pair your choice of <a href="[[docsref:/utilities/colors]]"><code>.text-{color}</code></a> and <a href="[[docsref:/utilities/background]]"><code>.bg-{color}</code></a> utilities for styling, which you still may use if you prefer.</p>
    
    <Example :code='data["theme-colors"].map((themeColor) => `<span class="badge text-bg-${themeColor.name}">${themeColor.name}</span>`).join("\n")' /><Callout name="warning-color-assistive-technologies" /><h2 id="pill-badges">Pill badges<a class="anchor-link" href="#pill-badges" aria-label="Link to Pill badges"></a></h2>
    
      <p>Use the <code>.rounded-pill</code> utility class to make badges more rounded with a larger <code>border-radius</code>.</p>
          
      <Example :code='data["theme-colors"].map((themeColor) => `<span class="badge rounded-pill text-bg-${themeColor.name}">${themeColor.name}</span>`).join("\n")' />

      <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on <code>.badge</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="badge-css-vars" file="scss/_badge.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="badge-variables" file="scss/_variables.scss" />
  </article>
</template>

<script setup>
import data from '@data/data.js'
</script>
