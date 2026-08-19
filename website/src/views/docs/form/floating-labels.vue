<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-floating-labels">
      <a href="#floating-labels-example">示例</a>
      <a href="#floating-labels-textareas">文本区域</a>
      <a href="#floating-labels-selects">选择器</a>
      <a href="#floating-labels-disabled">禁用</a>
      <a href="#floating-labels-plain">只读纯文本</a>
      <a href="#floating-labels-groups">输入组</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-floating-labels" class="docs-content">
    <h1>Floating labels 浮动标签</h1>
    <p class="fs-4 fw-light">
      创建美观简洁的表单标签，使其悬浮在输入框上方。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/floating-labels/" target="_blank"
        >Bootstrap Form Floating labels</a
      >
    </p>

    <h2 id="floating-labels-example">
      示例<a class="anchor-link" aria-label="Link to this section: 示例" href="#floating-labels-example"> </a>
    </h2>
    <p>
      将一对 <code>&lt;input class="form-control"&gt;</code> 和 <code>&lt;label&gt;</code> 元素包裹在
      <code>.form-floating</code> 中，以启用 Bootstrap 文本表单字段的浮动标签。
    </p>
    <p>
      每个 <code>&lt;input&gt;</code> 元素上都需要有一个非空的 <code>placeholder</code> 属性，因为我们的纯 CSS
      浮动标签实现依赖于
      <code>:placeholder-shown</code>
      伪元素来检测输入框何时为空。占位符文本本身是不可见的；只有
      <code>&lt;label&gt;</code> 会向用户显示。
    </p>
    <p>还要注意，<code>&lt;input&gt;</code> 必须放在前面，这样我们才能使用兄弟选择器（即 <code>~</code>）。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <code-highlight type="html" :code="exampleCode" label="html" />
    </div>

    <h2 id="floating-labels-textareas">
      文本区域<a class="anchor-link" aria-label="Link to this section: 文本区域" href="#floating-labels-textareas"> </a>
    </h2>
    <p>
      默认情况下，带有 <code>.form-control</code> 类的 <code>&lt;textarea&gt;</code> 与
      <code>&lt;input&gt;</code> 的高度相同。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
      </div>
      <code-highlight type="html" :code="textareasCode" label="html" />
    </div>
    <p>
      要在 <code>&lt;textarea&gt;</code> 上设置自定义高度，请不要使用 <code>rows</code> 属性。 相反，请设置一个明确的
      <code>height</code>（内联设置或通过自定义 CSS 设置）。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
      </div>
      <code-highlight type="html" :code="textareas1Code" label="html" />
    </div>

    <h2 id="floating-labels-selects">
      选择器<a class="anchor-link" aria-label="Link to this section: 选择器" href="#floating-labels-selects"> </a>
    </h2>
    <p>
      除了 <code>.form-control</code> 之外，浮动标签仅在 <code>.form-select</code> 上可用。它们的工作方式相同，但与
      <code>&lt;input&gt;</code> 不同，它们始终会在浮动状态下显示 <code>&lt;label&gt;</code>。<strong
        >不支持带有 <code>size</code> 和 <code>multiple</code> 属性的选择器。</strong
      >
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option value="0" selected>--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
      </div>
      <code-highlight type="html" :code="selectCode" label="html" />
    </div>

    <h2 id="floating-labels-disabled">
      禁用<a class="anchor-link" aria-label="Link to this section: 禁用" href="#floating-labels-disabled"> </a>
    </h2>
    <p>
      在输入框、文本区域或选择框上添加
      <code>disabled</code>
      布尔属性，使其呈现灰色外观，移除鼠标事件，并阻止聚焦。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled />
          <label for="floatingInputDisabled">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextareaDisabled"
            disabled
          ></textarea>
          <label for="floatingTextareaDisabled">Comments</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2Disabled"
            style="height: 100px"
            disabled
          >
Disabled textarea with some text inside</textarea>
          <label for="floatingTextarea2Disabled">Comments</label>
        </div>
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelectDisabled"
            aria-label="Floating label disabled select example"
            disabled
          >
            <option value="0" selected>--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelectDisabled">Works with selects</label>
        </div>
      </div>
      <code-highlight type="html" :code="disabledCode" label="html" />
    </div>

    <h2 id="floating-labels-plain">
      只读纯文本<a class="anchor-link" aria-label="Link to this section: 只读纯文本" href="#floating-labels-plain"> </a>
    </h2>
    <p>
      浮动标签还支持
      <code>.form-control-plaintext</code>，这有助于在不影响页面布局的情况下，将可编辑的
      <code>&lt;input&gt;</code> 切换为纯文本值。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="form-floating mb-3">
          <input
            type="email"
            readonly
            class="form-control-plaintext"
            id="floatingEmptyPlaintextInput"
            placeholder="name@example.com"
          />
          <label for="floatingEmptyPlaintextInput">Empty input</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            readonly
            class="form-control-plaintext"
            id="floatingPlaintextInput"
            placeholder="name@example.com"
            value="name@example.com"
          />
          <label for="floatingPlaintextInput">Input with value</label>
        </div>
      </div>
      <code-highlight type="html" :code="plainCode" label="html" />
    </div>

    <h2 id="floating-labels-groups">
      输入组<a class="anchor-link" aria-label="Link to this section: 输入组" href="#floating-labels-groups"> </a>
    </h2>
    <p>浮动标签也支持 <code>.input-group</code>。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group">
          <span class="input-group-text">@</span>
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username" />
            <label for="floatingInputGroup1">Username</label>
          </div>
        </div>
      </div>
      <code-highlight type="html" :code="groupsCode" label="html" />
    </div>
    <p>
      当将 <code>.input-group</code> 和 <code>.form-floating</code> 与表单验证一起使用时，<code>-feedback</code> 应置于
      <code>.form-floating</code> 之外，但位于 <code>.input-group</code> 之内。这意味着需要通过javascript来显示反馈。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <div class="form-floating is-invalid">
            <input
              type="text"
              class="form-control is-invalid"
              id="floatingInputGroup2"
              placeholder="Username"
              required
            />
            <label for="floatingInputGroup2">Username</label>
          </div>
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
      </div>
      <code-highlight type="html" :code="groups1Code" label="html" />
    </div>
  </div>
</template>

<script setup>
const exampleCode = `
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>`;

const textareasCode = `
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>`;

const textareas1Code = `
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>`;

const selectCode = `
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option value="0" selected>--</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>`;

const disabledCode = `
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled>
  <label for="floatingInputDisabled">Email address</label>
</div>
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></textarea>
  <label for="floatingTextareaDisabled">Comments</label>
</div>
<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 100px" disabled>Disabled textarea with some text inside</textarea>
  <label for="floatingTextarea2Disabled">Comments</label>
</div>
<div class="form-floating">
  <select class="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
    <option value="0" selected>--</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelectDisabled">Works with selects</label>
</div>`;

const plainCode = `
<div class="form-floating mb-3">
  <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com">
  <label for="floatingEmptyPlaintextInput">Empty input</label>
</div>
<div class="form-floating mb-3">
  <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com">
  <label for="floatingPlaintextInput">Input with value</label>
</div>`;

const groupsCode = `
<div class="input-group">
  <span class="input-group-text">@</span>
  <div class="form-floating">
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
    <label for="floatingInputGroup1">Username</label>
  </div>
</div>`;

const groups1Code = `
<div class="input-group has-validation">
  <span class="input-group-text">@</span>
  <div class="form-floating is-invalid">
    <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required>
    <label for="floatingInputGroup2">Username</label>
  </div>
  <div class="invalid-feedback">
    Please choose a username.
  </div>
</div>`;
</script>
