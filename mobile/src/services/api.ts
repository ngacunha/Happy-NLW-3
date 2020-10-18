import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.21.67.145:3333/'
})

export default api