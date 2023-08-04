<template>
  <ski-container class="page-content">
    <slot />
  </ski-container>
</template>

<script>
import { SkiContainer } from 'skimple-components'

export default {
  components: { SkiContainer }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
