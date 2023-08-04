<template>
  <form @submit.prevent="goToUrl">
    <ski-input-group>
      <ski-form-control
        v-model="target"
        placeholder="Skyost/Beerstory/master/docs/privacy_policy.md"
        aria-describedby="button-render-light"
      />
      <ski-button id="button-render-light" type="submit" :to="url">
        <ski-icon icon="arrow-right" />
      </ski-button>
      <ski-button id="button-render-dark" variant="light" type="submit" :to="url">
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

<style lang="scss">
#button-render-light {
  @media (prefers-color-scheme: dark) {
    display: none;
  }
}

#button-render-dark {
  @media (prefers-color-scheme: light) {
    display: none;
  }
}
</style>
