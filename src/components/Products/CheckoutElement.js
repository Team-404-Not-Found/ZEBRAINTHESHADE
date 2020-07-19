import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
const CheckoutElement = ({ name, price, imageUrl, quantity, id }) => {
  const [subTotal, setSubTotal] = useState(0)
  const [quan, setQuantity] = useState({ quantity: parseInt(0) })
  const handleChangeQuantity = event => {
    event.persist()
    setQuantity(prevQuan => {
      const updatedQuan = { [event.target.name]: event.target.value }
      const newQuan = Object.assign({}, prevQuan, updatedQuan)
      console.log(newQuan, 'this is new quam')
      return newQuan
    })
  }
  const handleChangeSubTotal = (newQuan, price) => {
    const q = handleChangeQuantity(newQuan)
    const subTotal = setSubTotal(q * price)
    return subTotal
  }
  return (
    <div className='checkout-section'>
      <div className='checkout-element'>
        <div className='column'>
          <div className='checkout'
            value={quan.quantity}
            onChange={ handleChangeSubTotal }>Subtotal:{subTotal}</div>
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
