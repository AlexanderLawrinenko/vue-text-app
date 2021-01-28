import Instance from '@/api'

export default {
    async getCurrency () {
        return await Instance.get('').then( resp => resp)
    }
}