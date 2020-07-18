import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const ItemStyling = ({ name, price, imageUrl, quantity, id }) => {
  const [quan, setQuantity] = useState({
    quantity: 1
  })
  const handleChange = event => {
    event.persist()
    setQuantity(prevQuan => {
      const updatedQuan = { [event.target.name]: event.target.value }
      const newQuan = Object.assign({}, prevQuan, updatedQuan)
      return newQuan
    })
  }
  return (
    <div className='item-box'>
      <div className='itemImg'>
        <img src={imageUrl} alt={name} />
      </div>
      <p className='amount'>Name: {name}</p>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          required
          name="quantity"
          value={quan.quantity}
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
    Remove
      </Button>
    </div>
  )
}

export default ItemStyling
