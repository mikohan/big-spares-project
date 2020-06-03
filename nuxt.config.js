
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru',
      dir: 'ltr',
    },
    
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/vendor/owl-carousel/assets/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/vendor/photoswipe/photoswipe.css' },
      { rel: 'stylesheet', href: '/vendor/photoswipe/default-skin/default-skin.css' },
      { rel: 'stylesheet', href: '/vendor/select2/css/select2.min.css' },
      { rel: 'stylesheet', href: '/css/style_blue.css' },
      // { rel: 'stylesheet', href: '/css/style.header-spaceship-variant-one_blue.css', media: '(min-width: 1200px)' },
      { rel: 'stylesheet', href: '/css/style.header-classic-variant-one_blue.css', media: '(min-width: 1200px)' },
      { rel: 'stylesheet', href: '/css/style.mobile-header-variant-one.css', media: '(max-width: 1199px)' },
      { rel: 'stylesheet', href: '/vendor/fontawesome/css/all.min.css' },
    ],
    script: [
      { src: '/vendor/jquery/jquery.min.js', body: true },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: '/vendor/owl-carousel/owl.carousel.min.js', body: true },
      { src: '/vendor/nouislider/nouislider.min.js', body: true },
      { src: '/vendor/photoswipe/photoswipe.min.js', body: true },
      { src: '/vendor/photoswipe/photoswipe-ui-default.min.js', body: true },
      { src: '/vendor/select2/js/select2.min.js', body: true },
      { src: '/js/number.js', body: true },
      // { src: '/js/main.js', body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: 'red', height: '5px' },
  loading: { color: '#37f', throttle: 0,  height: '3px' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
