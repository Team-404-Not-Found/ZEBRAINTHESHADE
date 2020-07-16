import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { productsCreate } from '../../api/Inventory'
import messagesprod_create from '../AutoDismissAlert/messagesprod_create.js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ProductsCreate extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      price: '',
      description: '',
      imageUrl: '',
      category: '',
      quantity: '',
      seller: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setProduct } = this.props

    productsCreate(this.state)
      .then(res => setProduct(res.data.product))
      .then(() => msgAlert({
        heading: 'Product Created',
        message: messagesprod_create.productCreatedSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/products'))
      .catch(error => {
        this.setState({
          name: '',
          price: '',
          description: '',
          imageUrl: '',
          category: '',
          quantity: '',
          seller: ''})
        msgAlert({
          heading: 'Product Create Failed with error: ' + error.message,
          message: messagesprod_create.productCreatedFailed,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, price, description, imageUrl, category, quantity, seller } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Product Create</h3>
          <Form onSubmit={this.onProductCreate}>
            <Form.Group controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                type="name"
                name="name"
                value={name}
                placeholder="Product Name"
                onChange={this.handleChange}
              />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              name="price"
              value={price}
              type="price"
              placeholder="Price"
              onChange={this.handleChange}
            />
          <Form.Group controlId="description>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              name="description"
              value={description}
              type="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
          <Form.Group controlId="imageUrl">
            <Form.Label>ImageURL</Form.Label>
            <Form.Control
              required
              name="imageUrl"
              value={imageUrl}
              type="imageUrl"
              placeholder="Image URL"
              onChange={this.handleChange}
            />
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              name="category"
              value={category}
              type="category"
              placeholder="Category"
              onChange={this.handleChange}
            />
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              name="quantity"
              value={quantity}
              type="quantity"
              placeholder="Quantity"
              onChange={this.handleChange}
            />
          <Form.Group controlId="seller">
            <Form.Label>Seller</Form.Label>
            <Form.Control
              required
              name="seller"
              value={seller}
              type="seller"
              placeholder="Seller"
              onChange={this.handleChange}
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
}

export default withRouter(SignIn)
