import currenctService from '@/services/currency/currency';

import { ActionTree } from 'vuex';
import { CurrencyState } from '@/shared/interfaces/store/types';
import { RootState } from '@/shared/interfaces/store/types';


export const actions: ActionTree<CurrencyState, RootState> = {
  async getCurrency({ commit }): Promise<boolean> {
    try {
      const { data } = await currenctService.getCurrency()
      commit('SET_RATES', data)
      commit('SET_CURRENCIES', data)
      return true
    } catch (error) {
      console.error(error)
      return false
    } finally {
      console.log('ssucces')
    }
  },
  conversionCurrencies({ commit }, payload) {
    commit('CALCULATE_RATE', payload)
  }
};