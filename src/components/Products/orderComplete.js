import React from 'react'
import './../../index.scss'
import { pushToHistory, clearCart } from '../../api/cartIndex'

// THIS FUNCTION NEEDS TO RECEIVE CARTARRY FROM ITEMSINCART.JS
const test = event => {
  // create holding object to popoulate orderHistory schema
  let containerObject = {}
  event.preventDefault()
  console.log(cartArray)
  // populate the keys that the orderHistory schema needs
  cartArray.map(item => {
    containerObject = {
      productId: item._id,
      name: item.name,
      imageUrl: item.imageUrl,
      receiptNumber: 'some String from stripe'
    }
    pushToHistory(containerObject, props.user._id)
      .then(() => console.log('successfully added to history. Redirect the user from this line.'))
      .catch(() => console.log('failed to push items to user history'))
    for (let cartQuantity = cartArray.length - 1; cartQuantity > 0; cartQuantity--) {
      clearCart(props.user._id)
        .then(() => setCartArray([]))
        .then(() => console.log('cart is empty'))
        .catch(() => console.log('failed to reset cart'))
    }
  })
  // give object to order history API call
  // reset user's cart to be empty (products subdoc in cart)
  // need to set inCart value back to false
}
