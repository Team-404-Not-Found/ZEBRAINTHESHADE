import React, { useState, useEffect } from 'react'
import './../../index.scss'
import { pushToHistory, clearCart, itemInCart } from '../../api/cartIndex'
import Item from '../Products/Item'

// THIS FUNCTION NEEDS TO RECEIVE CARTARRY and onwerID FROM ITEMSINCART.JS
const OrderConfirmation = props => {
  const cartArray = props.location.cartArray
  const userId = props.location.userId
  const setCartArray = props.location.setCartArray

  const [orderNum, setOrderNum] = useState(null)
  // create holding object to popoulate orderHistory schema
  let containerObject = {}
  // populate the keys that the orderHistory schema needs
  useEffect(() => {
    cartArray.map(item => {
      containerObject = {
        productId: item._id,
        name: item.name,
        imageUrl: item.imageUrl,
        receiptNumber: 'some String from stripe'
      }
      // give object to order history API call along with ownerID
      pushToHistory(containerObject, userId)
        // add comment "You can view this item in your order history"
        .catch()
      for (let cartQuantity = cartArray.length - 1; cartQuantity >= 0; cartQuantity--) {
        itemInCart(cartArray[cartQuantity]._id, false)
          // .then(() => console.log(cartArray[cartQuantity]._id))
        clearCart(userId)
          .then(() => setCartArray([]))
          // add comment "Your cart is empty"
          .catch()
      }
    })
  }, [])

  useEffect(() => {
    setOrderNum(() => {
      return Math.floor(Math.random() * 1000000)
    })
  }, [])

  return (
    <div>
      <h2>Order has been successfully placed</h2>
      <h3>Your order number is {orderNum}</h3>
      {cartArray.map((item, i) => (
        <Item
          key={i}
          id={item._id}
          name={item.name}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )

  // reset user's cart to be empty (products subdoc in cart)
  // need to set inCart value back to false
}

export default OrderConfirmation
