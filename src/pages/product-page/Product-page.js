import React from 'react'
import { useParams } from 'react-router-dom' // Імпортуємо хук для отримання параметрів URL
import SHOP_DATA from '../shop/shop.data' // Імпортуємо дані про товари
import BuyButton from '../../components/buttons/BuyButton'
import './product-page.module.scss'

const ProductPage = () => {
  const { productId } = useParams() // Отримуємо параметр productId з URL
  const product = SHOP_DATA.find((item) => item.id === parseInt(productId)) // Знаходимо товар за його id

  if (!product) {
    return <div>Product not found</div> // Якщо товар не знайдено, виводимо повідомлення
  }

  const { name, imageUrl, price, available, rating, specific, describe } =
    product

  const inStockStyle = { color: 'green' }
  const outOfStockStyle = { color: 'red' }

  return (
    <div className="product">
      <div className="product-page">
        <div className="product-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product-details">
          <h2>{name}</h2>
          <span className="product-price">${price}</span>
          {available ? (
            <span className="product-availability" style={inStockStyle}>
              In Stock
            </span>
          ) : (
            <span className="product-availability" style={outOfStockStyle}>
              Out of Stock
            </span>
          )}
          <div className="product-rating">Rating: {rating}</div>
          <div className="product-specific">Category: {specific}</div>
          <div className="product-description">{describe}</div>
        </div>
      </div>
      <BuyButton item={product} className="buy-button" />
    </div>
  )
}

export default ProductPage
