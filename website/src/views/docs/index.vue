<template>
  <div class="container d-none d-lg-block">
    <div class="docs-layout">
      <aside class="docs-sidebar">
        <ul class="list-unstyled">
          <li class="mb-4">
            <h6 class="fw-bold">Layout 布局</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/docs/layout/breakpoints" class="docs-sidebar-link" exact-active-class="active">
                  Breakpoints 断点
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/layout/containers" class="docs-sidebar-link" exact-active-class="active">
                  Containers 容器</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/layout/grid" class="docs-sidebar-link" exact-active-class="active">Grid 网格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/layout/z-index" class="docs-sidebar-link" exact-active-class="active">Z-index 层级
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Content 内容</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/docs/content/reboot" class="docs-sidebar-link" exact-active-class="active">Reboot 重置
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/content/typography" class="docs-sidebar-link" exact-active-class="active">
                  Typography 文字排版</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/content/images" class="docs-sidebar-link" exact-active-class="active">Images 图片
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/content/figures" class="docs-sidebar-link" exact-active-class="active">Figures 图表区
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Forms 表单</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/docs/form/overview" class="docs-sidebar-link" exact-active-class="active">Overview 概述
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/form-control" class="docs-sidebar-link" exact-active-class="active">Form
                  control 表单控件</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/select" class="docs-sidebar-link" exact-active-class="active">Select 选择器
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/checks-radios" class="docs-sidebar-link" exact-active-class="active">Checks
                  &amp; radios 复选和单选</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/range" class="docs-sidebar-link" exact-active-class="active">Range 滑块
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/input-group" class="docs-sidebar-link" exact-active-class="active">Input
                  group 输入组</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/floating-labels" class="docs-sidebar-link" exact-active-class="active">
                  Floating labels 浮动标签</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/uploader" class="docs-sidebar-link" exact-active-class="active">Uploader 上传器
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/layout" class="docs-sidebar-link" exact-active-class="active">Layout 布局
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/form/validation" class="docs-sidebar-link" exact-active-class="active">Validation
                  验证
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Components 组件</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/docs/components/accordion" class="docs-sidebar-link" exact-active-class="active">
                  Accordion 手风琴</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/alerts" class="docs-sidebar-link" exact-active-class="active">Alerts 警示
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/alerts-box" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Box 警示弹窗</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/alerts-confirm" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Confirm 警示确认窗</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/alerts-message" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Message 警示消息</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/backtop" class="docs-sidebar-link" exact-active-class="active">
                  Backtop 回到顶部</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/badge" class="docs-sidebar-link" exact-active-class="active">Badge 徽章
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/breadcrumb" class="docs-sidebar-link" exact-active-class="active">
                  Breadcrumb 面包屑</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/buttons" class="docs-sidebar-link" exact-active-class="active">Buttons
                  按钮
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/button-group" class="docs-sidebar-link" exact-active-class="active">
                  Button group 按钮组</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/card" class="docs-sidebar-link" exact-active-class="active">Card 卡片
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/carousel" class="docs-sidebar-link" exact-active-class="active">
                  Carousel 轮播图</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/close-button" class="docs-sidebar-link" exact-active-class="active">
                  Close button 关闭按钮</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/collapse" class="docs-sidebar-link" exact-active-class="active">
                  Collapse 折叠</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/dropdowns" class="docs-sidebar-link" exact-active-class="active">
                  Dropdowns 下拉菜单</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/list-group" class="docs-sidebar-link" exact-active-class="active">List
                  group 列表</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/loading" class="docs-sidebar-link" exact-active-class="active">Loading
                  加载
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/modal" class="docs-sidebar-link" exact-active-class="active">Modal 模态框
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/modal2" class="docs-sidebar-link" exact-active-class="active">Modal2
                  模态框2
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/navbar" class="docs-sidebar-link" exact-active-class="active">Navbar
                  导航栏
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/navs-tabs" class="docs-sidebar-link" exact-active-class="active">Navs
                  &amp; tabs 导航标签</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/offcanvas" class="docs-sidebar-link" exact-active-class="active">
                  Offcanvas 侧边栏</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/pagination" class="docs-sidebar-link" exact-active-class="active">
                  Pagination 分页</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/placeholders" class="docs-sidebar-link" exact-active-class="active">
                  Placeholders 占位符</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/popovers" class="docs-sidebar-link" exact-active-class="active">
                  Popovers 弹出框</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/progress" class="docs-sidebar-link" exact-active-class="active">
                  Progress 进度条</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/scrollspy" class="docs-sidebar-link" exact-active-class="active">
                  Scrollspy 滚动监听</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/spinners" class="docs-sidebar-link" exact-active-class="active">
                  Spinners 加载指示器</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/tables" class="docs-sidebar-link" exact-active-class="active">Tables 表格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/toasts" class="docs-sidebar-link" exact-active-class="active">Toasts
                  轻提示
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/tooltips" class="docs-sidebar-link" exact-active-class="active">
                  Tooltips 文字提示</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/tree" class="docs-sidebar-link" exact-active-class="active">Tree 树形结构
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/components/tree-table" class="docs-sidebar-link" exact-active-class="active">Tree
                  table 树形表格
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Helper Utilities 辅助工具</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/docs/utils/background" class="docs-sidebar-link" exact-active-class="active">
                  Background 背景
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/borders" class="docs-sidebar-link" exact-active-class="active">Borders 边框
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/colors" class="docs-sidebar-link" exact-active-class="active">
                  Colors 文本颜色
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/color-background" class="docs-sidebar-link" exact-active-class="active">
                  Color &amp; background 文本颜色背景
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/display" class="docs-sidebar-link" exact-active-class="active">Display 显示属性
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/flex" class="docs-sidebar-link" exact-active-class="active">Flex 弹性布局
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/float" class="docs-sidebar-link" exact-active-class="active">Float 浮动
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/focus-ring" class="docs-sidebar-link" exact-active-class="active">Focus ring
                  焦点环
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/interactions" class="docs-sidebar-link" exact-active-class="active">
                  Interactions 交互
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/link" class="docs-sidebar-link" exact-active-class="active">
                  Link 链接
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/object-fit" class="docs-sidebar-link" exact-active-class="active">
                  Object fit 对象拟合
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/opacity" class="docs-sidebar-link" exact-active-class="active">Opacity 透明度
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/overflow" class="docs-sidebar-link" exact-active-class="active">Overflow 溢出
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/position" class="docs-sidebar-link" exact-active-class="active">Position 位置
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/ratio" class="docs-sidebar-link" exact-active-class="active">Ratio 比例
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/shadows" class="docs-sidebar-link" exact-active-class="active">Shadows 阴影
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/sizing" class="docs-sidebar-link" exact-active-class="active">Sizing 尺寸规格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/spacing" class="docs-sidebar-link" exact-active-class="active">Spacing 间距
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/stacks" class="docs-sidebar-link" exact-active-class="active">Stacks 堆叠
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/stretched-link" class="docs-sidebar-link" exact-active-class="active">
                  Stretched link 拉伸链接
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/text" class="docs-sidebar-link" exact-active-class="active">Text 文本
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/vertical-align" class="docs-sidebar-link" exact-active-class="active">
                  Vertical align 垂直对齐
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/vertical-rule" class="docs-sidebar-link" exact-active-class="active">
                  Vertical rule 垂直分割线
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/visibility" class="docs-sidebar-link" exact-active-class="active">Visibility
                  可见性
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/visually-hidden" class="docs-sidebar-link" exact-active-class="active">
                  Visually hidden 视觉隐藏
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/docs/utils/z-index" class="docs-sidebar-link" exact-active-class="active">Z-index 层级
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <main class="docs-main">
        <router-view />
      </main>
    </div>
  </div>

  <!--移动端导航-->
  <div class="container-fluid d-lg-none">
    <a style="position:fixed;top:0.85rem;left:0.75rem;z-index: 1030;" class="link-body-emphasis fs-4 lh-1"
      @click="sidebarRef.toggle()"><bi-menu-button-wide-fill /></a>

    <bv-offcanvas ref="sidebarRef" title="文档菜单" position="start" offcanvas-style="--bs-offcanvas-width:75vw;">
      <ul class="list-unstyled" @click="sidebarRef.toggle()">
        <li class="mb-4">
          <h6 class="fw-bold">Layout 布局</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/layout/breakpoints" class="docs-sidebar-link" exact-active-class="active">
                Breakpoints 断点
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/layout/containers" class="docs-sidebar-link" exact-active-class="active">Containers
                容器</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/layout/grid" class="docs-sidebar-link" exact-active-class="active">Grid 网格
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/layout/z-index" class="docs-sidebar-link" exact-active-class="active">Z-index 层级
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Content 内容</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/content/reboot" class="docs-sidebar-link" exact-active-class="active">Reboot 重置
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/typography" class="docs-sidebar-link" exact-active-class="active">Typography
                文字排版</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/images" class="docs-sidebar-link" exact-active-class="active">Images 图片
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/figures" class="docs-sidebar-link" exact-active-class="active">Figures 图表区
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Forms 表单</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/form/overview" class="docs-sidebar-link" exact-active-class="active">Overview 概述
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/form-control" class="docs-sidebar-link" exact-active-class="active">Form
                control 表单控件</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/select" class="docs-sidebar-link" exact-active-class="active">Select 选择器
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/checks-radios" class="docs-sidebar-link" exact-active-class="active">Checks
                &amp; radios 复选和单选</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/range" class="docs-sidebar-link" exact-active-class="active">Range 滑块
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/input-group" class="docs-sidebar-link" exact-active-class="active">Input group
                输入组</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/floating-labels" class="docs-sidebar-link" exact-active-class="active">Floating
                labels 浮动标签</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/uploader" class="docs-sidebar-link" exact-active-class="active">Uploader 上传器
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/layout" class="docs-sidebar-link" exact-active-class="active">Layout 布局
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/validation" class="docs-sidebar-link" exact-active-class="active">Validation 验证
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Components 组件</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/components/accordion" class="docs-sidebar-link" exact-active-class="active">
                Accordion 手风琴</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts" class="docs-sidebar-link" exact-active-class="active">Alerts 警示
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-box" class="docs-sidebar-link" exact-active-class="active">Alerts
                Box 警示弹窗</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-confirm" class="docs-sidebar-link" exact-active-class="active">
                Alerts Confirm 警示确认窗</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-message" class="docs-sidebar-link" exact-active-class="active">
                Alerts Message 警示消息</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/backtop" class="docs-sidebar-link" exact-active-class="active">
                Backtop 回到顶部</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/badge" class="docs-sidebar-link" exact-active-class="active">Badge 徽章
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/breadcrumb" class="docs-sidebar-link" exact-active-class="active">
                Breadcrumb 面包屑</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/buttons" class="docs-sidebar-link" exact-active-class="active">Buttons 按钮
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/button-group" class="docs-sidebar-link" exact-active-class="active">
                Button group 按钮组</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/card" class="docs-sidebar-link" exact-active-class="active">Card 卡片
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/carousel" class="docs-sidebar-link" exact-active-class="active">Carousel
                轮播图</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/close-button" class="docs-sidebar-link" exact-active-class="active">Close
                button 关闭按钮</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/collapse" class="docs-sidebar-link" exact-active-class="active">Collapse
                折叠</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/dropdowns" class="docs-sidebar-link" exact-active-class="active">
                Dropdowns 下拉菜单</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/list-group" class="docs-sidebar-link" exact-active-class="active">List
                group 列表</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/loading" class="docs-sidebar-link" exact-active-class="active">Loading 加载
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/modal" class="docs-sidebar-link" exact-active-class="active">Modal 模态框
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/modal2" class="docs-sidebar-link" exact-active-class="active">Modal2 模态框2
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/navbar" class="docs-sidebar-link" exact-active-class="active">Navbar 导航栏
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/navs-tabs" class="docs-sidebar-link" exact-active-class="active">Navs
                &amp; tabs 导航标签</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/offcanvas" class="docs-sidebar-link" exact-active-class="active">
                Offcanvas 侧边栏</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/pagination" class="docs-sidebar-link" exact-active-class="active">
                Pagination 分页</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/placeholders" class="docs-sidebar-link" exact-active-class="active">
                Placeholders 占位符</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/popovers" class="docs-sidebar-link" exact-active-class="active">Popovers
                弹出框</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/progress" class="docs-sidebar-link" exact-active-class="active">Progress
                进度条</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/scrollspy" class="docs-sidebar-link" exact-active-class="active">
                Scrollspy 滚动监听</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/spinners" class="docs-sidebar-link" exact-active-class="active">Spinners
                加载指示器</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tables" class="docs-sidebar-link" exact-active-class="active">Tables 表格
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/toasts" class="docs-sidebar-link" exact-active-class="active">Toasts 轻提示
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tooltips" class="docs-sidebar-link" exact-active-class="active">Tooltips
                文字提示</RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tree" class="docs-sidebar-link" exact-active-class="active">Tree 树形结构
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tree-table" class="docs-sidebar-link" exact-active-class="active">Tree
                table 树形表格
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Helper Utilities 辅助工具</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/utils/background" class="docs-sidebar-link" exact-active-class="active">
                Background 背景
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/borders" class="docs-sidebar-link" exact-active-class="active">Borders 边框
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/colors" class="docs-sidebar-link" exact-active-class="active">
                Colors 文本颜色
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/color-background" class="docs-sidebar-link" exact-active-class="active">
                Color &amp; background 文本颜色背景
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/display" class="docs-sidebar-link" exact-active-class="active">Display 显示属性
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/flex" class="docs-sidebar-link" exact-active-class="active">Flex 弹性布局
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/float" class="docs-sidebar-link" exact-active-class="active">Float 浮动
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/focus-ring" class="docs-sidebar-link" exact-active-class="active">Focus ring
                焦点环
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/interactions" class="docs-sidebar-link" exact-active-class="active">
                Interactions 交互
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/link" class="docs-sidebar-link" exact-active-class="active">
                Link 链接
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/object-fit" class="docs-sidebar-link" exact-active-class="active">
                Object fit 对象拟合
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/opacity" class="docs-sidebar-link" exact-active-class="active">Opacity 透明度
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/overflow" class="docs-sidebar-link" exact-active-class="active">Overflow 溢出
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/position" class="docs-sidebar-link" exact-active-class="active">Position 位置
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/ratio" class="docs-sidebar-link" exact-active-class="active">Ratio 比例
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/shadows" class="docs-sidebar-link" exact-active-class="active">Shadows 阴影
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/sizing" class="docs-sidebar-link" exact-active-class="active">Sizing 尺寸规格
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/spacing" class="docs-sidebar-link" exact-active-class="active">Spacing 间距
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/stacks" class="docs-sidebar-link" exact-active-class="active">Stacks 堆叠
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/stretched-link" class="docs-sidebar-link" exact-active-class="active">
                Stretched link 拉伸链接
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/text" class="docs-sidebar-link" exact-active-class="active">Text 文本
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/vertical-align" class="docs-sidebar-link" exact-active-class="active">
                Vertical align 垂直对齐
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/vertical-rule" class="docs-sidebar-link" exact-active-class="active">
                Vertical rule 垂直分割线
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/visibility" class="docs-sidebar-link" exact-active-class="active">Visibility
                可见性
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/visually-hidden" class="docs-sidebar-link" exact-active-class="active">
                Visually hidden 视觉隐藏
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/utils/z-index" class="docs-sidebar-link" exact-active-class="active">Z-index 层级
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </bv-offcanvas>

<!--    <main>
      <router-view />
    </main>-->
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const sidebarRef = ref(null);
</script>
