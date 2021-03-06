import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Inventory from '../Products/Inventory'
import CartItems from '../Products/CartItems.js'
import UserInventory from '../Products/UserInventory'
import ProductCreate from '../ProductCreate/ProductCreate'
import ItemsInCart from '../Products/ItemsInCart'
import OrderHistory from '../Products/OrderHistory'
import CheckoutForm from '../Payment/CheckoutForm'
import OrderConfirmation from '../Payment/OrderConfirmation'
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      cartId: '',
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  setCartId = id => this.setState({ cartId: id })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state
    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} setCartId={this.setCartId} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} setCartId={this.setCartId} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} setCartId={this.setCartId} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/cart-items' render={() => (
            <CartItems />
          )} />
          <AuthenticatedRoute user={user} path='/user-inventory' render={() => (
            <UserInventory msgAlert={this.msgAlert} user={user} cartId={this.state.cartId}/>
          )} />
          <AuthenticatedRoute user={user} path='/item-in-cart' render={() => (
            <ItemsInCart msgAlert={this.msgAlert} user={user} cartId={this.state.cartId}/>
          )} />
          <AuthenticatedRoute user={user} path='/order-history' render={() => (
            <OrderHistory msgAlert={this.msgAlert} user={user}/>
          )} />
          <Route exact path='/' component={Inventory} />
          <Route exact path='/createProduct' component={ProductCreate} />
          <AuthenticatedRoute user={user} exact path='/cardinput' render={() => (
            <CheckoutForm msgAlert={this.msgAlert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/orderconfirmation' component={OrderConfirmation} />
        </main>
      </Fragment>
    )
  }
}

export default App
