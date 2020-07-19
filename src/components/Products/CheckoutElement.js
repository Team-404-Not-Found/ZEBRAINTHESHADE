import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { handleChange } from './ItemStyling'
const CheckoutElement = ({ price, quantity, id }) => {
  const [subTotal, setSubTotal] = useState(0)
  const handleChangeSubTotal = (newQuan, price) => {
    handleChange(newQuan)
    console.log(newQuan, ' this is quan')
    console.log(price, ' this is Price')
    const subTotal = setSubTotal(newQuan * price)
    return subTotal
  }
  return (
    <div className='checkout-section'>
      <div className='checkout-element'>
        <div className='column'>
          <div className='checkout'
            onChange={ handleChangeSubTotal }>{subTotal}</div>
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
