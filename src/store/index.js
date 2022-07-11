import Vue from 'vue'
import Vuex from 'vuex'
// import SecureLS from "secure-ls";
import createPersistedState from "vuex-persistedstate";
// const ls = new SecureLS({ isCompression: true });
Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [

    createPersistedState({
      key: "preview",
      paths: ['preview']
    }),


  ],
  state: {
    usersInfo: {},
    token: "",
    preview: {}
  },
  mutations: {
    setUsersInfo(state, payload) {
      state.usersInfo = payload
    },
    setToken(state, payload) {
      state.token = payload;
      // localStorage.setItem("token",state.token)
    },
    setPreview(state, payload) {
      state.preview = payload
    }


  },

  actions: {
    actionUsersInfo(store, payload) {
      store.commit("setUsersInfo", payload)
    },
    actionOfToken(store, payload) {
      store.commit('setToken', payload)
    },
    actionOfPreview(store, payload) {
      console.log("payload Preview : ", payload)
      store.commit('setPreview', payload)
    },

  },
})
