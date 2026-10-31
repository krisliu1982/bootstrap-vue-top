
<template>
  <article>
    <h1>Navs and tabs</h1>
    <p>Documentation and examples for how to use Bootstrap’s included navigation components.</p>

    <h2 id="base-nav">Base nav<a class="anchor-link" href="#base-nav" aria-label="Link to Base nav"></a></h2>
    <p>Navigation available in Bootstrap share general markup and styles, from the base <code>.nav</code> class to the active and disabled states. Swap modifier classes to switch between each style.</p>
    <p>The base <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.</p>
    <Callout>
    <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
    <p>To convey the active state to assistive technologies, use the <code>aria-current</code> attribute — using the <code>page</code> value for current page, or <code>true</code> for the current item in a set.</p>
    </Callout><Example code='<ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><p>Classes are used throughout, so your markup can be super flexible. Use <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because the <code>.nav</code> uses <code>display: flex</code>, the nav links behave the same as nav items would, but without the extra markup.</p>
    <Example code='<nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>' /><h2 id="available-styles">Available styles<a class="anchor-link" href="#available-styles" aria-label="Link to Available styles"></a></h2>
    <p>Change the style of <code>.nav</code>s component with modifiers and utilities. Mix and match as needed, or build your own.</p>
    <h3 id="horizontal-alignment">Horizontal alignment<a class="anchor-link" href="#horizontal-alignment" aria-label="Link to Horizontal alignment"></a></h3>
    <p>Change the horizontal alignment of your nav with <a href="[[docsref:/utilities/flex#justify-content]]">flexbox utilities</a>. By default, navs are left-aligned, but you can easily change them to center or right-aligned.</p>
    <p>Centered with <code>.justify-content-center</code>:</p>
    <Example code='<ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><p>Right-aligned with <code>.justify-content-end</code>:</p>
    <Example code='<ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h3 id="vertical">Vertical<a class="anchor-link" href="#vertical" aria-label="Link to Vertical"></a></h3>
    <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code>.flex-sm-column</code>).</p>
    <Example code='<ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><p>As always, vertical navigation is possible without <code>&lt;ul&gt;</code>s, too.</p>
    <Example code='<nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>' /><h3 id="tabs">Tabs<a class="anchor-link" href="#tabs" aria-label="Link to Tabs"></a></h3>
    <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface. Use them to create tabbable regions with our <a href="#javascript-behavior">tab JavaScript plugin</a>.</p>
    <Example code='<ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h3 id="pills">Pills<a class="anchor-link" href="#pills" aria-label="Link to Pills"></a></h3>
    <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
    <Example code='<ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h3 id="underline">Underline<a class="anchor-link" href="#underline" aria-label="Link to Underline"></a></h3>
    <p>Take that same HTML, but use <code>.nav-underline</code> instead:</p>
    <Example code='<ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h3 id="fill-and-justify">Fill and justify<a class="anchor-link" href="#fill-and-justify" aria-label="Link to Fill and justify"></a></h3>
    <p>Force your <code>.nav</code>’s contents to extend the full available width with one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
    <Example code='<ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Much longer nav link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><p>When using a <code>&lt;nav&gt;</code>-based navigation, you can safely omit <code>.nav-item</code> as only <code>.nav-link</code> is required for styling <code>&lt;a&gt;</code> elements.</p>
    <Example code='<nav class="nav nav-pills nav-fill">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Much longer nav link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>' /><p>For equal-width elements, use <code>.nav-justified</code>. All horizontal space will be occupied by nav links, but unlike the <code>.nav-fill</code> above, every nav item will be the same width.</p>
    <Example code='<ul class="nav nav-pills nav-justified">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Much longer nav link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><p>Similar to the <code>.nav-fill</code> example using a <code>&lt;nav&gt;</code>-based navigation.</p>
    <Example code='<nav class="nav nav-pills nav-justified">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Much longer nav link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>' /><h2 id="working-with-flex-utilities">Working with flex utilities<a class="anchor-link" href="#working-with-flex-utilities" aria-label="Link to Working with flex utilities"></a></h2>
    <p>If you need responsive nav variations, consider using a series of <a href="[[docsref:/utilities/flex]]">flexbox utilities</a>. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.</p>
    <Example code='<nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>' /><h2 id="regarding-accessibility">Regarding accessibility<a class="anchor-link" href="#regarding-accessibility" aria-label="Link to Regarding accessibility"></a></h2>
    <p>If you’re using navs to provide a navigation bar, be sure to add a <code>role=&quot;navigation&quot;</code> to the most logical parent container of the <code>&lt;ul&gt;</code>, or wrap a <code>&lt;nav&gt;</code> element around the whole navigation. Do not add the role to the <code>&lt;ul&gt;</code> itself, as this would prevent it from being announced as an actual list by assistive technologies.</p>
    <p>Note that navigation bars, even if visually styled as tabs with the <code>.nav-tabs</code> class, should <strong>not</strong> be given <code>role=&quot;tablist&quot;</code>, <code>role=&quot;tab&quot;</code> or <code>role=&quot;tabpanel&quot;</code> attributes. These are only appropriate for dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">ARIA Authoring Practices Guide tabs pattern</a>. See <a href="#javascript-behavior">JavaScript behavior</a> for dynamic tabbed interfaces in this section for an example. The <code>aria-current</code> attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding <code>aria-selected=&quot;true&quot;</code> on the active tab.</p>
    <h2 id="using-dropdowns">Using dropdowns<a class="anchor-link" href="#using-dropdowns" aria-label="Link to Using dropdowns"></a></h2>
    <p>Add dropdown menus with a little extra HTML and the <a href="[[docsref:/components/dropdowns#usage]]">dropdowns JavaScript plugin</a>.</p>
    <h3 id="tabs-with-dropdowns">Tabs with dropdowns<a class="anchor-link" href="#tabs-with-dropdowns" aria-label="Link to Tabs with dropdowns"></a></h3>
    <Example code='<ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h3 id="pills-with-dropdowns">Pills with dropdowns<a class="anchor-link" href="#pills-with-dropdowns" aria-label="Link to Pills with dropdowns"></a></h3>
    <Example code='<ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, navs now use local CSS variables on <code>.nav</code>, <code>.nav-tabs</code>, and <code>.nav-pills</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <p>On the <code>.nav</code> base class:</p>
    <ScssDocs name="nav-css-vars" file="scss/_nav.scss" /><p>On the <code>.nav-tabs</code> modifier class:</p>
    <ScssDocs name="nav-tabs-css-vars" file="scss/_nav.scss" /><p>On the <code>.nav-pills</code> modifier class:</p>
    <ScssDocs name="nav-pills-css-vars" file="scss/_nav.scss" /><AddedIn version="5.3.0" /><p>On the <code>.nav-underline</code> modifier class:</p>
    <ScssDocs name="nav-underline-css-vars" file="scss/_nav.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <ScssDocs name="nav-variables" file="scss/_variables.scss" /><h2 id="javascript-behavior">JavaScript behavior<a class="anchor-link" href="#javascript-behavior" aria-label="Link to JavaScript behavior"></a></h2>
    <p>Use the tab JavaScript plugin—include it individually or through the compiled <code>bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content.</p>
    <Example :showMarkup="false" code='
    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
      </div>
    </div>
    ' /><pre><code class="language-html">&lt;ul class=&quot;nav nav-tabs&quot; id=&quot;myTab&quot; role=&quot;tablist&quot;&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link active&quot; id=&quot;home-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#home-tab-pane&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;home-tab-pane&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;profile-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#profile-tab-pane&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;profile-tab-pane&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;contact-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#contact-tab-pane&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;contact-tab-pane&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;disabled-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#disabled-tab-pane&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;disabled-tab-pane&quot; aria-selected=&quot;false&quot; disabled&gt;Disabled&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;myTabContent&quot;&gt;
      &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;home-tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;profile-tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;contact-tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;contact-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;disabled-tab-pane&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;disabled-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <p>To help fit your needs, this works with <code>&lt;ul&gt;</code>-based markup, as shown above, or with any arbitrary “roll your own” markup. Note that if you’re using <code>&lt;nav&gt;</code>, you shouldn’t add <code>role=&quot;tablist&quot;</code> directly to it, as this would override the element’s native role as a navigation landmark. Instead, switch to an alternative element (in the example below, a simple <code>&lt;div&gt;</code>) and wrap the <code>&lt;nav&gt;</code> around it.</p>
    <Example :showMarkup="false" code='
    <nav>
      <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
        <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
      </div>
    </div>
    ' /><pre><code class="language-html">&lt;nav&gt;
      &lt;div class=&quot;nav nav-tabs&quot; id=&quot;nav-tab&quot; role=&quot;tablist&quot;&gt;
        &lt;button class=&quot;nav-link active&quot; id=&quot;nav-home-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#nav-home&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;nav-home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;nav-profile-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#nav-profile&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;nav-profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;nav-contact-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#nav-contact&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;nav-contact&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;nav-disabled-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#nav-disabled&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;nav-disabled&quot; aria-selected=&quot;false&quot; disabled&gt;Disabled&lt;/button&gt;
      &lt;/div&gt;
    &lt;/nav&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;nav-tabContent&quot;&gt;
      &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;nav-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;nav-home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;nav-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;nav-profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;nav-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;nav-contact-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;nav-disabled&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;nav-disabled-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <p>The tabs plugin also works with pills.</p>
    <Example :showMarkup="false" code='
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Contact tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
      </div>
      <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
        <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
      </div>
    </div>
    ' /><pre><code class="language-html">&lt;ul class=&quot;nav nav-pills mb-3&quot; id=&quot;pills-tab&quot; role=&quot;tablist&quot;&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link active&quot; id=&quot;pills-home-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#pills-home&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;pills-home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;pills-profile-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#pills-profile&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;pills-profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;pills-contact-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#pills-contact&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;pills-contact&quot; aria-selected=&quot;false&quot;&gt;Contact&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;pills-disabled-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#pills-disabled&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;pills-disabled&quot; aria-selected=&quot;false&quot; disabled&gt;Disabled&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class=&quot;tab-content&quot; id=&quot;pills-tabContent&quot;&gt;
      &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;pills-contact&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-contact-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;pills-disabled&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;pills-disabled-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <p>And with vertical pills. Ideally, for vertical tabs, you should also add <code>aria-orientation=&quot;vertical&quot;</code> to the tab list container.</p>
    <Example :showMarkup="false" code='
    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
        <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
          <p>This is some placeholder content the <strong>Home tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
          <p>This is some placeholder content the <strong>Profile tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
          <p>This is some placeholder content the <strong>Disabled tab’s</strong> associated content.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
          <p>This is some placeholder content the <strong>Messages tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
          <p>This is some placeholder content the <strong>Settings tab’s</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </div>
      </div>
    </div>
    ' /><pre><code class="language-html">&lt;div class=&quot;d-flex align-items-start&quot;&gt;
      &lt;div class=&quot;nav flex-column nav-pills me-3&quot; id=&quot;v-pills-tab&quot; role=&quot;tablist&quot; aria-orientation=&quot;vertical&quot;&gt;
        &lt;button class=&quot;nav-link active&quot; id=&quot;v-pills-home-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#v-pills-home&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;v-pills-profile-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#v-pills-profile&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;v-pills-disabled-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#v-pills-disabled&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-disabled&quot; aria-selected=&quot;false&quot; disabled&gt;Disabled&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;v-pills-messages-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#v-pills-messages&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-messages&quot; aria-selected=&quot;false&quot;&gt;Messages&lt;/button&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;v-pills-settings-tab&quot; data-bs-toggle=&quot;pill&quot; data-bs-target=&quot;#v-pills-settings&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;v-pills-settings&quot; aria-selected=&quot;false&quot;&gt;Settings&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class=&quot;tab-content&quot; id=&quot;v-pills-tabContent&quot;&gt;
        &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;v-pills-home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-disabled&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-disabled-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-messages-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
        &lt;div class=&quot;tab-pane fade&quot; id=&quot;v-pills-settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;v-pills-settings-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <h3 id="accessibility">Accessibility<a class="anchor-link" href="#accessibility" aria-label="Link to Accessibility"></a></h3>
    <p>Dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">ARIA Authoring Practices Guide tabs pattern</a>, require <code>role=&quot;tablist&quot;</code>, <code>role=&quot;tab&quot;</code>, <code>role=&quot;tabpanel&quot;</code>, and additional <code>aria-</code> attributes in order to convey their structure, functionality, and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using <code>&lt;button&gt;</code> elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location.</p>
    <p>In line with the ARIA Authoring Practices pattern, only the currently active tab receives keyboard focus. When the JavaScript plugin is initialized, it will set <code>tabindex=&quot;-1&quot;</code> on all inactive tab controls. Once the currently active tab has focus, the cursor keys activate the previous/next tab. The <kbd>Home</kbd> and <kbd>End</kbd> keys activate the first and last tabs, respectively. The plugin will change the <a href="https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/">roving <code>tabindex</code></a> accordingly. However, note that the JavaScript plugin does not distinguish between horizontal and vertical tab lists when it comes to cursor key interactions: regardless of the tab list’s orientation, both the up <em>and</em> left cursor go to the previous tab, and down <em>and</em> right cursor go to the next tab.</p>
    <Callout type="warning">
    <p>In general, to facilitate keyboard navigation, it’s recommended to make the tab panels themselves focusable as well, unless the first element containing meaningful content inside the tab panel is already focusable. The JavaScript plugin does not try to handle this aspect—where appropriate, you’ll need to explicitly make your tab panels focusable by adding <code>tabindex=&quot;0&quot;</code> in your markup.</p>
    </Callout><Callout type="danger">
    <p>The tab JavaScript plugin <strong>does not</strong> support tabbed interfaces that contain dropdown menus, as these cause both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.</p>
    </Callout><h3 id="using-data-attributes">Using data attributes<a class="anchor-link" href="#using-data-attributes" aria-label="Link to Using data attributes"></a></h3>
    <p>You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code>data-bs-toggle=&quot;tab&quot;</code> or <code>data-bs-toggle=&quot;pill&quot;</code> on an element. Use these data attributes on <code>.nav-tabs</code> or <code>.nav-pills</code>.</p>
    <pre><code class="language-html">&lt;!-- Nav tabs --&gt;
    &lt;ul class=&quot;nav nav-tabs&quot; id=&quot;myTab&quot; role=&quot;tablist&quot;&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link active&quot; id=&quot;home-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#home&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;home&quot; aria-selected=&quot;true&quot;&gt;Home&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;profile-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#profile&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;profile&quot; aria-selected=&quot;false&quot;&gt;Profile&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;messages-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#messages&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;messages&quot; aria-selected=&quot;false&quot;&gt;Messages&lt;/button&gt;
      &lt;/li&gt;
      &lt;li class=&quot;nav-item&quot; role=&quot;presentation&quot;&gt;
        &lt;button class=&quot;nav-link&quot; id=&quot;settings-tab&quot; data-bs-toggle=&quot;tab&quot; data-bs-target=&quot;#settings&quot; type=&quot;button&quot; role=&quot;tab&quot; aria-controls=&quot;settings&quot; aria-selected=&quot;false&quot;&gt;Settings&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- Tab panes --&gt;
    &lt;div class=&quot;tab-content&quot;&gt;
      &lt;div class=&quot;tab-pane active&quot; id=&quot;home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane&quot; id=&quot;profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane&quot; id=&quot;messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;messages-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane&quot; id=&quot;settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;settings-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <h3 id="via-javascript">Via JavaScript<a class="anchor-link" href="#via-javascript" aria-label="Link to Via JavaScript"></a></h3>
    <p>Enable tabbable tabs via JavaScript (each tab needs to be activated individually):</p>
    <pre><code class="language-js">const triggerTabList = document.querySelectorAll(&#39;#myTab button&#39;)
    triggerTabList.forEach(triggerEl =&gt; {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener(&#39;click&#39;, event =&gt; {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    </code></pre>
    <p>You can activate individual tabs in several ways:</p>
    <pre><code class="language-js">const triggerEl = document.querySelector(&#39;#myTab button[data-bs-target=&quot;#profile&quot;]&#39;)
    bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

    const triggerFirstTabEl = document.querySelector(&#39;#myTab li:first-child button&#39;)
    bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
    </code></pre>
    <h3 id="fade-effect">Fade effect<a class="anchor-link" href="#fade-effect" aria-label="Link to Fade effect"></a></h3>
    <p>To make tabs fade in, add <code>.fade</code> to each <code>.tab-pane</code>. The first tab pane must also have <code>.show</code> to make the initial content visible.</p>
    <pre><code class="language-html">&lt;div class=&quot;tab-content&quot;&gt;
      &lt;div class=&quot;tab-pane fade show active&quot; id=&quot;home&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;home-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;profile&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;profile-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;messages&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;messages-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
      &lt;div class=&quot;tab-pane fade&quot; id=&quot;settings&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;settings-tab&quot; tabindex=&quot;0&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
    </code></pre>
    <h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><p>Activates your content as a tab element.</p>
    <p>You can create a tab instance with the constructor, for example:</p>
    <pre><code class="language-js">const bsTab = new bootstrap.Tab(&#39;#myTab&#39;)
    </code></pre>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s tab.</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td>Static method which allows you to get the tab instance associated with a DOM element, you can use it like this: <code>bootstrap.Tab.getInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td>Static method which returns a tab instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: <code>bootstrap.Tab.getOrCreateInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>show</code></td>
    <td>Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. <strong>Returns to the caller before the tab pane has actually been shown</strong> (i.e. before the <code>shown.bs.tab</code> event occurs).</td>
    </tr>
    </tbody></table>
    </div><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <p>When showing a new tab, the events fire in the following order:</p>
    <ol>
    <li><code>hide.bs.tab</code> (on the current active tab)</li>
    <li><code>show.bs.tab</code> (on the to-be-shown tab)</li>
    <li><code>hidden.bs.tab</code> (on the previous active tab, the same one as for the <code>hide.bs.tab</code> event)</li>
    <li><code>shown.bs.tab</code> (on the newly-active just-shown tab, the same one as for the <code>show.bs.tab</code> event)</li>
    </ol>
    <p>If no tab was already active, then the <code>hide.bs.tab</code> and <code>hidden.bs.tab</code> events will not be fired.</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Event type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>hide.bs.tab</code></td>
    <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
    </tr>
    <tr>
    <td><code>hidden.bs.tab</code></td>
    <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
    </tr>
    <tr>
    <td><code>show.bs.tab</code></td>
    <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
    </tr>
    <tr>
    <td><code>shown.bs.tab</code></td>
    <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
    </tr>
    </tbody></table>
    </div><pre><code class="language-js">const tabEl = document.querySelector(&#39;button[data-bs-toggle=&quot;tab&quot;]&#39;)
    tabEl.addEventListener(&#39;shown.bs.tab&#39;, event =&gt; {
      event.target // newly activated tab
      event.relatedTarget // previous active tab
    })
    </code></pre>
  </article>
</template>
