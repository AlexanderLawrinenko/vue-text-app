import { OptionsRate } from '@/shared/interfaces/store/types';

const storageName = 'hitory-conversion'

export default {
    // get history of calculations
    getStore(): Array<OptionsRate> | undefined{
        const storage = localStorage.getItem(storageName)
        if (storage) return JSON.parse(storage)
        else return undefined
    },
    // set history of calculations
    setStore(data: OptionsRate){
        const storage = localStorage.getItem(storageName)
        if (storage) {
            const arr = JSON.parse(storage)
            arr.push(data)
            localStorage.setItem(storageName, JSON.stringify(arr))
        } else {
            const arr = []
            arr.push(data)
            localStorage.setItem(storageName, JSON.stringify(arr))
        }
    },
}