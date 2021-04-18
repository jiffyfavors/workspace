module.exports = {
  ssr: false,
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  hooks: {
    generate: {
      async done(builder) {
        // This makes sure nuxt generate does finish without running into a timeout issue.
        // See https://github.com/nuxt-community/firebase-module/issues/93
        const appModule = await import('./nuxt/firebase/app.js')
        const { session } = await appModule.default(builder.options.firebase.config, {
          res: null
        })
        try {
          session.database().goOffline()
        } catch (e) {}
        try {
          session.firestore().terminate()
        } catch (e) {}
      },
    },
  },
  components: true,
  pwa: {
    meta: { viewport: 'width=device-width, initial-scale=1, user-scalable=no' },
    manifest: {
      name: 'Go Asenso',
      lang: 'en',
      short_name: 'Go Asenso',
      categories: ['eCommerce', 'Merchant', 'Merchant'],
      display: 'standalone',
      orientation: 'portrait',
      description: 'Go Asenso Merchant Center',
      background_color: '#ffff',
      start_url:'/',
      theme_color: '#00aff0',
      icons: [{
        src: '/icon.png',
        type: 'image/png',
        sizes: '512x512'
      }, {
        src: '/icon-96px.png',
        type: 'image/png',
        sizes: '96x96'
      }, {
        src: '/icon-192px.png',
        type: 'image/png',
        sizes: '192x192'
      }]
    },
    workbox: {
      config:{
        debug: false
      },
      importScripts: ['/firebase-auth-sw.js'],
       runtimeCaching: [
      {
        handler: 'cacheFirst',
        urlPattern: '/_nuxt/',
        strategyOptions: {
          cacheName: 'bundle-files',
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7,
            maxEntries: 100
          }
        }
      },
      {
        handler: 'cacheFirst',
        urlPattern: '.*fonts.googleapis.com/.*',
        strategyOptions: {
          cacheName: 'google-fonts-stylesheets'
        }
      },
      {
        handler: 'cacheFirst',
        urlPattern: '.*fonts.gstatic.com/.*',
        strategyOptions: {
          cacheName: 'google-fonts-webfonts',
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 100
          }
        }
      },
      {
        handler: 'cacheFirst',
        urlPattern: '.*cdn.jsdelivr.net/.*',
        strategyOptions: {
          cacheName: 'material-css',
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 100
          }
        }
      }
    ],
    
      dev: process.env.NODE_ENV === 'development'
    }
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_long_name,
    title: process.env.npm_package_long_name || '',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no'
    }, {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: ['@assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/main', {
    src: '~/plugins/localStorage.js',
    ssr: false
  }, {
    src: '~/plugins/vselectimg',
    mode: 'client'
  }, {
    src: '~/plugins/paypal',
    ssr: false
  },
 { src: '~/plugins/swiper', ssr:false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/firebase', '@nuxtjs/moment'],
  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyDqSXAyqrKZJj6zhY3AiaEdZnghBETq2Lw",
      authDomain: "laundry-93534.firebaseapp.com",
      databaseURL: "https://laundry-93534.firebaseio.com",
      projectId: "laundry-93534",
      storageBucket: "laundry-93534.appspot.com",
      messagingSenderId: "791612764515",
      appId: "1:791612764515:web:66967d60845a2b16782356",
      measurementId: "G-L8YRMR4XX5"
    },
    onFirebaseHosting: true,
    services: {
      storage: true,
      firestore: {
        memoryOnly: false,
        enablePersistence: true
      },
      auth: {
        persistence: 'local',
        ssr: false,
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged',
        }
      }
    }
  },
  modules: [
   'vue-social-sharing/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-gmaps', {
      key: 'AIzaSyDX-atoLm6nQpMgQ_GYHIo1kiscAe5txXc'
    }]
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/distance/': {
      target: 'https://maps.googleapis.com/maps/api/distancematrix/json',
      pathRewrite: {
        '^/distance/': ''
      },
      changeOrigin: true
    }
  },
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#1976d2',
          accent: '#37474f',
          secondary: '#ff8f00',
          info: '#26a69a',
          warning: '#ffc107',
          error: '#dd2c00',
          success: '#00e676'
        }
      }
    }
  },
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    },
    loaders: {
      vue: {
        prettify: false
      }
    },
  }
}
