import React from 'react'
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
const Item = ({ name, price, description, imageUrl, category, quantity, id }) => {
  const containerStyle = {
    border: '1px solid #413f3d',
    height: '70vh',
    position: 'relative'
  }

  return (
    <Col md={4} style={containerStyle}>
      <div className='imgHome'>
        <img src={imageUrl} alt={name}/>
      </div>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <p>Description: {description}</p>
      <h5>{category}</h5>
    </Col>
  )
}

export default Item
