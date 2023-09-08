// src/components/cart-item/cart-item.component.jsx
import React from 'react'
import './cart-item.module.scss'

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="Item" className="item-image" />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
