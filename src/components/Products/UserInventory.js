import React, { useState, useEffect } from 'react'
import ItemWithButton from './ItemWithButton'
import { productsIndex } from '../../api/Inventory'
// import Button from 'react-bootstrap/Button'
// import SignIn from './../SignIn/SignIn'
// import Item component and GET API call
const UserInventory = (props) => {
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
      .catch(() => console.log('failed to get products'))
  }, [])

  // basic styling for Index values
  const containerStyle = {
    display: 'flex',
    flexWrap: 'Wrap',
    padding: '30px'
  }
  return (
    <div>
      <h2 className='product-header'>Ready To Shop? {props.user.email}</h2>
      <div style = {containerStyle} >
        {productsArray.map(product => (
          <ItemWithButton
            msgAlert={props.msgAlert}
            key={product.name}
            id={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            category={product.category}
            inStock={product.inStock}
            quantity={product.quantity}
            cartId={props.cartId}
            inCart={product.inCart}
          />
        ))}
      </div>
    </div>
  )
}

export default UserInventory
