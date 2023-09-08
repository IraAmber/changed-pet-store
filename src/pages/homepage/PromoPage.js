import React from 'react'
import { Link } from 'react-router-dom'
import styles from './promopage.module.scss'

import CatsCategory from '../../components/assets/cats.png'
import DogsCategory from '../../components/assets/dogs.png'

const PromoPage = () => {
  return (
    <div className={styles['promo']}>
      <Link className={styles['option']} to="/dog" onClick={DogsCategory}>
        <img src={DogsCategory} alt="wishlist" className="wishlist" />
      </Link>
      <div className={styles['promo-text']}>
        <h5>HIGH QUALITY</h5>
        <h1>FOR PET</h1>
        <h3>We have everything your pets could dream of</h3>
      </div>
      <Link className={styles['option']} to="/dog" onClick={CatsCategory}>
        <img src={CatsCategory} alt="wishlist" className={styles['wishlist']} />
      </Link>
    </div>
  )
}

export default PromoPage
