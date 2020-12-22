import api from '../instance'

export const ServiceListProducts = async (params) => {
    return await api.get('/products/' + params)
}