import { GetterTree } from 'vuex'
import { State } from './state'
import { HistoryOption, Rate } from '../types/types'

export type Getters = {
  rates(state: State): Array<Rate> | null;
  isLoading(state: State): boolean;
  amount(state: State): string;
  exchangeFrom(state: State): string;
  exchangeTo(state: State): string;
  currencies(state: State): Array<string>;
  history(state: State): Array<HistoryOption> | null;
}

export const getters: GetterTree<State, State> & Getters = {
  rates: state => state.rates,
  isLoading: state => state.isLoading,
  amount: state => state.exchangeOptions.amount,
  exchangeFrom: state => state.exchangeOptions.from,
  exchangeTo: state => state.exchangeOptions.to,
  currencies: state => state.currencies,
  history: state => state.history
}
