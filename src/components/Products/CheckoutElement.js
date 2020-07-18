import React from 'react'
import Button from 'react-bootstrap/Button'
const CheckoutElement = ({ name, price, imageUrl, quantity, id }) => {

  return (
    <div className='checkout-section'>
      <div className='checkout-element'>
        <div className='column'>
          <div className='checkout'>Subtotal:{calSubtotal}</div>
          <div className='checkout'>Taxes(7%):</div>
          <div className='checkout'>Shipping:$5</div>
        </div>
        <div className='column'>
          <div className='checkout'>Total:</div>
          <Button
            className='checkout-btn'
            variant="info"
            type="submit"
          >
        Checkout
          </Button>
        </div>
      </div>
    </div>

  )
}

export default CheckoutElement
