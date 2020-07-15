import React, { useState } from 'react'
import Item from './Item'

const item =
  {
    name: 'test',
    price: 10,
    description: 'testful',
    imageUrl: 'testUrl',
    category: 'testCat',
    inStock: true,
    quantity: 100
  }

const Inventory = () => {
  // API call for all products (GET)
  // This will return all products in an array
  // All information will be a reflection of productSchema
  const [singleItem, setSingleItem] = useState({
    name: '',
    price: null,
    description: '',
    imageUrl: '',
    category: '',
    inStock: false,
    quantity: null
  })

  const declareItem = event => {
    event.preventDefault()
    setSingleItem(prevItem => {
      const newItem = Object.assign({}, prevItem, item)
      return newItem
    })
  }
  return (
    <div>
      <h2>All Products</h2>
      <button onClick={declareItem}>Set Item</button>
      <Item details={singleItem} />
    </div>
  )
}

export default Inventory
