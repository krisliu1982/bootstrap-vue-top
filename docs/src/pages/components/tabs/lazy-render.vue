<template>
  <bv-tabs tabs-class="nav-tabs">
    <bv-tab-pane label="Home">
      <p class="py-3">
        This is some placeholder content the Home tab’s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
      </p>
    </bv-tab-pane>
    <bv-tab-pane label="Profile" :lazy="true">
      <p class="py-3">
        This is some placeholder content the Profile tab’s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
      </p>
    </bv-tab-pane>
    <bv-tab-pane label="Contact" :lazy="true">
      <p class="py-3">
        This is some placeholder content the Contact tab’s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
      </p>
    </bv-tab-pane>
  </bv-tabs>
</template>
