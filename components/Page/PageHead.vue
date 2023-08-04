<script setup>
import { useRoute, useRuntimeConfig } from '#app'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const currentAddress = `${runtimeConfig.public.url}${route.path}`

const siteName = useSiteName()
const siteDescription = useSiteDescription()
const siteUrl = useSiteUrl()

defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Head class="page-head">
    <Title>{{ title }}</Title>
    <Meta name="description" :content="siteDescription" />
    <Meta name="og:title" :content="title" />
    <Meta name="og:description" :content="siteDescription" />
    <Meta name="og:type" content="website" />
    <Meta name="og:site_name" :content="siteName" />
    <Meta name="og:url" :content="currentAddress" />
    <Meta name="og:image" :content="`${siteUrl}/images/social/open-graph.png`" />
    <Meta name="og:locale" content="en" />
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="siteDescription" />
    <Meta name="twitter:site" content="@Skyost" />
    <Meta name="twitter:creator" content="@Skyost" />
    <Meta name="twitter:url" :content="currentAddress" />
    <Meta name="twitter:image" :content="`${siteUrl}/images/social/twitter.png`" />
    <Link rel="canonical" :href="currentAddress" />
    <slot />
  </Head>
</template>

<style lang="scss" scoped>
.page-head {
  display: none;
}
</style>
