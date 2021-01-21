import { useStore } from '@/store'
import { MutationTypes } from '@/store/mutations'
import { HistoryOption } from '@/types/types'

export const getHistory = (): Array<HistoryOption> | null => {
  const historyString = localStorage.getItem('history')
  if (historyString) {
    return JSON.parse(historyString)
  }
  return null
}

export const logHistory = (historyOption: HistoryOption) => {
  const store = useStore()
  const history = getHistory() || []
  history.push({
    ...historyOption,
    date: new Date().toISOString()
  })
  localStorage.setItem('history', JSON.stringify(history))
  store.commit(MutationTypes.SET_HISTORY, history)
}

export const formatDate = (date: string): string => {
  console.log(date)
  const newDate = new Date(date)
  let dd = newDate.getDate().toString()
  if (+dd < 10) dd = '0' + dd

  let mm = (newDate.getMonth() + 1).toString()
  if (+mm < 10) mm = '0' + mm

  let yy = (newDate.getFullYear() % 100).toString()
  if (+yy < 10) yy = '0' + yy

  let h = newDate.getHours().toString()
  if (+h < 10) h = '0' + h

  let m = newDate.getMinutes().toString()
  if (+m < 10) m = '0' + m

  return `${dd}/${mm}/${yy} ${h}:${m}`
}
