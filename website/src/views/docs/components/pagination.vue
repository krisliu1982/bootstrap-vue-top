<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-pagination">
      <a href="#pagination-base">基础模式</a>
      <a href="#pagination-full">全量模式</a>
      <a href="#pagination-simple">简单模式</a>
      <a href="#pagination-alignment">横向对齐</a>
      <a href="#pagination-size">调整大小</a>
      <a href="#pagination-count">调整页码数</a>
      <a href="#pagination-css">CSS Variables</a>
      <a href="#pagination-api">API</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-pagination" class="docs-content">
    <h1>Pagination 分页</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/pagination/" target="_blank">Bootstrap Pagination</a>，构建
      <code>bv-pagination</code> 分页组件。
    </p>

    <h2 id="pagination-base">
      基础模式<a class="anchor-link" aria-label="Link to this section: 基础模式" href="#pagination-base"> </a>
    </h2>
    <p>设置 <code>mode="base"</code> 为基础模式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="base"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="pagination-full">
      全量模式<a class="anchor-link" aria-label="Link to this section: 全量模式" href="#pagination-full"> </a>
    </h2>
    <p>设置 <code>mode="full"</code> 为全量模式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="full"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          @current-change="(_page) => (pcurrent = _page)"
          @size-change="(_size) => (psize = _size)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="fullCode" label="vue" />
    </div>

    <h2 id="pagination-simple">
      简单模式<a class="anchor-link" aria-label="Link to this section: 简单模式" href="#pagination-simple"> </a>
    </h2>
    <p>设置 <code>mode="simple"</code> 为简单模式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="simple"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="simpleCode" label="vue" />
    </div>

    <h2 id="pagination-alignment">
      横向对齐<a class="anchor-link" aria-label="Link to this section: 横向对齐" href="#pagination-alignment"> </a>
    </h2>
    <p>
      可以通过 <code>position</code> 改变横向对齐方向，<code>center</code> 为居中，<code>end</code>
      为居右。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="base"
          position="center"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
        <br />
        <bv-pagination
          mode="base"
          position="end"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="alignmentCode" label="vue" />
    </div>

    <h2 id="pagination-size">
      调整大小<a class="anchor-link" aria-label="Link to this section: 调整大小" href="#pagination-size"> </a>
    </h2>
    <p>
      可以通过 <code>size</code> 改变大小，<code>lg</code> 为大尺寸，<code>sm</code>
      为小尺寸。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="base"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          size="lg"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
        <br />
        <bv-pagination
          mode="base"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          size="sm"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="sizeCode" label="vue" />
    </div>

    <h2 id="pagination-count">
      调整页码数<a class="anchor-link" aria-label="Link to this section: 调整页码数" href="#pagination-count"> </a>
    </h2>
    <p>可以通过 <code>pager-count</code> 调整页码数，取值范围为 <code>5-21</code>，必须是奇数。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-pagination
          mode="base"
          :total="ptotal"
          :current-page="pcurrent"
          :page-size="psize"
          :pager-count="11"
          size="sm"
          @current-change="(_page) => (pcurrent = _page)"
        ></bv-pagination>
      </div>
      <code-highlight type="vue" :code="countCode" label="vue" />
    </div>

    <h2 id="pagination-css">
      CSS Variables<a class="anchor-link" aria-label="Link to this section: CSS Variables" href="#pagination-css"> </a>
    </h2>
    <p>
      作为 Bootstrap 逐步改进的 CSS 变量方法的一部分，模态框现在在
      <code>.pagination</code> 元素上使用了本地 CSS 变量，以实现更出色的实时自定义功能。这些 CSS 变量的值是通过 Sass
      设置的，因此 Sass 自定义功能仍然可用。
    </p>
    <code-highlight type="scss" :code="css1Code" label="scss/_pagination.scss" />

    <h2 id="pagination-api">
      API<a class="anchor-link" aria-label="Link to this section: API" href="#pagination-api"> </a>
    </h2>
    <table class="table">
      <caption class="caption-top">
        属性列表
      </caption>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mode</td>
          <td>模式</td>
          <td>String (simple|base|full)</td>
          <td>base</td>
        </tr>
        <tr>
          <td>total</td>
          <td>总记录数</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>current-page</td>
          <td>当前页数</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>page-size</td>
          <td>每页记录数</td>
          <td>Number (10|20|50|200)</td>
          <td>20</td>
        </tr>
        <tr>
          <td>pager-count</td>
          <td>设置最大页码按钮数</td>
          <td>Number (5|7|9|11|13|15|17|19|21)</td>
          <td>7</td>
        </tr>
        <tr>
          <td>position</td>
          <td>横向位置</td>
          <td>String (start|center|end)</td>
          <td>start</td>
        </tr>
        <tr>
          <td>size</td>
          <td>大小</td>
          <td>String (sm|md|lg)</td>
          <td>md</td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <caption class="caption-top">
        事件列表
      </caption>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>current-change</td>
          <td>当前页变化后触发。</td>
        </tr>
        <tr>
          <td>size-change</td>
          <td>每页记录数后触发。</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数

const baseCode = `
<template>
  <bv-pagination mode="base" 
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const fullCode = `
<template>
  <bv-pagination mode="full" 
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" 
  @size-change="(_size) => psize = _size"
  />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const simpleCode = `
<template>
  <bv-pagination mode="simple" 
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" 
  />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const alignmentCode = `
<template>
  <bv-pagination mode="base" 
  position="center"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />

  <br/>

  <bv-pagination mode="base" 
  position="end"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const sizeCode = `
<template>
  <bv-pagination mode="base" 
  size="lg"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />

  <br/>

  <bv-pagination mode="base" 
  size="sm"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const countCode = `
<template>
  <bv-pagination mode="base" 
  :pager-count="11"
  size="sm"
  :total="ptotal" 
  :current-page="pcurrent" :page-size="psize"
  @current-change="(_page) => pcurrent = _page" />
</template>

<script setup>
import { ref } from 'vue'

const ptotal = ref(200); //总记录数
const pcurrent = ref(1); //当前页
const psize = ref(10); //每页记录数
<\/script>`;

const css1Code = `
--#{$prefix}pagination-padding-x: #{$pagination-padding-x};
--#{$prefix}pagination-padding-y: #{$pagination-padding-y};
@include rfs($pagination-font-size, --#{$prefix}pagination-font-size);
--#{$prefix}pagination-color: #{$pagination-color};
--#{$prefix}pagination-bg: #{$pagination-bg};
--#{$prefix}pagination-border-width: #{$pagination-border-width};
--#{$prefix}pagination-border-color: #{$pagination-border-color};
--#{$prefix}pagination-border-radius: #{$pagination-border-radius};
--#{$prefix}pagination-hover-color: #{$pagination-hover-color};
--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};
--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};
--#{$prefix}pagination-focus-color: #{$pagination-focus-color};
--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};
--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--#{$prefix}pagination-active-color: #{$pagination-active-color};
--#{$prefix}pagination-active-bg: #{$pagination-active-bg};
--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};
--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};
--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};
--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};`;
</script>
