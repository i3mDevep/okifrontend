import api from '../instance'

export const signIn = async (body) => {
    return await api.post('/token/', body)
}