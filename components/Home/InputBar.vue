<script setup lang="ts">
const theme = useTheme()

const target = ref('')
const defaultUrl = 'Skyost/Beerstory/master/docs/privacy_policy.md'

const buttonVariant = computed(() => theme.value === 'light' ? 'primary' : 'light')
const url = computed(() => target.value.length === 0 ? `/${defaultUrl}` : `/${target.value}`)
const goToUrl = () => navigateTo(url.value)
</script>

<template>
  <form @submit.prevent="goToUrl">
    <ski-input-group>
      <ski-form-control
        v-model="target"
        :placeholder="defaultUrl"
        aria-describedby="button-render"
      />
      <ski-button id="button-render" :variant="buttonVariant" type="submit" :to="url">
        <ski-icon icon="arrow-right" />
      </ski-button>
    </ski-input-group>
  </form>
</template>
