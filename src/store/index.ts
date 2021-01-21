import { createStore } from 'vuex'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { state } from './state'

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export type Store = typeof store

export function useStore() {
  return store as Store
}

export default store
