import React from 'react'
import './../../index.scss'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItems'
class ItemsInCart extends React.Component {
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
