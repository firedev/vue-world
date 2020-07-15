import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  user: {
    id: 'nick',
    name: 'Nikolay X',
  },
  categories: ['vue', 'typescript'],
}
const store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => state.categories.length,
  },
})

type StoreType = typeof store
type StateType = typeof state
export { StoreType, StateType }
export default store
