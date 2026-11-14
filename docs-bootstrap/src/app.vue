<template>
  <nav class="sticky-lg-top bg-primary-subtle bg-gradient">
    <div class="container-xxl">
      <div class="d-flex align-items-center" style="height: 3rem">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi fs-3"
          style="color: var(--bs-indigo)" viewBox="0 0 16 16">
          <path
            d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
          <path
            d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
        </svg>
        <small class="ms-2">v5.3</small>
        <div id="pagefind" style="font-size: 0" class="ms-auto me-3">
          <pagefind-modal-trigger></pagefind-modal-trigger>
          <pagefind-modal></pagefind-modal>
        </div>
        <div class="d-none d-lg-block">
          <div class="d-flex align-items-center gap-3">
            <a class="link-body-emphasis text-decoration-none" href="/">中文文档</a>
            <a class="link-body-emphasis text-decoration-none" href="https://getbootstrap.com/docs/5.3/examples/"
              target="_blank" rel="noopener">示例</a>
            <a class="link-body-emphasis text-decoration-none" href="https://icons.getbootstrap.com/" target="_blank"
              rel="noopener">图标</a>
            <a class="link-body-emphasis text-decoration-none" href="https://blog.getbootstrap.com/" target="_blank"
              rel="noopener">博客</a>
            <div class="vr"></div>
            <a class="link-body-emphasis text-decoration-none" title="github" href="https://github.com/twbs"
              target="_blank" rel="noopener"><bi-github /></a>
            <a class="link-body-emphasis text-decoration-none" title="twitter-x" href="https://x.com/getbootstrap"
              target="_blank" rel="noopener"><bi-twitter-x /></a>
            <a class="link-body-emphasis text-decoration-none" title="open collective"
              href="https://opencollective.com/bootstrap" target="_blank" rel="noopener"><bi-opencollective /></a>
            <div class="vr"></div>
            <div class="dropdown">
              <a data-bs-toggle="dropdown" class="link-body-emphasis text-decoration-none dropdown-toggle" title="布局大小"
                href="#" role="button" aria-expanded="false">
                <bi-fonts />
              </a>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('sm')"
                    :disabled="fontSize == 'sm'">小型布局</button></li>
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('md')"
                    :disabled="fontSize == 'md'">中型布局</button></li>
                <li><button class="dropdown-item" type="button" @click="handleFontSizeChange('lg')"
                    :disabled="fontSize == 'lg'">大型布局</button></li>
              </ul>
            </div>
            <a v-if="theme === 'light'" href="#" class="link-body-emphasis text-decoration-none" title="切换到暗黑"
              @click.prevent="handleThemeChange('dark')">
              <bi-sun />
            </a>
            <a v-else href="#" class="link-body-emphasis text-decoration-none" title="切换到明亮"
              @click.prevent="handleThemeChange('light')">
              <bi-moon />
            </a>
          </div>
        </div>
        <div class="d-lg-none">
          <a href="#" class="link-body-emphasis fs-5" type="button" @click.prevent="offcanvasNav.toggle()">
            <bi-three-dots />
          </a>
        </div>
      </div>
    </div>
  </nav>

  <div class="offcanvas offcanvas-end" tabindex="-1" style="--bs-offcanvas-width: 75vw" id="offcanvasNav"
    aria-labelledby="offcanvasNavLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasNavLabel">bootstrap-vue-top</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNav"
        aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="list-group list-group-flush" @click="offcanvasNav.toggle()">
        <RouterLink to="/" class="list-group-item list-group-item-action">文档</RouterLink>
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/">Bootstrap 官网</a>
        <a v-if="theme === 'light'" href="#" class="list-group-item list-group-item-action"
          @click.prevent="handleThemeChange('dark')">
          <bi-sun />
        </a>
        <a v-else href="#" class="list-group-item list-group-item-action" @click.prevent="handleThemeChange('light')">
          <bi-moon />
        </a>
      </div>
    </div>
  </div>

  <div class="sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
    <div class="container-xxl">
      <div class="d-flex justify-content-between align-items-center py-2">
        <a href="#" class="link-body-emphasis text-decoration-none" @click="offcanvasSidebar.toggle()"><bi-list />
          菜单</a>
        <div class="dropdown" id="dropdown-toc">
          <a href="#" class="link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">本页目录</a>
          <nav class="dropdown-menu" style="max-height: 75vh; overflow-y: auto" id="dropdown-menu-toc"></nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container-xxl">
    <div class="bd-layout">
      <aside class="offcanvas-lg offcanvas-start bd-sidebar" style="--bs-offcanvas-width: 75vw" tabindex="-1"
        id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-body">
          <nav id="menuSidebar">
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
                      <span class="small">{{ tt['zh-CN'] }} <small>{{ tt.title }}</small></span>
                    </RouterLink>
                  </li>
                </ul>
              </template>
              <template v-else>
                <hr />
                <RouterLink :to="`/${t.slug}`" class="bd-sidebar-link" exact-active-class="active">
                  <span class="small">{{ t['zh-CN'] }} <small>{{ t.title }}</small></span>
                </RouterLink>
              </template>
            </div>
          </nav>
        </div>
      </aside>
      <main class="bd-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import data from '@/data/data.js';

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

onMounted(() => {
  handleFontSizeChange(getFontSize());
  handleThemeChange(getTheme());
});

let offcanvasNav = null;
let offcanvasSidebar = null;
onMounted(() => {
  import('bootstrap').then((bootstrap) => {
    offcanvasNav = new bootstrap.Offcanvas('#offcanvasNav');
    offcanvasSidebar = new bootstrap.Offcanvas('#offcanvasSidebar');
    document.getElementById('menuSidebar').addEventListener('click', function (e) {
      e.preventDefault();
      if (window.innerWidth < 992) {
        offcanvasSidebar.toggle();
      }
    });
  });

  const dropdown = document.getElementById('dropdown-toc');
  dropdown.addEventListener('show.bs.dropdown', (event) => {
    if (document.querySelector('nav.bd-toc>ul')) {
      document.getElementById('dropdown-menu-toc').appendChild(document.querySelector('nav.bd-toc>ul'));
    }
  });
  dropdown.addEventListener('hide.bs.dropdown', (event) => {
    document.querySelector('nav.bd-toc').appendChild(document.querySelector('#dropdown-menu-toc>ul'));
  });
});

import '@pagefind/component-ui/css';
onMounted(async () => {
  try {
    await import('@pagefind/component-ui');
  } catch (e) {
    console.warn('Pagefind UI 未加载', e);
  }
});
</script>
