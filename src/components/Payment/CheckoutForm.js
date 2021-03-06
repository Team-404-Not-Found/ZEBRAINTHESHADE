import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { payment } from '../../api/swipe.js'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

import CardInput from './CardSection'

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
    setFakeAmount(props.location.total)
    payment(email, fakeAmount)
      .then(res => {
        return res.data['client_secret']
      })
      .then(res => {
        return stripe.confirmCardPayment(res, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: email
            }
          }
        })
      })
      .then(() => {
        props.history.push({
          pathname: '/orderconfirmation',
          cartArray: props.location.cartArray,
          userId: props.location.userId,
          setCartArray: props.location.setCartArray
        })
      })
      .then(() => props.msgAlert({
        heading: 'Payment Success!',
        message: messages.paymentSuccess,
        variant: 'success'
      }))
      // add comment "Payment failed. Try again."
      .catch(() => props.msgAlert({
        heading: 'Payment failed',
        message: messages.paymentFailure,
        variant: 'danger'
      }))
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
      <CardInput />
      <Button variant="rimary" type="submit" disabled={!stripe}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default withRouter(CheckoutForm)
