<template>
  <div class="docs-toc">
    <nav id="docs-nav-input-group">
      <a href="#input-group-base">基本示例</a>
      <a href="#input-group-wrapping">包裹</a>
      <a href="#input-group-radius">边框半径</a>
      <a href="#input-group-sizing">尺寸调整</a>
      <a href="#input-group-checkbox">复选框和单选按钮</a>
      <a href="#input-group-inputs">多重输入</a>
      <a href="#input-group-addons">多个附加组件</a>
      <a href="#input-group-button-addons">按钮附加组件</a>
      <a href="#input-group-button-dropdowns">带下拉菜单的按钮</a>
      <a href="#input-group-segmented">分段按钮</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-input-group" class="docs-content">
    <h1>Input group 输入组</h1>
    <p class="fs-4 fw-light">
      通过在文本输入框、自定义选择框和自定义文件输入框的两侧添加文本、按钮或按钮组，可以轻松扩展表单控件。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/input-group/" target="_blank">Bootstrap Form Input group</a>
    </p>

    <h2 id="input-group-base">
      基本示例<a class="anchor-link" aria-label="Link to this section: 基本示例" href="#input-group-base"> </a>
    </h2>
    <p>
      在输入框的任一侧放置一个附加组件或按钮。你也可以在输入框的两侧各放置一个。请记住将
      <code>&lt;label&gt;</code> 标签放在输入框组的外部。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient’s username"
            aria-label="Recipient’s username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div>

        <div class="mb-3">
          <label for="basic-url" class="form-label">Your vanity URL</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
          </div>
          <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
          <span class="input-group-text">.00</span>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
        </div>

        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <code-highlight type="html" :code="baseCode" label="html" />
    </div>

    <h2 id="input-group-wrapping">
      包裹<a class="anchor-link" aria-label="Link to this section: 包裹" href="#input-group-wrapping"> </a>
    </h2>
    <p>
      输入组默认通过
      <code>flex-wrap: wrap</code>
      进行换行，以便在输入组内进行自定义表单字段验证。您可以使用
      <code>.flex-nowrap</code> 禁用此功能。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <code-highlight type="html" :code="wrappingCode" label="html" />
    </div>

    <h2 id="input-group-radius">
      边框半径<a class="anchor-link" aria-label="Link to this section: 边框半径" href="#input-group-radius"> </a>
    </h2>
    <p>
      由于当时浏览器支持的局限性，<code>border-radius</code> 样式只能应用于
      <code>.input-group</code>
      类中的第一个和最后一个子元素。如果这些位置中的任何一个存在不可见元素，都会导致输入组呈现错误。遗憾的是，这个问题很可能要到v6版本才能解决。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group">
          <span class="input-group-text" id="visible-addon">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="visible-addon"
          />
          <input
            type="text"
            class="form-control d-none"
            placeholder="Hidden input"
            aria-label="Hidden input"
            aria-describedby="visible-addon"
          />
        </div>
      </div>
      <code-highlight type="html" :code="radiusCode" label="html" />
    </div>

    <h2 id="input-group-sizing">
      尺寸调整<a class="anchor-link" aria-label="Link to this section: 尺寸调整" href="#input-group-sizing"> </a>
    </h2>
    <p>
      将相对形式的尺寸类添加到
      <code>.input-group</code>
      本身及其内容中，内容将自动调整大小——无需在每个元素上重复表单控件尺寸类。
    </p>
    <p><strong>不支持对单个输入组元素进行尺寸设置。</strong></p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>
      <code-highlight type="html" :code="sizingCode" label="html" />
    </div>

    <h2 id="input-group-checkbox">
      复选框和单选按钮<a
        class="anchor-link"
        aria-label="Link to this section: Checkboxes and radios"
        href="#input-group-checkbox"
      >
      </a>
    </h2>
    <p>
      将任何复选框或单选选项放置在输入组的附加组件内，而不是文本旁边。当输入框旁边没有可见文本时，我们建议在
      <code>.form-check-input</code> 中添加 <code>.mt-0</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input type="text" class="form-control" aria-label="Text input with checkbox" />
        </div>

        <div class="input-group">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="radio"
              value=""
              aria-label="Radio button for following text input"
            />
          </div>
          <input type="text" class="form-control" aria-label="Text input with radio button" />
        </div>
      </div>
      <code-highlight type="html" :code="checkboxCode" label="html" />
    </div>

    <h2 id="input-group-inputs">
      多重输入<a class="anchor-link" aria-label="Link to this section: 多重输入" href="#input-group-inputs"> </a>
    </h2>
    <p>
      虽然视觉上支持多个 <code>&lt;input&gt;</code>，但验证样式仅适用于包含单个 <code>&lt;input&gt;</code> 的输入组。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>
      </div>
      <code-highlight type="html" :code="inputsCode" label="html" />
    </div>

    <h2 id="input-group-addons">
      多个附加组件<a class="anchor-link" aria-label="Link to this section: 多个附加组件" href="#input-group-addons">
      </a>
    </h2>
    <p>它支持多个附加组件，可以与复选框和单选框输入版本混合使用。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
        </div>

        <div class="input-group">
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
          <span class="input-group-text">$</span>
          <span class="input-group-text">0.00</span>
        </div>
      </div>
      <code-highlight type="html" :code="addonsCode" label="html" />
    </div>

    <h2 id="input-group-button-addons">
      按钮附加组件<a
        class="anchor-link"
        aria-label="Link to this section: 按钮附加组件"
        href="#input-group-button-addons"
      >
      </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient’s username"
            aria-label="Recipient’s username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>

        <div class="input-group mb-3">
          <button class="btn btn-outline-secondary" type="button">Button</button>
          <button class="btn btn-outline-secondary" type="button">Button</button>
          <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" />
        </div>

        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient’s username"
            aria-label="Recipient’s username with two button addons"
          />
          <button class="btn btn-outline-secondary" type="button">Button</button>
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
      <code-highlight type="html" :code="buttonAddonsCode" label="html" />
    </div>

    <h2 id="input-group-button-dropdowns">
      带下拉菜单的按钮<a
        class="anchor-link"
        aria-label="Link to this section: 带下拉菜单的按钮"
        href="#input-group-button-dropdowns"
      >
      </a>
    </h2>
    <p>在下拉菜单的触发元素上运用 <code>v-dropdown</code> 指令。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <button v-dropdown class="btn btn-outline-secondary dropdown-toggle" type="button" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input type="text" class="form-control" aria-label="Text input with dropdown button" />
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Text input with dropdown button" />
          <button v-dropdown class="btn btn-outline-secondary dropdown-toggle" type="button" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>

        <div class="input-group">
          <button v-dropdown class="btn btn-outline-secondary dropdown-toggle" type="button" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action before</a></li>
            <li><a class="dropdown-item" href="#">Another action before</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
          <button v-dropdown class="btn btn-outline-secondary dropdown-toggle" type="button" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <code-highlight type="html" :code="dropdownCode" label="html" />
    </div>

    <h2 id="input-group-segmented">
      分段按钮<a class="anchor-link" aria-label="Link to this section: 分段按钮" href="#input-group-segmented"> </a>
    </h2>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group mb-3">
          <button type="button" class="btn btn-outline-secondary">Action</button>
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            v-dropdown
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
        </div>

        <div class="input-group">
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
          <button type="button" class="btn btn-outline-secondary">Action</button>
          <button
            type="button"
            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            v-dropdown
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <code-highlight type="html" :code="segmentedCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const baseCode = `
<div class="input-group mb-3">
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
</div>`;

const wrappingCode = `
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>`;

const radiusCode = `
<div class="input-group">
  <span class="input-group-text" id="visible-addon">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="visible-addon">
  <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon">
</div>`;

const sizingCode = `
<div class="input-group input-group-sm mb-3">
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
</div>`;

const checkboxCode = `
<div class="input-group mb-3">
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
</div>`;

const inputsCode = `
<div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div>`;

const addonsCode = `
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  <span class="input-group-text">$</span>
  <span class="input-group-text">0.00</span>
</div>`;

const buttonAddonsCode = `
<div class="input-group mb-3">
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
</div>`;

const dropdownCode = `
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" v-dropdown aria-expanded="false">Dropdown</button>
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
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" v-dropdown aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" v-dropdown aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action before</a></li>
    <li><a class="dropdown-item" href="#">Another action before</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" v-dropdown aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>`;

const segmentedCode = `
<div class="input-group mb-3">
  <button type="button" class="btn btn-outline-secondary">Action</button>
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" v-dropdown aria-expanded="false">
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
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" v-dropdown aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>`;
</script>
