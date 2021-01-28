import { MutationTree } from 'vuex';
import { RootState } from '@/shared/interfaces/store/types';

export const mutations: MutationTree<RootState> = {
    SET_HISTORY(state, payload) {
        state.historyList = payload
    }
}