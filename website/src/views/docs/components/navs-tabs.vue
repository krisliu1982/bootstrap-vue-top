<template>
  <div class="docs-toc">
    <nav id="docs-nav-tabs">
      <a href="#tabs-example">基础示例</a>
      <a href="#tabs-horizontal">水平对齐</a>
      <a href="#tabs-tabs">卡片样式</a>
      <a href="#tabs-pills">胶囊样式</a>
      <a href="#tabs-underline">下划线样式</a>
      <a href="#tabs-fill">填充并居中对齐</a>
      <a href="#tabs-position">标签栏位置</a>
      <a href="#tabs-lazy">延迟渲染</a>
      <a href="#tabs-event">动态内容</a>
      <a href="#tabs-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-tabs" class="docs-content">
    <h1>Navs and tabs 导航标签</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/" target="_blank">Bootstrap Navs and tabs</a
      >，构建 <code>bv-tabs</code> 导航标签组件。
    </p>

    <h2 id="tabs-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#tabs-example"> </a>
    </h2>
    <p>
      <code>bv-tabs</code> 组件默认选中第一个标签页，你也可以通过
      <code>init-active-index</code> 属性来指定当前选中的标签页。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs :init-active-index="0">
          <bv-tab-pane label="Home">
            <p>
              Home-This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              Profile-This is some placeholder content the Profile tab’s associated content. Clicking another tab will
              toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              Contact-This is some placeholder content the Contact tab’s associated content. Clicking another tab will
              toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>Disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="tabs-horizontal">
      水平对齐<a class="anchor-link" aria-label="Link to this section: 水平对齐" href="#tabs-horizontal"> </a>
    </h2>
    <p>
      使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/flex#justify-content" target="_blank">弹性盒工具栏</a>
      可以更改导航标签栏的水平对齐方式。默认情况下，导航标签栏是左对齐的，但您可以轻松将其更改为居中对齐或右对齐。居中对齐设置
      <code>tabs-class="justify-content-center"</code>。向右对齐设置 <code>tabs-class="justify-content-end"</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="justify-content-center">
          <bv-tab-pane label="Home">
            <p>
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
        <br />
        <bv-tabs tabs-class="justify-content-end">
          <bv-tab-pane label="Home">
            <p>
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="horizontalCode" label="vue" />
    </div>

    <h2 id="tabs-tabs">
      卡片样式<a class="anchor-link" aria-label="Link to this section: 卡片样式" href="#tabs-tabs"> </a>
    </h2>
    <p>设置 <code>tabs-class="nav-tabs"</code> 会展现选项卡样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-tabs">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="tabsCode" label="vue" />
    </div>

    <h2 id="tabs-pills">
      胶囊样式<a class="anchor-link" aria-label="Link to this section: 胶囊样式" href="#tabs-pills"> </a>
    </h2>
    <p>设置 <code>tabs-class="nav-pills"</code> 会展现胶囊样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-pills">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="pillsCode" label="vue" />
    </div>

    <h2 id="tabs-underline">
      下划线样式<a class="anchor-link" aria-label="Link to this section: 下划线样式" href="#tabs-underline"> </a>
    </h2>
    <p>
      设置
      <code>tabs-class="nav-underline"</code> 会展现下划线样式。默认标签项间距为 <code>1rem</code>，可以通过设置 CSS
      变量 <code>tabs-style="--bs-nav-underline-gap: 1.5rem;"</code> 来改变。其他 CSS 变量请阅读
      <a href="#tabs-css">CSS Variables</a>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-underline" tabs-style="--bs-nav-underline-gap: 1.5rem;">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="underlineCode" label="vue" />
    </div>

    <h2 id="tabs-fill">
      填充并居中对齐<a class="anchor-link" aria-label="Link to this section: 填充并居中对齐" href="#tabs-fill"> </a>
    </h2>
    <p>
      使用以下两种修饰类中的任意一种，导航标签栏的内容扩展至整个可用宽度。若要使标签项均匀地占据所有可用空间，请使用
      <code>.nav-fill</code>
      。请注意，所有水平空间都被占用，但并非每个标签项的宽度都相同。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-pills nav-fill">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Much longer nav link">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="fill1Code" label="vue" />
    </div>
    <p>
      对于宽度相等的元素，请使用
      <code>.nav-justified</code> 类。所有水平空间都将被导航链接占据，但与上述的
      <code>.nav-fill</code>
      类不同的是，每个标签项的宽度都将保持一致。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-pills nav-justified">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Much longer nav link">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="fill2Code" label="vue" />
    </div>

    <h2 id="tabs-position">
      标签栏位置<a class="anchor-link" aria-label="Link to this section: 标签栏位置" href="#tabs-position"> </a>
    </h2>
    <p>
      可以通过 <code>position</code> 设置标签的位置。一共有四个方向的设置 <code>position="start|end|top|bottom"</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-pills" position="bottom">
          <bv-tab-pane label="Home">
            <p>
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
        <hr />
        <bv-tabs tabs-class="nav-pills" position="start">
          <bv-tab-pane label="Home">
            <p>
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
        <hr />
        <bv-tabs tabs-class="nav-pills" position="end">
          <bv-tab-pane label="Home">
            <p>
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p>
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p>
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Disabled" disabled>disabled</bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="positionCode" label="vue" />
    </div>

    <h2 id="tabs-lazy">
      延迟渲染<a class="anchor-lazy" aria-label="Link to this section: 延迟渲染" href="#tabs-lazy"> </a>
    </h2>
    <p>
      通过设置
      <code>:lazy="true"</code>
      使初始化时未激活的标签项不进行渲染，激活后才渲染。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-tabs" :lazy="true">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <p class="py-3">
              This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="lazyCode" label="vue" />
    </div>

    <h2 id="tabs-event">
      动态内容<a class="anchor-lazy" aria-label="Link to this section: 动态内容" href="#tabs-event"> </a>
    </h2>
    <p>
      监听 <code>tab-shown</code> 事件处理标签项可见后进行相关操作，传入 <code>index</code> 参数。例如异步获取数据。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-tabs tabs-class="nav-tabs" @tab-shown="handleShown">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <div class="py-3">
              <p v-if="data !== null">
                {{ data.content }}
              </p>
              <div v-else class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
        </bv-tabs>
      </div>
      <code-highlight type="vue" :code="eventCode" label="vue" />
    </div>

    <h2 id="tabs-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#tabs-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，导航标签栏现在在
      <code>.nav</code> 和 <code>.nav-*</code> 元素上使用本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS
      变量的值是通过 Sass 设置的，因此 Sass 自定义功能仍然得到支持。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_nav.scss" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref(null);
function handleShown(index) {
  if (data.value === null && index === 1) {
    setTimeout(() => {
      data.value = {
        content: 'Woo-hoo, you’re reading this text in a tab content!'
      };
    }, 1000);
  }
}

const exampleCode = `
<template>
  <bv-tabs :init-active-index="0">
    <bv-tab-pane label="Home">
        ...
    </bv-tab-pane>
    <bv-tab-pane label="Profile">
        ...
    </bv-tab-pane>
    <bv-tab-pane label="Contact">
        ...
    </bv-tab-pane>
    <bv-tab-pane label="Disabled" disabled>...</bv-tab-pane>
  </bv-tabs>
</template>`;

const horizontalCode = `
<template>
  <bv-tabs tabs-class="justify-content-center">...</bv-tabs>

  <bv-tabs tabs-class="justify-content-end">...</bv-tabs>
</template>`;

const tabsCode = `
<template>
  <bv-tabs tabs-class="nav-tabs">...</bv-tabs>
</template>`;

const pillsCode = `
<template>
  <bv-tabs tabs-class="nav-pills">...</bv-tabs>
</template>`;

const underlineCode = `
<template>
  <bv-tabs tabs-class="nav-underline" 
    tabs-style="--bs-nav-underline-gap: 1.5rem;">...</bv-tabs>
</template>`;

const fill1Code = `
<template>
  <bv-tabs tabs-class="nav-pills nav-fill">...</bv-tabs>
</template>`;

const fill2Code = `
<template>
  <bv-tabs tabs-class="nav-pills nav-justified">...</bv-tabs>
</template>`;

const positionCode = `
<template>
  <bv-tabs tabs-class="nav-pills" position="bottom">...</bv-tabs>
  <hr/>
  <bv-tabs tabs-class="nav-pills" position="start">...</bv-tabs>
  <hr/>
  <bv-tabs tabs-class="nav-pills" position="end">...</bv-tabs>
</template>`;

const lazyCode = `
<template>
    <bv-tabs tabs-class="nav-tabs" :lazy="true">...</bv-tabs>
</template>`;

const eventCode = `
<template>
  <bv-tabs tabs-class="nav-tabs" @tab-shown="handleShown">
      <bv-tab-pane label="Home">
          ...
      </bv-tab-pane>
      <bv-tab-pane label="Profile">
        <div class="py-3">
          <div class="py-3">
            <p v-if="data !== null">
              {{ data.content }}
            </p>
            <div v-else class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </bv-tab-pane>
      <bv-tab-pane label="Contact">
          ...
      </bv-tab-pane>
  </bv-tabs>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(null)
function handleShown(index) {
  if (data.value === null && index === 1) {
    setTimeout(() => {
      data.value = {content:'Woo-hoo, you’re reading this text in a tab content!'}
    }, 1000)
  }
}
<\/script>`;

const css1Code = `
//.nav base class
--#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: #{$nav-link-color};
--#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};
--#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};

//.nav-tabs modifier class
--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};

//.nav-pills modifier class
--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};

//.nav-underline modifier class
--#{$prefix}nav-underline-gap: #{$nav-underline-gap};
--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};
--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};`;
</script>
