<script setup lang="ts">
import DOMPurify from 'isomorphic-dompurify'
import siteMeta from '~/siteMeta'

const route = useRoute()
const marked = useMarked()

let user = null
let repo = null
let branch = 'main'
let path = 'README.md'

const slug: string[] = route.params.slug as string[]
if (slug.length >= 2) {
  user = slug[0]
  repo = slug[1]
  if (slug.length >= 3 && slug[2].length > 0) {
    branch = slug[2]
    if (slug.length >= 4 && slug[3].length > 0) {
      path = slug.slice(3, slug.length).join('/')
    }
  }
}
const url = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`
const { pending, error, data } = await useFetch(url, {
  transform: (markdown: string) => DOMPurify.sanitize(marked.parse(markdown))
})
</script>

<template>
  <div class="h-100">
    <div v-if="pending" class="h-100 d-flex justify-content-center">
      <page-head title="Loading..." />
      <div class="align-self-center text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else-if="error">
      <page-head :title="`Error ${error.statusCode}`" />
      <h1>Error {{ error.statusCode }}</h1>
      <p>
        <span v-if="error.statusCode === 404">
          The file you've requested was not found.
        </span>
        <span v-else>
          There was an error proceeding your request. Please try again later.
        </span>
        Here are some details that may help you debugging your request :
      </p>
      <ul>
        <li>Username : <code>{{ user }}</code>.</li>
        <li>Repository : <code>{{ repo }}</code>.</li>
        <li>Branch : <code>{{ branch }}</code>.</li>
        <li>File path : <code>{{ path }}</code>.</li>
        <li>RAW file url : <code>{{ url }}</code>.</li>
      </ul>
      <p class="mb-0">
        If you still believe that this error comes from this software, please open an issue on
        <a :href="`${siteMeta.githubUrl}/issues/new`">Github</a>.
      </p>
    </div>
    <div v-else>
      <page-head :title="path" />
      <div class="markdown-body" v-html="data" />
    </div>
  </div>
</template>

<style lang="scss">
@import 'assets/bootstrap-mixins';
@import 'assets/colors';
@import 'github-markdown-css/github-markdown.css';

.spinner-border {
  height: 100px;
  width: 100px;
}

.markdown-body {
  padding-top: 40px;
  padding-bottom: 40px;

  @include media-breakpoint-down(lg) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: $dark;
  }
}
</style>
