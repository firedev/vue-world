import Vue from 'vue'
import Vuex from 'vuex'
import { EventType } from '@/services/EventService'

import { eventActions, eventMutations, eventGetters } from '@/store/events'

Vue.use(Vuex)

const state = {
  user: {
    id: 'nick',
    name: 'Nikolay X',
  },
  event: {},
  events: new Array<EventType>(),
  eventsTotal: 0,
  categories: ['vue', 'typescript'],
}

const store = new Vuex.Store({
  state,
  mutations: { ...eventMutations },
  actions: { ...eventActions },
  modules: {},
  getters: {
    ...eventGetters,
    catLength: state => state.categories.length,
  },
})

type StoreType = typeof store
type StateType = typeof state
export { StoreType, StateType }
export default store
