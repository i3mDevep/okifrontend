import api from '../instance'

export const serviceListCardShops = async () => {
    return await api.get('/car-shops/')
}
export const serviceAddProduct = async (body) => {
    return await api.post('/car-shops/', body)
}