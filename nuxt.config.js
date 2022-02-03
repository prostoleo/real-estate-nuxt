export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'real-estate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // windi preflight
    // 'virtual:windi-base.css',
    // your stylesheets which overrides the preflight
    // windi extras
    // 'virtual:windi-components.css',
    // 'virtual:windi-utilities.css',

    '~/assets/css/normalize.css',
    '~/assets/css/main.css',
    // 'swiper/swiper-bundle.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // '@nuxtjs/eslint-config',
    '@nuxtjs/composition-api/module',
    // 'nuxt-windicss',
    // '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/style-resources',
    '@vueuse/nuxt',
  ],

  eslint: {
    cache: false,
  },

  styleResources: {
    // your settings here
    scss: ['~/assets/scss/main.scss'],
    // hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
