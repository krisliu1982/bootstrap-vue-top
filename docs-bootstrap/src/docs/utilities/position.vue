
<template>
  <article>
    <h1>Position</h1>
    <p>Use these shorthand utilities for quickly configuring the position of an element.</p>

    <h2 id="position-values">Position values<a class="anchor-link" href="#position-values" aria-label="Link to Position values"></a></h2>
    <p>Quick positioning classes are available, though they are not responsive.</p>
    <pre><code class="language-html">&lt;div class=&quot;position-static&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-relative&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-absolute&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-fixed&quot;&gt;...&lt;/div&gt;
&lt;div class=&quot;position-sticky&quot;&gt;...&lt;/div&gt;
    </code></pre>
    <h2 id="arrange-elements">Arrange elements<a class="anchor-link" href="#arrange-elements" aria-label="Link to Arrange elements"></a></h2>
    <p>Arrange elements easily with the edge positioning utilities. The format is <code>{property}-{position}</code>.</p>
    <p>Where <em>property</em> is one of:</p>
    <ul>
    <li><code>top</code> - for the vertical <code>top</code> position</li>
    <li><code>start</code> - for the horizontal <code>left</code> position (in LTR)</li>
    <li><code>bottom</code> - for the vertical <code>bottom</code> position</li>
    <li><code>end</code> - for the horizontal <code>right</code> position (in LTR)</li>
    </ul>
    <p>Where <em>position</em> is one of:</p>
    <ul>
    <li><code>0</code> - for <code>0</code> edge position</li>
    <li><code>50</code> - for <code>50%</code> edge position</li>
    <li><code>100</code> - for <code>100%</code> edge position</li>
    </ul>
    <p>(You can add more position values by adding entries to the <code>$position-values</code> Sass map variable.)</p>
    <Example class="bd-example-position-utils" code='<div class="position-relative">
        <div class="position-absolute top-0 start-0"></div>
        <div class="position-absolute top-0 end-0"></div>
        <div class="position-absolute top-50 start-50"></div>
        <div class="position-absolute bottom-50 end-50"></div>
        <div class="position-absolute bottom-0 start-0"></div>
        <div class="position-absolute bottom-0 end-0"></div>
      </div>' /><h2 id="center-elements">Center elements<a class="anchor-link" href="#center-elements" aria-label="Link to Center elements"></a></h2>
    <p>In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.</p>
    <p>This class applies the transformations <code>translateX(-50%)</code> and <code>translateY(-50%)</code> to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.</p>
    <Example class="bd-example-position-utils" code='<div class="position-relative">
        <div class="position-absolute top-0 start-0 translate-middle"></div>
        <div class="position-absolute top-0 start-50 translate-middle"></div>
        <div class="position-absolute top-0 start-100 translate-middle"></div>
        <div class="position-absolute top-50 start-0 translate-middle"></div>
        <div class="position-absolute top-50 start-50 translate-middle"></div>
        <div class="position-absolute top-50 start-100 translate-middle"></div>
        <div class="position-absolute top-100 start-0 translate-middle"></div>
        <div class="position-absolute top-100 start-50 translate-middle"></div>
        <div class="position-absolute top-100 start-100 translate-middle"></div>
      </div>' /><p>By adding <code>.translate-middle-x</code> or <code>.translate-middle-y</code> classes, elements can be positioned only in horizontal or vertical direction.</p>
    <Example class="bd-example-position-utils" code='<div class="position-relative">
        <div class="position-absolute top-0 start-0"></div>
        <div class="position-absolute top-0 start-50 translate-middle-x"></div>
        <div class="position-absolute top-0 end-0"></div>
        <div class="position-absolute top-50 start-0 translate-middle-y"></div>
        <div class="position-absolute top-50 start-50 translate-middle"></div>
        <div class="position-absolute top-50 end-0 translate-middle-y"></div>
        <div class="position-absolute bottom-0 start-0"></div>
        <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
        <div class="position-absolute bottom-0 end-0"></div>
      </div>' /><h2 id="examples">Examples<a class="anchor-link" href="#examples" aria-label="Link to Examples"></a></h2>
    <p>Here are some real life examples of these classes:</p>
    <Example class="bd-example-position-examples d-flex justify-content-around align-items-center" code='<button type="button" class="btn btn-primary position-relative">
        Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
      </button>

      <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
        Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
      </div>

      <button type="button" class="btn btn-primary position-relative">
        Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
      </button>' /><p>You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the <code>$position-values</code> variable.</p>
    <Example class="bd-example-position-examples" code='<div class="position-relative m-4">
        <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
          <div class="progress-bar" style="width: 50%"></div>
        </div>
        <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
        <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
        <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
      </div>' /><h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-maps">Sass maps<a class="anchor-link" href="#sass-maps" aria-label="Link to Sass maps"></a></h3>
    <p>Default position utility values are declared in a Sass map, then used to generate our utilities.</p>
    <ScssDocs name="position-map" file="scss/_variables.scss" /><h3 id="sass-utilities-api">Sass utilities API<a class="anchor-link" href="#sass-utilities-api" aria-label="Link to Sass utilities API"></a></h3>
    <p>Position utilities are declared in our utilities API in <code>scss/_utilities.scss</code>. <a href="[[docsref:/utilities/api#using-the-api]]">Learn how to use the utilities API.</a></p>
    <ScssDocs name="utils-position" file="scss/_utilities.scss" />
  </article>
</template>
