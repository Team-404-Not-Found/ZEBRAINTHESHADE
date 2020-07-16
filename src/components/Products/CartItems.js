import React, { useState, useEffect } from 'react'
import Item from './Item'
import { productsIndex } from '../../api/Inventory'
const CartItems = prop => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    productsIndex()
      .then(res => setCart(res.data.products))
      .catch(() => console.log('failed to get places'))
  }, [])

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexWrap: 'Wrap',
    padding: '30px',
    border: '1px solid black'
  }
  // if not item on cart say cart empty else return items on cart
  // if (res.data.products.length === 0) {
  //     return (
  //     <p>Cart empty!</p>
  //   )}else {
  //     {cart.map(product => (
  //       <Item
  //         key={product.name}
  //         name={product.name}
  //         price={product.price}
  //         description={product.description}
  //         imageUrl={product.imageUrl}
  //         category={product.category}
  //         quantity={product.quantity}
  //       />
  //     ))}
  return (
    <div>
      <h2>All Products</h2>
      <div style = {containerStyle} >
        {cart.map(product => (
          <Item
            key={product.name}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            category={product.category}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  )
}
export default CartItems
