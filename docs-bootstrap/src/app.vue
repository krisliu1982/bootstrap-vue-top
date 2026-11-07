<template>
  <nav class="sticky-lg-top bg-primary-subtle bg-gradient">
    <div class="container-xxl">
      <div class="d-flex align-items-center gap-2" style="height: 3rem">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi fs-3" style="color: var(--bs-indigo)" viewBox="0 0 16 16">
          <path
            d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"
          />
          <path
            d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"
          />
        </svg>
        <small>{{ version }}</small>
        <div class="ms-auto">
          <div class="d-none d-lg-block">
            <div class="d-flex align-items-center gap-3">
              <a class="link-body-emphasis text-decoration-none fw-bold" href="/docs-bootstrap/5.3/">中文文档</a>
              <a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/docs/5.3/examples/" target="_blank" rel="noopener">示例</a>
              <a class="link-body-emphasis text-decoration-none" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener">图标</a>
              <a class="link-body-emphasis text-decoration-none" href="https://blog.getbootstrap.com/" target="_blank" rel="noopener">博客</a>
              <div class="vr"></div>
              <a class="link-body-emphasis text-decoration-none" title="github" href="https://github.com/twbs" target="_blank" rel="noopener"><bi-github /></a>
              <a class="link-body-emphasis text-decoration-none" title="twitter-x" href="https://x.com/getbootstrap" target="_blank" rel="noopener"><bi-twitter-x /></a>
              <a class="link-body-emphasis text-decoration-none" title="open collective" href="https://opencollective.com/bootstrap" target="_blank" rel="noopener"
                ><bi-opencollective
              /></a>
              <div class="vr"></div>
              <div class="dropdown">
                <a data-bs-toggle="dropdown" class="link-body-emphasis text-decoration-none dropdown-toggle" title="布局大小" href="#" role="button" aria-expanded="false">
                  <bi-fonts />
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('sm')" :disabled="fontSize == 'sm'">小型布局</button></li>
                  <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('md')" :disabled="fontSize == 'md'">中型布局</button></li>
                  <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('lg')" :disabled="fontSize == 'lg'">大型布局</button></li>
                </ul>
              </div>
              <a v-if="theme === 'light'" href="#" class="link-body-emphasis text-decoration-none" title="切换到暗黑" @click.prevent="handleThemeChange('dark')">
                <bi-sun/>
              </a>
              <a v-else href="#" class="link-body-emphasis text-decoration-none" title="切换到明亮" @click.prevent="handleThemeChange('light')">
                <bi-moon  />
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

  <!-- <bv-offcanvas
    ref="navbarRef"
    title="BootstrapVue"
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
-->

  <div class="container-xxl">
    <div class="bd-layout">
      <!--       <bv-offcanvas
        ref="offcanvasRef"
        title="文档菜单"
        offcanvas-class="offcanvas-lg offcanvas-start flex-shrink-0 bd-sidebar"
      > -->
      <aside class="bd-sidebar">
        <nav ref="menuRef">
          <div v-for="t in data.sidebar">
            <template v-if="t.pages">
              <div class="px-2 mb-1">
                <strong class="me-2">{{ t['zh-CN'] }}</strong>
                <template v-if="t.slug === 'getting-started'">
                  <bi-book-half style="color: var(--bs-indigo)" />
                </template>
                <template v-else-if="t.slug === 'customize'">
                  <bi-palette2 style="color: var(--bs-pink)" />
                </template>
                <template v-else-if="t.slug === 'layout'">
                  <bi-grid-fill style="color: var(--bs-teal)" />
                </template>
                <template v-else-if="t.slug === 'content'">
                  <bi-file-earmark-richtext style="color: var(--bs-gray)" />
                </template>
                <template v-else-if="t.slug === 'forms'">
                  <bi-ui-radios style="color: var(--bs-blue)" />
                </template>
                <template v-else-if="t.slug === 'components'">
                  <bi-menu-button-wide-fill style="color: var(--bs-cyan)" />
                </template>
                <template v-else-if="t.slug === 'helpers'">
                  <bi-magic style="color: var(--bs-orange)" />
                </template>
                <template v-else-if="t.slug === 'utilities'">
                  <bi-braces-asterisk style="color: var(--bs-red)" />
                </template>
                <template v-else-if="t.slug === 'extend'">
                  <bi-tools style="color: var(--bs-blue)" />
                </template>
                <template v-else-if="t.slug === 'about'">
                  <bi-globe2 style="color: var(--bs-indigo)" />
                </template>
              </div>
              <ul>
                <li v-for="tt in t.pages">
                  <RouterLink :to="`/${t.slug}/${tt.slug}`" class="bd-sidebar-link" exact-active-class="active">
                    <span class="small"
                      >{{ tt['zh-CN'] }} <small>{{ tt.title }}</small></span
                    >
                  </RouterLink>
                </li>
              </ul>
            </template>
            <template v-else>
              <hr />
              <RouterLink :to="`/${t.slug}`" class="bd-sidebar-link" exact-active-class="active">
                <span class="small"
                  >{{ t['zh-CN'] }} <small>{{ t.title }}</small></span
                >
              </RouterLink>
            </template>
          </div>
        </nav>
      </aside>
      <!--       </bv-offcanvas> -->
      <main class="bd-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import data from '@/data/data.js';


import pkg from '../package.json';
const version = pkg.version;


function getFontSize() {
  const storedFontSize = localStorage.getItem('font-size');
  if (storedFontSize === null) {
    return 'md';
  }

  return storedFontSize;
}
const fontSize = ref(getFontSize());
function handleFontSizeChange(_fontSize) {
  fontSize.value = _fontSize;
    if (_fontSize === 'sm') {
      document.documentElement.style.setProperty('font-size', '14px');
    } else if (_fontSize === 'md') {
      document.documentElement.style.setProperty('font-size', '16px');
    } else if (_fontSize === 'lg') {
      document.documentElement.style.setProperty('font-size', '18px');
    }

    localStorage.setItem('font-size', _fontSize);
}


//主题修改
function getTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === null) {
    return 'light';
  }

  return storedTheme;
}
const theme = ref(getTheme());

function handleThemeChange(_theme) {
    theme.value = _theme;

  document.documentElement.setAttribute('data-bs-theme', _theme);

  localStorage.setItem('theme', _theme);

}

onMounted(()=>{
  handleFontSizeChange(getFontSize())
  handleThemeChange(getTheme())
})

const navbarRef = ref(null);

const offcanvasRef = ref(null);
const menuRef = ref(null);

// 判断是否为小屏（使用和 offcanvas-lg 相同的断点）
let smallScreen = window.innerWidth < 992;

function handleViewportChange() {
  smallScreen = window.innerWidth < 992;
}

/*onMounted(() => {
  menuRef.value.addEventListener('click', function (e) {
    e.preventDefault();
    if (smallScreen) {
      // 找到实际点击的菜单项（向上查找）
      const menuItem = e.target.closest('.bd-sidebar-link');
      offcanvasRef.value.toggle();
    }
  });

  // 添加监听
  window.addEventListener('resize', handleViewportChange);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleViewportChange);
});*/
</script>
