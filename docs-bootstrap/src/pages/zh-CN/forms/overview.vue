<template>
  <article class="bd-content" data-pagefind-body>
    <h1>表单</h1>
    <p class="lead">表单控件样式、布局选项和自定义组件的示例与用法指南，帮助你创建各种各样的表单。</p>

    <h2 id="overview">概述<a class="anchor-link" href="#overview" aria-label="概述链接"></a></h2>
    <p>
      Bootstrap 的表单控件通过类扩展了<a href="/content/reboot#forms">我们在 Reboot 中的表单样式</a>。使用这些类即可启用其自定义显示效果，从而在不同浏览器和设备上获得更一致的渲染。
    </p>
    <p>请务必为所有输入框设置合适的 <code>type</code> 属性（例如，电子邮件地址使用 <code>email</code>，数值信息使用 <code>number</code>），以便利用电子邮件验证、数字选择等较新的输入控件功能。</p>
    <p>下面是一个快速示例，用于展示 Bootstrap 的表单样式。继续阅读可了解必需类、表单布局等文档。</p>
    <Example
      code='<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We&#39;ll never share your email with anyone else.</div>
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
</form>'
    />
    <h2 id="disabled-forms">禁用的表单<a class="anchor-link" href="#disabled-forms" aria-label="禁用的表单链接"></a></h2>
    <p>在输入框上添加 <code>disabled</code> 布尔属性，即可阻止用户交互，并使其外观变浅。</p>
    <CodeWrapper code='&lt;input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled&gt;' lang="html" />
    <p>
      为 <code>&lt;fieldset&gt;</code> 添加 <code>disabled</code> 属性，即可禁用其中的所有控件。浏览器会将 <code>&lt;fieldset disabled&gt;</code> 内的所有原生表单控件（<code>&lt;input&gt;</code>、<code>&lt;select&gt;</code> 和 <code>&lt;button&gt;</code> 元素）视为已禁用，从而阻止对它们的键盘和鼠标交互。
    </p>
    <p>
      但是，如果你的表单中还包含类似 <code>&lt;a class=&quot;btn btn-*&quot;&gt;...&lt;/a&gt;</code> 的自定义按钮式元素，它们只会被赋予 <code>pointer-events: none</code> 样式，这意味着它们仍然可以获得焦点并通过键盘操作。在这种情况下，你必须手动修改这些控件，添加 <code>tabindex=&quot;-1&quot;</code> 以阻止它们获得焦点，并添加 <code>aria-disabled=&quot;disabled&quot;</code> 向辅助技术表明其状态。
    </p>
    <Example
      code='<form>
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
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can’t check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>'
    />
    <h2 id="accessibility">无障碍访问<a class="anchor-link" href="#accessibility" aria-label="无障碍访问链接"></a></h2>
    <p>
      确保所有表单控件都有合适的可访问名称，以便向辅助技术的用户传达其用途。最简单的方法是使用 <code>&lt;label&gt;</code> 元素；对于按钮来说，则是在 <code>&lt;button&gt;...&lt;/button&gt;</code> 内容中包含足够描述性的文本。
    </p>
    <p>如果无法包含可见的 <code>&lt;label&gt;</code> 或合适的文本内容，还有其他方式可以提供可访问名称，例如：</p>
    <ul>
      <li>使用 <code>.visually-hidden</code> 类隐藏的 <code>&lt;label&gt;</code> 元素</li>
      <li>使用 <code>aria-labelledby</code> 指向一个可作为标签的现有元素</li>
      <li>提供 <code>title</code> 属性</li>
      <li>使用 <code>aria-label</code> 在元素上显式设置可访问名称</li>
    </ul>
    <p>如果这些都不存在，辅助技术可能会退而使用 <code>placeholder</code> 属性作为 <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code> 元素可访问名称的备选。本节中的示例提供了一些针对具体情况的建议做法。</p>
    <p>
      虽然使用视觉隐藏的内容（<code>.visually-hidden</code>、<code>aria-label</code>，甚至一旦表单字段有内容就会消失的 <code>placeholder</code> 内容）对辅助技术用户有益，但缺少可见的标签文本仍可能给某些用户带来问题。通常来说，某种形式的可见标签无论是在无障碍访问还是易用性方面都是最佳方案。
    </p>
    <h2 id="css">CSS<a class="anchor-link" href="#css" aria-label="CSS 链接"></a></h2>
    <p>许多表单变量都在通用层级设置，以便被各个表单组件复用和扩展。你会经常看到 <code>$input-btn-*</code> 和 <code>$input-*</code> 这样的变量。</p>
    <h3 id="sass-variables">Sass 变量<a class="anchor-link" href="#sass-variables" aria-label="Sass 变量链接"></a></h3>
    <p><code>$input-btn-*</code> 变量是<a href="/components/buttons">按钮</a>和表单组件之间共享的全局变量。你会发现它们经常被重新赋值给其他组件专用的变量。</p>
    <ScssDocs name="input-btn-variables" file="scss/_variables.scss" />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#overview">概述</a></li>
      <li><a href="#disabled-forms">禁用的表单</a></li>
      <li><a href="#accessibility">无障碍访问</a></li>
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
