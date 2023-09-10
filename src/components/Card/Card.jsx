// import React from 'react';
// // import PropTypes from 'prop-types'; // Імпортуємо модуль PropTypes для визначення типів властивостей
// import styles from './Card.module.scss'; // Імпортуємо стилі для компонента
// import FavouriteIcon from './FavouriteIcon'; // Імпортуємо компонент FavouriteIcon
// import Button from '../Button/Button'; // Імпортуємо компонент Button
// const NOIMGSRC = 'img/notfound.png'; // Встановлюємо стандартний шлях для зображення, якщо imgSrc не передано

// const Card = ({ title, price, articul, color, imgSrc, onClickHandler, changeFavouriteHandler, isFavourite }) => {
//     const isFavouriteClass = isFavourite ? styles.isFavourite : ''; // Встановлюємо клас isFavourite, якщо товар у списку обраних

//     return (
//         <li className={styles.item}> {/* Використовуємо стиль styles.item для оформлення карточки товару */}
//             <img className={styles.itemImg} src={imgSrc ? imgSrc : NOIMGSRC} alt="bed for pets" /> {/* Відображаємо зображення товару */}
//             <div className={styles.cardInfo}> {/* Контейнер для інформації про товар */}
//                 <h2 className={styles.title}>{title}</h2> {/* Відображаємо назву товару */}
//                 <p className={styles.cardColor}>
//                     <span>Color: {color}</span> {/* Відображаємо колір товару */}
//                     <span className={styles.productColor} style={{ backgroundColor: `${color}` }}></span> {/* Колір для товару */}
//                 </p>
//                 <p>Articul: {articul}</p> {/* Відображаємо артикул товару */}
//                 <p className={styles.cardPrice}>{price} UAH</p> {/* Відображаємо ціну товару */}
//                 <button onClick={() => { changeFavouriteHandler(articul) }} className={styles.favouriteBox}> {/* Кнопка для додавання товару до обраного */}
//                     <FavouriteIcon classes={`${styles.favouriteIcon} ${isFavouriteClass}`} /> {/* Іконка обраного */}
//                 </button>
//                 <Button text='Add to card' onClickHandler={() => onClickHandler(articul)} /> {/* Кнопка для додавання товару до корзини */}
//             </div>
//         </li>
//     );
// };

// // Card.propTypes = {
// //     title: PropTypes.string.isRequired, // Назва товару, обов'язково рядок
// //     price: PropTypes.number.isRequired, // Ціна товару, обов'язково число
// //     articul: PropTypes.number.isRequired, // Артикул товару, обов'язково число
// //     color: PropTypes.string.isRequired, // Колір товару, обов'язково рядок
// //     imgSrc: PropTypes.string, // Шлях до зображення, необов'язково рядок
// //     onClickHandler: PropTypes.func.isRequired, // Обробник подій для кліку на кнопку, обов'язково функція
// //     changeFavouriteHandler: PropTypes.func.isRequired, // Обробник подій для зміни обраних товарів, обов'язково функція
// //     isFavourite: PropTypes.bool // Чи є товар у списку обраних, необов'язково булеве значення
// // };

// // Card.defaultProps = {
// //     imgSrc: "", // За замовчуванням шлях до зображення порожній рядок
// //     isFavourite: false // За замовчуванням товар не є обраним
// // };

// export default Card;

import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Card.module.scss'
import FavouriteIcon from './FavouriteIcon'
import Button from '../Button/Button'
const NOIMGSRC = 'img/notfound.png'

const Card = ({
  title,
  price,
  articul,
  color,
  imgSrc,
  onClickHandler,
  changeFavouriteHandler,
  isFavourite,
}) => {
  const isFavouriteClass = isFavourite ? styles.isFavourite : ''
  return (
    <li className={styles.item}>
      <img
        className={styles.itemImg}
        src={imgSrc ? imgSrc : NOIMGSRC}
        alt="bed for pets"
      />
      <div className={styles.cardInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.cardColor}>
          <span>Color: {color}</span>
          <span
            className={styles.productColor}
            style={{ backgroundColor: `${color}` }}
          ></span>
        </p>
        <p>Articul: {articul}</p>
        <p className={styles.cardPrice}>{price} UAH</p>
        <button
          onClick={() => {
            changeFavouriteHandler(articul)
          }}
          className={styles.favouriteBox}
        >
          <FavouriteIcon
            classes={`${styles.favouriteIcon} ${isFavouriteClass}`}
          />
        </button>
        <Button
          text="Add to card"
          onClickHandler={() => onClickHandler(articul)}
        />
      </div>
    </li>
  )
}

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   articul: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
//   imgSrc: PropTypes.string,
//   onClickHandler: PropTypes.func.isRequired,
//   changeFavouriteHandler: PropTypes.func.isRequired,
//   isFavourite: PropTypes.bool,
// }

Card.defaultProps = {
  imgSrc: '',
  isFavourite: false,
}
export default Card
