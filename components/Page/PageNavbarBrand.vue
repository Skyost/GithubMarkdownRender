<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: null
  }
})
</script>

<template>
  <ski-navbar-brand>
    <img class="logo" src="/images/logo.svg" alt="Logo">
    <nuxt-link v-if="title" class="navbar-brand" to="/">{{ title }}</nuxt-link>
  </ski-navbar-brand>
</template>

<style lang="scss" scoped>
.logo {
  height: 1.5em;
  vertical-align: -0.4em;

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
}

.navbar-brand {
  margin-left: var(--bs-navbar-brand-margin-end);
}
</style>
