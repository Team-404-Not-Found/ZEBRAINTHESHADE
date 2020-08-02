import React, { useState } from 'react'

import { productsCreate } from '../../api/Inventory'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductCreate = () => {
  const [item, setItem] = useState({
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    category: '',
    quantity: 0,
    seller: ''
  })

  const handleChange = event => {
    event.persist()
    setItem(prevItem => {
      const updatedItem = { [event.target.name]: event.target.value }
      const newItem = Object.assign({}, prevItem, updatedItem)
      return newItem
    })
  }

  const onSubmitItem = event => {
    event.preventDefault()
    productsCreate(item)
      .then(res => res.status(201).json(res))
      .catch()
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Product Create</h3>
        <Form onSubmit={onSubmitItem}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={item.name}
              placeholder="Product Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              name="price"
              value={item.price}
              type="number"
              placeholder="Price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              name="description"
              value={item.description}
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>ImageURL</Form.Label>
            <Form.Control
              required
              name="imageUrl"
              value={item.imageUrl}
              type="text"
              placeholder="Image URL"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              name="category"
              value={item.category}
              type="category"
              placeholder="Category"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              name="quantity"
              value={item.quantity}
              type="number"
              placeholder="Quantity"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="seller">
            <Form.Label>Seller</Form.Label>
            <Form.Control
              required
              name="seller"
              value={item.seller}
              type="text"
              placeholder="Seller"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ProductCreate
