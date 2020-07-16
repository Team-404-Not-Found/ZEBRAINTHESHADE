import apiUrl from '../apiConfig'
import axios from 'axios'

export const productsIndex = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}

export const productsCreate = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'POST',
    data: {
      products: {
        name: '',
        price: '',
        description: '',
        imageUrl: '',
        category: '',
        quantity: '',
        seller: ''
      }
  })
}
