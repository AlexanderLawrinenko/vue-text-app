import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    headers: {'Content-Type': 'application/json'}
})

export default instance