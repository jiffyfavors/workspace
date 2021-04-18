module.exports = {
  ssr: true,
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
  pwa: {
    meta: { viewport: 'width=device-width, initial-scale=1, user-scalable=no' },
    manifest: {
      name: 'Go Asenso',
      lang: 'en',
      short_name: 'Go Asenso',
      categories: ['bills payment', 'online shopping', 'food delivery'],
      display: 'standalone',
      orientation: 'portrait',
      description: 'Prepaid and Low-Cost eCommerce Solution',
      background_color: '#ffff',
      theme_color: '#00aff0',
      icons: [{
          src: '/icon.png',
          type: 'image/png',
          sizes: '512x512'
        },
        {
          src: '/icon-96px.png',
          type: 'image/png',
          sizes: '96x96'
        },
        {
          src: '/icon-192px.png',
          type: 'image/png',
          sizes: '192x192'
        }
      ]
    },
     workbox: {
      importScripts: [
        '/firebase-auth-sw.js'
      ],
  
      dev: process.env.NODE_ENV === 'development'
    }
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_long_name,
    title: process.env.npm_package_long_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_PH'
      },
      {
        hid: 'facebook-domain-verification-1',
        name: 'facebook-domain-verification',
        content: 'wj2a5oesll4fu44nent9v7b4965dnv'
      },
      {
        hid: 'facebook-domain-verification-2',
        name: 'facebook-domain-verification',
        content: 'l4enhrriob3txta60i0drvtlq3pg2k'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
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
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: ['@assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/main',
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/fns.js', mode: 'client' },
    { src: '~/plugins/util.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/paypal.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
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
      analytics: true,
      functions: true,
      storage: true,
      firestore: {
        memoryOnly: false,
        enablePersistence: true
      },
      auth: {
        ssr:true,
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChanged'
        }
      },
      messaging: true
    }
  },
  modules: [
    'vue-social-sharing/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyDX-atoLm6nQpMgQ_GYHIo1kiscAe5txXc'
      }
    ]
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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

  render: {
    bundleRenderer: {
      runInNewContext: false
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
