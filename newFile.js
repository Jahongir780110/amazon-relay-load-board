export default {
  // Global page headers: https://go.xtjs.dev/config-head
  head: {
    title: 'amazon-relay-load-board',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.xtjs.dev/config-css
  css: [
    '@assets/css/normalize.css',
    'vue-multiselect/dist/vue-multiselect.min.css',
    '@assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.xtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/multi-range-slider.js',
      mode: 'client'
    },
    {
      src: '~/plugins/multiselect.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.xtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.xtjs.dev/config-modules
  buildModules: [
    // https://go.xtjs.dev/eslint
    '@xtjs/eslint-module',
    // https://go.xtjs.dev/stylelint
    '@xtjs/stylelint-module'
  ],

  // Modules: https://go.xtjs.dev/config-modules
  modules: [
    // https://go.xtjs.dev/bootstrap
    'bootstrap-vue/xt',
    // https://go.xtjs.dev/axios
    '@xtjs/axios'
  ],

  // Axios module configuration: https://go.xtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.xtjs.dev/config-build
  build: {}
};
