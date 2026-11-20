<template>
  <h1>Modal 模态框</h1>
  <p class="lead">使用 Vue 模态框组件为你的站点添加对话框，用于灯箱、用户通知或完全自定义的内容。</p>

  <h2>基础用法</h2>
  <p>调用组件 <code>toggle</code> 方法来切换一个模态框。</p>
  <BasicUsage />

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

  <h2>动态内容</h2>
  <p>
    通过监听
    <code>modal-shown</code>
    事件来处理模态框显示后的相关操作，例如异步获取数据。
  </p>
  <DynamicContent />
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
</script>
