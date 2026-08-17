<template>
  <div class="docs-toc">
    <nav id="docs-nav-form-control">
      <a href="#form-control-example">示例</a>
      <a href="#form-control-sizing">尺寸调整</a>
      <a href="#form-control-form-text">表单文本</a>
      <a href="#form-control-disabled">禁用</a>
      <a href="#form-control-readonly">只读</a>
      <a href="#form-control-plain">只读纯文本</a>
      <a href="#form-control-file">文件输入</a>
      <a href="#form-control-color">颜色选择器</a>
      <a href="#form-control-datalists">数据列表</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-form-control" class="docs-content">
    <h1>Form controls 表单控件</h1>
    <p class="fs-4 fw-light">
      通过自定义样式、尺寸、聚焦状态等，对文本表单控件（如
      <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code>）进行升级。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/form-control/" target="_blank">Bootstrap Form Form controls</a>
    </p>

    <h2 id="form-control-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#form-control-example"> </a>
    </h2>
    <p>采用 Sass 和 CSS 变量的混合方式进行样式设置，使其能够适应不同的颜色模式，并支持任何自定义方法。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="form-control-sizing">
      尺寸调整<a class="anchor-link" aria-label="Link to this section: 尺寸调整" href="#form-control-sizing"> </a>
    </h2>
    <p>使用如 <code>.form-control-lg</code> 和 <code>.form-control-sm</code> 这样的类来设置高度。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="vstack gap-3">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
          />
          <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder=".form-control-sm"
            aria-label=".form-control-sm example"
          />
        </div>
      </div>
      <code-highlight type="html" :code="sizingCode" label="html" />
    </div>

    <h2 id="form-control-form-text">
      表单文本<a class="anchor-link" aria-label="Link to this section: 表单文本" href="#form-control-form-text"> </a>
    </h2>
    <p>块级或内联级别的表单文本可以使用 <code>.form-text</code> 来创建。</p>
    <p class="text-bg-warning">
      表单文本应使用
      <code>aria-describedby</code>
      属性明确地与其相关的表单控件相关联。这将确保辅助技术（如屏幕阅读器）在用户聚焦或输入控件时，会朗读此表单文本。
    </p>
    <p>
      输入框下方的表单文本可以使用
      <code>.form-text</code>
      进行样式设置。如果使用块级元素，则为其添加上边距，以便与上方的输入框轻松分隔。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
        <div id="passwordHelpBlock" class="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special
          characters, or emoji.
        </div>
      </div>
      <code-highlight type="html" :code="textCode" label="html" />
    </div>

    <h2 id="form-control-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#form-control-disabled"> </a>
    </h2>
    <p>
      在输入框上添加
      <code>disabled</code> 布尔属性，使其外观变灰，移除鼠标事件，并阻止聚焦。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="vstack gap-3">
          <input
            class="form-control"
            type="text"
            placeholder="Disabled input"
            aria-label="Disabled input example"
            disabled
          />
          <input
            class="form-control"
            type="text"
            value="Disabled readonly input"
            aria-label="Disabled input example"
            disabled
            readonly
          />
        </div>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>

    <h2 id="form-control-readonly">
      只读<a class="anchor-link" aria-label="Link to this section: 只读" href="#form-control-readonly"> </a>
    </h2>
    <p>
      在输入框上添加 <code>readonly</code> 布尔属性，以防止修改输入框的值。<code>readonly</code>
      输入框仍然可以被聚焦和选中，而 <code>disabled</code> 输入框则不能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <input
          class="form-control"
          type="text"
          value="Readonly input here..."
          aria-label="readonly input example"
          readonly
        />
      </div>
      <code-highlight type="html" :code="readonlyCode" label="html" />
    </div>

    <h2 id="form-control-plain">
      只读纯文本<a class="anchor-link" aria-label="Link to this section: 只读纯文本" href="#form-control-plain"> </a>
    </h2>
    <p>
      如果你想让表单中的
      <code>&lt;input readonly&gt;</code> 元素呈现纯文本样式，请将 <code>.form-control</code> 替换为
      <code>.form-control-plaintext</code>，以移除默认的表单字段样式，同时保留正确的 <code>margin</code> 和
      <code>padding</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="plainCode" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <form class="row g-3">
          <div class="col-auto">
            <label for="staticEmail2" class="visually-hidden">Email</label>
            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
          </div>
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="plaininlineCode" label="html" />
    </div>

    <h2 id="form-control-file">
      文件输入<a class="anchor-link" aria-label="Link to this section: 文件输入" href="#form-control-file"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mb-3">
          <label for="formFile" class="form-label">Default file input example</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">Multiple files input example</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <div class="mb-3">
          <label for="formFileDisabled" class="form-label">Disabled file input example</label>
          <input class="form-control" type="file" id="formFileDisabled" disabled />
        </div>
        <div class="mb-3">
          <label for="formFileSm" class="form-label">Small file input example</label>
          <input class="form-control form-control-sm" id="formFileSm" type="file" />
        </div>
        <div>
          <label for="formFileLg" class="form-label">Large file input example</label>
          <input class="form-control form-control-lg" id="formFileLg" type="file" />
        </div>
      </div>
      <code-highlight type="html" :code="fileCode" label="html" />
    </div>

    <h2 id="form-control-color">
      颜色选择器<a class="anchor-link" aria-label="Link to this section: 颜色选择器" href="#form-control-color"> </a>
    </h2>
    <p>
      设置 <code>type="color"</code> 属性，并将 <code>.form-control-color</code> 添加到
      <code>&lt;input&gt;</code> 元素中。我们使用修饰类来设定固定的
      <code>height</code> 并解决不同浏览器之间的某些不一致问题。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="exampleColorInput" class="form-label">Color picker</label>
        <input
          type="color"
          class="form-control form-control-color"
          id="exampleColorInput"
          value="#563d7c"
          title="Choose your color"
        />
      </div>
      <code-highlight type="html" :code="colorCode" label="html" />
    </div>

    <h2 id="form-control-datalists">
      数据列表<a class="anchor-link" aria-label="Link to this section: 数据列表" href="#form-control-datalists"> </a>
    </h2>
    <p>
      数据列表允许您创建一组 <code>&lt;option&gt;</code>，这些选项可以从
      <code>&lt;input&gt;</code> 中访问（并自动补全）。它们类似于
      <code>&lt;select&gt;</code>
      元素，但具有更多的菜单样式限制和差异。虽然大多数浏览器和操作系统都包含对
      <code>&lt;datalist&gt;</code>
      元素的一些支持，但它们的样式充其量也是不一致的。
    </p>
    <p>
      了解更多关于
      <a href="https://caniuse.com/datalist" target="_blank">对数据列表元素的支持</a>
      的信息。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <label for="exampleDataList" class="form-label">Datalist example</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist>
      </div>
      <code-highlight type="html" :code="datalistsCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const exampleCode = `
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`;

const sizingCode = `
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example"/>
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/>`;

const textCode = `
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>`;

const disabledCode = `
<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>`;

const readonlyCode = `
<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>
`;
const plainCode = `
<div class="mb-3 row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
  </div>
</div>
<div class="mb-3 row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" class="form-control" id="inputPassword">
  </div>
</div>`;

const plaininlineCode = `
<form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>`;

const fileCode = `
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
<div class="mb-3">
  <label for="formFileDisabled" class="form-label">Disabled file input example</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
<div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file">
</div>
<div>
  <label for="formFileLg" class="form-label">Large file input example</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>`;

const colorCode = `
<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">`;

const datalistsCode = `
<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
    <option value="San Francisco"></option>
    <option value="New York"></option>
    <option value="Seattle"></option>
    <option value="Los Angeles"></option>
    <option value="Chicago"></option>
</datalist>`;
</script>
