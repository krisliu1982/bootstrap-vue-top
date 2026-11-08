<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-modal2">
      <a href="#modal2-example">基础示例</a>
      <a href="#modal2-many">打开多个</a>
      <a href="#modal2-footer">底部插槽</a>
      <a href="#modal2-static">静态背景</a>
      <a href="#modal2-long">滚动显示大量内容</a>
      <a href="#modal2-center">垂直居中</a>
      <a href="#modal2-size">可选尺寸</a>
      <a href="#modal2-fullscreen">全屏模态框</a>
      <a href="#modal2-destory">关闭时销毁</a>
      <a href="#modal2-draggable">可拖拽</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-modal2" class="docs-content">
    <h1>Modal2 模态框2</h1>
    <p class="fs-4 fw-light">
      为了支持打开多个模态框和拖动，特定构建
      <code>bv-modal-2</code> 模态框组件。
    </p>

    <h2 id="modal2-example">
      基础示例<a class="anchor-link" aria-label="Link to this section: 基础示例" href="#modal2-example"> </a>
    </h2>
    <p>
      通过设置 <code>v-model</code> Boolean 类型属性来切换一个模态框。<code>true</code> 为打开，<code>false</code>
      为关闭。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalExample = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalExample" title="基础示例">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="exampleCode" label="vue" />
    </div>

    <h2 id="modal2-many">
      打开多个<a class="anchor-link" aria-label="Link to this section: 打开多个" href="#modal2-many"> </a>
    </h2>
    <p>
      打开多个模块框，屏蔽层会叠加。<span class="text-bg-warning"
        >在<strong>移动端</strong>避免打开多个模态框（同时弹出多个窗口会让用户感到混乱）。</span
      >
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalMany1 = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalMany1" title="第一个模态框" dialog-class="modal-lg">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>
            <button type="button" class="btn btn-primary" @click="isOpenModalMany2 = true">Open modal</button>
          </p>
          <bv-modal-2 v-model="isOpenModalMany2" title="第二个模态框">
            <p>Woo-hoo, you’re reading this text in a modal!</p>
            <p>Woo-hoo, you’re reading this text in a modal!</p>
            <p>Woo-hoo, you’re reading this text in a modal!</p>
            <p>Woo-hoo, you’re reading this text in a modal!</p>
            <p>Woo-hoo, you’re reading this text in a modal!</p>
            <p>Woo-hoo, you’re reading this text in a modal!</p>
          </bv-modal-2>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="manyCode" label="vue" />
    </div>

    <h2 id="modal2-footer">
      底部插槽<a class="anchor-link" aria-label="Link to this section: 底部插槽" href="#modal2-footer"> </a>
    </h2>
    <p>组件中提供了 <code>#footer</code> 插槽来扩展组件底部信息。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalFooter = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalFooter" title="底部插槽">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <template #footer>
            <button type="button" class="btn btn-light" @click="isOpenModalFooter = false">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </template>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="footerCode" label="vue" />
    </div>

    <h2 id="modal2-static">
      静态背景<a class="anchor-link" aria-label="Link to this section: 静态背景" href="#modal2-static"> </a>
    </h2>
    <p>
      当设置
      <code>backdrop="static"</code>
      时，点击页面外部并不会导致模态框关闭。点击下面的按钮即可进行尝试。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalStatic = true">
          Launch static backdrop modal
        </button>
        <bv-modal-2 v-model="isOpenModalStatic" title="静态背景" backdrop="static">
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <p>Woo-hoo, you’re reading this text in a modal!</p>
          <template #footer>
            <button type="button" class="btn btn-light" @click="isOpenModalStatic = false">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </template>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="staticCode" label="vue" />
    </div>

    <h2 id="modal2-long">
      滚动显示大量内容<a class="anchor-link" aria-label="Link to this section: 滚动显示大量内容" href="#modal2-long">
      </a>
    </h2>
    <p>当模态框的长度超出用户的视口或设备范围时，它们会独立于页面本身进行滚动。请尝试下面的演示，以了解具体情况。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalLong = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalLong" title="滚动显示大量内容">
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
        </bv-modal-2>
      </div>
    </div>
    <p>
      您还可以创建一个可滚动的模态框，通过设置
      <code>dialog-class="modal-dialog-scrollable"</code>
      来实现对模态框主体内容的滚动操作。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalScrollable = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalScrollable" title="滚动显示大量内容" dialog-class="modal-dialog-scrollable">
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
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="scrollableCode" label="vue" />
    </div>

    <h2 id="modal2-center">
      垂直居中<a class="anchor-link" aria-label="Link to this section: 垂直居中" href="#modal2-center"> </a>
    </h2>
    <p>
      设置
      <code>dialog-class="modal-dialog-centered"</code>，即可使模态框在垂直方向上实现居中显示。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalCenter = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalCenter" title="垂直居中" dialog-class="modal-dialog-centered">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in
            the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal
            and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport,
            scrolling will move the modal as needed.
          </p>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="centerCode" label="vue" />
    </div>

    <h2 id="modal2-size">
      可选尺寸<a class="anchor-link" aria-label="Link to this section: 列表编号" href="#modal2-size"> </a>
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
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="isOpenModalXl = true">Extra large modal</button>
          <button type="button" class="btn btn-primary" @click="isOpenModalLg = true">Large modal</button>
          <button type="button" class="btn btn-primary" @click="isOpenModalSm = true">Small modal</button>
        </div>
        <bv-modal-2 v-model="isOpenModalXl" title="Extra large modal" dialog-class="modal-xl">...</bv-modal-2>
        <bv-modal-2 v-model="isOpenModalLg" title="Large modal" dialog-class="modal-lg">...</bv-modal-2>
        <bv-modal-2 v-model="isOpenModalSm" title="Small modal" dialog-class="modal-sm">...</bv-modal-2>
      </div>
      <code-highlight type="vue" :code="sizeCode" label="vue" />
    </div>

    <h2 id="modal2-fullscreen">
      全屏模态框<a class="anchor-link" aria-label="Link to this section: 全屏模态框" href="#modal2-fullscreen"> </a>
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
        <div class="hstack gap-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreen = true">Full screen</button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenSm = true">
            Full screen below sm
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenMd = true">
            Full screen below md
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenLg = true">
            Full screen below lg
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenXl = true">
            Full screen below xl
          </button>
          <button type="button" class="btn btn-primary" @click="isOpenModalFullscreenXxl = true">
            Full screen below xxl
          </button>
        </div>
        <bv-modal-2 v-model="isOpenModalFullscreen" title="Full screen modal" dialog-class="modal-fullscreen"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenSm"
          title="Full screen below sm"
          dialog-class="modal-fullscreen-sm-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenMd"
          title="Full screen below md"
          dialog-class="modal-fullscreen-md-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenLg"
          title="Full screen below lg"
          dialog-class="modal-fullscreen-lg-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenXl"
          title="Full screen below xl"
          dialog-class="modal-fullscreen-xl-down"
          >...</bv-modal-2
        >
        <bv-modal-2
          v-model="isOpenModalFullscreenXxl"
          title="Full screen below xxl"
          dialog-class="modal-fullscreen-xxl-down"
          >...</bv-modal-2
        >
      </div>
      <code-highlight type="vue" :code="fullscreenCode" label="vue" />
    </div>

    <h2 id="modal2-destory">
      关闭时销毁<a class="anchor-link" aria-label="Link to this section: 关闭时销毁" href="#modal2-destory"> </a>
    </h2>
    <p>该功能可通过设置 <code>:destory="true"</code> 来实现。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalDestory = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalDestory" :destory="true" title="关闭时销毁">
          <p>
            This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to
            demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content
            becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the
            modal.
          </p>
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="destoryCode" label="vue" />
    </div>

    <h2 id="modal2-draggable">
      可拖拽<a class="anchor-link" aria-label="Link to this section: 可拖拽" href="#modal2-draggable"> </a>
    </h2>
    <p>
      该功能可通过设置
      <code>:draggable="true"</code> 来实现。需按住头部进行拖动。如果设置 <code>:destory="true"</code>，
      切换时位置会重置。可拖动模态框没有必要设置为全屏。
    </p>
    <p class="text-bg-warning">
      在<strong>触摸设备</strong>上不支持拖拽功能。根据 Bootstrap v6 版本发布情况，考虑是否在触摸设备上支持拖拽。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <button type="button" class="btn btn-primary" @click="isOpenModalDraggable = true">Launch demo modal</button>
        <bv-modal-2 v-model="isOpenModalDraggable" :draggable="true" title="可拖拽">
          Woo-hoo, you’re reading this text in a modal!
        </bv-modal-2>
      </div>
      <code-highlight type="vue" :code="draggableCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpenModalExample = ref(false);

const isOpenModalMany1 = ref(false);
const isOpenModalMany2 = ref(false);

const isOpenModalFooter = ref(false);

const isOpenModalStatic = ref(false);

const isOpenModalLong = ref(false);
const isOpenModalScrollable = ref(false);
const isOpenModalCenter = ref(false);

const isOpenModalXl = ref(false);
const isOpenModalLg = ref(false);
const isOpenModalSm = ref(false);

const isOpenModalFullscreen = ref(false);
const isOpenModalFullscreenSm = ref(false);
const isOpenModalFullscreenMd = ref(false);
const isOpenModalFullscreenLg = ref(false);
const isOpenModalFullscreenXl = ref(false);
const isOpenModalFullscreenXxl = ref(false);

const isOpenModalDestory = ref(false);

const isOpenModalDraggable = ref(false);

const exampleCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalExample = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalExample" title="基础示例">
    ...
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalExample= ref(false);
<\/script>`;

const manyCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalMany1 = true">
      Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalMany1" title="第一个模态框" dialog-class="modal-lg">
      ...
    <p>
      <button type="button" class="btn btn-primary" 
        @click="isOpenModalMany2 = true">Open modal</button>
    </p>
    <bv-modal-2 v-model="isOpenModalMany2" title="第二个模态框">
        ...
    </bv-modal-2>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalMany1 = ref(false);
const isOpenModalMany2 = ref(false);
<\/script>`;

const footerCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalFooter = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalFooter" title="底部插槽">
    ...
    <template #footer>
      <button type="button" class="btn btn-light"
              @click="isOpenModalFooter = false">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalFooter= ref(false);
<\/script>`;

const staticCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalStatic = true">
    Launch static backdrop modal
  </button>
  <bv-modal-2 v-model="isOpenModalStatic" title="静态背景" backdrop="static">
    ...
    <template #footer>
      <button type="button" class="btn btn-light" 
        @click="isOpenModalStatic = false">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalStatic= ref(false);
<\/script>`;

const scrollableCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalScrollable = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalScrollable" title="滚动显示大量内容" 
  dialog-class="modal-dialog-scrollable">
    ...
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalScrollable= ref(false);
<\/script>`;

const centerCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalCenter = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalCenter" title="垂直居中" 
  dialog-class="modal-dialog-centered">
    ...
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalCenter= ref(false);
<\/script>`;

const sizeCode = `
<template>
  <div class="hstack gap-3 flex-wrap">
    <button type="button" class="btn btn-primary" 
      @click="isOpenModalXl = true">Extra large modal</button>
    <button type="button" class="btn btn-primary" 
      @click="isOpenModalLg = true">Large modal</button>
    <button type="button" class="btn btn-primary" 
      @click="isOpenModalSm = true">Small modal</button>
  </div>

  <bv-modal-2 v-model="isOpenModalXl" title="Extra large modal" 
    dialog-class="modal-xl">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalLg" title="Large modal" 
    dialog-class="modal-lg">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalSm" title="Small modal" 
    dialog-class="modal-sm">...</bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalXl = ref(false);
const isOpenModalLg = ref(false);
const isOpenModalSm = ref(false);
<\/script>`;

const fullscreenCode = `
<template>
  <div class="hstack gap-3 flex-wrap"> 
    <button type="button" class="btn btn-primary" 
      @click="isOpenModalFullscreen = true">Full screen</button>
    <button type="button" class="btn btn-primary" 
      @click="modalFullscreenSm = true">Full screen below sm</button>
    <button type="button" class="btn btn-primary" 
      @click="modalFullscreenMd = true">Full screen below md</button>
    <button type="button" class="btn btn-primary" 
      @click="modalFullscreenLg = true">Full screen below lg</button>
    <button type="button" class="btn btn-primary" 
      @click="modalFullscreenXl = true">Full screen below xl</button>
    <button type="button" class="btn btn-primary" 
      @click="modalFullscreenXxl = true">Full screen below xxl</button> 
  </div>
  
  <bv-modal-2 v-model="isOpenModalFullscreen" title="Full screen modal" 
    dialog-class="modal-fullscreen">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalFullscreenSm" title="Full screen below sm" 
    dialog-class="modal-fullscreen-sm-down">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalFullscreenMd" title="Full screen below md" 
    dialog-class="modal-fullscreen-md-down">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalFullscreenLg" title="Full screen below lg" 
    dialog-class="modal-fullscreen-lg-down">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalFullscreenXl" title="Full screen below xl" 
    dialog-class="modal-fullscreen-xl-down">...</bv-modal-2>
  <bv-modal-2 v-model="isOpenModalFullscreenXxl" title="Full screen below xxl" 
    dialog-class="modal-fullscreen-xxl-down">...</bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalFullscreen = ref(false);
const isOpenModalFullscreenSm= ref(false);
const isOpenModalFullscreenMd= ref(false);
const isOpenModalFullscreenLg= ref(false);
const isOpenModalFullscreenXl= ref(false);
const isOpenModalFullscreenXxl= ref(false);
<\/script>  
`;
const destoryCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalDestory = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalDestory" title="关闭时销毁" :destory="true">
    ...
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalDestory= ref(false);
<\/script>`;

const draggableCode = `
<template>
  <button type="button" class="btn btn-primary" @click="isOpenModalDraggable = true">
    Launch demo modal
  </button>
  <bv-modal-2 v-model="isOpenModalDraggable" title="可拖拽" :draggable="true">
    ...
  </bv-modal-2>
</template>

<script setup>
import { ref } from 'vue'

const isOpenModalDraggable= ref(false);
<\/script>`;
</script>
