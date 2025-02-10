import StylelintPlugin from 'vite-plugin-stylelint'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import 'dotenv/config'
import siteMeta from './siteMeta'

const url = process.env.DEBUG_MODE === 'true' ? 'http://localhost:3000' : siteMeta.url

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-01-01',

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
    '@nuxt/eslint',
    'nuxt-cname-generator',
    '@bootstrap-vue-next/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/icon'
  ],

  vite: {
    plugins: [
      StylelintPlugin(),
      eslintPlugin()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        }
      }
    }
  },

  site: {
    url,
    name: siteMeta.name,
    trailingSlash: false
  },

  cname: {
    host: url
  },

  nitro: {
    prerender: {
      routes: siteMeta.prerender
    }
  },

  icon: {
    provider: 'iconify',
    class: 'vue-icon'
  },

  eslint: {
    config: {
      stylistic: true
    }
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove'
      }
    }
  },
})
