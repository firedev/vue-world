import Vue from 'vue'
import Vuex from 'vuex'

import * as events from '@/store/events'
import * as user from '@/store/user'

Vue.use(Vuex)

const state = {
  categories: ['vue', 'typescript'],
}

const store = new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: { events, user },
  getters: {
    catLength: state => state.categories.length,
  },
})

type StoreType = typeof store
type StateType = typeof state
export { StoreType, StateType }
export default store
