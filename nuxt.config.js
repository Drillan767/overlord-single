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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'buefy/dist/buefy.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/buefy.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        tls: {
          ciphers: 'SSLv3'
        },
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
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
    }],
    ['nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]

  ],

  publicRuntimeConfig: {
    mailUsername: process.env.MAIL_USERNAME
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
