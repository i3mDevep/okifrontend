import api from '../instance'

export const serviceListMarks = async () => {
    return await api.get('/marks/')
}