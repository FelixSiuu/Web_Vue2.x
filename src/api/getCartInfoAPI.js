import cartRequest from '@/utils/cartRequest.js'

export const getCartInfoAPI = () => {
  return cartRequest.get()
}
