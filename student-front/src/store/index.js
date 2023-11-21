import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from '../store/modules/auth'
import register from '../store/modules/register';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    register
  },
  plugins: [createPersistedState({
     paths: ['auth']
  })],
})
