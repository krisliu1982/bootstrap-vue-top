<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-table">
      <a href="#table-base">基础用法</a>
      <a href="#table-variants">表格上色</a>
      <a href="#table-tfoot">表尾数据</a>
      <a href="#table-dividers">分组分割线</a>
      <a href="#table-striped">斑马行</a>
      <a href="#table-striped-columns">斑马列</a>
      <a href="#table-hover">可悬停行</a>
      <a href="#table-bordered">带边框</a>
      <a href="#table-borderless">无边框</a>
      <a href="#table-sm">小型表格</a>
      <a href="#table-checkbox">多选行</a>
      <a href="#table-radio">单选行</a>
      <a href="#table-expand">扩展行</a>
      <a href="#table-truncate">内容截断</a>
      <a href="#table-thead-fixed">表头固定</a>
      <a href="#table-x-auto">横向滚动</a>
      <a href="#table-sort">数据排序</a>
      <a href="#table-caption">表格标题</a>
      <a href="#table-vertical-align">垂直对齐</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-table" class="docs-content">
    <h1>Tables 表格</h1>
    <p class="fs-4 fw-light">
      基于
      <a href="https://getbootstrap.com/docs/5.3/components/tables/" target="_blank">Bootstrap tables</a>，构建
      <code>bv-table</code> 数据表格组件。您也可以直接使用 Bootstrap tables和 Vue 完成复杂的需求。
    </p>

    <h2 id="table-base">基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#table-base"> </a></h2>
    <p>
      组件 <code>bv-table</code> 中设置 <code>data</code> 表格数据数组。在组件 <code>bv-table-col</code> 中设置
      <code>field</code> 属性对应对象中的字段名即可填入数据，<code>header</code> 属性定义表格的列名，<code>width</code>
      属性定义列宽。
    </p>
    <p>在列中可以通过模板自定义的显示内容，通过 <code>slotProps</code> 可以获得 item 和 index。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData">
          <bv-table-col header="#" type="index" />
          <bv-table-col header="Name" width="100px">
            <template #body="slotProps">
              <a href="#" class="link-body-emphasis link-offset-2"
                @click.prevent="alertMessage({ message: slotProps.item.name })">
                {{ slotProps.item.name }}
              </a>
            </template>
          </bv-table-col>
          <bv-table-col header="Address" field="address" />
          <bv-table-col header="Operation">
            <template #body="{ item }">
              <div class="hstack-3">
                <button type="button" class="btn btn-link"
                  @click="alertMessage({ type: 'success', message: item.code })">编辑</button>
                <button type="button" class="btn btn-link"
                  @click.prevent="alertMessage({ type: 'danger', message: item.code })">删除</button>
              </div>
            </template>
          </bv-table-col>
        </bv-table>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="table-variants">表格上色<a class="anchor-link" aria-label="Link to this section: 表格上色" href="#table-variants">
      </a>
    </h2>
    <p>
      使用
      <code>table-class thead-class tbodyTrClass tfoot-class</code>
      属性为表格、表格行上色。基于性能考虑，单元格上色目前没有提供接口。
    </p>
    <p>
      预设
      <code>.table-primary .table-secondary .table-success .table-danger .table-warning .table-info .table-light .table-dark
    .table-active</code>
      样式类提供选择。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData10" :tfoot-data="['-', '-', 259]" table-class="table-light"
          thead-class="table-secondary" :tbody-tr-class="tbodyTrClass" tfoot-class="table-primary">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="variantsCode" label="vue" />
    </div>

    <h2 id="table-tfoot">表尾数据<a class="anchor-link" aria-label="Link to this section: 表尾数据" href="#table-tfoot"> </a>
    </h2>
    <p>通过 <code>tfoot-data</code> 属性设置表尾数据，类型为数组, 长度与列数量保持一致。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" :tfoot-data="['-', '-', 239]" tfoot-class="table-info">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="tfootCode" label="vue" />
    </div>

    <h2 id="table-dividers">分组分割线<a class="anchor-link" aria-label="Link to this section: 分组分割线" href="#table-dividers">
      </a></h2>
    <p>
      使用
      <code>.table-group-divider</code>
      为表格组（<code>&lt;thead&gt;</code>、<code>&lt;tbody&gt;</code> 和 <code>&lt;tfoot&gt;</code>）添加更粗的边框，并使其颜色更深。通过更改
      <code>border-top-color</code>（目前我们尚未为此提供实用类）来自定义颜色。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" :tfoot-data="['-', '-', 239]" thead-class="table-group-divider"
          tbody-class="table-group-divider" tfoot-class="table-group-divider">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="dividersCode" label="vue" />
    </div>

    <h2 id="table-striped">斑马行<a class="anchor-link" aria-label="Link to this section: 斑马行" href="#table-striped"> </a>
    </h2>
    <p>使用 <code>.table-striped</code> 为 <code>&lt;tbody&gt;</code> 内的任何表格行添加斑马线效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-striped">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="stripedCode" label="vue" />
    </div>

    <h2 id="table-striped-columns">斑马列<a class="anchor-link" aria-label="Link to this section: 斑马列"
        href="#table-striped-columns"> </a></h2>
    <p>使用 <code>.table-striped-columns</code> 为任何表格列添加斑马线条纹效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-striped-columns">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="stripedColsCode" label="vue" />
    </div>

    <h2 id="table-hover">可悬停行<a class="anchor-link" aria-label="Link to this section: 可悬停行" href="#table-hover"> </a>
    </h2>
    <p>添加 <code>.table-hover</code> 样式，以在 <code>&lt;tbody&gt;</code> 内的表格行上启用悬停状态。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-hover">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="hoverCode" label="vue" />
    </div>

    <h2 id="table-bordered">带边框<a class="anchor-link" aria-label="Link to this section: 带边框" href="#table-bordered">
      </a>
    </h2>
    <p>添加 <code>.table-bordered</code> 样式，为表格和单元格的四周添加边框。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-bordered">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="borderedCode" label="vue" />
    </div>
    <p>
      <a href="https://getbootstrap.com/docs/5.3/utilities/borders#border-color" target="_blank">Border color
        utilities</a>
      工具可用于更改颜色:
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-bordered border-primary">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="borderedColorCode" label="vue" />
    </div>

    <h2 id="table-borderless">无边框<a class="anchor-link" aria-label="Link to this section: 无边框" href="#table-borderless">
      </a></h2>
    <p>为没有边框的表格添加 <code>.table-borderless</code> 样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-borderless">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="borderlessCode" label="vue" />
    </div>

    <h2 id="table-sm">小型表格<a class="anchor-link" aria-label="Link to this section: 小型表格" href="#table-sm"> </a></h2>
    <p>添加 <code>.table-sm</code> 可以使任何 <code>bv-table</code> 更加紧凑，方法是将所有单元格的 <code>padding</code> 减半。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="table-sm">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="smCode" label="vue" />
    </div>

    <h2 id="table-checkbox">多选行<a class="anchor-link" aria-label="Link to this section: 多选行" href="#table-checkbox">
      </a>
    </h2>
    <p>添加一个列，设置 <code>type="checkbox"</code>，并且设置 <code>field</code> 为数据行唯一标识属性。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table ref="tableCheckboxRef" :data="tableData" table-class="table-hover">
          <bv-table-col type="checkbox" field="code" />
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>

        <div class="hstack-3 flex-wrap">
          <button type="button" class="btn btn-primary"
            @click="handleGetCheckbox">getCheckboxSelectedKeys</button>
          <button type="button" class="btn btn-primary"
            @click="handleSetCheckbox">setCheckboxSelectedKeys</button>
        </div>
      </div>
      <code-highlight type="vue" :code="checkboxCode" label="vue" />
    </div>

    <h2 id="table-radio">单选行<a class="anchor-link" aria-label="Link to this section: 单选行" href="#table-radio"> </a></h2>
    <p>添加一个列，设置 <code>type="radio"</code>，并且设置 <code>field</code> 为数据行唯一标识属性。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table ref="tableRadioRef" :data="tableData" table-class="table-hover">
          <bv-table-col type="radio" field="code" />
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>

        <div class="hstack-3 flex-wrap">
          <button type="button" class="btn btn-primary" @click="handleGetRadio">getRadioSelectedKey</button>
          <button type="button" class="btn btn-primary" @click="handleSetRadio">setRadioSelectedKey</button>
        </div>
      </div>
      <code-highlight type="vue" :code="radioCode" label="vue" />
    </div>

    <h2 id="table-expand">扩展行<a class="anchor-link" aria-label="Link to this section: 扩展行" href="#table-expand"> </a>
    </h2>
    <p>添加一个列，设置 <code>type="expand"</code>，并且设置 <code>field</code> 为数据行唯一标识属性。可以通过监听 <code>expand-change</code> 异步获取数据。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableExpandData" @expand-change="handleExpand">
          <bv-table-col type="expand" field="code">
            <template #body="{ item }">
              <div v-if="item.details">
                <bv-table :data="item.details" :caption="`${item.name} details:`"
                  table-class="caption-top table-bordered table-hover border-info">
                  <bv-table-col header="#" type="index" />
                  <bv-table-col header="Name" field="name" />
                  <bv-table-col header="State" field="state" />
                  <bv-table-col header="City" field="city" />
                </bv-table>
              </div>
              <div v-else class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </template>
          </bv-table-col>
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="expandCode" label="vue" />
    </div>

    <h2 id="table-truncate">内容截断<a class="anchor-link" aria-label="Link to this section: 内容截断" href="#table-truncate">
      </a>
    </h2>
    <p>
      添加
      <a href="https://getbootstrap.com/docs/5.3/helpers/text-truncation/" target="_blank"> .text-truncate</a>
      样式类 。需要显示截断内容可以使用 <code>v-tooltip</code> 指令。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address">
            <template #body="{ item }">
              <div v-tooltip :data-bs-title="item.address" class="text-truncate" style="width: 8rem">
                {{ item.address }}
              </div>
            </template>
          </bv-table-col>
        </bv-table>
      </div>
      <code-highlight type="vue" :code="truncateCode" label="vue" />
    </div>

    <h2 id="table-thead-fixed">固定表头<a class="anchor-link" aria-label="Link to this section: 固定表头"
        href="#table-thead-fixed">
      </a></h2>
    <p>
      表格外包裹一个 <code>&lt;div&gt;</code> 元素，设置表格样式 <code>style="overflow-y: auto;height: 200px"</code>，设置表格属性
      <code>thead-class="position-sticky top-0"</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div style="overflow-y: auto; height: 200px">
          <bv-table :data="tableData10" thead-class="table-info position-sticky top-0">
            <bv-table-col header="Code" field="code" />
            <bv-table-col header="Name" field="name" />
            <bv-table-col header="Address" field="address" />
          </bv-table>
        </div>
      </div>
      <code-highlight type="vue" :code="theadFixedCode" label="vue" />
    </div>

    <h2 id="table-x-auto">横向滚动<a class="anchor-link" aria-label="Link to this section: 横向滚动" href="#table-x-auto"> </a>
    </h2>
    <p>
      表格外包裹一个
      <code>&lt;div class="table-responsive"&gt;</code> 元素，设置表格样式 <code>style="width:150%;"</code>，表格宽度需超过 100% 会出现横向滚动。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="table-responsive">
          <bv-table :data="tableData" style="width: 150%">
            <bv-table-col header="Code" field="code" />
            <bv-table-col header="Name" field="name" />
            <bv-table-col header="Address" field="address" />
          </bv-table>
        </div>
      </div>
      <code-highlight type="vue" :code="xAutoCode" label="vue" />
    </div>

    <h2 id="table-sort">数据排序<a class="anchor-link" aria-label="Link to this section: 横向滚动" href="#table-sort"> </a></h2>
    <p>
      在表格列中设置属性
      <code>sortable="local"</code>
      即可实现本地排序。如果需要远程排序，需设置属性
      <code>sortable="remote"</code>，同时在表格上监听
      <code>sort-change</code>
      事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-loading :loading="loading">
          <bv-table :data="tableSortData" @sort-change="handleSortChange">
            <bv-table-col header="Code" field="code" sortable="local" />
            <bv-table-col header="Name" field="name" sortable="remote" />
            <bv-table-col header="Address" field="address" />
          </bv-table>
        </bv-loading>
      </div>
      <code-highlight type="vue" :code="sortCode" label="vue" />
    </div>

    <h2 id="table-caption">表格标题<a class="anchor-link" aria-label="Link to this section: 表格标题" href="#table-caption">
      </a>
    </h2>
    <p>
      <code>caption</code>
      的作用类似于表格的标题。它帮助使用屏幕阅读器的用户找到表格，了解表格的内容，并决定是否要阅读它。<code>caption</code>
      默认在表格底部，如果需要在表格上部，需设置
      <code>table-class="caption-top"</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" caption="List of users" table-class="caption-top">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="captionCode" label="vue" />
    </div>

    <h2 id="table-vertical-align">垂直对齐<a class="anchor-link" aria-label="Link to this section: 垂直对齐"
        href="#table-vertical-align"> </a></h2>
    <p>
      <code>&lt;thead&gt;</code> 中的表格单元格总是垂直对齐到单元格底部。<code>&lt;tbody&gt;</code>
      中的表格单元格则从
      <code>&lt;table&gt;</code>
      继承其对齐方式，默认情况下垂直对齐到单元格顶部。如有需要，可使用
      <a href="https://getbootstrap.com/docs/5.3/utilities/vertical-align" target="_blank">vertical-align</a>
      类来重新对齐。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-table :data="tableData" table-class="align-middle">
          <bv-table-col header="Code" field="code" />
          <bv-table-col header="Name" field="name" />
          <bv-table-col header="Address" field="address" width="280px" />
        </bv-table>
      </div>
      <code-highlight type="vue" :code="verticalAlignCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { orderBy } from 'lodash-es'
import { alertMessage } from 'bootstrap-vue-ui'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])

const tableData10 = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' },
  { code: 1004, name: 'Kris4', address: 'Honghu City, Hubei Province, China' },
  { code: 1005, name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
  { code: 1006, name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
  { code: 1007, name: 'Kris7', address: 'Honghu City, Hubei Province, China' },
  { code: 1008, name: 'Kris8', address: 'Honghu City, Hubei Province, China' },
  { code: 1009, name: 'Kris9', address: 'Honghu City, Hubei Province, China' },
  { code: 1010, name: 'Kris10', address: 'Honghu City, Hubei Province, China' }
])

function tbodyTrClass(item) {
  if (item.code === 1001) {
    return 'table-primary'
  } else if (item.code === 1002) {
    return 'table-secondary'
  } else if (item.code === 1003) {
    return 'table-success'
  } else if (item.code === 1004) {
    return 'table-danger'
  } else if (item.code === 1005) {
    return 'table-warning'
  } else if (item.code === 1006) {
    return 'table-info'
  } else if (item.code === 1007) {
    return 'table-light'
  } else if (item.code === 1008) {
    return 'table-dark'
  } else if (item.code === 1009) {
    return 'table-active'
  } else {
    return null
  }
}

const tableExpandData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
const details = [
  { name: 'Jerry1', state: 'California', city: 'San Francisco', zip: 'CA 94114' },
  { name: 'Jerry2', state: 'California', city: 'San Francisco', zip: 'CA 94114' },
  { name: 'Jerry3', state: 'California', city: 'San Francisco', zip: 'CA 94114' }
]
function handleExpand(key) {
  console.log(key) //行数据的唯一标识
  setTimeout(() => {
    if (key === 1001) {
      tableExpandData.value[0].details = details
    } else if (key === 1002) {
      tableExpandData.value[1].details = details
    } else if (key === 1003) {
      tableExpandData.value[2].details = details
    }
  }, 1000)
}

const tableCheckboxRef = ref(null)

function handleGetCheckbox() {
  const keys = tableCheckboxRef.value.getCheckboxSelectedKeys()
  if (keys.length === 0) {
    alertMessage({ type: 'warning', message: '没有表格行被选择' })
  } else {
    alertMessage({ message: `被选表格行 ${keys.join(',')}` })
  }
}

function handleSetCheckbox() {
  tableCheckboxRef.value.setCheckboxSelectedKeys([])
}

const tableRadioRef = ref(null)

function handleGetRadio() {
  const key = tableRadioRef.value.getRadioSelectedKey()
  if (key === null) {
    alertMessage({ type: 'warning', message: '没有表格行被选择' })
  } else {
    alertMessage({ message: `被选表格行 ${key}` })
  }
}

function handleSetRadio() {
  tableRadioRef.value.setRadioSelectedKey(null)
}


const loading = ref(false)
const sortData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]
const tableSortData = ref(sortData)
function handleSortChange(field, order) {
  console.log(field) //当前排序的字段名
  console.log(order) //排序顺序asc,desc,null

  loading.value = true
  setTimeout(() => {
    if (order !== null) {
      tableSortData.value = orderBy(sortData, [field], [order])
    } else {
      tableSortData.value = sortData
    }
    loading.value = false
  }, 1000)
}

const baseCode = `<template>
  <bv-table :data="tableData">
    <bv-table-col header="#" type="index" />
    <bv-table-col header="Name" width="100px">
      <template #body="slotProps">
        <a href="#" class="link-body-emphasis link-offset-2" 
          @click.prevent="alertMessage({ message: slotProps.item.name })">
          {{ slotProps.item.name }}
        </a>
      </template>
    </bv-table-col>
    <bv-table-col header="Address" field="address" />
    <bv-table-col header="Operation">
      <template #body="{ item }">
        <div class="hstack-3">
          <button type="button" class="btn btn-link"
            @click="alertMessage({ type: 'success', message: item.code })">编辑</button>
          <button type="button" class="btn btn-link"
            @click="alertMessage({ type: 'danger', message: item.code })">删除</button>
        </div>
      </template>
    </bv-table-col>
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
import { alertMessage } from 'bootstrap-vue-ui'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const variantsCode = `<template>
  <bv-table 
    :data="tableData10" 
    :tfoot-data="['-', '-', 259]" 
    table-class="table-light" 
    thead-class="table-secondary"
    :tbody-tr-class="tbodyTrClass" 
    tfoot-class="table-primary">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData10 = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' },
  { code: 1004, name: 'Kris4', address: 'Honghu City, Hubei Province, China' },
  { code: 1005, name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
  { code: 1006, name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
  { code: 1007, name: 'Kris7', address: 'Honghu City, Hubei Province, China' },
  { code: 1008, name: 'Kris8', address: 'Honghu City, Hubei Province, China' },
  { code: 1009, name: 'Kris9', address: 'Honghu City, Hubei Province, China' },
  { code: 1010, name: 'Kris10', address: 'Honghu City, Hubei Province, China' }
])

function tbodyTrClass(item) {
  if (item.code === 1001) {
    return 'table-primary'
  } else if (item.code === 1002) {
    return 'table-secondary'
  } else if (item.code === 1003) {
    return 'table-success'
  } else if (item.code === 1004) {
    return 'table-danger'
  } else if (item.code === 1005) {
    return 'table-warning'
  } else if (item.code === 1006) {
    return 'table-info'
  } else if (item.code === 1007) {
    return 'table-light'
  } else if (item.code === 1008) {
    return 'table-dark'
  } else if (item.code === 1009) {
    return 'table-active'
  } else {
    return null
  }
}
<\/script>`

const tfootCode = `<template>
  <bv-table 
    :data="tableData" 
    :tfoot-data="['-', '-', 239]" 
    tfoot-class="table-info">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const dividersCode = `<template>
  <bv-table 
    :data="tableData" 
    :tfoot-data="['-', '-', 239]"
    thead-class="table-group-divider"
    tbody-class="table-group-divider" 
    tfoot-class="table-group-divider">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const stripedCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-striped">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const stripedColsCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-striped-columns">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const hoverCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-hover">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const borderedCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-bordered">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const borderedColorCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-bordered border-primary">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const borderlessCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-borderless">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const smCode = `<template>
  <bv-table 
    :data="tableData" 
    table-class="table-sm">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const checkboxCode = `<template>
  <bv-table ref="tableCheckboxRef" :data="tableData" table-class="table-hover">
    <bv-table-col type="checkbox" field="code" />
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>

  <div class="hstack-3 flex-wrap">
    <button type="button" class="btn btn-primary"
      @click="handleGetCheckbox">getCheckboxSelectedKeys</button>
    <button type="button" class="btn btn-primary"
      @click="handleSetCheckbox">setCheckboxSelectedKeys</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { alertMessage } from 'bootstrap-vue-ui'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
const tableCheckboxRef = ref(null)

function handleGetCheckbox() {
  const keys = tableCheckboxRef.value.getCheckboxSelectedKeys()
  if (keys.length === 0) {
    alertMessage({ type: 'warning', message: '没有表格行被选择' })
  } else {
    alertMessage({ message: \`被选表格行 \${keys.join(',')}\` })
  }
}

function handleSetCheckbox() {
  tableCheckboxRef.value.setCheckboxSelectedKeys([])
}
<\/script>`

const radioCode = `<template>
  <bv-table ref="tableRadioRef" :data="tableData" table-class="table-hover">
    <bv-table-col type="radio" field="code" />
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>

  <div class="hstack-3 flex-wrap">
    <button type="button" class="btn btn-primary" 
      @click="handleGetRadio">getRadioSelectedKey</button>
    <button type="button" class="btn btn-primary" 
      @click="handleSetRadio">setRadioSelectedKey</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { alertMessage } from 'bootstrap-vue-ui'

const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])

const tableRadioRef = ref(null)

function handleGetRadio() {
  const key = tableRadioRef.value.getRadioSelectedKey()
  if (key === null) {
    alertMessage({ type: 'warning', message: '没有表格行被选择' })
  } else {
    alertMessage({ message: \`被选表格行 \${key}\` })
  }
}

function handleSetRadio() {
  tableRadioRef.value.setRadioSelectedKey(null)
}
<\/script>`

const expandCode = `<template>
  <bv-table :data="tableExpandData" @expand-change="handleExpand">
    <bv-table-col type="expand" field="code">
      <template #body="{ item }">
        <div v-if="item.details">
          <bv-table :data="item.details" :caption="\`\${item.name} details:\`"
            table-class="caption-top table-bordered table-hover border-info">
            <bv-table-col header="#" type="index" />
            <bv-table-col header="Name" field="name" />
            <bv-table-col header="State" field="state" />
            <bv-table-col header="City" field="city" />
          </bv-table>
        </div>
        <div v-else class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </template>
    </bv-table-col>
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" />
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'

const tableExpandData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
const details = [
  { name: 'Jerry1', state: 'California', city: 'San Francisco' },
  { name: 'Jerry2', state: 'California', city: 'San Francisco' },
  { name: 'Jerry3', state: 'California', city: 'San Francisco' }
]

function handleExpand(key) {
  console.log(key) //行数据的唯一标识
  setTimeout(() => {
    if (key === 1001) {
      tableExpandData.value[0].details = details;
    } else if (key === 1002) {
      tableExpandData.value[1].details = details;
    } else if (key === 1003) {
      tableExpandData.value[2].details = details;
    }
  }, 1000);
}
<\/script>`

const truncateCode = `<template>
  <bv-table :data="tableData">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address">
      <template #body="{ item }">
        <div v-tooltip :data-bs-title="item.address" 
            class="text-truncate" style="width: 8rem;">
            {{item.address }}
        </div>
      </template>
    </bv-table-col>
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const theadFixedCode = `<template>
  <div style="overflow-y: auto;height: 200px">
    <bv-table :data="tableData10" thead-class="table-info position-sticky top-0">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData10 = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' },
  { code: 1004, name: 'Kris4', address: 'Honghu City, Hubei Province, China' },
  { code: 1005, name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
  { code: 1006, name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
  { code: 1007, name: 'Kris7', address: 'Honghu City, Hubei Province, China' },
  { code: 1008, name: 'Kris8', address: 'Honghu City, Hubei Province, China' },
  { code: 1009, name: 'Kris9', address: 'Honghu City, Hubei Province, China' },
  { code: 1010, name: 'Kris10', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const xAutoCode = `<template>
  <div class="table-responsive">
    <bv-table :data="tableData" style="width: 150%">
      <bv-table-col header="Code" field="code" />
      <bv-table-col header="Name" field="name" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const sortCode = `<template>
  <bv-loading :loading="loading">
    <bv-table :data="tableSortData" @sort-change="handleSortChange">
      <bv-table-col header="Code" field="code" sortable="local" />
      <bv-table-col header="Name" field="name" sortable="remote" />
      <bv-table-col header="Address" field="address" />
    </bv-table>
  </bv-loading>
</template>

<script setup>
import { ref } from 'vue'
import { orderBy } from 'lodash-es'

const loading = ref(false);
const sortData = [
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
]
const tableSortData = ref(sortData);
function handleSortChange(field, order) {
  console.log(field);//当前排序的字段名
  console.log(order);//排序顺序asc,desc,null

  loading.value = true;
  setTimeout(() => {
      if (order !== null) {
          tableSortData.value = orderBy(sortData, [field], [order])
      } else {
          tableSortData.value = sortData;
      }
      loading.value = false;
  }, 1000);
}
<\/script>`

const verticalAlignCode = `<template>
  <bv-table :data="tableData" table-class="align-middle">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" width="280px"/>
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`

const captionCode = `<template>
  <bv-table :data="tableData" caption="List of users" table-class="caption-top">
    <bv-table-col header="Code" field="code" />
    <bv-table-col header="Name" field="name" />
    <bv-table-col header="Address" field="address" width="280px"/>
  </bv-table>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  { code: 1001, name: 'Kris1', address: 'Honghu City, Hubei Province, China' },
  { code: 1002, name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
  { code: 1003, name: 'Kris3', address: 'Honghu City, Hubei Province, China' }
])
<\/script>`
</script>
