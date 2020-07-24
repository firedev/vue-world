import { StateType } from '@/store'
import {
  getEvent,
  getEvents,
  postEvent,
  EventType,
} from '@/services/EventService'

enum Mutations {
  EVENT_CREATE = 'EVENT_CREATE',
  EVENTS_SET = 'EVENTS_SET',
  EVENT_SET = 'EVENT_SET',
}

const eventMutations = {
  [Mutations.EVENT_CREATE]: (state: StateType, event: EventType) => {
    state.events.push(event)
  },
  [Mutations.EVENTS_SET]: (
    state: StateType,
    { events, eventsTotal }: { events: EventType[]; eventsTotal: number },
  ) => {
    state.events = events
    state.eventsTotal = eventsTotal
  },
  [Mutations.EVENT_SET]: (
    state: StateType,
    { event }: { event: EventType },
  ) => {
    state.event = event
  },
}

const eventActions = {
  async eventCreate({ commit }: { commit: Function }, event: EventType) {
    postEvent(event).then(() => {
      commit(Mutations.EVENT_CREATE, event)
    })
  },
  async eventsFetch(
    { commit }: { commit: Function },
    { perPage, page }: { perPage: number; page: number },
  ) {
    getEvents({ perPage, page })
      .then(
        (response: {
          data: EventType[]
          headers: { 'x-total-count': string }
        }) =>
          commit(Mutations.EVENTS_SET, {
            events: response.data,
            eventsTotal: parseInt(response.headers['x-total-count']),
          }),
      )
      .catch((error: Error) => console.error(error.message))
  },
  async eventFetch(
    {
      commit,
      getters,
    }: { commit: Function; getters: { getEventById: Function } },
    { id }: { id: number },
  ) {
    const event = getters.getEventById(id)
    if (event) {
      commit(Mutations.EVENT_SET, { event: event })
    }
    getEvent(id)
      .then((response: { data: EventType }) =>
        commit(Mutations.EVENT_SET, { event: response.data }),
      )
      .catch((error: Error) => console.error(error.message))
  },
  async eventClear({ commit }: { commit: Function }) {
    commit(Mutations.EVENT_SET, { event: {} })
  },
}

const eventGetters = {
  getEventById: (state: StateType) => (id: number) =>
    state.events.find((event: EventType) => event.id === id),
}

export { eventMutations, eventActions, eventGetters }
