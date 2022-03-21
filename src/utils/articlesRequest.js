import axios from 'axios'

const articlesRequest = axios.create({
  baseURL: 'https://www.escook.cn'
})

export default articlesRequest
