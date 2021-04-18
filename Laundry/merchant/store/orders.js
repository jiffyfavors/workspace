import { firestoreAction } from 'vuexfire'
export const state = () => ({
});

export const getters = {

  getOrders: (state) => (data) => {
  	let base = state['orders-'+data.id]
  	let orders = []

    try {
      if (data.status != 'completed')
      orders = base.filter(x => x.status==data.status)
    } catch (e) {
      console.log(e)
      
    }
  
    return orders

  }
}
export const actions = {
  getNotCompleteOrders: firestoreAction(async function({ bindFirestoreRef }, data) {
    return await bindFirestoreRef('orders-'+data.id, this.$fire.firestore.collection('orders').where('merchantId', '==', data.id))
  })
}