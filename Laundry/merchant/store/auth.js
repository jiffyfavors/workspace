import { firestoreAction, vuexfireMutations } from 'vuexfire'
export const state = () => ({
  authUser: null,
  accessInfo: [],
  denoms: [],
  staffs:[],
})
export const getters = {
  getStaff(state){
    return state.staffs
  },
  getAccessInfo(state) {
    return state.accessInfo
  },
  getDenoms(state) {
    try {
      return state.denoms.denoms
    } catch (e) {
      return []
    }

  },
  getToken(state) {
    let token = 0
    try {
      token = state.accessInfo[0].token
    } catch (e) {
      token = 0
    }
    return token
  },
  getBalance(state) {
    let token = 0
    try {
      token = state.accessInfo[0].balance
    } catch (e) {
      token = 0
    }
    return token
  },
  isLoggedIn(state) {
    return state.authUser !== null
  }
}
export const mutations = { ...vuexfireMutations,
  RESET_STORE: (state) => {
    Object.assign(state, { authUser: null })
  },
  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
}
export const actions = {
  getStaff:firestoreAction(async function({ bindFirestoreRef }, id) {
    return bindFirestoreRef('staffs', this.$fire.firestore.collection('users').doc(id).collection('staffs'))
  }),
  getAccessInfo: firestoreAction(async function({ bindFirestoreRef }) {
    return bindFirestoreRef('accessInfo', this.$fire.firestore.collection('users').where('uids', 'array-contains', this.$fire.auth.currentUser.uid)).then(() => {
      return bindFirestoreRef('denoms', this.$fire.firestore.collection('topup_amounts').doc(this.getters['auth/getAccessInfo'][0].currency))
    })
  }),
  async nuxtServerInit({ dispatch }, ctx) {
    if (this.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - this.$fire.auth cannot be accessed.'
    }
    if (ctx.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    }
    if (ctx.app.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    }
    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
    /** Get the VERIFIED authUser from the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user
      console.info('Auth User verified on server-side. User: ', authUser, 'Claims:', claims)
      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },
  onAuthStateChanged({ commit, dispatch }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', { authUser })
  },
}
