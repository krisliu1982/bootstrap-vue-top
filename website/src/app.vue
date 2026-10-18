<template>
  <nav class="sticky-lg-top bg-primary-subtle bg-gradient">
    <div class="container">
      <div class="d-flex align-items-center gap-2" style="height: 3rem">
        <a class="link-body-emphasis text-decoration-none" href="#" @click.prevent="$router.push('/')">
          <img src="/favicon.svg" alt="BootstrapVue" width="28" height="28"
        /></a>
        <span class="badge bg-body text-body" style="--bs-badge-font-weight: 500">{{ version }}</span>
        <div class="ms-auto">
          <div class="d-none d-lg-block">
            <div class="d-flex align-items-center gap-3">
              <RouterLink to="/docs" class="link-body-emphasis text-decoration-none" active-class="fw-bold"
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
                  <template v-if="fontSize === 'sm'">小型文字</template>
                  <template v-else-if="fontSize === 'md'">中型文字</template>
                  <template v-else-if="fontSize === 'lg'">大型文字</template>
                </a>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'sm'">小型文字</button></li>
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'md'">中型文字</button></li>
                  <li><button class="dropdown-item" type="button" @click="fontSize = 'lg'">大型文字</button></li>
                </ul>
              </div>
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
</script>
