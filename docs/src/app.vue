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
            <input type="radio" class="btn-check" id="font-size-s" value="s" v-model="size" />
            <label class="btn btn-outline-secondary" for="font-size-s">小</label>

            <input type="radio" class="btn-check" id="font-size-m" value="m" v-model="size" />
            <label class="btn btn-outline-secondary" for="font-size-m">中</label>

            <input type="radio" class="btn-check" id="font-size-l" value="l" v-model="size" />
            <label class="btn btn-outline-secondary" for="font-size-l">大</label>
          </div>
        </div>
        <div>
          <a href="#" class="link-body-emphasis" title="暗黑模式切换" @click.prevent="toggleTheme">
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

const size = ref('m');

watch(
  size,
  (newVal) => {
    if (newVal === 's') {
      document.documentElement.style.setProperty('font-size', '14px');
    } else if (newVal === 'm') {
      document.documentElement.style.setProperty('font-size', '16px');
    } else if (newVal === 'l') {
      document.documentElement.style.setProperty('font-size', '18px');
    }
  },
  { immediate: true }
);

// 初始加载一个默认主题
const link = document.createElement('link');
link.id = 'prism-theme';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css';
document.head.appendChild(link);

const theme = ref('light');
function toggleTheme() {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else if (theme.value === 'dark') {
    theme.value = 'light';
  } else {
    theme.value = 'light';
  }

  document.documentElement.setAttribute('data-bs-theme', theme.value);

  const themeLink = document.getElementById('prism-theme');
  if (theme.value === 'light') {
    themeLink.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css';
  } else if (theme.value === 'dark') {
    themeLink.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism-okaidia.min.css';
  }
}
</script>
