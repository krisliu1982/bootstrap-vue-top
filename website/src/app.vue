<template>
  <nav class="navbar sticky-top navbar-expand-md bg-body-tertiary border-bottom border-body">
    <div class="container-xxl">
      <a class="navbar-brand d-flex align-items-center" href="#" @click.prevent="$router.push('/')">
        <img src="/favicon.svg" alt="Bootstrap" width="18" height="18" style="scale: calc(1.5)" class="me-3" /><span
          >BoostrapVue</span
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        v-collapse
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav ms-auto me-0 me-md-3 mb-3 mb-md-0">
          <RouterLink to="/docs" class="nav-link" active-class="active fw-bolder">文档</RouterLink>
          <a class="nav-link" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
          <a class="nav-link" href="https://cn.vuejs.org/" target="_blank">Vue</a>
          <a class="nav-link" href="https://github.com/jquense/yup" target="_blank">Yup</a>
        </div>
        <div class="me-0 me-md-3 mb-3 mb-md-0">
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" id="font-size-sm" value="sm" v-model="fontSize" />
            <label class="btn btn-outline-secondary" for="font-size-sm">小</label>

            <input type="radio" class="btn-check" id="font-size-md" value="md" v-model="fontSize" />
            <label class="btn btn-outline-secondary" for="font-size-md">中</label>

            <input type="radio" class="btn-check" id="font-size-lg" value="lg" v-model="fontSize" />
            <label class="btn btn-outline-secondary" for="font-size-lg">大</label>
          </div>
        </div>
        <div>
          <a href="#" class="link-body-emphasis" title="主题切换" @click.prevent="handleThemeChange">
            <bi-sun v-if="theme === 'light'" />
            <bi-moon v-else />
          </a>
        </div>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue';

//字体大小修改
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
</script>
