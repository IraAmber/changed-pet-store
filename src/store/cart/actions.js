import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_ORDER,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
} from './types'

export const addToCart = (articul) => {
  return {
    type: ADD_TO_CART,
    payload: articul,
  }
}

export const removeFromCart = (articul) => {
  return {
    type: REMOVE_FROM_CART,
    payload: articul,
  }
}

export const checkoutOrder = () => {
  return {
    type: CHECKOUT_ORDER,
  }
}

export const increaseProductQuantity = (articul) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: articul,
  }
}

export const decreaseProductQuantity = (articul) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: articul,
  }
}
