import { fetchRates } from '@/services/queries/rates'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationTypes } from './mutations'
import { State } from './state'
import { Rate } from '../types/types'

export enum ActionTypes {
  SET_RATES = 'SET_RATES'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.SET_RATES](
    { commit }: AugmentedActionContext,
    payload: Array<Rate>
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [MutationTypes.SET_RATES]({ commit }) {
    try {
      const data = await fetchRates()
      commit(MutationTypes.SET_RATES, data)
    } catch (error) {
      alert(error)
    }
  }
}
