import React, { useState, useEffect } from 'react'
import './../../index.scss'
import CartItem from './CartItems'
import { getCart } from '../../api/cartIndex'
import ItemStyling from './ItemStyling'
import { withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
  const [total, setTotalArray] = useState([])

  const subTotal = value => {
    setTotalArray(total.concat(value))
  }

  const handleCheckout = event => {
    props.history.push({
      pathname: '/cardinput',
      cartArray: cartArray,
      userId: props.user._id,
      setCartArray: setCartArray
    })
  }
  useEffect(() => {
    getCart(props.user._id)
      // .then(res => setCartArray(res.data.cart.products.toString()))
      .then(res => setCartArray(res.data.cart.products))
      // add comment "Edit or review your cart. Proceed to checkout when you are ready!"
      .then(() => console.log('this worked'))
      .then(() => props.msgAlert({
        heading: 'Review your Cart',
        message: messages.cartArraySuccess,
        variant: 'success'
      }))
      // add comment "Oops something is wrong with your cart"
      .catch(() => console.log('failed to complete SHOW request for cart'))
  }, [])
  return (
    <CartItem>
      <div>
        <Form.Group controlId="quantity">
          {cartArray.map(product => (
            <ItemStyling
              key={product.name}
              id={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              quantity={product.quantity}
              pushSubTotal={subTotal}
            />
          ))}
        </Form.Group>
      </div>
      <Button onClick={handleCheckout}>Proceed to Checkout</Button>
      <h3>the total is: {total.forEach(total => console.log(total))}</h3>
    </CartItem>
  )
}
export default withRouter(ItemsInCart)
