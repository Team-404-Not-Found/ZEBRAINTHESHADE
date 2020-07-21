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
  console.log(cartId, 'line 24')
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
export const clearCart = cartId => {
  console.log(cartId)
  return axios({
    url: apiUrl + '/carts/' + cartId,
    method: 'DELETE'
  })
}
// sending data to order history using userID
export const pushToHistory = (data, id) => {
  console.log(data)
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
  console.log(prodId, 'this is prodId')
  console.log(cartId, 'this cart id')
  return axios({
    url: 'https://protected-gorge-91362.herokuapp.com/carts/' + cartId + '/item/' + prodId,
    method: 'DELETE'
  })
}
