import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51H7DjEJ3lyWOxdaDMXs2gwrGxC2EVaBlUuWqL5MwYdnhQuUsWKi5oXQwdlskl7L4qIXAFlf4q7rOW6mghBs9Iv2f00Cq5a1ucX')

const appJsx = (
  <HashRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
