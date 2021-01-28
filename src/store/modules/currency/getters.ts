import { GetterTree } from 'vuex';
import { CurrencyState, RootState, Rate, OptionsRate } from '@/shared/interfaces/store/types';

export const getters: GetterTree<CurrencyState, RootState> = {
  getRatesList(state): Array<Rate> | undefined {
    return state.rates
  },
  getCurrenciesList(state): Array<string> {
    return state.currencies
  },
  getCurrencyValue(state): string {
    return state.value
  },
  getValueValid(state): boolean {
    return state.validation
  },
  getResulr(state): OptionsRate | undefined {
    return state.result
  }
};