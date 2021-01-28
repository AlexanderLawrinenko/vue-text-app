import { ActionTree } from 'vuex';
import StoreControl from '@/plugins/curreciesControl';
import { RootState } from '@/shared/interfaces/store/types';


export const actions: ActionTree<RootState, RootState> = {
    initHistory({ commit }) {
        const historyList = StoreControl.getStore()
        if (historyList) commit('SET_HISTORY', historyList)
      }
}