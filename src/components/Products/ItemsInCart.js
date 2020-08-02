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
  const [cartCost, setCartCost] = useState([])
  const [total, setTotal] = useState(null)

  const handleCheckout = event => {
    props.history.push({
      pathname: '/cardinput',
      cartArray: cartArray,
      userId: props.user._id,
      setCartArray: setCartArray,
      total: total
    })
  }
  useEffect(() => {
    getCart(props.user._id)
      // .then(res => setCartArray(res.data.cart.products.toString()))
      .then(res => {
        setCartArray(res.data.cart.products)
      })
      // add comment "Oops something is wrong with your cart"
      .catch(() => props.msgAlert({
        heading: 'Error loading your cart',
        message: messages.cartArrayFailure,
        variant: 'danger'
      }))
  }, [])

  useEffect(() => {
    if (cartCost.length > 0) {
      const subtotal = cartCost.map(a => a.value)
      const sum = subtotal.reduce((a, b) => a + b, 0)
      setTotal(sum)
    }
  }, [cartCost])
  return (
    <CartItem>
      <div>
        <Form.Group controlId="quantity">
          {cartArray.map((product, i) => (
            <ItemStyling
              key={i}
              id={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              quantity={product.quantity}
              cartId={props.cartId}
              cartCost={cartCost}
              setCartCost={setCartCost}
            />
          ))}
        </Form.Group>
        <h3>Total is: ${total}</h3>
      </div>
      <Button onClick={handleCheckout}>Proceed to Checkout</Button>
    </CartItem>
  )
}
export default withRouter(ItemsInCart)
