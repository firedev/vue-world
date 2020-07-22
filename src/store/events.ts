import { StoreType, StateType } from '@/store'
import EventService, { EventType } from '@/services/EventService'

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
  async eventCreate({ commit }, event: EventType) {
    return EventService.postEvent(event).then(() => {
      commit(Mutations.EVENT_CREATE, event)
    })
  },
  async eventsFetch({ commit }, { perPage, page }) {
    return EventService.getEvents({ perPage, page })
      .then(response =>
        commit(Mutations.EVENTS_SET, {
          events: response.data,
          eventsTotal: parseInt(response.headers['x-total-count']),
        }),
      )
      .catch(error => console.error(error.message))
  },
  async eventFetch({ commit }, { id }: { id: number }) {
    return EventService.getEvent(id)
      .then(response => commit(Mutations.EVENT_SET, { event: response.data }))
      .catch(error => console.error(error.message))
  },
}

export { eventMutations, eventActions }
