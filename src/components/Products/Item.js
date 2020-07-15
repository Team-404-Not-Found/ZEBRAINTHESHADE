import React from 'react'

const Item = props => {
  const { name, price, description, imageUrl, category, inStock, quantity } = props.details
  return (
    <div>
      {category}
      {name}
      {price}
      {description}
      {imageUrl}
      {inStock}
      {quantity}
    </div>
  )
}

export default Item
