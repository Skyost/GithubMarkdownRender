<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <b-navbar-brand to="/">
    <img
      class="logo"
      src="/images/logo.svg"
      alt="Logo"
    > {{ title }}
  </b-navbar-brand>
</template>

<style lang="scss" scoped>
.logo {
  height: 1.5em;
  vertical-align: -0.4em;
  margin-right: 0.3em;

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
}

.navbar-brand {
  margin-left: var(--bs-navbar-brand-margin-end);
}
</style>
