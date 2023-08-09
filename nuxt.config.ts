import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from 'vite-plugin-eslint'
import 'dotenv/config'
import siteMeta from './siteMeta'

const url = process.env.DEBUG_MODE === 'true' ? 'http://localhost:3000' : siteMeta.url

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: {
    enabled: process.env.DEBUG_MODE === 'true'
  },

  app: {
    head: {
      titleTemplate: `%s | ${siteMeta.name}`,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: siteMeta.description },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    rootId: '__nuxt'
  },

  css: [
    '~/assets/app.scss'
  ],

  modules: [
    '~/modules/generate-cname',
    'skimple-components/nuxt',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots'
  ],

  runtimeConfig: {
    public: {
      url
    }
  },

  vite: {
    plugins: [
      StylelintPlugin(),
      eslintPlugin()
    ]
  },

  skimpleComponents: {
    bootstrapCss: false,
    bootstrapJs: false
  },

  site: {
    url,
    name: siteMeta.name
  },

  cname: {
    hostname: url
  },

  nitro: {
    prerender: {
      routes: siteMeta.prerender
    }
  }
})
