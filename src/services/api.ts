import axios from 'axios'

export const API = {
  GET_RATES: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
}

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

api.interceptors.request.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
