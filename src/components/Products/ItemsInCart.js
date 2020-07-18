import React, { useState, useEffect } from 'react'
import './../../index.scss'
import CartItem from './CartItems'
import { getCart } from '../../api/cartIndex'
import ItemStyling from './ItemStyling'
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
  const [cartArray, setCartArray] = useState([])

  useEffect(() => {
    getCart(props.user._id)
      // .then(res => setCartArray(res.data.cart.products.toString()))
      .then(res => setCartArray(res.data.cart.products))
      .then(() => console.log('this worked'))
      .catch(() => console.log('failed to show cart'))
  }, [])

  return (
    <CartItem>
      <div>
        {cartArray.map(product => (
          <ItemStyling
            key={product.name}
            id={product._id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
          />
        ))}
      </div>
    </CartItem>
  )
}
export default ItemsInCart
