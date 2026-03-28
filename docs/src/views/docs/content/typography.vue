<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-ty">
      <a href="#ty-global">全局设置</a>
      <a href="#ty-header">标题</a>
      <a href="#ty-display">展示标题</a>
      <a href="#ty-lead">Lead</a>
      <a href="#ty-inline">内联文本元素</a>
      <a href="#ty-text-util">文本工具</a>
      <a href="#ty-abbr">缩写</a>
      <a href="#ty-blockquote">引用</a>
      <a href="#ty-lists">列表</a>
      <a href="#ty-font-size">响应式字体大小</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-ty" class="docs-content">
    <h1>Typography 文字排版</h1>
    <p class="fs-4 fw-light">
      Bootstrap 排版的相关文档和示例，包括全局设置、标题、正文、列表等。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/content/typography/" target="_blank">Bootstrap Typography</a>
    </p>

    <h2 id="ty-global">全局设置<a class="anchor-link" aria-label="Link to this section: 全局设置" href="#ty-global"> </a></h2>
    <p>
      Bootstrap 设置了基本的全局显示、排版和链接样式。当需要更多控制时，请查看
      <a href="https://getbootstrap.com/docs/5.3/utilities/text" target="_blank">文本实用类</a>。
    </p>
    <ul class="docs-content-list">
      <li>
        使用
        <a href="https://getbootstrap.com/docs/5.3/content/reboot#native-font-stack" target="_blank">原生字体栈</a>，为每个操作系统和设备选择最佳的
        <code>font-family</code>。
      </li>
      <li>
        为了实现更具包容性和可访问性的字体大小，我们使用浏览器的默认根
        <code>font-size</code>（通常为16px），以便访问者可以根据需要自定义其浏览器默认设置。
      </li>
      <li>
        将 <code>$font-family-base</code>、<code>$font-size-base</code> 和 <code>$line-height-base</code> 属性作为我们的排版基础应用于
        <code>&lt;body&gt;</code>。
      </li>
      <li>通过 <code>$link-color</code> 设置全局链接颜色。</li>
      <li>使用 <code>$body-bg</code> 来设置 <code>&lt;body&gt;</code> 的 <code>background-color</code>（默认为 <code>#fff</code>）。</li>
    </ul>
    <p>
      这些样式可以在 <code>_reboot.scss</code> 中找到，全局变量在 <code>_variables.scss</code> 中定义。请确保在 <code>rem</code> 中设置
      <code>$font-size-base</code>。
    </p>

    <h2 id="ty-header">标题<a class="anchor-link" aria-label="Link to this section: 标题" href="#ty-header"> </a></h2>
    <p>所有 HTML 标题，从 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>，均可使用。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Heading</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
            </tbody>
          </table>
        </div>
      </div>
      <code-highlight type="html" :code="headerCode" label="html" />
    </div>
    <p>
      如果您希望匹配标题的字体样式，但又无法使用相关的HTML元素，那么
      <code>.h1</code> 至 <code>.h6</code> 类也可供选择。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="h1">h1. Bootstrap heading</p>
        <p class="h2">h2. Bootstrap heading</p>
        <p class="h3">h3. Bootstrap heading</p>
        <p class="h4">h4. Bootstrap heading</p>
        <p class="h5">h5. Bootstrap heading</p>
        <p class="h6">h6. Bootstrap heading</p>
      </div>
      <code-highlight type="html" :code="header1Code" label="html" />
    </div>
    <p>使用附带的实用类来重新创建 Bootstrap 中的小型副标题文本。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <h3>
          Fancy display heading
          <small class="text-body-secondary">With faded secondary text</small>
        </h3>
      </div>
      <code-highlight type="html" :code="header2Code" label="html" />
    </div>

    <h2 id="ty-display">展示标题<a class="anchor-link" aria-label="Link to this section: 展示标题" href="#ty-display"> </a></h2>
    <p>传统标题元素的设计最适合放在页面内容的主要部分。当你需要一个标题来突出显示时，可以考虑使用<strong>展示标题</strong>——一种更大、略显突出的标题样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <h1 class="display-1">Display 1</h1>
        <h1 class="display-2">Display 2</h1>
        <h1 class="display-3">Display 3</h1>
        <h1 class="display-4">Display 4</h1>
        <h1 class="display-5">Display 5</h1>
        <h1 class="display-6">Display 6</h1>
      </div>
      <code-highlight type="html" :code="displayCode" label="html" />
    </div>
    <p>
      显示标题是通过 <code>$display-font-sizes</code> Sass 映射以及两个变量 <code>$display-font-weight</code> 和 <code>$display-line-height</code> 来配置的。
    </p>
    <p>显示标题可通过两个变量进行自定义，即 <code>$display-font-family</code> 和 <code>$display-font-style</code>。</p>
    <code-highlight type="scss" :code="displayScssCode" label="scss/_variables.scss" />

    <h2 id="ty-lead">Lead<a class="anchor-link" aria-label="Link to this section: Lead" href="#ty-lead"> </a></h2>
    <p>通过添加 <code>.lead</code> 来使段落脱颖而出。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
      </div>
      <code-highlight type="html" :code="leadCode" label="html" />
    </div>

    <h2 id="ty-inline">内联文本元素<a class="anchor-link" aria-label="Link to this section: 内联文本元素" href="#ty-inline"> </a></h2>
    <p>常见内联 HTML5 元素的样式设计。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins>This line of text is meant to be treated as an addition to the document.</ins>
        </p>
        <p><u>This line of text will render as underlined.</u></p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
      </div>
      <code-highlight type="html" :code="inlineCode" label="html" />
    </div>
    <p>注意，这些标签应用于语义目的：</p>
    <ul class="docs-content-list">
      <li><code>&lt;mark&gt;</code> 表示为引用或注释目的而被标记或高亮显示的文本。</li>
      <li><code>&lt;small&gt;</code> 表示侧注和小字体文本，如版权和法律文本。</li>
      <li><code>&lt;s&gt;</code> 表示不再相关或不再准确的元素。</li>
      <li>
        <code>&lt;u&gt;</code>
        表示一段内联文本，其呈现方式应表明它具有非文本注释。
      </li>
    </ul>
    <p>如果你想为文本添加样式，你应该使用以下类：</p>
    <ul class="docs-content-list">
      <li><code>.mark</code> 将应用与 <code>&lt;mark&gt;</code> 相同的样式。</li>
      <li><code>.small</code> 将应用与 <code>&lt;small&gt;</code> 相同的样式。</li>
      <li><code>.text-decoration-underline</code> 将应用与 <code>&lt;u&gt;</code> 相同的样式。</li>
      <li><code>.text-decoration-line-through</code> 将应用与 <code>&lt;s&gt;</code> 相同的样式。</li>
    </ul>
    <p>
      虽然上文未展示，但请放心在HTML5中使用 <code>&lt;b&gt;</code> 和 <code>&lt;i&gt;</code>。<code>&lt;b&gt;</code>
      用于突出显示单词或短语，但不传达额外的重要性，而
      <code>&lt;i&gt;</code> 主要用于表示语音、技术术语等。
    </p>

    <h2 id="ty-text-util">文本工具<a class="anchor-link" aria-label="Link to this section: 文本工具" href="#ty-text-util"> </a></h2>
    <p>
      使用我们的
      <a href="https://getbootstrap.com/docs/5.3/utilities/text" target="_blank">文本工具</a>
      和
      <a href="https://getbootstrap.com/docs/5.3/utilities/colors" target="_blank">颜色工具</a>，可以更改文本对齐方式、变换、样式、粗细、行高、装饰和颜色。
    </p>

    <h2 id="ty-abbr">缩写<a class="anchor-link" aria-label="Link to this section: 缩写" href="#ty-abbr"> </a></h2>
    <p>
      HTML 的
      <code>&lt;abbr&gt;</code>
      元素用于表示缩写和首字母缩略词，其样式化实现可在悬停时显示完整形式。缩写默认带有下划线，并会在悬停时显示帮助光标，以便为使用辅助技术的用户提供更多上下文信息。
    </p>
    <p>为缩写添加 <code>.initialism</code> 以获得稍小的字体大小。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <p><abbr title="attribute">attr</abbr></p>
        <p>
          <abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
        </p>
      </div>
      <code-highlight type="html" :code="abbrCode" label="html" />
    </div>

    <h2 id="ty-blockquote">引用<a class="anchor-link" aria-label="Link to this section: 引用" href="#ty-blockquote"> </a></h2>
    <p>
      在文档中引用其他来源的内容块时，请将任何 HTML 引用内容用
      <code>&lt;blockquote class="blockquote"&gt;</code> 包裹起来。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
      </div>
      <code-highlight type="html" :code="blockquoteCode" label="html" />
    </div>
    <p>
      HTML 规范要求将引用说明放在
      <code>&lt;blockquote&gt;</code> 标签之外。在提供引用说明时，请将 <code>&lt;blockquote&gt;</code> 包裹在 <code>&lt;figure&gt;</code> 中，并使用带有
      <code>.blockquote-footer</code> 类的
      <code>&lt;figcaption&gt;</code>
      或块级元素（例如<code>&lt;p&gt;</code>）。同时，请确保将源作品的名称也包裹在
      <code>&lt;cite&gt;</code>中。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <figure>
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
        </figure>
      </div>
      <code-highlight type="html" :code="blockquote1Code" label="html" />
    </div>
    <p>根据需要使用文本工具来更改你的引用块的对齐方式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
        </figure>
        <figure class="text-end">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
        </figure>
      </div>
      <code-highlight type="html" :code="blockquote2Code" label="html" />
    </div>

    <h2 id="ty-lists">列表<a class="anchor-link" aria-label="Link to this section: 列表" href="#ty-lists"> </a></h2>
    <h3>无样式列表</h3>
    <p>
      移除列表项（仅限直接子级）的默认
      <code>list-style</code>
      和左边距。<strong>这仅适用于直接子级列表项</strong>，这意味着您还需要为任何嵌套列表添加该类。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-unstyled">
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>Structurally, it’s still a list.</li>
          <li>However, this style only applies to immediate child elements.</li>
          <li>
            Nested lists:
            <ul class="docs-content-list">
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ul>
          </li>
          <li>This may still come in handy in some situations.</li>
        </ul>
      </div>
      <code-highlight type="html" :code="lists1Code" label="html" />
    </div>
    <h3>内联列表</h3>
    <p>
      通过结合使用两个类，即 <code>.list-inline</code> 和 <code>.list-inline-item</code>，可以移除列表中的项目符号，并为其应用一些轻微的 <code>margin</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-inline">
          <li class="list-inline-item">This is a list item.</li>
          <li class="list-inline-item">And another one.</li>
          <li class="list-inline-item">But they’re displayed inline.</li>
        </ul>
      </div>
      <code-highlight type="html" :code="lists2Code" label="html" />
    </div>
    <h3>描述列表对齐</h3>
    <p>
      使用我们网格系统预定义的类（或语义混入）来水平对齐术语和描述。对于较长的术语，您可以选择添加一个
      <code>.text-truncate</code> 类来使用省略号截断文本。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <dl class="row">
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
        </dl>
      </div>
      <code-highlight type="html" :code="lists3Code" label="html" />
    </div>

    <h2 id="ty-font-size">响应式字体大小<a class="anchor-link" aria-label="Link to this section: 响应式字体大小" href="#ty-font-size"> </a></h2>
    <p>
      在 Bootstrap 5 中，我们默认启用了响应式字体大小功能，使文本在不同设备和视口尺寸下能更自然地缩放。请访问
      <a href="https://getbootstrap.com/docs/5.3/getting-started/rfs" target="_blank">RFS页面</a>
      了解具体实现方式。
    </p>
  </div>
</template>

<script setup>
const headerCode = `<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>`

const header1Code = `<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>`

const header2Code = `<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>`

const displayCode = `<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>`

const displayScssCode = `$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
);

$display-font-family: null;
$display-font-style:  null;
$display-font-weight: 300;
$display-line-height: $headings-line-height;`

const leadCode = `<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>`

const inlineCode = `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>`

const abbrCode = `<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>`

const blockquoteCode = `<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>`

const blockquote1Code = `<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`

const blockquote2Code = `<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`

const lists1Code = `<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it’s still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul class="docs-content-list">
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>`

const lists2Code = `<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they’re displayed inline.</li>
</ul>`

const lists3Code = `<dl class="row">
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
</dl>`
</script>
