// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Marcelo Vichar',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },

  content: {},
  runtimeConfig: {
    public: {
      PROFESSIONAL_MAIL: process.env.NUXT_PROFESSIONAL_MAIL || '',
      WEB3FORMS_API_KEY: process.env.NUXT_WEB3FORMS_API_KEY || '',
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

  i18n: {

    locales: [
      { code: 'pt', name: 'Português', iso: 'pt-BR', file: 'pt.js' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.js' },
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
