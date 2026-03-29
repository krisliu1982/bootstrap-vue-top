<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-list">
      <a href="#list-example">基础示例</a>
      <a href="#list-active">当前活动项</a>
      <a href="#list-link">链接和按钮</a>
      <a href="#list-flush">齐平列表</a>
      <a href="#list-number">列表编号</a>
      <a href="#list-horizontal">水平列表</a>
      <a href="#list-variant">列表变体</a>
      <a href="#list-badge">带着徽章</a>
      <a href="#list-content">定制内容</a>
      <a href="#list-check">复选框和单选按钮</a>
      <a href="#list-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-list" class="docs-content">
    <h1>List group 列表</h1>
    <p class="fs-4 fw-light">
      列表是一种灵活且强大的组件，用于展示一系列内容。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/components/list-group/" target="_blank">Boostrap List group</a>
    </p>

    <h2 id="list-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#list-example"> </a>
    </h2>
    <p>
      最基础的列表组为包含列表项及相应类别的无序列表。可基于下述选项对其进行扩展，或根据需求通过自定义CSS实现功能拓展。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <code-highlight type="html" :code="example1Code" label="html" />
    </div>

    <h2 id="list-active">
      当前活动项<a class="anchor-link" aria-label="Link to this section: 当前活动项" href="#list-active"> </a>
    </h2>
    <p>为 <code>.list-group-item</code> 添加 <code>.active</code> 类名，以表示当前处于活动状态的选择项。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">An active item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <code-highlight type="html" :code="activeCode" label="html" />
    </div>

    <h2 id="list-link">
      链接和按钮<a class="anchor-link" aria-label="Link to this section: 链接和按钮" href="#list-link"> </a>
    </h2>
    <p>
      使用 <code>&lt;a&gt;</code> 标签或 <code>&lt;button&gt;</code> 标签，并通过添加
      <code>.list-group-item-action</code>
      类，来创建具有悬停、禁用和活动状态的可操作列表组项。我们将这些伪类分开处理，以确保由非交互式元素（如
      <code>&lt;li&gt;</code> 或 <code>&lt;div&gt;</code>
      ）构成的列表组不会提供可点击或可触发的交互效果。
    </p>
    <p>
      通过添加 <code>.disabled</code> 类和 <code>aria-disabled="true"</code> 属性，使
      <code>.list-group-item-action</code>
      实例<em>呈现</em>为禁用状态，并告知辅助技术该元素已被禁用。您可能还需要额外的JavaScript代码来完全禁用链接和按钮。
    </p>
    <p>
      请确保<strong>不要在此处使用标准 <code>.btn</code> 类</strong>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            The current link item
          </a>
          <a href="#" class="list-group-item list-group-item-action">A second link item</a>
          <a href="#" class="list-group-item list-group-item-action">A third link item</a>
          <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
          <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true"
            >A disabled link item</a
          >
        </div>
      </div>
      <code-highlight type="html" :code="link1Code" label="html" />
    </div>
    <p>
      对于 <code>&lt;button&gt;</code> 元素，您还可以使用 <code>disabled</code> 属性，而非
      <code>.disabled</code> 类。遗憾的是，<code>&lt;a&gt;</code> 元素并不支持 <code>disabled</code> 属性。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
            The current button
          </button>
          <button type="button" class="list-group-item list-group-item-action">A second button item</button>
          <button type="button" class="list-group-item list-group-item-action">A third button item</button>
          <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
          <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
        </div>
      </div>
      <code-highlight type="html" :code="link2Code" label="html" />
    </div>

    <h2 id="list-flush">
      齐平列表<a class="anchor-link" aria-label="Link to this section: 齐平列表" href="#list-flush"> </a>
    </h2>
    <p>
      添加
      <code>.list-group-flush</code>
      以删除一些边框和圆角，从而在父容器（例如，卡片）中呈现列表组项目的边缘到边缘。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <code-highlight type="html" :code="flushCode" label="html" />
    </div>

    <h2 id="list-number">
      列表编号<a class="anchor-link" aria-label="Link to this section: 列表编号" href="#list-number"> </a>
    </h2>
    <p>
      添加 <code>.list-group-numbered</code> 修饰类（也可选择使用
      <code>&lt;ol&gt;</code>
      元素），以启用编号列表组项。数字通过CSS生成（而非采用<code>&lt;ol&gt;</code>元素的默认浏览器样式），这样能够更好地在列表组项中进行定位，并便于进行自定义设置。
    </p>
    <p>
      数字通过在 <code>&lt;ol&gt;</code> 元素上使用 <code>counter-reset</code> 生成，然后利用带有
      <code>counter-increment</code> 和 <code>content</code> 属性的 <code>::before</code> 伪元素，在
      <code>&lt;li&gt;</code> 元素上进行样式设置和定位。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">A list item</li>
          <li class="list-group-item">A list item</li>
          <li class="list-group-item">A list item</li>
        </ol>
      </div>
      <code-highlight type="html" :code="numberCode" label="html" />
    </div>
    <p>这些与自定义内容一起工作也很好。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Subheading</div>
              Content for list item
            </div>
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
        </ol>
      </div>
      <code-highlight type="html" :code="number1Code" label="html" />
    </div>

    <h2 id="list-horizontal">
      水平列表<a class="anchor-link" aria-label="Link to this section: 水平列表" href="#list-horizontal"> </a>
    </h2>
    <p>
      添加
      <code>.list-group-horizontal</code>
      可以将列表组项目的布局从垂直调整为水平，适用于所有视口大小。或者，选择响应式的变体
      <code>.list-group-horizontal-{sm|md|lg|xl|xxl}</code>，在该视口大小的
      <code>最小宽度</code> 开始时将列表组设置为水平排列。目前
      <strong>水平列表组不能与齐平列表组结合使用。</strong>
    </p>
    <p>
      <strong>小贴士：</strong>
      若希望在水平布局中实现列表组项的等宽显示？请为每个列表组项添加
      <code>.flex-fill</code> 类。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-xl">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-xxl">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
      <code-highlight type="html" :code="horizontalCode" label="html" />
    </div>

    <h2 id="list-variant">
      列表变体<a class="anchor-link" aria-label="Link to this section: 列表变体" href="#list-variant"> </a>
    </h2>
    <p>使用上下文类来为列表项设置带有状态背景和颜色的样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item">A simple default list group item</li>
          <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
          <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
          <li class="list-group-item list-group-item-success">A simple success list group item</li>
          <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
          <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
          <li class="list-group-item list-group-item-info">A simple info list group item</li>
          <li class="list-group-item list-group-item-light">A simple light list group item</li>
          <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
        </ul>
      </div>
      <code-highlight type="html" :code="variantCode" label="html" />
    </div>
    <h3>关于链接和按钮</h3>
    <p>
      上下文类还可用于 <code>.list-group-item-action</code> 类，适用于 <code>&lt;a&gt;</code> 和
      <code>&lt;button&gt;</code>
      元素。请注意，此处新增了鼠标悬停样式，而在之前的示例中并未包含这些样式。此外，还支持
      <code>.active</code> 状态；将其应用于上下文列表组项以表示选中状态。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
          <a href="#" class="list-group-item list-group-item-action list-group-item-primary"
            >A simple primary list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-secondary"
            >A simple secondary list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-success"
            >A simple success list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-danger"
            >A simple danger list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-warning"
            >A simple warning list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-info"
            >A simple info list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-light"
            >A simple light list group item</a
          >
          <a href="#" class="list-group-item list-group-item-action list-group-item-dark"
            >A simple dark list group item</a
          >
        </div>
      </div>
      <code-highlight type="html" :code="variant1Code" label="html" />
    </div>

    <h2 id="list-badge">
      带着徽章<a class="anchor-link" aria-label="Link to this section: 带着徽章" href="#list-badge"> </a>
    </h2>
    <p>
      在任何列表组项上添加徽章，即可借助一些
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex" target="_blank">实用工具</a>
      显示未读数量、活动情况等信息。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A list item
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A second list item
            <span class="badge text-bg-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            A third list item
            <span class="badge text-bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
      <code-highlight type="html" :code="badgeCode" label="html" />
    </div>

    <h2 id="list-content">
      定制内容<a class="anchor-link" aria-label="Link to this section: 定制内容" href="#list-content"> </a>
    </h2>
    <p>
      通过使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex" target="_blank">弹性盒工具栏</a>
      的帮助，您可以将几乎任何 HTML 内容添加进来，包括像下面这样的链接列表组。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
          </a>
        </div>
      </div>
      <code-highlight type="html" :code="contentCode" label="html" />
    </div>

    <h2 id="list-check">
      复选框和单选按钮<a class="anchor-link" aria-label="Link to this section: 复选框和单选按钮" href="#list-check">
      </a>
    </h2>
    <p>
      将 Bootstrap 的复选框和单选按钮放置在列表组项内，并根据需要进行自定义设置。您可以不使用
      <code>&lt;label&gt;</code> 标签来使用它们，但请务必为可访问性添加 <code>aria-label</code> 属性及其值。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
            <label class="form-check-label" for="firstCheckbox">First checkbox</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
            <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
            <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
          </li>
        </ul>
      </div>
      <code-highlight type="html" :code="check1Code" label="html" />
    </div>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked />
            <label class="form-check-label" for="firstRadio">First radio</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" />
            <label class="form-check-label" for="secondRadio">Second radio</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio" />
            <label class="form-check-label" for="thirdRadio">Third radio</label>
          </li>
        </ul>
      </div>
      <code-highlight type="html" :code="check2Code" label="html" />
    </div>
    <p>
      您可以在 <code>&lt;label&gt;</code> 元素上使用 <code>.stretched-link</code> 类，以使整个列表组项成为可点击的元素。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <ul class="list-group">
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
            <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
            <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
          </li>
          <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
          </li>
        </ul>
      </div>
      <code-highlight type="html" :code="check3Code" label="html" />
    </div>

    <h2 id="list-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#list-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，列表组现在在
      <code>.list-group</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_list-group.scss" />
  </div>
</template>

<script setup>
const example1Code = `<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`;

const activeCode = `<ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`;

const link1Code = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
</div>`;

const link2Code = `<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second button item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>`;

const flushCode = `<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>`;

const numberCode = `<ol class="list-group list-group-numbered">
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
  <li class="list-group-item">A list item</li>
</ol>`;

const number1Code = `<ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>`;

const horizontalCode = `<ul class="list-group list-group-horizontal">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-md">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-lg">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-xl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<ul class="list-group list-group-horizontal-xxl">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>`;

const variantCode = `<ul class="list-group">
  <li class="list-group-item">A simple default list group item</li>
  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
  <li class="list-group-item list-group-item-success">A simple success list group item</li>
  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
  <li class="list-group-item list-group-item-info">A simple info list group item</li>
  <li class="list-group-item list-group-item-light">A simple light list group item</li>
  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>`;

const variant1Code = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>`;

const badgeCode = `<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge text-bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge text-bg-primary rounded-pill">1</span>
  </li>
</ul>`;

const contentCode = `<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
</div>`;

const check1Code = `<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>`;

const check2Code = `<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label" for="thirdRadio">Third radio</label>
  </li>
</ul>`;

const check3Code = `<ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
    <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
    <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
    <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
  </li>
</ul>`;

const css1Code = `--#{$prefix}list-group-color: #{$list-group-color};
--#{$prefix}list-group-bg: #{$list-group-bg};
--#{$prefix}list-group-border-color: #{$list-group-border-color};
--#{$prefix}list-group-border-width: #{$list-group-border-width};
--#{$prefix}list-group-border-radius: #{$list-group-border-radius};
--#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};
--#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};
--#{$prefix}list-group-action-color: #{$list-group-action-color};
--#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
--#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};
--#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
--#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
--#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
--#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
--#{$prefix}list-group-active-color: #{$list-group-active-color};
--#{$prefix}list-group-active-bg: #{$list-group-active-bg};
--#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};`;
</script>
