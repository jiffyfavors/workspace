export const state = () => ({
  cart: []
})

export const getters = {
  getCartCount(state) {
    return state.cart.length
  },
  getCart(state) {
    return state.cart
  },
  getCartTotal(state) {
    let total = 0
    state.cart.forEach(item => {
      let qty = parseInt(item.qty)
      total = total + (parseFloat(item.info.price) * qty)

      Object.entries(item.add_ons).map(([key, val]) => {
        if (Array.isArray(val)) {
          val.forEach((i) => {
            total = total + (parseFloat(i.price) * qty)
          })
        } else {
          total = total + (parseFloat(val.price) * qty)
        }
      })
    })

return total



  }
}
export const mutations = {
  addCart(state, data) {
    state.cart.push(data)
  },
  removeCart(state, index) {
    state.cart.splice(index, 1)
  },
  clearCart(state) {
    state.cart = []
  }
}
