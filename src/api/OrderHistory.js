import apiUrl from '../apiConfig'
import axios from 'axios'

export const getOrderHistory = userId => {
  return axios({
    url: apiUrl + '/user-orders/' + userId,
    method: 'GET'
  })
}
