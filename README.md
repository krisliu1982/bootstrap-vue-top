# bootstrap-vue-top
基于 Bootstrap 5 & Vue 3 的前端框架

## 简介
框架完美融合了 Bootstrap 强大的样式体系与 Vue 的响应式数据驱动能力，为开发者提供了一套高度灵活、高效、稳健，适配不同设备尺寸的企业级 UI 解决方案。

框架严格遵循“样式归 Bootstrap，行为归 Vue”的架构范式。完全继承 Bootstrap 的原子化工具类（间距、排版、颜色、Flex/Grid 栅格），开发者无需学习新的 CSS类名，直接使用 d-flex、text-primary、mb-3 等原生类名控制外观。

框架将 Bootstrap 的纯交互组件（弹窗、轮播、工具提示等）转化为 Vue 的声明式组件。开发者无需关心 Popper.js 的实例化、销毁或事件监听器的移除，所有生命周期（如mounted、unmounted）均由框架底层接管。

框架只接管了 JavaScript 交互部分，CSS 层面完全透明。这意味着：所有 Bootstrap 官方文档中关于样式类的说明（如表格条纹、卡片分组、网格偏移）在 Vue项目中直接适用，降低了团队的学习与迁移成本。
