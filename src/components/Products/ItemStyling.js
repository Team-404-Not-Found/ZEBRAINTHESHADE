import React, { useState, useEffect } from 'react'
import { destroyItemInCart, itemInCart } from '../../api/cartIndex'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router-dom'

const ItemStyling = ({ name, price, imageUrl, quantity, id, cartId, cartCost, setCartCost }) => {
  const [quant, setQuantity] = useState(1)
  const [cost, setCost] = useState(null)
  const [deleted, setDeleted] = useState(false)
  // sets initial cost of item on initial render
  useEffect(() => {
    setCost(quant * price)
    // pushSubTotal(total => total.concat(cost))
  }, [cost])
  // initializes array of cost of products
  useEffect(() => {
    const initialValue = quant * price
    setCartCost(cartCost => [...cartCost, {
      id: id,
      value: initialValue
    }])
  }, [])
  useEffect(() => {
    const elementIndex = cartCost.findIndex(element => element.id === id)
    if (elementIndex !== -1) {
      const newArray = [...cartCost]
      newArray[elementIndex] = { ...newArray[elementIndex], value: cost }
      setCartCost(newArray)
    }
  }, [cost])

  const handleChange = event => {
    event.persist()
    setQuantity(prevQuant => {
      const updatedQuant = event.target.value
      setCost(updatedQuant * price)
      return updatedQuant
    })
  }
  const destroyItem = event => {
    event.preventDefault()
    destroyItemInCart(cartId, id)
      .then(res => {
        setDeleted(true)
      })
      .then(() => {
        itemInCart(id, false)
      })
      .catch(() => console.log('failed to delete'))
  }
  if (deleted) {
    return (
      <Redirect to={{
        pathname: '/item-in-cart', state: { msg: 'Item succesfully deleted!' }
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
        <p className='amount' name='price'>Price:<span>$</span>{price}</p>
        <Form.Label className='quan'>Quantity:</Form.Label>
        <Form.Control
          required
          name="quantity"
          value={quant}
          type="number"
          min="1"
          max={quantity}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          Price of items is: {cost}
        </Form.Text>
        <Button
          className='remove-btn'
          variant="dark"
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
