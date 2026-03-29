<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-modal">
      <a href="#modal-example">基础示例</a>
      <a href="#modal-footer">底部插槽</a>
      <a href="#modal-static">静态背景</a>
      <a href="#modal-long">滚动显示大量内容</a>
      <a href="#modal-center">垂直居中</a>
      <a href="#modal-size">可选尺寸</a>
      <a href="#modal-fullscreen">全屏模态框</a>
      <a href="#modal-event">动态内容</a>
      <a href="#modal-css">CSS Variables</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-modal" class="docs-content">
    <h1>Modal 模态框</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank">Bootstrap Modal</a>，构建
      <code>bv-modal</code> 模态框组件。<span class="text-bg-warning">不支持同时打开多个模态框。</span
      >如果您需要打开多个模态框，可以使用 <code>bv-modal-2</code> 模态框组件。
    </p>

    <h2 id="modal-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#modal-example"> </a>
    </h2>
    <p>
      单击下面的按钮，通过调用组件
      <code>toggle</code> 方法来切换一个模态框。它会从页面顶部向下滑动并淡入。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalExampleRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalExampleRef" title="基础示例">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="modal-footer">
      底部插槽<a class="anchor-link" aria-label="Link to this section: 底部插槽" href="#modal-footer"> </a>
    </h2>
    <p>组件中提供了 <code>#footer</code> 插槽来扩展组件底部信息。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalFooterRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalFooterRef" title="底部插槽">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <template #footer>
            <button type="button" class="btn btn-light" @click="modalFooterRef.toggle()">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </template>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="footerCode" label="vue" />
    </div>

    <h2 id="modal-static">
      静态背景<a class="anchor-link" aria-label="Link to this section: 静态背景" href="#modal-static"> </a>
    </h2>
    <p>
      当设置
      <code>backdrop="static"</code>
      时，点击页面外部并不会导致模态框关闭。点击下面的按钮即可进行尝试。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalStaticRef.toggle()">
          Launch static backdrop modal
        </button>
        <bv-modal ref="modalStaticRef" title="静态背景" backdrop="static">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <template #footer>
            <button type="button" class="btn btn-light" @click="modalStaticRef.toggle()">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </template>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="staticCode" label="vue" />
    </div>

    <h2 id="modal-long">
      滚动显示大量内容<a class="anchor-link" aria-label="Link to this section: 滚动显示大量内容" href="#modal-long">
      </a>
    </h2>
    <p>当模态框的长度超出用户的视口或设备范围时，它们会独立于页面本身进行滚动。请尝试下面的演示，以了解具体情况。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalLongRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalLongRef" title="滚动显示大量内容">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
        </bv-modal>
      </div>
    </div>
    <p>
      您还可以创建一个可滚动的模态框，通过设置
      <code>dialog-class="modal-dialog-scrollable"</code>
      来实现对模态框主体内容的滚动操作。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalScrollableRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalScrollableRef" title="滚动显示大量内容" dialog-class="modal-dialog-scrollable">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="scrollableCode" label="vue" />
    </div>

    <h2 id="modal-center">
      垂直居中<a class="anchor-link" aria-label="Link to this section: 垂直居中" href="#modal-center"> </a>
    </h2>
    <p>
      设置
      <code>dialog-class="modal-dialog-centered"</code>，即可使模态框在垂直方向上实现居中显示。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalCenterRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalCenterRef" title="垂直居中" dialog-class="modal-dialog-centered">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="centerCode" label="vue" />
    </div>

    <h2 id="modal-size">
      可选尺寸<a class="anchor-link" aria-label="Link to this section: 可选尺寸" href="#modal-size"> </a>
    </h2>
    <p>
      模态框有三种可选的尺寸，可通过修饰符类将其应用于
      <code>dialog-class</code>
      属性中。这些尺寸会在特定的视口宽度断点处生效，以避免在较窄的视口中出现水平滚动条。
    </p>
    <table class="table">
      <thead>
        <tr>
          <th>Size</th>
          <th>Class</th>
          <th>Modal max-width</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Small</td>
          <td><code>.modal-sm</code></td>
          <td><code>300px</code></td>
        </tr>
        <tr>
          <td>Default</td>
          <td><span class="text-body-secondary">None</span></td>
          <td><code>500px</code></td>
        </tr>
        <tr>
          <td>Large</td>
          <td><code>.modal-lg</code></td>
          <td><code>800px</code></td>
        </tr>
        <tr>
          <td>Extra large</td>
          <td><code>.modal-xl</code></td>
          <td><code>1140px</code></td>
        </tr>
      </tbody>
    </table>
    <p>我们默认的无修饰类模态框即为“中等”尺寸的模态框。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3">
          <button type="button" class="btn btn-primary" @click="modalXlRef.toggle()">Extra large modal</button>
          <button type="button" class="btn btn-primary" @click="modalLgRef.toggle()">Large modal</button>
          <button type="button" class="btn btn-primary" @click="modalSmRef.toggle()">Small modal</button>
        </div>
        <bv-modal ref="modalXlRef" title="Extra large modal" dialog-class="modal-xl">...</bv-modal>
        <bv-modal ref="modalLgRef" title="Large modal" dialog-class="modal-lg">...</bv-modal>
        <bv-modal ref="modalSmRef" title="Small modal" dialog-class="modal-sm">...</bv-modal>
      </div>
      <code-highlight type="vue" :code="sizeCode" label="vue" />
    </div>

    <h2 id="modal-fullscreen">
      全屏模态框<a class="anchor-link" aria-label="Link to this section: 全屏模态框" href="#modal-fullscreen"> </a>
    </h2>
    <p>该功能可通过放置在 <code>dialog-class</code> 属性上的修饰符类来实现。</p>
    <table class="table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.modal-fullscreen</code></td>
          <td>Always</td>
        </tr>
        <tr>
          <td><code>.modal-fullscreen-sm-down</code></td>
          <td><code>576px</code></td>
        </tr>
        <tr>
          <td><code>.modal-fullscreen-md-down</code></td>
          <td><code>768px</code></td>
        </tr>
        <tr>
          <td><code>.modal-fullscreen-lg-down</code></td>
          <td><code>992px</code></td>
        </tr>
        <tr>
          <td><code>.modal-fullscreen-xl-down</code></td>
          <td><code>1200px</code></td>
        </tr>
        <tr>
          <td><code>.modal-fullscreen-xxl-down</code></td>
          <td><code>1400px</code></td>
        </tr>
      </tbody>
    </table>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="hstack-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="modalFullscreenRef.toggle()">Full screen</button>
          <button type="button" class="btn btn-primary" @click="modalFullscreenSmRef.toggle()">
            Full screen below sm
          </button>
          <button type="button" class="btn btn-primary" @click="modalFullscreenMdRef.toggle()">
            Full screen below md
          </button>
          <button type="button" class="btn btn-primary" @click="modalFullscreenLgRef.toggle()">
            Full screen below lg
          </button>
          <button type="button" class="btn btn-primary" @click="modalFullscreenXlRef.toggle()">
            Full screen below xl
          </button>
          <button type="button" class="btn btn-primary" @click="modalFullscreenXxlRef.toggle()">
            Full screen below xxl
          </button>
        </div>
        <bv-modal ref="modalFullscreenRef" title="Full screen modal" dialog-class="modal-fullscreen">...</bv-modal>
        <bv-modal ref="modalFullscreenSmRef" title="Full screen below sm" dialog-class="modal-fullscreen-sm-down"
          >...</bv-modal
        >
        <bv-modal ref="modalFullscreenMdRef" title="Full screen below md" dialog-class="modal-fullscreen-md-down"
          >...</bv-modal
        >
        <bv-modal ref="modalFullscreenLgRef" title="Full screen below lg" dialog-class="modal-fullscreen-lg-down"
          >...</bv-modal
        >
        <bv-modal ref="modalFullscreenXlRef" title="Full screen below xl" dialog-class="modal-fullscreen-xl-down"
          >...</bv-modal
        >
        <bv-modal ref="modalFullscreenXxlRef" title="Full screen below xxl" dialog-class="modal-fullscreen-xxl-down"
          >...</bv-modal
        >
      </div>
      <code-highlight type="vue" :code="fullscreenCode" label="vue" />
    </div>

    <h2 id="modal-event">
      动态内容<a class="anchor-link" aria-label="Link to this section: 动态内容" href="#modal-event"> </a>
    </h2>
    <p>
      监听
      <code>modal-shown</code>
      事件处理模态框显示后进行相关操作，例如异步获取数据。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="modalEventRef.toggle()">Launch demo modal</button>
        <bv-modal ref="modalEventRef" title="动态内容" @modal-shown="handleShown">
          <div v-if="data !== null">
            <p>{{ data.content }}</p>
          </div>
          <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </bv-modal>
      </div>
      <code-highlight type="vue" :code="eventCode" label="vue" />
    </div>

    <h2 id="modal-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#modal-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，模态框现在在
      <code>.modal</code> 和 <code>.modal-backdrop</code> 元素上使用了本地 CSS 变量，以实现更出色的实时自定义功能。这些
      CSS 变量的值是通过 Sass 设置的，因此 Sass 自定义功能仍然可用。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_modal.scss" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const modalExampleRef = ref(null);
const modalFooterRef = ref(null);
const modalEventRef = ref(null);
const data = ref(null);
function handleShown() {
  if (data.value === null) {
    setTimeout(() => {
      data.value = { content: 'Woo-hoo, you’re reading this text in a modal!' };
    }, 1000);
  }
}

const modalStaticRef = ref(null);
const modalLongRef = ref(null);
const modalScrollableRef = ref(null);
const modalCenterRef = ref(null);

const modalXlRef = ref(null);
const modalLgRef = ref(null);
const modalSmRef = ref(null);

const modalFullscreenRef = ref(null);
const modalFullscreenSmRef = ref(null);
const modalFullscreenMdRef = ref(null);
const modalFullscreenLgRef = ref(null);
const modalFullscreenXlRef = ref(null);
const modalFullscreenXxlRef = ref(null);

const exampleCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalExampleRef.toggle()">
      Launch demo modal
  </button>
  <bv-modal ref="modalExampleRef" title="基础示例">
      ...
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalExampleRef = ref(null);
<\/script>`;

const footerCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalFooterRef.toggle()">
      Launch demo modal
  </button>
  <bv-modal ref="modalFooterRef" title="底部插槽">
    ...
    <template #footer>
        <button type="button" class="btn btn-light"
                @click="modalFooterRef.toggle()">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalFooterRef = ref(null);
<\/script>`;

const staticCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalStaticRef.toggle()">
      Launch static backdrop modal
  </button>
  <bv-modal ref="modalStaticRef" title="静态背景" backdrop="static">
    ...
    <template #footer>
        <button type="button" class="btn btn-light"
                @click="modalStaticRef.toggle()">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalStaticRef = ref(null);
<\/script>`;

const scrollableCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalScrollableRef.toggle()">
      Launch demo modal
  </button>
  <bv-modal ref="modalScrollableRef" title="滚动显示大量内容" 
  dialog-class="modal-dialog-scrollable">
      <p style="min-height: 100vh;">...</p>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalScrollableRef = ref(null);
<\/script>`;

const centerCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalCenterRef.toggle()">
      Launch demo modal
  </button>
  <bv-modal ref="modalCenterRef" title="垂直居中" 
  dialog-class="modal-dialog-centered">
      ...
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalScrollableRef = ref(null);
<\/script>`;

const sizeCode = `<template>
  <div class="hstack-3">
    <button type="button" class="btn btn-primary" 
      @click="modalXlRef.toggle()">Extra large modal</button>
    <button type="button" class="btn btn-primary" 
      @click="modalLgRef.toggle()">Large modal</button>
    <button type="button" class="btn btn-primary" 
      @click="modalSmRef.toggle()">Small modal</button>
  </div>
  <bv-modal ref="modalXlRef" title="Extra large modal" dialog-class="modal-xl">...</bv-modal>
  <bv-modal ref="modalLgRef" title="Large modal" dialog-class="modal-lg">...</bv-modal>
  <bv-modal ref="modalSmRef" title="Small modal" dialog-class="modal-sm">...</bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalXlRef = ref(null);
const modalLgRef = ref(null);
const modalSmRef = ref(null);
<\/script>`;

const fullscreenCode = `<template>
  <div class="hstack-3 flex-wrap"> 
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenRef.toggle()">Full screen</button>
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenSmRef.toggle()">Full screen below sm</button>
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenMdRef.toggle()">Full screen below md</button>
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenLgRef.toggle()">Full screen below lg</button>
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenXlRef.toggle()">Full screen below xl</button>
      <button type="button" class="btn btn-primary" 
        @click="modalFullscreenXxlRef.toggle()">Full screen below xxl</button> 
  </div>
  
  <bv-modal ref="modalFullscreenRef" title="Full screen modal" 
    dialog-class="modal-fullscreen">...</bv-modal>
  <bv-modal ref="modalFullscreenSmRef" title="Full screen below sm" 
    dialog-class="modal-fullscreen-sm-down">...</bv-modal>
  <bv-modal ref="modalFullscreenMdRef" title="Full screen below md" 
    dialog-class="modal-fullscreen-md-down">...</bv-modal>
  <bv-modal ref="modalFullscreenLgRef" title="Full screen below lg" 
    dialog-class="modal-fullscreen-lg-down">...</bv-modal>
  <bv-modal ref="modalFullscreenXlRef" title="Full screen below xl" 
    dialog-class="modal-fullscreen-xl-down">...</bv-modal>
  <bv-modal ref="modalFullscreenXxlRef" title="Full screen below xxl" 
    dialog-class="modal-fullscreen-xxl-down">...</bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalFullscreenRef = ref(null);
const modalFullscreenSmRef = ref(null);
const modalFullscreenMdRef = ref(null);
const modalFullscreenLgRef = ref(null);
const modalFullscreenXlRef = ref(null);
const modalFullscreenXxlRef = ref(null);
<\/script>  
`;
const eventCode = `<template>
  <button type="button" class="btn btn-primary" @click="modalEventRef.toggle()">
      Launch demo modal
  </button>
  <bv-modal ref="modalEventRef" title="动态内容" 
    @modal-shown="handleShown">
    <div v-if="data !== null">
        ...
    </div>
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </bv-modal>
</template>

<script setup>
import { ref } from 'vue'

const modalEventRef = ref(null);
const data = ref(null)
function handleShown() {
  if (data.value === null) {
    setTimeout(() => {
      data.value = {content:'Woo-hoo, you’re reading this text in a modal!'}
    }, 1000)
  }
}
<\/script>`;

const css1Code = `--#{$prefix}modal-zindex: #{$zindex-modal};
--#{$prefix}modal-width: #{$modal-md};
--#{$prefix}modal-padding: #{$modal-inner-padding};
--#{$prefix}modal-margin: #{$modal-dialog-margin};
--#{$prefix}modal-color: #{$modal-content-color};
--#{$prefix}modal-bg: #{$modal-content-bg};
--#{$prefix}modal-border-color: #{$modal-content-border-color};
--#{$prefix}modal-border-width: #{$modal-content-border-width};
--#{$prefix}modal-border-radius: #{$modal-content-border-radius};
--#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};
--#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};
--#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};
--#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};
--#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y
--#{$prefix}modal-header-border-color: #{$modal-header-border-color};
--#{$prefix}modal-header-border-width: #{$modal-header-border-width};
--#{$prefix}modal-title-line-height: #{$modal-title-line-height};
--#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};
--#{$prefix}modal-footer-bg: #{$modal-footer-bg};
--#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};
--#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};

--#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};
--#{$prefix}backdrop-bg: #{$modal-backdrop-bg};
--#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};`;
</script>
