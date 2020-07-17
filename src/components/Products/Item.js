import React from 'react'
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
const Item = ({ name, price, description, imageUrl, category, quantity, id }) => {
  const containerStyle = {
    border: '1px solid black',
    height: '70vh',
    position: 'relative'
  }
  const size = {
    width: '100%',
    height: '50%',
    size: 'cover',
    overflow: 'hidden'
  }

  return (
    <Col md={4} style={containerStyle}>
      <img src={imageUrl} alt={name} style={size} />
      <h4>{id}</h4>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
    </Col>
  )
}

export default Item
