import apiUrl from '../apiConfig'
import axios from 'axios'

export const cartIndex = (userId) => {
  return axios({
    url: apiUrl + '/carts',
    method: 'POST',
    data: {
      cart: {
        owner: userId
      }
    }
  })
}

// using OwnerId
export const getCart = id => {
  return axios({
    url: apiUrl + '/carts/' + id,
    method: 'GET'
  })
}

export const pushToCart = (cartId, prodId) => {
  return axios({
    url: apiUrl + '/carts/' + cartId,
    method: 'POST',
    data: {
      item: {
        id: prodId
      }
    }
  })
}

export const itemInCart = (prodId, boolean) => {
  return axios({
    url: apiUrl + '/products/' + prodId,
    method: 'PATCH',
    data: {
      product: {
        inCart: boolean
      }
    }
  })
}
export const clearCart = cartId => {
  return axios({
    url: apiUrl + '/carts/' + cartId,
    method: 'DELETE'
  })
}
// sending data to order history using userID
export const pushToHistory = (data, id) => {
  return axios({
    url: apiUrl + '/orders/' + id,
    method: 'POST',
    data: {
      order: {
        productId: data.productId,
        name: data.name,
        imageUrl: data.imageUrl,
        receiptNumber: data.receiptNumber
      }
    }
  })
}

export const destroyItemInCart = (cartId, prodId) => {
  return axios({
    url: apiUrl + '/carts/' + cartId + '/item/' + prodId,
    method: 'DELETE'
  })
}
