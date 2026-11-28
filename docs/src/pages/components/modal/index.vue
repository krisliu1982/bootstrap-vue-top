<template>
  <article class="docs-content">
    <h1>Modal 模态框</h1>
    <p class="lead">为你的站点添加对话框，用于灯箱、用户通知或完全自定义的内容。了解更多请阅读
      <a href="https://bs53.bootstrap-vue.top/components/modal" target="_blank">Bootstrap Modal</a>。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>调用组件 <code>toggle</code> 方法来切换一个模态框。</p>
    <div class="docs-example">
      <BasicUsage />
    </div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="footer-slot">底部插槽<a class="anchor-link" href="#footer-slot" aria-label="底部插槽"></a></h2>
    <p>通过 <code>#footer</code> 插槽来扩展组件底部内容。</p>
    <div class="docs-example">
      <FooterSlot />
    </div>
    <CodeWrapper :code="FooterSlotCode" />

    <h2 id="static-background">静态背景<a class="anchor-link" href="#static-background" aria-label="静态背景"></a></h2>
    <p>
      设置
      <code>backdrop</code> 属性为 <code>static</code> 时，点击模态框外部并不会导致模态框关闭。
    </p>
    <div class="docs-example">
      <StaticBackground />
    </div>
    <CodeWrapper :code="StaticBackgroundCode" />

    <h2 id="long-content">大量内容<a class="anchor-link" href="#long-content" aria-label="大量内容"></a></h2>
    <p>当模态框的长度超出用户的视口或设备范围时，它们会独立于页面本身进行滚动。</p>
    <div class="docs-example">
      <LongContent />
    </div>
    <CodeWrapper :code="LongContentCode" />
    <p>
      添加
      <code>.modal-dialog-scrollable</code> 样式类到 <code>dialog-class</code> 属性上，来实现对模态框主体内容的滚动操作。
    </p>
    <div class="docs-example">
      <LongContentScrollable />
    </div>
    <CodeWrapper :code="LongContentScrollableCode" />

    <h2 id="align-center">垂直居中<a class="anchor-link" href="#align-center" aria-label="垂直居中"></a></h2>
    <p>
      添加
      <code>.modal-dialog-centered</code> 样式类到 <code>dialog-class</code> ，即可使模态框在垂直方向上实现居中显示。
    </p>
    <div class="docs-example">
      <AlignCenter />
    </div>
    <CodeWrapper :code="AlignCenterCode" />

    <h2 id="optional-size">可选尺寸<a class="anchor-link" href="#optional-size" aria-label="可选尺寸"></a></h2>
    <p>
      模态框有四种可选的尺寸，可通过修饰符类将其应用于
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
        <tr>
          <td>Extra extra large</td>
          <td><code>.modal-xxl</code></td>
          <td><code>1320px</code></td>
        </tr>
      </tbody>
    </table>
    <div class="docs-example">
      <OptionalSize />
    </div>
    <CodeWrapper :code="OptionalSizeCode" />

    <h2 id="fullscreen">全屏模态框<a class="anchor-link" href="#fullscreen" aria-label="全屏模态框"></a></h2>
    <p>通过在 <code>dialog-class</code> 属性上设置修饰类来实现。</p>
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
      <Fullscreen />
    </div>
    <CodeWrapper :code="FullscreenCode" />

    <h2 id="dynamic-content">动态内容<a class="anchor-link" href="#dynamic-content" aria-label="动态内容"></a></h2>
    <p>
      通过监听
      <code>modal-shown</code>
      事件来处理模态框显示后的相关操作，例如异步获取数据。
    </p>
    <div class="docs-example">
      <DynamicContent />
    </div>
    <CodeWrapper :code="DynamicContentCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#footer-slot">底部插槽</a></li>
      <li><a href="#static-background">静态背景</a></li>
      <li><a href="#long-content">大量内容</a></li>
      <li><a href="#align-center">垂直居中</a></li>
      <li><a href="#optional-size">可选尺寸</a></li>
      <li><a href="#fullscreen">全屏模态框</a></li>
      <li><a href="#dynamic-content">动态内容</a></li>
    </ul>
  </nav>
</template>

<script setup>
import AlignCenter from './align-center.vue';
import BasicUsage from './basic-usage.vue';
import DynamicContent from './dynamic-content.vue';
import FooterSlot from './footer-slot.vue';
import Fullscreen from './fullscreen.vue';
import LongContentScrollable from './long-content-scrollable.vue';
import LongContent from './long-content.vue';
import OptionalSize from './optional-size.vue';
import StaticBackground from './static-background.vue';

import AlignCenterCode from './align-center.vue?raw';
import BasicUsageCode from './basic-usage.vue?raw';
import DynamicContentCode from './dynamic-content.vue?raw';
import FooterSlotCode from './footer-slot.vue?raw';
import FullscreenCode from './fullscreen.vue?raw';
import LongContentScrollableCode from './long-content-scrollable.vue?raw';
import LongContentCode from './long-content.vue?raw';
import OptionalSizeCode from './optional-size.vue?raw';
import StaticBackgroundCode from './static-background.vue?raw';
</script>
