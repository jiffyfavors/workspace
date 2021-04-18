import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_cd75b9de from 'nuxt_plugin_workbox_cd75b9de' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_0adabb33 from 'nuxt_plugin_nuxticons_0adabb33' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_92f00aa2 from 'nuxt_plugin_plugin_92f00aa2' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_nuxtgooglemaps_2d9baafc from 'nuxt_plugin_nuxtgooglemaps_2d9baafc' // Source: ./nuxt-google-maps.js (mode: 'all')
import nuxt_plugin_serviceauthssrserver_67d27700 from 'nuxt_plugin_serviceauthssrserver_67d27700' // Source: ./firebase/service.auth.ssr-server.js (mode: 'server')
import nuxt_plugin_index_76abdbf9 from 'nuxt_plugin_index_76abdbf9' // Source: ./firebase/index.js (mode: 'all')
import nuxt_plugin_serviceauthinitialize_9026ace4 from 'nuxt_plugin_serviceauthinitialize_9026ace4' // Source: ./firebase/service.auth.initialize.js (mode: 'all')
import nuxt_plugin_vuesocialsharingplugin_641835ae from 'nuxt_plugin_vuesocialsharingplugin_641835ae' // Source: ./vue-social-sharing-plugin.js (mode: 'all')
import nuxt_plugin_main_6a83762f from 'nuxt_plugin_main_6a83762f' // Source: ../plugins/main (mode: 'all')
import nuxt_plugin_localStorage_830ec59e from 'nuxt_plugin_localStorage_830ec59e' // Source: ../plugins/localStorage.js (mode: 'client')
import nuxt_plugin_fns_6770d73c from 'nuxt_plugin_fns_6770d73c' // Source: ../plugins/fns.js (mode: 'client')
import nuxt_plugin_util_40183302 from 'nuxt_plugin_util_40183302' // Source: ../plugins/util.js (mode: 'client')
import nuxt_plugin_ga_34d435b2 from 'nuxt_plugin_ga_34d435b2' // Source: ../plugins/ga.js (mode: 'client')
import nuxt_plugin_paypal_6f8d7b6e from 'nuxt_plugin_paypal_6f8d7b6e' // Source: ../plugins/paypal.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - Go Asenso Client","title":"Go Asenso Client","meta":[{"charset":"utf-8"},{"hid":"og:locale","name":"og:locale","content":"en_PH"},{"hid":"facebook-domain-verification-1","name":"facebook-domain-verification","content":"wj2a5oesll4fu44nent9v7b4965dnv"},{"hid":"facebook-domain-verification-2","name":"facebook-domain-verification","content":"l4enhrriob3txta60i0drvtlq3pg2k"},{"name":"viewport","content":"width=device-width, initial-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"Online Ordering System"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Go Asenso"},{"hid":"author","name":"author","content":"Gilbert Candeleja Palmeras"},{"hid":"theme-color","name":"theme-color","content":"#00aff0"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Go Asenso"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Go Asenso"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Prepaid and Low-Cost eCommerce Solution"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.a3720be0.json"},{"rel":"shortcut icon","href":"\u002Ficon.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.4581ca.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_cd75b9de === 'function') {
    await nuxt_plugin_workbox_cd75b9de(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_0adabb33 === 'function') {
    await nuxt_plugin_nuxticons_0adabb33(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_92f00aa2 === 'function') {
    await nuxt_plugin_plugin_92f00aa2(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtgooglemaps_2d9baafc === 'function') {
    await nuxt_plugin_nuxtgooglemaps_2d9baafc(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_serviceauthssrserver_67d27700 === 'function') {
    await nuxt_plugin_serviceauthssrserver_67d27700(app.context, inject)
  }

  if (typeof nuxt_plugin_index_76abdbf9 === 'function') {
    await nuxt_plugin_index_76abdbf9(app.context, inject)
  }

  if (typeof nuxt_plugin_serviceauthinitialize_9026ace4 === 'function') {
    await nuxt_plugin_serviceauthinitialize_9026ace4(app.context, inject)
  }

  if (typeof nuxt_plugin_vuesocialsharingplugin_641835ae === 'function') {
    await nuxt_plugin_vuesocialsharingplugin_641835ae(app.context, inject)
  }

  if (typeof nuxt_plugin_main_6a83762f === 'function') {
    await nuxt_plugin_main_6a83762f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_localStorage_830ec59e === 'function') {
    await nuxt_plugin_localStorage_830ec59e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fns_6770d73c === 'function') {
    await nuxt_plugin_fns_6770d73c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_util_40183302 === 'function') {
    await nuxt_plugin_util_40183302(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_34d435b2 === 'function') {
    await nuxt_plugin_ga_34d435b2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_paypal_6f8d7b6e === 'function') {
    await nuxt_plugin_paypal_6f8d7b6e(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
