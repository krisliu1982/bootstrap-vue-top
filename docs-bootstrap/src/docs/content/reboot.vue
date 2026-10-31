
<template>
  <article>
    <h1>Reboot</h1>
    <p>Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.</p>

    <h2 id="approach">Approach<a class="anchor-link" href="#approach" aria-label="Link to Approach"></a></h2>
    <p>Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some <code>&lt;table&gt;</code> styles for a simpler baseline and later provide <code>.table</code>, <code>.table-bordered</code>, and more.</p>
    <p>Here are our guidelines and reasons for choosing what to override in Reboot:</p>
    <ul>
    <li>Update some browser default values to use <code>rem</code>s instead of <code>em</code>s for scalable component spacing.</li>
    <li>Avoid <code>margin-top</code>. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of <code>margin</code> is a simpler mental model.</li>
    <li>For easier scaling across device sizes, block elements should use <code>rem</code>s for <code>margin</code>s.</li>
    <li>Keep declarations of <code>font</code>-related properties to a minimum, using <code>inherit</code> whenever possible.</li>
    </ul>
    <h2 id="css-variables">CSS variables<a class="anchor-link" href="#css-variables" aria-label="Link to CSS variables"></a></h2>
    <AddedIn version="5.2.0"/><p>With v5.1.1, we standardized our required <code>@import</code>s across all our CSS bundles (including <code>bootstrap.css</code>, <code>bootstrap-reboot.css</code>, and <code>bootstrap-grid.css</code>) to include <code>_root.scss</code>. This adds <code>:root</code> level CSS variables to all bundles, regardless of how many of them are used in that bundle. Ultimately Bootstrap 5 will continue to see more <a href="[[docsref:/customize/css-variables]]">CSS variables</a> added over time, in order to provide more real-time customization without the need to always recompile Sass. Our approach is to take our source Sass variables and transform them into CSS variables. That way, even if you don’t use CSS variables, you still have all the power of Sass. <strong>This is still in-progress and will take time to fully implement.</strong></p>
    <p>For example, consider these <code>:root</code> CSS variables for common <code>&lt;body&gt;</code> styles:</p>
    <ScssDocs name="root-body-variables" file="scss/_root.scss" /><p>In practice, those variables are then applied in Reboot like so:</p>
    <ScssDocs name="reboot-body-rules" file="scss/_reboot.scss" /><p>Which allows you to make real-time customizations however you like:</p>
    <pre><code class="language-html">&lt;body style=&quot;--bs-body-color: #333;&quot;&gt;
  &lt;!-- ... --&gt;
&lt;/body&gt;
    </code></pre>
    <h2 id="page-defaults">Page defaults<a class="anchor-link" href="#page-defaults" aria-label="Link to Page defaults"></a></h2>
    <p>The <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> elements are updated to provide better page-wide defaults. More specifically:</p>
    <ul>
    <li>The <code>box-sizing</code> is globally set on every element—including <code>*::before</code> and <code>*::after</code>, to <code>border-box</code>. This ensures that the declared width of element is never exceeded due to padding or border.<ul>
    <li>No base <code>font-size</code> is declared on the <code>&lt;html&gt;</code>, but <code>16px</code> is assumed (the browser default). <code>font-size: 1rem</code> is applied on the <code>&lt;body&gt;</code> for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. This browser default can be overridden by modifying the <code>$font-size-root</code> variable.</li>
    </ul>
    </li>
    <li>The <code>&lt;body&gt;</code> also sets a global <code>font-family</code>, <code>font-weight</code>, <code>line-height</code>, and <code>color</code>. This is inherited later by some form elements to prevent font inconsistencies.</li>
    <li>For safety, the <code>&lt;body&gt;</code> has a declared <code>background-color</code>, defaulting to <code>#fff</code>.</li>
    </ul>
    <h2 id="native-font-stack">Native font stack<a class="anchor-link" href="#native-font-stack" aria-label="Link to Native font stack"></a></h2>
    <p>Bootstrap utilizes a “native font stack” or “system font stack” for optimum text rendering on every device and OS. These system fonts have been designed specifically with today’s devices in mind, with improved rendering on screens, variable font support, and more. Read more about <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/">native font stacks in this <em>Smashing Magazine</em> article</a>.</p>
    <pre><code class="language-scss">$font-family-sans-serif:
// Cross-platform generic font family (default user interface font)
system-ui,
// Safari for macOS and iOS (San Francisco)
-apple-system,
// Windows
&quot;Segoe UI&quot;,
// Android
Roboto,
// older macOS and iOS
&quot;Helvetica Neue&quot;,
// Linux
&quot;Noto Sans&quot;,
&quot;Liberation Sans&quot;,
// Basic web fallback
Arial,
// Sans serif fallback
sans-serif,
// Emoji fonts
&quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot; !default;
    </code></pre>
    <p>Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered as multicolored pictographs. Their appearance will vary, depending on the style used in the browser/platform’s native emoji font, and they won’t be affected by any CSS <code>color</code> styles.</p>
    <p>This <code>font-family</code> is applied to the <code>&lt;body&gt;</code> and automatically inherited globally throughout Bootstrap. To switch the global <code>font-family</code>, update <code>$font-family-base</code> and recompile Bootstrap.</p>
    <h2 id="headings">Headings<a class="anchor-link" href="#headings" aria-label="Link to Headings"></a></h2>
    <p>All heading elements—<code>&lt;h1&gt;</code>—<code>&lt;h6&gt;</code> have their <code>margin-top</code> removed, <code>margin-bottom: .5rem</code> set, and <code>line-height</code> tightened. While headings inherit their <code>color</code> by default, you can also override it via optional CSS variable, <code>--bs-heading-color</code>.</p>
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
    </div><h2 id="paragraphs">Paragraphs<a class="anchor-link" href="#paragraphs" aria-label="Link to Paragraphs"></a></h2>
    <p>All <code>&lt;p&gt;</code> elements have their <code>margin-top</code> removed and <code>margin-bottom: 1rem</code> set for easy spacing.</p>
    <Example code='<p>This is an example paragraph.</p>' /><h2 id="links">Links<a class="anchor-link" href="#links" aria-label="Link to Links"></a></h2>
    <p>Links have a default <code>color</code> and underline applied. While links change on <code>:hover</code>, they don’t change based on whether someone <code>:visited</code> the link. They also receive no special <code>:focus</code> styles.</p>
    <Example code='<a href="#">This is an example link</a>' /><p>As of v5.3.x, link <code>color</code> is set using <code>rgba()</code> and new <code>-rgb</code> CSS variables, allowing for easy customization of link color opacity. Change the link color opacity with the <code>--bs-link-opacity</code> CSS variable:</p>
    <Example code='<a href="#" style="--bs-link-opacity: .5">This is an example link</a>' /><p>Placeholder links—those without an <code>href</code>—are targeted with a more specific selector and have their <code>color</code> and <code>text-decoration</code> reset to their default values.</p>
    <Example code='<a>This is a placeholder link</a>' /><h2 id="horizontal-rules">Horizontal rules<a class="anchor-link" href="#horizontal-rules" aria-label="Link to Horizontal rules"></a></h2>
    <p>The <code>&lt;hr&gt;</code> element has been simplified. Similar to browser defaults, <code>&lt;hr&gt;</code>s are styled via <code>border-top</code>, have a default <code>opacity: .25</code>, and automatically inherit their <code>border-color</code> via <code>color</code>, including when <code>color</code> is set via the parent. They can be modified with text, border, and opacity utilities.</p>
    <Example code='<hr>

      <div class="text-success">
        <hr>
      </div>

      <hr class="border border-danger border-2 opacity-50">
      <hr class="border border-primary border-3 opacity-75">' /><h2 id="lists">Lists<a class="anchor-link" href="#lists" aria-label="Link to Lists"></a></h2>
    <p>All lists—<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;dl&gt;</code>—have their <code>margin-top</code> removed and a <code>margin-bottom: 1rem</code>. Nested lists have no <code>margin-bottom</code>. We’ve also reset the <code>padding-left</code> on <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> elements.</p>
    <div class="bd-example">
    * All lists have their top margin removed
    * And their bottom margin normalized
    * Nested lists have no bottom margin
      * This way they have a more even appearance
      * Particularly when followed by more list items
    * The left padding has also been reset<ol>
    <li>Here’s an ordered list</li>
    <li>With a few list items</li>
    <li>It has the same overall look</li>
    <li>As the previous unordered list</li>
    </ol>
    </div><p>For simpler styling, clear hierarchy, and better spacing, description lists have updated <code>margin</code>s. <code>&lt;dd&gt;</code>s reset <code>margin-left</code> to <code>0</code> and add <code>margin-bottom: .5rem</code>. <code>&lt;dt&gt;</code>s are <strong>bolded</strong>.</p>
    <Example :showMarkup="false" code='<dl>
      <dt>Description lists</dt>
      <dd>A description list is perfect for defining terms.</dd>
      <dt>Term</dt>
      <dd>Definition for the term.</dd>
      <dd>A second definition for the same term.</dd>
      <dt>Another term</dt>
      <dd>Definition for this other term.</dd>
    </dl>
    ' /><h2 id="inline-code">Inline code<a class="anchor-link" href="#inline-code" aria-label="Link to Inline code"></a></h2>
    <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML angle brackets.</p>
    <Example code='For example, <code>&lt;section&gt;</code> should be wrapped as inline.' /><h2 id="code-blocks">Code blocks<a class="anchor-link" href="#code-blocks" aria-label="Link to Code blocks"></a></h2>
    <p>Use <code>&lt;pre&gt;</code>s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. The <code>&lt;pre&gt;</code> element is reset to remove its <code>margin-top</code> and use <code>rem</code> units for its <code>margin-bottom</code>.</p>
    <Example code='<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code></pre>' /><h2 id="variables">Variables<a class="anchor-link" href="#variables" aria-label="Link to Variables"></a></h2>
    <p>For indicating variables use the <code>&lt;var&gt;</code> tag.</p>
    <Example code='<var>y</var> = <var>m</var><var>x</var> + <var>b</var>' /><h2 id="user-input">User input<a class="anchor-link" href="#user-input" aria-label="Link to User input"></a></h2>
    <p>Use the <code>&lt;kbd&gt;</code> to indicate input that is typically entered via keyboard.</p>
    <Example code='To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
    To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>' /><h2 id="sample-output">Sample output<a class="anchor-link" href="#sample-output" aria-label="Link to Sample output"></a></h2>
    <p>For indicating sample output from a program use the <code>&lt;samp&gt;</code> tag.</p>
    <Example code='<samp>This text is meant to be treated as sample output from a computer program.</samp>' /><h2 id="tables">Tables<a class="anchor-link" href="#tables" aria-label="Link to Tables"></a></h2>
    <p>Tables are slightly adjusted to style <code>&lt;caption&gt;</code>s, collapse borders, and ensure consistent <code>text-align</code> throughout. Additional changes for borders, padding, and more come with <a href="[[docsref:/content/tables]]">the <code>.table</code> class</a>.</p>
    <Example code='<table>
        <caption>
          This is an example table, and this is its caption to describe the contents.
        </caption>
        <thead>
          <tr>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </table>' /><h2 id="forms">Forms<a class="anchor-link" href="#forms" aria-label="Link to Forms"></a></h2>
    <p>Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:</p>
    <ul>
    <li><code>&lt;fieldset&gt;</code>s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.</li>
    <li><code>&lt;legend&gt;</code>s, like fieldsets, have also been restyled to be displayed as a heading of sorts.</li>
    <li><code>&lt;label&gt;</code>s are set to <code>display: inline-block</code> to allow <code>margin</code> to be applied.</li>
    <li><code>&lt;input&gt;</code>s, <code>&lt;select&gt;</code>s, <code>&lt;textarea&gt;</code>s, and <code>&lt;button&gt;</code>s are mostly addressed by Normalize, but Reboot removes their <code>margin</code> and sets <code>line-height: inherit</code>, too.</li>
    <li><code>&lt;textarea&gt;</code>s are modified to only be resizable vertically as horizontal resizing often “breaks” page layout.</li>
    <li><code>&lt;button&gt;</code>s and <code>&lt;input&gt;</code> button elements have <code>cursor: pointer</code> when <code>:not(:disabled)</code>.</li>
    </ul>
    <p>These changes, and more, are demonstrated below.</p>
    <Callout name="warning-input-support" type="warning" /><Example :showMarkup="false" code='<form>
      <fieldset>
        <legend>Example legend</legend>
        <p>
          <label for="input">Example input</label>
          <input type="text" id="input" placeholder="Example input"/>
        </p>
        <p>
          <label for="email">Example email</label>
          <input type="email" id="email" placeholder="test@example.com"/>
        </p>
        <p>
          <label for="tel">Example telephone</label>
          <input type="tel" id="tel"/>
        </p>
        <p>
          <label for="url">Example url</label>
          <input type="url" id="url"/>
        </p>
        <p>
          <label for="number">Example number</label>
          <input type="number" id="number"/>
        </p>
        <p>
          <label for="search">Example search</label>
          <input type="search" id="search"/>
        </p>
        <p>
          <label for="range">Example range</label>
          <input type="range" id="range" min="0" max="10"/>
        </p>
        <p>
          <label for="file">Example file input</label>
          <input type="file" id="file"/>
        </p>
        <p>
          <label for="select">Example select</label>
          <select id="select">
            <option value="">Choose...</option>
            <optgroup label="Option group 1">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </optgroup>
            <optgroup label="Option group 2">
              <option value="">Option 4</option>
              <option value="">Option 5</option>
              <option value="">Option 6</option>
            </optgroup>
          </select>
        </p>
        <p>
          <label>
            <input type="checkbox" value=""/>
            Check this checkbox
          </label>
        </p>
        <p>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
            Option one is this and that
          </label>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
            Option two is something else that’s also super long to demonstrate the wrapping of these fancy form controls.
          </label>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
            Option three is disabled
          </label>
        </p>
        <p>
          <label for="textarea">Example textarea</label>
          <textarea id="textarea" rows="3"></textarea>
        </p>
        <p>
          <label for="date">Example date</label>
          <input type="date" id="date"/>
        </p>
        <p>
          <label for="time">Example time</label>
          <input type="time" id="time"/>
        </p>
        <p>
          <label for="password">Example password</label>
          <input type="password" id="password"/>
        </p>
        <p>
          <label for="datetime-local">Example datetime-local</label>
          <input type="datetime-local" id="datetime-local"/>
        </p>
        <p>
          <label for="week">Example week</label>
          <input type="week" id="week"/>
        </p>
        <p>
          <label for="month">Example month</label>
          <input type="month" id="month"/>
        </p>
        <p>
          <label for="color">Example color</label>
          <input type="color" id="color"/>
        </p>
        <p>
          <label for="output">Example output</label>
          <output name="result" id="output">100</output>
        </p>
        <p>
          <button type="submit">Button submit</button>
          <input type="submit" value="Input submit button"/>
          <input type="reset" value="Input reset button"/>
          <input type="button" value="Input button"/>
        </p>
        <p>
          <button type="submit" disabled>Button submit</button>
          <input type="submit" value="Input submit button" disabled/>
          <input type="reset" value="Input reset button" disabled/>
          <input type="button" value="Input button" disabled/>
        </p>
      </fieldset>
    </form>' /><h3 id="pointers-on-buttons">Pointers on buttons<a class="anchor-link" href="#pointers-on-buttons" aria-label="Link to Pointers on buttons"></a></h3>
    <p>Reboot includes an enhancement for <code>role=&quot;button&quot;</code> to change the default cursor to <code>pointer</code>. Add this attribute to elements to help indicate elements are interactive. This role isn’t necessary for <code>&lt;button&gt;</code> elements, which get their own <code>cursor</code> change.</p>
    <Example code='<span role="button" tabindex="0">Non-button element button</span>' /><h2 id="misc-elements">Misc elements<a class="anchor-link" href="#misc-elements" aria-label="Link to Misc elements"></a></h2>
    <h3 id="address">Address<a class="anchor-link" href="#address" aria-label="Link to Address"></a></h3>
    <p>The <code>&lt;address&gt;</code> element is updated to reset the browser default <code>font-style</code> from <code>italic</code> to <code>normal</code>. <code>line-height</code> is also now inherited, and <code>margin-bottom: 1rem</code> has been added. <code>&lt;address&gt;</code>s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with <code>&lt;br&gt;</code>.</p>
    <Example :showMarkup="false" code='<address>
        <strong>ACME Corporation</strong><br/>
        1123 Fictional St,<br/>
        San Francisco, CA 94103<br/>
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>

      <address>
        <strong>Full Name</strong><br/>
        <a href="mailto:first.last@example.com">first.last@example.com</a>
      </address>' /><h3 id="blockquote">Blockquote<a class="anchor-link" href="#blockquote" aria-label="Link to Blockquote"></a></h3>
    <p>The default <code>margin</code> on blockquotes is <code>1em 40px</code>, so we reset that to <code>0 0 1rem</code> for something more consistent with other elements.</p>
    <Example :showMarkup="false" code='<figure>
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>' /><h3 id="inline-elements">Inline elements<a class="anchor-link" href="#inline-elements" aria-label="Link to Inline elements"></a></h3>
    <p>The <code>&lt;abbr&gt;</code> element receives basic styling to make it stand out amongst paragraph text.</p>
    <Example :showMarkup="false" code='The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
    ' /><h3 id="summary">Summary<a class="anchor-link" href="#summary" aria-label="Link to Summary"></a></h3>
    <p>The default <code>cursor</code> on summary is <code>text</code>, so we reset that to <code>pointer</code> to convey that the element can be interacted with by clicking on it.</p>
    <Example :showMarkup="false" code='<details>
      <summary>Some details</summary>
      <p>More info about the details.</p>
    </details>

    <details open>
      <summary>Even more details</summary>
      <p>Here are even more details about the details.</p>
    </details>
    ' /><h2 id="html5-hidden-attribute">HTML5 <code>[hidden]</code> attribute<a class="anchor-link" href="#html5-hidden-attribute" aria-label="Link to HTML5 [hidden] attribute"></a></h2>
    <p>HTML5 adds <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">a new global attribute named <code>[hidden]</code></a>, which is styled as <code>display: none</code> by default. Borrowing an idea from <a href="https://purecss.io/">PureCSS</a>, we improve upon this default by making <code>[hidden] { display: none !important; }</code> to help prevent its <code>display</code> from getting accidentally overridden.</p>
    <pre><code class="language-html">&lt;input type=&quot;text&quot; hidden&gt;
    </code></pre>
    <Callout>
    <p>Since <code>[hidden]</code> is not compatible with jQuery’s <code>$(...).hide()</code> and <code>$(...).show()</code> methods, we don’t specifically endorse <code>[hidden]</code> over other techniques for managing the <code>display</code> of elements.</p>
    </Callout><p>To merely toggle the visibility of an element, meaning its <code>display</code> is not modified and the element can still affect the flow of the document, use <a href="[[docsref:/utilities/visibility]]">the <code>.invisible</code> class</a> instead.</p>
  </article>
</template>
