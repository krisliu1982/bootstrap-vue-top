<template>
  <article class="bd-content" data-pagefind-body>
    <h1>输入框组</h1>
    <p class="lead">通过在文本输入框、自定义选择框和自定义文件输入框的任意一侧添加文本、按钮或按钮组，轻松扩展表单控件。</p>

    <h2 id="basic-example">基础示例<a class="anchor-link" href="#basic-example" aria-label="基础示例链接"></a></h2>
    <p>在输入框的任意一侧放置一个附加组件或按钮，也可以在输入框的两侧各放置一个。请记住将 <code>&lt;label&gt;</code> 放在输入框组之外。</p>
    <Example
      code='<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
  </div>
  <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>'
    />
    <h2 id="wrapping">换行<a class="anchor-link" href="#wrapping" aria-label="换行链接"></a></h2>
    <p>为了容纳输入框组内的自定义表单字段校验，输入框组默认通过 <code>flex-wrap: wrap</code> 换行。你可以使用 <code>.flex-nowrap</code> 禁用换行。</p>
    <Example
      code='<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>'
    />
    <h2 id="border-radius">圆角<a class="anchor-link" href="#border-radius" aria-label="圆角链接"></a></h2>
    <p>由于当时浏览器支持的限制，<code>border-radius</code> 样式只能应用于 <code>.input-group</code> 类中的第一个和最后一个子元素。处于这些位置上的任何不可见元素都会导致输入框组渲染错误。遗憾的是，这很可能要到 v6 才能修复。</p>
    <Example
      code='<div class="input-group">
  <span class="input-group-text" id="visible-addon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="visible-addon">
  <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon">
</div>'
    />
    <h2 id="sizing">尺寸<a class="anchor-link" href="#sizing" aria-label="尺寸链接"></a></h2>
    <p>将相应的表单尺寸类添加到 <code>.input-group</code> 本身，其中的内容便会自动调整尺寸——无需在每个元素上重复表单控件的尺寸类。</p>
    <p><strong>不支持对输入框组中的单个元素设置尺寸。</strong></p>
    <Example
      code='<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
</div>'
    />
    <h2 id="checkboxes-and-radios">复选框与单选按钮<a class="anchor-link" href="#checkboxes-and-radios" aria-label="复选框与单选按钮链接"></a></h2>
    <p>
      可以将任何复选框或单选按钮选项放在输入框组的附加组件中，而不是放置文本。当输入框旁边没有可见文本时，我们建议为 <code>.form-check-input</code> 添加 <code>.mt-0</code>。
    </p>
    <Example
      code='<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>'
    />
    <h2 id="multiple-inputs">多个输入框<a class="anchor-link" href="#multiple-inputs" aria-label="多个输入框链接"></a></h2>
    <p>虽然在视觉上支持多个 <code>&lt;input&gt;</code>，但校验样式仅适用于只包含一个 <code>&lt;input&gt;</code> 的输入框组。</p>
    <Example
      code='<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>'
    />
    <h2 id="multiple-addons">多个附加组件<a class="anchor-link" href="#multiple-addons" aria-label="多个附加组件链接"></a></h2>
    <p>支持多个附加组件，并可与复选框和单选按钮输入版本混合使用。</p>
    <Example
      code='<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>'
    />
    <h2 id="button-addons">按钮附加组件<a class="anchor-link" href="#button-addons" aria-label="按钮附加组件链接"></a></h2>
    <Example
      code='<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons">
</div>

<div class="input-group">
  <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username with two button addons">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>'
    />
    <h2 id="buttons-with-dropdowns">带下拉菜单的按钮<a class="anchor-link" href="#buttons-with-dropdowns" aria-label="带下拉菜单的按钮链接"></a></h2>
    <Example
      code='<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action before</a></li>
    <li><a class="dropdown-item" href="#">Another action before</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>'
    />
    <h2 id="segmented-buttons">分段按钮<a class="anchor-link" href="#segmented-buttons" aria-label="分段按钮链接"></a></h2>
    <Example
      code='<div class="input-group mb-3">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>'
    />
    <h2 id="custom-forms">自定义表单<a class="anchor-link" href="#custom-forms" aria-label="自定义表单链接"></a></h2>
    <p>输入框组支持自定义选择框和自定义文件输入框。不支持这些元素的浏览器默认版本。</p>
    <h3 id="custom-select">自定义选择框<a class="anchor-link" href="#custom-select" aria-label="自定义选择框链接"></a></h3>
    <Example
      code='<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Options</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button">Button</button>
  <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Button</button>
</div>'
    />
    <h3 id="custom-file-input">自定义文件输入框<a class="anchor-link" href="#custom-file-input" aria-label="自定义文件输入框链接"></a></h3>
    <Example
      code='<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input type="file" class="form-control" id="inputGroupFile01">
</div>

<div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
  <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
</div>

<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
  <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
</div>'
    />
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <ScssDocs name="input-group-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#basic-example">基础示例</a></li>
      <li><a href="#wrapping">换行</a></li>
      <li><a href="#border-radius">圆角</a></li>
      <li><a href="#sizing">尺寸</a></li>
      <li><a href="#checkboxes-and-radios">复选框与单选按钮</a></li>
      <li><a href="#multiple-inputs">多个输入框</a></li>
      <li><a href="#multiple-addons">多个附加组件</a></li>
      <li><a href="#button-addons">按钮附加组件</a></li>
      <li><a href="#buttons-with-dropdowns">带下拉菜单的按钮</a></li>
      <li><a href="#segmented-buttons">分段按钮</a></li>
      <li>
       <a href="#custom-forms">自定义表单</a>
        <ul>
          <li><a href="#custom-select">自定义选择框</a></li>
          <li><a href="#custom-file-input">自定义文件输入框</a></li>
        </ul>
      </li>
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
