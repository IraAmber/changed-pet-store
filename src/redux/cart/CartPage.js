// src/pages/cart/CartPage.jsx

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import './cart-page.scss'

const CartPage = ({ cartItems, updateCartItemQuantity }) => {
  const [cartItemsData, setCartItemsData] = useState(cartItems)

  const handleQuantityChange = (itemId, newQuantity) => {
    // Змінюємо значення кількості в локальному стані
    const updatedCartItemsData = cartItemsData.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setCartItemsData(updatedCartItemsData)

    // Оновлюємо кількість товару у Redux сторінці
    updateCartItemQuantity(itemId, newQuantity)
  }

  const calculateTotal = () => {
    return cartItemsData.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      <ul className="cart-list">
        {cartItemsData.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <div className="quantity-container">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.quantity * item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

const mapDispatchToProps = (dispatch) => ({
  updateCartItemQuantity: (itemId, newQuantity) =>
    dispatch(addItem(itemId, newQuantity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
