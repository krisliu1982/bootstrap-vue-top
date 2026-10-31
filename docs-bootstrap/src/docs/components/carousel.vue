
<template>
  <article>
    <h1>Carousel</h1>
    <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <ul>
    <li><p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</p>
    </li>
    <li><p>For performance reasons, <strong>carousels must be manually initialized</strong> using the <a href="#methods">carousel constructor method</a>. Without initialization, some of the event listeners (specifically, the events needed touch/swipe support) will not be registered until a user has explicitly activated a control or indicator.</p>
    <p>The only exception are <a href="#autoplaying-carousels">autoplaying carousels</a> with the <code>data-bs-ride=&quot;carousel&quot;</code> attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, <strong>don’t explicitly initialize the same carousels with the constructor method.</strong></p>
    </li>
    <li><p>Nested carousels are not supported. You should also be aware that carousels in general can often cause usability and accessibility challenges.</p>
    </li>
    </ul>
    <Callout name="info-prefersreducedmotion" /><h2 id="basic-examples">Basic examples<a class="anchor-link" href="#basic-examples" aria-label="Link to Basic examples"></a></h2>
    <p>Here is a basic example of a carousel with three slides. Note the previous/next controls. We recommend using <code>&lt;button&gt;</code> elements, but you can also use <code>&lt;a&gt;</code> elements with <code>role=&quot;button&quot;</code>.</p>
    <Example code='<div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><p>Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</p>
    <p><strong>You must add the <code>.active</code> class to one of the slides</strong>, otherwise the carousel will not be visible. Also be sure to set a unique <code>id</code> on the <code>.carousel</code> for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a <code>data-bs-target</code> attribute (or <code>href</code> for links) that matches the <code>id</code> of the <code>.carousel</code> element.</p>
    <h3 id="indicators">Indicators<a class="anchor-link" href="#indicators" aria-label="Link to Indicators"></a></h3>
    <p>You can add indicators to the carousel, alongside the previous/next controls. The indicators let users jump directly to a particular slide.</p>
    <Example code='<div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h3 id="captions">Captions<a class="anchor-link" href="#captions" aria-label="Link to Captions"></a></h3>
    <p>You can add captions to your slides with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>. They can be easily hidden on smaller viewports, as shown below, with optional <a href="[[docsref:/utilities/display]]">display utilities</a>. We hide them initially with <code>.d-none</code> and bring them back on medium-sized devices with <code>.d-md-block</code>.</p>
    <Example code='<div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h3 id="crossfade">Crossfade<a class="anchor-link" href="#crossfade" aria-label="Link to Crossfade"></a></h3>
    <p>Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add <code>.bg-body</code> or some custom CSS to the <code>.carousel-item</code>s for proper crossfading.</p>
    <Example code='<div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h2 id="autoplaying-carousels">Autoplaying carousels<a class="anchor-link" href="#autoplaying-carousels" aria-label="Link to Autoplaying carousels"></a></h2>
    <p>You can make your carousels autoplay on page load by setting the <code>ride</code> option to <code>carousel</code>. Autoplaying carousels automatically pause while hovered with the mouse. This behavior can be controlled with the <code>pause</code> option. In browsers that support the <a href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a>, the carousel will stop cycling when the webpage is not visible to the user (such as when the browser tab is inactive, or when the browser window is minimized).</p>
    <Callout>
    <p>For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.</p>
    <p>See <a href="https://www.w3.org/TR/WCAG/#pause-stop-hide">WCAG 2.2 Success Criterion 2.2.2 Pause, Stop, Hide</a>.</p>
    </Callout><Example code='<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><p>When the <code>ride</code> option is set to <code>true</code>, rather than <code>carousel</code>, the carousel won’t automatically start to cycle on page load. Instead, it will only start after the first user interaction.</p>
    <Example code='<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h3 id="individual-carousel-item-interval">Individual <code>.carousel-item</code> interval<a class="anchor-link" href="#individual-carousel-item-interval" aria-label="Link to Individual .carousel-item interval"></a></h3>
    <p>Add <code>data-bs-interval=&quot;&quot;</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.</p>
    <Example code='<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h3 id="autoplaying-carousels-without-controls">Autoplaying carousels without controls<a class="anchor-link" href="#autoplaying-carousels-without-controls" aria-label="Link to Autoplaying carousels without controls"></a></h3>
    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.w-100</code> on carousel images to prevent browser default image alignment.</p>
    <Example code='<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
      </div>' /><h2 id="disable-touch-swiping">Disable touch swiping<a class="anchor-link" href="#disable-touch-swiping" aria-label="Link to Disable touch swiping"></a></h2>
    <p>Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the <code>touch</code> option to <code>false</code>.</p>
    <Example code='<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" />
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h2 id="dark-variant">Dark variant<a class="anchor-link" href="#dark-variant" aria-label="Link to Dark variant"></a></h2>
    <DeprecatedIn version="5.3.0" /><p>Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions. Controls are inverted compared to their default white fill with the <code>filter</code> CSS property. Captions and controls have additional Sass variables that customize the <code>color</code> and <code>background-color</code>.</p>
    <CalloutDeprecatedDarkVariants component="carousel" /><Example code='<div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#aaa" background="#f5f5f5" text="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#bbb" background="#eee" text="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <Placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#999" background="#e5e5e5" text="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>' /><h2 id="custom-transition">Custom transition<a class="anchor-link" href="#custom-transition" aria-label="Link to Custom transition"></a></h2>
    <p>The transition duration of <code>.carousel-item</code> can be changed with the <code>$carousel-transition-duration</code> Sass variable before compiling or custom styles if you’re using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (e.g. <code>transition: transform 2s ease, opacity .5s ease-out</code>).</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Variables for all carousels:</p>
    <ScssDocs name="carousel-variables" file="scss/_variables.scss" /><p>Variables for the <a href="#dark-variant">dark carousel</a>:</p>
    <ScssDocs name="carousel-dark-variables" file="scss/_variables.scss" /><h2 id="usage">Usage<a class="anchor-link" href="#usage" aria-label="Link to Usage"></a></h2>
    <h3 id="via-data-attributes">Via data attributes<a class="anchor-link" href="#via-data-attributes" aria-label="Link to Via data attributes"></a></h3>
    <p>Use data attributes to easily control the position of the carousel. <code>data-bs-slide</code> accepts the keywords <code>prev</code> or <code>next</code>, which alters the slide position relative to its current position. Alternatively, use <code>data-bs-slide-to</code> to pass a raw slide index to the carousel <code>data-bs-slide-to=&quot;2&quot;</code>, which shifts the slide position to a particular index beginning with <code>0</code>.</p>
    <h3 id="via-javascript">Via JavaScript<a class="anchor-link" href="#via-javascript" aria-label="Link to Via JavaScript"></a></h3>
    <p>Call carousel manually with:</p>
    <pre><code class="language-js">const carousel = new bootstrap.Carousel(&#39;#myCarousel&#39;)
    </code></pre>
    <h3 id="options">Options<a class="anchor-link" href="#options" aria-label="Link to Options"></a></h3>
    <JsDataAttributes /><div class="table-responsive">
       <table class="table">
    <thead>
    <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>interval</code></td>
    <td>number</td>
    <td><code>5000</code></td>
    <td>The amount of time to delay between automatically cycling an item.</td>
    </tr>
    <tr>
    <td><code>keyboard</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Whether the carousel should react to keyboard events.</td>
    </tr>
    <tr>
    <td><code>pause</code></td>
    <td>string, boolean</td>
    <td><code>&quot;hover&quot;</code></td>
    <td>If set to <code>&quot;hover&quot;</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the carousel won’t pause it. On touch-enabled devices, when set to <code>&quot;hover&quot;</code>, cycling will pause on <code>touchend</code> (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior.</td>
    </tr>
    <tr>
    <td><code>ride</code></td>
    <td>string, boolean</td>
    <td><code>false</code></td>
    <td>If set to <code>true</code>, autoplays the carousel after the user manually cycles the first item. If set to <code>&quot;carousel&quot;</code>, autoplays the carousel on load.</td>
    </tr>
    <tr>
    <td><code>touch</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Whether the carousel should support left/right swipe interactions on touchscreen devices.</td>
    </tr>
    <tr>
    <td><code>wrap</code></td>
    <td>boolean</td>
    <td><code>true</code></td>
    <td>Whether the carousel should cycle continuously or have hard stops.</td>
    </tr>
    </tbody></table>
    </div><h3 id="methods">Methods<a class="anchor-link" href="#methods" aria-label="Link to Methods"></a></h3>
    <Callout name="danger-async-methods" type="danger" /><p>You can create a carousel instance with the carousel constructor, and pass on any additional options. For example, to manually initialize an autoplaying carousel (assuming you’re not using the <code>data-bs-ride=&quot;carousel&quot;</code> attribute in the markup itself) with a specific interval and with touch support disabled, you can use:</p>
    <pre><code class="language-js">const myCarouselElement = document.querySelector(&#39;#myCarousel&#39;)

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false
    })
    </code></pre>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Method</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>cycle</code></td>
    <td>Starts cycling through the carousel items from left to right.</td>
    </tr>
    <tr>
    <td><code>dispose</code></td>
    <td>Destroys an element’s carousel. (Removes stored data on the DOM element)</td>
    </tr>
    <tr>
    <td><code>getInstance</code></td>
    <td>Static method which allows you to get the carousel instance associated to a DOM element. You can use it like this: <code>bootstrap.Carousel.getInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>getOrCreateInstance</code></td>
    <td>Static method which returns a carousel instance associated to a DOM element, or creates a new one in case it wasn’t initialized. You can use it like this: <code>bootstrap.Carousel.getOrCreateInstance(element)</code>.</td>
    </tr>
    <tr>
    <td><code>next</code></td>
    <td>Cycles to the next item. <strong>Returns to the caller before the next item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>nextWhenVisible</code></td>
    <td>Don’t cycle carousel to next when the page, the carousel, or the carousel’s parent aren’t visible. <strong>Returns to the caller before the target item has been shown</strong>.</td>
    </tr>
    <tr>
    <td><code>pause</code></td>
    <td>Stops the carousel from cycling through items.</td>
    </tr>
    <tr>
    <td><code>prev</code></td>
    <td>Cycles to the previous item. <strong>Returns to the caller before the previous item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
    </tr>
    <tr>
    <td><code>to</code></td>
    <td>Cycles the carousel to a particular frame (0 based, similar to an array). <strong>Returns to the caller before the target item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
    </tr>
    </tbody></table>
    </div><h3 id="events">Events<a class="anchor-link" href="#events" aria-label="Link to Events"></a></h3>
    <p>Bootstrap’s carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:</p>
    <ul>
    <li><code>direction</code>: The direction in which the carousel is sliding (either <code>&quot;left&quot;</code> or <code>&quot;right&quot;</code>).</li>
    <li><code>relatedTarget</code>: The DOM element that is being slid into place as the active item.</li>
    <li><code>from</code>: The index of the current item</li>
    <li><code>to</code>: The index of the next item</li>
    </ul>
    <p>All carousel events are fired at the carousel itself (i.e. at the <code>&lt;div class=&quot;carousel&quot;&gt;</code>).</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Event type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>slid.bs.carousel</code></td>
    <td>Fired when the carousel has completed its slide transition.</td>
    </tr>
    <tr>
    <td><code>slide.bs.carousel</code></td>
    <td>Fires immediately when the <code>slide</code> instance method is invoked.</td>
    </tr>
    </tbody></table>
    </div>
    <pre><code class="language-js">const myCarousel = document.getElementById(&#39;myCarousel&#39;)

    myCarousel.addEventListener(&#39;slide.bs.carousel&#39;, event =&gt; {
      // do something...
    })
    </code></pre>
  </article>
</template>
