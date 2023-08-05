<script setup lang="ts">
const theme = useTheme()
const target = ref('')
const url = computed(() => target.value.length === 0 ? 'Skyost/Beerstory/master/docs/privacy_policy.md' : `/${target.value}`)
const goToUrl = () => {
  navigateTo(url.value)
}
</script>

<template>
  <form @submit.prevent="goToUrl">
    <ski-input-group>
      <ski-form-control
        v-model="target"
        placeholder="Skyost/Beerstory/master/docs/privacy_policy.md"
        aria-describedby="button-render"
      />
      <ski-button id="button-render" :variant="theme === 'dark' ? 'light' : 'primary'" type="submit" :to="url">
        <ski-icon icon="arrow-right" />
      </ski-button>
    </ski-input-group>
  </form>
</template>
