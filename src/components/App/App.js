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
    const { msgAlerts, user, cartId } = this.state
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
            <UserInventory cartId={this.state.cartId} />
          )} />
          <AuthenticatedRoute user={user} path='/item-in-cart' render={() => (
            <ItemsInCart user={user} />
          )} />
          <Route exact path='/' component={Inventory} />
          <Route exact path='/createProduct' component={ProductCreate} />
        </main>
        <footer>
          <h2>{cartId}</h2>
        </footer>
      </Fragment>
    )
  }
}

export default App
