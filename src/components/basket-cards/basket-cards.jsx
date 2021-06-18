import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, getNumberWithSpaces } from '../../utils/utils';
import { CountOperation } from '../../const';
import { getGuitarBasket } from '../../store/selectors';
import GuitarInfo from '../guitar-info/guitar-info';
import {
  changeCurrentGuitarBasket,
  changePopupFlag,
  changeGuitarCount,
} from '../../store/actions';
import { ReactComponent as CloseIcon } from '../../img/close.svg';
import { ReactComponent as PlusIcon } from '../../img/plus.svg';
import { ReactComponent as MinusIcon } from '../../img/minus.svg';

const BasketCards = () => {
  const dispath = useDispatch();
  const guitars = useSelector(getGuitarBasket);

  const handlDeleteButtonClick = (guitar) => {
    dispath(changeCurrentGuitarBasket(guitar));
    dispath(changePopupFlag(true));
  };

  const handlIncrementButtonClick = (guitar) => {
    dispath(
      changeGuitarCount(changeCount(guitars, guitar, CountOperation.INCREMENT))
    );
  };

  const handlDecrementButtonClick = (guitar) => {
    dispath(changeCurrentGuitarBasket(guitar));
    if (guitar.count === 1) {
      dispath(changePopupFlag(true));
      return;
    }

    dispath(
      changeGuitarCount(changeCount(guitars, guitar, CountOperation.DECREMENT))
    );
  };

  return (
    <div className="basket__cards">
      {guitars.map((item, index) => (
        <article key={`${item.code}-${index}`} className="card-basket">
          <button
            className="card-basket__button-delete"
            type="button"
            onClick={() => handlDeleteButtonClick(item)}
          >
            <CloseIcon />
          </button>
          <GuitarInfo guitar={item} className="card-basket__info" />
          <p className="card-basket__price">
            {getNumberWithSpaces(item.price)} ₽
          </p>
          <div className="card-basket__buttons">
            <button
              className="card-basket__button card-basket__button--decrement"
              type="button"
              aria-label="Убавить количество"
              onClick={() => handlDecrementButtonClick(item)}
            >
              <MinusIcon />
            </button>

            <p className="card-basket__amount">{item.count}</p>
            <button
              className="card-basket__button card-basket__button--increment"
              type="button"
              aria-label="Добавить количество"
              onClick={() => handlIncrementButtonClick(item)}
            >
              <PlusIcon />
            </button>
          </div>
          <p className="card-basket__order-price">
            {getNumberWithSpaces(item.amountPrice)} ₽
          </p>
        </article>
      ))}
    </div>
  );
};

export default BasketCards;
