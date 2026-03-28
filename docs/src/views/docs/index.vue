<template>
  <div class="container-xxl docs-layout">
    <aside class="docs-sidebar">
      <ul class="list-unstyled">
        <li class="mb-4">
          <h6 class="fw-bold">Content 内容</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/content/reboot" class="docs-sidebar-link" exact-active-class="active"
                >Reboot 重置
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/typography" class="docs-sidebar-link" exact-active-class="active"
                >Typography 文字排版</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/images" class="docs-sidebar-link" exact-active-class="active"
                >Images 图片
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/content/figures" class="docs-sidebar-link" exact-active-class="active"
                >Figures 图表区
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Forms 表单</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/form/overview" class="docs-sidebar-link" exact-active-class="active"
                >Overview 概述
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/form-control" class="docs-sidebar-link" exact-active-class="active"
                >Form control 表单控件</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/select" class="docs-sidebar-link" exact-active-class="active"
                >Select 选择器
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/checks-radios" class="docs-sidebar-link" exact-active-class="active"
                >Checks & radios 复单选</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/range" class="docs-sidebar-link" exact-active-class="active"
                >Range 滑块
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/input-group" class="docs-sidebar-link" exact-active-class="active"
                >Input group 输入组</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/floating-labels" class="docs-sidebar-link" exact-active-class="active"
                >Floating labels 浮动标签</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/uploader" class="docs-sidebar-link" exact-active-class="active"
                >Uploader 上传器
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/layout" class="docs-sidebar-link" exact-active-class="active"
                >Layout 布局
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/form/validation" class="docs-sidebar-link" exact-active-class="active"
                >Validation 验证
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Components 组件</h6>
          <ul class="list-unstyled">
            <li class="py-1">
              <RouterLink to="/docs/components/accordion" class="docs-sidebar-link" exact-active-class="active">
                Accordion 手风琴</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts" class="docs-sidebar-link" exact-active-class="active"
                >Alerts 警示
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-box" class="docs-sidebar-link" exact-active-class="active"
                >Alerts Box 警示弹窗</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-confirm" class="docs-sidebar-link" exact-active-class="active">
                Alerts Confirm 警示确认窗</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/alerts-message" class="docs-sidebar-link" exact-active-class="active">
                Alerts Message 警示消息</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/badge" class="docs-sidebar-link" exact-active-class="active"
                >Badge 徽章
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/breadcrumb" class="docs-sidebar-link" exact-active-class="active">
                Breadcrumb 面包屑</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/buttons" class="docs-sidebar-link" exact-active-class="active"
                >Buttons 按钮
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/button-group" class="docs-sidebar-link" exact-active-class="active">
                Button group 按钮组</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/card" class="docs-sidebar-link" exact-active-class="active"
                >Card 卡片
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/carousel" class="docs-sidebar-link" exact-active-class="active"
                >Carousel 轮播图</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/close-button" class="docs-sidebar-link" exact-active-class="active"
                >Close button 关闭按钮</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/collapse" class="docs-sidebar-link" exact-active-class="active"
                >Collapse 折叠</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/dropdowns" class="docs-sidebar-link" exact-active-class="active">
                Dropdowns 下拉菜单</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/list-group" class="docs-sidebar-link" exact-active-class="active"
                >List group 列表</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/loading" class="docs-sidebar-link" exact-active-class="active"
                >Loading 加载
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/modal" class="docs-sidebar-link" exact-active-class="active"
                >Modal 模态框
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/modal2" class="docs-sidebar-link" exact-active-class="active"
                >Modal2 模态框2
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/navbar" class="docs-sidebar-link" exact-active-class="active"
                >Navbar 导航栏
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/navs-tabs" class="docs-sidebar-link" exact-active-class="active"
                >Navs &amp; tabs 导航标签</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/offcanvas" class="docs-sidebar-link" exact-active-class="active">
                Offcanvas 侧边栏</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/pagination" class="docs-sidebar-link" exact-active-class="active">
                Pagination 分页</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/placeholders" class="docs-sidebar-link" exact-active-class="active">
                Placeholders 占位符</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/popovers" class="docs-sidebar-link" exact-active-class="active"
                >Popovers 弹出框</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/progress" class="docs-sidebar-link" exact-active-class="active"
                >Progress 进度条</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/scrollspy" class="docs-sidebar-link" exact-active-class="active">
                Scrollspy 滚动监听</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/spinners" class="docs-sidebar-link" exact-active-class="active"
                >Spinners 加载指示器</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tables" class="docs-sidebar-link" exact-active-class="active"
                >Tables 表格
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/toasts" class="docs-sidebar-link" exact-active-class="active"
                >Toasts 轻提示
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tooltips" class="docs-sidebar-link" exact-active-class="active"
                >Tooltips 文字提示</RouterLink
              >
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tree" class="docs-sidebar-link" exact-active-class="active"
                >Tree 树形结构
              </RouterLink>
            </li>
            <li class="py-1">
              <RouterLink to="/docs/components/tree-table" class="docs-sidebar-link" exact-active-class="active"
                >Tree table 树形表格
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="mb-4">
          <h6 class="fw-bold">Helpers 辅助类</h6>
          <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/helpers/clearfix" class="bd-links-link d-inline-block rounded"> Clearfix </a></li>
            <li>
              <a href="/docs/5.3/helpers/color-background" class="bd-links-link d-inline-block rounded">
                Color &amp; background
              </a>
            </li>
            <li>
              <a href="/docs/5.3/helpers/colored-links" class="bd-links-link d-inline-block rounded"> Colored links </a>
            </li>
            <li>
              <a href="/docs/5.3/helpers/focus-ring" class="bd-links-link d-inline-block rounded"> Focus ring </a>
            </li>
            <li><a href="/docs/5.3/helpers/icon-link" class="bd-links-link d-inline-block rounded"> Icon link </a></li>
            <li><a href="/docs/5.3/helpers/position" class="bd-links-link d-inline-block rounded"> Position </a></li>
            <li><a href="/docs/5.3/helpers/ratio" class="bd-links-link d-inline-block rounded"> Ratio </a></li>
            <li><a href="/docs/5.3/helpers/stacks" class="bd-links-link d-inline-block rounded"> Stacks </a></li>
            <li>
              <a href="/docs/5.3/helpers/stretched-link" class="bd-links-link d-inline-block rounded">
                Stretched link
              </a>
            </li>
            <li>
              <a href="/docs/5.3/helpers/text-truncation" class="bd-links-link d-inline-block rounded">
                Text truncation
              </a>
            </li>
            <li>
              <a href="/docs/5.3/helpers/vertical-rule" class="bd-links-link d-inline-block rounded"> Vertical rule </a>
            </li>
            <li>
              <a href="/docs/5.3/helpers/visually-hidden" class="bd-links-link d-inline-block rounded">
                Visually hidden
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

    <main class="docs-main">
      <router-view />
    </main>
  </div>
</template>
