<template>
  <div class="docs-toc text-body-secondary">
    <nav id="docs-nav-treetable">
      <a href="#treetable-base">基础用法</a>
      <a href="#treetable-variants">表格上色</a>
      <a href="#treetable-tfoot">表尾数据</a>
      <a href="#treetable-dividers">分组分割线</a>
      <a href="#treetable-striped">斑马行</a>
      <a href="#treetable-striped-columns">斑马列</a>
      <a href="#treetable-hover">可悬停行</a>
      <a href="#treetable-bordered">带边框</a>
      <a href="#treetable-borderless">无边框</a>
      <a href="#treetable-sm">小型表格</a>
      <a href="#treetable-truncate">内容截断</a>
      <a href="#treetable-x-auto">横向滚动</a>
      <a href="#treetable-caption">表格标题</a>
      <a href="#treetable-vertical-align">垂直对齐</a>
    </nav>
  </div>

  <div v-scrollspy data-bs-target="#docs-nav-treetable" class="docs-content">
    <h1>Tree table 树形表格结构</h1>
    <p class="fs-4 fw-light">
      以表格样式, 展示层级结构信息，可展开或折叠，而构建 <code>bv-treetable</code> 树形表格组件。
    </p>

    <h2 id="treetable-base">
      基础用法<a class="anchor-link" aria-label="Link to this section: 基础用法" href="#treetable-base"> </a>
    </h2>
    <p>
      设置 <code>data</code> 树形数据，<code>attr-key</code> 为节点数据唯一标识属性名，<code>attr-children</code>
      为子树属性名。在列中可以通过模板自定义的显示内容，通过 <code>slotProps</code> 可以获得 item 和 index。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
          <bv-treetable-col header="Operation">
            <template #body="{ item }">
              <div class="hstack-3">
                <button
                  type="button"
                  class="btn btn-link"
                  @click="alertMessage({ type: 'success', message: item.code })"
                >
                  编辑
                </button>
                <button
                  type="button"
                  class="btn btn-link"
                  @click="alertMessage({ type: 'danger', message: item.code })"
                >
                  删除
                </button>
              </div>
            </template>
          </bv-treetable-col>
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="baseCode" label="vue" />
    </div>

    <h2 id="treetable-variants">
      表格上色<a class="anchor-link" aria-label="Link to this section: 表格上色" href="#treetable-variants"> </a>
    </h2>
    <p>
      使用
      <code>table-class thead-class tfoot-class</code>
      属性为表格、表格行上色。
    </p>
    <p>
      预设
      <code
        >.table-primary .table-secondary .table-success .table-danger .table-warning .table-info .table-light
        .table-dark .table-active</code
      >
      样式类提供选择。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable
          :data="treeData"
          attr-key="code"
          attr-children="children"
          :tfoot-data="['-', 259]"
          table-class="table-light"
          thead-class="table-secondary"
          tfoot-class="table-primary"
        >
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="variantsCode" label="vue" />
    </div>

    <h2 id="treetable-tfoot">
      表尾数据<a class="anchor-link" aria-label="Link to this section: 表尾数据" href="#treetable-tfoot"> </a>
    </h2>
    <p>通过 <code>tfoot-data</code> 属性设置表尾数据，类型为数组, 长度与列数量保持一致。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable
          :data="treeData"
          attr-key="code"
          attr-children="children"
          :tfoot-data="['-', 239]"
          tfoot-class="table-info"
        >
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="tfootCode" label="vue" />
    </div>

    <h2 id="treetable-dividers">
      分组分割线<a class="anchor-link" aria-label="Link to this section: 分组分割线" href="#treetable-dividers"> </a>
    </h2>
    <p>
      使用
      <code>.table-group-divider</code>
      为表格组（<code>&lt;thead&gt;</code>、<code>&lt;tbody&gt;</code> 和
      <code>&lt;tfoot&gt;</code>）添加更粗的边框，并使其颜色更深。通过更改
      <code>border-top-color</code>（目前我们尚未为此提供实用类）来自定义颜色。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable
          :data="treeData"
          attr-key="code"
          attr-children="children"
          :tfoot-data="['-', 239]"
          thead-class="table-group-divider"
          tbody-class="table-group-divider"
          tfoot-class="table-group-divider"
        >
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="dividersCode" label="vue" />
    </div>

    <h2 id="treetable-striped">
      斑马行<a class="anchor-link" aria-label="Link to this section: 斑马行" href="#treetable-striped"> </a>
    </h2>
    <p>使用 <code>.table-striped</code> 为 <code>&lt;tbody&gt;</code> 内的任何表格行添加斑马线效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-striped">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="stripedCode" label="vue" />
    </div>

    <h2 id="treetable-striped-columns">
      斑马列<a class="anchor-link" aria-label="Link to this section: 斑马列" href="#treetable-striped-columns"> </a>
    </h2>
    <p>使用 <code>.table-striped-columns</code> 为任何表格列添加斑马线条纹效果。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-striped-columns">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="stripedColsCode" label="vue" />
    </div>

    <h2 id="treetable-hover">
      可悬停行<a class="anchor-link" aria-label="Link to this section: 可悬停行" href="#treetable-hover"> </a>
    </h2>
    <p>添加 <code>.table-hover</code> 样式，以在 <code>&lt;tbody&gt;</code> 内的表格行上启用悬停状态。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-hover">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="hoverCode" label="vue" />
    </div>

    <h2 id="treetable-bordered">
      带边框<a class="anchor-link" aria-label="Link to this section: 带边框" href="#treetable-bordered"> </a>
    </h2>
    <p>添加 <code>.table-bordered</code> 样式，为表格和单元格的四周添加边框。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-bordered">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="borderedCode" label="vue" />
    </div>
    <p>
      <a href="https://getbootstrap.com/docs/5.3/utilities/borders#border-color" target="_blank"
        >Border color utilities</a
      >
      工具可用于更改颜色:
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable
          :data="treeData"
          attr-key="code"
          attr-children="children"
          table-class="table-bordered border-primary"
        >
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="borderedColorCode" label="vue" />
    </div>

    <h2 id="treetable-borderless">
      无边框<a class="anchor-link" aria-label="Link to this section: 无边框" href="#treetable-borderless"> </a>
    </h2>
    <p>为没有边框的表格添加 <code>.table-borderless</code> 样式。</p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-borderless">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="borderlessCode" label="vue" />
    </div>

    <h2 id="treetable-sm">
      小型表格<a class="anchor-link" aria-label="Link to this section: 小型表格" href="#treetable-sm"> </a>
    </h2>
    <p>
      添加 <code>.table-sm</code> 可以使任何 <code>bv-treetable</code> 更加紧凑，方法是将所有单元格的
      <code>padding</code> 减半。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="table-sm">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="smCode" label="vue" />
    </div>

    <h2 id="treetable-truncate">
      内容截断<a class="anchor-link" aria-label="Link to this section: 内容截断" href="#treetable-truncate"> </a>
    </h2>
    <p>
      添加
      <a href="https://getbootstrap.com/docs/5.3/helpers/text-truncation/" target="_blank"> .text-truncate</a>
      样式类 。需要显示截断内容可以使用 <code>v-tooltip</code> 指令。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable :data="treeData" attr-key="code" attr-children="children">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address">
            <template #body="{ item }">
              <div v-tooltip :data-bs-title="item.address" class="text-truncate" style="width: 8rem">
                {{ item.address }}
              </div>
            </template>
          </bv-treetable-col>
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="truncateCode" label="vue" />
    </div>

    <h2 id="treetable-x-auto">
      横向滚动<a class="anchor-link" aria-label="Link to this section: 横向滚动" href="#treetable-x-auto"> </a>
    </h2>
    <p>
      表格外包裹一个
      <code>&lt;div class="table-responsive"&gt;</code> 元素，设置表格样式
      <code>style="width:150%;"</code>，表格宽度需超过 100% 会出现横向滚动。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <div class="table-responsive">
          <bv-treetable :data="treeData" attr-key="code" attr-children="children" style="width: 150%">
            <bv-treetable-col header="Name" field="name" />
            <bv-treetable-col header="Address" field="address" />
          </bv-treetable>
        </div>
      </div>
      <code-highlight type="vue" :code="xAutoCode" label="vue" />
    </div>

    <h2 id="treetable-caption">
      表格标题<a class="anchor-link" aria-label="Link to this section: 表格标题" href="#treetable-caption"> </a>
    </h2>
    <p>
      <code>caption</code>
      的作用类似于表格的标题。它帮助使用屏幕阅读器的用户找到表格，了解表格的内容，并决定是否要阅读它。<code
        >caption</code
      >
      默认在表格底部，如果需要在表格上部，需设置
      <code>table-class="caption-top"</code>。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <bv-treetable
          :data="treeData"
          attr-key="code"
          attr-children="children"
          caption="List of users"
          table-class="caption-top"
        >
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="captionCode" label="vue" />
    </div>

    <h2 id="treetable-vertical-align">
      垂直对齐<a class="anchor-link" aria-label="Link to this section: 垂直对齐" href="#treetable-vertical-align"> </a>
    </h2>
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
        <bv-treetable :data="treeData" attr-key="code" attr-children="children" table-class="align-top">
          <bv-treetable-col header="Name" field="name" />
          <bv-treetable-col header="Address" field="address" width="280px" />
        </bv-treetable>
      </div>
      <code-highlight type="vue" :code="verticalAlignCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { alertMessage } from 'bootstrap-vue-ui';

const treeData = {
  code: '1001',
  name: 'Root',
  address: 'Honghu City, Hubei Province, China',
  children: [
    { code: '1002', name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
    {
      code: '1004',
      name: 'kris4',
      address: 'Honghu City, Hubei Province, China',
      children: [
        { code: '1005', name: 'Kris5', address: 'Honghu City, Hubei Province, China' },
        { code: '1006', name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
        { code: '1007', name: 'Kris7', address: 'Honghu City, Hubei Province, China' }
      ]
    },
    { code: '1008', name: 'Kris8', address: 'Honghu City, Hubei Province, China' }
  ]
};

const baseCode = `<template>
  <bv-treetable :data="treeData" attr-key="code" attr-children="children">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
    <bv-treetable-col header="Operation">
      <template #body="{ item }">
        <div class="hstack-3">
          <button type="button" class="btn btn-link"
            @click="alertMessage({ type: 'success', message: item.code })">编辑</button>
          <button type="button" class="btn btn-link"
            @click="alertMessage({ type: 'danger', message: item.code })">删除</button>
        </div>
      </template>
    </bv-treetable-col>
  </bv-treetable>
</template>

<script setup>
const treeData = {
  code: '1001',
  name: 'Root',
  address: 'Honghu City, Hubei Province, China',
  children: [
    { code: '1002', name: 'Kris2', address: 'Honghu City, Hubei Province, China' },
    {
      code: '1004',
      name: 'kris4', address: 'Honghu City, Hubei Province, China',
      children: [
        { code: '1005', name: 'Kris5', address: 'Honghu City, Hubei Province, China', },
        { code: '1006', name: 'Kris6', address: 'Honghu City, Hubei Province, China' },
        { code: '1007', name: 'Kris7', address: 'Honghu City, Hubei Province, China' }
      ]
    },
    { code: '1008', name: 'Kris8', address: 'Honghu City, Hubei Province, China' }
  ]
}
<\/script>`;

const variantsCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    :tfoot-data="['-', 239]" 
    table-class="table-light" 
    thead-class="table-secondary"
    tfoot-class="table-primary">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const tfootCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    :tfoot-data="['-', 239]" 
    tfoot-class="table-info">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const dividersCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    :tfoot-data="['-', 239]"
    thead-class="table-group-divider"
    tbody-class="table-group-divider" 
    tfoot-class="table-group-divider">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const stripedCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-striped">
    <bv-treetable-col header="Code" field="code" />
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const stripedColsCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-striped-columns">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const hoverCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-hover">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const borderedCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-bordered">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const borderedColorCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-bordered border-primary">
    <bv-treetable-col header="Code" field="code" />
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const borderlessCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children" 
    table-class="table-borderless">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const smCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children"
    table-class="table-sm">
    <bv-treetable-col header="Code" field="code" />
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" />
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const truncateCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address">
      <template #body="{ item }">
        <div v-tooltip :data-bs-title="item.address" 
            class="text-truncate" style="width: 8rem;">
            {{item.address }}
        </div>
      </template>
    </bv-treetable-col>
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const xAutoCode = `<template>
  <div class="table-responsive">
    <bv-treetable 
      :data="treeData" attr-key="code" attr-children="children" 
      style="width: 150%;">
      <bv-treetable-col header="Name" field="name" />
      <bv-treetable-col header="Address" field="address" />
    </bv-treetable>
  </div>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const verticalAlignCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children" 
    table-class="align-top">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" width="280px"/>
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;

const captionCode = `<template>
  <bv-treetable 
    :data="treeData" attr-key="code" attr-children="children" 
    caption="List of users" 
    table-class="caption-top">
    <bv-treetable-col header="Name" field="name" />
    <bv-treetable-col header="Address" field="address" width="280px"/>
  </bv-treetable>
</template>

<script setup>
const treeData = {...}
<\/script>`;
</script>
