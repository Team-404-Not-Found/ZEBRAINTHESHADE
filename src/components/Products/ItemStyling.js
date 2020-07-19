import React, { useState } from 'react'
import { destroyItemInCart } from '../../api/cartIndex'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router-dom'

const ItemStyling = ({ name, price, imageUrl, quantity, id, cartId }) => {
  const [quan, setQuantity] = useState(0)
  const [deleted, setDeleted] = useState(false)
  const handleChange = event => {
    event.persist()
    setQuantity(prevQuan => {
      const updatedQuan = { [event.target.name]: event.target.value }
      const newQuan = Object.assign({}, prevQuan, updatedQuan)
      console.log(newQuan)
      return newQuan
    })
  }
  const destroyItem = event => {
    event.preventDefault()
    destroyItemInCart(cartId, id)
      // .then(res => setCartArray(res.data.cart.products.toString()))
      .then(res => console.log('Deleted', res))
      .then(() => setDeleted(true))
      .catch(() => console.log('failed to delete'))
  }
  if (deleted) {
    return (
      <Redirect to={{
        pathname: '/item-in-cart', state: { msg: 'Book succesfully deleted!' }
      }} />
    )
  }
  return (
    <div>
      <div className='item-box'>
        <div className='itemImg'>
          <img src={imageUrl} alt={name} />
        </div>
        <p className='amount'>Name: {name}</p>
        <p className='amount' name='price' value={quan.price}>Price:<span>$</span>{price}</p>
        <Form.Group controlId="quantity">
          <Form.Label className='quan'>Quantity:</Form.Label>
          <Form.Control
            required
            name="quantity"
            value={quan.quantity}
            type="number"
            min="1"
            max={quantity}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={destroyItem}
        >
      Remove
        </Button>
      </div>
    </div>
  )
}

export default ItemStyling
