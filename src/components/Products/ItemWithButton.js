import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { pushToCart, itemInCart } from './../../api/cartIndex'
import messages from '../AutoDismissAlert/messages'
import Col from 'react-bootstrap/Col'

const ItemWithButton = ({ name, price, description, imageUrl, category, quantity, id, cartId, inCart, msgAlert }) => {
  const [cartBool, setCartBool] = useState(inCart)
  const containerStyle = {
    border: '1px solid #413f3d'
  }
  // const arrayOfProducts = []
  const addToCart = (event) => {
    event.preventDefault()
    // calling our pushToCart API CALL
    // which recieves a cart id and a product id
    pushToCart(cartId, id)
    // add comment "Item added to your Cart"
      .then(() => {
        setCartBool(true)
        itemInCart(id, true)
      })
      .then(() => msgAlert({
        heading: 'Added!',
        message: messages.addItemSuccess,
        variant: 'success'
      }))
      // add comment "Failed to add item to your cart"
      .catch(() => msgAlert({
        heading: 'Sorry...',
        message: messages.signInFailure,
        variant: 'danger'
      }))
  }

  return (
    <Col md={4} style={containerStyle}>
      <div className='imgHome'>
        <img src={imageUrl} alt={name}/>
      </div>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
      <p className="msg">Added To Cart!</p>
      { cartBool && <Button variant="light">Item Is In Cart!</Button> }
      { !cartBool && <Button className="atc" onClick={addToCart} variant="dark" type="submit">
        Add to Cart
      </Button> }
    </Col>
  )
}
export default ItemWithButton
