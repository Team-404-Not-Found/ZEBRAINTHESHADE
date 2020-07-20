import apiUrl from '../apiConfig'
import axios from 'axios'

export const payment = (email, amount) => {
  console.log('this was called')
  return axios({
    url: apiUrl + '/pay',
    method: 'POST',
    data: {
      email: email,
      amount: amount
    }
  })
}
