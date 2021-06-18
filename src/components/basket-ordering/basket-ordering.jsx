import React, { createRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getTotalPrice,
  getPromoDiscount,
  getNumberWithSpaces,
} from '../../utils/utils';
import { getGuitarBasket } from '../../store/selectors';
import { PromoCode } from '../../const';

const BasketOrdering = () => {
  const guitars = useSelector(getGuitarBasket);

  const promoCodeRef = createRef();
  const [promoCode, setPromoCode] = useState(``);
  const [isValidPromoCode, setIsValidPromoCode] = useState(true);

  const handlApplayButtonClick = () => {
    const currentPromoCode = promoCodeRef.current.value;
    const isValid = Boolean(PromoCode[currentPromoCode]);
    setIsValidPromoCode(isValid);
    setPromoCode(currentPromoCode);
  };

  const totalPrice = getTotalPrice(guitars);
  const totalPriceWithDiscount = getPromoDiscount(promoCode, totalPrice);

  return (
    <div className="basket__order">
      <div className="basket__promo">
        <h3 className="basket__promo-header">Промокод на скидку</h3>
        <p className="basket__promo-text">
          Введите свой промокод, если он у вас есть.
        </p>
        <div className="basket__promo-input-wrapper">
          <label htmlFor="promo-input" className="visually-hidden">
            Промокод
          </label>
          <input
            ref={promoCodeRef}
            className="basket__promo-input"
            type="text"
            name="promo-input"
            id="promo-input"
          />
          <span className="basket__promo-error">
            {!isValidPromoCode &&
              promoCode !== `` &&
              `Промокод не действителен`}
          </span>
          <button
            className="basket__promo-button button"
            type="button"
            onClick={handlApplayButtonClick}
          >
            Применить купон
          </button>
        </div>
      </div>
      <div className="basket__total">
        <p className="basket__total-price">
          Всего: {getNumberWithSpaces(totalPriceWithDiscount)} ₽
        </p>
        <button
          className="basket__total-button button button--orange"
          type="button"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default BasketOrdering;
