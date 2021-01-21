import { getHistory } from '@/utils/exchangeHistory'
import { ExchangeOptions, HistoryOption, Rate } from '../types/types'

export type State = {
  history: Array<HistoryOption> | null;
  exchangeOptions: ExchangeOptions;
  isLoading: boolean;
  rates: Array<Rate> | null;
  currencies: Array<string>;
}

export const state: State = {
  history: getHistory(),
  exchangeOptions: {
    amount: '0',
    from: '',
    to: ''
  },
  isLoading: false,
  rates: null,
  currencies: []
}
