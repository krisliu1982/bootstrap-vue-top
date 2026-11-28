<template>
  <article class="docs-content">
    <h1>Table 表格</h1>
    <p class="lead">用于展示表格数据。</p>

    <h2 id="basic-usage">基础用法<a class="anchor-link" href="#basic-usage" aria-label="基础用法"></a></h2>
    <p>
      在 <code>bv-table</code>组件中，通过 <code>data</code> 属性设置表格数据。在 <code>bv-table-col</code> 组件中，通过
      <code>field</code> 属性设置对应对象中的字段名即可填入数据，通过 <code>header</code> 属性定义表格的列名，通过 <code>width</code> 属性定义列宽。
    </p>
    <p>在列中可以通过模板自定义的显示内容，通过 <code>slotProps</code> 可以获得行数据（<code>item</code>）和行序号（<code>index</code>）。</p>
    <div class="docs-example"><BasicUsage /></div>
    <CodeWrapper :code="BasicUsageCode" />

    <h2 id="optional-color">可选颜色<a class="anchor-link" href="#optional-color" aria-label="可选颜色"></a></h2>
    <p>通过 <code>table-class、thead-class、tbody-tr-class、tfoot-class</code> 属性分别为表格、表头、表格行、表尾做颜色调整。</p>
    <p>
      预设
      <code
        >.table-primary | .table-secondary | .table-success | .table-danger | .table-warning | .table-info | .table-light | .table-dark | .table-active</code
      >
      样式类供选择。
    </p>
    <div class="docs-example"><OptionalColor /></div>
    <CodeWrapper :code="OptionalColorCode" />

    <h2 id="tfoot-data">表尾数据<a class="anchor-link" href="#tfoot-data" aria-label="表尾数据"></a></h2>
    <p>通过 <code>tfoot-data</code> 属性设置表尾数据，类型为数组、长度与列数量保持一致。</p>
    <div class="docs-example"><TfootData /></div>
    <CodeWrapper :code="TfootDataCode" />

    <h2 id="group-divider">分组分割线<a class="anchor-link" href="#group-divider" aria-label="分组分割线"></a></h2>
    <p>使用 <code>.table-group-divider</code> 为表头、表体、表尾添加更粗的边框，并使其颜色更深。</p>
    <div class="docs-example"><GroupDivider /></div>
    <CodeWrapper :code="GroupDividerCode" />

    <h2 id="striped-rows">斑马行<a class="anchor-link" href="#striped-rows" aria-label="斑马行"></a></h2>
    <p>使用 <code>.table-striped</code> 样式类 为表格行添加斑马线效果。</p>
    <div class="docs-example"><StripedRows /></div>
    <CodeWrapper :code="StripedRowsCode" />

    <h2 id="striped-columns">斑马列<a class="anchor-link" href="#striped-columns" aria-label="斑马列"></a></h2>
    <p>使用 <code>.table-striped-columns</code> 样式类为表格列添加斑马线条纹效果。</p>
    <div class="docs-example"><StripedColumns /></div>
    <CodeWrapper :code="StripedColumnsCode" />

    <h2 id="hover-rows">可悬停行<a class="anchor-link" href="#hover-rows" aria-label="可悬停行"></a></h2>
    <p>使用 <code>.table-hover</code> 样式类为表格行上启用悬停状态。</p>
    <div class="docs-example"><HoverRows /></div>
    <CodeWrapper :code="HoverRowsCode" />

    <h2 id="bordered">带边框<a class="anchor-link" href="#bordered" aria-label="带边框"></a></h2>
    <p>使用 <code>.table-bordered</code> 样式类为表格单元格的四周添加边框。</p>
    <div class="docs-example"><Bordered /></div>
    <CodeWrapper :code="BorderedCode" />
    <p><a href="https://bs53.bootstrap-vue.top/utilities/borders#border-color">Border color utilities</a> 工具类可用于更改边框颜色:</p>
    <div class="docs-example"><BorderedColor /></div>
    <CodeWrapper :code="BorderedColorCode" />

    <h2 id="borderless">无边框<a class="anchor-link" href="#borderless" aria-label="无边框"></a></h2>
    <p>使用 <code>.table-borderless</code> 样式类去掉表格单元格边框。</p>
    <div class="docs-example"><Borderless /></div>
    <CodeWrapper :code="BorderlessCode" />

    <h2 id="small-table">小型表格<a class="anchor-link" href="#small-table" aria-label="小型表格"></a></h2>
    <p>使用 <code>.table-sm</code> 样式类可以使表格更加紧凑。</p>
    <div class="docs-example"><SmallTable /></div>
    <CodeWrapper :code="SmallTableCode" />

    <h2 id="checkbox-row">多选行<a class="anchor-link" href="#checkbox-row" aria-label="多选行"></a></h2>
    <p>添加一个 <code>type="checkbox"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。</p>
    <div class="docs-example"><CheckboxRow /></div>
    <CodeWrapper :code="CheckboxRowCode" />

    <h2 id="radio-row">单选行<a class="anchor-link" href="#radio-row" aria-label="单选行"></a></h2>
    <p>添加一个 <code>type="radio"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。</p>
    <div class="docs-example"><RadioRow /></div>
    <CodeWrapper :code="RadioRowCode" />

    <h2 id="expand-row">扩展行<a class="anchor-link" href="#expand-row" aria-label="扩展行"></a></h2>
    <p>添加一个 <code>type="expand"</code> 列 ，设置 <code>field</code> 属性为数据行唯一标识属性。行展开时，触发 <code>expand-change</code> 事件。</p>
    <div class="docs-example"><ExpandRow /></div>
    <CodeWrapper :code="ExpandRowCode" />

    <h2 id="content-truncate">内容截断<a class="anchor-link" href="#content-truncate" aria-label="内容截断"></a></h2>
    <p>
      添加 <a href="https://bs53.bootstrap-vue.top/helpers/text-truncation">.text-truncate</a> 样式类 。截断内容可以使用
      <code>v-tooltip</code> 指令显示完整内容。
    </p>
    <div class="docs-example"><ContentTruncate /></div>
    <CodeWrapper :code="ContentTruncateCode" />

    <h2 id="thead-fixed">表头固定<a class="anchor-link" href="#thead-fixed" aria-label="表头固定"></a></h2>
    <p>
      表格外包裹一个 <code>&lt;div class="overflow-y-auto"&gt;</code> 元素，为该 div 元素设置固定高度。同时添加 <code>.position-sticky</code> 和
      <code>.top-0</code> 样式类到表格 <code>thead-class</code> 属性 。
    </p>
    <div class="docs-example"><TheadFixed /></div>
    <CodeWrapper :code="TheadFixedCode" />

    <h2 id="x-auto">横向滚动<a class="anchor-link" href="#x-auto" aria-label="横向滚动"></a></h2>
    <p>表格外包裹一个 <code>&lt;div class="table-responsive"&gt;</code> 元素。</p>
    <div class="docs-example"><XAuto /></div>
    <CodeWrapper :code="XAutoCode" />

    <h2 id="data-sort">数据排序<a class="anchor-link" href="#data-sort" aria-label="数据排序"></a></h2>
    <p>
      在表格列中，设置 <code>sortable</code> 属性为 <code>local</code> 即可实现本地排序。如果需远程排序，设置 <code>sortable</code> 属性为
      <code>remote</code>，同时在表格上监听 <code>sort-change</code> 事件，在事件回调函数中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。
    </p>
    <div class="docs-example"><DataSort /></div>
    <CodeWrapper :code="DataSortCode" />

    <h2 id="table-caption">表格标题<a class="anchor-link" href="#table-caption" aria-label="表格标题"></a></h2>
    <p>
      表格 Caption 的作用类似于表格的标题。它帮助使用屏幕阅读器的用户找到表格，了解表格的内容，并决定是否要阅读它。Caption
      默认在表格底部，如果置于表格上部，添加 <code>.caption-top</code> 样式类到 <code>table-class</code> 属性上。
    </p>
    <div class="docs-example"><TableCaption /></div>
    <CodeWrapper :code="TableCaptionCode" />

    <h2 id="vertical-align">垂直对齐<a class="anchor-link" href="#vertical-align" aria-label="垂直对齐"></a></h2>
    <p>
      添加 <code>.align-middle</code> 样式类到 <code>table-class</code> 属性上。 如有需要，可使用
      <a href="https://bs53.bootstrap-vue.top/utilities/vertical-align">vertical-align</a> 工具类来重新对齐。
    </p>
    <div class="docs-example"><VerticalAlign /></div>
    <CodeWrapper :code="VerticalAlignCode" />
  </article>

  <nav class="docs-toc" aria-label="本页目录">
    <ul>
      <li><a href="#basic-usage">基础用法</a></li>
      <li><a href="#optional-color">可选颜色</a></li>
      <li><a href="#tfoot-data">表尾数据</a></li>
      <li><a href="#group-divider">分组分割线</a></li>
      <li><a href="#striped-rows">斑马行</a></li>
      <li><a href="#striped-columns">斑马列</a></li>
      <li><a href="#hover-rows">可悬停行</a></li>
      <li><a href="#bordered">带边框</a></li>
      <li><a href="#borderless">无边框</a></li>
      <li><a href="#small-table">小型表格</a></li>
      <li><a href="#checkbox-row">多选行</a></li>
      <li><a href="#radio-row">单选行</a></li>
      <li><a href="#expand-row">扩展行</a></li>
      <li><a href="#content-truncate">内容截断</a></li>
      <li><a href="#thead-fixed">表头固定</a></li>
      <li><a href="#x-auto">横向滚动</a></li>
      <li><a href="#data-sort">数据排序</a></li>
      <li><a href="#table-caption">表格标题</a></li>
      <li><a href="#vertical-align">垂直对齐</a></li>
    </ul>
  </nav>
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
import TableCaption from './table-caption.vue';
import TfootData from './tfoot-data.vue';
import TheadFixed from './thead-fixed.vue';
import VerticalAlign from './vertical-align.vue';
import XAuto from './x-auto.vue';
import OptionalColor from './optional-color.vue';

import BasicUsageCode from './basic-usage.vue?raw';
import BorderedColorCode from './bordered-color.vue?raw';
import BorderedCode from './bordered.vue?raw';
import BorderlessCode from './borderless.vue?raw';
import CheckboxRowCode from './checkbox-row.vue?raw';
import ContentTruncateCode from './content-truncate.vue?raw';
import DataSortCode from './data-sort.vue?raw';
import ExpandRowCode from './expand-row.vue?raw';
import GroupDividerCode from './group-divider.vue?raw';
import HoverRowsCode from './hover-rows.vue?raw';
import RadioRowCode from './radio-row.vue?raw';
import SmallTableCode from './small-table.vue?raw';
import StripedColumnsCode from './striped-columns.vue?raw';
import StripedRowsCode from './striped-rows.vue?raw';
import TableCaptionCode from './table-caption.vue?raw';
import TfootDataCode from './tfoot-data.vue?raw';
import TheadFixedCode from './thead-fixed.vue?raw';
import VerticalAlignCode from './vertical-align.vue?raw';
import XAutoCode from './x-auto.vue?raw';
import OptionalColorCode from './optional-color.vue?raw';
</script>
