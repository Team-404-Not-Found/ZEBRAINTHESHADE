import React from 'react'
import './../../index.scss'

const CartItems = props => (
  <div>
    <h1 className='cartName'>❀Cart❀</h1>
    <div className="cart-box">
      {props.children}
    </div>
  </div>
)

export default CartItems
