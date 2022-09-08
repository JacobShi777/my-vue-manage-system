import Vue from 'vue'
import Vuex from 'vuex'
import tabs from './modules/tabs'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tabs
  },
  getters
})

export default store
