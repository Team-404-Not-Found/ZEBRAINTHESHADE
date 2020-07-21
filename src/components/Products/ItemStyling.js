import React, { useState, useEffect } from 'react'
import { destroyItemInCart } from '../../api/cartIndex'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemStyling = ({ name, price, imageUrl, quantity, id, cartId, initialCart, setInitialCartArray }) => {
  const [quant, setQuantity] = useState(1)
  const [cost, setCost] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    const initialValue = quant * price
    setInitialCartArray([...initialCart, {
      id: initialCart.length,
      value: initialValue
    }])
    console.log(initialValue, 'second')
  }, [])
  useEffect(() => {
    setCost(quant * price)
    // pushSubTotal(total => total.concat(cost))
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
      .then(res => setDeleted(true))
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
    <Container fluid='md'>
      <Row className='row-item'>
        <Col className='column d-flex align-items-center justify-content-center'>
          <div className="itemImg">
            <img src={imageUrl} alt={name} />
          </div>
        </Col>
        <Col className='column-price d-flex align-items-center justify-content-center'>Name: {name}</Col>
        <Col className='column d-flex align-items-center justify-content-center'>
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
        </Col>
        <Col className='column d-flex align-items-center justify-content-center'>
          <Form.Text className="text-muted column-price">
            Price of items is: <span>$</span>{cost}
          </Form.Text>
        </Col>
        <Col className='column d-flex align-items-center justify-content-center'>
          <Button
            className='remove-btn'
            variant="dark"
            type="submit"
            onClick={destroyItem}
          >
        Remove
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemStyling
