import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51H6kFYHJE1XkBAfRvYZk0W68Omxgi0jup31TvJAccD6Gas2qBRTRzgeOmirTeadKcrSGzklO8dtd62SdX7g1Ordo00SA2FgUdJ')

const appJsx = (
  <HashRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
