<template>
  <nav class="sticky-lg-top bg-primary-subtle bg-gradient">
    <div class="container">
      <div class="d-flex align-items-center gap-2" style="height: 3rem">
        <img src="/favicon.svg" alt="BootstrapVue" width="24" height="24"/>
        <small>{{ version }}</small>
        <div class="ms-auto">
          <div class="d-none d-lg-block">
            <div class="d-flex align-items-center gap-3">
              <RouterLink to="/" class="link-body-emphasis text-decoration-none" active-class="fw-bold"
                >文档
              </RouterLink>
              <a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/" target="_blank"
                >Bootstrap</a
              >
              <a class="link-body-emphasis text-decoration-none" href="https://cn.vuejs.org/" target="_blank">Vue</a>
              <div class="vr"></div>
              <a class="link-body-emphasis text-decoration-none" href="https://gitee.com/asdfghjkl012345/bootstrap-vue" target="_blank">Gitee</a>
              <a class="link-body-emphasis text-decoration-none" href="https://github.com/krisliu1982/bootstrap-vue-top" target="_blank">Github</a>
              <div class="vr"></div>
              <div class="dropdown">
                <a
                  v-dropdown
                  class="link-body-emphasis text-decoration-none dropdown-toggle"
                  title="文字大小"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <template v-if="fontSize === 'sm'">小型</template>
                  <template v-else-if="fontSize === 'md'">中型</template>
                  <template v-else-if="fontSize === 'lg'">大型</template>
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'sm'">小型文字</button></li>
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'md'">中型文字</button></li>
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'lg'">大型文字</button></li>
                </ul>
              </div>
              <div class="vr"></div>
              <a
                href="#"
                class="link-body-emphasis text-decoration-none"
                title="主题切换"
                @click.prevent="handleThemeChange"
              >
                <bi-sun v-if="theme === 'light'" />
                <bi-moon v-else />
              </a>
            </div>
          </div>
          <div class="d-lg-none">
            <a href="#" class="link-body-emphasis fs-5" type="button" @click.prevent="navbarRef.toggle()">
              <bi-three-dots />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <bv-offcanvas
    ref="navbarRef"
    title="bootstrap-vue-top"
    offcanvas-class="offcanvas offcanvas-end"
    offcanvas-style="--bs-offcanvas-width:75vw;"
  >
    <div class="list-group list-group-flush" @click="navbarRef.toggle()">
      <RouterLink to="/docs" class="list-group-item list-group-item-action">文档</RouterLink>
      <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
      <a class="list-group-item list-group-item-action" href="https://cn.vuejs.org/" target="_blank">Vue</a>
      <a href="#" class="list-group-item list-group-item-action" @click.prevent="handleThemeChange">
        <bi-sun v-if="theme === 'light'" />
        <bi-moon v-else />
      </a>
    </div>
  </bv-offcanvas>

    <div class="sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-2">
        <a href="#" class="link-body-emphasis text-decoration-none" @click="offcanvasRef.toggle()"><bi-list /> 菜单</a>
        <div class="dropdown docs-toc-menu">
          <a v-dropdown href="#" class="link-body-emphasis text-decoration-none dropdown-toggle" aria-expanded="false"
            >本页内容</a
          >
          <nav class="dropdown-menu" style="max-height: 50vh; overflow-y: auto" id="docs-toc"></nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="d-flex gap-3 mt-3">
      <bv-offcanvas
        ref="offcanvasRef"
        title="文档菜单"
        offcanvas-class="offcanvas-lg offcanvas-start flex-shrink-0 docs-sidebar"
      >
        <ul ref="menuRef" class="list-unstyled">
          <li class="mb-4">
            <h6 class="fw-bold">开发指南</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/guide/introduction" class="docs-sidebar-link" exact-active-class="active">
                  Introduction 介绍
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/guide/quick-start" class="docs-sidebar-link" exact-active-class="active">
                  Quick start 快速开始</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Layout 布局</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/layout/breakpoints" class="docs-sidebar-link" exact-active-class="active">
                  Breakpoints 断点
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/layout/containers" class="docs-sidebar-link" exact-active-class="active">
                  Containers 容器</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/layout/grid" class="docs-sidebar-link" exact-active-class="active"
                  >Grid 网格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/layout/z-index" class="docs-sidebar-link" exact-active-class="active"
                  >Z-index 层级
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Content 内容</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/content/reboot" class="docs-sidebar-link" exact-active-class="active"
                  >Reboot 重置
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/content/typography" class="docs-sidebar-link" exact-active-class="active">
                  Typography 文字排版</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/content/images" class="docs-sidebar-link" exact-active-class="active"
                  >Images 图片
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/content/figures" class="docs-sidebar-link" exact-active-class="active"
                  >Figures 图表区
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Forms 表单</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/form/overview" class="docs-sidebar-link" exact-active-class="active"
                  >Overview 概述
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/form/form-control" class="docs-sidebar-link" exact-active-class="active"
                  >Form control 表单控件</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/form/select" class="docs-sidebar-link" exact-active-class="active"
                  >Select 选择器
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/form/checks-radios" class="docs-sidebar-link" exact-active-class="active"
                  >Checks &amp; radios 复选和单选</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/form/range" class="docs-sidebar-link" exact-active-class="active"
                  >Range 滑块
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/form/input-group" class="docs-sidebar-link" exact-active-class="active"
                  >Input group 输入组</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/form/floating-labels" class="docs-sidebar-link" exact-active-class="active">
                  Floating labels 浮动标签</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/form/uploader" class="docs-sidebar-link" exact-active-class="active"
                  >Uploader 上传器
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/form/layout" class="docs-sidebar-link" exact-active-class="active"
                  >Layout 布局
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/form/validation" class="docs-sidebar-link" exact-active-class="active"
                  >Validation 验证
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Components 组件</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/components/accordion" class="docs-sidebar-link" exact-active-class="active">
                  Accordion 手风琴</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/alerts" class="docs-sidebar-link" exact-active-class="active"
                  >Alerts 警示
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/alerts-box" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Box 警示弹窗</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/alerts-confirm" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Confirm 警示确认窗</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/alerts-message" class="docs-sidebar-link" exact-active-class="active">
                  Alerts Message 警示消息</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/backtop" class="docs-sidebar-link" exact-active-class="active">
                  Backtop 回到顶部</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/badge" class="docs-sidebar-link" exact-active-class="active"
                  >Badge 徽章
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/breadcrumb" class="docs-sidebar-link" exact-active-class="active">
                  Breadcrumb 面包屑</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/buttons" class="docs-sidebar-link" exact-active-class="active"
                  >Buttons 按钮
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/button-group" class="docs-sidebar-link" exact-active-class="active">
                  Button group 按钮组</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/card" class="docs-sidebar-link" exact-active-class="active"
                  >Card 卡片
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/carousel" class="docs-sidebar-link" exact-active-class="active">
                  Carousel 轮播图</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/close-button" class="docs-sidebar-link" exact-active-class="active">
                  Close button 关闭按钮</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/collapse" class="docs-sidebar-link" exact-active-class="active">
                  Collapse 折叠</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/dropdowns" class="docs-sidebar-link" exact-active-class="active">
                  Dropdowns 下拉菜单</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/image-preview" class="docs-sidebar-link" exact-active-class="active">ImagePreview 图片预览</RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/list-group" class="docs-sidebar-link" exact-active-class="active"
                  >List group 列表</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/loading" class="docs-sidebar-link" exact-active-class="active"
                  >Loading 加载
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/modal" class="docs-sidebar-link" exact-active-class="active"
                  >Modal 模态框
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/modal2" class="docs-sidebar-link" exact-active-class="active"
                  >Modal2 模态框2
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/navbar" class="docs-sidebar-link" exact-active-class="active"
                  >Navbar 导航栏
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/navs-tabs" class="docs-sidebar-link" exact-active-class="active"
                  >Navs &amp; tabs 导航标签</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/offcanvas" class="docs-sidebar-link" exact-active-class="active">
                  Offcanvas 侧边栏</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/pagination" class="docs-sidebar-link" exact-active-class="active">
                  Pagination 分页</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/placeholders" class="docs-sidebar-link" exact-active-class="active">
                  Placeholders 占位符</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/popovers" class="docs-sidebar-link" exact-active-class="active">
                  Popovers 弹出框</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/progress" class="docs-sidebar-link" exact-active-class="active">
                  Progress 进度条</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/scrollspy" class="docs-sidebar-link" exact-active-class="active">
                  Scrollspy 滚动监听</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/spinners" class="docs-sidebar-link" exact-active-class="active">
                  Spinners 加载指示器</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/tables" class="docs-sidebar-link" exact-active-class="active"
                  >Tables 表格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/toasts" class="docs-sidebar-link" exact-active-class="active"
                  >Toasts 轻提示
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/tooltips" class="docs-sidebar-link" exact-active-class="active">
                  Tooltips 文字提示</RouterLink
                >
              </li>
              <li class="py-1">
                <RouterLink to="/components/tree" class="docs-sidebar-link" exact-active-class="active"
                  >Tree 树形结构
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/components/tree-table" class="docs-sidebar-link" exact-active-class="active"
                  >Tree table 树形表格
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="mb-4">
            <h6 class="fw-bold">Helper Utilities 辅助工具</h6>
            <ul class="list-unstyled">
              <li class="py-1">
                <RouterLink to="/utils/background" class="docs-sidebar-link" exact-active-class="active">
                  Background 背景
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/borders" class="docs-sidebar-link" exact-active-class="active"
                  >Borders 边框
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/colors" class="docs-sidebar-link" exact-active-class="active">
                  Colors 文本颜色
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/color-background" class="docs-sidebar-link" exact-active-class="active">
                  Color &amp; background 文本颜色背景
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/display" class="docs-sidebar-link" exact-active-class="active"
                  >Display 显示属性
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/flex" class="docs-sidebar-link" exact-active-class="active"
                  >Flex 弹性布局
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/float" class="docs-sidebar-link" exact-active-class="active"
                  >Float 浮动
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/focus-ring" class="docs-sidebar-link" exact-active-class="active"
                  >Focus ring 焦点环
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/interactions" class="docs-sidebar-link" exact-active-class="active">
                  Interactions 交互
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/link" class="docs-sidebar-link" exact-active-class="active">
                  Link 链接
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/object-fit" class="docs-sidebar-link" exact-active-class="active">
                  Object fit 对象拟合
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/opacity" class="docs-sidebar-link" exact-active-class="active"
                  >Opacity 透明度
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/overflow" class="docs-sidebar-link" exact-active-class="active"
                  >Overflow 溢出
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/position" class="docs-sidebar-link" exact-active-class="active"
                  >Position 位置
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/ratio" class="docs-sidebar-link" exact-active-class="active"
                  >Ratio 比例
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/shadows" class="docs-sidebar-link" exact-active-class="active"
                  >Shadows 阴影
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/sizing" class="docs-sidebar-link" exact-active-class="active"
                  >Sizing 尺寸规格
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/spacing" class="docs-sidebar-link" exact-active-class="active"
                  >Spacing 间距
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/stacks" class="docs-sidebar-link" exact-active-class="active"
                  >Stacks 堆叠
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/stretched-link" class="docs-sidebar-link" exact-active-class="active">
                  Stretched link 拉伸链接
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/text" class="docs-sidebar-link" exact-active-class="active"
                  >Text 文本
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/vertical-align" class="docs-sidebar-link" exact-active-class="active">
                  Vertical align 垂直对齐
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/vertical-rule" class="docs-sidebar-link" exact-active-class="active">
                  Vertical rule 垂直分割线
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/visibility" class="docs-sidebar-link" exact-active-class="active"
                  >Visibility 可见性
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/visually-hidden" class="docs-sidebar-link" exact-active-class="active">
                  Visually hidden 视觉隐藏
                </RouterLink>
              </li>
              <li class="py-1">
                <RouterLink to="/utils/z-index" class="docs-sidebar-link" exact-active-class="active"
                  >Z-index 层级
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </bv-offcanvas>
      <main class="flex-grow-1 docs-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch,onMounted, onUnmounted } from 'vue';

const navbarRef = ref(null);

function getFontSize() {
  const storedFontSize = localStorage.getItem('font-size');
  if (storedFontSize === null) {
    return 'md';
  }

  return storedFontSize;
}
const fontSize = ref(getFontSize());
watch(
  fontSize,
  (newVal) => {
    if (newVal === 'sm') {
      document.documentElement.style.setProperty('font-size', '14px');
    } else if (newVal === 'md') {
      document.documentElement.style.setProperty('font-size', '16px');
    } else if (newVal === 'lg') {
      document.documentElement.style.setProperty('font-size', '18px');
    }

    localStorage.setItem('font-size', newVal);
  },
  { immediate: true }
);

//主题修改
const linkPrism = document.createElement('link');
linkPrism.id = 'prism-theme';
linkPrism.rel = 'stylesheet';
document.head.appendChild(linkPrism);
function getTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === null) {
    return 'light';
  }

  return storedTheme;
}
const theme = ref(getTheme());
watch(
  theme,
  (newVal) => {
    if (newVal === 'light') {
      linkPrism.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css';
    } else if (newVal === 'dark') {
      linkPrism.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism-okaidia.min.css';
    }

    document.documentElement.setAttribute('data-bs-theme', newVal);
    localStorage.setItem('theme', newVal);
  },
  { immediate: true }
);

function handleThemeChange() {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else if (theme.value === 'dark') {
    theme.value = 'light';
  }
}

import pkg from '../package.json';

const version = pkg.version;


const offcanvasRef = ref(null);
const menuRef = ref(null);

// 判断是否为小屏（使用和 offcanvas-lg 相同的断点）
let smallScreen = window.innerWidth < 992;

function handleViewportChange() {
  smallScreen = window.innerWidth < 992;
}

onMounted(() => {
  menuRef.value.addEventListener('click', function (e) {
    e.preventDefault();
    if (smallScreen) {
      // 找到实际点击的菜单项（向上查找）
      const menuItem = e.target.closest('.docs-sidebar-link');
      offcanvasRef.value.toggle();
    }
  });

  // 添加监听
  window.addEventListener('resize', handleViewportChange);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleViewportChange);
});
</script>
