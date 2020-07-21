import apiUrl from '../apiConfig'
import axios from 'axios'

export const productsIndex = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}

export const productsCreate = item => {
  return axios({
    url: apiUrl + '/products',
    method: 'POST',
    data: {
      product: item
    }
  })
}
