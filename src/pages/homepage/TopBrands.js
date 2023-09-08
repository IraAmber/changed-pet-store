import React from 'react'
import { Link } from 'react-router-dom'
import styles from './top-brands.module.scss'

// Імпортуємо картинки
import brandImage1 from '../../components/assets/Item.png'
import brandImage2 from '../../components/assets/Item (1).png'
import brandImage3 from '../../components/assets/Item (2).png'
import brandImage4 from '../../components/assets/Item (3).png'

const TopBrands = () => {
  // Зберігаємо картинки у масиві
  const brandImages = [brandImage1, brandImage2, brandImage3, brandImage4]

  return (
    <div className={styles['top-brands']}>
      <h3>Top brands</h3>
      <div className={styles['brand-images']}>
        {brandImages.map((image, index) => (
          <Link to={`/brand/${index + 1}`} key={index}>
            <img src={image} alt={`Brand ${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopBrands
