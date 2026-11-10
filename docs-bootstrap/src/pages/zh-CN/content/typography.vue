<template>
  <article class="bd-content">
    <h1>排版</h1>
    <p class="lead">关于 Bootstrap 排版的文档和示例，包括全局设置、标题、正文文本、列表等。</p>

    <h2 id="global-settings">全局设置<a class="anchor-link" href="#global-settings" aria-label="全局设置链接"></a></h2>
    <p>
      Bootstrap 设置了基本的全局显示、排版和链接样式。当需要更多控制时，请查看
     <a href="/utilities/text">文本工具类</a>。
    </p>
    <ul>
      <li>使用<a href="/content/reboot#native-font-stack">原生字体栈</a>，为每个操作系统和设备选择最佳的 <code>font-family</code>。</li>
      <li>
        为了实现更具包容性和可访问性的字号缩放，我们使用浏览器的默认根
        <code>font-size</code>（通常为 16px），以便访问者可以根据需要自定义其浏览器默认值。
      </li>
      <li>使用 <code>$font-family-base</code>、<code>$font-size-base</code> 和 <code>$line-height-base</code> 属性作为应用于 <code>&lt;body&gt;</code> 的排版基础。</li>
      <li>通过 <code>$link-color</code> 设置全局链接颜色。</li>
      <li>
        使用 <code>$body-bg</code> 为 <code>&lt;body&gt;</code> 设置 <code>background-color</code>（默认为 <code>#fff</code>）。
      </li>
    </ul>
    <p>这些样式可以在 <code>_reboot.scss</code> 中找到，全局变量定义在 <code>_variables.scss</code> 中。请确保以 <code>rem</code> 为单位设置 <code>$font-size-base</code>。</p>
    <h2 id="headings">标题<a class="anchor-link" href="#headings" aria-label="标题链接"></a></h2>
    <p>所有 HTML 标题，从 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>，均可用。</p>
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
    <CodeWrapper
      code="&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;"
      lang="html"
    />
    <p><code>.h1</code> 到 <code>.h6</code> 类也可用，适用于你想要匹配标题的字体样式但无法使用关联 HTML 元素的情况。</p>
    <Example
      code='<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>'
    />
    <h3 id="customizing-headings">自定义标题<a class="anchor-link" href="#customizing-headings" aria-label="自定义标题链接"></a></h3>
    <p>使用内置的工具类重新创建 Bootstrap 3 中的小型次要标题文本。</p>
    <Example
      code='<h3>
  Fancy display heading
  <small class="text-body-secondary">With faded secondary text</small>
</h3>'
    />
    <h2 id="display-headings">显示标题<a class="anchor-link" href="#display-headings" aria-label="显示标题链接"></a></h2>
    <p>
      传统标题元素旨在最适合用于页面内容的主体部分。当你需要标题脱颖而出时，可以考虑使用
      <strong>显示标题</strong>——一种更大、略带主观看法的标题样式。
    </p>
    <Example
      :showMarkup="false"
      code='<div class="display-1 pb-3 mb-3 border-bottom">Display 1</div>
<div class="display-2 pb-3 mb-3 border-bottom">Display 2</div>
<div class="display-3 pb-3 mb-3 border-bottom">Display 3</div>
<div class="display-4 pb-3 mb-3 border-bottom">Display 4</div>
<div class="display-5 pb-3 mb-3 border-bottom">Display 5</div>
<div class="display-6">Display 6</div>'
    />
    <CodeWrapper
      code='&lt;h1 class="display-1"&gt;Display 1&lt;/h1&gt;
&lt;h1 class="display-2"&gt;Display 2&lt;/h1&gt;
&lt;h1 class="display-3"&gt;Display 3&lt;/h1&gt;
&lt;h1 class="display-4"&gt;Display 4&lt;/h1&gt;
&lt;h1 class="display-5"&gt;Display 5&lt;/h1&gt;
&lt;h1 class="display-6"&gt;Display 6&lt;/h1&gt;'
      lang="html"
    />
    <p>显示标题通过 <code>$display-font-sizes</code> Sass map 以及两个变量 <code>$display-font-weight</code> 和 <code>$display-line-height</code> 进行配置。</p>
    <p>显示标题可通过两个变量 <code>$display-font-family</code> 和 <code>$display-font-style</code> 进行自定义。</p>
    <ScssDocs name="display-headings" file="scss/_variables.scss" />
    <h2 id="lead">导语<a class="anchor-link" href="#lead" aria-label="导语链接"></a></h2>
    <p>通过添加 <code>.lead</code> 让段落脱颖而出。</p>
    <Example
      code='<p class="lead">
  This is a lead paragraph. It stands out from regular paragraphs.
</p>'
    />
    <h2 id="inline-text-elements">内联文本元素<a class="anchor-link" href="#inline-text-elements" aria-label="内联文本元素链接"></a></h2>
    <p>常见内联 HTML5 元素的样式。</p>
    <Example
      code="<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>"
    />
    <p>请注意，这些标签应出于语义目的使用：</p>
    <ul>
      <li><code>&lt;mark&gt;</code> 表示被标记或突出显示以供参考或标注的文本。</li>
      <li><code>&lt;small&gt;</code> 表示旁注和小字号文本，如版权和法律文本。</li>
      <li><code>&lt;s&gt;</code> 表示不再相关或不再准确的元素。</li>
      <li><code>&lt;u&gt;</code> 表示一段内联文本，其渲染方式应表明它具有非文本的注释。</li>
    </ul>
    <p>如果你想为文本设置样式，则应改用以下类：</p>
    <ul>
      <li><code>.mark</code> 将应用与 <code>&lt;mark&gt;</code> 相同的样式。</li>
      <li><code>.small</code> 将应用与 <code>&lt;small&gt;</code> 相同的样式。</li>
      <li><code>.text-decoration-underline</code> 将应用与 <code>&lt;u&gt;</code> 相同的样式。</li>
      <li><code>.text-decoration-line-through</code> 将应用与 <code>&lt;s&gt;</code> 相同的样式。</li>
    </ul>
    <p>虽然上面没有展示，但请随意在 HTML5 中使用 <code>&lt;b&gt;</code> 和 <code>&lt;i&gt;</code>。<code>&lt;b&gt;</code> 用于突出显示单词或短语而不传达额外的重要性，而 <code>&lt;i&gt;</code> 主要用于语音、技术术语等。</p>
    <h2 id="text-utilities">文本工具类<a class="anchor-link" href="#text-utilities" aria-label="文本工具类链接"></a></h2>
    <p>
      使用我们的<a href="/utilities/text">文本工具类</a>和<a href="/utilities/colors">颜色工具类</a>来更改文本对齐、变换、样式、粗细、行高、装饰和颜色。
    </p>
    <h2 id="abbreviations">缩写<a class="anchor-link" href="#abbreviations" aria-label="缩写链接"></a></h2>
    <p>HTML 的 <code>&lt;abbr&gt;</code> 元素用于缩写和首字母缩略词的风格化实现，可在悬停时显示展开版本。缩写默认带有下划线，并获得帮助光标，以便在悬停时为辅助技术的用户提供额外的上下文。</p>
    <p>为缩写添加 <code>.initialism</code>，以获得稍小的字号。</p>
    <Example
      code='<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>'
    />
    <h2 id="blockquotes">块引用<a class="anchor-link" href="#blockquotes" aria-label="块引用链接"></a></h2>
    <p>
      用于在文档中引用来自其他来源的内容块。将
      <code>&lt;blockquote class=&quot;blockquote&quot;&gt;</code> 包裹在任意 HTML 内容周围作为引用。
    </p>
    <Example
      code='<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>'
    />
    <h3 id="naming-a-source">标注来源<a class="anchor-link" href="#naming-a-source" aria-label="标注来源链接"></a></h3>
    <p>
      HTML 规范要求将块引用的出处放在 <code>&lt;blockquote&gt;</code> 之外。在提供出处时，请将 <code>&lt;blockquote&gt;</code> 包裹在 <code>&lt;figure&gt;</code> 中，并使用带有
      <code>.blockquote-footer</code> 类的 <code>&lt;figcaption&gt;</code> 或块级元素（例如 <code>&lt;p&gt;</code>）。还请务必用 <code>&lt;cite&gt;</code> 包裹来源作品的名称。
    </p>
    <Example
      code='<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>'
    />
    <h3 id="alignment">对齐<a class="anchor-link" href="#alignment" aria-label="对齐链接"></a></h3>
    <p>根据需要，使用文本工具类来更改块引用的对齐方式。</p>
    <Example
      code='<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>'
    /><Example
      code='<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>'
    />
    <h2 id="lists">列表<a class="anchor-link" href="#lists" aria-label="列表链接"></a></h2>
    <h3 id="unstyled">无样式<a class="anchor-link" href="#unstyled" aria-label="无样式链接"></a></h3>
    <p>移除列表项的默认 <code>list-style</code> 和左侧外边距（仅限直接子元素）。<strong>这仅适用于直接子列表项</strong>，这意味着对于任何嵌套列表，你也需要添加该类。</p>
    <Example
      code='<ul class="list-unstyled">
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
</ul>'
    />
    <h3 id="inline">内联<a class="anchor-link" href="#inline" aria-label="内联链接"></a></h3>
    <p>结合使用 <code>.list-inline</code> 和 <code>.list-inline-item</code> 两个类，移除列表的项目符号并应用一些轻微的 <code>margin</code>。</p>
    <Example
      code='<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they’re displayed inline.</li>
</ul>'
    />
    <h3 id="description-list-alignment">描述列表对齐<a class="anchor-link" href="#description-list-alignment" aria-label="描述列表对齐链接"></a></h3>
    <p>
      使用网格系统的预定义类（或语义 mixin）将术语和描述水平对齐。对于较长的术语，你可以选择添加
      <code>.text-truncate</code> 类，用省略号截断文本。
    </p>
    <Example
      code='<dl class="row">
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
</dl>'
    />
    <h2 id="responsive-font-sizes">响应式字号<a class="anchor-link" href="#responsive-font-sizes" aria-label="响应式字号链接"></a></h2>
    <p>
      在 Bootstrap 5 中，我们默认启用了响应式字号，使文本可以在不同的设备和视口尺寸下更自然地缩放。请查看
     <a href="/getting-started/rfs">RFS 页面</a>了解其工作原理。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p>标题有一些专用于尺寸和间距的变量。</p>
    <ScssDocs name="headings-variables" file="scss/_variables.scss" />
    <p>此处以及<a href="/content/reboot">重启动</a>中介绍的其他排版元素也有专用变量。</p>
    <ScssDocs name="type-variables" file="scss/_variables.scss" />
    <h3 id="sass-mixins">Sass mixin<a class="anchor-link" href="#sass-mixins" aria-label="Sass mixin 链接"></a></h3>
    <p>
      排版没有专用的 mixin，但 Bootstrap 确实使用了
     <a href="/getting-started/rfs">响应式字号（RFS）</a>。
    </p>
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#global-settings">全局设置</a></li>
      <li>
       <a href="#headings">标题</a>
        <ul>
          <li><a href="#customizing-headings">自定义标题</a></li>
        </ul>
      </li>
      <li><a href="#display-headings">显示标题</a></li>
      <li><a href="#lead">导语</a></li>
      <li><a href="#inline-text-elements">内联文本元素</a></li>
      <li><a href="#text-utilities">文本工具类</a></li>
      <li><a href="#abbreviations">缩写</a></li>
      <li>
       <a href="#blockquotes">块引用</a>
        <ul>
          <li><a href="#naming-a-source">标注来源</a></li>
          <li><a href="#alignment">对齐</a></li>
        </ul>
      </li>
      <li>
       <a href="#lists">列表</a>
        <ul>
          <li><a href="#unstyled">无样式</a></li>
          <li><a href="#inline">内联</a></li>
          <li><a href="#description-list-alignment">描述列表对齐</a></li>
        </ul>
      </li>
      <li><a href="#responsive-font-sizes">响应式字号</a></li>
      <li>
       <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
          <li><a href="#sass-mixins">Sass mixin</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
