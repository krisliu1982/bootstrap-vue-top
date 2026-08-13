<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom border-body d-none d-lg-block">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#" @click.prevent="$router.push('/')">
        <img src="/favicon.svg" alt="bootstrap-vue" width="18" height="18" style="scale: calc(1.5)"
          class="me-3" /><span>boostrap-vue</span></a>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink to="/docs" class="nav-link" active-class="active fw-bolder">文档</RouterLink>
        </li>
        <li class="nav-item"><a class="nav-link" href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
        <li class="nav-item"><a class="nav-link" href="https://cn.vuejs.org/" target="_blank">Vue</a></li>
        <li class="nav-item"><a class="nav-link" href="https://github.com/jquense/yup" target="_blank">Yup</a></li>
        <li class="nav-item dropdown">
          <a v-dropdown class="nav-link dropdown-toggle" title="文字大小" href="#" role="button" aria-expanded="false">
            <template v-if="fontSize === 'sm'">小型文字</template>
            <template v-else-if="fontSize === 'md'">中型文字</template>
            <template v-else-if="fontSize === 'lg'">大型文字</template>
          </a>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button" @click="fontSize = 'sm'">小型文字</button></li>
            <li><button class="dropdown-item" type="button" @click="fontSize = 'md'">中型文字</button></li>
            <li><button class="dropdown-item" type="button" @click="fontSize = 'lg'">大型文字</button></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" title="主题切换" @click.prevent="handleThemeChange">
            <bi-sun v-if="theme === 'light'" />
            <bi-moon v-else />
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!--移动端导航-->
  <nav class="navbar sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#" @click.prevent="$router.push('/')">
        <img src="/favicon.svg" alt="bootstrap-vue" width="18" height="18" style="scale: calc(1.5)"
          class="me-3" /><span>boostrap-vue</span></a>
      <button class="navbar-toggler" type="button" @click="navbarSupportedContentRef.toggle()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <bv-offcanvas ref="navbarSupportedContentRef" title="bootstrap-vue" position="end">
        <div class="list-group list-group-flush">
          <RouterLink to="/docs" @click="navbarSupportedContentRef.toggle()"
            class="list-group-item list-group-item-action">文档</RouterLink>
          <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/"
            target="_blank">Bootstrap</a>
          <a class="list-group-item list-group-item-action" href="https://cn.vuejs.org/" target="_blank">Vue</a>
          <a class="list-group-item list-group-item-action" href="https://github.com/jquense/yup"
            target="_blank">Yup</a>
          <a href="#" class="list-group-item list-group-item-action" title="主题切换" @click.prevent="handleThemeChange">
            <bi-sun v-if="theme === 'light'" />
            <bi-moon v-else />
          </a>
        </div>
      </bv-offcanvas>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue';

const navbarSupportedContentRef = ref(null);

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
