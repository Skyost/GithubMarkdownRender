<template>
  <div class="page-layout">
    <nuxt-loading-indicator color="#000000" />
    <toggle-bootstrap-dark-mode />
    <page-navbar />
    <page-content class="page-content">
      <slot />
    </page-content>
    <page-about-modal />
  </div>
</template>

<style lang="scss" scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
}

.page-content {
  flex-grow: 1;
}
</style>
