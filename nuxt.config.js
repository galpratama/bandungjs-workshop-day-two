module.exports = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'bandungjs-day-two',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Merriweather'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],

  },
  /*
   ** Modules
   */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],

  plugins: [
    // Plugins
    {
      src: '~plugins/vue-markdown.js',
      ssr: true
    },
    {
      src: '~plugins/vue-moment.js',
      ssr: true
    },
  ],

  axios: {
    // proxyHeaders: false
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: 'blue'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
