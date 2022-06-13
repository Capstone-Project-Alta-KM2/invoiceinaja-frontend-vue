import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    actionOfToken(store, payload){
      store.commit('setToken', payload)
    } 
  },
  modules: {
  }
})
