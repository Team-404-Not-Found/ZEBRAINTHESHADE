import React, { useState, useEffect } from 'react'
import Item from './Item'
import { productsIndex } from '../../api/Inventory'

const Inventory = () => {
  // API call for all products (GET)
  // This will return all products in an array
  // All information will be a reflection of productSchema
  // const [singleItem, setSingleItem] = useState({
  //   name: '',
  //   price: null,
  //   description: '',
  //   imageUrl: '',
  //   category: '',
  //   inStock: false,
  //   quantity: null
  // })

  const [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    productsIndex()
      .then(res => setProductsArray(res.data.products))
      .then(() => console.log(productsArray))
      .catch(() => console.log('failed to get places'))
  }, [])

  // const declareItem = event => {
  //   event.preventDefault()
  //   setSingleItem(prevItem => {
  //     const newItem = Object.assign({}, prevItem, item)
  //     return newItem
  //   })
  // }
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
