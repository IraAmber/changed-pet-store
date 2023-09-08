import PropTypes from 'prop-types';  // Імпорт PropTypes для визначення типів пропсів
import styles from './CheckoutList.module.scss';  // Імпорт стилів для компоненту
import CardInCart from '../CardInCart/CardInCart';  // Імпорт компоненту CardInCart

// Компонент CheckoutList, який відображає список товарів для перевірки (без модального вікна)
const CheckoutList = ({ cards }) => {
    // Мапимо кожну картку на компонент CardInCart, при цьому вимикаємо деяку функціональність
    let cardsComponents = cards.map(({ title, price, articul, imgSrc, color }) => {
        return (
            <CardInCart key={articul}
                title={title}
                price={price}
                color={color}
                articul={articul}
                hasQuantityBtns={false} // Вимикаємо кнопки збільшення/зменшення кількості товарів
                hasTrashIcon={false}   // Вимикаємо іконку видалення товару
                isPriceShow={false}    // Вимикаємо відображення ціни
                orderModalStyles={false} // Вимикаємо будь-які модальні стилі
            />
        )
    });

    // Повертаємо список товарів для перевірки
    return (
        <ul className={styles.products}>
            {cardsComponents}
        </ul>
    );
};

// Визначення типів пропсів для компонента CheckoutList
CheckoutList.propTypes = {
    cards: PropTypes.array, // Масив карток для відображення
}

// Значення за замовчуванням для пропсів компонента CheckoutList
CheckoutList.defaultProps = {
    cards: [], // Пустий масив карток за замовчуванням
}

export default CheckoutList;  // Експорт компонента CheckoutList
