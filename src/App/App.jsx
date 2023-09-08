// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import Cart from '../pages/Cart/Cart';
import Cards from '../pages/Catalog'; 
import Favourites from '../pages/Favourites/Favourites';
import Error from '../components/Error/Error';



// import HomePage from './pages/homepage/homepage'
// import ShopPage from './pages/shop/Shop'
// import CartPage from './redux/cart/CartPage'

// import CartItem from './components/cart-item/Cart-item'
// import ProductPage from './pages/product-page/Product-page' // Додали імпорт для ProductPage
// import WishlistPage from './wishlist/WishlistPage'


import Footer from './pages/footer/footer'




import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>

        <Route exact path="/" component={Cards} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourites} />
        <Route path="/*" component={Error} />


          {/* <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />{' '}
          {/* Змініть component на element */}
          {/* <Route path="/cart" element={<CartItem />} />
          <Route path="/product/:productId" element={<ProductPage />} />{' '}
          <Route path="/wishlist" component={WishlistPage} /> */} 
          {/* Додали маршрут для ProductPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default connect()(App)
