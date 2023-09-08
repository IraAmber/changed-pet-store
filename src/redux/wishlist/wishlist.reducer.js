import WishlistActionTypes from './wishlist.types'

const INITIAL_STATE = {
  wishlistItems: [],
}

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      }
    default:
      return state
  }
}

export default wishlistReducer
