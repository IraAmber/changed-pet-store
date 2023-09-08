import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import ProductCard from '../../components/product-card/Product-card'
import SHOP_DATA from '../shop/shop.data'
import styles from './slider.module.scss'

const filterAndSortProducts = (data, filterCondition) => {
  const filteredProducts = data.filter(filterCondition)
  return filteredProducts.slice().sort((a, b) => b.rating - a.rating)
}

const ProductSlider = ({ filterCondition, blockTitle }) => {
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const sortedProducts = filterAndSortProducts(SHOP_DATA, filterCondition)
    setFilteredProducts(sortedProducts)
  }, [filterCondition])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <button>{'<'}</button>,
    nextArrow: <button>{'>'}</button>,
  }

  return (
    <div className={styles['sliderStyle']}>
      <h2>{blockTitle}</h2>
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider
