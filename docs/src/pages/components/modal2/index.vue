<template>
  <h1>Modal2 模态框</h1>
  <p class="lead">支持打开多个模态框和拖动。适合桌面端复杂操作的需要。</p>

  <h2>基础用法</h2>
  <p>通过 <code>v-model</code> 属性来切换一个模态框。<code>true</code> 为打开，<code>false</code> 为关闭。</p>
  <BasicUsage />

  <h2>打开多个</h2>
  <p>打开多个模块框，屏蔽层会叠加。</p>
  <OpenMany />

  <h2>底部插槽</h2>
  <p>通过 <code>#footer</code> 插槽来扩展组件底部内容。</p>
  <FooterSlot />

  <h2>静态背景</h2>
  <p>
    设置
    <code>backdrop</code> 属性为 <code>static</code> 时，点击模态框外部并不会导致模态框关闭。
  </p>
  <StaticBackground />

  <h2>大量内容</h2>
  <p>当模态框的长度超出用户的视口或设备范围时，它们会独立于页面本身进行滚动。</p>
  <LongContent />
  <p>
    添加
    <code>.modal-dialog-scrollable</code> 样式类到 <code>dialog-class</code> 属性上，来实现对模态框主体内容的滚动操作。
  </p>
  <LongContentScrollable />

  <h2>垂直居中</h2>
  <p>
    添加
    <code>.modal-dialog-centered</code> 样式类到 <code>dialog-class</code> ，即可使模态框在垂直方向上实现居中显示。
  </p>
  <AlignCenter />

  <h2>可选尺寸</h2>
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
  <OptionalSize />

  <h2>全屏模态框</h2>
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
  <Fullscreen />

  <h2>关闭时销毁</h2>
  <p>通过设置 <code>destory</code> 属性为 <code>true</code> 来实现。</p>
  <CloseDestroy />

  <h2>可拖拽</h2>
  <p>通过设置 <code>draggable</code> 属性为 <code>true</code> 来实现，需按住头部进行拖动。如果 <code>:destory="true"</code>， 切换时位置会重置。</p>
  <Draggable />
</template>

<script setup>
import AlignCenter from './align-center.vue';
import BasicUsage from './basic-usage.vue';
import CloseDestroy from './close-destroy.vue';
import Draggable from './draggable.vue';
import FooterSlot from './footer-slot.vue';
import Fullscreen from './fullscreen.vue';
import LongContentScrollable from './long-content-scrollable.vue';
import LongContent from './long-content.vue';
import OpenMany from './open-many.vue';
import OptionalSize from './optional-size.vue';
import StaticBackground from './static-background.vue';
</script>
