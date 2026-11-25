<template>
  <nav class="sticky-lg-top bg-primary-subtle bg-gradient">
    <div class="container-xxl">
      <div class="d-flex align-items-center" style="height: 3rem">
        <a href="/"><img src="/favicon.svg" alt="bootstrap-vue-top" width="24" height="24" /></a>
        <small class="ms-2">v5.3</small>
        <div class="d-none d-lg-block">
          <div class="d-flex align-items-center gap-3">
            <a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/"
              target="_blank">Bootstrap</a>
            <a class="link-body-emphasis text-decoration-none" href="https://cn.vuejs.org/" target="_blank">Vue</a>
            <div class="vr"></div>
            <a class="link-body-emphasis text-decoration-none" href="https://gitee.com/asdfghjkl012345/bootstrap-vue"
              target="_blank">Gitee</a>
            <a class="link-body-emphasis text-decoration-none" href="https://github.com/krisliu1982/bootstrap-vue-top"
              target="_blank">Github</a>
            <div class="vr"></div>
            <div class="dropdown">
              <a data-bs-toggle="dropdown" class="link-body-emphasis text-decoration-none dropdown-toggle" title="布局大小"
                href="#" role="button" aria-expanded="false">
                <template v-if="fontSize === 'sm'">小型布局</template>
                <template v-else-if="fontSize === 'md'">中型布局</template>
                <template v-else-if="fontSize === 'lg'">大型布局</template>
              </a>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('sm')"
                    :disabled="fontSize === 'sm'">小型布局</button></li>
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('md')"
                    :disabled="fontSize === 'md'">中型布局</button></li>
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('lg')"
                    :disabled="fontSize === 'lg'">大型布局</button></li>
              </ul>
            </div>
            <a v-if="theme === 'light'" href="#" role="button" class="link-body-emphasis text-decoration-none"
              title="切换到暗黑" @click.prevent="handleThemeChange('dark')">
              <bi-sun />
            </a>
            <a v-else href="#" role="button" class="link-body-emphasis text-decoration-none" title="切换到明亮"
              @click.prevent="handleThemeChange('light')">
              <bi-moon />
            </a>
          </div>
        </div>
        <div class="d-lg-none">
          <a href="#" role="button" class="link-body-emphasis fs-5" @click.prevent="offcanvasNavRef.toggle()">
            <bi-three-dots />
          </a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container-xxl">
    <div class="docs-layout">
      <bv-offcanvas ref="offcanvasSidebarRef" title="文档菜单" offcanvas-class="offcanvas-lg offcanvas-start docs-sidebar" offcanvas-style="--bs-offcanvas-width: 75vw" >
        <ul ref="sidebarRef" class="list-unstyled">
          <li v-for="t in data.sidebar" class="mb-4">
            <h6 class="fw-bold">{{ t['zh-CN'] }}</h6>
            <ul class="list-unstyled">
              <li v-for="tt in t.pages" class="py-1">
                <RouterLink :to="`/${t.slug}/${tt.slug}`" class="docs-sidebar-link" exact-active-class="active">{{
                  tt.title }} {{ tt['zh-CN'] }}</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </bv-offcanvas>
      <main class="docs-main">
        <router-view />
      </main>
    </div>
  </div>

  <bv-offcanvas ref="offcanvasNavRef" title="bootstrap-vue-top" offcanvas-class="offcanvas offcanvas-end"
    offcanvas-style="--bs-offcanvas-width:75vw;">
    <div class="list-group list-group-flush" @click="offcanvasNavRef.toggle()">
      <RouterLink to="/docs" class="list-group-item list-group-item-action">bootstrap-vue-top v5.3</RouterLink>
      <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
      <a class="list-group-item list-group-item-action" href="https://cn.vuejs.org/" target="_blank">Vue</a>
    </div>
  </bv-offcanvas>

  <div class="sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
    <div class="container-xxl">
      <div class="d-flex justify-content-between align-items-center py-2">
        <a href="#" role="button" class="link-body-emphasis text-decoration-none"
          @click.prevent="offcanvasSidebarRef.toggle()"><bi-list /></a>
        <div class="dropdown" id="dropdown-toc">
          <a href="#" role="button" class="link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown" aria-expanded="false">本页目录</a>
          <nav class="dropdown-menu" style="max-height: 75vh; overflow-y: auto" id="dropdown-menu-toc"></nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import data from '@/data/data.js';

handleFontSizeChange(getFontSize());
handleThemeChange(getTheme());

function getFontSize() {
  const storedFontSize = localStorage.getItem('font-size');
  if (storedFontSize === null) {
    return 'md';
  }

  return storedFontSize;
}
const fontSize = ref(null);
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
const theme = ref(null);

function handleThemeChange(_theme) {
  theme.value = _theme;

  document.documentElement.setAttribute('data-bs-theme', _theme);
  document.getElementById('pagefind').setAttribute('data-pf-theme', _theme);

  localStorage.setItem('theme', _theme);
}

const offcanvasNavRef = ref(null);
const offcanvasSidebarRef = ref(null);
const sidebarRef = ref(null)
onMounted(() => {
  sidebarRef.value.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.innerWidth < 992) {
      offcanvasSidebarRef.toggle();
    }
  });
});
</script>
