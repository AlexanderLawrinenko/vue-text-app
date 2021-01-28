import { currencyCalculator } from '@/plugins/currencyCalculator';
import { MutationTree } from 'vuex';
import { CurrencyState, Rate } from '@/shared/interfaces/store/types';

export const mutations: MutationTree<CurrencyState> = {
  SET_RATES(state, payload: Array<Rate>) {  
    state.rates = payload;
  },
  SET_CURRENCIES(state, payload: Array<Rate>) {
    const arr = []
    const length = payload.length
    for (let i = 0; i < length; i++) {
      arr.push(payload[i].ccy, payload[i].base_ccy)
    }
    state.currencies = [...new Set(arr)]
  },
  SET_VALUE(state, payload: string) {
    if (/^([0-9]+)\.?[0-9]{0,5}$/.test(payload)) {
      state.value = payload
      state.validation = false
    } else {
      state.validation = true
    }
  },
  CALCULATE_RATE(state, payload) {
    const value = payload
    value.value = state.value
    state.result = currencyCalculator(state.rates!, value)
  }
};