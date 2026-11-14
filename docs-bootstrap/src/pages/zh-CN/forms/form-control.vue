<template>
  <article class="bd-content" data-pagefind-body>
    <h1>表单控件</h1>
    <p class="lead">通过自定义样式、尺寸、聚焦状态等，升级 `&lt;input&gt;` 和 `&lt;textarea&gt;` 等文本表单控件。</p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例链接"></a></h2>
    <p>表单控件使用 Sass 和 CSS 变量组合进行样式设置，使其能够适配颜色模式并支持任何自定义方式。</p>
    <Example
      code='<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>'
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>使用 <code>.form-control-lg</code> 和 <code>.form-control-sm</code> 等类设置高度。</p>
    <Example
      code='<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">'
    />
    <h2 id="form-text">表单文本<a class="anchor-link" href="#form-text" aria-label="表单文本链接"></a></h2>
    <p>可以使用 <code>.form-text</code> 创建块级或行内级表单文本。</p>
    <Callout type="warning">
      <p>应使用 <code>aria-describedby</code> 属性将表单文本与其相关的表单控件显式关联起来。这样可以确保辅助技术（例如屏幕阅读器）在用户聚焦或进入该控件时读出这段表单文本。</p>
    </Callout>
    <p>输入框下方的表单文本可使用 <code>.form-text</code> 设置样式。如果使用块级元素，会添加上外边距，以便与上方的输入框轻松留出间距。</p>
    <Example
      code='<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>'
    />
    <p>行内文本可以使用任何常规的行内 HTML 元素（如 <code>&lt;span&gt;</code>、<code>&lt;small&gt;</code> 等），只需搭配 <code>.form-text</code> 类即可。</p>
    <Example
      code='<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>'
    />
    <h2 id="disabled">禁用状态<a class="anchor-link" href="#disabled" aria-label="禁用状态链接"></a></h2>
    <p>在输入框上添加 <code>disabled</code> 布尔属性，可使其呈现灰色外观、移除指针事件并阻止获得焦点。</p>
    <Example
      code='<input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
<input class="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly>'
    />
    <h2 id="readonly">只读<a class="anchor-link" href="#readonly" aria-label="只读链接"></a></h2>
    <p>在输入框上添加 <code>readonly</code> 布尔属性，可防止修改输入框的值。<code>readonly</code> 输入框仍然可以获得焦点并被选中，而 <code>disabled</code> 输入框则不能。</p>
    <Example code='<input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>' />
    <h2 id="readonly-plain-text">只读纯文本<a class="anchor-link" href="#readonly-plain-text" aria-label="只读纯文本链接"></a></h2>
    <p>如果你希望表单中的 <code>&lt;input readonly&gt;</code> 元素以纯文本样式呈现，请将 <code>.form-control</code> 替换为 <code>.form-control-plaintext</code>，以移除默认的表单字段样式，同时保留正确的 <code>margin</code> 和 <code>padding</code>。</p>
    <Example
      code='<div class="mb-3 row">
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
</div>'
    /><Example
      code='<form class="row g-3">
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
</form>'
    />
    <h2 id="file-input">文件输入框<a class="anchor-link" href="#file-input" aria-label="文件输入框链接"></a></h2>
    <Example
      code='<div class="mb-3">
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
</div>'
    />
    <h2 id="color">颜色<a class="anchor-link" href="#color" aria-label="颜色链接"></a></h2>
    <p>在 <code>&lt;input&gt;</code> 上设置 <code>type=&quot;color&quot;</code> 并添加 <code>.form-control-color</code>。我们使用这个修饰类来设置固定的 <code>height</code>，并覆盖浏览器之间的一些不一致之处。</p>
    <Example
      code='<label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">'
    />
    <h2 id="datalists">数据列表<a class="anchor-link" href="#datalists" aria-label="数据列表链接"></a></h2>
    <p>数据列表允许你在 <code>&lt;input&gt;</code> 中访问（并自动补全）一组 <code>&lt;option&gt;</code>。它们与 <code>&lt;select&gt;</code> 元素类似，但菜单样式的限制和差异更多。虽然大多数浏览器和操作系统都对 <code>&lt;datalist&gt;</code> 元素提供了一定支持，但它们的样式充其量也只是不一致的。</p>
    <p>进一步了解 <a href="https://caniuse.com/datalist">数据列表元素的支持情况</a> 。</p>
    <Example
      code='<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p><code>$input-*</code> 在我们的大多数表单控件（不包括按钮）之间共享。</p>
    <ScssDocs name="form-input-variables" file="scss/_variables.scss" />
    <p><code>$form-label-*</code> 和 <code>$form-text-*</code> 用于我们的 <code>&lt;label&gt;</code> 和 <code>.form-text</code> 组件。</p>
    <ScssDocs name="form-label-variables" file="scss/_variables.scss" /><ScssDocs name="form-text-variables" file="scss/_variables.scss" />
    <p><code>$form-file-*</code> 用于文件输入框。</p>
    <ScssDocs name="form-file-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#example">示例</a></li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#form-text">表单文本</a></li>
      <li><a href="#disabled">禁用状态</a></li>
      <li><a href="#readonly">只读</a></li>
      <li><a href="#readonly-plain-text">只读纯文本</a></li>
      <li><a href="#file-input">文件输入框</a></li>
      <li><a href="#color">颜色</a></li>
      <li><a href="#datalists">数据列表</a></li>
      <li>
        <a href="#css">CSS</a>
        <ul>
          <li><a href="#sass-variables">Sass 变量</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
