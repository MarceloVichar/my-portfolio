// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxt/icon'
    ],

    i18n: {

        locales: [
            {code: 'pt', name: 'Português', iso: 'pt-BR', file: 'pt.js'},
            {code: 'en', name: 'English', iso: 'en-US', file: 'en.js'},
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

    routeRules: {
        // '/': { prerender: true }
    },

    content: {},

    compatibilityDate: '2024-11-21'

})
