import React from 'react'
import Button from 'react-bootstrap/Button'
import { pushToCart } from './../../api/cartIndex'
const Item = ({ name, price, description, imageUrl, category, quantity, id, cartId }) => {
  const containerStyle = {
    border: '1px solid black'
  }
  // const arrayOfProducts = []
  const addToCart = (event) => {
    event.preventDefault()
    // calling our pushToCart API CALL
    // which recieves a cart id and a product id
    console.log(id, 'id is or is not.')
    pushToCart(cartId, id)
      .then(res => console.log(res))
      .catch(() => console.log('Huh.  Keep at it.'))
  }
  /*  {productsArray.map(product => (
    <Item
      key={product.name}
      id={product._id}
      name={product.name}
      price={product.price}
      description={product.description}
      imageUrl={product.imageUrl}
      category={product.category}
      quantity={product.quantity}
    />
    ))} */

  return (
    <div style={containerStyle}>
      <p>{imageUrl}</p>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
      <Button onClick={addToCart}
        variant="primary"
        type="submit"
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default Item
