import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b13f2a8 = () => interopDefault(import('../pages/appcenter.vue' /* webpackChunkName: "pages/appcenter" */))
const _29f75438 = () => interopDefault(import('../pages/bookings.vue' /* webpackChunkName: "pages/bookings" */))
const _44d623db = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _224af03a = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _172663d2 = () => interopDefault(import('../pages/staff.vue' /* webpackChunkName: "pages/staff" */))
const _0e8fcba0 = () => interopDefault(import('../pages/stores.vue' /* webpackChunkName: "pages/stores" */))
const _43d376e8 = () => interopDefault(import('../pages/subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _055f6a20 = () => interopDefault(import('../pages/voucher.vue' /* webpackChunkName: "pages/voucher" */))
const _39f832ea = () => interopDefault(import('../pages/menu/_id/index.vue' /* webpackChunkName: "pages/menu/_id/index" */))
const _7c4b0028 = () => interopDefault(import('../pages/apps/_type/_id/index.vue' /* webpackChunkName: "pages/apps/_type/_id/index" */))
const _3cfb1a0e = () => interopDefault(import('../pages/apps/_type/_id/menu.vue' /* webpackChunkName: "pages/apps/_type/_id/menu" */))
const _114df4ff = () => interopDefault(import('../pages/apps/_type/_id/orders.vue' /* webpackChunkName: "pages/apps/_type/_id/orders" */))
const _09c5502a = () => interopDefault(import('../pages/apps/_type/_id/pos.vue' /* webpackChunkName: "pages/apps/_type/_id/pos" */))
const _094d4453 = () => interopDefault(import('../pages/apps/_type/_id/setup.vue' /* webpackChunkName: "pages/apps/_type/_id/setup" */))
const _7b2e80c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/appcenter",
    component: _6b13f2a8,
    name: "appcenter"
  }, {
    path: "/bookings",
    component: _29f75438,
    name: "bookings"
  }, {
    path: "/login",
    component: _44d623db,
    name: "login"
  }, {
    path: "/orders",
    component: _224af03a,
    name: "orders"
  }, {
    path: "/staff",
    component: _172663d2,
    name: "staff"
  }, {
    path: "/stores",
    component: _0e8fcba0,
    name: "stores"
  }, {
    path: "/subscriptions",
    component: _43d376e8,
    name: "subscriptions"
  }, {
    path: "/voucher",
    component: _055f6a20,
    name: "voucher"
  }, {
    path: "/menu/:id",
    component: _39f832ea,
    name: "menu-id"
  }, {
    path: "/apps/:type?/:id",
    component: _7c4b0028,
    name: "apps-type-id"
  }, {
    path: "/apps/:type?/:id?/menu",
    component: _3cfb1a0e,
    name: "apps-type-id-menu"
  }, {
    path: "/apps/:type?/:id?/orders",
    component: _114df4ff,
    name: "apps-type-id-orders"
  }, {
    path: "/apps/:type?/:id?/pos",
    component: _09c5502a,
    name: "apps-type-id-pos"
  }, {
    path: "/apps/:type?/:id?/setup",
    component: _094d4453,
    name: "apps-type-id-setup"
  }, {
    path: "/",
    component: _7b2e80c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
