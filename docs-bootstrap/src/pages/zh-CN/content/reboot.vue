<template>
  <article class="bd-content">
    <h1>重启动（Reboot）</h1>
    <p class="lead">Reboot 是单个文件中对特定元素进行的一组 CSS 更改，用于启动 Bootstrap，提供优雅、一致且简单的基础来构建项目。</p>

    <h2 id="approach">实现思路<a class="anchor-link" href="#approach" aria-label="实现思路链接"></a></h2>
    <p>
      Reboot 构建在 Normalize 之上，仅使用元素选择器为许多 HTML 元素提供了略带主观倾向的样式。额外的样式仅通过类来实现。例如，我们重启动了一些
      <code>&lt;table&gt;</code> 样式以获得更简单的基础，之后再提供 <code>.table</code>、<code>.table-bordered</code> 等类。
    </p>
    <p>以下是我们选择在 Reboot 中覆盖哪些内容的准则和理由：</p>
    <ul>
      <li>更新一些浏览器默认值，使用 <code>rem</code> 而非 <code>em</code>，以便实现可缩放的组件间隔。</li>
      <li>避免使用 <code>margin-top</code>。垂直外边距可能会发生折叠，导致意外结果。更重要的是，单一方向的 <code>margin</code> 是更简单的心智模型。</li>
      <li>为了更轻松地跨设备尺寸缩放，块级元素的 <code>margin</code> 应使用 <code>rem</code>。</li>
      <li>将与 <code>font</code> 相关的属性声明保持在最低限度，尽可能使用 <code>inherit</code>。</li>
    </ul>
    <h2 id="css-variables">CSS 变量<a class="anchor-link" href="#css-variables" aria-label="CSS 变量链接"></a></h2>
    <AddedIn version="5.2.0" />
    <p>
      在 v5.1.1 中，我们统一了所有 CSS 包（包括 <code>bootstrap.css</code>、<code>bootstrap-reboot.css</code> 和 <code>bootstrap-grid.css</code>）中必需的 <code>@import</code>，使其包含 <code>_root.scss</code>。这会向所有包添加 <code>:root</code> 级别的 CSS 变量，无论该包中使用了其中多少个变量。最终，Bootstrap 5 将随着时间推移继续添加更多<a href="/customize/css-variables">CSS 变量</a>，以便在无需始终重新编译 Sass 的情况下提供更多实时自定义。我们的做法是将源 Sass 变量转换为 CSS 变量。这样，即使你不使用 CSS 变量，也仍然拥有 Sass 的全部能力。<strong>这仍在进行中，需要时间才能完全实现。</strong>
    </p>
    <p>例如，考虑以下用于常见 <code>&lt;body&gt;</code> 样式的 <code>:root</code> CSS 变量：</p>
    <ScssDocs name="root-body-variables" file="scss/_root.scss" />
    <p>在实践中，这些变量随后会像这样应用于 Reboot 中：</p>
    <ScssDocs name="reboot-body-rules" file="scss/_reboot.scss" />
    <p>这让你可以随心所欲地进行实时自定义：</p>
    <CodeWrapper
      code='&lt;body style="--bs-body-color: #333;"&gt;
  &lt;!-- ... --&gt;
&lt;/body&gt;'
      lang="html"
    />
    <h2 id="page-defaults">页面默认值<a class="anchor-link" href="#page-defaults" aria-label="页面默认值链接"></a></h2>
    <p><code>&lt;html&gt;</code> 和 <code>&lt;body&gt;</code> 元素已经更新，以提供更好的页面级默认值。具体来说：</p>
    <ul>
      <li>
        全局为每个元素（包括 <code>*::before</code> 和 <code>*::after</code>）设置 <code>box-sizing</code> 为 <code>border-box</code>。这确保元素的声明宽度永远不会因内边距或边框而被超出。
        <ul>
          <li>
            未在 <code>&lt;html&gt;</code> 上声明基础 <code>font-size</code>，但假定为 <code>16px</code>（浏览器默认值）。在 <code>&lt;body&gt;</code> 上应用 <code>font-size: 1rem</code>，以便通过媒体查询轻松实现响应式字体缩放，同时尊重用户偏好并确保更高的可访问性。可以通过修改 <code>$font-size-root</code> 变量来覆盖此浏览器默认值。
          </li>
        </ul>
      </li>
      <li><code>&lt;body&gt;</code> 还设置了全局的 <code>font-family</code>、<code>font-weight</code>、<code>line-height</code> 和 <code>color</code>。稍后一些表单元素会继承这些值，以防止字体不一致。</li>
      <li>为了安全起见，<code>&lt;body&gt;</code> 声明了 <code>background-color</code>，默认为 <code>#fff</code>。</li>
    </ul>
    <h2 id="native-font-stack">原生字体栈<a class="anchor-link" href="#native-font-stack" aria-label="原生字体栈链接"></a></h2>
    <p>
      Bootstrap 使用“原生字体栈”或“系统字体栈”，以在每台设备和操作系统上获得最佳的文本渲染效果。这些系统字体是专门针对当今设备设计的，在屏幕上的渲染效果更好，并支持可变字体等特性。阅读更多关于
     <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/">原生字体栈的<em>Smashing Magazine</em> 文章</a>。
    </p>
    <CodeWrapper
      code='$font-family-sans-serif:
// Cross-platform generic font family (default user interface font)
system-ui,
// Safari for macOS and iOS (San Francisco)
-apple-system,
// Windows
"Segoe UI",
// Android
Roboto,
// older macOS and iOS
"Helvetica Neue",
// Linux
"Noto Sans",
"Liberation Sans",
// Basic web fallback
Arial,
// Sans serif fallback
sans-serif,
// Emoji fonts
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
'
      lang="scss"
    />
    <p>
      请注意，由于字体栈包含 emoji 字体，许多常见的符号/装饰性 Unicode 字符将被渲染为多彩的象形图。它们的外观会有所不同，具体取决于浏览器/平台原生 emoji 字体所使用的样式，并且它们不会受到任何 CSS
      <code>color</code> 样式的影响。
    </p>
    <p>此 <code>font-family</code> 应用于 <code>&lt;body&gt;</code>，并在整个 Bootstrap 中全局自动继承。要切换全局 <code>font-family</code>，请更新 <code>$font-family-base</code> 并重新编译 Bootstrap。</p>
    <h2 id="headings">标题<a class="anchor-link" href="#headings" aria-label="标题链接"></a></h2>
    <p>所有标题元素——从 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>——都移除了 <code>margin-top</code>，设置了 <code>margin-bottom: .5rem</code>，并收紧了 <code>line-height</code>。虽然标题默认继承其 <code>color</code>，但你也可以通过可选的 CSS 变量 <code>--bs-heading-color</code> 来覆盖它。</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>标题</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
            <td><span class="h1">h1. Bootstrap 标题</span></td>
          </tr>
          <tr>
            <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
            <td><span class="h2">h2. Bootstrap 标题</span></td>
          </tr>
          <tr>
            <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
            <td><span class="h3">h3. Bootstrap 标题</span></td>
          </tr>
          <tr>
            <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
            <td><span class="h4">h4. Bootstrap 标题</span></td>
          </tr>
          <tr>
            <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
            <td><span class="h5">h5. Bootstrap 标题</span></td>
          </tr>
          <tr>
            <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
            <td><span class="h6">h6. Bootstrap 标题</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 id="paragraphs">段落<a class="anchor-link" href="#paragraphs" aria-label="段落链接"></a></h2>
    <p>所有 <code>&lt;p&gt;</code> 元素都移除了 <code>margin-top</code>，并设置了 <code>margin-bottom: 1rem</code>，以便于设置间距。</p>
    <Example code="<p>This is an example paragraph.</p>" />
    <h2 id="links">链接<a class="anchor-link" href="#links" aria-label="链接链接"></a></h2>
    <p>链接会应用默认的 <code>color</code> 和下划线。虽然链接会在 <code>:hover</code> 时发生变化，但它们不会因是否被 <code>:visited</code> 访问过而改变。它们也不会获得特殊的 <code>:focus</code> 样式。</p>
    <Example code='<a href="#">This is an example link</a>' />
    <p>从 v5.3.x 起，链接的 <code>color</code> 使用 <code>rgba()</code> 和新的 <code>-rgb</code> CSS 变量设置，从而可以轻松自定义链接颜色的不透明度。使用 <code>--bs-link-opacity</code> CSS 变量更改链接颜色的不透明度：</p>
    <Example code='<a href="#" style="--bs-link-opacity: .5">This is an example link</a>' />
    <p>占位链接——即没有 <code>href</code> 的链接——会通过更具体的选择器进行定位，其 <code>color</code> 和 <code>text-decoration</code> 会被重置为默认值。</p>
    <Example code="<a>This is a placeholder link</a>" />
    <h2 id="horizontal-rules">水平分隔线<a class="anchor-link" href="#horizontal-rules" aria-label="水平分隔线链接"></a></h2>
    <p>
      <code>&lt;hr&gt;</code> 元素已被简化。与浏览器默认行为类似，<code>&lt;hr&gt;</code> 通过 <code>border-top</code> 设置样式，具有默认的 <code>opacity: .25</code>，并通过 <code>color</code> 自动继承其 <code>border-color</code>，包括当 <code>color</code> 通过父级设置时。它们可以使用文本、边框和不透明度工具类进行修改。
    </p>
    <Example
      code='<hr>

<div class="text-success">
  <hr>
</div>

<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">'
    />
    <h2 id="lists">列表<a class="anchor-link" href="#lists" aria-label="列表链接"></a></h2>
    <p>所有列表——<code>&lt;ul&gt;</code>、<code>&lt;ol&gt;</code> 和 <code>&lt;dl&gt;</code>——都移除了 <code>margin-top</code>，并设置了 <code>margin-bottom: 1rem</code>。嵌套列表没有 <code>margin-bottom</code>。我们还重置了 <code>&lt;ul&gt;</code> 和 <code>&lt;ol&gt;</code> 元素上的 <code>padding-left</code>。</p>
    <div class="bd-example">
      * 所有列表的上外边距已被移除 * 其下外边距已被标准化 * 嵌套列表没有下外边距 * 因此它们的外观更加均匀 * 尤其是在后面跟着更多列表项时 * 左侧内边距也已被重置
      <ol>
        <li>这是一个有序列表</li>
        <li>包含几个列表项</li>
        <li>它的整体外观</li>
        <li>与前面的无序列表相同</li>
      </ol>
    </div>
    <p>为了更简单的样式、更清晰的层级和更好的间距，描述列表更新了 <code>margin</code>。<code>&lt;dd&gt;</code> 将 <code>margin-left</code> 重置为 <code>0</code>，并添加了 <code>margin-bottom: .5rem</code>。<code>&lt;dt&gt;</code> 会<strong>加粗</strong>。</p>
    <Example
      :showMarkup="false"
      code="<dl>
<dt>Description lists</dt>
<dd>A description list is perfect for defining terms.</dd>
<dt>Term</dt>
<dd>Definition for the term.</dd>
<dd>A second definition for the same term.</dd>
<dt>Another term</dt>
<dd>Definition for this other term.</dd>
</dl>"
    />
    <h2 id="inline-code">内联代码<a class="anchor-link" href="#inline-code" aria-label="内联代码链接"></a></h2>
    <p>使用 <code>&lt;code&gt;</code> 包裹内联代码片段。请务必转义 HTML 尖括号。</p>
    <Example code="For example, <code>&amp;lt;section&amp;gt;</code> should be wrapped as inline." />
    <h2 id="code-blocks">代码块<a class="anchor-link" href="#code-blocks" aria-label="代码块链接"></a></h2>
    <p>使用 <code>&lt;pre&gt;</code> 展示多行代码。同样，请务必转义代码中的任何尖括号以确保正确渲染。<code>&lt;pre&gt;</code> 元素已被重置，移除了 <code>margin-top</code>，并为其 <code>margin-bottom</code> 使用 <code>rem</code> 单位。</p>
    <Example
      code="<pre><code>&amp;lt;p&amp;gt;Sample text here...&amp;lt;/p&amp;gt;
&amp;lt;p&amp;gt;And another line of sample text here...&amp;lt;/p&amp;gt;
</code></pre>"
    />
    <h2 id="variables">变量<a class="anchor-link" href="#variables" aria-label="变量链接"></a></h2>
    <p>要表示变量，请使用 <code>&lt;var&gt;</code> 标签。</p>
    <Example code="<var>y</var> = <var>m</var><var>x</var> + <var>b</var>" />
    <h2 id="user-input">用户输入<a class="anchor-link" href="#user-input" aria-label="用户输入链接"></a></h2>
    <p>使用 <code>&lt;kbd&gt;</code> 来表示通常通过键盘输入的输入内容。</p>
    <Example
      code="To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>"
    />
    <h2 id="sample-output">示例输出<a class="anchor-link" href="#sample-output" aria-label="示例输出链接"></a></h2>
    <p>要表示程序的示例输出，请使用 <code>&lt;samp&gt;</code> 标签。</p>
    <Example code="<samp>This text is meant to be treated as sample output from a computer program.</samp>" />
    <h2 id="tables">表格<a class="anchor-link" href="#tables" aria-label="表格链接"></a></h2>
    <p>
      表格经过了轻微调整，以设置 <code>&lt;caption&gt;</code> 的样式、折叠边框，并确保 <code>text-align</code> 保持一致。边框、内边距等方面的其他更改由<a href="/content/tables"><code>.table</code> 类</a>提供。
    </p>
    <Example
      code="<table>
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
</table>"
    />
    <h2 id="forms">表单<a class="anchor-link" href="#forms" aria-label="表单链接"></a></h2>
    <p>各种表单元素都经过了重启动，以获得更简单的基础样式。以下是一些最显著的变化：</p>
    <ul>
      <li><code>&lt;fieldset&gt;</code> 没有边框、内边距或外边距，因此可以轻松用作单个输入框或输入框组的包裹元素。</li>
      <li><code>&lt;legend&gt;</code> 与 fieldset 一样，也经过重新设计，以某种标题的形式显示。</li>
      <li><code>&lt;label&gt;</code> 被设置为 <code>display: inline-block</code>，以便可以应用 <code>margin</code>。</li>
      <li><code>&lt;input&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;textarea&gt;</code> 和 <code>&lt;button&gt;</code> 大多由 Normalize 处理，但 Reboot 移除了它们的 <code>margin</code>，并设置了 <code>line-height: inherit</code>。</li>
      <li><code>&lt;textarea&gt;</code> 被修改为只能垂直调整大小，因为水平调整大小常常会“破坏”页面布局。</li>
      <li>当为 <code>:not(:disabled)</code> 时，<code>&lt;button&gt;</code> 和 <code>&lt;input&gt;</code> 按钮元素具有 <code>cursor: pointer</code>。</li>
    </ul>
    <p>这些变化以及其他内容在下面进行了演示。</p>
    <Callout name="warning-input-support" type="warning" />
    <Example
      :showMarkup="false"
      code='<form>
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
    </form>'
    />
    <h3 id="pointers-on-buttons">按钮上的指针光标<a class="anchor-link" href="#pointers-on-buttons" aria-label="按钮上的指针光标链接"></a></h3>
    <p>Reboot 包含对 <code>role=&quot;button&quot;</code> 的增强，可将默认光标更改为 <code>pointer</code>。将此属性添加到元素上，以帮助表明元素是可交互的。对于 <code>&lt;button&gt;</code> 元素不需要此角色，它们会有自己的 <code>cursor</code> 变化。</p>
    <Example code='<span role="button" tabindex="0">Non-button element button</span>' />
    <h2 id="misc-elements">杂项元素<a class="anchor-link" href="#misc-elements" aria-label="杂项元素链接"></a></h2>
    <h3 id="address">地址<a class="anchor-link" href="#address" aria-label="地址链接"></a></h3>
    <p>
      <code>&lt;address&gt;</code> 元素经过更新，将浏览器默认的 <code>font-style</code> 从 <code>italic</code> 重置为 <code>normal</code>。<code>line-height</code> 现在也是继承的，并添加了 <code>margin-bottom: 1rem</code>。<code>&lt;address&gt;</code> 用于展示最近祖先（或整个作品）的联系信息。通过在行尾添加 <code>&lt;br&gt;</code> 来保留格式。
    </p>
    <Example
      :showMarkup="false"
      code='<address>
        <strong>ACME Corporation</strong><br/>
        1123 Fictional St,<br/>
        San Francisco, CA 94103<br/>
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>

      <address>
        <strong>Full Name</strong><br/>
       <a href="mailto:first.last@example.com">first.last@example.com</a>
      </address>'
    />
    <h3 id="blockquote">块引用<a class="anchor-link" href="#blockquote" aria-label="块引用链接"></a></h3>
    <p>块引用的默认 <code>margin</code> 是 <code>1em 40px</code>，因此我们将其重置为 <code>0 0 1rem</code>，以与其他元素更加一致。</p>
    <Example
      :showMarkup="false"
      code='<figure>
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>'
    />
    <h3 id="inline-elements">内联元素<a class="anchor-link" href="#inline-elements" aria-label="内联元素链接"></a></h3>
    <p><code>&lt;abbr&gt;</code> 元素获得基本样式，使其在段落文本中脱颖而出。</p>
    <Example
      :showMarkup="false"
      code='The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.
    '
    />
    <h3 id="summary">摘要<a class="anchor-link" href="#summary" aria-label="摘要链接"></a></h3>
    <p>summary 的默认 <code>cursor</code> 是 <code>text</code>，因此我们将其重置为 <code>pointer</code>，以表明该元素可以通过点击进行交互。</p>
    <Example
      :showMarkup="false"
      code="<details>
      <summary>Some details</summary>
      <p>More info about the details.</p>
    </details>

    <details open>
      <summary>Even more details</summary>
      <p>Here are even more details about the details.</p>
    </details>
    "
    />
    <h2 id="html5-hidden-attribute">HTML5 <code>[hidden]</code> 属性<a class="anchor-link" href="#html5-hidden-attribute" aria-label="HTML5 [hidden] 属性链接"></a></h2>
    <p>
      HTML5 添加了
     <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden">一个名为 <code>[hidden]</code> 的新全局属性</a
      >，默认样式为 <code>display: none</code>。借鉴<a href="https://purecss.io/">PureCSS</a>的思路，我们通过设置 <code>[hidden] { display: none !important; }</code> 来改进此默认行为，帮助防止其 <code>display</code> 被意外覆盖。
    </p>
    <CodeWrapper code='&lt;input type="text" hidden&gt;' lang="html" />
    <Callout>
      <p>由于 <code>[hidden]</code> 与 jQuery 的 <code>$(...).hide()</code> 和 <code>$(...).show()</code> 方法不兼容，我们不特别推荐使用 <code>[hidden]</code> 而非其他管理元素 <code>display</code> 的技术。</p>
    </Callout>
    <p>
      如果只是想切换元素的可见性（即不修改其 <code>display</code>，元素仍会影响文档流），请改用<a href="/utilities/visibility"><code>.invisible</code> 类</a>。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#approach">实现思路</a></li>
      <li><a href="#css-variables">CSS 变量</a></li>
      <li><a href="#page-defaults">页面默认值</a></li>
      <li><a href="#native-font-stack">原生字体栈</a></li>
      <li><a href="#headings">标题</a></li>
      <li><a href="#paragraphs">段落</a></li>
      <li><a href="#links">链接</a></li>
      <li><a href="#horizontal-rules">水平分隔线</a></li>
      <li><a href="#lists">列表</a></li>
      <li><a href="#inline-code">内联代码</a></li>
      <li><a href="#code-blocks">代码块</a></li>
      <li><a href="#variables">变量</a></li>
      <li><a href="#user-input">用户输入</a></li>
      <li><a href="#sample-output">示例输出</a></li>
      <li><a href="#tables">表格</a></li>
      <li>
       <a href="#forms">表单</a>
        <ul>
          <li><a href="#pointers-on-buttons">按钮上的指针光标</a></li>
        </ul>
      </li>
      <li>
       <a href="#misc-elements">杂项元素</a>
        <ul>
          <li><a href="#address">地址</a></li>
          <li><a href="#blockquote">块引用</a></li>
          <li><a href="#inline-elements">内联元素</a></li>
          <li><a href="#summary">摘要</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
