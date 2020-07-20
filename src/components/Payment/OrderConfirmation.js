import React, { useState, useEffect } from 'react'
import './../../index.scss'
import { pushToHistory, clearCart } from '../../api/cartIndex'

// THIS FUNCTION NEEDS TO RECEIVE CARTARRY and onwerID FROM ITEMSINCART.JS
const OrderConfirmation = props => {
  const cartArray = props.location.cartArray
  const userId = props.location.userId
  const setCartArray = props.location.setCartArray

  const [orderNum, setOrderNum] = useState(null)
  // create holding object to popoulate orderHistory schema
  let containerObject = {}
  console.log(cartArray)
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
        .then(() => console.log('successfully added to history. Redirect the user from this line.'))
        .catch(() => console.log('failed to push items to user history'))
      for (let cartQuantity = cartArray.length - 1; cartQuantity > 0; cartQuantity--) {
        clearCart(userId)
          .then(() => setCartArray([]))
          // add comment "Your cart is empty"
          .then(() => console.log('cart is empty'))
          .catch(() => console.log('failed to reset cart'))
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
    </div>
  )

  // reset user's cart to be empty (products subdoc in cart)
  // need to set inCart value back to false
}

export default OrderConfirmation
