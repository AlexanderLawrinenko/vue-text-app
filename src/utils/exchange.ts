import { ExchangeOptions, Rate } from '@/types/types'
import { logHistory } from './exchangeHistory'

export const convert = (rates: Array<Rate>, { amount, from, to }: ExchangeOptions): number => {
  if (from === to) {
    return +amount
  }

  /* Simple conversion */

  let rateIndex = -1
  let temp: number
  let result: number
  const btcRateIndex = rates.findIndex((rate: Rate) => rate.ccy === 'BTC')

  if (rates.findIndex((rate: Rate) => rate.base_ccy === from && rate.ccy === to) > -1) {
    rateIndex = rates.findIndex((rate: Rate) => rate.base_ccy === from && rate.ccy === to)
    result = (+amount) / (+rates[rateIndex].sale)
    logHistory({ amount, from, to, result })
    return result
  }
  if (rates.findIndex((rate: Rate) => rate.ccy === from && rate.base_ccy === to) > -1) {
    rateIndex = rates.findIndex((rate: Rate) => rate.ccy === from && rate.base_ccy === to)
    result = (+amount) * (+rates[rateIndex].buy)
    logHistory({ amount, from, to, result })
    return result
  }

  /* Double conversion */

  rateIndex = rates.findIndex((rate: Rate) => rate.ccy === from)

  if (from !== 'BTC' && to !== 'BTC') {
    temp = (+amount) * (+rates[rateIndex].buy)
    rateIndex = rates.findIndex((rate: Rate) => rate.ccy === to)
    result = temp / (+rates[rateIndex].sale)
    logHistory({ amount, from, to, result })
    return result
  }

  /* BTC conversion */

  // from BTC
  if (from === 'BTC') {
    // to UAH
    temp = (+amount) * (+rates[btcRateIndex].buy)
    rateIndex = rates.findIndex((rate: Rate) => rate.base_ccy === to)

    if (rateIndex > -1) {
      result = temp * (+rates[rateIndex].buy)
      logHistory({ amount, from, to, result })
      return result
    }

    // to another currency
    temp = temp * (+rates[rates.findIndex((rate: Rate) => rate.ccy === 'USD')].buy)
    rateIndex = rates.findIndex((rate: Rate) => rate.ccy === to)
    result = temp / (+rates[rateIndex].sale)
    logHistory({ amount, from, to, result })
    return result
  }

  // to BTC

  // from UAH
  rateIndex = rates.findIndex((rate: Rate) => rate.base_ccy === from && rate.ccy === 'USD')
  if (rateIndex > -1) {
    result = (+amount) / (+rates[rateIndex].sale) / (+rates[btcRateIndex].sale)
    logHistory({ amount, from, to, result })
    return result
  }

  // from another currency
  rateIndex = rates.findIndex((rate: Rate) => rate.ccy === from)
  temp = (+amount) * (+rates[rateIndex].buy)
  rateIndex = rates.findIndex((rate: Rate) => rate.ccy === 'USD')
  temp = temp / (+rates[rateIndex].sale)
  result = temp / (+rates[btcRateIndex].sale)
  logHistory({ amount, from, to, result })
  return result
}
