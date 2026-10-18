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
- **文档完善**: 配套完整的中文文档网站


## 安装

```bash
npm install bootstrap-vue-top
```


## 快速开始

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式(已包括bootstrap 5 样式，切记不要再次引入。)
import 'bootstrap-vue-top/dist/index.css'
// 引入Vue组件(已打包bootstrap 5 JS组件，切记不要再次引入。)
import BootstrapVueTop from 'bootstrap-vue-top'

const app = createApp(App)
app.use(BootstrapVueTop)
app.mount('#app')
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

- Chrome >= 84
- Firefox >= 63
- iOS >= 14.5
- Safari >= 14.1


## 协议

MIT License