// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@nuxtjs/color-mode',
    '@nuxthub/core',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: 'Marcelo Vichar',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },

  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
  },

  content: {},
  runtimeConfig: {
    public: {
      PROFESSIONAL_MAIL: process.env.NUXT_PROFESSIONAL_MAIL || '',
      WEB3FORMS_API_KEY: process.env.NUXT_WEB3FORMS_API_KEY || '',
      NUXT_BASE_URL: process.env.NUXT_BASE_URL || 'http://localhost:3000',
    },
  },

  routeRules: {
    // '/': { prerender: true }
  },

  compatibilityDate: '2024-11-21',

  eslint: {
    config: {
      stylistic: true, // <---
    },
  },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_GTAG_ID || '',
  },

  i18n: {
    baseUrl: process.env.NUXT_BASE_URL || 'http://localhost:3000',
    locales: [
      { code: 'pt', language: 'pt-BR', name: 'Português', iso: 'pt-BR', file: 'pt.js' },
      { code: 'en', language: 'en-US', name: 'English', iso: 'en-US', file: 'en.js' },
    ],

    compilation: {
      strictMessage: false,
    },
    langDir: 'lang/',
    defaultLocale: 'pt',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
})