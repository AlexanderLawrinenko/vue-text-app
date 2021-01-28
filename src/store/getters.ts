import { GetterTree } from 'vuex';
import { RootState } from '@/shared/interfaces/store/types';

export const getters: GetterTree<RootState, RootState> = {
  getHistory(state) {
      return state.historyList
  }
};