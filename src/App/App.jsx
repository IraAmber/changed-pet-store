// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog'
import Favourites from '../pages/Favourites/Favourites'
import Error from '../components/Error/Error'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'

// import HomePage from './pages/homepage/homepage'
// import ShopPage from './pages/shop/Shop'
// import CartPage from './redux/cart/CartPage'

// import CartItem from './components/cart-item/Cart-item'
// import ProductPage from './pages/product-page/Product-page' // Додали імпорт для ProductPage
// import WishlistPage from './wishlist/WishlistPage'

// import Footer from '../pages/footer/footer'
import './App.module.scss'

const App = () => {
  // const cards = useSelector((state) => state.cards.cards) // Отримати дані карток товарів з Redux store

  return (
    <Router>
      <div>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/*" element={<Error />} />

          {/* <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />{' '}
          {/* Змініть component на element */}
          {/* <Route path="/cart" element={<CartItem />} />
          <Route path="/product/:productId" element={<ProductPage />} />{' '}
          <Route path="/wishlist" component={WishlistPage} /> */}
          {/* Додали маршрут для ProductPage */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
