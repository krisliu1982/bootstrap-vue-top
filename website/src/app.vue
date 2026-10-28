<template>
  <nav class="lg:sticky-top bg-1 bg-gradient bg-90 border-bottom">
    <div class="2xl:container">
      <div class="d-flex align-items-center gap-5" style="height: 3rem;">
        <a href="#" @click.prevent="$router.push('/')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi fg-accent fs-xl" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
        </a>
        <small>{{ version }}</small>
        <div class="ms-auto">
          <div class="d-none lg:d-block">
            <div class="d-flex align-items-center gap-5">
              <a class="theme-inverse text-decoration-none" href="https://getbootstrap.com/" target="_blank"
                >Bootstrap</a
              >
              <a class="theme-inverse text-decoration-none" href="https://cn.vuejs.org/" target="_blank">Vue</a>
              <div class="vr"></div>
              <a class="theme-inverse text-decoration-none" href="https://gitee.com/asdfghjkl012345/bootstrap-vue" target="_blank">Gitee</a>
              <a class="theme-inverse text-decoration-none" href="https://github.com/krisliu1982/bootstrap-vue-top" target="_blank">Github</a>
              <div class="vr"></div>
              <div>
                <a
                  v-menu
                  class="icon-link theme-inverse text-decoration-none"
                  title="文字大小"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <template v-if="fontSize === 'sm'">小字体</template>
                  <template v-else-if="fontSize === 'md'">中字体</template>
                  <template v-else-if="fontSize === 'lg'">大字体</template>
                  <bi-chevron-expand class="small"/>
                </a>
                <div class="menu">
                  <a class="menu-item" href="#" @click.prevent="fontSize = 'sm'">小字体</a>
                  <a class="menu-item" href="#" @click.prevent="fontSize = 'md'">中字体</a>
                  <a class="menu-item" href="#" @click.prevent="fontSize = 'lg'">大字体</a>
                </div>
              </div>
              <div class="vr"></div>
              <a
                href="#"
                class="theme-inverse text-decoration-none"
                title="主题切换"
                @click.prevent="handleThemeChange"
              >
                <bi-sun v-if="theme === 'light'" />
                <bi-moon v-else />
              </a>
            </div>
          </div>
          <div class="lg:d-none">
            <a href="#" class="theme-inverse fs-lg" type="button" @click.prevent="navbarRef.toggle()">
              <bi-three-dots />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

<!--   <bv-offcanvas
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
  </bv-offcanvas> -->

  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue';

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

import { useHead } from '@unhead/vue'
useHead({
  titleTemplate: (title) => title ? `${title} - Bootstrap` : 'Bootstrap v6.0'
})
</script>
