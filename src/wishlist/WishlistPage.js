import React from 'react'
import { useSelector } from 'react-redux'

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="wishlist-list">
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              {/* Додаткова інформація про товар, яку ви хочете відобразити */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WishlistPage
