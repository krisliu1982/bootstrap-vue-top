<template>
  <h1>Table 表格</h1>
  <p class="lead">用于展示表格数据。</p>

  <h2>基础用法</h2>
  <p>
    在 <code>bv-table</code>组件中，通过 <code>data</code> 属性设置表格数据。在 <code>bv-table-col</code> 组件中，通过 <code>field</code> 属性设置对应对象中的字段名即可填入数据，通过
    <code>header</code> 属性定义表格的列名，通过 <code>width</code> 属性定义列宽。
  </p>
  <p>在列中可以通过模板自定义的显示内容，通过 <code>slotProps</code> 可以获得行数据（<code>item</code>）和行序号（<code>index</code>）。</p>
  <BasicUsage />

  <h2>可选颜色</h2>
  <p>通过 <code>table-class、thead-class、tbody-tr-class、tfoot-class</code> 属性分别为表格、表头、表格行、表尾做颜色调整。</p>
  <p>
    预设
    <code>.table-primary | .table-secondary | .table-success | .table-danger | .table-warning | .table-info | .table-light | .table-dark | .table-active</code>
    样式类供选择。
  </p>
  <OptionalColor />

  <h2>表尾数据</h2>
  <p>通过 <code>tfoot-data</code> 属性设置表尾数据，类型为数组、长度与列数量保持一致。</p>
  <TfootData />

  <h2>分组分割线</h2>
  <p>使用 <code>.table-group-divider</code> 为表头、表体、表尾添加更粗的边框，并使其颜色更深。</p>
  <GroupDivider />

  <h2>斑马行</h2>
  <p>使用 <code>.table-striped</code> 样式类 为表格行添加斑马线效果。</p>
  <StripedRows />

  <h2>斑马列</h2>
  <p>使用 <code>.table-striped-columns</code> 样式类为表格列添加斑马线条纹效果。</p>
  <StripedColumns />

  <h2>可悬停行</h2>
  <p>使用 <code>.table-hover</code> 样式类为表格行上启用悬停状态。</p>
  <HoverRows />

  <h2>带边框</h2>
  <p>使用 <code>.table-bordered</code> 样式类为表格单元格的四周添加边框。</p>
  <Bordered />
  <p><a href="https://bs53.bootstrap-vue.top/utilities/borders#border-color">Border color utilities</a> 工具类可用于更改边框颜色:</p>
  <BorderedColor />

  <h2>无边框</h2>
  <p>使用 <code>.table-borderless</code> 样式类去掉表格单元格边框。</p>
  <Borderless />

  <h2>小型表格</h2>
  <p>使用 <code>.table-sm</code> 样式类可以使表格更加紧凑。</p>
  <SmallTable />

  <h2>多选行</h2>
  <p>添加一个 <code>type="checkbox"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。</p>
  <CheckboxRow />

  <h2>单选行</h2>
  <p>添加一个 <code>type="radio"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。</p>
  <RadioRow />

  <h2>扩展行</h2>
  <p>添加一个 <code>type="expand"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。行展开时，触发 <code>expand-change</code> 事件。</p>
  <ExpandRow />

  <h2>内容截断</h2>
  <p>添加 <a href="https://bs53.bootstrap-vue.top/helpers/text-truncation">.text-truncate</a> 样式类 。截断内容可以使用 <code>v-tooltip</code> 指令显示完整内容。</p>
  <ContentTruncate />

  <h2>表头固定</h2>
  <p>表格外包裹一个 <code>&lt;div class="overflow-y-auto"&gt;</code> 元素，为该 div 元素设置固定高度。同时添加 <code>.position-sticky</code> 和 <code>.top-0</code> 样式类到表格 <code>thead-class</code> 属性 。</p>
  <TheadFixed />

  <h2>横向滚动</h2>
  <p>表格外包裹一个 <code>&lt;div class="table-responsive"&gt;</code> 元素。</p>
  <XAuto />

  <h2>数据排序</h2>
  <p>
    在表格列中，设置 <code>sortable</code> 属性为 <code>local</code> 即可实现本地排序。如果需远程排序，设置 <code>sortable</code> 属性为 <code>remote</code>，同时在表格上监听
    <code>sort-change</code> 事件，在事件回调函数中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。
  </p>
  <DataSort />

  <h2>表格标题</h2>
  <p>
    表格 Caption 的作用类似于表格的标题。它帮助使用屏幕阅读器的用户找到表格，了解表格的内容，并决定是否要阅读它。Caption 默认在表格底部，如果置于表格上部，添加 <code>.caption-top</code> 样式类到
    <code>table-class</code> 属性上。
  </p>
  <DataSort />

  <h2>垂直对齐</h2>
  <p>
    添加 <code>.align-middle</code> 样式类到 <code>table-class</code> 属性上。 如有需要，可使用 <a href="https://bs53.bootstrap-vue.top/utilities/vertical-align">vertical-align</a> 工具类来重新对齐。
  </p>
  <VerticalAlign />
</template>

<script setup>
import BasicUsage from './basic-usage.vue';
import BorderedColor from './bordered-color.vue';
import Bordered from './bordered.vue';
import Borderless from './borderless.vue';
import CheckboxRow from './checkbox-row.vue';
import ContentTruncate from './content-truncate.vue';
import DataSort from './data-sort.vue';
import ExpandRow from './expand-row.vue';
import GroupDivider from './group-divider.vue';
import HoverRows from './hover-rows.vue';
import RadioRow from './radio-row.vue';
import SmallTable from './small-table.vue';
import StripedColumns from './striped-columns.vue';
import StripedRows from './striped-rows.vue';
import TfootData from './tfoot-data.vue';
import TheadFixed from './thead-fixed.vue';
import VerticalAlign from './vertical-align.vue';
import XAuto from './x-auto.vue';
import OptionalColor from './optional-color.vue';
</script>
