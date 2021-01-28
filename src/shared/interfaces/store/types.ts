import { CurrencySymbol } from './enums'

export interface RootState {
    historyList: Array<OptionsRate> | undefined
}

export interface CurrencyState {
    rates: Array<Rate> | undefined
    currencies: Array<string> | []
    value: string
    validation: boolean
    result: OptionsRate | undefined
}

export type Rate = {
    ccy: string;
    base_ccy: string;
    buy: string;
    sale: string;
}

export type OptionsRate = {
    from: string
    to: string
    value: string
    result?: string
}