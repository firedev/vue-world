const namespaced = true

const state = ['vue', 'typescript']

const getters = {
  catLength: state => state.length,
}

export { namespaced, state, getters }
