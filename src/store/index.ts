import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/shared/interfaces/store/types';
import { currency } from './modules/currency/index';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    historyList: undefined
  },
  getters,
  mutations,
  actions,
  modules: {
    currency
  }
};

export default new Vuex.Store<RootState>(store);
