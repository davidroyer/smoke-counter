import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/localforage'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  /*
   ** Overwrite's generated manifest values
   */
  manifest: {
    name: 'SmokeCount App',
    short_name: 'SmokeCount',
    lang: 'en',
    display: 'standalone'
  },

  localforage: {
    name: 'smokeCount'
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],

    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#607d8b',
          accent: '#673ab7',
          error: '#e91e63',
          warning: '#ffeb3b',
          info: '#03a9f4',
          success: '#00bcd4'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
