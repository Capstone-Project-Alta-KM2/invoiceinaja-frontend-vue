import Vue from 'vue'
import Vuex from 'vuex'
// import SecureLS from "secure-ls";
import createPersistedState from "vuex-persistedstate";
// const ls = new SecureLS({ isCompression: true });
Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [

    createPersistedState({
      key: "invoiceinaja",
    }),


  ],
  state: {
    usersInfo: {},
    token: "",
    preview: {},
    msgSuccessAddInvoice:""
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
    },
   
    setChangePass(state,payload){
      state.usersInfo.password = payload
    },
    setSuccessAddInvoice(state,payload){
      state.msgSuccessAddInvoice = payload
     
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
      store.commit('setPreview', payload)
    },
    actionOfChangePass(store,payload){
      store.commit("setChangePass",payload)
    },
    actionOfSuccessAddInvoice(store,payload){
      store.commit("setSuccessAddInvoice",payload)
      setTimeout(() => {
        store.commit("setSuccessAddInvoice","")
    }, 2000);
    }
  },
})
