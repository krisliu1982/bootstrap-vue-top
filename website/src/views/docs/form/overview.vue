<template>
  <div class="docs-toc-nav">
    <nav id="docs-nav-overview">
      <a href="#form-overview">概述</a>
      <a href="#form-disabled-forms">禁用表单</a>
      <a href="#form-accessibility">无障碍</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-overview" class="docs-content">
    <h1>Forms 表单</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/forms/overview/" target="_blank">Bootstrap Forms</a
      >，提供表单控件样式、布局选项以及自定义组件的示例和使用指南，以便创建各种表单。
    </p>
    <div class="row g-3">
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/form-control">
          <strong class="d-block h5 mb-0">Form control</strong>
          <span class="text-secondary">为文本输入框(input)和文本区域(textarea)设计样式，并支持多种状态。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/select">
          <strong class="d-block h5 mb-0">Select</strong>
          <span class="text-secondary">改进浏览器默认设置，使select元素具有自定义的初始外观。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/checks-radios">
          <strong class="d-block h5 mb-0">Checks &amp; radios</strong>
          <span class="text-secondary">在表单中使用我们的自定义单选按钮(radio)和复选框(checkbox)来选择输入选项。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/range">
          <strong class="d-block h5 mb-0">Range</strong>
          <span class="text-secondary">将浏览器默认的数值输入框替换为我们定制的版本。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/input-group">
          <strong class="d-block h5 mb-0">Input group</strong>
          <span class="text-secondary">为输入框添加标签和按钮，以增加语义价值。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/floating-labels">
          <strong class="d-block h5 mb-0">Floating labels</strong>
          <span class="text-secondary">创建美观简洁的表单标签，使其悬浮在输入字段上方。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/floating-labels">
          <strong class="d-block h5 mb-0">Uploader</strong>
          <span class="text-secondary">自定义上传组件，使其符合前后端分离模式。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/layout">
          <strong class="d-block h5 mb-0">Layout</strong>
          <span class="text-secondary">使用您的表单创建内联、水平或复杂的基于网格的布局。 </span>
        </a>
      </div>
      <div class="col-md-6">
        <a class="d-block text-decoration-none" href="/docs/form/validation">
          <strong class="d-block h5 mb-0">Validation</strong>
          <span class="text-secondary">使用自定义验证行为和样式来验证表单。 </span>
        </a>
      </div>
    </div>

    <h2 id="form-overview">
      概述<a class="anchor-link" aria-label="Link to this section: 概述" href="#form-overview"> </a>
    </h2>
    <p>
      Bootstrap 的表单控件基于
      <a href="https://getbootstrap.com/docs/5.3/content/reboot#forms" target="_blank">our Rebooted form styles</a>
      并通过类进行扩展。使用这些类可以选择启用其自定义显示，以便在浏览器和设备之间实现更一致的呈现效果。
    </p>
    <p>
      请务必在所有输入框上使用适当的 <code>type</code> 属性（例如，<code>email</code> 用于电子邮件地址，<code
        >number</code
      >
      用于数字信息），以利用电子邮件验证、数字选择等新型输入控件。
    </p>
    <p>这里有一个简单的示例，用于演示 Bootstrap 的表单样式。继续阅读，了解有关必需类、表单布局等内容的文档。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <code-highlight type="html" :code="overviewCode" label="html" />
    </div>

    <h2 id="form-disabled-forms">
      禁用表单<a class="anchor-link" aria-label="Link to this section: 禁用表单" href="#form-disabled-forms"> </a>
    </h2>
    <p>
      在输入框上添加
      <code>disabled</code> 布尔属性，以阻止用户交互，并使其显示为浅色。
    </p>
    <code-highlight type="html" :code="disabledCode" label="html" />
    <p>
      将 <code>disabled</code> 属性添加到 <code>&lt;fieldset&gt;</code> 中，以禁用其中的所有控件。浏览器会将
      <code>&lt;fieldset disabled&gt;</code>
      中的所有原生表单控件（<code>&lt;input&gt;</code>、<code>&lt;select&gt;</code>
      和
      <code>&lt;button&gt;</code>
      元素）视为已禁用，从而阻止对它们进行键盘和鼠标交互。
    </p>
    <p>
      然而，如果你的表单中还包含了自定义的类似按钮的元素，例如
      <code>&lt;a class="btn btn-*"&gt;...&lt;/a&gt;</code>，这些元素将仅被赋予
      <code>pointer-events: none</code>
      的样式，这意味着它们仍然可以通过键盘获得焦点并进行操作。在这种情况下，你必须手动修改这些控件，添加
      <code>tabindex="-1"</code> 以防止它们获得焦点，并添加
      <code>aria-disabled="disabled"</code> 以向辅助技术表明其状态。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form>
          <fieldset disabled>
            <legend>Disabled fieldset example</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Disabled input</label>
              <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">Disabled select menu</label>
              <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Disabled uploader</label>
              <BvImageOneUploader></BvImageOneUploader>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                <label class="form-check-label" for="disabledFieldsetCheck"> Can’t check this </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
      <code-highlight type="html" :code="disabledFormCode" label="html" />
    </div>

    <h2 id="form-accessibility">
      无障碍<a class="anchor-link" aria-label="Link to this section: 无障碍" href="#form-accessibility"> </a>
    </h2>
    <p>
      确保所有表单控件都有适当的可访问名称，以便向使用辅助技术的用户传达其用途。实现这一目标的最简单方法是使用
      <code>&lt;label&gt;</code> 元素，或者在按钮的情况下，在
      <code>&lt;button&gt;...&lt;/button&gt;</code> 内容中包含足够描述性的文本。
    </p>
    <p>
      对于无法包含可见的
      <code>&lt;label&gt;</code>
      或适当文本内容的情况，还有其他方法可以提供可访问的名称，例如：
    </p>
    <ul class="docs-content-list">
      <li>使用 <code>.visually-hidden</code> 类隐藏 <code>&lt;label&gt;</code> 元素</li>
      <li>使用 <code>aria-labelledby</code> 指向可作为标签的现有元素</li>
      <li>提供 <code>title</code> 属性</li>
      <li>使用 <code>aria-label</code> 在元素上显式设置可访问的名称</li>
    </ul>
    <p>
      如果这些方法都不存在，辅助技术可能会使用 <code>placeholder</code> 属性作为 <code>&lt;input&gt;</code> 和
      <code>&lt;textarea&gt;</code>
      元素上可访问名称的备用方案。本节中的示例提供了一些针对特定情况的建议方法。
    </p>
    <p>
      虽然使用视觉隐藏内容（如
      <code>.visually-hidden</code>、<code>aria-label</code>，甚至是表单字段有内容时即消失的
      <code>placeholder</code>
      内容）将使辅助技术用户受益，但对于某些用户而言，缺乏可见的标签文本可能仍然是个问题。出于可访问性和可用性的考虑，通常最好采用某种形式的可见标签。
    </p>
  </div>
</template>

<script setup>
const overviewCode = `
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

const disabledCode = `
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>`;

const disabledFormCode = `
<form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
        <label class="form-label">Disabled uploader</label>
        <BvImageOneUploader></BvImageOneUploader>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can’t check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>`;
</script>
