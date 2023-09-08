import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToWishlist } from '../../redux/wishlist/wishlist.actions'

const WishlistButton = ({ item }) => {
  const dispatch = useDispatch()

  const handleWishlistClick = () => {
    dispatch(addItemToWishlist(item))
    console.log('Item added to wishlist:', item)
  }

  return (
    <button className="wishlist-button" onClick={handleWishlistClick}>
      Wishlist
    </button>
  )
}

export default WishlistButton
