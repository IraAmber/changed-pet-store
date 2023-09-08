import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/CartDropdown'
import WishlistPage from '../../wishlist/WishlistPage'
// import ShopPage from '../../pages/shop/shop'
import styles from './navbar.module.scss'
import WishlistIcon from '../assets/wishlist.png'
import LogoIcon from '../assets/logo.png'
import CartIcon from '../assets/cart.png'
import AccountIcon from '../assets/account.png'

const NavBar = ({ cartItems }) => {
  // s

  // const toggleCartDropdown = () => {
  //   setCartHidden(!cartHidden)
  // }
  // const toggleWishlistDropdown = () => {
  //   setWishlistHidden(!wishlistHidden) // Додайте функцію для зміни стану Wishlist
  // }

  return (
    <div className={styles['navbar']}>
      <div className={styles['menu']}>
        {' '}
        <Link className={styles['logo-container']} to="/">
          <img src={LogoIcon} alt="Logo" className={styles['logo']} />
        </Link>
        <Link className={styles['shop']} to="/shop">
          Catalogue
        </Link>
        <div className={styles['search']}>
          <input type="text" placeholder="Search the best in Pawsome" />
        </div>
      </div>

      <div className={styles['options']}>
        <Link
          className={styles['option']}
          to="/wishlist"
          onClick={WishlistPage}
        >
          <img src={WishlistIcon} alt="wishlist" className="wishlist" />
        </Link>
        <Link className={styles['option']} to="/cart" onClick={CartDropdown}>
          <img src={CartIcon} alt="cart" className="cart" />
        </Link>
        <Link className={styles['option']} to="/signin">
          <img src={AccountIcon} alt="account" className="account" />
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
})

export default connect(mapStateToProps)(NavBar)
