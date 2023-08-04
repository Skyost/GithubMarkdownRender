<script setup lang="ts">
const siteName = useSiteName()
const githubUrl = useSiteGithubUrl()
</script>

<template>
  <ski-modal id="page-about-modal" title="About" size="lg">
    <p>
      <strong>{{ siteName }}</strong> is a small utility that allows to render a given Markdown file hosted on Github.
      It's been built using <a href="https://nuxt.com">Nuxt</a> and <a href="https://marked.js.org/">Marked</a>.
      I created it to display my app privacy policies, as Google recently banned those that were in PDF format.
    </p>
    <p>
      If you're interested, feel free to check out the source code on
      <a :href="githubUrl">Github</a>.
    </p>
  </ski-modal>
</template>
