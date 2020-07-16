import apiUrl from '../apiConfig'
import axios from 'axios'

export const cartIndex = () => {
  return axios({
    url: apiUrl + '/cart',
    method: 'GET'
  })
}
