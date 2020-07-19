import React, { useState, useEffect } from 'react'
import './../../index.scss'
import CartItem from './CartItems'
import { getCart, pushToHistory, clearCart } from '../../api/cartIndex'
import ItemStyling from './ItemStyling'
const ItemsInCart = props => {
  // onClick -> give us product info, including cartID and OwnerID.
  // need cartID and and productID in order to make API call.
  // When we call this component, we need to pass props 1. cartID 2. productID 3. Inventory Quantity
  // Initiate API call when item is added to cart to push product into subdocument using cartID and productID - API CALL WORKS
  // THIS COMPONENT SHOULD RENDER EACH ITEM IN PRODUCT ARRAY OF CART.
  // Functionally - 2 things:
  // 1. API call to push products
  // 2. Comparison of purchasequant to inventory quant (value is derived from "Add to Cart" click)
  // When rendering (OUTPUTS):
  // Props: 1. productID 2. PurchaseQuantity
  // On API response, load in another array with each object in cart.
  // Create array that holds each item's (object) details that we want to store to api
  // Add receiptID to array that needs to be added to api.
  // on success, push to api
  const [cartArray, setCartArray] = useState([])
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
  useEffect(() => {
    getCart(props.user._id)
      // .then(res => setCartArray(res.data.cart.products.toString()))
      .then(res => setCartArray(res.data.cart.products))
      .then(() => console.log('this worked'))
      .catch(() => console.log('failed to complete SHOW request for cart'))
  }, [])
  return (
    <CartItem>
      <div>
        {cartArray.map(product => (
          <ItemStyling
            key={product.name}
            id={product._id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
          />
        ))}
      </div>
      <button onClick={test}>Print the cart</button>
    </CartItem>
  )
}
export default ItemsInCart
