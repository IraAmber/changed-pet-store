import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  // Додайте інші редуктори тут, якщо необхідно
})

export default rootReducer
