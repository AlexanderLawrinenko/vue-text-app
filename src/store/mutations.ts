import { MutationTree } from 'vuex'
import { State } from './state'
import { Rate, ExchangeOptions, HistoryOption } from '../types/types'

export enum MutationTypes {
  SET_EXCHANGE_OPTIONS = 'SET_EXCHANGE_OPTIONS',
  SET_RATES = 'SET_RATES',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_CURRENCIES = 'SET_CURRENCIES',
  SET_HISTORY = 'SET_HISTORY'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_RATES](state: S, payload: Array<Rate>): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_EXCHANGE_OPTIONS](state: State, payload: ExchangeOptions) {
    state.exchangeOptions = payload
  },
  [MutationTypes.SET_RATES](state: State, payload: Array<Rate>) {
    state.rates = payload
  },
  [MutationTypes.SET_IS_LOADING](state: State, payload: boolean) {
    state.isLoading = payload
  },
  [MutationTypes.SET_CURRENCIES](state: State, payload: Array<string>) {
    state.currencies = payload
  },
  [MutationTypes.SET_HISTORY](state: State, payload: Array<HistoryOption>) {
    state.history = payload
  }
}
