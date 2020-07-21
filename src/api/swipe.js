import apiUrl from '../apiConfig'
import axios from 'axios'

export const payment = (email, amount) => {
  return axios({
    url: apiUrl + '/pay',
    method: 'POST',
    data: {
      email: email,
      amount: amount
    }
  })
}
