// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/Shop'
import CartPage from './redux/cart/CartPage'
import Navbar from './components/navbar/Navbar'
import CartItem from './components/cart-item/Cart-item'
import ProductPage from './pages/product-page/Product-page' // Додали імпорт для ProductPage
import WishlistPage from './wishlist/WishlistPage'
import Footer from './pages/footer/footer'

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />{' '}
          {/* Змініть component на element */}
          <Route path="/cart" element={<CartItem />} />
          <Route path="/product/:productId" element={<ProductPage />} />{' '}
          <Route path="/wishlist" component={WishlistPage} />
          {/* Додали маршрут для ProductPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default connect()(App)
