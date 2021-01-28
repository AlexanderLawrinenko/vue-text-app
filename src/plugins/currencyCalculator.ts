import { Rate, OptionsRate } from '@/shared/interfaces/store/types';
import StoreControl from './curreciesControl'

export const currencyCalculator = (rates: Array<Rate>, options: OptionsRate): OptionsRate => {
    let value = 0
    // determining the type of conversion
    const rate: Rate | undefined = rates.find(value => (value.base_ccy === options.from || value.base_ccy === options.to) && (value.ccy === options.from || value.ccy === options.to))
    if (rate) {
        // standart conversion
        if(options.from === rate.ccy) value = Number(options.value) * Number(rate.buy)
        else value = Number(options.value) / Number(rate.sale)
    } else {
        if (options.from !== 'BTC' && options.to !== 'BTC') {
            // currency conversion via UAH
            const fronIndex = rates.findIndex(value => value.ccy === options.from)
            const toIndex = rates.findIndex(value => value.ccy === options.to)          
            value = (Number(options.value) * Number(rates[fronIndex].buy)) / Number(rates[toIndex].buy)
        } else {
            // currency conversion via USD and UAH
            const btcIndex = rates.findIndex(value => value.ccy === 'BTC')
            const baseIndex = rates.findIndex(value => rates[btcIndex].base_ccy === value.ccy)
            if (options.from === 'BTC') {
                const orientation = rates.findIndex(value => value.base_ccy === options.to)
                const base = +options.value * +rates[btcIndex].sale
                if (orientation >= 0) {
                    value = base * +rates[orientation].sale
                } else {
                    const toIndex = rates.findIndex(value => value.ccy === options.to)
                    value = base * +rates[baseIndex].sale / +rates[toIndex].buy
                }
            } else if (options.to === 'BTC') {
                const orientation = rates.findIndex(value => value.base_ccy === options.from)
                const base = +options.value / +rates[btcIndex].buy
                if (orientation >= 0) {
                    value = base / +rates[orientation].buy
                } else {
                    const toIndex = rates.findIndex(value => value.ccy === options.from)
                    value = base / +rates[baseIndex].buy * +rates[toIndex].sale
                }
            }
        }
    }
    const hitory: OptionsRate = {
        ...options,
        result: value.toFixed(2)
    }
    StoreControl.setStore(hitory)
    return hitory
}