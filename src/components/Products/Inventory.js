import React, { useState, useEffect } from 'react'
import Item from './Item'
import { productsIndex } from '../../api/Inventory'
// import Item component and GET API call
const Inventory = () => {
  // API call for all products (GET)
  // This will return all products in an array
  // All information will be a reflection of productSchema

  // Initialize empty array to receive database Index
  const [productsArray, setProductsArray] = useState([])

  // useEffect after render to make API call
  // set productsArray with response. Run once per render
  useEffect(() => {
    productsIndex()
      .then(res => setProductsArray(res.data.products))
      .catch(() => console.log('failed to get places'))
  }, [])

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexWrap: 'Wrap',
    padding: '30px',
    border: '1px solid black'
  }
  return (
    <div>
      <h2>All Products</h2>
      <div style = {containerStyle} >
        {productsArray.map(product => (
          <Item
            key={product.name}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            category={product.category}
            inStock={product.inStock}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default Inventory
