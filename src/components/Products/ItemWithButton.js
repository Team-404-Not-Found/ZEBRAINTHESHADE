import React from 'react'
import Button from 'react-bootstrap/Button'
const Item = ({ name, price, description, imageUrl, category, quantity, id }) => {
  const containerStyle = {
    border: '1px solid black'
  }
  // const arrayOfProducts = []
  // const pushtoCart = (cartID, prodID) => {
  //   pushtoCart()
  //     .then(res => arrayOfProducts =res.products)
  // }
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
  const test = event => {
    event.preventDefault()
    console.log(id)
  }
  return (
    <div style={containerStyle}>
      <p>{imageUrl}</p>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
      <Button onClick={test}
        variant="primary"
        type="submit"
      >
        Add to Cart
      </Button>
    </div>
  )
}

export default Item
