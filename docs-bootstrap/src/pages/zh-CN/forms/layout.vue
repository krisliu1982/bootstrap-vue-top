<template>
  <article class="bd-content">
    <h1>布局</h1>
    <p class="lead">借助我们的表单布局选项，为表单赋予结构——从行内布局、水平布局到自定义网格实现，应有尽有。</p>

    <h2 id="forms">表单<a class="anchor-link" href="#forms" aria-label="表单链接"></a></h2>
    <p>每组表单字段都应放在 <code>&lt;form&gt;</code> 元素中。Bootstrap 不为 <code>&lt;form&gt;</code> 元素提供默认样式，但浏览器默认提供了一些强大的特性。</p>
    <ul>
      <li>
        初次接触浏览器表单？建议查阅<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">MDN 表单文档</a>，了解概述以及可用属性的完整列表。
      </li>
      <li><code>&lt;form&gt;</code> 内的 <code>&lt;button&gt;</code> 默认是 <code>type=&quot;submit&quot;</code>，因此请尽量明确并始终包含 <code>type</code>。</li>
    </ul>
    <p>由于 Bootstrap 对几乎所有表单控件都应用了 <code>display: block</code> 和 <code>width: 100%</code>，因此表单默认会垂直堆叠。可以使用其他类为每个表单改变这一布局。</p>
    <h2 id="utilities">工具类<a class="anchor-link" href="#utilities" aria-label="工具类链接"></a></h2>
    <p><a href="/utilities/spacing">外边距工具类</a>是为表单添加结构的最简单方式，可将标签、控件、可选的表单文本以及表单校验消息进行基本的分组。我们建议坚持使用 <code>margin-bottom</code> 工具类，并在整个表单中统一使用同一方向，以保持一致性。</p>
    <p>你可以随意使用 <code>&lt;fieldset&gt;</code>、<code>&lt;div&gt;</code> 或几乎任何其他元素来构建表单。</p>
    <Example
      code='<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Example label</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Another label</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>'
    />
    <h2 id="form-grid">表单网格<a class="anchor-link" href="#form-grid" aria-label="表单网格链接"></a></h2>
    <p>
      可以使用我们的网格类构建更复杂的表单。对于需要多列、不同宽度以及额外对齐选项的表单布局，请使用这些类。<strong>需要启用 <code>$enable-grid-classes</code> Sass 变量</strong>（默认已启用）。
    </p>
    <Example
      code='<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>'
    />
    <h2 id="gutters">间距<a class="anchor-link" href="#gutters" aria-label="间距链接"></a></h2>
    <p>
      通过添加<a href="/layout/gutters">间距修饰类</a>，你可以控制行内方向和块级方向的间距宽度。<strong>同样需要启用 <code>$enable-grid-classes</code> Sass 变量</strong>（默认已启用）。
    </p>
    <Example
      code='<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>'
    />
    <p>还可以使用网格系统创建更复杂的布局。</p>
    <Example
      code='<form class="row g-3">
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
</form>'
    />
    <h2 id="horizontal-form">水平表单<a class="anchor-link" href="#horizontal-form" aria-label="水平表单链接"></a></h2>
    <p>
      通过为表单组添加 <code>.row</code> 类，并使用 <code>.col-*-*</code> 类指定标签和控件的宽度，即可使用网格创建水平表单。请务必为 <code>&lt;label&gt;</code> 添加 <code>.col-form-label</code>，使其与关联的表单控件垂直居中对齐。
    </p>
    <p>有时，你可能需要使用外边距或内边距工具类来实现完美的对齐。例如，我们移除了堆叠单选按钮标签上的 <code>padding-top</code>，以便更好地对齐文本基线。</p>
    <Example
      code='<form>
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
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>'
    />
    <h3 id="horizontal-form-label-sizing">水平表单标签尺寸<a class="anchor-link" href="#horizontal-form-label-sizing" aria-label="水平表单标签尺寸链接"></a></h3>
    <p>请务必为 <code>&lt;label&gt;</code> 或 <code>&lt;legend&gt;</code> 使用 <code>.col-form-label-sm</code> 或 <code>.col-form-label-lg</code>，以正确匹配 <code>.form-control-lg</code> 和 <code>.form-control-sm</code> 的尺寸。</p>
    <Example
      code='<div class="row mb-3">
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
</div>'
    />
    <h2 id="column-sizing">列尺寸<a class="anchor-link" href="#column-sizing" aria-label="列尺寸链接"></a></h2>
    <p>
      如前面的示例所示，我们的网格系统允许在 <code>.row</code> 中放置任意数量的 <code>.col</code>，它们会平均分配可用宽度。你也可以通过 <code>.col-sm-7</code> 等特定的列类，选择部分列占据更多或更少的空间，而其余的 <code>.col</code> 会平均分配剩余空间。
    </p>
    <Example
      code='<div class="row g-3">
  <div class="col-sm-7">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State">
  </div>
  <div class="col-sm">
    <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
  </div>
</div>'
    />
    <h2 id="auto-sizing">自动尺寸<a class="anchor-link" href="#auto-sizing" aria-label="自动尺寸链接"></a></h2>
    <p>下面的示例使用 flexbox 工具类让内容垂直居中，并将 <code>.col</code> 改为 <code>.col-auto</code>，使列只占用所需的空间。换言之，列会根据内容自动确定尺寸。</p>
    <Example
      code='<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
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
      <input class="form-check-input" type="checkbox" id="autoSizingCheck">
      <label class="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>'
    />
    <p>然后，你还可以再次结合特定尺寸的列类来重新组合。</p>
    <Example
      code='<form class="row gx-3 gy-2 align-items-center">
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
</form>'
    />
    <h2 id="inline-forms">行内表单<a class="anchor-link" href="#inline-forms" aria-label="行内表单链接"></a></h2>
    <p>
      使用 <code>.row-cols-*</code> 类创建响应式水平布局。通过添加<a href="/layout/gutters">间距修饰类</a>，我们可以在水平和垂直方向上设置间距。在较窄的移动端视口中，<code>.col-12</code> 有助于将表单控件等元素堆叠排列。<code>.align-items-center</code> 将表单元素居中对齐，使 <code>.form-check</code> 正确对齐。
    </p>
    <Example
      code='<form class="row row-cols-lg-auto g-3 align-items-center">
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
</form>'
    />
    <DocsPager />
  </article>

  <nav class="bd-toc" aria-label="本页目录">
    <h6>本页目录</h6>
    <ul>
      <li><a href="#forms">表单</a></li>
      <li><a href="#utilities">工具类</a></li>
      <li><a href="#form-grid">表单网格</a></li>
      <li><a href="#gutters">间距</a></li>
      <li>
       <a href="#horizontal-form">水平表单</a>
        <ul>
          <li><a href="#horizontal-form-label-sizing">水平表单标签尺寸</a></li>
        </ul>
      </li>
      <li><a href="#column-sizing">列尺寸</a></li>
      <li><a href="#auto-sizing">自动尺寸</a></li>
      <li>
       <a href="#inline-forms">行内表单</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { usePage } from '@/components/use-page.js';
usePage();
</script>
