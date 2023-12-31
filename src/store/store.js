import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { favouritesReducer } from './favourites/reducer'
import { cartReducer } from './cart/reducer'
import { cardsReducer } from './cards/reducer'

const rootReducer = combineReducers({
  cards: cardsReducer,
  favourites: favouritesReducer,
  cardsInCart: cartReducer,
})

const syncMiddleware = (store) => (next) => (action) => {
  const result = next(action)

  if (['ADD_FAVOURITES', 'REMOVE_FAVOURITES'].includes(action.type)) {
    const { favourites } = store.getState()
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }

  if (
    [
      'ADD_TO_CART',
      'REMOVE_FROM_CART',
      'DECREASE_PRODUCT_QUANTITY',
      'INCREASE_PRODUCT_QUANTITY',
      'CHECKOUT_ORDER',
    ].includes(action.type)
  ) {
    const { cardsInCart } = store.getState()
    localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart))
  }

  return result
}

let initialState = {}
const favouritesFromLS = localStorage.getItem('favourites')
const cardsInCartFromLS = localStorage.getItem('cardsInCart')

if (favouritesFromLS) {
  try {
    initialState = { ...initialState, favourites: JSON.parse(favouritesFromLS) }
  } catch (err) {
    console.error(err)
  }
}

if (cardsInCartFromLS) {
  try {
    initialState = {
      ...initialState,
      cardsInCart: JSON.parse(cardsInCartFromLS),
    }
  } catch (err) {
    console.error(err)
  }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (args) => args
const store = legacy_createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk, syncMiddleware), devTools)
)

export default store
