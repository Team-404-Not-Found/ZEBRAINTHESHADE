import React from 'react'
import Button from 'react-bootstrap/Button'
const Item = ({ name, price, description, imageUrl, category, inStock, quantity }) => {
  const containerStyle = {
    border: '1px solid black'
  }
  return (
    <div style={containerStyle}>
      <p>{imageUrl}</p>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
      <Button
        variant="primary"
        type="submit"
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default Item
