<script setup lang="ts">
const theme = useTheme()
</script>

<template>
  <div class="page-layout">
    <Html :data-bs-theme="theme" />
    <nuxt-loading-indicator :color="theme === 'light' ? 'black' : 'white'" />
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
