export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'shoes-custom',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'title',
        name: 'title',
        content: '世界が認めた日本初のラグジュアリーオーダーシューズブランド Rio'
      }, {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
      async: true,
      defer: true
    }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '~/plugins/slider',
    mode: 'client'
  }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    ['@nuxtjs/fontawesome', {
      component: 'FA',
      icons: {
        regular: ['faEnvelope'],
        brands: ['faInstagram', 'faLine']
      }
    }],
    ['@nuxtjs/google-fonts', {
      families: {
        'Shippori Mincho': '',
        display: 'swap',
      }
    }]
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  buildModules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-12301-2'
    // }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: [
        // purgecss({
        //   content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './assets/css/main.scss', './plugins/**/*.js',
        //     './assets/css/index.css', './assets/css/**/*.scss'
        //   ],
        //   paths: [
        //     './pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './assets/css/main.scss', './plugins/**/*.js',
        //     './assets/css/index.css', './assets/css/**/*.scss'
        //   ],
        //   styleExtensions: ["scss", "sass"],
        //   whitelist: ['html', 'body', 'nuxt-progress', 'a'],
        //   extractors: [{
        //     extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        //     extensions: ['html', 'vue', 'js']
        //   }]
        // }),
        require("postcss-gap-properties")(),
        require("autoprefixer")({
          grid: true,
          flexbox: true,
          stats: {
            warnings: false
          }
        })
      ]
    },
  },
  server: {
    host: '0.0.0.0'
  }
}
