<template>
  <form @submit.prevent="goToUrl">
    <ski-input-group>
      <ski-form-control
        v-model="target"
        placeholder="Skyost/Beerstory/master/docs/privacy_policy.md"
        aria-describedby="button-render"
      />
      <ski-button id="button-render" type="submit" :to="url">
        <ski-icon icon="arrow-right" />
      </ski-button>
    </ski-input-group>
  </form>
</template>

<script>
export default {
  data () {
    return {
      target: ''
    }
  },
  computed: {
    url () {
      return this.target === null || this.target.length === 0 ? 'Skyost/Beerstory/master/docs/privacy_policy.md' : `/${this.target}`
    }
  },
  methods: {
    goToUrl () {
      navigateTo(this.url)
    }
  }
}
</script>
