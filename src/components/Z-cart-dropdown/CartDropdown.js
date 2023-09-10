// src/components/cart-dropdown/CartDropdown.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../cart-item/Cart-item'
//import './CartDropdown.scss'

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout" className="checkout-button">
        GO TO CHECKOUT
      </Link>
    </div>
  )
}

export default CartDropdown
