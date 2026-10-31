
<template>
  <article>
    <h1>Typography</h1>
    <p>Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>

    <h2 id="global-settings">Global settings<a class="anchor-link" href="#global-settings" aria-label="Link to Global settings"></a></h2>
    <p>Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the <a href="[[docsref:/utilities/text]]">textual utility classes</a>.</p>
    <ul>
    <li>Use a <a href="[[docsref:/content/reboot#native-font-stack]]">native font stack</a> that selects the best <code>font-family</code> for each OS and device.</li>
    <li>For a more inclusive and accessible type scale, we use the browser’s default root <code>font-size</code> (typically 16px) so visitors can customize their browser defaults as needed.</li>
    <li>Use the <code>$font-family-base</code>, <code>$font-size-base</code>, and <code>$line-height-base</code> attributes as our typographic base applied to the <code>&lt;body&gt;</code>.</li>
    <li>Set the global link color via <code>$link-color</code>.</li>
    <li>Use <code>$body-bg</code> to set a <code>background-color</code> on the <code>&lt;body&gt;</code> (<code>#fff</code> by default).</li>
    </ul>
    <p>These styles can be found within <code>_reboot.scss</code>, and the global variables are defined in <code>_variables.scss</code>. Make sure to set <code>$font-size-base</code> in <code>rem</code>.</p>
    <h2 id="headings">Headings<a class="anchor-link" href="#headings" aria-label="Link to Headings"></a></h2>
    <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
<div class="table-responsive"><table class="table">
    <thead>
    <tr>
    <th>Heading</th>
    <th>Example</th>
    </tr>
    </thead>
    <tbody><tr>
    <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
    <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
    <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
    <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
    <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
    <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
    <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
    <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
    <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
    <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
    <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
    <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
    </tbody></table>
    </div>
    <pre><code class="language-html">&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;
    </code></pre>
    <p><code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
    <Example code='<p class="h1">h1. Bootstrap heading</p>
    <p class="h2">h2. Bootstrap heading</p>
    <p class="h3">h3. Bootstrap heading</p>
    <p class="h4">h4. Bootstrap heading</p>
    <p class="h5">h5. Bootstrap heading</p>
    <p class="h6">h6. Bootstrap heading</p>' /><h3 id="customizing-headings">Customizing headings<a class="anchor-link" href="#customizing-headings" aria-label="Link to Customizing headings"></a></h3>
    <p>Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.</p>
    <Example code='<h3>
        Fancy display heading
        <small class="text-body-secondary">With faded secondary text</small>
      </h3>' /><h2 id="display-headings">Display headings<a class="anchor-link" href="#display-headings" aria-label="Link to Display headings"></a></h2>
    <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
    <Example :showMarkup="false" code='<div class="display-1 pb-3 mb-3 border-bottom">Display 1</div>
    <div class="display-2 pb-3 mb-3 border-bottom">Display 2</div>
    <div class="display-3 pb-3 mb-3 border-bottom">Display 3</div>
    <div class="display-4 pb-3 mb-3 border-bottom">Display 4</div>
    <div class="display-5 pb-3 mb-3 border-bottom">Display 5</div>
    <div class="display-6">Display 6</div>
    ' />
    <pre><code class="language-html">&lt;h1 class=&quot;display-1&quot;&gt;Display 1&lt;/h1&gt;
&lt;h1 class=&quot;display-2&quot;&gt;Display 2&lt;/h1&gt;
&lt;h1 class=&quot;display-3&quot;&gt;Display 3&lt;/h1&gt;
&lt;h1 class=&quot;display-4&quot;&gt;Display 4&lt;/h1&gt;
&lt;h1 class=&quot;display-5&quot;&gt;Display 5&lt;/h1&gt;
&lt;h1 class=&quot;display-6&quot;&gt;Display 6&lt;/h1&gt;
    </code></pre>
    <p>Display headings are configured via the <code>$display-font-sizes</code> Sass map and two variables, <code>$display-font-weight</code> and <code>$display-line-height</code>.</p>
    <p>Display headings are customizable via two variables, <code>$display-font-family</code> and <code>$display-font-style</code>.</p>
    <ScssDocs name="display-headings" file="scss/_variables.scss" /><h2 id="lead">Lead<a class="anchor-link" href="#lead" aria-label="Link to Lead"></a></h2>
    <p>Make a paragraph stand out by adding <code>.lead</code>.</p>
    <Example code='<p class="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
      </p>' /><h2 id="inline-text-elements">Inline text elements<a class="anchor-link" href="#inline-text-elements" aria-label="Link to Inline text elements"></a></h2>
    <p>Styling for common inline HTML5 elements.</p>
    <Example code='<p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined.</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>' /><p>Beware that those tags should be used for semantic purpose:</p>
    <ul>
    <li><code>&lt;mark&gt;</code> represents text which is marked or highlighted for reference or notation purposes.</li>
    <li><code>&lt;small&gt;</code> represents side-comments and small print, like copyright and legal text.</li>
    <li><code>&lt;s&gt;</code> represents element that are no longer relevant or no longer accurate.</li>
    <li><code>&lt;u&gt;</code> represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.</li>
    </ul>
    <p>If you want to style your text, you should use the following classes instead:</p>
    <ul>
    <li><code>.mark</code> will apply the same styles as <code>&lt;mark&gt;</code>.</li>
    <li><code>.small</code> will apply the same styles as <code>&lt;small&gt;</code>.</li>
    <li><code>.text-decoration-underline</code> will apply the same styles as <code>&lt;u&gt;</code>.</li>
    <li><code>.text-decoration-line-through</code> will apply the same styles as <code>&lt;s&gt;</code>.</li>
    </ul>
    <p>While not shown above, feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance, while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>
    <h2 id="text-utilities">Text utilities<a class="anchor-link" href="#text-utilities" aria-label="Link to Text utilities"></a></h2>
    <p>Change text alignment, transform, style, weight, line-height, decoration and color with our <a href="[[docsref:/utilities/text]]">text utilities</a> and <a href="[[docsref:/utilities/colors]]">color utilities</a>.</p>
    <h2 id="abbreviations">Abbreviations<a class="anchor-link" href="#abbreviations" aria-label="Link to Abbreviations"></a></h2>
    <p>Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
    <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
    <Example code='<p><abbr title="attribute">attr</abbr></p>
    <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>' /><h2 id="blockquotes">Blockquotes<a class="anchor-link" href="#blockquotes" aria-label="Link to Blockquotes"></a></h2>
    <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class=&quot;blockquote&quot;&gt;</code> around any HTML as the quote.</p>
    <Example code='<blockquote class="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>' /><h3 id="naming-a-source">Naming a source<a class="anchor-link" href="#naming-a-source" aria-label="Link to Naming a source"></a></h3>
    <p>The HTML spec requires that blockquote attribution be placed outside the <code>&lt;blockquote&gt;</code>. When providing attribution, wrap your <code>&lt;blockquote&gt;</code> in a <code>&lt;figure&gt;</code> and use a <code>&lt;figcaption&gt;</code> or a block level element (e.g., <code>&lt;p&gt;</code>) with the <code>.blockquote-footer</code> class. Be sure to wrap the name of the source work in <code>&lt;cite&gt;</code> as well.</p>
    <Example code='<figure>
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>' /><h3 id="alignment">Alignment<a class="anchor-link" href="#alignment" aria-label="Link to Alignment"></a></h3>
    <p>Use text utilities as needed to change the alignment of your blockquote.</p>
    <Example code='<figure class="text-center">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>' /><Example code='<figure class="text-end">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>' /><h2 id="lists">Lists<a class="anchor-link" href="#lists" aria-label="Link to Lists"></a></h2>
    <h3 id="unstyled">Unstyled<a class="anchor-link" href="#unstyled" aria-label="Link to Unstyled"></a></h3>
    <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
    <Example code='<ul class="list-unstyled">
        <li>This is a list.</li>
        <li>It appears completely unstyled.</li>
        <li>Structurally, it’s still a list.</li>
        <li>However, this style only applies to immediate child elements.</li>
        <li>Nested lists:
          <ul>
            <li>are unaffected by this style</li>
            <li>will still show a bullet</li>
            <li>and have appropriate left margin</li>
          </ul>
        </li>
        <li>This may still come in handy in some situations.</li>
      </ul>' /><h3 id="inline">Inline<a class="anchor-link" href="#inline" aria-label="Link to Inline"></a></h3>
    <p>Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.</p>
    <Example code='<ul class="list-inline">
        <li class="list-inline-item">This is a list item.</li>
        <li class="list-inline-item">And another one.</li>
        <li class="list-inline-item">But they’re displayed inline.</li>
      </ul>' /><h3 id="description-list-alignment">Description list alignment<a class="anchor-link" href="#description-list-alignment" aria-label="Link to Description list alignment"></a></h3>
    <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>
    <Example code='<dl class="row">
        <dt class="col-sm-3">Description lists</dt>
        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt class="col-sm-3">Term</dt>
        <dd class="col-sm-9">
          <p>Definition for the term.</p>
          <p>And some more placeholder definition text.</p>
        </dd>

        <dt class="col-sm-3">Another term</dt>
        <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

        <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

        <dt class="col-sm-3">Nesting</dt>
        <dd class="col-sm-9">
          <dl class="row">
            <dt class="col-sm-4">Nested definition list</dt>
            <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
          </dl>
        </dd>
      </dl>' /><h2 id="responsive-font-sizes">Responsive font sizes<a class="anchor-link" href="#responsive-font-sizes" aria-label="Link to Responsive font sizes"></a></h2>
    <p>In Bootstrap 5, we’ve enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the <a href="[[docsref:/getting-started/rfs]]">RFS page</a> to find out how this works.</p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="Link to CSS"></a></h2>
    <h3 id="sass-variables">Sass variables<a class="anchor-link" href="#sass-variables" aria-label="Link to Sass variables"></a></h3>
    <p>Headings have some dedicated variables for sizing and spacing.</p>
    <ScssDocs name="headings-variables" file="scss/_variables.scss" /><p>Miscellaneous typography elements covered here and in <a href="[[docsref:/content/reboot]]">Reboot</a> also have dedicated variables.</p>
    <ScssDocs name="type-variables" file="scss/_variables.scss" /><h3 id="sass-mixins">Sass mixins<a class="anchor-link" href="#sass-mixins" aria-label="Link to Sass mixins"></a></h3>
    <p>There are no dedicated mixins for typography, but Bootstrap does use <a href="[[docsref:/getting-started/rfs]]">Responsive Font Sizing (RFS)</a>.</p>
  </article>
</template>
