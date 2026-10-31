
<template>
  <article>
    <h1>Navbar</h1>
    <p>Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.</p>

    <h2 id="how-it-works">How it works<a class="anchor-link" href="#how-it-works" aria-label="Link to How it works"></a></h2>
    <p>Here’s what you need to know before getting started with the navbar:</p>
    <ul>
    <li>Navbars require a wrapping <code>.navbar</code> with <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> for responsive collapsing and <a href="#color-schemes">color scheme</a> classes.</li>
    <li>Navbars and their contents are fluid by default. Change the <a href="#containers">container</a> to limit their horizontal width in different ways.</li>
    <li>Use our <a href="/utilities/spacing">spacing</a> and <a href="/utilities/flex">flex</a> utility classes for controlling spacing and alignment within navbars.</li>
    <li>Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.</li>
    <li>Ensure accessibility by using a <code>&lt;nav&gt;</code> element or, if using a more generic element such as a <code>&lt;div&gt;</code>, add a <code>role=&quot;navigation&quot;</code> to every navbar to explicitly identify it as a landmark region for users of assistive technologies.</li>
    <li>Indicate the current item by using <code>aria-current=&quot;page&quot;</code> for the current page or <code>aria-current=&quot;true&quot;</code> for the current item in a set.</li>
    <li><strong>New in v5.2.0:</strong> Navbars can be themed with CSS variables that are scoped to the <code>.navbar</code> base class. <code>.navbar-light</code> has been deprecated and <code>.navbar-dark</code> has been rewritten to override CSS variables instead of adding additional styles.</li>
    </ul>
    <Callout name="info-prefersreducedmotion" /><h2 id="supported-content">Supported content<a class="anchor-link" href="#supported-content" aria-label="Link to Supported content"></a></h2>
    <p>Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:</p>
    <ul>
    <li><code>.navbar-brand</code> for your company, product, or project name.</li>
    <li><code>.navbar-nav</code> for a full-height and lightweight navigation (including support for dropdowns).</li>
    <li><code>.navbar-toggler</code> for use with our collapse plugin and other <a href="#responsive-behaviors">navigation toggling</a> behaviors.</li>
    <li>Flex and spacing utilities for any form controls and actions.</li>
    <li><code>.navbar-text</code> for adding vertically centered strings of text.</li>
    <li><code>.collapse.navbar-collapse</code> for grouping and hiding navbar contents by a parent breakpoint.</li>
    <li>Add an optional <code>.navbar-nav-scroll</code> to set a <code>max-height</code> and <a href="#scrolling">scroll expanded navbar content</a>.</li>
    </ul>
    <p>Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the <code>lg</code> (large) breakpoint.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>' /><p>This example uses <a href="/utilities/background">background</a> (<code>bg-body-tertiary</code>) and <a href="/utilities/spacing">spacing</a> (<code>me-auto</code>, <code>mb-2</code>, <code>mb-lg-0</code>, <code>me-2</code>) utility classes.</p>
    <h3 id="brand">Brand<a class="anchor-link" href="#brand" aria-label="Link to Brand"></a></h3>
    <p>The <code>.navbar-brand</code> can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.</p>
    <h4 id="text">Text</h4>
    <p>Add your text within an element with the <code>.navbar-brand</code> class.</p>
    <Example code='<!-- As a link -->
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>

      <!-- As a heading -->
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>' /><h4 id="image">Image</h4>
    <p>You can replace the text within the <code>.navbar-brand</code> with an <code>&lt;img&gt;</code>.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/docs/${getConfig().docs_version}/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
          </a>
        </div>
      </nav>' /><h4 id="image-and-text">Image and text</h4>
    <p>You can also make use of some additional utilities to add an image and text at the same time. Note the addition of <code>.d-inline-block</code> and <code>.align-text-top</code> on the <code>&lt;img&gt;</code>.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/docs/${getConfig().docs_version}/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            Bootstrap
          </a>
        </div>
      </nav>' /><h3 id="nav">Nav<a class="anchor-link" href="#nav" aria-label="Link to Nav"></a></h3>
    <p>Navbar navigation links build on our <code>.nav</code> options with their own modifier class and require the use of <a href="#toggler">toggler classes</a> for proper responsive styling. <strong>Navigation in navbars will also grow to occupy as much horizontal space as possible</strong> to keep your navbar contents securely aligned.</p>
    <p>Add the <code>.active</code> class on <code>.nav-link</code> to indicate the current page.</p>
    <p>Please note that you should also add the <code>aria-current</code> attribute on the active <code>.nav-link</code>.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>' /><p>And because we use classes for our navs, you can avoid the list-based approach entirely if you like.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>' /><p>You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for <code>.nav-item</code> and <code>.nav-link</code> as shown below.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>' /><h3 id="forms">Forms<a class="anchor-link" href="#forms" aria-label="Link to Forms"></a></h3>
    <p>Place various form controls and components within a navbar:</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>' /><p>Immediate child elements of <code>.navbar</code> use flex layout and will default to <code>justify-content: space-between</code>. Use additional <a href="/utilities/flex">flex utilities</a> as needed to adjust this behavior.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>' /><p>Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the <code>&lt;form&gt;</code> element as the container and save some HTML.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <form class="container-fluid">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </form>
      </nav>' /><p>Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button">Main button</button>
          <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
      </nav>' /><h3 id="text-1">Text<a class="anchor-link" href="#text-1" aria-label="Link to Text"></a></h3>
    <p>Navbars may contain bits of text with the help of <code>.navbar-text</code>. This class adjusts vertical alignment and horizontal spacing for strings of text.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>' /><p>Mix and match with other components and utilities as needed.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar w/ text</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>' /><h2 id="color-schemes">Color schemes<a class="anchor-link" href="#color-schemes" aria-label="Link to Color schemes"></a></h2>
    <Callout type="warning">
    <p><strong>New dark navbars in v5.3.0 —</strong> We’ve deprecated <code>.navbar-dark</code> in favor of the new <code>data-bs-theme=&quot;dark&quot;</code>. Add <code>data-bs-theme=&quot;dark&quot;</code> to the <code>.navbar</code> to enable a component-specific color mode. <a href="/customize/color-modes">Learn more about our color modes.</a></p>
    <hr>
    <p><strong>New in v5.2.0  —</strong> Navbar theming is now powered by CSS variables and <code>.navbar-light</code> has been deprecated. CSS variables are applied to <code>.navbar</code>, defaulting to the “light” appearance, and can be overridden with <code>.navbar-dark</code>.</p>
    </Callout><p>Navbar themes are easier than ever thanks to Bootstrap’s combination of Sass and CSS variables. The default is our “light navbar” for use with light background colors, but you can also apply <code>data-bs-theme=&quot;dark&quot;</code> to the <code>.navbar</code> parent for dark background colors. Then, customize with <code>.bg-*</code> and additional utilities.</p>
    <Example :showMarkup="false" code='
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    ' />
    <pre><code class="language-html">&lt;nav class=&quot;navbar bg-dark border-bottom border-body&quot; data-bs-theme=&quot;dark&quot;&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;

&lt;nav class=&quot;navbar bg-primary&quot; data-bs-theme=&quot;dark&quot;&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;

&lt;nav class=&quot;navbar&quot; style=&quot;background-color: #e3f2fd;&quot; data-bs-theme=&quot;light&quot;&gt;
  &lt;!-- Navbar content --&gt;
&lt;/nav&gt;
    </code></pre>
    <h2 id="containers">Containers<a class="anchor-link" href="#containers" aria-label="Link to Containers"></a></h2>
    <p>Although it’s not required, you can wrap a navbar in a <code>.container</code> to center it on a page–though note that an inner container is still required. Or you can add a container inside the <code>.navbar</code> to only center the contents of a <a href="#placement">fixed or static top navbar</a>.</p>
    <Example code='<div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </div>' /><p>Use any of the responsive containers to change how wide the content in your navbar is presented.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-md">
          <a class="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>' /><h2 id="placement">Placement<a class="anchor-link" href="#placement" aria-label="Link to Placement"></a></h2>
    <p>Use our <a href="/utilities/position">position utilities</a> to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there).</p>
    <p>Fixed navbars use <code>position: fixed</code>, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., <code>padding-top</code> on the <code>&lt;body&gt;</code>) to prevent overlap with other elements.</p>
    <Example code='<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Default</a>
        </div>
      </nav>' /><Example code='<nav class="navbar fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fixed top</a>
        </div>
      </nav>' /><Example code='<nav class="navbar fixed-bottom bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fixed bottom</a>
        </div>
      </nav>' /><Example code='<nav class="navbar sticky-top bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sticky top</a>
        </div>
      </nav>' /><Example code='<nav class="navbar sticky-bottom bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sticky bottom</a>
        </div>
      </nav>' /><h2 id="scrolling">Scrolling<a class="anchor-link" href="#scrolling" aria-label="Link to Scrolling"></a></h2>
    <p>Add <code>.navbar-nav-scroll</code> to a <code>.navbar-nav</code> (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at <code>75vh</code> (or 75% of the viewport height), but you can override that with the local CSS custom property <code>--bs-navbar-height</code> or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.</p>
    <p>Please note that this behavior comes with a potential drawback of <code>overflow</code>—when setting <code>overflow-y: auto</code> (required to scroll the content here), <code>overflow-x</code> is the equivalent of <code>auto</code>, which will crop some horizontal content.</p>
    <p>Here’s an example navbar using <code>.navbar-nav-scroll</code> with <code>style=&quot;--bs-scroll-height: 100px;&quot;</code>, with some extra margin utilities for optimum spacing.</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar scroll</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Link</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>' /><h2 id="responsive-behaviors">Responsive behaviors<a class="anchor-link" href="#responsive-behaviors" aria-label="Link to Responsive behaviors"></a></h2>
    <p>Navbars can use <code>.navbar-toggler</code>, <code>.navbar-collapse</code>, and <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl}</code> classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.</p>
    <p>For navbars that never collapse, add the <code>.navbar-expand</code> class on the navbar. For navbars that always collapse, don’t add any <code>.navbar-expand</code> class.</p>
    <h3 id="toggler">Toggler<a class="anchor-link" href="#toggler" aria-label="Link to Toggler"></a></h3>
    <p>Navbar togglers are left-aligned by default, but should they follow a sibling element like a <code>.navbar-brand</code>, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.</p>
    <p>With no <code>.navbar-brand</code> shown at the smallest breakpoint:</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Hidden brand</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>' /><p>With a brand name shown on the left and toggler on the right:</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>' /><p>With a toggler on the left and brand name on the right:</p>
    <Example code='<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>' /><h3 id="external-content">External content<a class="anchor-link" href="#external-content" aria-label="Link to External content"></a></h3>
    <p>Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the <code>.navbar</code> . Because our plugin works on the <code>id</code> and <code>data-bs-target</code> matching, that’s easily done!</p>
    <Example code='<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div class="bg-dark p-4">
          <h5 class="text-body-emphasis h4">Collapsed content</h5>
          <span class="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>' /><p>When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes <em>before</em> the toggler in the document’s structure. We also recommend making sure that the toggler has the <code>aria-controls</code> attribute, pointing to the <code>id</code> of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.</p>
    <h3 id="offcanvas">Offcanvas<a class="anchor-link" href="#offcanvas" aria-label="Link to Offcanvas"></a></h3>
    <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the <a href="/components/offcanvas">offcanvas component</a>. We extend both the offcanvas default styles and use our <code>.navbar-expand-*</code> classes to create a dynamic and flexible navigation sidebar.</p>
    <p>In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the <code>.navbar-expand-*</code> class entirely.</p>
    <Example code='<nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Offcanvas navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>' /><p>To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like <code>lg</code>, use <code>.navbar-expand-lg</code>.</p>
    <pre><code class="language-html">&lt;nav class=&quot;navbar navbar-expand-lg bg-body-tertiary fixed-top&quot;&gt;
  &lt;a class=&quot;navbar-brand&quot; href=&quot;#&quot;&gt;Offcanvas navbar&lt;/a&gt;
  &lt;button class=&quot;navbar-toggler&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#navbarOffcanvasLg&quot; aria-controls=&quot;navbarOffcanvasLg&quot; aria-label=&quot;Toggle navigation&quot;&gt;
    &lt;span class=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class=&quot;offcanvas offcanvas-end&quot; tabindex=&quot;-1&quot; id=&quot;navbarOffcanvasLg&quot; aria-labelledby=&quot;navbarOffcanvasLgLabel&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/nav&gt;
    </code></pre>
    <p>When using offcanvas in a dark navbar, be aware that you may need to have a dark background on the offcanvas content to avoid the text becoming illegible. In the example below, we add <code>.navbar-dark</code> and <code>.bg-dark</code> to the <code>.navbar</code>, <code>.text-bg-dark</code> to the <code>.offcanvas</code>, <code>.dropdown-menu-dark</code> to <code>.dropdown-menu</code>, and <code>.btn-close-white</code> to <code>.btn-close</code> for proper styling with a dark offcanvas.</p>
    <Example code='<nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h3>
    <AddedIn version="5.2.0" /><p>As part of Bootstrap’s evolving CSS variables approach, navbars now use local CSS variables on <code>.navbar</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
    <ScssDocs name="navbar-css-vars" file="scss/_navbar.scss" /><p>Some additional CSS variables are also present on <code>.navbar-nav</code>:</p>
    <ScssDocs name="navbar-nav-css-vars" file="scss/_navbar.scss" /><p>Customization through CSS variables can be seen on the <code>.navbar-dark</code> class where we override specific values without adding duplicate CSS selectors.</p>
    <ScssDocs name="navbar-dark-css-vars" file="scss/_navbar.scss" /><h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Variables for all navbars:</p>
    <ScssDocs name="navbar-variables" file="scss/_variables.scss" /><p>Variables for the <a href="#color-schemes">dark navbar</a>:</p>
    <ScssDocs name="navbar-dark-variables" file="scss/_variables.scss" /><h3 id="sass-loops">Sass loops<a class="anchor-link" href="#sass-loops" aria-label="Link to Sass loops"></a></h3>
    <p><a href="#responsive-behaviors">Responsive navbar expand/collapse classes</a> (e.g., <code>.navbar-expand-lg</code>) are combined with the <code>$breakpoints</code> map and generated through a loop in <code>scss/_navbar.scss</code>.</p>
    <ScssDocs name="navbar-expand-loop" file="scss/_navbar.scss" />
  </article>
</template>
