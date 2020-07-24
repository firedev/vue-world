import { getEvent, getEvents, postEvent } from '@/services/EventService'

enum Mutations {
  EVENT_CREATE = 'EVENT_CREATE',
  EVENTS_SET = 'EVENTS_SET',
  EVENT_SET = 'EVENT_SET',
}

const state = {
  event: {},
  events: new Array<EventType>(),
  total: 0,
}

type EventStateType = typeof state

const namespaced = true

const mutations = {
  [Mutations.EVENT_CREATE]: (state: EventStateType, event: EventType) => {
    state.events.push(event)
  },
  [Mutations.EVENTS_SET]: (
    state: EventStateType,
    { events, total }: { events: EventType[]; total: number },
  ) => {
    state.events = events
    state.total = total
  },
  [Mutations.EVENT_SET]: (
    state: EventStateType,
    { event }: { event: EventType },
  ) => {
    state.event = event
  },
}

const actions = {
  eventCreate: (
    { commit, rootState }: { commit: Function; rootState: { user: object } },
    event: EventType,
  ) =>
    postEvent(event).then(() => {
      commit(Mutations.EVENT_CREATE, { ...event, user: rootState.user })
    }),
  eventsFetch: (
    { commit }: { commit: Function },
    { perPage, page }: { perPage: number; page: number },
  ) => {
    getEvents({ perPage, page })
      .then(
        (response: {
          data: EventType[]
          headers: { 'x-total-count': string }
        }) =>
          commit(Mutations.EVENTS_SET, {
            events: response.data,
            total: parseInt(response.headers['x-total-count']),
          }),
      )
      .catch((error: Error) => console.error(error.message))
  },
  eventFetch: (
    {
      commit,
      getters,
    }: { commit: Function; getters: { getEventById: Function } },
    { id }: { id: number },
  ) => {
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
  eventClear: ({ commit }: { commit: Function }) => {
    commit(Mutations.EVENT_SET, { event: {} })
  },
}

const getters = {
  getEventById: (state: EventStateType) => (id: number) =>
    state.events.find((event: EventType) => event.id === id),
}

export { mutations, actions, getters, state, namespaced, EventStateType }
