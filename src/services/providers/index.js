import api from '../instance'

export const serviceListProviders = async () => {
    return await api.get('/providers/')
}