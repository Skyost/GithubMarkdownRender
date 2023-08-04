<script setup lang="ts">
const theme = ref('light')

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    theme.value = event.matches ? 'dark' : 'light'
  })
})
</script>

<template>
  <Html :data-bs-theme="theme" />
</template>
