import React from 'react'
import './../../index.scss'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItems'
class ItemsInCart extends React.Component {
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
  render () {
    return (
      <CartItem>
        <div className='item-box'>
          <div className='itemImg'>Img Here</div>
          <p className='amount'>Item Name1</p>
          <p className='amount'>quantities: </p>
          <h4 className='amount'>1</h4>
          <Button variant="info">-</Button>
          <Button variant="info">+</Button>
          <Button
            variant="primary"
            type="submit"
          >
        Remove
          </Button>
        </div>
        <div className='item-box'>
          <div className='itemImg'>Img Here</div>
          <p className='amount'>Item Name2</p>
          <p className='amount'>quantities: </p>
          <h4 className='amount'>10</h4>
          <Button variant="info">-</Button>
          <Button variant="info">+</Button>
          <Button
            variant="primary"
            type="submit"
          >
        Remove
          </Button>
        </div>
        <div className='item-box'>
          <div className='itemImg'>Img Here</div>
          <p className='amount'>Item Name3</p>
          <p className='amount'>quantities: </p>
          <h4 className='amount'>5</h4>
          <Button variant="info">-</Button>
          <Button variant="info">+</Button>
          <Button
            variant="primary"
            type="submit"
          >
        Remove
          </Button>
        </div>
      </CartItem>
    )
  }
}
export default ItemsInCart
