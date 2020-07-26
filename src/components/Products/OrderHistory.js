import React, { useState, useEffect } from 'react'
import { getOrderHistory } from '../../api/OrderHistory'

const OrderHistory = props => {
  console.log(props)
  // initialize empty array for orderHistory productsArray
  const [orderHistoryArray, setOrderHistoryArray] = useState([])

  // useEffect to request get request from api
  useEffect(() => {
    getOrderHistory(props.user._id)
      .then(res => setOrderHistoryArray(res.data.user.orderHistory))
      .catch(() => console.log('failed to get order history'))
  }, [])
  const orderHistory = orderHistoryArray.map((order, i) => (
    <div key={i}>
      <div className='item-box'>
        <div className='itemImg'>
          <img src={order.imageUrl} alt={order.name} />
        </div>
        <p className='amount'>Name: {order.name}</p>
        <p className='amount' >Price:<span>$</span>{order.price}</p>
        <p className='amount'>Order Date: {order.createdAt}</p>
        <p className='amount'>receip: {order.receiptNumber}</p>
      </div>
    </div>
  ))
  return (
    <div>
      {orderHistory}
    </div>
  )
}
export default OrderHistory
