import Vue from 'vue'
import Vuex from 'vuex'
import EventService, { EventType } from '@/services/EventService'

const EVENT_CREATE = 'EVENT_CREATE'
const EVENTS_SET = 'EVENTS_SET'

Vue.use(Vuex)
const state = {
  user: {
    id: 'nick',
    name: 'Nikolay X',
  },
  events: new Array<EventType>(),
  eventsTotal: 0,
  categories: ['vue', 'typescript'],
}

const store = new Vuex.Store({
  state,
  mutations: {
    [EVENT_CREATE]: (state, event: EventType) => {
      state.events.push(event)
    },
    [EVENTS_SET]: (
      state,
      { events, eventsTotal }: { events: EventType[]; eventsTotal: number },
    ) => {
      state.events = events
      state.eventsTotal = eventsTotal
    },
  },
  actions: {
    async eventCreate({ commit }, event: EventType) {
      return EventService.postEvent(event).then(() => {
        commit(EVENT_CREATE, event)
      })
    },
    async eventsFetch({ commit }, { perPage, page }) {
      return EventService.getEvents({ perPage, page })
        .then(response =>
          commit(EVENTS_SET, {
            events: response.data,
            eventsTotal: parseInt(response.headers['x-total-count']),
          }),
        )
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
