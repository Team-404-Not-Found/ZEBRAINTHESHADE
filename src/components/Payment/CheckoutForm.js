import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { payment } from '../../api/swipe.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import CardSection from './CardSection'

const CheckoutForm = props => {
  const [email, setEmail] = useState('')
  const [fakeAmount, setFakeAmount] = useState(2)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    setFakeAmount(200)
    payment(email, fakeAmount)
      .then(res => {
        console.log('send back client secret')
        return res.data['client_secret']
      })
      .then(res => stripe.confirmCardPayment(res, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: email
          }
        }
      }))
      .then(() => console.log('payment success', props.location.cartArray))
      .then(() => {
        props.history.push({
          pathname: '/orderconfirmation',
          cartArray: props.location.cartArray,
          userId: props.location.userId,
          setCartArray: props.location.setCartArray
        })
      })
      .catch(() => console.log('payments failed'))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <CardSection />
      <Button variant="rimary" type="submit" disabled={!stripe}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default CheckoutForm
