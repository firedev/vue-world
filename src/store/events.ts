import { getEvent, getEvents, postEvent } from '@/services/EventService'
import { Dispatch, Commit } from 'vuex/types'

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

interface ActionContext {
  dispatch: Dispatch
  commit: Commit
  state: EventStateType
  getters: { getEventById: Function }
  rootState: { user: UserType }
  // rootGetters: any
}

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
    { commit, dispatch, rootState }: ActionContext,
    event: EventType,
  ) =>
    postEvent(event)
      .then(() => {
        commit(Mutations.EVENT_CREATE, { ...event, user: rootState.user })
        const notification: NotificationType = {
          message: 'Event created',
        }
        dispatch('notifications/add', notification)
      })
      .catch((error: Error) => {
        const notification: NotificationType = {
          type: 'error',
          message: `There was an error creating event: ${error.message}`,
        }
        dispatch('notifications/add', notification, { root: true })
        console.log('hello')
        throw error
      }),
  eventsFetch: (
    { commit, dispatch }: ActionContext,
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
      .catch((error: Error) => {
        const notification: NotificationType = {
          type: 'error',
          message: `There was an error fetching events: ${error.message}`,
        }
        dispatch('notifications/add', notification, { root: true })
      })
  },
  eventFetch: (
    { commit, getters, dispatch }: ActionContext,
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
      .catch((error: Error) => {
        const notification: NotificationType = {
          type: 'error',
          message: `There was an error fetching event: ${error.message}`,
        }
        dispatch('notifications/add', notification, { root: true })
      })
  },
  eventClear: ({ commit }: ActionContext) => {
    commit(Mutations.EVENT_SET, { event: {} })
  },
}

const getters = {
  getEventById: (state: EventStateType) => (id: number) =>
    state.events.find((event: EventType) => event.id === id),
}

export { mutations, actions, getters, state, namespaced, EventStateType }
