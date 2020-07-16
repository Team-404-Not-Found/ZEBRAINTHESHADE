import apiUrl from '../apiConfig'
import axios from 'axios'

export const productsIndex = () => {
  return axios({
    url: apiUrl + '/products',
    method: 'GET'
  })
}
