import Vue from 'vue'
import Vuex from 'vuex'
import EventService, { EventType } from '@/services/EventService'

Vue.use(Vuex)
const state = {
  user: {
    id: 'nick',
    name: 'Nikolay X',
  },
  events: new Array<EventType>(),
  categories: ['vue', 'typescript'],
}

const store = new Vuex.Store({
  state,
  mutations: {
    EVENT_CREATE(state: StateType, event: EventType) {
      state.events.push(event)
    },
  },
  actions: {
    eventCreate({ commit }, event: EventType) {
      return EventService.postEvent(event).then(() => {
        commit('EVENT_CREATE', event)
      })
    },
  },
  modules: {},
  getters: {
    catLength: state => state.categories.length,
  },
})

type StoreType = typeof store
type StateType = typeof state
export { StoreType, StateType }
export default store
