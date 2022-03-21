import axios from 'axios'

const cartRequest = axios.create({
  baseURL: 'https://www.escook.cn/api/cart'
})

export default cartRequest
