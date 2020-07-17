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

export const getCart = id => {
  return axios({
    url: apiUrl + '/carts/' + id,
    method: 'GET'
  })
}
