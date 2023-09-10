import React from 'react'
import { connect } from 'react-redux'
import './cart-dropdown.module.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt="Product" />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <span className="price">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)
