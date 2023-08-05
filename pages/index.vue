<script setup lang="ts">
import InputBar from '~/components/Home/InputBar.vue'
import siteMeta from '~/siteMeta'
</script>

<template>
  <div class="h-100 d-flex justify-content-center">
    <div class="align-self-center text-center">
      <page-head title="Home" />
      <img class="logo" src="/images/logo.svg" alt="Logo">
      <h1 class="mb-4">{{ siteMeta.name }}</h1>
      <input-bar />
      <p class="mt-2 mb-0">
        💡 <strong>Tip.</strong> You can type <code>Name/Repo</code> so that the renderer will point to the given
        repository <code>README.md</code> from the <code>main</code> branch !
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 120px;

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
}
</style>
