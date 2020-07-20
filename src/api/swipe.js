import apiUrl from '../apiConfig'
import axios from 'axios'

export const payment = () => {
  return axios({
    url: apiUrl + '/pay',
    method: 'POST',
  })
}
