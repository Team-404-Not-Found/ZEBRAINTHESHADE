import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'

const Card_Element_Options = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  }
}
function CardInput() {
  return (
    <div>
      <ChardElement options={Card_Element_Options} />
    </div>
  )
}
