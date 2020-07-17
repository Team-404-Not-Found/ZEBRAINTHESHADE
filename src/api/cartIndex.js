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
    url: 'https://protected-gorge-91362.herokuapp.com/carts/' + cartId,
    method: 'POST',
    data: {
      item: {
        id: prodId
      }
    }
  })
}
