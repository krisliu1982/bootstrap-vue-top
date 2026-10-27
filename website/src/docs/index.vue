<template>
  <!--   <div class="sticky-top bg-body-tertiary border-bottom border-body d-lg-none">
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
  </div> -->

  <div class="2xl:container">
    <div class="d-flex gap-7 mt-5">
      <!--       <bv-offcanvas
        ref="offcanvasRef"
        title="文档菜单"
        offcanvas-class="offcanvas-lg offcanvas-start flex-shrink-0 docs-sidebar"
      > -->
      <aside class="docs-sidebar">
        <nav ref="menuRef">
          <div v-for="t in data.sidebar">
            <div class="d-flex align-items-center gap-2 mb-1">
              <div class="bg-accent rounded-circle" style="width: 0.375rem;height: 0.375rem;"></div>
              <div class="fw-bold">
              <span class="fs-sm">{{ t['zh-CN']}}</span>
              <span class="fg-secondary fs-xs ms-2">{{ t.title }}</span>
              </div>
            </div>
            <ul v-if="t.pages">
              <li v-for="tt in t.pages">
                <template v-if="tt.title">
                  <RouterLink :to="`/docs/${t.slug}/${tt.slug}`" class="docs-sidebar-link" exact-active-class="active">
                    <span class="fs-sm">{{ tt['zh-CN']}}</span>
                    <span class="ms-2 fg-secondary fs-xs">{{ tt.title }}</span>
                  </RouterLink>
                </template>
                <template v-if="tt.group">
            <div class="d-flex align-items-center gap-2 mt-2 mb-1">
              <div class="bg-transparent" style="width: 0.375rem;height: 0.375rem;"></div>
                            <div class="fw-bold">
              <span class="fs-sm">{{ tt['zh-CN']}}</span>
              <span class="fg-secondary fs-xs ms-2">{{ tt.group }}</span>
              </div>
            </div>
                  <ul>
                    <li v-for="ttt in tt.pages">
                      <RouterLink :to="`/docs/${t.slug}/${ttt.slug}`" class="docs-sidebar-link"
                        exact-active-class="active">
                                            <span class="fs-sm">{{ ttt['zh-CN']}}</span>
                    <span class="ms-2 fg-secondary fs-xs">{{ ttt.title }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      <!--       </bv-offcanvas> -->
      <main class="docs-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted, onUnmounted } from 'vue';
import data from '@data/data.js'
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
      const menuItem = e.target.closest('.docs-sidebar-link');
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
