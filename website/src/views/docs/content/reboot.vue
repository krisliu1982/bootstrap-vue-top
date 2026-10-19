<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-reboot">
      <a href="#reboot-approach">处理方式</a>
      <a href="#reboot-variables">CSS变量</a>
      <a href="#reboot-default">页面预设</a>
      <a href="#reboot-font">原生字体栈</a>
      <a href="#reboot-headers">标题</a>
      <a href="#reboot-paragraphs">段落</a>
      <a href="#reboot-links">链接</a>
      <a href="#reboot-horizontal">水平线</a>
      <a href="#reboot-lists">列表</a>
      <a href="#reboot-code">内联代码</a>
      <a href="#reboot-code-block">代码块</a>
      <a href="#reboot-var">变量</a>
      <a href="#reboot-user-input">用戶输入</a>
      <a href="#reboot-sample-output">示例输出</a>
      <a href="#reboot-table">表格</a>
      <a href="#reboot-form">表单</a>
      <a href="#reboot-button-pointer">按钮上的指针</a>
      <a href="#reboot-address">地址</a>
      <a href="#reboot-blockquote">引用</a>
      <a href="#reboot-abbr">缩写</a>
      <a href="#reboot-summary">Summary</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-reboot" class="docs-content">
    <h1>Reboot 重置</h1>
    <p class="fs-4 fw-light">
      Reboot 是一个包含单个文件中针对特定元素的 CSS 更改的集合，它为 Bootstrap
      提供了一个优雅、一致且简洁的基础，以便在此基础上进行构建。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/content/reboot/" target="_blank">Bootstrap Reboot</a>
    </p>

    <h2 id="reboot-approach">
      处理方式<a class="anchor-link" aria-label="Link to this section: 处理方式" href="#reboot-approach"> </a>
    </h2>
    <p>
      Reboot 在 Normalize 的基础上构建，仅使用元素选择器为许多 HTML
      元素提供了略带主观性的样式。额外的样式设置仅通过类来完成。例如，我们为
      <code>&lt;table&gt;</code>
      样式进行了重新设计，以获得更简洁的基线样式，之后又提供了
      <code>.table</code>、<code>.table-bordered</code> 等样式。
    </p>
    <p>以下是我们在 Reboot 中选择覆盖内容的指导原则和理由：</p>
    <ul class="docs-content-list">
      <li>更新一些浏览器默认值，使用 <code>rem</code> 代替 <code>em</code> 作为可缩放组件间距的单位。</li>
      <li>
        避免使用
        <code>margin-top</code>。垂直边距可能会发生折叠，从而产生意想不到的结果。但更重要的是，单一方向的
        <code>margin</code> 更符合人们的思维习惯。
      </li>
      <li>为了更轻松地适应不同尺寸的设备，块级元素应使用 <code>rem</code> 作为 <code>margin</code>。</li>
      <li>尽量减少与 <code>font-</code> 相关的属性声明，尽可能使用 <code>inherit</code>。</li>
    </ul>

    <h2 id="reboot-variables">
      CSS变量<a class="anchor-link" aria-label="Link to this section: CSS变量" href="#reboot-variables"> </a>
    </h2>
    <p>
      在 v5.1.1 版本中，我们对所有 CSS 包（包括
      <code>bootstrap.css</code>、<code>bootstrap-reboot.css</code> 和 <code>bootstrap-grid.css</code>）中的必需
      <code>@import</code> 进行了标准化，以包含 <code>_root.scss</code>。这样，无论该 CSS 包中使用了多少个 CSS
      变量，都会为所有 CSS 包添加 <code>:root</code> 级别的 CSS 变量。最终，Bootstrap 5 将继续添加更多的
      <a href="/docs/5.3/customize/css-variables">CSS 变量</a>，以便提供更多的实时自定义功能，而无需总是重新编译
      Sass。我们的方法是将源 Sass 变量转换为 CSS 变量。这样，即使您不使用 CSS 变量，也能享受到 Sass
      的全部强大功能。<strong>此项工作仍在进行中，需要时间才能完全实现。</strong>
    </p>
    <p>例如，考虑这些用于常见 <code>&lt;body&gt;</code> 样式的 <code>:root</code> CSS变量：</p>
    <code-highlight type="scss" :code="variablesCode" label="scss/_root.scss" />

    <h2 id="reboot-default">
      页面预设<a class="anchor-link" aria-label="Link to this section: 页面预设" href="#reboot-default"> </a>
    </h2>
    <p>
      <code>&lt;html&gt;</code> 和
      <code>&lt;body&gt;</code>
      元素已更新，以提供更优的全页面默认设置。更具体地说：
    </p>
    <ul class="docs-content-list">
      <li>
        每个元素（包括 <code>*::before</code> 和 <code>*::after</code>）的 <code>box-sizing</code> 属性都被全局设置为
        <code>border-box</code>。这确保了元素的声明宽度永远不会因为内边距或边框而超出。
        <ul class="docs-content-list">
          <li>
            在 <code>&lt;html&gt;</code> 上未声明基础 <code>font-size</code>，但假定为
            <code>16px</code>（浏览器默认值）。在 <code>&lt;body&gt;</code> 上应用
            <code>font-size: 1rem</code
            >，以便通过媒体查询轻松实现响应式字体缩放，同时尊重用户偏好并确保更易于访问。可以通过修改
            <code>$font-size-root</code> 变量来覆盖此浏览器默认值。
          </li>
        </ul>
      </li>
      <li>
        <code>&lt;body&gt;</code> 还设置了全局的 <code>font-family</code>、<code>font-weight</code>、<code
          >line-height</code
        >
        和
        <code>color</code>。这些属性稍后会被一些表单元素继承，以防止字体不一致。
      </li>
      <li>
        为了安全起见，<code>&lt;body&gt;</code> 元素已声明了 <code>background-color</code> 属性，默认值为
        <code>#fff</code>。
      </li>
    </ul>

    <h2 id="reboot-font">
      原生字体栈<a class="anchor-link" aria-label="Link to this section: 原生字体栈" href="#reboot-font"> </a>
    </h2>
    <p>
      Bootstrap
      采用“原生字体栈”或“系统字体栈”以在每台设备和每个操作系统上实现最佳的文本渲染。这些系统字体是专为当今的设备设计的，具有更优的屏幕渲染效果、可变字体支持等功能。如需了解更多关于原生字体栈的信息，请阅读
      <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/" target="_blank"
        >native font stacks in this Smashing Magazine article</a
      >。
    </p>
    <p>
      请注意，由于字体栈中包含了表情符号字体，许多常见的符号/装饰性 Unicode
      字符将被渲染为多彩的象形文字。它们的外观将因浏览器/平台原生表情符号字体所采用的样式而异，且不受任何 CSS
      <code>color</code> 样式的影响。
    </p>
    <p>
      这个 <code>font-family</code> 应用于 <code>&lt;body&gt;</code>，并在整个 Bootstrap 中自动全局继承。要切换全局的
      <code>font-family</code>，请更新 <code>$font-family-base</code> 并重新编译 Bootstrap。
    </p>

    <h2 id="reboot-headers">
      标题<a class="anchor-link" aria-label="Link to this section: 标题" href="#reboot-headers"> </a>
    </h2>
    <p>
      所有标题元素——<code>&lt;h1&gt;</code>——<code>&lt;h6&gt;</code> 的 <code>margin-top</code> 均已去除，设置了
      <code>margin-bottom: .5rem</code>，并且 <code>line-height</code> 已收紧。虽然标题默认会继承其
      <code>color</code>，但您也可以通过可选的 CSS 变量 <code>--bs-heading-color</code> 来覆盖它。
    </p>
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

    <h2 id="reboot-paragraphs">
      段落<a class="anchor-link" aria-label="Link to this section: 段落" href="#reboot-paragraphs"> </a>
    </h2>
    <p>
      所有 <code>&lt;p&gt;</code> 元素的 <code>margin-top</code> 均已被移除，并为其设置了
      <code>margin-bottom: 1rem</code>
      以实现良好的间距效果。
    </p>

    <h2 id="reboot-links">
      链接<a class="anchor-link" aria-label="Link to this section: 链接" href="#reboot-links"> </a>
    </h2>
    <p>
      链接有一个默认的 <code>color</code> 和下划线样式。虽然链接在
      <code>:hover</code> 时会发生变化，但它们并不会根据用户是否
      <code>:visited</code> 过该链接而改变。同时，它们也不会获得特殊的 <code>:focus</code> 样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a href="#">This is an example link</a>
      </div>
      <code-highlight type="html" :code="links1Code" label="html" />
    </div>
    <p>
      从v5.3.x版本开始，链接 <code>color</code> 使用 <code>rgba()</code> 和新的 <code>-rgb</code> CSS
      变量设置，从而可以轻松自定义链接颜色不透明度。使用 <code>--bs-link-opacity</code> CSS 变量更改链接颜色不透明度：
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a href="#" style="--bs-link-opacity: 0.5">This is an example link</a>
      </div>
      <code-highlight type="html" :code="links2Code" label="html" />
    </div>
    <p>
      占位符链接（即没有设置
      <code>href</code> 属性的链接）会使用更具体的选择器进行定位，并且其 <code>color</code>和
      <code>text-decoration</code>
      属性会被重置为其默认值。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <a>This is a placeholder link</a>
      </div>
      <code-highlight type="html" :code="links3Code" label="html" />
    </div>

    <h2 id="reboot-horizontal">
      水平线<a class="anchor-link" aria-label="Link to this section: 水平线" href="#reboot-horizontal"> </a>
    </h2>
    <p>
      <code>&lt;hr&gt;</code> 元素已被简化。与浏览器默认设置类似，<code>&lt;hr&gt;</code> 通过
      <code>border-top</code> 设置样式，默认 <code>opacity: .25</code>，并通过 <code>color</code> 自动继承其
      <code>border-color</code>，包括当 <code>color</code>
      由父级设置时也是如此。它们可以通过文本、边框和不透明度工具进行修改。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <hr />

        <div class="text-success">
          <hr />
        </div>

        <hr class="border border-danger border-2 opacity-50" />
        <hr class="border border-primary border-3 opacity-75" />
      </div>
      <code-highlight type="html" :code="horizontalCode" label="html" />
    </div>

    <h2 id="reboot-lists">
      列表<a class="anchor-link" aria-label="Link to this section: 列表" href="#reboot-lists"> </a>
    </h2>
    <p>
      所有列表——<code>&lt;ul&gt;</code>、<code>&lt;ol&gt;</code> 和 <code>&lt;dl&gt;</code>—— 去除了它们的
      <code>margin-top</code>，并添加了 <code>margin-bottom: 1rem</code>。嵌套列表没有
      <code>margin-bottom</code>。我们还重置了 <code>&lt;ul&gt;</code> 和 <code>&lt;ol&gt;</code> 元素的
      <code>padding-left</code>。
    </p>
    <p>
      为了实现更简洁的样式、清晰的层级结构和更好的间距，描述列表更新了
      <code>margin</code> 属性。<code>&lt;dd&gt;</code> 将 <code>margin-left</code> 重置为 <code>0</code>，并添加了
      <code>margin-bottom: .5rem</code>。<code>&lt;dt&gt;</code>
      被<strong>加粗</strong>显示。
    </p>

    <h2 id="reboot-code">
      内联代码<a class="anchor-link" aria-label="Link to this section: 内联代码" href="#reboot-code"> </a>
    </h2>
    <p>使用 <code>&lt;code&gt;</code> 来包裹内联代码片段。请确保对 HTML 尖括号进行转义。</p>

    <h2 id="reboot-code-block">
      代码块<a class="anchor-link" aria-label="Link to this section: 代码块" href="#reboot-code-block"> </a>
    </h2>
    <p>
      使用
      <code>&lt;pre&gt;</code>
      标签来显示多行代码。再次提醒，为确保正确呈现，请确保代码中的所有尖括号都被转义。<code>&lt;pre&gt;</code>
      元素将被重置，以移除其 <code>margin-top</code>，并为其 <code>margin-bottom</code> 使用 <code>rem</code> 单位。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;&lt;p&gt;And another line of sample text here...&lt;/p&gt;</code></pre>
      </div>
      <code-highlight type="html" :code="codeBlockCode" label="html" />
    </div>

    <h2 id="reboot-var">变量<a class="anchor-link" aria-label="Link to this section: 变量" href="#reboot-var"> </a></h2>
    <p>要表示变量，请使用 <code>&lt;var&gt;</code> 标签。</p>
    <div class="docs-example">
      <div class="docs-example-data"><var>y</var> = <var>m</var><var>x</var> + <var>b</var></div>
      <code-highlight type="html" :code="varCode" label="html" />
    </div>

    <h2 id="reboot-user-input">
      用戶输入
      <a class="anchor-link" aria-label="Link to this section: 用戶输入" href="#reboot-user-input"> </a>
    </h2>
    <p>使用 <code>&lt;kbd&gt;</code> 来标示通常通过键盘输入的内容。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br />
        To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>
      </div>
      <code-highlight type="html" :code="userInputCode" label="html" />
    </div>

    <h2 id="reboot-sample-output">
      示例输出<a class="anchor-link" aria-label="Link to this section: 示例输出" href="#reboot-sample-output"> </a>
    </h2>
    <p>要表示程序输出的示例，请使用 <code>&lt;samp&gt;</code> 标签。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <samp>This text is meant to be treated as sample output from a computer program.</samp>
      </div>
      <code-highlight type="html" :code="sampleOutputCode" label="html" />
    </div>

    <h2 id="reboot-table">
      表格<a class="anchor-link" aria-label="Link to this section: 表格" href="#reboot-table"> </a>
    </h2>
    <p>
      表格经过细微调整，以规范
      <code>&lt;caption&gt;</code> 的样式，折叠边框，并确保整个文档中
      <code>text-align</code>
      的一致性。关于边框、填充等更多方面的其他更改，请参阅
      <a href="https://getbootstrap.com/docs/content/tables" target="_blank">带有 <code>.table</code> 类的内容</a>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data pb-0">
        <table>
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
        </table>
      </div>
      <code-highlight type="html" :code="tableCode" label="html" />
    </div>

    <h2 id="reboot-form">
      表单<a class="anchor-link" aria-label="Link to this section: 表单" href="#reboot-form"> </a>
    </h2>
    <p>各种表单元素已重新设计，以实现更简洁的基础样式。以下是一些最显著的更改：</p>
    <ul class="docs-content-list">
      <li>
        <code>&lt;fieldset&gt;</code>
        没有边框、填充或边距，因此可以轻松用作单个输入框或输入框组的容器。
      </li>
      <li>
        <code>&lt;legend&gt;</code>
        与字段集（fieldsets）一样，也经过了重新设计，以显示为类似标题的样式。
      </li>
      <li><code>&lt;label&gt;</code> 被设置为 <code>display: inline-block</code>，以便应用 <code>margin</code>。</li>
      <li>
        <code>&lt;input&gt;</code>、<code>&lt;select&gt;</code>、<code>&lt;textarea&gt;</code> 和
        <code>&lt;button&gt;</code> 的样式主要由 Normalize 处理，但 Reboot 会移除它们的 <code>margin</code> 并设置
        <code>line-height: inherit</code>。
      </li>
      <li>
        <code>&lt;textarea&gt;</code>
        被修改为仅可垂直调整大小，因为水平调整大小往往会“破坏”页面布局。
      </li>
      <li>
        当 <code>:not(:disabled)</code> 时，<code>&lt;button&gt;</code> 和 <code>&lt;input&gt;</code> 按钮元素具有
        <code>cursor: pointer</code> 样式。
      </li>
    </ul>
    <p>这些变化以及其他更多内容将在下文进行展示。</p>
    <p class="text-bg-warning">
      某些日期输入类型在最新版本的 Safari 和 Firefox 中
      <a href="https://caniuse.com/input-datetime" target="_blank">并未得到完全支持</a>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form>
          <fieldset>
            <legend>Example legend</legend>
            <p>
              <label for="input">Example input</label>
              <input type="text" id="input" placeholder="Example input" />
            </p>
            <p>
              <label for="email">Example email</label>
              <input type="email" id="email" placeholder="test@example.com" />
            </p>
            <p>
              <label for="tel">Example telephone</label>
              <input type="tel" id="tel" />
            </p>
            <p>
              <label for="url">Example url</label>
              <input type="url" id="url" />
            </p>
            <p>
              <label for="number">Example number</label>
              <input type="number" id="number" />
            </p>
            <p>
              <label for="search">Example search</label>
              <input type="search" id="search" />
            </p>
            <p>
              <label for="range">Example range</label>
              <input type="range" id="range" min="0" max="10" />
            </p>
            <p>
              <label for="file">Example file input</label>
              <input type="file" id="file" />
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
                <input type="checkbox" value="" />
                Check this checkbox
              </label>
            </p>
            <p>
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                Option one is this and that
              </label>
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                Option two is something else that’s also super long to demonstrate the wrapping of these fancy form
                controls.
              </label>
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                Option three is disabled
              </label>
            </p>
            <p>
              <label for="textarea">Example textarea</label>
              <textarea id="textarea" rows="3"></textarea>
            </p>
            <p>
              <label for="date">Example date</label>
              <input type="date" id="date" />
            </p>
            <p>
              <label for="time">Example time</label>
              <input type="time" id="time" />
            </p>
            <p>
              <label for="password">Example password</label>
              <input type="password" id="password" />
            </p>
            <p>
              <label for="datetime-local">Example datetime-local</label>
              <input type="datetime-local" id="datetime-local" />
            </p>
            <p>
              <label for="week">Example week</label>
              <input type="week" id="week" />
            </p>
            <p>
              <label for="month">Example month</label>
              <input type="month" id="month" />
            </p>
            <p>
              <label for="color">Example color</label>
              <input type="color" id="color" />
            </p>
            <p>
              <label for="output">Example output</label>
              <output name="result" id="output">100</output>
            </p>
            <p>
              <button type="submit">Button submit</button>
              <input type="submit" value="Input submit button" />
              <input type="reset" value="Input reset button" />
              <input type="button" value="Input button" />
            </p>
            <p>
              <button type="submit" disabled="">Button submit</button>
              <input type="submit" value="Input submit button" disabled="" />
              <input type="reset" value="Input reset button" disabled="" />
              <input type="button" value="Input button" disabled="" />
            </p>
          </fieldset>
        </form>
      </div>
    </div>

    <h2 id="reboot-button-pointer">
      按钮上的指针<a class="anchor-link" aria-label="Link to this section: 按钮上的指针" href="#reboot-button-pointer">
      </a>
    </h2>
    <p>
      Reboot 包含一项针对
      <code>role="button"</code> 的增强功能，可将默认光标更改为
      <code>pointer</code>。将此属性添加到元素中，有助于表明这些元素是可交互的。对于
      <code>&lt;button&gt;</code> 元素而言，此 role 并非必需，因为它们本身就会更改 <code>cursor</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <span role="button" tabindex="0">Non-button element button</span>
      </div>
      <code-highlight type="html" :code="buttonPointerCode" label="html" />
    </div>

    <h2 id="reboot-address">
      地址<a class="anchor-link" aria-label="Link to this section: 地址" href="#reboot-address"> </a>
    </h2>
    <p>
      <code>&lt;address&gt;</code> 元素已更新，可将浏览器默认的 <code>font-style</code> 从 <code>italic</code> 更改为
      <code>normal</code>。现在 <code>line-height</code> 也会被继承，并且添加了 <code>margin-bottom: 1rem</code>。<code
        >&lt;address&gt;</code
      >
      用于展示最近的祖先（或整个作品集）的联系信息。通过在行尾使用
      <code>&lt;br&gt;</code> 来保留格式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <address>
          <strong>ACME Corporation</strong><br />
          1123 Fictional St,<br />
          San Francisco, CA 94103<br />
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <address>
          <strong>Full Name</strong><br />
          <a href="mailto:first.last@example.com">first.last@example.com</a>
        </address>
      </div>
      <code-highlight type="html" :code="addressCode" label="html" />
    </div>

    <h2 id="reboot-blockquote">
      引用<a class="anchor-link" aria-label="Link to this section: 缩写" href="#reboot-blockquote"> </a>
    </h2>
    <p>
      块引用（blockquote）的默认 <code>margin</code> 是 <code>1em 40px</code>，因此我们将其重置为
      <code>0 0 1rem</code>，以便与其他元素保持一致。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <figure>
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption>Someone famous in <cite title="Source Title">Source Title</cite></figcaption>
        </figure>
      </div>
      <code-highlight type="html" :code="blockquoteCode" label="html" />
    </div>

    <h2 id="reboot-abbr">
      缩写<a class="anchor-link" aria-label="Link to this section: 缩写" href="#reboot-abbr"> </a>
    </h2>
    <p><code>&lt;abbr&gt;</code> 元素会应用基本的样式，使其在段落文本中脱颖而出。</p>
    <div class="docs-example">
      <div class="docs-example-data">The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.</div>
      <code-highlight type="html" :code="abbrCode" label="html" />
    </div>

    <h2 id="reboot-summary">
      Summary<a class="anchor-link" aria-label="Link to this section: Summary" href="#reboot-summary"> </a>
    </h2>
    <p>
      摘要上的默认 <code>cursor</code> 是 <code>text</code>，因此我们将其重置为
      <code>pointer</code>，以传达该元素可通过点击进行交互的信息。
    </p>
    <div class="docs-example">
      <div class="docs-example-data pb-0">
        <details>
          <summary>Some details</summary>
          <p>More info about the details.</p>
        </details>
        <details open>
          <summary>Even more details</summary>
          <p>Here are even more details about the details.</p>
        </details>
      </div>
      <code-highlight type="html" :code="summaryCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const variablesCode = `
@if $font-size-root != null {
  --#{$prefix}root-font-size: #{$font-size-root};
}
--#{$prefix}body-font-family: #{inspect($font-family-base)};
@include rfs($font-size-base, --#{$prefix}body-font-size);
--#{$prefix}body-font-weight: #{$font-weight-base};
--#{$prefix}body-line-height: #{$line-height-base};
@if $body-text-align != null {
  --#{$prefix}body-text-align: #{$body-text-align};
}

--#{$prefix}body-color: #{$body-color};
--#{$prefix}body-color-rgb: #{to-rgb($body-color)};
--#{$prefix}body-bg: #{$body-bg};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

--#{$prefix}emphasis-color: #{$body-emphasis-color};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

--#{$prefix}secondary-color: #{$body-secondary-color};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};
--#{$prefix}secondary-bg: #{$body-secondary-bg};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

--#{$prefix}tertiary-color: #{$body-tertiary-color};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};`;

const links1Code = `
<a href="#">This is an example link</a>`;

const links2Code = `
<a href="#" style="--bs-link-opacity: .5">This is an example link</a>`;

const links3Code = `
<a>This is a placeholder link</a>`;

const horizontalCode = `
<hr>

<div class="text-success">
  <hr>
</div>

<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">`;

const codeBlockCode = `
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre> `;

const varCode = `
<var>y</var> = <var>m</var><var>x</var> + <var>b</var> `;

const userInputCode = `
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd> `;

const sampleOutputCode = `
<samp>This text is meant to be treated as sample output from a computer program.</samp> `;

const tableCode = `
<table>
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
    ...
  </tbody>
</table>`;

const buttonPointerCode = `
<span role="button" tabindex="0">Non-button element button</span>`;

const addressCode = `
<address>
  <strong>ACME Corporation</strong><br>
  1123 Fictional St,<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
  <strong>Full Name</strong><br>
  <a href="mailto:first.last@example.com">first.last@example.com</a>
</address>`;

const blockquoteCode = `
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption>
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`;

const abbrCode = `
The <abbr title="HyperText Markup Language">HTML</abbr> abbreviation element.`;

const summaryCode = `
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>
<details open>
  <summary>Even more details</summary>
  <p>Here are even more details about the details.</p>
</details>`;
</script>
