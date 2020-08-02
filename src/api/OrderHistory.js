import apiUrl from '../apiConfig'
import axios from 'axios'

export const getOrderHistory = userId => {
  console.log(userId, ' this is user id on Api')
  return axios({
    url: apiUrl + '/user-orders/' + userId,
    method: 'GET'
  })
}
