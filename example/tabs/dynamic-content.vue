<template>
        <bv-tabs tabs-class="nav-tabs" @tab-shown="handleShown">
          <bv-tab-pane label="Home">
            <p class="py-3">
              This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility
              and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
          <bv-tab-pane label="Profile">
            <div class="py-3">
              <p v-if="data !== null">
                {{ data.content }}
              </p>
              <div v-else class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </bv-tab-pane>
          <bv-tab-pane label="Contact">
            <p class="py-3">
              This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle
              the visibility of this one for the next. The tab JavaScript swaps classes to control the content
              visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </p>
          </bv-tab-pane>
        </bv-tabs>
        </template>

        <script setup>
import { ref } from 'vue';

const data = ref(null);
function handleShown(index) {
  if (data.value === null && index === 1) {
    setTimeout(() => {
      data.value = {
        content: 'Woo-hoo, you’re reading this text in a tab content!'
      };
    }, 1000);
  }
}
</script>
