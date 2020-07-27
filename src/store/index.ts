import Vue from 'vue'
import Vuex from 'vuex'

import * as events from '@/store/events'
import * as user from '@/store/user'
import * as notifications from '@/store/notifications'
import * as categories from '@/store/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { events, user, notifications, categories },
})

type StoreType = typeof store
type StateType = typeof store.state
export { StoreType, StateType }
export default store
