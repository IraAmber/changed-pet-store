// src/components/cart-icon/CartIcon.jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './CartIcon.scss'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  )

  const handleCartIconClick = () => {
    dispatch(toggleCartHidden())
  }

  return (
    <div className="cart-icon" onClick={handleCartIconClick}>
      <FiShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
