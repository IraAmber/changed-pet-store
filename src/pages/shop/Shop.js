import React from 'react'
import ProductCard from '../../components/product-card/Product-card'
import SHOP_DATA from './shop.data'
import styles from './shop.module.scss'

const ShopPage = () => (
  <div className={styles['shop-page']}>
    <h2 className={styles['title']}>Shop</h2>
    <div className={styles['product-list']}>
      {SHOP_DATA.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  </div>
)

export default ShopPage
