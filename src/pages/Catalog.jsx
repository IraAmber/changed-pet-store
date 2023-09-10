import React, { useEffect } from 'react'
import styles from '../App/App.module.scss'
import { fetchCardsList } from '../store/cards/actions'
import CardsList from '../components/CardsList/CardsList'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavourites, removeFavourites } from '../store/favourites/actions'
import { addToCart } from '../store/cart/actions'
import Loader from '../components/Loader/Loader'

const Catalog = () => {
  // Використовуємо useSelector для отримання деяких станів з Redux store.
  const isLoading = useSelector(({ cards }) => cards.isLoading) // Завантаження
  const cardsList = useSelector(({ cards }) => cards.cards) // Список карток
  const cardsInFavorites = useSelector(({ favourites }) => favourites) // Список улюблених карток
  const hasError = useSelector(({ hasError }) => hasError) // Помилка
  const dispatch = useDispatch() // useDispatch дозволяє викликати actions у Redux store.

  useEffect(() => {
    // Використовуємо useEffect для виклику функції після рендерингу компоненту.
    // Тут ми викликаємо функцію fetchCardsList() для отримання списку карток з сервера.
    dispatch(fetchCardsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Передаємо пустий масив залежностей, щоб запустити цей ефект лише раз після першого рендеру.

  // Обробник для додавання карток до кошика за їхнім артикулом.
  const addCardsToCartHandler = (articul) => {
    dispatch(addToCart(articul))
  }

  // Обробник для зміни статусу "улюблено" для карток за їхнім артикулом.
  const changeFavouriteHandler = (articul) => {
    if (cardsInFavorites.includes(articul)) {
      // Якщо картка вже у списку улюблених, видаляємо її зі списку.
      dispatch(removeFavourites(articul))
    } else {
      // Якщо картки немає в списку улюблених, додаємо її туди.
      dispatch(addToFavourites(articul))
    }
  }

  let content
  if (isLoading) {
    // Якщо дані ще завантажуються, показуємо компонент Loader.
    content = <Loader />
  } else if (hasError) {
    // Якщо сталася помилка під час завантаження, відображаємо повідомлення про помилку.
    content = <div>Sorry, error</div>
  } else {
    // Якщо дані завантажені і помилок немає, відображаємо список карток за допомогою компонента CardsList.
    content = (
      <CardsList
        cards={cardsList}
        onClickHandler={addCardsToCartHandler}
        changeFavouriteHandler={changeFavouriteHandler}
        favouritesCardsArr={cardsInFavorites}
      />
    )
  }

  return (
    <div className={styles.app}>
      <h1>перевірка шляхів</h1>
      <div className={styles.container}>
        <div className={styles.appInner}>{content}</div>
      </div>
    </div>
  )
}

export default Catalog

// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchCardsList } from '../store/cards/actions'
// import { addToCart } from '../store/cart/actions'
// import { addToFavourites, removeFavourites } from '../store/favourites/actions'
// import Loader from '../components/Loader/Loader'
// import CardsList from '../components/CardsList/CardsList'

// const Catalog = () => {
//   const isLoading = useSelector(({ cards }) => cards.isLoading)
//   const cardsList = useSelector(({ cards }) => cards.cards)
//   const cardsInFavorites = useSelector(({ favourites }) => favourites)
//   const hasError = useSelector(({ hasError }) => hasError)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     console.log('cardsList:', fetchCardsList)

//     dispatch(fetchCardsList())
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const addCardsToCartHandler = (articul) => {
//     // Викликаємо дію addToCart для додавання товару до корзини.
//     dispatch(addToCart(articul))
//   }

//   const changeFavouriteHandler = (articul) => {
//     if (cardsInFavorites.includes(articul)) {
//       // Видаляємо товар зі списку улюблених, якщо він вже там є, або додаємо, якщо його немає.
//       dispatch(removeFavourites(articul))
//     } else {
//       dispatch(addToFavourites(articul))
//     }
//   }

//   let content

//   if (isLoading) {
//     content = <Loader />
//   } else if (hasError) {
//     content = <div>Sorry, error</div>
//   } else {
//     content = (
//       <CardsList
//         cards={cardsList}
//         onClickHandler={addCardsToCartHandler}
//         changeFavouriteHandler={changeFavouriteHandler}
//         favouritesCardsArr={cardsInFavorites}
//       />
//     )
//   }

//   return (
//     <div>
//       {content}
//       перевірка
//     </div>
//   )
// }

// export default Catalog