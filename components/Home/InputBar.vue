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
    <b-form-group class="d-flex flex-row">
      <b-form-input
        v-model="target"
        :placeholder="defaultUrl"
        aria-describedby="button-render"
      />
      <b-button
        id="button-render"
        :variant="buttonVariant"
        type="submit"
        :to="url"
      >
        <icon name="bi:arrow-right" />
      </b-button>
    </b-form-group>
  </form>
</template>
