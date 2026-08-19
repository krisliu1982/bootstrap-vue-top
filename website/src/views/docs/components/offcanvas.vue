<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-offcanvas">
      <a href="#offcanvas-example">基础示例</a>
      <a href="#offcanvas-static">静态背景</a>
      <a href="#offcanvas-placement">位置和大小</a>
      <a href="#offcanvas-event">事件监听</a>
      <a href="#offcanvas-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-offcanvas" class="docs-content">
    <h1>Offcanvas 侧边栏</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/offcanvas/" target="_blank">Bootstrap Offcanvas</a>，构建
      <code>bv-offcanvas</code> 侧边栏组件。
    </p>

    <h2 id="offcanvas-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#offcanvas-example"> </a>
    </h2>
    <p>
      单击下面的按钮，通过调用组件
      <code>toggle</code> 方法来打开一个侧边栏。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="offcanvasExampleRef.toggle()">Toggle offcanvas</button>
        <bv-offcanvas ref="offcanvasExampleRef" title="基础示例">
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
            etc.
          </p>
        </bv-offcanvas>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="offcanvas-static">
      静态背景<a class="anchor-link" aria-label="Link to this section: 静态背景" href="#offcanvas-static"> </a>
    </h2>
    <p>
      当设置
      <code>backdrop="static"</code>
      时，点击页面外部并不会导致侧边栏关闭。点击下面的按钮即可进行尝试。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="offcanvasStaticRef.toggle()">
          Static backdrop offcanvas
        </button>
        <bv-offcanvas ref="offcanvasStaticRef" title="静态背景" backdrop="static"> ... </bv-offcanvas>
      </div>
      <code-highlight type="vue" :code="staticCode" label="vue" />
    </div>

    <h2 id="offcanvas-placement">
      位置和大小<a class="anchor-link" aria-label="Link to this section: 位置和大小" href="#offcanvas-placement"> </a>
    </h2>
    <p>
      可以通过 <code>offcanvas-class</code> 设置侧边栏的位置, 一共有四个方向的设置
      <code>start|end|top|bottom</code>。可以通过 <code>offcanvas-style</code> 设置 CSS 变量来改变高度和宽度。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="offcanvasEndRef.toggle()">
            Toggle right offcanvas
          </button>
          <button type="button" class="btn btn-primary" @click="offcanvasTopRef.toggle()">Toggle top offcanvas</button>
          <button type="button" class="btn btn-primary" @click="offcanvasBottomRef.toggle()">
            Toggle bottom offcanvas
          </button>
        </div>
        <bv-offcanvas
          ref="offcanvasEndRef"
          title="右边侧边栏"
          offcanvas-class="offcanvas offcanvas-end"
          offcanvas-style="--bs-offcanvas-width:75vw;"
        >
          ...
        </bv-offcanvas>
        <bv-offcanvas
          ref="offcanvasTopRef"
          title="顶部侧边栏"
          offcanvas-class="offcanvas offcanvas-top"
          offcanvas-style="--bs-offcanvas-height:75vh;"
        >
          ...
        </bv-offcanvas>
        <bv-offcanvas
          ref="offcanvasBottomRef"
          title="底部侧边栏"
          offcanvas-class="offcanvas offcanvas-bottom"
          offcanvas-style="--bs-offcanvas-height:75vh;"
        >
          ...
        </bv-offcanvas>
      </div>
      <code-highlight type="vue" :code="positionCode" label="vue" />
    </div>

    <h2 id="offcanvas-event">
      事件监听<a class="anchor-link" aria-label="Link to this section: 事件监听" href="#offcanvas-event"> </a>
    </h2>
    <p>
      监听
      <code>offcanvas-shown</code>
      事件处理侧边栏可见后进行相关操作，例如异步获取数据。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="offcanvasEventRef.toggle()">Offcanvas event</button>
        <bv-offcanvas ref="offcanvasEventRef" title="事件监听" @offcanvas-shown="handleShown">
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-if="data !== null">
            <p>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images,
              lists, etc.
            </p>
          </div>
        </bv-offcanvas>
      </div>
      <code-highlight type="vue" :code="eventCode" label="vue" />
    </div>

    <h2 id="offcanvas-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#offcanvas-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，模态框现在在
      <code>.offcanvas</code> 元素上使用了本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然可用。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_offcanvas.scss" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const offcanvasExampleRef = ref(null);

const offcanvasStaticRef = ref(null);

const offcanvasEndRef = ref(null);
const offcanvasTopRef = ref(null);
const offcanvasBottomRef = ref(null);

const offcanvasEventRef = ref(null);
const loading = ref(false);
const data = ref(null);
function handleShown() {
  if (data.value === null) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      data.value = '...';
    }, 1000);
  }
}

const exampleCode = `
<template>
    <button type="button" class="btn btn-primary" 
      @click="offcanvasExampleRef.toggle()">Toggle offcanvas</button>
    <bv-offcanvas ref="offcanvasExampleRef" title="基础示例">
        ...
    </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue'

const offcanvasExampleRef = ref(null)
<\/script>`;

const staticCode = `
<template>
    <button type="button" class="btn btn-primary" 
      @click="offcanvasStaticRef.toggle()">
      Static backdrop offcanvas
    </button>
    <bv-offcanvas ref="offcanvasStaticRef" title="静态背景" backdrop="static">
      ...
    </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue'

const offcanvasStaticRef = ref(null)
<\/script>`;

const positionCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" @click="offcanvasEndRef.toggle()">
      Toggle right offcanvas
    </button>
    <button type="button" class="btn btn-primary" @click="offcanvasTopRef.toggle()">
      Toggle top offcanvas
    </button>
    <button type="button" class="btn btn-primary" @click="offcanvasBottomRef.toggle()">
      Toggle bottom offcanvas
    </button>
  </div>

  <bv-offcanvas ref="offcanvasEndRef" title="右边侧边栏"
  offcanvas-class="offcanvas offcanvas-end"
  offcanvas-style="--bs-offcanvas-width:75vw;">
    ...
  </bv-offcanvas>
  <bv-offcanvas ref="offcanvasTopRef" title="顶部侧边栏" 
  offcanvas-class="offcanvas offcanvas-top"
  offcanvas-style="--bs-offcanvas-height:75vh;">
    ...
  </bv-offcanvas>
  <bv-offcanvas ref="offcanvasBottomRef" title="底部侧边栏"
  offcanvas-class="offcanvas offcanvas-bottom" 
  offcanvas-style="--bs-offcanvas-height:75vh;">
    ...
  </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue'

const offcanvasEndRef = ref(null)
const offcanvasTopRef = ref(null)
const offcanvasBottomRef = ref(null)
<\/script>`;

const eventCode = `
<template>
  <button type="button" class="btn btn-primary" @click="offcanvasEventRef.toggle()">
    Offcanvas event
  </button>
  <bv-offcanvas ref="offcanvasEventRef" title="事件监听" @offcanvas-shown="handleShown">
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="data !== null">
      ...
    </div>
  </bv-offcanvas>
</template>

<script setup>
import { ref } from 'vue'

const offcanvasEventRef = ref(null);
const loading = ref(false);
const data = ref(null)
function handleShown() {
    if (data.value === null) {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            data.value = '...';
        }, 1000);
    }
}
<\/script>`;

const css1Code = `
--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};
--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};
--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};
--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};
--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};
--#{$prefix}offcanvas-color: #{$offcanvas-color};
--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};
--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};
--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};
--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};
--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};
--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};`;
</script>
