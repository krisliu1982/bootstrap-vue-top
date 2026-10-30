
<template>
  <article>
    <h1>Icons</h1>
    <p>Guidance and suggestions for using external icon libraries with Bootstrap.</p>

    <p>While Bootstrap doesn’t include an icon set by default, we do have our own comprehensive icon library called Bootstrap Icons. Feel free to use them or any other icon set in your project. We’ve included details for Bootstrap Icons and other preferred icon sets below.</p>
    <p>While most icon sets include multiple file formats, we prefer SVG implementations for their improved accessibility and vector support.</p>
    <h2 id="bootstrap-icons">Bootstrap Icons<a class="anchor-link" href="#bootstrap-icons" aria-label="Link to Bootstrap Icons"></a></h2>
    <p>Bootstrap Icons is a growing library of SVG icons that are designed by <a href="https://github.com/mdo">@mdo</a> and maintained by <a href="https://github.com/orgs/twbs/people">the Bootstrap Team</a>. The beginnings of this icon set come from Bootstrap’s very own components—our forms, carousels, and more. Bootstrap has very few icon needs out of the box, so we didn’t need much. However, once we got going, we couldn’t stop making more.</p>
    <p>Oh, and did we mention they’re completely open source? Licensed under MIT, just like Bootstrap, our icon set is available to everyone.</p>
    <p><a href="[[config:icons]]">Learn more about Bootstrap Icons</a>, including how to install them and recommended usage.</p>
    <h2 id="alternatives">Alternatives<a class="anchor-link" href="#alternatives" aria-label="Link to Alternatives"></a></h2>
    <p>We’ve tested and used these icon sets ourselves as preferred alternatives to Bootstrap Icons.</p>
    <ul>
    {getData('icons').preferred.map((icon) => {
      return (
        <li><a href={icon.website}>{icon.name}</a></li>
      )
    })}
    </ul><h2 id="more-options">More options<a class="anchor-link" href="#more-options" aria-label="Link to More options"></a></h2>
    <p>While we haven’t tried these out ourselves, they do look promising and provide multiple formats, including SVG.</p>
    <ul>
    {getData('icons').more.map((icon) => {
      return (
        <li><a href={icon.website}>{icon.name}</a></li>
      )
    })}
    </ul>
  </article>
</template>
