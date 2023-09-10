import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardsList from '../../components/CardsList/CardsList'
import styles from './Favourites.module.scss'
import { fetchCardsList } from '../../store/cards/actions'
import { addToCart } from '../../store/cart/actions'
import {
  addToFavourites,
  removeFavourites,
} from '../../store/favourites/actions'
import Loader from '../../components/Loader/Loader'

const Favourites = () => {
  // Отримуємо стан з Redux за допомогою useSelector
  const isLoading = useSelector(({ cards }) => cards.isLoading)
  const cardsList = useSelector(({ cards }) => cards.cards)

  const cardsInFavorites = useSelector(({ favourites }) => favourites)
  const hasError = useSelector(({ hasError }) => hasError)
  const dispatch = useDispatch()

  // Викликаємо дію для завантаження списку карток з сервера при завантаженні компоненту
  useEffect(() => {
    dispatch(fetchCardsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Функція для додавання товару до кошика
  const addCardsToCartHandler = (articul) => {
    dispatch(addToCart(articul))
  }

  // Функція для зміни статусу улюбленого товару
  const changeFavouriteHandler = (articul) => {
    if (cardsInFavorites.includes(articul)) {
      dispatch(removeFavourites(articul))
    } else {
      dispatch(addToFavourites(articul))
    }
  }

  let content
  if (isLoading) {
    // Відображаємо лоадер, якщо дані завантажуються
    content = <Loader />
  } else if (hasError) {
    // Відображаємо повідомлення про помилку, якщо виникла помилка під час завантаження
    content = <div>Sorry, error</div>
  } else if (cardsInFavorites.length < 1) {
    // Відображаємо повідомлення, якщо немає улюблених товарів
    content = <p className={styles.noItemsTitle}>No items in favourites</p>
  } else {
    // Відображаємо список улюблених товарів
    const filteredCards = cardsList.filter(({ articul }) =>
      cardsInFavorites.includes(articul)
    )
    content = (
      <CardsList
        cards={filteredCards}
        onClickHandler={addCardsToCartHandler}
        changeFavouriteHandler={changeFavouriteHandler}
        favouritesCardsArr={cardsInFavorites}
      />
    )
  }

  return (
    <div className={styles.favoritesSection}>
      <div className={styles.container}>
        <h2 className={styles.favoritesTitle}>
          Favorites - {cardsInFavorites.length} items
        </h2>
        {content}
      </div>
    </div>
  )
}

export default Favourites
