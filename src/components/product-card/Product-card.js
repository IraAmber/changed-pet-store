// ProductCard.js
import React from 'react'
import { Link } from 'react-router-dom'
import BuyButton from '../buttons/BuyButton' // Імпорт нового компонента BuyButton
import styles from './product-card.module.scss'
import WishlistIcon from '../assets/wishlist.png'

const ProductCard = ({ item }) => {
  const { imageUrl, name, price, rating } = item

  // const handleAddToCart = () => {
  //   // Тут ви можете визначити логіку додавання товару до корзини
  //   console.log('Товар доданий до корзини:', item)
  // }

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image-container']}>
        <img src={imageUrl} alt="Product" className={styles['product-image']} />
      </div>

      <div className={styles['product-details']}>
        <Link to={`/product/${item.id}`}>
          <h6>{name}</h6>
        </Link>

        <div className={styles['product-rataing']}>Rating: {rating}</div>
        <span className={styles['product-price']}> ${price}</span>
      </div>
      <BuyButton item={item} className={styles['product-button']} />
      <button>
        <img src={WishlistIcon} alt="wishlist" className="wishlist" />
      </button>
    </div>
  )
}

export default ProductCard
