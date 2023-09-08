// BuyButton.js
import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import styles from './button.module.scss'

const BuyButton = ({ item, className, addItem }) => {
  const handleBuyClick = () => {
    addItem(item)
    console.log('Item added to cart:', item)
  }

  return (
    <button
      className={`${styles['product-button']} ${className}`}
      disabled={!item.available}
      onClick={handleBuyClick}
    >
      Add to cart
    </button>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(BuyButton)
