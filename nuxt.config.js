export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Joseph Levarato',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: {
        host: 'smtp.example.com',
        port: 587
      }
    }],
    ['nuxt-i18n', {
      fallbackLocale: 'fr',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true
      },
      locales: [
        {
          code: 'en',
          file: 'en-US.js'
        },
        {
          code: 'fr',
          file: 'fr-FR.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fr'
    }]

  ],

  i18n: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
