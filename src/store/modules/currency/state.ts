import { CurrencyState } from '@/shared/interfaces/store/types';

export const state: CurrencyState = {
    rates: undefined,
    currencies: [],
    value: '',
    validation: true,
    result: undefined
};