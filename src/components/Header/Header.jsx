import React from 'react'
import styles from './Header.module.scss'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">
            <img
              className={styles.logo}
              src="https://static.vecteezy.com/system/resources/previews/005/601/776/non_2x/pet-shop-logo-vector.jpg"
              alt="pets store logo"
            />
          </Link>
          <ul className={styles.navList}>
            <li className={styles.item}>
              <NavLink exact to="/" activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink exact to="/cart" activeClassName={styles.active}>
                Cart
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink exact to="/favourites" activeClassName={styles.active}>
                Favourites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
