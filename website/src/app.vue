<template>
  <nav class="sticky-top bg-body-tertiary border-bottom border-body d-none d-lg-block">
    <div class="container">
            <div class="d-flex justify-content-between py-2">
      <a class="link-body-emphasis text-decoration-none d-flex align-items-center" href="#" @click.prevent="$router.push('/')">
        <img src="/favicon.svg" alt="bootstrap-vue" width="24" height="24"
          class="me-2" /><span class="fw-bold fs-5">boostrap-vue</span></a>
        <div class="d-flex align-items-center gap-3">
          <RouterLink to="/docs" class="link-body-emphasis text-decoration-none" active-class="fw-bold">文档</RouterLink>
          <a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
          <a class="link-body-emphasis text-decoration-none" href="https://cn.vuejs.org/" target="_blank">Vue</a>
          <div class="dropdown">
          <a v-dropdown class="link-body-emphasis text-decoration-none dropdown-toggle" title="文字大小" href="#" role="button" aria-expanded="false">
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
        <a href="#" class="link-body-emphasis text-decoration-none" title="主题切换" @click.prevent="handleThemeChange">
            <bi-sun v-if="theme === 'light'" />
            <bi-moon v-else />
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!--移动端导航-->
  <nav class="sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
    <div class="container">
      <div class="d-flex justify-content-between py-2">
      <span></span>
      <a class="navbar-brand d-flex align-items-center" href="#" @click.prevent="$router.push('/')">
        <img src="/favicon.svg" alt="bootstrap-vue" width="24" height="24"/></a>
      <a href="#" class="link-body-emphasis fs-4" type="button" @click.prevent="navbarRef.toggle()">
        <bi-three-dots/>
      </a>
      </div>
      <bv-offcanvas ref="navbarRef" title="bootstrap-vue" position="end" offcanvas-style="--bs-offcanvas-width:75vw;">
        <div class="list-group list-group-flush" @click="navbarRef.toggle()">
          <RouterLink to="/docs" class="list-group-item list-group-item-action">文档</RouterLink>
          <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/"
            target="_blank">Bootstrap</a>
          <a class="list-group-item list-group-item-action" href="https://cn.vuejs.org/" target="_blank">Vue</a>
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

const navbarRef = ref(null);

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
