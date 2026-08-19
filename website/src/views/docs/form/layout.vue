<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-layout">
      <a href="#layout-forms">表单</a>
      <a href="#layout-utilities">工具使用</a>
      <a href="#layout-grid">表单网格</a>
      <a href="#layout-table">表单表格</a>
      <a href="#layout-gutters">Gutters</a>
      <a href="#layout-horizontal">水平形式</a>
      <a href="#layout-label">标签尺寸</a>
      <a href="#layout-sizing">列宽调整</a>
      <a href="#layout-auto">自动调整大小</a>
      <a href="#layout-inline">内联表单</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-layout" class="docs-content">
    <h1>Layout 布局</h1>
    <p class="fs-4 fw-light">
      利用我们的表单布局选项，为您的表单赋予结构——从内联到水平再到自定义网格实现。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/layout/" target="_blank">Bootstrap Form Layout</a>
    </p>

    <h2 id="layout-forms">
      表单<a class="anchor-link" aria-label="Link to this section: 表单" href="#layout-forms"> </a>
    </h2>
    <p>
      每一组表单字段都应位于一个 <code>&lt;form&gt;</code> 元素中。Bootstrap 没有为
      <code>&lt;form&gt;</code>
      元素提供默认样式，但默认情况下，浏览器提供了一些强大的功能。
    </p>
    <ul class="docs-content-list">
      <li>
        不熟悉浏览器表单？可以考虑查阅 请访问
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">MDN表单文档</a>
        以获取概览 以及可用属性的完整列表。
      </li>
      <li>
        在 <code>&lt;form&gt;</code> 中的 <code>&lt;button&gt;</code> 默认具有 <code>type="submit"</code> 属性，所以
        力求具体，并始终包含一个 <code>type</code>。
      </li>
    </ul>
    <p>
      由于 Bootstrap 为几乎所有的表单控件都应用了 <code>display: block</code> 和 <code>width: 100%</code>，
      表单默认会垂直堆叠。可以使用额外的类来根据每个表单的不同调整布局。
    </p>

    <h2 id="layout-utilities">
      工具使用<a class="anchor-link" aria-label="Link to this section: 工具使用" href="#layout-utilities"> </a>
    </h2>
    <p>
      <a href="https://getbootstrap.com/docs/5.3/utilities/spacing" target="_blank">边距工具</a>
      是给表单添加结构的最简单方法。它们为标签、控件、可选表单文本和表单验证消息提供了基本的分组。我们建议仅使用
      <code>margin-bottom</code> 工具，并在整个表单中使用单一方向以保持一致性。
    </p>
    <p>
      你可以随心所欲地使用 <code>&lt;fieldset&gt;</code>、<code>&lt;div&gt;</code>
      来构建表单， 或者几乎任何其他元素。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Another label</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
        </div>
      </div>
      <code-highlight type="html" :code="utilitiesCode" label="html" />
    </div>

    <h2 id="layout-grid">
      表单网格<a class="anchor-link" aria-label="Link to this section: 表单网格" href="#layout-grid"> </a>
    </h2>
    <p>
      您可以使用我们的网格类来构建更复杂的表单。对于需要多列布局、不同宽度以及更多对齐选项的表单，请使用这些网格类。<strong
        >需要启用 <code>$enable-grid-classes</code> Sass 变量</strong
      >（默认已启用）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="gridCode" label="html" />
    </div>

    <h2 id="layout-table">
      表单表格<a class="anchor-link" aria-label="Link to this section: 表单表格" href="#layout-table"> </a>
    </h2>
    <p>
      您可以使用 Bootstrap table 构建表单。可以使用
      <code>.table-*</code> 来设置表格样式。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Number</th>
              <th scope="col">Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="Number" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="Number" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
              <td><input type="Number" class="form-control" /></td>
              <td><input type="text" class="form-control" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <code-highlight type="html" :code="tableCode" label="html" />
    </div>

    <h2 id="layout-gutters">
      Gutters<a class="anchor-link" aria-label="Link to this section: Gutters" href="#layout-gutters"> </a>
    </h2>
    <p>
      通过添加
      <a href="https://getbootstrap.com/docs/5.3/layout/gutters" target="_blank">边距修饰符类</a
      >，您可以控制行内和块方向上的边距宽度。<strong>同时还需要启用 <code>$enable-grid-classes</code> Sass 变量</strong
      >（默认已启用）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row g-3">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="guttersCode" label="html" />
    </div>
    <p>借助网格系统，我们还可以创建出更为复杂的布局。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck"> Check me out </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="gutters1Code" label="html" />
    </div>

    <h2 id="layout-horizontal">
      水平形式<a class="anchor-link" aria-label="Link to this section: 水平形式" href="#layout-horizontal"> </a>
    </h2>
    <p>
      通过为表单组添加 <code>.row</code> 类，并使用
      <code>.col-*-*</code>
      类来指定标签和控件的宽度，从而使用网格创建水平表单。请确保在
      <code>&lt;label&gt;</code> 上也添加 <code>.col-form-label</code>，以便它们与其关联的表单控件在垂直方向上居中对齐。
    </p>
    <p>
      有时，你可能需要使用边距或填充工具来创建所需的完美对齐。例如，我们已移除了堆叠单选输入标签上的
      <code>padding-top</code>，以更好地对齐文本基线。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="gridRadios1"> First radio </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                <label class="form-check-label" for="gridRadios2"> Second radio </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label" for="gridRadios3"> Third disabled radio </label>
              </div>
            </div>
          </fieldset>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                <label class="form-check-label" for="gridCheck1"> Example checkbox </label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="horizontalCode" label="html" />
    </div>

    <h2 id="layout-label">
      标签尺寸<a class="anchor-link" aria-label="Link to this section: 标签尺寸" href="#layout-label"> </a>
    </h2>
    <p>
      请务必在 <code>&lt;label&gt;</code> 或 <code>&lt;legend&gt;</code> 中使用 <code>.col-form-label-sm</code> 或
      <code>.col-form-label-lg</code>，以正确匹配 <code>.form-control-lg</code> 和
      <code>.form-control-sm</code> 的大小。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row mb-3">
          <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="col-form-label-sm"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label" />
          </div>
        </div>
        <div class="row">
          <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="labelCode" label="html" />
    </div>

    <h2 id="layout-sizing">
      列宽调整<a class="anchor-link" aria-label="Link to this section: 列宽调整" href="#layout-sizing"> </a>
    </h2>
    <p>
      如前面的示例所示，我们的网格系统允许您在
      <code>.row</code> 内放置任意数量的
      <code>.col</code>。它们会平均分配可用宽度。您也可以选择部分列来占据更多或更少的空间，而剩余的
      <code>.col</code> 则平均分配剩余的宽度，并使用特定的列类，如 <code>.col-sm-7</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="row g-3">
          <div class="col-sm-7">
            <input type="text" class="form-control" placeholder="City" aria-label="City" />
          </div>
          <div class="col-sm">
            <input type="text" class="form-control" placeholder="State" aria-label="State" />
          </div>
          <div class="col-sm">
            <input type="text" class="form-control" placeholder="Zip" aria-label="Zip" />
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="sizingCode" label="html" />
    </div>

    <h2 id="layout-auto">
      自动调整大小<a class="anchor-link" aria-label="Link to this section: 自动调整大小" href="#layout-auto"> </a>
    </h2>
    <p>
      下面的示例使用 flexbox 工具来垂直居中内容，并将 <code>.col</code> 更改为
      <code>.col-auto</code>，这样你的列只会占用所需的空间。换句话说，列的大小会根据内容自动调整。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput">Name</label>
            <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe" />
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username" />
            </div>
          </div>
          <div class="col-auto">
            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
            <select class="form-select" id="autoSizingSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
              <label class="form-check-label" for="autoSizingCheck"> Remember me </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="autoCode" label="html" />
    </div>
    <p>然后，你可以再次将其与特定大小的列类进行混合。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputName">Name</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe" />
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username" />
            </div>
          </div>
          <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeSelect">Preference</label>
            <select class="form-select" id="specificSizeSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
              <label class="form-check-label" for="autoSizingCheck2"> Remember me </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="auto1Code" label="html" />
    </div>

    <h2 id="layout-inline">
      内联表单<a class="anchor-link" aria-label="Link to this section: 内联表单" href="#layout-inline"> </a>
    </h2>
    <p>
      使用 <code>.row-cols-*</code> 类来创建响应式的水平布局。通过添加
      <a href="https://getbootstrap.com//docs/5.3/layout/gutters" target="_blank">边距修饰符类</a
      >，我们可以在水平和垂直方向上设置边距。在窄幅的移动设备视口中，<code>.col-12</code> 有助于堆叠表单控件等。<code
        >.align-items-center</code
      >
      将表单元素居中对齐，从而使 <code>.form-check</code> 正确对齐。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
            <select class="form-select" id="inlineFormSelectPref">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
              <label class="form-check-label" for="inlineFormCheck"> Remember me </label>
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <code-highlight type="html" :code="inlineCode" label="html" />
    </div>
  </div>
</template>

<script setup>
const utilitiesCode = `
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Another label</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>`;

const gridCode = `
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>`;

const tableCode = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Number</th>
      <th scope="col">Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="Number" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
    </tr>
    <tr>
      <td>2</td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="Number" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
    </tr>
    <tr>
      <td>3</td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
      <td><input type="Number" class="form-control" /></td>
      <td><input type="text" class="form-control" /></td>
    </tr>
    </tbody>
  </table>`;

const guttersCode = `
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>`;

const gutters1Code = `
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>`;

const horizontalCode = `
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
    <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
        <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>`;

const labelCode = `
<div class="row mb-3">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
  </div>
</div>
<div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
  </div>
</div>`;

const sizingCode = `
<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
  </div>
</div>`;

const autoCode = `
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
      <label class="form-check-label" for="autoSizingCheck2">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;

const auto1Code = `
<form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputName">Name</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
  </div>
  <div class="col-sm-3">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
      <label class="form-check-label" for="autoSizingCheck2">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;

const inlineCode = `
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
    </div>
  </div>

  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck">
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;
</script>
