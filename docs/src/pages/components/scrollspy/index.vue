<template>
  <article class="docs-content">
    <h1>Scrollspy 滚动监听</h1>
    <p class="lead">
      根据滚动位置自动更新导航或列表组组件，以指示视口中当前处于活动状态的链接。了解更多请阅读 <a href="https://bs53.bootstrap-vue.top/components/scrollspy" target="_blank">Bootstrap Scrollspy</a>。
    </p>

    <h2 id="example">示例<a class="anchor-link" href="#example" aria-label="示例"></a></h2>
    <p>
      当锚点的 <code>href</code> 所引用的 <code>id</code> 对应元素滚动进入视图时，滚动监听会切换锚点（<code>&lt;a&gt;</code>）元素上的 <code>.active</code> 类。滚动监听最适合与 Bootstrap 的
      <a href="https://bs53.bootstrap-vue.top/components/navs-tabs" target="_blank">导航组件</a> 或
      <a href="https://bs53.bootstrap-vue.top/components/list-group" target="_blank">列表组</a> 配合使用，但它也可用于当前页面中的任何锚点元素。它的工作方式如下。
    </p>
    <ul>
      <li>
        <p>
          首先，滚动监听需要两样东西：一个导航、列表组或一组简单的链接，以及一个可滚动容器。可滚动容器可以是 <code>&lt;body&gt;</code>，也可以是设置了 <code>height</code> 和
          <code>overflow-y: scroll</code> 的自定义元素。
        </p>
      </li>
      <li>
        <p>在导航上添加 <code>v-scrollspy</code> 指令并设置指令值为滚动容器 <code>id</code>。如果可滚动容器内部没有可聚焦元素，请务必同时包含 <code>tabindex="0"</code> 以确保键盘可访问性。</p>
      </li>
      <li>
        <p>
          当你滚动被“监视”的容器时，关联导航中的锚点链接会添加或移除 <code>.active</code> 类。链接必须具有可解析的 <code>id</code> 目标，否则将被忽略。例如，<code
            >&lt;a href="#home"&gt;home&lt;/a&gt;</code
          >
          必须对应 DOM 中的某个元素，如 <code>&lt;div id="home"&gt;&lt;/div&gt;</code>
        </p>
      </li>
      <li>
        <p>不可见的目标元素将被忽略。</p>
      </li>
    </ul>
    <div class="docs-example">
      <Example />
    </div>
    <CodeWrapper :code="ExampleCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#example">示例</a></li>
    </ul>
  </nav>
</template>

<script setup>
import Example from './example.vue';
import ExampleCode from './example.vue?raw';
</script>
