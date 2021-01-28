import { CurrencyState } from '@/shared/interfaces/store/types';
import { RootState } from '@/shared/interfaces/store/types';
import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';


const namespaced = true;

export const currency: Module<CurrencyState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};