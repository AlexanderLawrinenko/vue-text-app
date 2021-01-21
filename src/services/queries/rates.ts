import { api, API } from '@/services/api'

export const fetchRates = async() => {
  const { data } = await api.get(API.GET_RATES)
  return data
}
