import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// const persitedDataState = createPersistedState({
//   paths: ["userName", "token", "photoProfil"]
// });

export default new Vuex.Store({
  // plugins: [persitedDataState],
  state: {
    userName: null,
    token: null,
    photoProfil: null,
  },
  getters: {
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },

    setToken(state, payload) {
      state.token = payload;
    },

    setPhotoProfil(state, payload) {
      state.photoProfil = payload;
    }
  },
  
  actions: {
    actionOfUserName(store, payload){
      store.commit('setUserName', payload)
    },

    actionOfToken(store, payload){
      store.commit('setToken', payload)
    }, 

    actionOfPhotoProfil(store, payload){
      store.commit('setPhotoProfil', payload)
    },
  },
  modules: {
  }
})
