# bootstrap-vue-top

基于 Bootstrap 5.3.8 & Vue 3.5.x 的前端组件库

## 简介

这是一个现代化的前端框架解决方案，将 Bootstrap 5.3.8 与 Vue 3.5.x 完美结合，充分利用双方的优势：Bootstrap 5 提供了强大的 UI 组件库和响应式布局系统，而 Vue 3 则带来了高效的数据驱动响应式渲染和 Composition API。

框架严格遵循"样式用 Bootstrap，行为用 Vue"的架构范式，完全继承 Bootstrap 的原子化工具类（间距、字体、颜色、Flex/Grid），开发者无需学习新的 CSS 类名，可直接使用原生类名如 `d-flex`、`text-primary`、`mb-3` 等来控制外观。

Bootstrap 官方文档中描述的所有样式类（如表格条纹、卡片分组、栅格偏移等）均可直接在 Vue 项目中使用，降低了团队的学习和迁移成本。

## 特性

- **Vue 3 + Composition API**: 使用 Vue 3 最新特性开发
- **Bootstrap 5 样式**: 完全继承 Bootstrap 5 的全部样式类
- **组件丰富**: 提供 20+ 常用组件
- **TypeScript 支持**: 完整的类型定义
- **按需加载**: 支持组件按需引入
- **文档完善**: 配套完整的中文文档网站

## 组件列表

### 布局组件

- `BContainer` - 容器
- `BRow` - 栅格行
- `BCol` - 栅格列

### 导航组件

- `BNav` - 导航
- `BNavbar` - 导航栏
- `BTabs` - 标签页
- `BPagination` - 分页

### 数据展示

- `BTable` - 表格
- `BTree` - 树形组件
- `BTreeTable` - 树表格
- `BCarousel` - 轮播
- `BAggregation` - 手风琴/折叠面板

### 表单组件

- `BFormControl` - 表单输入
- `BSelect` - 选择器
- `BCheckbox` / `BRadio` - 复选框/单选框
- `BInputGroup` - 输入框组
- `BFileUploader` - 文件上传
- `BImageUploader` - 图片上传

### 反馈组件

- `BAlert` - 警告提示
- `BAlertBox` - 消息提示框
- `BAlertMessage` - 消息通知
- `BAlertConfirm` - 确认对话框
- `BModal` / `BModal2` - 模态框
- `BOffcanvas` - 侧边栏
- `BToast` - 吐司通知
- `BLoading` - 加载状态
- `BProgress` - 进度条
- `BSpinner` - 加载动画

### 实用组件

- `BBadge` - 徽标
- `BBreadcrumb` - 面包屑
- `BButton` - 按钮
- `BButtonGroup` - 按钮组
- `BCard` - 卡片
- `BListGroup` - 列表组
- `BDropdown` - 下拉菜单
- `BCloseButton` - 关闭按钮
- `BPlaceholder` - 骨架屏
- `BBacktop` - 返回顶部
- `BImagePreview` - 图片预览
- `BScrollspy` - 滚动监听
- `BPopover` - 弹出框
- `BTooltip` - 工具提示

## 安装

```bash
npm install bootstrap-vue-top
```

## 快速开始

### 完整引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// 引入组件库样式
import 'bootstrap-vue-top/dist/index.css'

import BootstrapVueTop from 'bootstrap-vue-top'
import 'bootstrap-vue-top/dist/index.css'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')
```

### 按需引入

```javascript
import { BButton, BModal, BTable } from 'bootstrap-vue-top'
import 'bootstrap-vue-top/dist/components/index.css'
```

## 使用示例

### 按钮

```vue
<template>
  <div>
    <b-button variant="primary">主要按钮</b-button>
    <b-button variant="secondary">次要按钮</b-button>
    <b-button variant="success">成功</b-button>
    <b-button variant="danger">危险</b-button>
  </div>
</template>
```

### 表格

```vue
<template>
  <b-table :items="items" :fields="fields" striped bordered>
  </b-table>
</template>

<script setup>
import { ref } from 'vue'

const fields = ['id', 'name', 'age', 'email']
const items = ref([
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' }
])
</script>
```

### 模态框

```vue
<template>
  <b-button @click="show = true">打开模态框</b-button>
  <b-modal v-model="show" title="提示标题">
    <p>这是模态框内容</p>
  </b-modal>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
```

### 消息提示

```javascript
import { alertBox } from 'bootstrap-vue-top'

alertBox.success('操作成功')
alertBox.error('操作失败')
alertBox.warning('警告信息')
alertBox.info('提示信息')
```

### 确认对话框

```javascript
import { alertConfirm } from 'bootstrap-vue-top'

alertConfirm.confirm('确定要删除吗？').then(() => {
  console.log('用户点击了确定')
}).catch(() => {
  console.log('用户点击了取消')
})
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 开发文档网站

```bash
cd website
npm install
npm run dev
```

## 浏览器支持

- Chrome >= 90
- Firefox >= 90
- Safari >= 14
- Edge >= 90

## 协议

MIT License