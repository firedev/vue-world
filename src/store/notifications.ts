enum Mutations {
  PUSH = 'PUSH',
  DELETE = 'DELETE',
}

let nextId = 1

const namespaced = true

const state = {
  notifications: [
    { type: 'error', message: 'hello', id: 0 },
  ] as NotificationType[],
}

const mutations = {
  [Mutations.PUSH]: (state, notification) =>
    state.notifications.push({
      ...notification,
      id: nextId++,
    }),
  [Mutations.DELETE]: (state, id) => {
    state.notifications = state.notifications.filter(
      (n: { id: number }) => n.id != id,
    )
  },
}

const actions = {
  add: ({ commit }, notification) => commit(Mutations.PUSH, notification),
  remove: ({ commit }, id) => commit(Mutations.DELETE, id),
}

export { namespaced, state, mutations, actions }
