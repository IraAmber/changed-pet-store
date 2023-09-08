// src/pages/homepage/homepage.component.jsx
import React from 'react'
import styles from './homepage.module.scss'
import './PromoPage'
import PromoPage from './PromoPage'
import ProductSlider from './ProductSlider'
import TopBrands from './TopBrands'
import PetStorePage from '../storepage/PetStorePage'

// Умова фільтрації для блоку з вищим рейтингом
const highRatingFilter = (item) => item.rating > 4.0

// Умова фільтрації для блоку з віком "young"
const youngAgeFilter = (item) => item.age === 'young'

const Homepage = () => (
  <div className={styles['homepage']}>
    <PromoPage />
    <ProductSlider
      filterCondition={highRatingFilter}
      blockTitle="Your Pet will love these"
    />
    <ProductSlider
      filterCondition={youngAgeFilter}
      blockTitle="For Your Young Pets"
    />
    <TopBrands />
    <PetStorePage />
  </div>
)

export default Homepage
