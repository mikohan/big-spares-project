import { headerType } from './config.logic/header.loader'
require('dotenv').config()

export default {
  mode: 'universal',
  router: {
    // middleware: ['selectedCar'],
  },

  /*
   ** Headers of the page
   */

  head: {
    htmlAttrs: {
      lang: 'ru',
      dir: 'ltr'
    },

    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/images/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/icons/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/images/icons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      { rel: 'stylesheet', href: '/vendor/bootstrap/css/bootstrap.css' },
      {
        rel: 'stylesheet',
        href: '/vendor/owl-carousel/assets/owl.carousel.min.css'
      },
      { rel: 'stylesheet', href: '/vendor/photoswipe/photoswipe.css' },
      {
        rel: 'stylesheet',
        href: '/vendor/photoswipe/default-skin/default-skin.css'
      },
      { rel: 'stylesheet', href: '/vendor/select2/css/select2.min.css' },
      { rel: 'stylesheet', href: `/css/style_${headerType.color}.css` },
      {
        rel: 'stylesheet',
        href: `/css/style.header-${headerType.css}-variant-one_${headerType.color}.css`,
        media: '(min-width: 1200px)'
      },
      {
        rel: 'stylesheet',
        href: `/css/style.mobile-header-variant-one_${headerType.color}.css`,
        media: '(max-width: 1199px)'
      },
      { rel: 'stylesheet', href: '/vendor/fontawesome/css/all.min.css' }
    ],
    script: [
      { src: '/vendor/jquery/jquery.min.js', body: true },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: '/vendor/owl-carousel/owl.carousel.min.js', body: true },
      { src: '/vendor/nouislider/nouislider.min.js', body: true },
      { src: '/vendor/photoswipe/photoswipe.min.js', body: true },
      { src: '/vendor/photoswipe/photoswipe-ui-default.min.js', body: true },
      { src: '/vendor/select2/js/select2.min.js', body: true },
      { src: '/js/number.js', body: true }
      // { src: '/js/main.js', body: true },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: 'red', height: '5px' },
  loading: { color: '#FF1493', throttle: 0, height: '3px' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/filters.js',
    {
      src: '~/plugins/vClickOutside.js',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
