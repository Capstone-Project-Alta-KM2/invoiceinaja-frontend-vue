import Vue from 'vue'
import Vuex from 'vuex'
// import SecureLS from "secure-ls";
import createPersistedState from "vuex-persistedstate";
// const ls = new SecureLS({ isCompression: true });
Vue.use(Vuex)


export default new Vuex.Store({
  plugins:[
    createPersistedState({
      key:"users",
      paths:['usersInfo']
    }),
    createPersistedState({
      key:"token",
      paths:[
        'token',
        'token'
      ]
    })
  ],
  state: {
    usersInfo:{},
    token: "",
  },
  mutations: {
    setUsersInfo(state,payload){
        state.usersInfo = payload
    },
    setToken(state, payload) {
      state.token = payload;
      // localStorage.setItem("token",state.token)
    },
    
    setSessionUsersInfo(state,payload){
      state.usersInfo = payload
    },
    setSessionToken(state,payload){
      state.token = payload
    },
  },
  
  actions: {
    actionUsersInfo(store,payload){
      store.commit("setUsersInfo",payload)
    },
    actionOfToken(store, payload){
      store.commit('setToken', payload)
    },

    sessionUsersInfo(store, payload){
      store.commit("setSessionUsersInfo",payload) 
    },
    sessionToken(store, payload){
        store.commit("setSessionToken",payload)
    },
  },
})
