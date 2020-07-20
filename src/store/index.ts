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
    EVENT_CREATE(state, event: EventType) {
      state.events.push(event)
    },
    EVENTS_SET(state, events: EventType[]) {
      state.events = events
    },
  },
  actions: {
    async eventCreate({ commit }, event: EventType) {
      return EventService.postEvent(event).then(() => {
        commit('EVENT_CREATE', event)
      })
    },
    async eventsFetch({ commit }) {
      return EventService.getEvents()
        .then(response => commit('EVENTS_SET', response.data))
        .catch(error => console.error(error.message))
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
